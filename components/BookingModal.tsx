"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message with proper formatting
    let msg = `Hi! I'd like to book a consultation.\n\n`;
    msg += `*Name:* ${formData.name}\n`;
    msg += `*Phone:* ${formData.phone}\n`;
    msg += `*Treatment Required:* ${formData.treatment}\n`;
    if (formData.message.trim()) {
      msg += `*Additional Notes:* ${formData.message}\n`;
    }
    
    window.location.href = `https://wa.me/917448644377?text=${encodeURIComponent(msg)}`;
    onClose();
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          style={{ zIndex: 999999 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ direction: 'ltr' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50 bg-gradient-to-r from-section-bg to-section-bg/50 shrink-0">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary">
                  Book an Appointment
                </h3>
                <p className="text-xs text-text-secondary mt-1 font-medium">
                  Connect with us on WhatsApp
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-lg text-text-secondary hover:bg-black/5 transition-colors ml-4 shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden" dir="ltr">
              <div className="overflow-y-auto p-6 space-y-4" dir="ltr">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
                <div>
                  <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    dir="ltr"
                    className="w-full px-4 py-2.5 text-sm bg-section-bg border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    dir="ltr"
                    className="w-full px-4 py-2.5 text-sm bg-section-bg border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary placeholder:text-text-secondary/50"
                  />
                </div>
              </div>



              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                  Treatment Required
                </label>
                <select
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  required
                  dir="ltr"
                  className="w-full px-4 py-2.5 text-sm bg-section-bg border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary appearance-none cursor-pointer"
                >
                  {treatmentOptions.map((opt) => (
                    <option key={opt} value={opt === "Select Treatment" ? "" : opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your specific requirements..."
                  dir="ltr"
                  className="w-full px-4 py-2.5 text-sm bg-section-bg border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-text-primary resize-none placeholder:text-text-secondary/50"
                />
              </div>
              </div>

              <div className="p-6 border-t border-border/50 bg-section-bg/50 shrink-0" dir="ltr">
                <button
                  type="submit"
                  disabled={!formData.name || !formData.phone || !formData.treatment}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-bold rounded-lg shadow-lg shadow-green-500/30 hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <WhatsAppIcon size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
