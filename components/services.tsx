import { FileText, Scale, Heart, Users, Building2, ShieldCheck, Home, ArrowRight } from "lucide-react"
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
  {
    icon: Home,
    title: "Real Estate Transactions",
    description: "Expert guidance for commercial and residential real estate transactions to protect your interests.",
    color: "accent",
  },
]

export function Services() {
  return (
    <section id="services" className="section-spacing relative overflow-hidden border-y border-border/60 bg-secondary/50">
      <div className="site-container relative">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-14">
          <span className="section-kicker">
            What We Do
          </span>
          <h2 className="section-heading mb-4">
            Practice Areas
          </h2>
          <p className="section-lead">
            Comprehensive legal services tailored to protect you and your loved ones
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative ${index === services.length - 1 ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              {/* Card */}
              <div className={`relative flex h-full flex-col rounded-xl border border-border/80 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-accent/5 ${index === services.length - 1 ? "md:flex-row md:items-center md:gap-7" : ""}`}>
                {/* Number badge */}
                <span aria-hidden="true" className={`absolute right-6 top-6 select-none font-serif text-3xl text-accent/15 ${index === services.length - 1 ? "md:hidden" : ""}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Icon */}
                <div className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${index === services.length - 1 ? "md:mb-0" : ""} ${
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
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-3 font-serif text-[22px] leading-snug text-accent">
                    {service.title}
                  </h3>
                  <p className={`text-[15px] leading-7 text-muted-foreground ${index === services.length - 1 ? "mb-6 md:mb-0" : "mb-6 flex-1"}`}>
                    {service.description}
                  </p>
                </div>

                {/* CTA Link */}
                <Link 
                  href="#contact" 
                  className={`mt-auto inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold transition-all duration-300 ${index === services.length - 1 ? "md:my-auto" : ""} ${
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
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Not sure which service you need? We&apos;re here to help.
          </p>
          <Link 
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
