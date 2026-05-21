import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-semibold mb-4">
              Law Offices
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Dedicated to helping families in Nassau County and New York City 
              plan for the future through comprehensive estate planning, elder 
              law, and asset protection services.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@lawoffice.com" className="hover:text-white transition-colors">info@lawoffice.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#services" className="hover:text-white transition-colors">Wills and Trusts</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Probate</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Medicaid Planning</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Elder Law</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Asset Protection</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-white">Nassau County</p>
                  <p>Woodbury, NY 11797</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-white">New York City</p>
                  <p>New York, NY 10022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Law Offices. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
            <span className="text-white/40">Attorney Advertisement</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
