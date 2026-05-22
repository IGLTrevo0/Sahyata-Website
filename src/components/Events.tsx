"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    name: "Winter Food Drive 2026",
    date: "December 15, 2026",
    location: "Vellore Central Park",
    description: "Join us in our annual winter drive to distribute warm meals and blankets to those in need."
  },
  {
    name: "Youth Volunteer Summit",
    date: "January 10, 2027",
    location: "VIT Auditorium",
    description: "A gathering for young minds to discuss and plan sustainable solutions for poverty relief."
  },
  {
    name: "Community Kitchen Launch",
    date: "February 05, 2027",
    location: "Chennai Hub",
    description: "Celebrating the opening of our 5th community kitchen, serving 1000+ meals daily."
  }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-text mb-4">{event.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-text-body">
                  <Calendar size={18} className="text-primary mr-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-text-body">
                  <MapPin size={18} className="text-primary mr-3" />
                  <span>{event.location}</span>
                </div>
              </div>

              <p className="text-text-body mb-8 flex-grow">
                {event.description}
              </p>

              <Link
                href="#get-involved"
                className="block text-center py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all"
              >
                Register Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
