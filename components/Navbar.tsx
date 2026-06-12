"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BookingModal from "./BookingModal";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT US", href: "#about" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenBooking = () => setBookingOpen(true);
    window.addEventListener("openBookingModal", handleOpenBooking);
    return () => window.removeEventListener("openBookingModal", handleOpenBooking);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-effect shadow-lg border-b border-border/30"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group shrink-0">
              <Image
                src="/images/logo.png"
                alt="Static Physio Logo"
                width={56}
                height={56}
                priority
                className="h-14 w-auto object-contain shrink-0"
              />
              <Image
                src="/images/logo font.png"
                alt="Static Physio and Rehab Center"
                width={224}
                height={56}
                priority
                className="h-8 w-auto object-contain shrink-0"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-text-primary hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setBookingOpen(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle size={16} />
                BOOK APPOINTMENT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl transition-all duration-300 text-primary hover:bg-primary/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="Static Physio Logo"
                      width={64}
                      height={64}
                      className="h-12 w-auto object-contain shrink-0"
                    />
                    <Image
                      src="/images/logo font.png"
                      alt="Static Physio"
                      width={240}
                      height={60}
                      className="h-7 w-auto object-contain shrink-0"
                    />
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-text-secondary hover:bg-section-bg transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 py-6 px-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeSection === link.href.replace("#", "")
                            ? "text-primary bg-primary/5"
                            : "text-text-primary hover:text-primary hover:bg-section-bg"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-border">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setBookingOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full shadow-lg"
                  >
                    <MessageCircle size={16} />
                    BOOK APPOINTMENT
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
