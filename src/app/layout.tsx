import type { Metadata } from "next";
import "@/styles/globals.css";
import ApollosProvider from "@/providers/apollo-provider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `PTE | %s`,
  },
  description: siteConfig.description,
  creator: siteConfig.creator,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`antialiased !bg-[#f8f4f2] !text-[#424242] text-base`}>
          <ApollosProvider>
          {children}
          </ApollosProvider>
      </body>
    </html>
  );
}
