"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  Truck,
  Users,
  Plus,
  Minus,
  Calculator,
  Clock,
  Shield,
  Droplets,
  Sparkles,
  Check,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"

// Import the new components at the top
import SmartCTA from "./smart-cta"
import BookingModal from "./booking-modal"

// Vehicle types with their respective pricing
interface VehicleType {
  id: string
  name: string
  icon: React.ReactNode
  examples: string[]
}

// Service package definition
interface ServicePackage {
  id: string
  name: string
  summary: string
  description: string
  duration: string
  basePrice: number
  priceByVehicleType?: Record<string, number>
  largeVehicleSurcharge?: number
  features: string[]
}

// Add-on definition
interface AddOn {
  id: string
  name: string
  priceMin: number
  priceMax: number
  description: string
  appliesTo: string[]
}

export default function PricingCalculator() {
  const [selectedTab, setSelectedTab] = useState("deep_clean_protect")
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [showMuddyFee, setShowMuddyFee] = useState(false)

  // Add state for booking modal after the existing state declarations
  const [showBookingModal, setShowBookingModal] = useState(false)

  // Vehicle types
  const vehicleTypes: Record<string, VehicleType> = {
    compact: {
      id: "compact",
      name: "Compact Car",
      icon: <Car className="w-8 h-8" />,
      examples: ["Hyundai Accent", "Chevy Spark", "Kia Rio", "Toyota Yaris", "Honda Fit"],
    },
    sedan: {
      id: "sedan",
      name: "Sedan",
      icon: <Car className="w-8 h-8" />,
      examples: ["Toyota Corolla", "Honda Civic", "Mazda3", "Hyundai Elantra", "Ford Fusion"],
    },
    suv_or_pickup: {
      id: "suv_or_pickup",
      name: "SUV / Pickup",
      icon: <Truck className="w-8 h-8" />,
      examples: ["Toyota RAV4", "Ford Escape", "Honda CR-V", "Dodge Ram 1500", "Ford F-150"],
    },
    minivan_or_3row: {
      id: "minivan_or_3row",
      name: "Minivan / 3-Row",
      icon: <Users className="w-8 h-8" />,
      examples: ["Dodge Grand Caravan", "Honda Odyssey", "Ford Explorer", "Toyota Highlander", "GMC Acadia"],
    },
  }

  // Service packages
  const servicePackages: Record<string, ServicePackage> = {
    clean_sealant: {
      id: "clean_sealant",
      name: "Clean + Sealant",
      summary: "Quick maintenance wash with a slick, beading finish",
      description:
        "A fast and effective refresh between deep cleans. We hand wash away everyday dirt, then apply a protective sealant that beads water for weeks. Great before events or anytime you want that crisp, just-detailed look—without going all-in.",
      duration: "60-75 min",
      basePrice: 100,
      largeVehicleSurcharge: 15,
      features: [
        "Hand wash with foam pre-treatment",
        "Touch-free rinse and dry",
        "Spray sealant application",
        "Wheel face & tire cleaning",
        "Tire dressing (satin finish)",
      ],
    },
    deep_clean_protect: {
      id: "deep_clean_protect",
      name: "Deep Clean + Protect",
      summary: "Season-reset detail that removes embedded grime and lays down 4-6 months of protection",
      description:
        "Our seasonal reset that clears what regular washes leave behind. We remove stuck-on bugs, tar, and embedded brake dust that dull your paint, then apply a long-lasting wax or sealant for a smooth, glossy finish. Includes deep wheel cleaning, door jambs, and pro-grade tire dressing.",
      duration: "120-180 min",
      basePrice: 0, // Base price is determined by vehicle type
      priceByVehicleType: {
        compact: 160,
        sedan: 180,
        suv_or_pickup: 210,
        minivan_or_3row: 235,
      },
      features: [
        "Foam wash with two-bucket method",
        "Iron & tar chemical decontamination",
        "Hand-applied wax or sealant",
        "Deep wheel & wheel well cleaning",
        "Door jamb cleaning",
        "Bug removal treatment",
        "Clean, no-sling tire dressing",
      ],
    },
  }

  // Add-ons
  const addOns: AddOn[] = [
    {
      id: "engine_bay_cleaning",
      name: "Engine Bay Cleaning",
      priceMin: 40,
      priceMax: 65,
      description: "Great for resale prep or keeping things tidy under the hood. Price depends on condition.",
      appliesTo: ["clean_sealant", "deep_clean_protect"],
    },
    {
      id: "scratch_touchup",
      name: "Scratch Touch-Up",
      priceMin: 25,
      priceMax: 45,
      description: "Smooths out minor scuffs for a sharper look—ideal for photos or trade-ins.",
      appliesTo: ["clean_sealant", "deep_clean_protect"],
    },
  ]

  // Calculate price based on selected options
  const calculatePrice = () => {
    if (!selectedVehicle) return 0

    const service = servicePackages[selectedTab]
    let price = 0

    // For Clean + Sealant (flat rate with possible surcharge)
    if (selectedTab === "clean_sealant") {
      price = service.basePrice

      // Add large vehicle surcharge if applicable
      if (
        (selectedVehicle === "suv_or_pickup" || selectedVehicle === "minivan_or_3row") &&
        service.largeVehicleSurcharge
      ) {
        price += service.largeVehicleSurcharge
      }
    }
    // For Deep Clean + Protect (price by vehicle type)
    else if (selectedTab === "deep_clean_protect" && service.priceByVehicleType) {
      price = service.priceByVehicleType[selectedVehicle] || 0
    }

    // Add selected add-ons (using minimum price for calculation)
    selectedAddOns.forEach((addonId) => {
      const addon = addOns.find((a) => a.id === addonId)
      if (addon) {
        price += addon.priceMin
      }
    })

    // Add muddy vehicle fee if selected
    if (showMuddyFee) {
      price += 20 // Minimum muddy vehicle fee
    }

    return price
  }

  const toggleAddOn = (addonId: string) => {
    setSelectedAddOns((prev) => (prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]))
  }

  const toggleMuddyFee = () => {
    setShowMuddyFee(!showMuddyFee)
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Filter add-ons that apply to the selected service
  const filteredAddOns = addOns.filter((addon) => addon.appliesTo.includes(selectedTab))

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-blue-900 mr-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Get Your <span className="text-blue-900">Instant Quote</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a service package and your vehicle type to see pricing for our professional mobile detailing
            services.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Service Package Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">1. Choose Your Service Package</h3>

            <Tabs
              defaultValue="deep_clean_protect"
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="clean_sealant" className="text-base py-3">
                  Clean + Sealant
                </TabsTrigger>
                <TabsTrigger value="deep_clean_protect" className="text-base py-3">
                  Deep Clean + Protect
                </TabsTrigger>
              </TabsList>

              <TabsContent value="clean_sealant" className="mt-0">
                <Card className="bg-gradient-to-r from-blue-50 to-white border-blue-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Droplets className="w-6 h-6 text-blue-600 mr-3" />
                      <CardTitle>Clean + Sealant</CardTitle>
                    </div>
                    <CardDescription className="text-base">{servicePackages.clean_sealant.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-700 mb-4">{servicePackages.clean_sealant.description}</p>
                        <div className="flex items-center mb-2">
                          <Clock className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium">Duration: {servicePackages.clean_sealant.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium">Starting at ${servicePackages.clean_sealant.basePrice}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {servicePackages.clean_sealant.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deep_clean_protect" className="mt-0">
                <Card className="bg-gradient-to-r from-blue-50 to-white border-blue-200">
                  <CardHeader>
                    <div className="flex items-center">
                      <Sparkles className="w-6 h-6 text-blue-600 mr-3" />
                      <CardTitle>Deep Clean + Protect</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {servicePackages.deep_clean_protect.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-700 mb-4">{servicePackages.deep_clean_protect.description}</p>
                        <div className="flex items-center mb-2">
                          <Clock className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium">Duration: {servicePackages.deep_clean_protect.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium">Price varies by vehicle size</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {servicePackages.deep_clean_protect.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Vehicle Selection */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Select Your Vehicle Type</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {Object.values(vehicleTypes).map((vehicle) => (
                    <Card
                      key={vehicle.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedVehicle === vehicle.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="text-blue-600 mr-4">{vehicle.icon}</div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{vehicle.name}</h4>
                            {selectedTab === "deep_clean_protect" &&
                              servicePackages.deep_clean_protect.priceByVehicleType && (
                                <p className="text-2xl font-bold text-blue-900">
                                  ${servicePackages.deep_clean_protect.priceByVehicleType[vehicle.id]}
                                </p>
                              )}
                            {selectedTab === "clean_sealant" && (
                              <p className="text-2xl font-bold text-blue-900">
                                ${servicePackages.clean_sealant.basePrice}
                                {(vehicle.id === "suv_or_pickup" || vehicle.id === "minivan_or_3row") && (
                                  <span className="text-sm font-normal ml-1">
                                    +${servicePackages.clean_sealant.largeVehicleSurcharge}
                                  </span>
                                )}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p className="font-medium mb-1">Examples:</p>
                          <p>{vehicle.examples.slice(0, 3).join(", ")}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Add-ons Section */}
                {selectedVehicle && (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">3. Optional Add-Ons</h3>
                    <div className="space-y-4 mb-8">
                      {filteredAddOns.map((addon) => (
                        <Card
                          key={addon.id}
                          className={`cursor-pointer transition-all hover:shadow-md ${
                            selectedAddOns.includes(addon.id) ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-50"
                          }`}
                          onClick={() => toggleAddOn(addon.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <h4 className="text-lg font-semibold text-gray-900 mr-3">{addon.name}</h4>
                                  <Badge variant="outline" className="text-blue-900 border-blue-900">
                                    ${addon.priceMin}–${addon.priceMax}
                                  </Badge>
                                </div>
                                <p className="text-gray-600">{addon.description}</p>
                              </div>
                              <div className="ml-4">
                                {selectedAddOns.includes(addon.id) ? (
                                  <Minus className="w-6 h-6 text-blue-600" />
                                ) : (
                                  <Plus className="w-6 h-6 text-gray-400" />
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      {/* Muddy Vehicle Fee */}
                      <Card
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          showMuddyFee ? "ring-2 ring-yellow-500 bg-yellow-50" : "hover:bg-gray-50"
                        }`}
                        onClick={toggleMuddyFee}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h4 className="text-lg font-semibold text-gray-900 mr-3">Muddy Vehicle Fee</h4>
                                <Badge variant="outline" className="text-yellow-700 border-yellow-700">
                                  $20–$40
                                </Badge>
                              </div>
                              <p className="text-gray-600">
                                For heavily soiled vehicles with mud, trail dust, or excessive buildup in wheel wells.
                              </p>
                              <div className="flex items-center mt-2 text-sm text-yellow-700">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                <span>Final fee assessed on arrival based on condition</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              {showMuddyFee ? (
                                <Minus className="w-6 h-6 text-yellow-600" />
                              ) : (
                                <Plus className="w-6 h-6 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <Card className="shadow-lg">
                  <CardHeader className="bg-blue-900 text-white">
                    <CardTitle className="text-xl">Your Quote</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    {selectedVehicle ? (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b">
                          <span className="font-medium">{servicePackages[selectedTab].name}</span>
                          <span className="font-bold">
                            {selectedTab === "clean_sealant" ? (
                              <>
                                ${servicePackages.clean_sealant.basePrice}
                                {(selectedVehicle === "suv_or_pickup" || selectedVehicle === "minivan_or_3row") &&
                                  servicePackages.clean_sealant.largeVehicleSurcharge && (
                                    <span className="text-sm font-normal ml-1">
                                      +${servicePackages.clean_sealant.largeVehicleSurcharge}
                                    </span>
                                  )}
                              </>
                            ) : (
                              servicePackages.deep_clean_protect.priceByVehicleType &&
                              `$${servicePackages.deep_clean_protect.priceByVehicleType[selectedVehicle]}`
                            )}
                          </span>
                        </div>

                        {selectedAddOns.map((addonId) => {
                          const addon = addOns.find((a) => a.id === addonId)
                          return (
                            addon && (
                              <div key={addonId} className="flex justify-between items-center pb-2 border-b">
                                <span className="font-medium">{addon.name}</span>
                                <span className="font-bold">
                                  ${addon.priceMin}–${addon.priceMax}
                                </span>
                              </div>
                            )
                          )
                        })}

                        {showMuddyFee && (
                          <div className="flex justify-between items-center pb-2 border-b">
                            <span className="font-medium">Muddy Vehicle Fee</span>
                            <span className="font-bold">$20–$40</span>
                          </div>
                        )}

                        <div className="flex justify-between items-center text-xl font-bold text-blue-900 pt-2 border-t-2">
                          <span>Total Starting At:</span>
                          <span>${calculatePrice()}</span>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg mt-4">
                          <div className="flex items-center mb-2">
                            <Clock className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="font-medium text-blue-900">
                              Service Time: {servicePackages[selectedTab].duration}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="font-medium text-blue-900">Mobile service included</span>
                          </div>
                        </div>

                        <SmartCTA
                          selectedService={selectedTab}
                          selectedVehicle={selectedVehicle}
                          estimatedPrice={calculatePrice()}
                          onBookingClick={() => setShowBookingModal(true)}
                          showPrice={false}
                        />

                        <p className="text-sm text-gray-600 text-center">
                          Available May 1 - Oct 20, 2025. Final pricing confirmed during booking.
                        </p>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Car className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">Select your vehicle type to see pricing</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Availability Info */}
                <Card className="mt-6 bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-blue-800 mb-3">Availability:</h4>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Weekends: Every Saturday & Sunday</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Weeknights: Tue-Thu on alternate weeks</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-blue-600 mr-2 mt-0.5" />
                        <span>Season: May 1 - October 20, 2025</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Service Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h4 className="font-bold text-yellow-800 mb-3">Service Requirements:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                  <div>
                    <p className="font-medium mb-1">Weather Conditions:</p>
                    <ul className="space-y-1">
                      <li>• Temperature above 10°C</li>
                      <li>• No rain or precipitation</li>
                      <li>• Shade required (trees, garage, overcast)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location Requirements:</p>
                    <ul className="space-y-1">
                      <li>• Access to water source</li>
                      <li>• Level parking surface</li>
                      <li>• Vehicle must be dry</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          preselectedService={selectedTab}
          preselectedVehicle={selectedVehicle}
          preselectedAddOns={selectedAddOns}
          estimatedPrice={calculatePrice()}
        />
      </div>
    </section>
  )
}
