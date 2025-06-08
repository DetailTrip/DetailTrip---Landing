"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Process() {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Call or Text",
      description:
        "Reach out to schedule your exterior detailing service. We'll discuss your needs and provide a quote.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Book Your Time",
      description: "Choose a convenient time that works for you. Same-day service is often available.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "We Come to You",
      description: "Our mobile unit arrives at your location with all professional equipment and supplies.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-600" />,
      title: "Professional Results",
      description: "Enjoy your freshly detailed vehicle with restored shine and lasting protection.",
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-blue-900">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting professional exterior detailing has never been easier. We handle everything so you can focus on what
            matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="mb-4 flex justify-center mt-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
