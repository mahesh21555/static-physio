"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = [
  "Advanced Physiotherapy",
  "Pain Management",
  "Sports Rehabilitation",
  "Post-Surgical Recovery",
  "Neurological Rehabilitation",
];

export default function HomeSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <ScrollAnimationWrapper variant="fadeLeft">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/home-treatment.png"
                  alt="Physiotherapy treatment session"
                  width={600}
                  height={450}
                  className="w-full h-[350px] lg:h-[450px] object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/15 rounded-2xl -z-10" />

              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    ✓
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">
                    Trusted Center
                  </p>
                  <p className="text-xs text-text-secondary">
                    Evidence-Based Practice
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right - Content */}
          <ScrollAnimationWrapper variant="fadeRight" delay={0.2}>
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
                Welcome to Static Physio
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
                Your Trusted{" "}
                <span className="gradient-text">Physiotherapy Partner</span>
              </h2>

              <p className="text-text-secondary text-base leading-relaxed mb-8">
                At STATIC PHYSIO AND REHAB CENTER, we provide evidence-based
                physiotherapy treatments designed to reduce pain, improve
                mobility, and accelerate recovery. Our patient-first approach
                ensures personalized treatment plans tailored to every
                individual&apos;s needs.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2
                        size={15}
                        className="text-accent"
                      />
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
