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
      "Best orthopaedic physiotherapy in Choolaimedu for joint pain, muscle, and bone problems with expert recovery programs.",
    icon: Bone,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Sports Injury Management",
    description:
      "Professional sports injury treatment in Choolaimedu for sprains, strains, and athletic performance enhancement.",
    icon: Dumbbell,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Post-operative Rehabilitation",
    description:
      "Expert post-surgery recovery programs in Choolaimedu for faster healing and strength restoration.",
    icon: HeartPulse,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Neck & Back Pain Treatment",
    description:
      "Specialized neck and back pain therapy in Choolaimedu clinic for lasting relief and mobility improvement.",
    icon: Bone,
    gradient: "from-primary to-accent",
  },
  {
    title: "Knee Pain & Arthritis Care",
    description:
      "Expert knee pain and arthritis treatment in Choolaimedu with proven physiotherapy techniques.",
    icon: Hand,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Shoulder Rehabilitation",
    description:
      "Targeted shoulder injury therapy in Choolaimedu for complete mobility and function restoration.",
    icon: Shield,
    gradient: "from-secondary to-primary",
  },
  {
    title: "Neurological Physiotherapy",
    description:
      "Advanced neurological therapy in Choolaimedu for stroke, paralysis, and balance disorder recovery.",
    icon: Brain,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Pediatric Physiotherapy",
    description:
      "Specialized pediatric physical therapy in Choolaimedu for children's development and rehabilitation.",
    icon: HeartPulse,
    gradient: "from-secondary to-accent",
  },
  {
    title: "Geriatric Physiotherapy",
    description:
      "Senior physiotherapy care in Choolaimedu to improve mobility, balance, and quality of life.",
    icon: Shield,
    gradient: "from-accent to-[#0D8DAA]",
  },
  {
    title: "Dry Needling & Manual Therapy",
    description:
      "Advanced dry needling and manual therapy in Choolaimedu for pain relief and rapid recovery.",
    icon: Hand,
    gradient: "from-primary to-accent",
  },
  {
    title: "Electrotherapy & TENS",
    description:
      "Modern electrotherapy, ultrasound, and TENS treatment in Choolaimedu for effective pain management.",
    icon: Dumbbell,
    gradient: "from-[#0D8DAA] to-primary",
  },
  {
    title: "Posture Correction & Ergonomic Advice",
    description:
      "Professional posture correction and workplace ergonomic guidance in Choolaimedu clinic.",
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
              <div className="group relative bg-white rounded-[20px] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-400 hover:-translate-y-2 border border-border/50 overflow-hidden cursor-pointer flex gap-4">
                {/* Background decoration on hover */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
                >
                  <service.icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
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
      </div>
    </section>
  );
}
