"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://placehold.co/1920x1080/2D2D2D/FFFFFF?text=Sahyata+Image+1",
  "https://placehold.co/1920x1080/2D2D2D/FFFFFF?text=Sahyata+Image+2",
  "https://placehold.co/1920x1080/2D2D2D/FFFFFF?text=Sahyata+Image+3",
  "https://placehold.co/1920x1080/2D2D2D/FFFFFF?text=Sahyata+Image+4",
  "https://placehold.co/1920x1080/2D2D2D/FFFFFF?text=Sahyata+Image+5",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl mb-6"
        >
          Empowering Lives, Feeding the Future with Sahyata
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed"
        >
          Dedicated to eradicating poverty and hunger through community-driven action and sustainable relief.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#about"
            className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform"
          >
            Know More
          </Link>
          <Link
            href="#get-involved"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-text transition-all"
          >
            Volunteer With Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
