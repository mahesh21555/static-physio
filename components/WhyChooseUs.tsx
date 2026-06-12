"use client";

import {
  Award,
  ClipboardList,
  FlaskConical,
  MonitorSmartphone,
  HeartHandshake,
  Building2,
} from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { StaggerContainer, StaggerItem } from "./ScrollAnimationWrapper";

const reasons = [
  {
    title: "Experienced Physiotherapists",
    description:
      "Highly qualified and experienced professionals dedicated to your recovery.",
    icon: Award,
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "Customized treatment plans tailored to your unique needs.",
    icon: ClipboardList,
  },
  {
    title: "Evidence-Based Practice",
    description:
      "Latest research and proven techniques to optimize treatment.",
    icon: FlaskConical,
  },
  {
    title: "Modern Rehabilitation",
    description:
      "Advanced equipment and techniques for faster recovery.",
    icon: MonitorSmartphone,
  },
  {
    title: "Patient-Centered Care",
    description:
      "Your comfort and recovery are our top priorities.",
    icon: HeartHandshake,
  },
  {
    title: "Comfortable Environment",
    description:
      "Clean, safe and supportive environment for healing.",
    icon: Building2,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Why{" "}
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            We are committed to providing the highest quality physiotherapy
            and rehabilitation services for every patient.
          </p>
        </ScrollAnimationWrapper>

        {/* Features Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all duration-300 border border-border/30">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <reason.icon
                    size={26}
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
