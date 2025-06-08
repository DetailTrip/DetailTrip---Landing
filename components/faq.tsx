"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What's included in the Exterior Decon + Protect service?",
      answer:
        "We offer two packages: Clean + Sealant includes hand wash, spray sealant, and wheel/tire cleaning (60-75 min). Deep Clean + Protect adds iron/tar decontamination, hand-applied wax, wheel well cleaning, and door jambs (2-3 hours). Both done properly with attention to detail.",
    },
    {
      question: "How long does the service take?",
      answer:
        "Clean + Sealant takes 60-75 minutes for a quick refresh. Deep Clean + Protect takes 2-3 hours for comprehensive decontamination and protection. We never rush the process—quality work takes time.",
    },
    {
      question: "Do you offer same-day service?",
      answer:
        "Yes! We often have same-day availability. Call or text us to check our current schedule. We understand that sometimes you need your vehicle detailed quickly.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Timmins and surrounding areas including South Porcupine, Schumacher, Porcupine, Mountjoy, and Whitney. Our service radius extends up to 25km from Timmins city center.",
    },
    {
      question: "How much does the service cost?",
      answer:
        "Clean + Sealant is $100 (large vehicles +$15). Deep Clean + Protect ranges from $160 (compact) to $235 (minivan/3-row). Add-ons like engine bay cleaning ($40-$65) and scratch touch-up ($25-$45) are available. Final pricing confirmed during booking.",
    },
    {
      question: "What products do you use?",
      answer:
        "We use only professional-grade products designed for Northern Ontario's harsh conditions. Our waxes and sealants provide excellent protection against road salt, winter weather, and UV damage.",
    },
    {
      question: "How long does the protection last?",
      answer:
        "The hand-applied wax or sealant typically provides 3-6 months of protection, depending on driving conditions and weather exposure. We recommend regular maintenance to keep your vehicle looking its best.",
    },
    {
      question: "Do I need to provide anything?",
      answer:
        "No! We bring everything needed including water, power, and all professional equipment and supplies. Just provide access to your vehicle and we'll handle the rest.",
    },
    {
      question: "When are you available for service?",
      answer:
        "We operate from May 1 through October 20, 2025. Weekend slots are available every Saturday and Sunday. Weeknight appointments (Tuesday-Thursday) are offered on alternate weeks. Same-day service is often available—just call or text to check our schedule.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-900">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our exterior detailing service? Here are the answers to the most common questions we
            receive.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">
                          <div className="pt-4">{faq.answer}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
