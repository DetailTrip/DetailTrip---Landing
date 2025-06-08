"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Droplets, Shield, Sparkles, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function ServiceDetails() {
  const serviceSteps = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Clean + Sealant",
      description: "Quick 60-75 minute refresh with hand wash and protective sealant application",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Deep Clean + Protect",
      description: "Comprehensive 2-3 hour service with decontamination and long-lasting protection",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Add-On Services",
      description: "Engine bay cleaning and scratch touch-up available for both packages",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Mobile Convenience",
      description: "Professional equipment and supplies brought directly to your location",
    },
  ]

  const benefits = [
    "Restores your vehicle's original shine",
    "Protects against harsh Northern Ontario weather",
    "Removes road salt and winter damage",
    "Hand-applied protection that lasts",
    "Professional-grade products only",
    "Convenient mobile service",
  ]

  return (
    <section id="service" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-900">Exterior Detailing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two professional service packages designed for different needs. From quick maintenance washes to
            comprehensive seasonal resets—every step is done properly, with pride in the work and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Exterior Detailing?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8"
          >
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-900 mr-3" />
              <h4 className="text-2xl font-bold text-blue-900">Service Details</h4>
            </div>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900">Clean + Sealant:</span>
                <span className="text-gray-700 ml-2">$100 (60-75 min)</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Deep Clean + Protect:</span>
                <span className="text-gray-700 ml-2">$160-$235 (2-3 hours)</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900">Season:</span>
                <span className="text-gray-700 ml-2">May 1 - October 20, 2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
