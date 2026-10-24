import Image from "next/image"
import { ArrowUpRight, Award } from "lucide-react"
import type { ReactNode } from "react"

const links = {
  association: "https://www.linkedin.com/company/nassaucountybar-association/",
  president: "https://www.linkedin.com/in/maxine-s-broderick-5b1a328/",
  viceChair: "https://www.linkedin.com/in/carrieadduci/",
  sponsor: "https://www.linkedin.com/company/abstracts-inc./",
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-accent underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
    >
      {children}<ArrowUpRight aria-hidden="true" className="ml-0.5 inline h-3.5 w-3.5" />
    </a>
  )
}

export function CommitteeAnnouncement() {
  return (
    <section id="professional-milestone" aria-labelledby="committee-announcement-title" className="section-spacing border-b border-border/60 bg-background">
      <div className="site-container">
        <div className="grid overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg shadow-accent/[0.03] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex items-center justify-center bg-accent/5 p-6 sm:p-8 lg:p-10">
            <div className="relative aspect-[800/1017] w-full max-w-sm overflow-hidden rounded-lg shadow-md">
              <Image
                src="/nassau-bar-chair.png"
                alt="Appointment announcement naming Deep Chopra, Esq. Chair of the Nassau County Bar Association Real Property Law Committee"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 384px, 85vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:py-12">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary sm:text-xs">
              <Award aria-hidden="true" className="h-4 w-4" /> Professional Milestone
            </div>
            <p className="section-kicker">A note of gratitude</p>
            <h2 id="committee-announcement-title" className="mb-6 font-serif text-3xl font-medium leading-tight tracking-tight text-accent sm:text-[2.15rem]">
              Serving as Chair of the Real Property Law Committee
            </h2>

            <div className="space-y-4 text-[15px] leading-7 text-muted-foreground">
              <p>
                I am honored to serve as Chair of the Real Property Law Committee of the <ExternalLink href={links.association}>Nassau County Bar Association</ExternalLink>, appointed by President <ExternalLink href={links.president}>Hon. Maxine S. Broderick</ExternalLink>.
              </p>
              <p>
                I extend my sincere gratitude to Madam President for her confidence and for entrusting me with this responsibility. I undertake this appointment with a strong sense of duty and look forward to serving diligently and to the best of my ability.
              </p>
              <p>
                I am also pleased to welcome <ExternalLink href={links.viceChair}>Carrie C. Adduci</ExternalLink> as Vice-Chair. I look forward to working collaboratively with her and our fellow members to advance the Committee’s objectives and contribute to the continued development of real property law.
              </p>
              <p>
                My thanks as well to <ExternalLink href={links.sponsor}>Abstracts, Incorporated</ExternalLink> for its continued support as a Committee sponsor.
              </p>
            </div>

            <div className="mt-7 border-t border-border pt-5">
              <p className="font-serif text-lg font-semibold text-accent">Deep Chopra, Esq.</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">Chair, Real Property Law Committee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
