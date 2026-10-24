import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-accent text-white">
      <div className="site-container pb-8 pt-14 md:pt-16">
        <div data-reveal className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* About */}
          <div className="sm:col-span-2">
            <h3 className="mb-4 font-serif text-2xl font-medium">
              Attorney Deep
            </h3>
            <p className="mb-6 max-w-md text-sm leading-7 text-white/70">
              Mr. Deep Chopra is dedicated to helping families in Nassau County 
              plan for the future through comprehensive estate planning, elder 
              law, and asset protection services.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:516-912-8111" className="hover:text-white transition-colors">516 912 8111</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:Deep@AttorneyDeep.com" className="hover:text-white transition-colors">Deep@AttorneyDeep.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">Practice Areas</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="#services" className="hover:text-white transition-colors">Wills and Trusts</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Probate</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Medicaid Planning</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Elder Law</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Asset Protection</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">Office Location</h4>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-white">Syosset</p>
                  <p>50 Jackson Avenue</p>
                  <p>Syosset, NY 11791</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60 lg:flex-row lg:items-center">
          <p>&copy; {new Date().getFullYear()} Attorney Deep. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
            <span className="text-white/60">Attorney Advertisement</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
