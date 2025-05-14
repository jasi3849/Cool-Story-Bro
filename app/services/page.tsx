import ServiceHero from "@/components/services/service-hero"
import ServicesList from "@/components/services/services-list"
import WorkProcess from "@/components/services/work-process"
import WhyChooseUs from "@/components/shared/why-choose-us"
import PartnerWithUs from "@/components/shared/partner-with-us"
import ContactUs from "@/components/shared/contact-us"

export default function Services() {
  return (
    <>
      <ServiceHero />
      <ServicesList />
      <WorkProcess />
      <WhyChooseUs />
      <PartnerWithUs />
      <ContactUs />
    </>
  )
}
