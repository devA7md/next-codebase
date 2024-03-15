"use client";

import { useTranslations } from "next-intl";

export default function ShowErrors({ error }: { error: string | string[] | undefined }) {
  const t = useTranslations();

  if (typeof error === "string") return <p className="text-xs text-destructive">{t(error)}</p>;
  if (Array.isArray(error)) {
    return (
      <div className="space-y-1">
        {error.map((e) => (
          <p key={e} className="text-xs text-destructive ">
            {t(e)}
          </p>
        ))}
      </div>
    );
  }
  return null;
}
