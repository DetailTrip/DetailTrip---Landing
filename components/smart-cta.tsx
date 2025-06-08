"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface SmartCTAProps {
  selectedService?: string
  selectedVehicle?: string
  estimatedPrice?: number
  onBookingClick?: () => void
  variant?: "primary" | "secondary" | "floating"
  showPrice?: boolean
}

export default function SmartCTA({
  selectedService = "",
  selectedVehicle = "",
  estimatedPrice = 0,
  onBookingClick,
  variant = "primary",
  showPrice = true,
}: SmartCTAProps) {
  const getServiceName = () => {
    if (selectedService === "clean_sealant") return "Clean + Sealant"
    if (selectedService === "deep_clean_protect") return "Deep Clean + Protect"
    return "DetailTrip Service"
  }

  const getVehicleName = () => {
    if (selectedVehicle === "compact") return "Compact Car"
    if (selectedVehicle === "sedan") return "Sedan"
    if (selectedVehicle === "suv_or_pickup") return "SUV/Pickup"
    if (selectedVehicle === "minivan_or_3row") return "Minivan/3-Row"
    return "Vehicle"
  }

  const getPersonalizedMessage = () => {
    if (selectedService && selectedVehicle) {
      return `Book ${getServiceName()} for My ${getVehicleName()}`
    }
    if (selectedService) {
      return `Book ${getServiceName()} Service`
    }
    return "Book Your Detail"
  }

  const getUrgencyMessage = () => {
    const messages = [
      "Same-day service often available",
      "Limited weekend slots remaining",
      "Book now for best availability",
      "Popular time slots filling up",
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  if (variant === "floating") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-2xl rounded-full p-4 border"
      >
        <div className="flex items-center space-x-4">
          {showPrice && estimatedPrice > 0 && (
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Starting at ${estimatedPrice}
            </Badge>
          )}
          <Button onClick={onBookingClick} className="bg-blue-900 hover:bg-blue-800 rounded-full">
            <Calendar className="w-4 h-4 mr-2" />
            {getPersonalizedMessage()}
          </Button>
        </div>
      </motion.div>
    )
  }

  if (variant === "secondary") {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-blue-900">{getPersonalizedMessage()}</h4>
            {showPrice && estimatedPrice > 0 && <p className="text-sm text-blue-700">Starting at ${estimatedPrice}</p>}
            <p className="text-xs text-blue-600 mt-1">{getUrgencyMessage()}</p>
          </div>
          <Button onClick={onBookingClick} size="sm" className="bg-blue-900 hover:bg-blue-800">
            Book Now
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{getPersonalizedMessage()}</h3>
        {showPrice && estimatedPrice > 0 && (
          <p className="text-blue-900 font-semibold">Starting at ${estimatedPrice}</p>
        )}
        <p className="text-sm text-gray-600">{getUrgencyMessage()}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onBookingClick} className="flex-1 bg-blue-900 hover:bg-blue-800">
          <Calendar className="w-4 h-4 mr-2" />
          Book Online
        </Button>
        <Button variant="outline" className="flex-1" onClick={() => (window.location.href = "tel:+1-705-555-0123")}>
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </Button>
        <Button variant="outline" className="flex-1" onClick={() => (window.location.href = "sms:+1-705-555-0123")}>
          <MessageCircle className="w-4 h-4 mr-2" />
          Text Us
        </Button>
      </div>
    </div>
  )
}
