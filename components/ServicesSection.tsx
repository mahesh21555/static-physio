"use client";

import {
  Dumbbell,
  Bone,
  HeartPulse,
  Brain,
  Hand,
  Shield,
} from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { StaggerContainer, StaggerItem } from "./ScrollAnimationWrapper";

const services = [
  {
    title: "Orthopaedic Rehabilitation",
    description:
      "Best orthopaedic physiotherapy for joint pain, muscle, and bone problems with expert recovery programs.",
    icon: Bone,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Sports Injury Management",
    description:
      "Professional sports injury treatment for sprains, strains, and athletic performance enhancement.",
    icon: Dumbbell,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Post-operative Rehabilitation",
    description:
      "Expert post-surgery recovery programs for faster healing and strength restoration.",
    icon: HeartPulse,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Neck & Back Pain Treatment",
    description:
      "Specialized neck and back pain therapy for lasting relief and mobility improvement.",
    icon: Bone,
    gradient: "from-primary to-accent",
  },
  {
    title: "Knee Pain & Arthritis Care",
    description:
      "Expert knee pain and arthritis treatment with proven physiotherapy techniques.",
    icon: Hand,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Shoulder Rehabilitation",
    description:
      "Targeted shoulder injury therapy for complete mobility and function restoration.",
    icon: Shield,
    gradient: "from-secondary to-primary",
  },
  {
    title: "Neurological Physiotherapy",
    description:
      "Advanced neurological therapy for stroke, paralysis, and balance disorder recovery.",
    icon: Brain,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Pediatric Physiotherapy",
    description:
      "Specialized pediatric physical therapy for children's development and rehabilitation.",
    icon: HeartPulse,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Geriatric Physiotherapy",
    description:
      "Senior physiotherapy care to improve mobility, balance, and quality of life.",
    icon: Shield,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Dry Needling & Manual Therapy",
    description:
      "Advanced dry needling and manual therapy for pain relief and rapid recovery.",
    icon: Hand,
    gradient: "from-primary to-accent",
  },
  {
    title: "Electrotherapy & TENS",
    description:
      "Modern electrotherapy, ultrasound, and TENS treatment for effective pain management.",
    icon: Dumbbell,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Posture Correction & Ergonomic Advice",
    description:
      "Professional posture correction and workplace ergonomic guidance.",
    icon: Brain,
    gradient: "from-secondary to-primary",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Best Physiotherapy Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Best Physio Clinic in Choolaimedu - Expert{" "}
            <span className="gradient-text">Physiotherapy & Rehabilitation</span>
          </h2>
          <p className="text-text-secondary text-base max-w-3xl mx-auto">
            Premier physiotherapy clinic in Choolaimedu offering comprehensive, evidence-based physical therapy services including orthopaedic rehabilitation, sports injury treatment, and post-operative recovery. Get the best physiotherapist in Choolaimedu for pain relief and faster healing.
          </p>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative bg-white rounded-2xl sm:rounded-[20px] p-4 sm:p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-400 hover:-translate-y-2 border border-border/50 overflow-hidden cursor-pointer flex gap-3 sm:gap-4 items-start">
                {/* Background decoration on hover */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                >
                  <service.icon className="w-5 h-5 sm:w-[26px] sm:h-[26px] text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Visit Clinic Button */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <ScrollAnimationWrapper>
            <a
              href="https://maps.app.goo.gl/iipoYhBZcEVJ4qqn6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 4v8l6 3" />
              </svg>
              Visit Our Clinic on Google Maps
            </a>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
