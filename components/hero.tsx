"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock } from "lucide-react"
import { motion } from "framer-motion"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"
import { useState } from "react"
import BookingModal from "./booking-modal"

export default function Hero() {
  const [showBookingModal, setShowBookingModal] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("service")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-blue-900 mr-2" />
              <span className="text-blue-900 font-medium">Serving Timmins & Northern Ontario</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Mobile <span className="text-blue-900">Exterior Detailing</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We bring premium exterior detailing directly to your location. Choose from our
              quick <strong>Clean + Sealant</strong> refresh or comprehensive{" "}
              <strong>Deep Clean + Protect</strong> service. Every detail done properly, with real
              care and attention to detail—without cutting corners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => setShowBookingModal(true)}
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Book Your Detail
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-3 border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-1" />
                <span className="font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">500+ Cars Detailed</span>
              </div>
            </div>

            {/* Booking Availability (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:block bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 text-base mb-3">
                Booking Availability
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center"><span className="mr-2">🗓️</span>May 1 – Oct 20 (seasonal)</li>
                <li className="flex items-center"><span className="mr-2">☀️</span>Shade required for all services</li>
                <li className="flex items-center"><span className="mr-2">📍</span>Timmins, Schumacher, South Porcupine</li>
                <li className="flex items-center"><span className="mr-2">🌙</span>Evenings (Tue–Thu, alternating weeks)</li>
                <li className="flex items-center"><span className="mr-2">🧼</span>Weekend slots always available</li>
                <li className="flex items-center"><span className="mr-2">🌧️</span>Rescheduled if raining or under 10°C</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                We work around your schedule — flexible evening and weekend availability.
              </p>
            </motion.div>
          </motion.div>

          {/* Right image column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start space-y-6"
          >
            <div className="relative w-full max-w-[500px] aspect-[603/800] rounded-2xl shadow-2xl">
              <BeforeAfterSlider
                beforeSrc="/before-detail.jpg"
                afterSrc="/after-detail.jpg"
                alt="Detail before and after"
              />
            </div>

            {/* Booking Availability (mobile only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:hidden w-full bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 text-base mb-3">
                Booking Availability
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-center"><span className="mr-2">🗓️</span>May 1 – Oct 20 (seasonal)</li>
                <li className="flex items-center"><span className="mr-2">☀️</span>Shade required for all services</li>
                <li className="flex items-center"><span className="mr-2">📍</span>Timmins, Schumacher, South Porcupine</li>
                <li className="flex items-center"><span className="mr-2">🌙</span>Evenings (Tue–Thu, alternating weeks)</li>
                <li className="flex items-center"><span className="mr-2">🧼</span>Weekend slots always available</li>
                <li className="flex items-center"><span className="mr-2">🌧️</span>Rescheduled if raining or under 10°C</li>
              </ul>
              <p className="mt-4 text-xs text-gray-500">
                We work around your schedule — flexible evening and weekend availability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </section>
  )
}
