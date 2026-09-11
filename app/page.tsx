import { LockKeyhole, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen items-center justify-center px-6 py-16">
        <section className="w-full max-w-xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <LockKeyhole className="h-9 w-9 text-accent" aria-hidden="true" />
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Attorney Deep
          </p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Website temporarily unavailable
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            This website is currently unavailable because the subscription has not been paid. Please contact us to restore access.
          </p>
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 rounded-xl border border-border bg-card p-6 text-left shadow-sm sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <a className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent" href="tel:516-912-8111">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              516 912 8111
            </a>
            <a className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-accent" href="mailto:Deep@AttorneyDeep.com">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              Deep@AttorneyDeep.com
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">50 Jackson Avenue, Syosset, NY 11791</p>
        </section>
      </div>
    </main>
  )
}
