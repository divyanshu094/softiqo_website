import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/MainHeader";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softiqo Technologies",
  description:
    "Softiqo Technologies builds custom software, cloud platforms, and digital products for modern businesses.",
  icons: {
    icon: "/images/softiqo_logo.png",
    shortcut: "/images/softiqo_logo.png",
    apple: "/images/softiqo_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)] antialiased pt-20">
        <MainHeader />
        <div className="min-h-screen bg-[color:var(--surface)]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
