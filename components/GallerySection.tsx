"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const categories = [
  "All",
  "Clinic",
  "Treatment Sessions",
  "Equipment",
  "Patient Recovery",
  "Facilities",
];

const galleryImages = [
  {
    src: "/images/gallery-clinic.png",
    alt: "Static Physio clinic reception",
    category: "Clinic",
  },
  {
    src: "/images/gallery-treatment1.png",
    alt: "Electrotherapy treatment session",
    category: "Treatment Sessions",
  },
  {
    src: "/images/gallery-equipment.png",
    alt: "Modern rehabilitation equipment",
    category: "Equipment",
  },
  {
    src: "/images/gallery-recovery.png",
    alt: "Patient recovery exercise",
    category: "Patient Recovery",
  },
  {
    src: "/images/gallery-facility.png",
    alt: "Treatment room facilities",
    category: "Facilities",
  },
  {
    src: "/images/gallery-treatment2.png",
    alt: "Manual therapy session",
    category: "Treatment Sessions",
  },
  {
    src: "/images/hero.png",
    alt: "Physiotherapy consultation",
    category: "Clinic",
  },
  {
    src: "/images/home-treatment.png",
    alt: "Guided rehabilitation session",
    category: "Patient Recovery",
  },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Gallery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            Take a look at our state-of-the-art facilities and treatment
            sessions.
          </p>
        </ScrollAnimationWrapper>



        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src + activeCategory}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer ${
                  index === 0 || index === 5
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
                onClick={() => setLightboxImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 || index === 5
                      ? "h-[100px] sm:h-full"
                      : "h-[100px] sm:h-[250px]"
                  }`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {image.category}
                      </p>
                      <p className="text-white/70 text-xs">{image.alt}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} className="text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
            >
              <Image
                src={lightboxImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
