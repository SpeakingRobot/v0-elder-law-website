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
    <section id="contact" className="section-spacing bg-secondary/60">
      <div className="site-container">
        <div className="mb-12 text-center md:mb-14">
          <h2 className="section-heading mb-4">
            Contact Us
          </h2>
          <p className="section-lead">
            Schedule a free consultation to discuss your estate planning needs
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Contact Form */}
          <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-9 lg:p-10">
            <h3 className="mb-8 font-serif text-2xl leading-snug text-accent">
              Request a Free Consultation
            </h3>
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input id="firstName" autoComplete="given-name" placeholder="John" className="h-12 rounded-lg border-border bg-background/70 px-4 shadow-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" autoComplete="family-name" placeholder="Doe" className="h-12 rounded-lg border-border bg-background/70 px-4 shadow-none" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" autoComplete="email" placeholder="john@example.com" className="h-12 rounded-lg border-border bg-background/70 px-4 shadow-none" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input id="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" className="h-12 rounded-lg border-border bg-background/70 px-4 shadow-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How Can We Help?
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your situation..."
                  rows={4}
                  className="min-h-32 rounded-lg border-border bg-background/70 px-4 py-3 shadow-none"
                />
              </div>
              <Button 
                type="submit" 
                className="h-12 w-full rounded-lg bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Submit Request
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="rounded-2xl bg-accent p-6 text-white shadow-sm sm:p-9 lg:p-10">
            {/* Office Locations */}
            <div className="grid gap-6">
              {locations.map((location) => (
                <div key={location.name} className="border-b border-white/20 pb-8">
                  <h3 className="mb-6 font-serif text-2xl text-white">{location.name}</h3>
                  <div className="space-y-5 text-base">
                    <div className="flex items-start gap-3">
                      <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-white/60" />
                      <div className="leading-7 text-white/80">
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-white/60" />
                      <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="font-medium text-white transition-colors hover:text-white/70">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="py-8">
              <h3 className="mb-6 font-serif text-2xl text-white">Office Hours</h3>
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-white/60" />
                  <div className="space-y-1 text-white/80">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-white/60" />
                  <a href="mailto:Deep@AttorneyDeep.com" className="break-all font-medium text-white transition-colors hover:text-white/70">
                    Deep@AttorneyDeep.com
                  </a>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="border-t border-white/20 pt-6 text-xs leading-6 text-white/65">
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
