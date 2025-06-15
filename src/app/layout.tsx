import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageWrapper } from "@/widgets/page-wrapper";
import "../system/css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News",
  description: "News description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-screen" lang="ru">
      <body
        className={`h-full ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
