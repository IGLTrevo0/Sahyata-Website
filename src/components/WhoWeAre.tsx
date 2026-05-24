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
            Sahyata is a volunteer-driven movement fighting hunger and poverty on the ground. Every week we organise food drives, reach the most underserved corners of the city, and make sure the people who are often forgotten — aren't. No big machinery, no bureaucracy. Just people who show up.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-text-body leading-relaxed"
          >
            What started as a small drive has grown into something much bigger than any of us expected. Hundreds of volunteers, thousands of meals, and a community that feels less like an NGO and more like a family. We don't do this for recognition. We do it because every Thursday, someone is waiting — and we've never let them down
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
