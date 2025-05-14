import Hero from "@/components/home/hero"
import TrustedBrands from "@/components/home/trusted-brands"
import CoreServices from "@/components/home/core-services"
import FeaturedWorks from "@/components/home/featured-works"
import Testimonials from "@/components/home/testimonials"
import WhatWeDo from "@/components/home/what-we-do"
import PartnerWithUs from "@/components/shared/partner-with-us"
import ContactUs from "@/components/shared/contact-us"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <CoreServices />
      <FeaturedWorks />
      <Testimonials />
      <WhatWeDo />
      <PartnerWithUs />
      <ContactUs />
    </>
  )
}
