import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
          alt="Family planning for the future"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance">
            Protecting Everything You Own and Everyone You Love
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
            Experienced Elder Law and Estate Planning attorneys dedicated to helping 
            families in Nassau County, NY plan for the future with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
            >
              <Link href="#contact">Schedule a Consultation</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-white/10 text-base px-8"
            >
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
