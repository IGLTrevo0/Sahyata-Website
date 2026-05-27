"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description: "Sahyata began as a small group of college students distributing hot meals to families in local neighborhoods. Seeing the immediate need for support motivated us to turn this informal drive into a weekly commitment."
  },
  {
    year: "2020",
    title: "First Steps",
    description: "As the pandemic brought unprecedented challenges, we structured our team to deliver essential dry ration kits to daily wage workers. This period taught us the importance of organizing resources efficiently in times of crisis."
  },
  {
    year: "2021",
    title: "Growing Reach",
    description: "With restrictions easing, we expanded our volunteer network to reach nearby communities and schools. We also began collaborating with local kitchens to prepare nutritious meals on a larger scale."
  },
  {
    year: "2022",
    title: "Expanding Operations",
    description: "We established dedicated distribution centers to streamline food storage and supply management. These hubs allowed us to support more families consistently throughout the week."
  },
  {
    year: "2023",
    title: "Community Partnerships",
    description: "By partnering with local farmers and grocery stores, we reduced food waste while keeping our sourcing costs low. This collaborative model helped ensure the long-term sustainability of our daily meal programs."
  },
  {
    year: "2024",
    title: "Scaling Impact",
    description: "Our initiatives expanded into neighboring districts, bringing together student chapters across several educational institutions. This growth enabled us to address hunger issues in both urban areas and rural pockets."
  },
  {
    year: "2025",
    title: "Strengthening Roots",
    description: "We focused on setting up educational support and vocational training alongside our core food drives. Helping families achieve self-reliance became central to our mission of breaking the cycle of poverty."
  },
  {
    year: "Today",
    title: "Looking Ahead",
    description: "Today, we continue to serve thousands of individuals while working towards long-term systemic solutions. Our focus remains on expanding our reach to new areas without compromising the quality of our care."
  }
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
