"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Award, MapPin, Wrench, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Benefits() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Weather Protection",
      description:
        "Our hand-applied protection shields your vehicle from harsh Northern Ontario winters and road salt damage.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Convenient Mobile Service",
      description: "We come to your home or workplace, saving you time while delivering professional results.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Professional Quality",
      description:
        "Every detail is done properly with premium products and techniques—no shortcuts, just quality work.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Local Expertise",
      description: "We understand Timmins weather and road conditions, tailoring our service to local needs.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Professional Equipment",
      description: "We bring all necessary professional-grade equipment and supplies to deliver exceptional results.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Pride in Our Work",
      description: "Every vehicle receives our full attention and care—we take pride in the quality of our work.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-900">DetailTrip</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional exterior detailing with real care, attention to detail, and
            without cutting corners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
