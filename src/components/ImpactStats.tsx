"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Thursdays Missed", value: 0, suffix: "" },
  { label: "Drives Completed", value: 450, suffix: "+" },
  { label: "People Fed", value: 100000, suffix: "+" },
  { label: "Volunteers", value: 500, suffix: "+" },
];

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const el = countRefs.current[index];
        if (el) {
          gsap.fromTo(
            el,
            { innerText: "0" },
            {
              innerText: stat.value.toString(),
              duration: 2,
              snap: { innerText: 1 },
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span ref={(el) => { countRefs.current[index] = el; }}>0</span>
                {stat.suffix}
              </div>
              <div className="text-text-body font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
