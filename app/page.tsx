import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CommitteeAnnouncement } from "@/components/committee-announcement"
import { Mission } from "@/components/mission"
import { Services } from "@/components/services"
import { TrustsEstates } from "@/components/trusts-estates"
import { ElderLawSection } from "@/components/elder-law-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Mission />
      <Services />
      <TrustsEstates />
      <ElderLawSection />
      <CommitteeAnnouncement />
      <Contact />
      <Footer />
    </main>
  )
}
