"use client";

import { MessageCircle, Phone, MapPin, ChevronRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./ScrollAnimationWrapper";

const contactCards = [
  {
    title: "WhatsApp",
    subtitle: "Chat with us now",
    detail: "+91 74486 44377",
    icon: MessageCircle,
    href: "https://wa.me/917448644377",
    gradient: "from-[#25D366] to-[#128C7E]",
    shadowColor: "shadow-[#25D366]/20",
  },
  {
    title: "Call Us",
    subtitle: "Speak to our expert",
    detail: "+91 74486 44377",
    icon: Phone,
    href: "tel:+917448644377",
    gradient: "from-primary to-secondary",
    shadowColor: "shadow-primary/20",
  },
  {
    title: "Location",
    subtitle: "Visit our clinic",
    detail: "Static Physio Choolaimedu",
    icon: MapPin,
    href: "https://maps.app.goo.gl/tLkAQRWXu2E8FDkZ9",
    gradient: "from-accent to-[#0D8DAA]",
    shadowColor: "shadow-accent/20",
  },
];

export default function QuickContactStrip() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 mb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          staggerDelay={0.15}
        >
          {contactCards.map((card) => (
            <StaggerItem key={card.title}>
              <a
                href={card.href}
                target={card.title === "Location" || card.title === "WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg ${card.shadowColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50`}
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {card.subtitle}
                  </p>
                  <p className="text-sm font-semibold text-primary mt-0.5">
                    {card.detail}
                  </p>
                </div>
                <ChevronRight
                  size={18}
                  className="text-text-secondary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
