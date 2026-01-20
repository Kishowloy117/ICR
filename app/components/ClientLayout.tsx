"use client";

import { ReactNode, useEffect } from "react";
import Navbar from "./header";
import Footer from "./footer";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
import { ContentWrapper } from "./ContentWrapper";

function LayoutContent({ children }: { children: ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
