"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Restore Your Vehicle's <span className="text-blue-300">Shine?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Choose from our quick Clean + Sealant refresh or comprehensive Deep Clean + Protect service. Professional
            exterior detailing done properly, with real care and attention to detail. We bring the service to
            you—convenient, reliable, and exceptional results every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Phone className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold">Call or Text</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Get a quote and schedule your exterior detailing service. Same-day appointments often available.
            </p>
            <a
              href="tel:+1-705-555-0123"
              className="inline-flex items-center text-2xl font-bold text-blue-300 hover:text-white transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              (705) 555-0123
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-2xl font-bold">Text Message</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Prefer to text? Send us a message with your vehicle details and preferred time.
            </p>
            <a
              href="sms:+1-705-555-0123"
              className="inline-flex items-center text-2xl font-bold text-blue-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Text Us Now
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center items-center space-x-8 mb-8 text-blue-100">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>5.0 Star Rating</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-green-400 mr-2" />
              <span>Same-Day Service</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3"
              onClick={() => (window.location.href = "tel:+1-705-555-0123")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-3"
              onClick={() => (window.location.href = "sms:+1-705-555-0123")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Text
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
