"use client";

import { ReactNode } from "react";
import Navbar from "./header";
import Footer from "./footer";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ContentWrapper } from "./ContentWrapper";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LanguageProvider>
  );
}
