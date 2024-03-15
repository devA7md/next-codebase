import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales: string[] = ["en"];
export const localePrefix = "never";

export const { Link, redirect, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });
