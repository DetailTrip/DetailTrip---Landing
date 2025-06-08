"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import BookingForm from "./booking-form"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedService?: string
  preselectedVehicle?: string
  preselectedAddOns?: string[]
  estimatedPrice?: number
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService,
  preselectedVehicle,
  preselectedAddOns,
  estimatedPrice,
}: BookingModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Book Your DetailTrip Service</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <BookingForm
          preselectedService={preselectedService}
          preselectedVehicle={preselectedVehicle}
          preselectedAddOns={preselectedAddOns}
          estimatedPrice={estimatedPrice}
        />
      </DialogContent>
    </Dialog>
  )
}
