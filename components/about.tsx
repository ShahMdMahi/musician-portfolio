"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { aboutStats, siteConfig } from "@/lib/data";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden group">
            <Image
              src={siteConfig.aboutProfile}
              alt="Musician performing"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:opacity-0" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">
              About Me
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {siteConfig.about1}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {siteConfig.about2}
            </p>
            <Link
              href="/about"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Read More
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gray-900 rounded-lg text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
