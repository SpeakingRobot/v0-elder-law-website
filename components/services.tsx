import { FileText, Scale, Heart, Users, Building2, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Wills and Trusts",
    description: "Planning for the future through the use of Wills and Trusts is a great way to reduce the stress your family will go through once you are gone.",
  },
  {
    icon: Scale,
    title: "Probate",
    description: "If your family has experienced the loss of a family member, our law firm can assist you with the legal process that occurs when a loved one passes away.",
  },
  {
    icon: Heart,
    title: "Medicaid & Elder Law Planning",
    description: "It&apos;s understandable that you don&apos;t want to discuss the not-so-distant future and the inevitable. But the longer you put it off, the more difficult it will be on your family.",
  },
  {
    icon: Users,
    title: "Special Needs Planning",
    description: "Families who have a family member with a disability must plan for the future very carefully. How assets are left after your death can have a tremendous impact on quality of life.",
  },
  {
    icon: Building2,
    title: "Business Planning",
    description: "As more Americans become entrepreneurs, they discover that wise business planning is essential to their success today and their financial security tomorrow.",
  },
  {
    icon: ShieldCheck,
    title: "Incapacity Planning",
    description: "Incapacity planning is a broad area of law that covers how you are cared for if you become physically or mentally unable to care for yourself.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-accent text-3xl md:text-4xl font-semibold mb-4">
            Practice Areas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services tailored to protect you and your loved ones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-accent">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
