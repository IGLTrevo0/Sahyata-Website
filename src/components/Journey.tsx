"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2024", title: "The Beginning", description: "Sahyata was founded by a group of passionate students at VIT Vellore with a single food drive." },
  { year: "2024", title: "Community Growth", description: "Expanded to 50+ regular volunteers and established partnerships with local restaurants." },
  { year: "2025", title: "Hunger-Free Zones", description: "Launched our first 'Hunger-Free Zone' initiative, providing 500+ meals daily." },
  { year: "2025", title: "Sustainable Relief", description: "Started vocational training programs for families in our relief areas." },
  { year: "2026", title: "Multi-City Impact", description: "Expanded operations to 10 additional cities across the region." },
  { year: "Today", title: "Continuing the Legacy", description: "Touching thousands of lives every day and striving for a hunger-free world." },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = lineRef.current;
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 20%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center text-text">
          Our Journey
        </h2>

        <div ref={containerRef} className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-100" />
          
          {/* Animated Pink Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top z-10"
          />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Milestone Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-20 shadow-[0_0_10px_rgba(233,30,140,0.5)]" />

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-[45%] ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="text-primary font-bold text-xl mb-1">{milestone.year}</div>
                  <h3 className="text-2xl font-bold text-text mb-3">{milestone.title}</h3>
                  <p className="text-text-body leading-relaxed">{milestone.description}</p>
                </motion.div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
