"use client"

import { useState } from "react"
import { FileText, Settings, Scale, ChevronRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    id: "planning",
    label: "Planning",
    icon: FileText,
    title: "Trust & Estate Planning",
    subtitle: "Building your legacy with intention",
    highlights: [
      "Preservation of assets during lifetime",
      "Smooth inheritance for beneficiaries",
      "Tax optimization strategies",
      "Guardian nominations for children",
    ],
    content: [
      {
        heading: "Last Will and Testament",
        text: "The best known Trust & Estate Planning tool. A thoughtfully prepared Will ensures inheritances pass between spouses and children, nominates guardians for minor and disabled children, and ensures fair distribution for blended families.",
      },
      {
        heading: "Trusts",
        text: "Unlike Wills, Trusts avoid probate and Court oversight. They serve as powerful tools for Medicaid planning and asset protection during life, with provisions directing distribution of assets upon death.",
      },
    ],
  },
  {
    id: "administration",
    label: "Administration",
    icon: Settings,
    title: "Trust & Estate Administration",
    subtitle: "Guiding you through the process",
    highlights: [
      "Probate and Letters of Administration",
      "Collection of estate assets",
      "Payment of creditors",
      "Distribution to beneficiaries",
    ],
    content: [
      {
        heading: "Estate Administration",
        text: "Beginning with offering a Will for probate or petitioning the Surrogate's Court for Letters of Administration, we guide Executors and Administrators through asset collection, creditor payments, and beneficiary distributions.",
      },
      {
        heading: "Trust Administration",
        text: "Trust administration begins the moment the Trust is created and can last for several years or even generations. We ensure compliance with Trust terms and applicable laws, especially for Medicaid qualification.",
      },
    ],
  },
  {
    id: "litigation",
    label: "Litigation",
    icon: Scale,
    title: "Trust & Estate Litigation",
    subtitle: "Protecting your rights and interests",
    highlights: [
      "Will validity challenges",
      "Mental capacity issues",
      "Undue influence claims",
      "Fiduciary duty disputes",
    ],
    content: [
      {
        heading: "When Disputes Arise",
        text: "Trust & Estate Litigation addresses issues when planning or administration goes awry. This includes challenges to Will validity, questions of mental capacity, concerns of undue influence, and claims against fiduciaries.",
      },
      {
        heading: "Experienced Representation",
        text: "Having experienced legal counsel during these challenging times is essential. We advocate vigorously to protect your rights, whether you're defending an estate plan or challenging improper administration.",
      },
    ],
  },
]

export function TrustsEstates() {
  const [activeTab, setActiveTab] = useState("planning")
  const activeData = tabs.find((t) => t.id === activeTab)!

  return (
    <section id="resources" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-3">
            Our Expertise
          </span>
          <h2 className="font-serif text-accent text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-balance">
            Trusts &amp; Estates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Understanding the three major components of Trust &amp; Estate practice
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 flex items-center gap-4 p-5 rounded-xl transition-all duration-300 text-left group",
                    isActive
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-card hover:bg-card/80 border border-border hover:border-primary/30"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                      isActive ? "bg-white/20" : "bg-primary/10"
                    )}
                  >
                    <Icon className={cn("w-6 h-6", isActive ? "text-white" : "text-primary")} />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn("font-semibold text-lg", !isActive && "text-foreground")}>
                      {tab.label}
                    </h3>
                    <p className={cn("text-sm", isActive ? "text-white/80" : "text-muted-foreground")}>
                      {tab.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    className={cn(
                      "w-5 h-5 transition-transform",
                      isActive ? "text-white rotate-90" : "text-muted-foreground group-hover:translate-x-1"
                    )}
                  />
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Highlights Sidebar */}
              <div className="md:col-span-2 bg-accent/5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
                <h3 className="font-serif text-2xl md:text-3xl text-accent mb-2">
                  {activeData.title}
                </h3>
                <p className="text-muted-foreground mb-6">{activeData.subtitle}</p>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground uppercase tracking-wide">Key Focus Areas</p>
                  {activeData.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 p-6 md:p-8">
                <div className="space-y-8">
                  {activeData.content.map((block, i) => (
                    <div key={i}>
                      <h4 className="font-serif text-xl text-accent mb-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                          {i + 1}
                        </span>
                        {block.heading}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed pl-10">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group"
                  >
                    Schedule a consultation to discuss your needs
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
