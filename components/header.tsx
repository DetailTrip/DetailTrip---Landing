"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/DetailTrip-05-29-2025.svg" 
              alt="DetailTrip Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("service")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Service
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("area")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Service Area
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1-705-555-0123" className="flex items-center text-blue-900 hover:text-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              (705) 555-0123
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-blue-900 hover:bg-blue-800">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => scrollToSection("service")}
                  className="block w-full text-left text-gray-700 hover:text-blue-900"
                >
                  Service
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="block w-full text-left text-gray-700 hover:text-blue-900"
                >
                  Process
                </button>
                <button
                  onClick={() => scrollToSection("area")}
                  className="block w-full text-left text-gray-700 hover:text-blue-900"
                >
                  Service Area
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block w-full text-left text-gray-700 hover:text-blue-900"
                >
                  FAQ
                </button>
                <div className="pt-4 border-t border-gray-200">
                  <a href="tel:+1-705-555-0123" className="flex items-center text-blue-900 mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    (705) 555-0123
                  </a>
                  <Button onClick={() => scrollToSection("contact")} className="w-full bg-blue-900 hover:bg-blue-800">
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
