import Header from "@/components/header"
import Hero from "@/components/hero"
import ServiceDetails from "@/components/service-details"
import PricingCalculator from "@/components/pricing-calculator"
import Process from "@/components/process"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import ServiceArea from "@/components/service-area"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServiceDetails />
      <PricingCalculator />
      <Process />
      <Benefits />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
