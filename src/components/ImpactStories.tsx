"use client";

import { motion } from "framer-motion";

const stories = [
  {
    name: "A New Hope for Ravi",
    story: "Ravi, a father of three, was struggling to provide even one meal a day. Through Sahyata's food relief and vocational training, he now runs a small vegetable stall and ensures his children go to school.",
    image: "https://placehold.co/600x400/2D2D2D/FFFFFF?text=Ravi's+Story"
  },
  {
    name: "The Community Kitchen",
    story: "In the heart of a local slum, our community kitchen has become more than just a place to eat. It's a center of hope where elders share stories and children receive nutrition and love.",
    image: "https://placehold.co/600x400/2D2D2D/FFFFFF?text=Community+Kitchen"
  }
];

export default function ImpactStories() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-16">
          Stories That Keep Us Going
        </h2>

        <div className="space-y-20">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[3/2] bg-surface rounded-3xl overflow-hidden relative group">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-text mb-6">{story.name}</h3>
                <p className="text-xl text-text-body leading-relaxed italic">
                  &ldquo;{story.story}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
