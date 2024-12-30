"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { teamMembers } from "@/lib/data";

export default function MyTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="my-teams" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          My Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-yellow-400">
                {member.name}
              </h3>
              <p className="text-gray-400 text-center mb-2">{member.role}</p>
              <p className="text-sm text-gray-300 text-center">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
