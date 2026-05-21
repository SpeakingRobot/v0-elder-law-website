import { CheckCircle2 } from "lucide-react"

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

export function ElderLawSection() {
  return (
    <section className="py-20 md:py-28 bg-accent text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              What to Expect from an Elder Law Attorney
            </h2>
            <div className="space-y-4 leading-relaxed opacity-90">
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
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="font-serif text-2xl mb-6">
              How Can an Elder Law Attorney Help?
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="opacity-90">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
