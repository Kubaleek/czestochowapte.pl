import type { Metadata } from "next";
import "../styles/globals.css";
import ApollosProvider from "@/providers/apollo-provider";
import CookiesAccept from "@/components/cookies";

export const metadata: Metadata = {
  title: "Polskie Towarzystwo Ekonomiczne",
  openGraph: {
    title: "Polskie Towarzystwo Ekonomiczne",
    url: "http://www.pte.pl",
    siteName: "PTE",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`antialiased !bg-[#f8f4f2] !text-[#424242]  text-base`}
      >
        <ApollosProvider>
          {children}
        </ApollosProvider>
        <CookiesAccept />
      </body>
    </html>
  );
}
