"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/data";
import { Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Link
              href="/"
              className="flex items-center text-yellow-400 text-xl font-bold mb-4"
            >
              <Music className="w-8 h-8 mr-2" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Creating unforgettable musical experiences since 2010.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <item.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Crafted by RoyalMotionIT</p>
        </motion.div>
      </div>
    </footer>
  );
}
