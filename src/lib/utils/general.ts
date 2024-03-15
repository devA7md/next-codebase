import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { appConfig } from "@/lib/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructEndpointUrl(path: string, queryParams: Record<string, string> = {}) {
  const refinedPath = path
    .split("/")
    .filter((segment) => segment)
    .join("/");

  let url = `${appConfig.baseApiUrl}/${refinedPath}`;

  const queryString = Object.keys(queryParams)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join("&");

  if (queryString) url = `${url}?${queryString}`;
  return url;
}
