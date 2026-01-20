"use client";

import { ReactNode } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function ContentWrapper({ children }: { children: ReactNode }) {
  const { language } = useLanguage();

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={language === "ar" ? "rtl-content" : "ltr-content"}
    >
      {children}
    </div>
  );
}
