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
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with overlay card */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/deep-chopra.jpg"
                alt="Mr. Deep Chopra, Attorney at Law"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 border border-border">
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
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </div>

          {/* Right - Content */}
          <div className="lg:pl-8">
            <div className="inline-block mb-4">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                Meet the Attorney
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-semibold mb-2 leading-tight">
              My Mission
            </h2>
            
            <p className="text-2xl text-primary font-serif font-semibold mb-6">
              — Mr. Deep Chopra
            </p>
            
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Having a well-drafted estate plan ensures your estate passes to whom you want, when you want, 
              in the manner you choose. Your family won&apos;t endure costly probate, and the government 
              won&apos;t take what you&apos;ve spent a lifetime building.
            </p>

            {/* Value cards */}
            <div className="space-y-4 mb-10">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-accent hover:bg-accent/90 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-sm text-white/80">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
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
