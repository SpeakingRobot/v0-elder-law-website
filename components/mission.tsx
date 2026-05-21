import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Mission() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-primary text-3xl md:text-4xl font-semibold mb-8">
            Our Mission
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Having a well-drafted estate plan in place means you&apos;ll ensure that your estate passes 
              to whom you want, when you want, and is carried out in the manner you&apos;ve chosen. 
              Your family won&apos;t have to endure the public process and costly matter of probate. The 
              government won&apos;t be able to take what you&apos;ve spent a lifetime building.
            </p>
            <p>
              We are dedicated to helping families plan for their future by creating Wills, Trusts, 
              Estate Plans &amp; Health Care documents and providing resources, so you can become 
              familiar with all of your options.
            </p>
          </div>
          <Button 
            asChild 
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="#services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
