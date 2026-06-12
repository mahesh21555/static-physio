"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Users, Star, BookOpen, Heart } from "lucide-react";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const stats = [
  { number: 1000, suffix: "+", label: "Patients Treated", icon: Users },
  { number: 98, suffix: "%", label: "Patient Satisfaction", icon: Star },
  { number: 10, suffix: "+", label: "Treatment Programs", icon: BookOpen },
  { number: 100, suffix: "%", label: "Personalized Care", icon: Heart },
];

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <ScrollAnimationWrapper variant="fadeLeft">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
                About Static Physio
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 leading-tight">
                Dedicated to Your{" "}
                <span className="gradient-text">
                  Recovery & Wellbeing
                </span>
              </h2>

              <p className="text-text-secondary text-base leading-relaxed mb-8">
                We are dedicated to helping patients regain strength, mobility,
                and independence through evidence-based physiotherapy and
                rehabilitation programs. Our mission is to provide
                compassionate, effective, and personalized care that improves
                quality of life.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </ScrollAnimationWrapper>

          {/* Right - Image + Stats */}
          <ScrollAnimationWrapper variant="fadeRight" delay={0.2}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about.png"
                  alt="About Static Physio and Rehab Center"
                  width={600}
                  height={400}
                  className="w-full h-[350px] lg:h-[400px] object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/5 rounded-3xl -z-10" />
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Statistics Row */}
        <ScrollAnimationWrapper delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group text-center p-6 bg-section-bg rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <stat.icon size={22} className="text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
