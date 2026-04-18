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
  title: {
    default: "Softiqo Technologies - Custom Software Development & Digital Solutions",
    template: "%s | Softiqo Technologies"
  },
  description: "Softiqo Technologies builds custom software, cloud platforms, and digital products for modern businesses. We help startups, scale-ups, and enterprises turn bold ideas into polished software solutions.",
  keywords: ["software development", "custom software", "web development", "mobile apps", "cloud solutions", "digital products", "product design", "DevOps", "technology consulting"],
  authors: [{ name: "Softiqo Technologies" }],
  creator: "Softiqo Technologies",
  publisher: "Softiqo Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://softiqo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softiqo.com',
    title: 'Softiqo Technologies - Custom Software Development & Digital Solutions',
    description: 'Softiqo Technologies builds custom software, cloud platforms, and digital products for modern businesses. We help startups, scale-ups, and enterprises turn bold ideas into polished software solutions.',
    siteName: 'Softiqo Technologies',
    images: [
      {
        url: '/images/softiqo_logo.png',
        width: 1200,
        height: 630,
        alt: 'Softiqo Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softiqo Technologies - Custom Software Development & Digital Solutions',
    description: 'Softiqo Technologies builds custom software, cloud platforms, and digital products for modern businesses.',
    images: ['/images/softiqo_logo.png'],
    creator: '@softiqotech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/softiqo_logo.png",
    shortcut: "/images/softiqo_logo.png",
    apple: "/images/softiqo_logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Softiqo Technologies",
    url: "https://softiqo.com",
    logo: "https://softiqo.com/images/softiqo_logo.png",
    description: "Softiqo Technologies builds custom software, cloud platforms, and digital products for modern businesses.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      email: "info@softiqo.com"
    },
    sameAs: [
      "https://twitter.com/softiqotech",
      "https://linkedin.com/company/softiqo-technologies"
    ],
    serviceType: ["Software Development", "Cloud Solutions", "Digital Product Design", "DevOps"],
    areaServed: "Worldwide"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full bg-[color:var(--background)] text-[color:var(--foreground)] antialiased pt-20">
        <MainHeader />
        <div className="min-h-screen bg-[color:var(--surface)]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
