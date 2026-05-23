"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function IconBrandInstagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M16.5 7.5l0 .01" />
    </svg>
  );
}

function IconBrandWhatsapp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          <motion.a
            href="mailto:contact@sahyata.org"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-5 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow group h-full justify-center"
          >
            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail size={20} />
            </div>
            <h3 className="text-base font-bold text-text mb-1">Email</h3>
            <p className="text-text-body text-sm font-medium">contact@sahyata.org</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center h-full"
          >
            <h3 className="text-xl font-bold text-text mb-6">Follow Us</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-text shadow-sm transition-colors hover:text-[#E4405F]"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-text shadow-sm transition-colors hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <IconBrandWhatsapp className="w-7 h-7" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
