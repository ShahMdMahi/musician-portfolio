"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { album, newReleases } from "@/lib/data";

export default function NewReleases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          New Releases
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {newReleases.map((release, index) => (
            <motion.div
              key={release.type}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, opacity: 1 }
                  : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }
              }
              transition={{ delay: index * 0.2 }}
              className="bg-black p-6 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                {release.title}
              </h3>
              <div className="aspect-video w-full">
                <iframe
                  src={`https://open.spotify.com/embed/${release.type.toLowerCase()}/${
                    release.spotifyId
                  }?utm_source=generator${release.dark && `&theme=0`}`}
                  width="100%"
                  height="100%"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-md"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto mt-8">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black p-6 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              {album.title}
            </h3>
            <div className="aspect-video w-full">
              <iframe
                src={`https://open.spotify.com/embed/album/${
                  album.spotifyId
                }?utm_source=generator${album.dark && `&theme=0`}`}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
