"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "https://placehold.co/800x600/2D2D2D/FFFFFF?text=Gallery+1", alt: "Sahyata Action 1" },
  { id: 2, src: "https://placehold.co/600x800/2D2D2D/FFFFFF?text=Gallery+2", alt: "Sahyata Action 2" },
  { id: 3, src: "https://placehold.co/800x800/2D2D2D/FFFFFF?text=Gallery+3", alt: "Sahyata Action 3" },
  { id: 4, src: "https://placehold.co/600x600/2D2D2D/FFFFFF?text=Gallery+4", alt: "Sahyata Action 4" },
  { id: 5, src: "https://placehold.co/800x600/2D2D2D/FFFFFF?text=Gallery+5", alt: "Sahyata Action 5" },
  { id: 6, src: "https://placehold.co/600x800/2D2D2D/FFFFFF?text=Gallery+6", alt: "Sahyata Action 6" },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-16">
          Our Impact in Pictures
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold px-4 py-2 bg-primary/80 rounded-full">View Larger</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-10 right-10 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-xl font-medium">{selectedPhoto.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
