"use client";

import { motion } from "framer-motion";

const values = ["Compassion", "Action", "Community"];

export default function WhoWeAre() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-text"
        >
          Who We Are
        </motion.h2>

        <div className="space-y-6 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-text-body leading-relaxed"
          >
            Sahyata is a non-governmental organization born out of a shared vision to bridge the gap for those struggling with extreme poverty and food insecurity. We believe that every individual deserves a life of dignity, starting with the most basic human right: access to nutritious food.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-body leading-relaxed"
          >
            Our journey started with a small group of passionate volunteers at VIT Vellore, and today, we have grown into a community of hundreds dedicated to creating a hunger-free world. Through our grassroots initiatives and sustainable programs, we aim to provide not just immediate relief, but long-term empowerment.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {values.map((value, index) => (
            <motion.span
              key={value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="px-6 py-2 bg-surface border border-gray-100 text-primary font-semibold rounded-full shadow-sm hover:border-primary transition-colors cursor-default"
            >
              {value}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
