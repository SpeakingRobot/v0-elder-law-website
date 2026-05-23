import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
          alt="Family planning for the future"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">Protecting Families Since 1998</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-balance mb-6">
              Protect Your <span className="text-accent">Legacy</span>, Secure Your <span className="text-accent">Family</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl mb-10 font-light">
              Expert Elder Law and Estate Planning for families in Nassau County, NY. Let us handle the complexity while you focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14 flex items-center gap-2"
              >
                <Link href="#contact">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-14"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-serif text-xl font-bold text-white">500+</div>
                  <div className="text-xs text-white/70">Families Served</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-serif text-xl font-bold text-white">25+</div>
                  <div className="text-xs text-white/70">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-serif text-xl font-bold text-white">98%</div>
                  <div className="text-xs text-white/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block relative h-full min-h-96">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            {/* Feature Cards */}
            <div className="relative space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="font-semibold text-white mb-2">Wills & Trusts</div>
                <div className="text-sm text-white/70">Secure your estate for generations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="font-semibold text-white mb-2">Medicaid Planning</div>
                <div className="text-sm text-white/70">Preserve assets, access benefits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-5 hover:bg-white/15 transition-all">
                <div className="font-semibold text-white mb-2">Elder Law</div>
                <div className="text-sm text-white/70">Comprehensive care protection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
