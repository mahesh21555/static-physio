import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STATIC PHYSIO AND REHAB CENTER | Best Physiotherapy Clinic in Chennai",
  description:
    "Expert physiotherapy, rehabilitation, sports injury treatment, pain management, orthopedic and neurological rehabilitation services in Chennai. Trusted by 1000+ patients.",
  keywords: [
    "Physiotherapy Chennai",
    "Rehabilitation Center Chennai",
    "Sports Injury Treatment",
    "Pain Management",
    "Physio Clinic Choolaimedu",
    "Static Physio and Rehab Center",
    "Orthopedic Physiotherapy",
    "Neurological Rehabilitation",
    "Post Surgical Rehabilitation",
    "Manual Therapy Chennai",
  ],
  openGraph: {
    title: "STATIC PHYSIO AND REHAB CENTER | Best Physiotherapy Clinic in Chennai",
    description:
      "Expert physiotherapy, rehabilitation, sports injury treatment, and personalized recovery programs in Chennai.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
