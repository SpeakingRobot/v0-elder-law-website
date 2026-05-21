import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
          alt="Family planning for the future"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              Trusted Legal Guidance
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-balance">
            Protect Your Legacy
          </h1>
          
          <p className="mt-8 text-lg text-white/85 leading-relaxed max-w-xl font-light">
            Expert estate planning and elder law services for families in Nassau County. We help you secure your financial future and ensure your loved ones are protected.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Start Your Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-14"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
