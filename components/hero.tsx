import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award, FileText, Heart, Scale } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-background pt-16">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Protecting Families Since 1998</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance mb-6">
              Protect Your <span className="text-accent">Legacy</span>,{" "}
              Secure Your <span className="text-primary">Family</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-xl mb-10 font-light">
              Expert Elder Law and Estate Planning for families in Nassau County, NY. Let us handle the complexity while you focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-14"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-primary text-primary bg-transparent hover:bg-primary/5 font-semibold px-8 h-14"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <div className="font-serif text-xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-foreground/50">Families Served</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <div className="font-serif text-xl font-bold text-foreground">25+</div>
                  <div className="text-xs text-foreground/50">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent shrink-0" />
                <div>
                  <div className="font-serif text-xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-foreground/50">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Image + Floating Cards */}
          <div className="hidden lg:block relative">
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[460px]">
              <Image
                src="/office-meeting.jpg"
                alt="Attorney Deep consulting with clients"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card — top left */}
            <div className="absolute -left-10 top-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 w-52 border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">Wills & Trusts</div>
                <div className="text-xs text-muted-foreground">Secure your estate</div>
              </div>
            </div>

            {/* Floating card — right middle */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 w-52 border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">Medicaid Planning</div>
                <div className="text-xs text-muted-foreground">Preserve your assets</div>
              </div>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute -left-10 bottom-10 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 w-52 border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Scale className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">Elder Law</div>
                <div className="text-xs text-muted-foreground">Comprehensive care</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Legal Themed Divider */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 md:px-8 py-5">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <div className="flex items-center gap-5 text-foreground/30">
              <Scale className="h-5 w-5" />
              <span className="text-xs tracking-[0.3em] uppercase font-medium">Elder Law &bull; Estate Planning &bull; Asset Protection</span>
              <Scale className="h-5 w-5" />
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
