import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickContactStrip from "@/components/QuickContactStrip";
import HomeSection from "@/components/HomeSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  // JSON-LD Structured Data for Local Business & Organization
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "PhysicalTherapyClinic"],
    "@id": "https://staticphysio.com",
    name: "STATIC PHYSIO AND REHAB CENTER",
    description:
      "Best physiotherapy clinic in Choolaimedu, Chennai offering expert rehabilitation, orthopaedic therapy, sports injury treatment, and pain management services.",
    url: "https://staticphysio.com",
    telephone: "+91-XXXXXXXXXX",
    email: "contact@staticphysio.com",
    image: "https://staticphysio.com/images/clinic.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Choolaimedu, Chennai",
      addressLocality: "Choolaimedu",
      addressRegion: "Tamil Nadu",
      postalCode: "600094",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0440",
      longitude: "80.2471",
      description: "Physiotherapy clinic 5km from Choolaimedu center",
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
      description: "Choolaimedu and surrounding areas within 5km radius",
    },
    priceRange: "₹₹",
    medicalSpecialty: [
      "Orthopedic Rehabilitation",
      "Sports Medicine",
      "Neurological Rehabilitation",
      "Physical Therapy",
      "Pain Management",
    ],
    knowsAbout: [
      "Physiotherapy",
      "Rehabilitation",
      "Orthopedic Treatment",
      "Sports Injury Management",
      "Post-operative Recovery",
      "Neurological Therapy",
      "Manual Therapy",
      "Electrotherapy",
    ],
    sameAs: [
      "https://www.facebook.com/staticphysio",
      "https://www.instagram.com/staticphysio",
      "https://www.youtube.com/@staticphysio",
      "https://www.google.com/maps/place/STATIC+PHYSIO+Choolaimedu",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "250",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Best physiotherapy clinic in Choolaimedu. Professional team and excellent service.",
        author: {
          "@type": "Person",
          name: "Patient",
        },
        datePublished: "2024-01-15",
      },
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "STATIC PHYSIO AND REHAB CENTER",
    url: "https://staticphysio.com",
    hasOfferingDetails: [
      {
        "@type": "Offer",
        name: "Orthopedic Rehabilitation in Choolaimedu",
        description:
          "Best orthopaedic physiotherapy for joint pain and bone problems",
        areaServed: "Choolaimedu, Chennai",
      },
      {
        "@type": "Offer",
        name: "Sports Injury Treatment in Choolaimedu",
        description: "Professional sports injury management and recovery",
        areaServed: "Choolaimedu, Chennai",
      },
      {
        "@type": "Offer",
        name: "Post-operative Rehabilitation in Choolaimedu",
        description: "Expert post-surgery recovery programs",
        areaServed: "Choolaimedu, Chennai",
      },
    ],
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />
      <HeroSection />
      <QuickContactStrip />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <WhyChooseUs />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
