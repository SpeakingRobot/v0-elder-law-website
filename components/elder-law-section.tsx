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
    <section className="section-spacing overflow-hidden bg-accent text-accent-foreground">
      <div className="site-container">
        {/* Feature Cards Row */}
        <div className="mb-12 grid grid-cols-2 gap-4 border-b border-white/15 pb-12 lg:mb-16 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group rounded-xl border border-white/15 bg-white/5 p-4 text-center transition-colors hover:bg-white/10 sm:p-6"
            >
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <feature.icon aria-hidden="true" className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white sm:text-base">{feature.title}</h3>
              <p className="text-xs leading-6 text-white/70 sm:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3">
            <h2 className="mb-7 font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-medium leading-tight tracking-tight text-white">
              What to Expect from an Elder Law Attorney
            </h2>
            <div className="space-y-5 text-base leading-8 text-white/75">
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
            <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/15 pt-7 sm:gap-6">
              <div>
                <div className="mb-2 font-serif text-3xl font-medium text-white sm:text-4xl">25+</div>
                <div className="text-xs text-white/70 sm:text-sm">Years Experience</div>
              </div>
              <div>
                <div className="mb-2 font-serif text-3xl font-medium text-white sm:text-4xl">500+</div>
                <div className="text-xs text-white/70 sm:text-sm">Families Helped</div>
              </div>
              <div>
                <div className="mb-2 font-serif text-3xl font-medium text-white sm:text-4xl">98%</div>
                <div className="text-xs text-white/70 sm:text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Card - 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-card p-6 shadow-lg sm:p-8">
              <h3 className="mb-7 font-serif text-2xl leading-snug text-accent">
                How Can an Elder Law Attorney Help?
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li 
                    key={index} 
                    className="group flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-sm leading-6 text-muted-foreground">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA at bottom */}
              <div className="mt-8 pt-6 border-t border-border">
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
