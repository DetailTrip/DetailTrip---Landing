"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Timmins",
      rating: 5,
      text: "The Deep Clean + Protect service transformed my SUV. The iron decontamination removed years of brake dust buildup, and the hand-applied protection looks amazing!",
    },
    {
      name: "Mike T.",
      location: "Timmins",
      rating: 5,
      text: "Professional service from start to finish. They came to my workplace and transformed my truck. The protection they applied has lasted through the whole winter.",
    },
    {
      name: "Jennifer L.",
      location: "South Porcupine",
      rating: 5,
      text: "Perfect for busy families! The Clean + Sealant service was quick but thorough—my van looked great for our family photos. The convenience of mobile service is unbeatable.",
    },
    {
      name: "David R.",
      location: "Schumacher",
      rating: 5,
      text: "Outstanding work! You can tell they take pride in what they do. My car's paint looks incredible and the protection has held up perfectly.",
    },
    {
      name: "Lisa K.",
      location: "Timmins",
      rating: 5,
      text: "Booked the Deep Clean + Protect for spring cleaning. The tar and iron removal made such a difference, and the hand-applied sealant has lasted months!",
    },
    {
      name: "Tom B.",
      location: "Porcupine",
      rating: 5,
      text: "Reliable, professional, and skilled. They understand Northern Ontario conditions and use the right products. Highly recommend their exterior detailing service.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-900">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Timmins residents say about our exterior detailing service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-blue-600 mr-2" />
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
