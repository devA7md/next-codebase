import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { validateUserSession } from "./lib/auth/session";
import { localePrefix, locales } from "./navigation";

const PUBLIC_ROUTES = ["/login", "/register", "/forgot-password", "/reset-password"];

const handleI18nRouting = createIntlMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
});

function isPublicRoute(locales: string[], pathname: string) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${PUBLIC_ROUTES.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i",
  );
  return publicPathnameRegex.test(pathname);
}

export async function middleware(request: NextRequest) {
  console.log("middle ware is ran!");

  const isValidSession = await validateUserSession();

  if (isPublicRoute(locales, request.nextUrl.pathname)) {
    if (isValidSession) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (!isValidSession) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
