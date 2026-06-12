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
    title: "Sports Injury Rehabilitation",
    description:
      "Specialized treatment for sports injuries, sprains, and performance enhancement.",
    icon: Dumbbell,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Orthopedic Physiotherapy",
    description:
      "Treatment for joint pain, muscle, bone problems and posture correction.",
    icon: Bone,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Post Surgical Rehabilitation",
    description:
      "Personalized recovery programs after surgery for faster healing and strength.",
    icon: HeartPulse,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Neurological Rehabilitation",
    description:
      "Therapy for neurological conditions like stroke, paralysis, and balance disorders.",
    icon: Brain,
    gradient: "from-primary to-accent",
  },
  {
    title: "Manual Therapy",
    description:
      "Hands-on techniques to reduce pain, improve mobility and restore function.",
    icon: Hand,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Pain Management",
    description:
      "Advanced pain relief techniques for chronic pain and injury recovery.",
    icon: Shield,
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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
