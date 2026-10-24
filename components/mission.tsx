import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Scale, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Asset Protection",
    description: "Safeguard your wealth from unnecessary taxes and legal complications",
  },
  {
    icon: Heart,
    title: "Family First",
    description: "Ensure your loved ones are cared for according to your wishes",
  },
  {
    icon: Scale,
    title: "Legal Excellence",
    description: "Expert guidance through complex estate planning matters",
  },
]

export function Mission() {
  return (
    <section id="about" className="section-spacing overflow-hidden bg-card">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left - Image with overlay card */}
          <div className="relative mx-auto w-full max-w-md pb-7 pr-5 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-lg shadow-accent/5">
              <Image
                src="/deep-chopra.jpg"
                alt="Mr. Deep Chopra, Attorney at Law"
                fill
                sizes="(min-width: 1024px) 40vw, 85vw"
                className="object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute bottom-0 right-0 rounded-xl border border-border bg-card p-5 shadow-lg shadow-accent/5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">25+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of</p>
                  <p className="text-foreground/70">Trusted Service</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div aria-hidden="true" className="absolute -left-4 top-8 bottom-14 w-4 rounded-l-md bg-primary/10" />
          </div>

          {/* Right - Content */}
          <div>
            <div>
              <span className="section-kicker">
                Meet the Attorney
              </span>
            </div>
            
            <h2 className="section-heading mb-4">
              My Mission
            </h2>
            
            <p className="mb-4 font-serif text-xl font-medium text-primary">
              — Mr. Deep Chopra
            </p>
            
            <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
              Attorney At Law admitted to practice law in New York State, USA
            </p>
            
            <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
              Advocate admitted to practice law in the High Courts of Mumbai and Goa, India
            </p>
            
            <p className="mb-7 border-l-2 border-primary/30 pl-5 text-lg leading-relaxed text-muted-foreground">
              Having a well-drafted estate plan ensures your estate passes to whom you want, when you want, 
              in the manner you choose. Your family won&apos;t endure costly probate, and the government 
              won&apos;t take what you&apos;ve spent a lifetime building.
            </p>

            {/* Value cards */}
            <div className="mb-8 divide-y divide-border/70">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 py-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/5">
                    <value.icon aria-hidden="true" className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-accent">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="h-12 rounded-lg bg-primary px-7 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
