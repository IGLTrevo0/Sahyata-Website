"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Clock, Phone } from "lucide-react";

const events = [
  {
    type: "standard" as const,
    title: "Weekly Thursday Drive",
    date: "Every Thursday",
    location: "Pune",
    description:
      "Sahyata hits the streets every Thursday. Show up, serve, and make someone's day better. See you there.",
    showRegister: true,
  },
  {
    type: "featured" as const,
    title: "Hunt for a Cause — Level Hard",
    tag: "Sahayata Presents",
    tagline: "Adventure Meets Purpose!",
    description:
      "Join Pune's most exciting treasure hunt and help us feed those in need. Every registration helps provide a meal to someone in need.",
    date: "Sunday, 7th June",
    time: "To be announced",
    location: "To be announced",
    pills: ["Explore", "Solve", "Make a Difference"],
    contact: "9158498222 / 9960666755",
    showRegister: true,
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Upcoming Events</h2>
          <p className="text-text-body max-w-2xl mx-auto">
            Be a part of our upcoming initiatives and help us make a difference in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-text">{event.title}</h3>
                {event.type === "featured" && event.tag && (
                  <span className="shrink-0 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {event.tag}
                  </span>
                )}
              </div>

              {event.type === "featured" && event.tagline && (
                <p className="text-primary font-semibold mb-4">{event.tagline}</p>
              )}

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-text-body">
                  <Calendar size={18} className="text-primary mr-3 shrink-0" />
                  <span>{event.date}</span>
                </div>
                {event.type === "featured" && event.time && (
                  <div className="flex items-center text-text-body">
                    <Clock size={18} className="text-primary mr-3 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                )}
                <div className="flex items-center text-text-body">
                  <MapPin size={18} className="text-primary mr-3 shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-text-body mb-4 flex-grow">{event.description}</p>

              {event.type === "featured" && event.pills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1 bg-surface text-text text-xs font-semibold rounded-full"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              )}

              {event.type === "featured" && event.contact && (
                <div className="flex items-center text-text-body mb-6">
                  <Phone size={18} className="text-primary mr-3 shrink-0" />
                  <span className="text-sm font-medium">{event.contact}</span>
                </div>
              )}

              {event.showRegister && (
                <Link
                  href="#get-involved"
                  className="block text-center py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  Register Now
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
