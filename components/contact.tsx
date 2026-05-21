"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Calendar } from "lucide-react"

const locations = [
  {
    name: "Nassau County",
    address: "123 Main Street, Suite 200",
    city: "Woodbury, NY 11797",
    phone: "(555) 123-4567",
  },
  {
    name: "New York City",
    address: "456 Park Avenue, Floor 10",
    city: "New York, NY 10022",
    phone: "(555) 987-6543",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              Get Started
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6 leading-tight max-w-3xl">
            Schedule Your Free Consultation
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Take the first step towards protecting your family and assets. Our experienced attorneys are ready to help you navigate your estate planning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="bg-white/90 border-0 text-foreground placeholder:text-foreground/40"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-white/90 border-0 text-foreground placeholder:text-foreground/40"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-white/90 border-0 text-foreground placeholder:text-foreground/40"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                  Phone Number
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="bg-white/90 border-0 text-foreground placeholder:text-foreground/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/90 mb-2">
                  Tell Us About Your Needs
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Briefly describe your situation..."
                  rows={4}
                  className="bg-white/90 border-0 text-foreground placeholder:text-foreground/40 resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12"
              >
                Request Consultation
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Locations */}
            {locations.map((location) => (
              <div key={location.name} className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20 hover:border-white/40 transition-colors">
                <h4 className="font-serif text-lg text-accent mb-4">{location.name}</h4>
                <div className="space-y-3 text-sm text-primary-foreground/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p>{location.address}</p>
                      <p>{location.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-primary-foreground/90 hover:text-white transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Hours & Email */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20 space-y-4 text-sm text-primary-foreground/85">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary-foreground/90 mb-2">Business Hours</p>
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Sat: By Appointment</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@attorneydeep.com" className="text-primary-foreground/90 hover:text-white transition-colors">
                  info@attorneydeep.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-xs text-primary-foreground/60 max-w-3xl leading-relaxed">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </section>
  )
}
