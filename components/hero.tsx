"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import BookingModal from "./booking-modal"

export default function Hero() {
  // Add state for booking modal after the motion import
  const [showBookingModal, setShowBookingModal] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-blue-900 mr-2" />
              <span className="text-blue-900 font-medium">Serving Timmins & Northern Ontario</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Mobile
              <span className="text-blue-900"> Exterior Detailing</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We bring premium exterior detailing directly to your location. Choose from our quick
              <strong> Clean + Sealant</strong> refresh or comprehensive <strong>Deep Clean + Protect</strong> service.
              Every detail done properly, with real care and attention to detail—without cutting corners.
            </p>

            {/* Replace the existing button section with: */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => setShowBookingModal(true)}
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-3"
              >
                Book Your Detail
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("service")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg px-8 py-3 border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-1" />
                <span className="font-medium">Same-Day Service</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professional car detailing service in Timmins"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating testimonial card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-sm"
            >
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-2">
                "The Deep Clean + Protect service made my SUV look brand new. Professional work done with real care."
              </p>
              <p className="text-gray-500 text-xs">- Mike T., Timmins</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Add the booking modal at the end of the component, before the closing section: */}
      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </section>
  )
}
