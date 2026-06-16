"use client";

import { User } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const teamMembers = [
  { name: "Dr. Santhana krishnan", qualifications: "BPT, MIAP" },
  { name: "Dr. Arun kumar", qualifications: "BPT" },
  { name: "Dr. Jeeva", qualifications: "BPT" },
  { name: "Dr. Keerthiazhagan", qualifications: "BPT" },
  { name: "Dr. Tamil selvan", qualifications: "BPT" },
  { name: "Dr. Sathya", qualifications: "BPT" },
  { name: "Dr. Thirumoorthy", qualifications: "BPT" },
  { name: "Dr. Abinash", qualifications: "BPT" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Meet Our Experts
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            Dedicated professionals committed to your recovery and well-being.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <ScrollAnimationWrapper
              key={member.name}
              delay={index * 0.1}
              className="group"
            >
              <div className="bg-section-bg rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 text-center h-full flex flex-col items-center">
                {/* Image Placeholder */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <User size={48} className="text-primary/40" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.qualifications}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
