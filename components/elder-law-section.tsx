import { CheckCircle2, Shield, Heart, FileText, Users } from "lucide-react"

const services = [
  "Explaining the importance of wills, trusts and proper estate planning",
  "Planning for minors or adults who have special needs",
  "Creating durable power of attorney and health care proxy",
  "Providing guidance on medical care and long-term nursing home care options",
  "Financial planning, including income planning and retirement accounts",
  "Assisting with selecting and appointing a legal guardian",
  "Helping families locate long term care facilities",
  "Drafting a living will or advance directives",
]

const features = [
  {
    icon: Shield,
    title: "Asset Protection",
    description: "Safeguard your wealth for future generations",
  },
  {
    icon: Heart,
    title: "Healthcare Planning",
    description: "Ensure quality care as you age",
  },
  {
    icon: FileText,
    title: "Legal Documents",
    description: "Comprehensive estate documentation",
  },
  {
    icon: Users,
    title: "Family Support",
    description: "Guidance for the whole family",
  },
]

export function ElderLawSection() {
  return (
    <section className="py-24 md:py-32 bg-accent text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Feature Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white hover:shadow-lg border border-border rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-8 leading-tight text-white">
              What to Expect from an Elder Law Attorney
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p>
                An Elder Law attorney acts as an advocate for elderly people and their families. 
                The practice of Elder Law can include many different legal matters that affect the 
                elderly, such as long term healthcare planning, guardianship, Medicaid planning, 
                asset protection planning, and estate planning.
              </p>
              <p>
                An Elder Law attorney focuses on the unique legal needs of aging adults, which 
                are different than the needs of an average younger adult. The duties taken on 
                by Elder Law attorneys can reach much further than overall estate planning and 
                into the everyday lives of senior citizens and their families.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-white/60">Families Helped</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-white/60">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Card - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <h3 className="font-serif text-2xl mb-8 relative">
                How Can an Elder Law Attorney Help?
              </h3>
              <ul className="space-y-4 relative">
                {services.map((service, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-4 group"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/40 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-white/85 group-hover:text-white transition-colors leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA at bottom */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Schedule a Consultation
                  <span className="text-lg">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
