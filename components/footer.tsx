import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-300 mb-4">DetailTrip</h3>
            <p className="text-gray-300 mb-4">
              Professional mobile exterior detailing serving Timmins and Northern Ontario. Two service packages designed
              for every need—quality work done properly, with real care and attention to detail.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Serving Timmins & Area</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Clean + Sealant</li>
              <li>Deep Clean + Protect</li>
              <li>Engine Bay Cleaning</li>
              <li>Scratch Touch-Up</li>
              <li>Mobile Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Timmins</li>
              <li>South Porcupine</li>
              <li>Schumacher</li>
              <li>Porcupine</li>
              <li>Mountjoy</li>
              <li>Whitney</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1-705-555-0123" className="hover:text-blue-300">
                  (705) 555-0123
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@detailtrip.ca" className="hover:text-blue-300">
                  info@detailtrip.ca
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <Clock className="w-4 h-4 mr-2 mt-0.5" />
                <div>
                  <div>Mon-Fri: 8AM-6PM</div>
                  <div>Sat: 8AM-4PM</div>
                  <div>Sun: By Appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} DetailTrip. All rights reserved. | Professional Mobile Exterior Detailing
            in Timmins, Ontario
          </p>
        </div>
      </div>
    </footer>
  )
}
