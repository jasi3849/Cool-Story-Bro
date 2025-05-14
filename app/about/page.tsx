import AboutHero from "@/components/about/about-hero"
import WhoWeAre from "@/components/about/who-we-are"
import Mission from "@/components/about/mission"
import Story from "@/components/about/story"
import Values from "@/components/about/values"
import AboutWhyChooseUs from "@/components/about/about-why-choose-us"
import PartnerWithUs from "@/components/shared/partner-with-us"
import ContactUs from "@/components/shared/contact-us"

export default function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <Mission />
      <Story />
      <Values />
      <AboutWhyChooseUs />
      <PartnerWithUs />
      <ContactUs />
    </>
  )
}
