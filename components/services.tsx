"use client"

import { FileText, Scale, Heart, Users, Building2, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "Wills & Trusts",
    description: "Secure your legacy with expertly crafted documents that protect your assets and ensure your wishes are honored for generations.",
    color: "accent",
  },
  {
    icon: Scale,
    title: "Probate",
    description: "Navigate the probate process with confidence. We guide families through every step with compassion and expertise.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Medicaid & Elder Law",
    description: "Strategic planning to preserve your assets while ensuring you receive the care and benefits you deserve.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Special Needs Planning",
    description: "Protect your loved ones with disabilities through specialized trusts and comprehensive care planning.",
    color: "primary",
  },
  {
    icon: Building2,
    title: "Business Succession",
    description: "Seamless transition strategies that protect your business legacy and secure your family's financial future.",
    color: "accent",
  },
  {
    icon: ShieldCheck,
    title: "Incapacity Planning",
    description: "Ensure your wishes are followed with powers of attorney, healthcare directives, and living wills.",
    color: "primary",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Practice Areas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive legal services tailored to protect you and your loved ones
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card rounded-xl p-8 h-full border border-border hover:border-accent/40 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                {/* Number badge */}
                <span className="absolute top-6 right-6 text-6xl font-serif font-bold text-muted/30 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.color === 'accent' 
                    ? 'bg-accent/10 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/25' 
                    : 'bg-primary/10 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25'
                }`}>
                  <service.icon className={`h-7 w-7 transition-colors duration-300 ${
                    service.color === 'accent'
                      ? 'text-accent group-hover:text-white'
                      : 'text-primary group-hover:text-white'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link 
                  href="#contact" 
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    service.color === 'accent' ? 'text-accent' : 'text-primary'
                  }`}
                >
                  <span className="relative">
                    Get Started Today
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      service.color === 'accent' ? 'bg-accent' : 'bg-primary'
                    }`} />
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? We&apos;re here to help.
          </p>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
