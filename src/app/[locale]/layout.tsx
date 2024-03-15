import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";

import "@/lib/theme/index.css";
import RootProviders from "../root-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App title here",
  description: "Add some description",
};

export default function RootLocaledLayout({
  children,
  params: { locale },
}: React.PropsWithChildren<{ params: { locale: string } }>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <RootProviders>{children}</RootProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
