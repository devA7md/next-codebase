"use client";

import { PropsWithChildren } from "react";

import ThemeProvider from "@/lib/theme/theme-provider";

export default function RootProviders({ children }: PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
