"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

// Set in .env.local: NEXT_PUBLIC_VOLUNTEER_SCRIPT_URL=https://script.google.com/macros/s/.../exec
const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_VOLUNTEER_SCRIPT_URL ?? "";

export default function GetInvolved() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [area, setArea] = useState("");
  const [experience, setExperience] = useState("");
  const [howFound, setHowFound] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!GOOGLE_APPS_SCRIPT_URL.startsWith("https://script.google.com/")) {
      setError("Volunteer form is not configured. Please add your Google Apps Script URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          mobile,
          area,
          experience,
          how_found: howFound,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      setName("");
      setEmail("");
      setMobile("");
      setArea("");
      setExperience("");
      setHowFound("");
      setSubmitted(true);
    } catch (err) {
      console.error("Volunteer registration failed:", err);
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };
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
            {submitted ? (
              <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
                <p className="text-xl font-bold text-green-800 mb-2">Registration successful!</p>
                <p className="text-lg font-semibold text-green-700">
                  Thank you for registering! We&apos;ll reach out to you soon. 🙏
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleRegister}>
                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Email</label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Mobile Number</label>
                  <input
                    type="text"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    placeholder="9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Area you would like to volunteer in</label>
                  <select
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white"
                  >
                    <option value="" disabled>Select an area</option>
                    <option value="Bibewadi">Bibewadi</option>
                    <option value="Camp">Camp</option>
                    <option value="Hadapsar">Hadapsar</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">Any prior experience?</label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Tell us about your experience"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text mb-2">How did you find out about us?</label>
                  <select
                    required
                    value={howFound}
                    onChange={(e) => setHowFound(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors bg-white"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="Event">Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Registering..." : "Register"}</span>
                  {!loading && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Donation / CTA Side */}
          <motion.div
            id="donate"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center scroll-mt-24"
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
