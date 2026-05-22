"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@sahyata.org", href: "mailto:contact@sahyata.org" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Address", value: "VIT Vellore, Tamil Nadu, India", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Contact Us</h2>
          <p className="text-text-body max-w-2xl mx-auto">
            Have questions or want to get in touch? Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl flex flex-col items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <info.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{info.label}</h3>
              <p className="text-text-body font-medium">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <h3 className="text-xl font-bold text-text mb-8">Follow Our Socials</h3>
          <div className="flex space-x-6">
            {[1, 2, 3, 4].map((idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-text hover:text-primary transition-colors shadow-sm"
              >
                <Share2 size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
