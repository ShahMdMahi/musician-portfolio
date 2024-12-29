"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const awards = [
    {
      year: "2024",
      title: "Grammy Award",
      category: "Best New Artist",
    },
    {
      year: "2023",
      title: "Billboard Music Award",
      category: "Top Streaming Artist",
    },
    {
      year: "2023",
      title: "MTV Video Music Award",
      category: "Best Pop Video",
    },
    {
      year: "2022",
      title: "American Music Award",
      category: "Breakthrough Artist",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          Awards & Recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-2"
            >
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400 group-hover:text-black" />
              <time className="text-yellow-400 font-bold group-hover:text-black">
                {award.year}
              </time>
              <h3 className="text-xl font-bold mt-2 mb-2">{award.title}</h3>
              <p className="text-gray-400 group-hover:text-black">
                {award.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
