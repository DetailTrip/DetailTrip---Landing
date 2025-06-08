"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ServiceArea() {
  const areas = ["Timmins", "South Porcupine", "Schumacher", "Porcupine", "Mountjoy", "Whitney"]

  return (
    <section id="area" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-900">Mobile Detailing</span> Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving Timmins and Northern Ontario with professional mobile exterior detailing. We bring our
            expertise directly to your location.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Service Areas</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <p className="text-gray-600 mb-4">
                    <strong>Service Radius:</strong> Up to 25km from Timmins city center
                  </p>
                  <p className="text-gray-600">
                    Don't see your area listed? Give us a call—we may still be able to serve you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 bg-blue-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Service Hours</h4>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Season:</span>
                    <span>May 1 - Oct 20, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekends:</span>
                    <span>Saturday & Sunday</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weeknights:</span>
                    <span>Tue-Thu (alternate weeks)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-green-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Same-Day Service</h4>
                </div>
                <p className="text-gray-700">
                  Need service today? We often have same-day availability for both Clean + Sealant and Deep Clean +
                  Protect packages. Call or text to check our current schedule.
                </p>
              </CardContent>
            </Card>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Ready to Book?</h4>
              <p className="mb-4">Call or text us for a quote and to schedule your exterior detailing service.</p>
              <a
                href="tel:+1-705-555-0123"
                className="inline-flex items-center text-lg font-semibold text-blue-300 hover:text-blue-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                (705) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
