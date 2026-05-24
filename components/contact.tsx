"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const locations = [
  {
    name: "Syosset Office",
    address: "50 Jackson Avenue",
    city: "Syosset, NY 11791",
    phone: "516 912 8111",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-accent text-3xl md:text-4xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation to discuss your estate planning needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-accent mb-6">
              Request a Free Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How Can We Help?
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your situation..."
                  rows={4}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Submit Request
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="grid sm:grid-cols-1 gap-6">
              {locations.map((location) => (
                <div key={location.name} className="bg-card rounded-lg p-6 shadow-sm">
                  <h4 className="font-serif text-lg text-accent mb-4">{location.name}</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div className="text-muted-foreground">
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h4 className="font-serif text-lg text-accent mb-4">Office Hours</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:Deep@AttorneyDeep.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    Deep@AttorneyDeep.com
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              The information on this website is for general information purposes only. Nothing on 
              this site should be taken as legal advice for any individual case or situation. This 
              information is not intended to create, and receipt or viewing does not constitute, an 
              attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
