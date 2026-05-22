"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Be Part of the Change</h2>
          <p className="text-text-body max-w-2xl mx-auto">
            Whether you want to volunteer your time or make a contribution, your support makes our mission possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Volunteer Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8">Volunteer With Us</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-text mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                  placeholder="How would you like to help?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Donation / CTA Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-text mb-6">Support Our Mission</h3>
              <p className="text-xl text-text-body leading-relaxed mb-8">
                Your contributions go directly towards providing meals and essentials to the underserved communities. Every bit counts.
              </p>
              <button className="px-10 py-5 bg-primary text-white font-bold text-lg rounded-full shadow-[0_10px_20px_rgba(233,30,140,0.3)] hover:scale-105 transition-transform">
                Donate Now
              </button>
            </div>
            
            <div className="p-8 border-2 border-dashed border-primary/20 rounded-3xl bg-primary/5">
              <h4 className="font-bold text-primary mb-2 text-lg">Did you know?</h4>
              <p className="text-text-body leading-relaxed">
                Just ₹500 can provide nutritious meals for a family of four for an entire week. Be the reason someone smiles today.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
