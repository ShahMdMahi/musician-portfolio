"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-yellow-400">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <Mail className="w-6 h-6 text-yellow-400 group-hover:text-white transition-colors" />
                <p className="group-hover:text-yellow-400 transition-colors">contact@musician.com</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="w-6 h-6 text-yellow-400 group-hover:text-white transition-colors" />
                <p className="group-hover:text-yellow-400 transition-colors">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <MapPin className="w-6 h-6 text-yellow-400 group-hover:text-white transition-colors" />
                <p className="group-hover:text-yellow-400 transition-colors">Los Angeles, CA, USA</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="bg-black border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300 transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-black border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300 transition-colors" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input 
                id="subject" 
                placeholder="Message subject" 
                className="bg-black border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300 transition-colors" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] bg-black border-yellow-400 focus:ring-yellow-400 hover:border-yellow-300 transition-colors"
              />
            </div>
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 transition-colors">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

