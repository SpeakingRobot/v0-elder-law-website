import { FileText, Scale, Heart, Users, Building2, ShieldCheck, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Wills & Trusts",
    description: "Secure your legacy with expertly drafted wills and trusts that protect your assets and ensure your wishes are honored.",
  },
  {
    icon: Scale,
    title: "Probate Administration",
    description: "Navigate the probate process with professional guidance, minimizing delays and complications for your family.",
  },
  {
    icon: Heart,
    title: "Medicaid Planning",
    description: "Strategic planning to help you preserve assets while qualifying for Medicaid benefits when needed.",
  },
  {
    icon: Users,
    title: "Special Needs Planning",
    description: "Comprehensive planning for family members with disabilities to ensure their long-term financial security.",
  },
  {
    icon: Building2,
    title: "Business Succession",
    description: "Seamless transition planning for your business, protecting both your family and your enterprise.",
  },
  {
    icon: ShieldCheck,
    title: "Powers of Attorney",
    description: "Establish healthcare and financial representatives to handle your affairs if you become incapacitated.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight max-w-3xl">
            Comprehensive Legal Solutions for Your Family
          </h2>
          <p className="text-foreground/60 max-w-2xl text-lg">
            From estate planning to elder care, we provide trusted legal guidance tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/65 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all opacity-0 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
