"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Phone, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface BookingFormProps {
  preselectedService?: string
  preselectedVehicle?: string
  preselectedAddOns?: string[]
  estimatedPrice?: number
}

export default function BookingForm({
  preselectedService = "",
  preselectedVehicle = "",
  preselectedAddOns = [],
  estimatedPrice = 0,
}: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Service Selection
    service: preselectedService,
    vehicle: preselectedVehicle,
    addOns: preselectedAddOns,

    // Contact Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Vehicle Details
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleColor: "",

    // Location & Scheduling
    address: "",
    city: "Timmins",
    preferredDate: "",
    preferredTime: "",
    alternateTime: "",

    // Additional Info
    specialRequests: "",
    hasShade: "",
    vehicleCondition: "normal",

    // Preferences
    contactMethod: "phone",
    marketingConsent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4

  const serviceOptions = [
    { value: "clean_sealant", label: "Clean + Sealant", price: "$100", duration: "60-75 min" },
    { value: "deep_clean_protect", label: "Deep Clean + Protect", price: "$160-$235", duration: "2-3 hours" },
  ]

  const vehicleTypes = [
    { value: "compact", label: "Compact Car" },
    { value: "sedan", label: "Sedan" },
    { value: "suv_or_pickup", label: "SUV / Pickup" },
    { value: "minivan_or_3row", label: "Minivan / 3-Row" },
  ]

  const addOnOptions = [
    { value: "engine_bay", label: "Engine Bay Cleaning", price: "$40-$65" },
    { value: "scratch_touchup", label: "Scratch Touch-Up", price: "$25-$45" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Service Selection"
      case 2:
        return "Contact Information"
      case 3:
        return "Vehicle & Location Details"
      case 4:
        return "Schedule & Preferences"
      default:
        return ""
    }
  }

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Request Submitted!</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you! We'll contact you within 2 hours to confirm your appointment and provide final pricing.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 max-w-md mx-auto">
          <p className="text-sm text-blue-800">
            <strong>What's next:</strong> We'll call or text you to confirm availability and discuss any special
            requirements.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-600">{getStepTitle(currentStep)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            {currentStep === 1 && <Calendar className="w-5 h-5 mr-2" />}
            {currentStep === 2 && <Phone className="w-5 h-5 mr-2" />}
            {currentStep === 3 && <MapPin className="w-5 h-5 mr-2" />}
            {currentStep === 4 && <Clock className="w-5 h-5 mr-2" />}
            {getStepTitle(currentStep)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <Label className="text-base font-semibold">Select Your Service</Label>
                  <div className="grid gap-4 mt-3">
                    {serviceOptions.map((service) => (
                      <div
                        key={service.value}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          formData.service === service.value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => updateFormData("service", service.value)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{service.label}</h4>
                            <p className="text-sm text-gray-600">{service.duration}</p>
                          </div>
                          <Badge variant="outline">{service.price}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Vehicle Type</Label>
                  <Select value={formData.vehicle} onValueChange={(value) => updateFormData("vehicle", value)}>
                    <SelectTrigger className="mt-3">
                      <SelectValue placeholder="Select your vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-semibold">Add-Ons (Optional)</Label>
                  <div className="space-y-3 mt-3">
                    {addOnOptions.map((addon) => (
                      <div key={addon.value} className="flex items-center space-x-3">
                        <Checkbox
                          id={addon.value}
                          checked={formData.addOns.includes(addon.value)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("addOns", [...formData.addOns, addon.value])
                            } else {
                              updateFormData(
                                "addOns",
                                formData.addOns.filter((id) => id !== addon.value),
                              )
                            }
                          }}
                        />
                        <Label htmlFor={addon.value} className="flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span>{addon.label}</span>
                            <span className="text-sm text-gray-600">{addon.price}</span>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    placeholder="(705) 555-0123"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold">Preferred Contact Method</Label>
                  <div className="flex gap-4 mt-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="contact-phone"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={(e) => updateFormData("contactMethod", e.target.value)}
                      />
                      <Label htmlFor="contact-phone">Phone Call</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="contact-text"
                        name="contactMethod"
                        value="text"
                        checked={formData.contactMethod === "text"}
                        onChange={(e) => updateFormData("contactMethod", e.target.value)}
                      />
                      <Label htmlFor="contact-text">Text Message</Label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Vehicle & Location Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <Label className="text-base font-semibold mb-3 block">Vehicle Details</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vehicleYear">Year</Label>
                      <Input
                        id="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={(e) => updateFormData("vehicleYear", e.target.value)}
                        placeholder="2020"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vehicleMake">Make</Label>
                      <Input
                        id="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={(e) => updateFormData("vehicleMake", e.target.value)}
                        placeholder="Honda"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="vehicleModel">Model</Label>
                      <Input
                        id="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={(e) => updateFormData("vehicleModel", e.target.value)}
                        placeholder="Civic"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vehicleColor">Color</Label>
                      <Input
                        id="vehicleColor"
                        value={formData.vehicleColor}
                        onChange={(e) => updateFormData("vehicleColor", e.target.value)}
                        placeholder="Silver"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Service Location</Label>
                  <div className="space-y-4 mt-3">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateFormData("address", e.target.value)}
                        placeholder="123 Main Street"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Shade Availability *</Label>
                  <Select value={formData.hasShade} onValueChange={(value) => updateFormData("hasShade", value)}>
                    <SelectTrigger className="mt-3">
                      <SelectValue placeholder="Do you have shade available?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="garage">Garage available</SelectItem>
                      <SelectItem value="trees">Tree cover available</SelectItem>
                      <SelectItem value="building">Building shadow available</SelectItem>
                      <SelectItem value="none">No shade available</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-600 mt-1">
                    Service requires shade to protect your vehicle during the process
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 4: Schedule & Preferences */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="preferredDate">Preferred Date *</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => updateFormData("preferredDate", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold">Preferred Time *</Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => updateFormData("preferredTime", value)}
                  >
                    <SelectTrigger className="mt-3">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-semibold">Alternate Time (Optional)</Label>
                  <Select
                    value={formData.alternateTime}
                    onValueChange={(value) => updateFormData("alternateTime", value)}
                  >
                    <SelectTrigger className="mt-3">
                      <SelectValue placeholder="Select alternate time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-semibold">Vehicle Condition</Label>
                  <Select
                    value={formData.vehicleCondition}
                    onValueChange={(value) => updateFormData("vehicleCondition", value)}
                  >
                    <SelectTrigger className="mt-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal condition</SelectItem>
                      <SelectItem value="dirty">Moderately dirty</SelectItem>
                      <SelectItem value="very_dirty">Very dirty/muddy</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.vehicleCondition === "very_dirty" && (
                    <p className="text-sm text-yellow-600 mt-1">Additional fee may apply for heavily soiled vehicles</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => updateFormData("specialRequests", e.target.value)}
                    placeholder="Any special requests or things we should know?"
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => updateFormData("marketingConsent", checked)}
                  />
                  <Label htmlFor="marketing" className="text-sm">
                    I'd like to receive updates about DetailTrip services and seasonal offers
                  </Label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && (!formData.service || !formData.vehicle)) ||
                  (currentStep === 2 &&
                    (!formData.firstName || !formData.lastName || !formData.phone || !formData.email)) ||
                  (currentStep === 3 && (!formData.address || !formData.hasShade)) ||
                  (currentStep === 4 && (!formData.preferredDate || !formData.preferredTime))
                }
                className="flex items-center"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.preferredDate || !formData.preferredTime}
                className="flex items-center bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
