import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://staticphysio.com"),
  title: "Best Physiotherapy Clinic in Choolaimedu, Chennai | STATIC PHYSIO - Expert Rehab Center",
  description:
    "Premium physiotherapy clinic in Choolaimedu, Chennai offering expert orthopaedic rehabilitation, sports injury treatment, post-operative recovery, neurological therapy, and pain management. 5km from Choolaimedu center. Trusted by 1000+ patients for effective physical therapy.",
  keywords: [
    "Best physiotherapy clinic Choolaimedu",
    "Physio clinic near Choolaimedu",
    "Physiotherapy services Choolaimedu",
    "Rehabilitation center Choolaimedu Chennai",
    "Best physio doctor in Choolaimedu",
    "Orthopaedic physiotherapy Choolaimedu",
    "Sports injury treatment Choolaimedu",
    "Post-operative rehabilitation Choolaimedu",
    "Neck back pain treatment Choolaimedu",
    "Knee arthritis pain relief Choolaimedu",
    "Neurological physiotherapy Choolaimedu",
    "Dry needling manual therapy Choolaimedu",
    "Electrotherapy TENS Choolaimedu",
    "Physiotherapy clinic near me Chennai",
    "Premium physio clinic Choolaimedu",
    "STATIC PHYSIO AND REHAB CENTER",
    "Physiotherapy clinic 5km Choolaimedu",
    "Physical therapy Choolaimedu",
    "Best rehabilitation center Chennai",
    "Physiotherapy near Choolaimedu",
    "Professional physical therapists Choolaimedu",
    "Affordable physio clinic Choolaimedu",
  ],
  authors: [{ name: "STATIC PHYSIO AND REHAB CENTER" }],
  creator: "STATIC PHYSIO AND REHAB CENTER",
  publisher: "STATIC PHYSIO AND REHAB CENTER",
  openGraph: {
    title: "Best Physiotherapy Clinic in Choolaimedu | STATIC PHYSIO Rehab Center Chennai",
    description:
      "Expert physiotherapy and rehabilitation services in Choolaimedu, Chennai. Specializing in orthopaedic, sports injury, post-operative rehabilitation and pain management. Premium clinic within 5km of Choolaimedu.",
    type: "website",
    locale: "en_IN",
    url: "https://staticphysio.com",
    siteName: "STATIC PHYSIO AND REHAB CENTER",
    images: [
      {
        url: "/images/clinic.jpg",
        width: 1200,
        height: 630,
        alt: "STATIC PHYSIO - Best Physio Clinic in Choolaimedu",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Physio Clinic in Choolaimedu | STATIC PHYSIO",
    description: "Premium physiotherapy and rehabilitation services in Choolaimedu, Chennai.",
    images: ["/images/clinic.jpg"],
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://staticphysio.com",
  },
  verification: {
    google: "your-google-site-verification-code", // Add your Google verification code
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "STATIC PHYSIO - Best Physio Clinic Choolaimedu",
  },
  category: "Medical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-US" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="STATIC PHYSIO AND REHAB CENTER" />
        <meta name="geo.position" content="13.0440;80.2471" />
        <meta name="geo.placename" content="Choolaimedu, Chennai" />
        <meta name="geo.region" content="IN-TN" />
        <meta property="og:site_name" content="STATIC PHYSIO AND REHAB CENTER" />
        <meta property="og:type" content="website" />
        <meta name="application-name" content="STATIC PHYSIO" />
        <meta name="apple-mobile-web-app-title" content="STATIC PHYSIO" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href="https://staticphysio.com" />
      </head>
      <body className="min-h-full flex flex-col w-full overflow-x-hidden bg-white">{children}</body>
    </html>
  );
}
