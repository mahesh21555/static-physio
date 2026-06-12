"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

const floatingCards = [
  { text: "Experienced Therapists", icon: "👨‍⚕️", delay: 0.8 },
  { text: "Personalized Treatment", icon: "📋", delay: 1.0 },
  { text: "Advanced Rehabilitation", icon: "🏥", delay: 1.2 },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Static+Physio+and+Rehab+Center/@13.0605043,80.2130353,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267005849ecbf:0x63d927d7a3c2cdd2!8m2!3d13.0604991!4d80.2156102!16s%2Fg%2F11npt4mndb?entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Subtle decorative blurs — no dots */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="text-primary">
                Trusted Physiotherapy Clinic in Chennai
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 text-text-primary"
            >
              Move Better.
              <br />
              Recover Faster.
              <br />
              <span className="relative">
                Live{" "}
                <span className="text-accent relative">
                  Pain-Free.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C40 2 80 2 100 6C120 10 160 4 198 8"
                      stroke="#19A7CE"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg"
            >
              Expert Physiotherapy, Rehabilitation and Personalized Recovery
              Programs designed to restore mobility and improve quality of life.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event("openBookingModal"));
                }}
                className="group flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle size={18} />
                Book Appointment
              </button>
              <a
                href="#services"
                className="group flex items-center gap-2 px-8 py-3.5 bg-primary/5 hover:bg-primary/10 border border-primary/15 text-primary font-semibold text-sm rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* Visit Our Clinic link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-300"
              >
                <MapPin size={16} className="text-accent" />
                Visit Our Clinic
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/15">
                <Image
                  src="/images/hero.png"
                  alt="Professional physiotherapist helping a patient with rehabilitation"
                  width={600}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: card.delay }}
                className={`hidden lg:flex absolute z-20 bg-white backdrop-blur-md rounded-2xl shadow-xl border border-border/50 px-4 py-3 items-center gap-3 ${
                  index === 0
                    ? "top-8 -right-2 lg:right-[-20px]"
                    : index === 1
                    ? "top-1/2 -right-4 lg:right-[-30px] -translate-y-1/2"
                    : "bottom-12 -right-2 lg:right-[-20px]"
                }`}
                style={{ animation: `float 3s ease-in-out ${index * 0.5}s infinite` }}
              >
                <span className="text-xl">{card.icon}</span>
                <span className="text-sm font-semibold text-text-primary whitespace-nowrap">
                  {card.text}
                </span>
              </motion.div>
            ))}

            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent/20 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
