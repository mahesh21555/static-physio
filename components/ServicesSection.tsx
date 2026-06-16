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
      "Specialized treatment for joint pain, muscle, and bone problems.",
    icon: Bone,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Sports Injury Management",
    description:
      "Treatment for sports injuries, sprains, and performance enhancement.",
    icon: Dumbbell,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Post-operative Rehabilitation",
    description:
      "Personalized recovery programs after surgery for faster healing.",
    icon: HeartPulse,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Neck & Back Pain Treatment",
    description:
      "Specialized therapy for neck and back pain relief and recovery.",
    icon: Bone,
    gradient: "from-primary to-accent",
  },
  {
    title: "Knee Pain & Arthritis Care",
    description:
      "Comprehensive treatment for knee pain and arthritis management.",
    icon: Hand,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Shoulder Rehabilitation",
    description:
      "Targeted therapy for shoulder injuries and mobility restoration.",
    icon: Shield,
    gradient: "from-secondary to-primary",
  },
  {
    title: "Neurological Physiotherapy",
    description:
      "Therapy for neurological conditions and balance disorders.",
    icon: Brain,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Pediatric Physiotherapy",
    description:
      "Specialized care for children's physical development and recovery.",
    icon: HeartPulse,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Geriatric Physiotherapy",
    description:
      "Customized therapy for seniors to improve mobility and independence.",
    icon: Shield,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Dry Needling & Manual Therapy",
    description:
      "Advanced techniques to reduce pain and improve mobility.",
    icon: Hand,
    gradient: "from-primary to-accent",
  },
  {
    title: "Electrotherapy",
    description:
      "IPT, TENS, Ultrasound, Traction for pain relief and healing.",
    icon: Dumbbell,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Posture Correction & Ergonomic Advice",
    description:
      "Professional guidance for better posture and workplace ergonomics.",
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
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Comprehensive Physiotherapy &{" "}
            <span className="gradient-text">Rehabilitation Solutions</span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            We offer a wide range of evidence-based physiotherapy services to
            help you recover faster and live a pain-free life.
          </p>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group relative bg-white rounded-[20px] p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-400 hover:-translate-y-2 border border-border/50 overflow-hidden cursor-pointer">
                {/* Background decoration on hover */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <service.icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
