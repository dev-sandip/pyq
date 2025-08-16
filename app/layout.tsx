import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Optimized fonts for educational content
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pyq.sandipsapkota.com"),

  title: {
    default: "IOE Past Year Questions - Enhanced Interface",
    template: "%s | IOE Past Year Questions",
  },

  description:
    "Access IOE (Institute of Engineering) past year question papers from all 8 semesters with enhanced UI. Electronics, Computer, and Civil engineering questions from Digital NCE Library.",

  keywords: [
    "IOE past year questions",
    "Institute of Engineering",
    "IOE question papers",
    "Engineering entrance exam",
    "Electronics engineering questions",
    "Computer engineering questions",
    "Civil engineering questions",
    "Digital NCE Library",
    "IOE exam preparation",
    "Nepal engineering questions",
    "IOE semester questions",
    "Engineering study materials",
  ],

  authors: [{ name: "Sandip Sapkota", url: "https://sandipsapkota.com" }],

  creator: "Sandip Sapkota",
  publisher: "Sandip Sapkota",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pyq.sandipsapkota.com",
    siteName: "IOE Past Year Questions",
    title: "IOE Past Year Questions - Enhanced Interface",
    description:
      "Access IOE past year question papers from all 8 semesters with enhanced UI. Complete collection of Electronics, Computer, and Civil engineering questions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IOE Past Year Questions - Enhanced Interface",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@sandipsapkota", // Replace with actual Twitter handle
    creator: "@sandipsapkota",
    title: "IOE Past Year Questions - Enhanced Interface",
    description:
      "Access IOE past year question papers with enhanced UI. Complete collection from Digital NCE Library.",
    images: ["/og-twitter.jpg"],
  },
  alternates: {
    canonical: "https://pyq.sandipsapkota.com",
  },
  category: "Education",
  classification: "Educational Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://drive.google.com" />
        <link rel="preconnect" href="https://digitalnce.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.country" content="Nepal" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "IOE Past Year Questions",
              description:
                "Enhanced interface for IOE past year question papers from Digital NCE Library",
              url: "https://pyq.sandipsapkota.com",
              author: {
                "@type": "Person",
                name: "Sandip Sapkota",
                url: "https://sandipsapkota.com",
              },
              publisher: {
                "@type": "Person",
                name: "Sandip Sapkota",
              },
              inLanguage: "en-US",
            
            }),
          }}
        />

        {/* Educational Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "IOE Past Year Questions",
              description:
                "Collection of Institute of Engineering past year question papers",
              url: "https://pyq.sandipsapkota.com",
              sameAs: ["https://digitalnce.com"],
              educationalCredentialAwarded: "Engineering Question Papers",
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "IOE Past Year Questions",
                description:
                  "Comprehensive collection of IOE question papers for all semesters",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-gray-50 text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div id="main-content" className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
