"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "No: 6/1, Ethiraj St, Padmanabha Nagar, Choolaimedu, Chennai, Tamil Nadu 600094",
    href: "https://www.google.com/maps/place/Static+Physio+and+Rehab+Center/@13.0605043,80.2130353,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267005849ecbf:0x63d927d7a3c2cdd2!8m2!3d13.0604991!4d80.2156102!16s%2Fg%2F11npt4mndb",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 95660 71830",
    href: "tel:+919566071830",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@staticphysio.com",
    href: "mailto:info@staticphysio.com",
  },
  {
    icon: Clock,
    label: "Timings",
    value: "Mon – Sat: 9:30 AM – 2 PM, 5 – 9 PM\nSunday: Holiday",
  },
];

const treatmentOptions = [
  "Select Treatment",
  "Sports Injury Rehabilitation",
  "Orthopedic Physiotherapy",
  "Post Surgical Rehabilitation",
  "Neurological Rehabilitation",
  "Manual Therapy",
  "Pain Management",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello! I'd like to book a consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nTreatment: ${formData.treatment}\nMessage: ${formData.message}`;
    window.location.href = `https://wa.me/919566071830?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimationWrapper className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            We&apos;re Here to{" "}
            <span className="gradient-text">Help You</span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto">
            Ready to start your recovery journey? Contact us to book a
            consultation or visit our clinic.
          </p>
        </ScrollAnimationWrapper>

        {/* Map — full-width rectangle extending from left */}
        <ScrollAnimationWrapper className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.651!2d80.2156102!3d13.0604991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267005849ecbf%3A0x63d927d7a3c2cdd2!2sStatic%20Physio%20and%20Rehab%20Center!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Static Physio and Rehab Center location"
              className="w-full h-[300px] sm:h-[450px]"
            />
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <ScrollAnimationWrapper
            variant="fadeLeft"
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {/* Clinic Name */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  STATIC PHYSIO AND REHAB CENTER
                </h3>
                <p className="text-sm text-text-secondary">
                  Your trusted physiotherapy partner
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wide mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.external ? "_blank" : undefined}
                          rel={info.external ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-text-primary whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social / WhatsApp CTA */}
              <div className="pt-4">
                <a
                  href="https://wa.me/919566071830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right - Form */}
          <ScrollAnimationWrapper
            variant="fadeRight"
            delay={0.2}
            className="lg:col-span-3"
          >
            <div>
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6 lg:p-8 border border-border/30"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-sm bg-section-bg border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 text-sm bg-section-bg border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm bg-section-bg border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="treatment"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5"
                    >
                      Treatment Required
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-section-bg border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-primary appearance-none"
                    >
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt === "Select Treatment" ? "" : opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your condition or any specific requirements..."
                    className="w-full px-4 py-3 text-sm bg-section-bg border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-green-500/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
