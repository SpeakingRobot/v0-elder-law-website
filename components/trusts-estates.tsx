import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TrustsEstates() {
  return (
    <section id="resources" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-accent text-3xl md:text-4xl font-semibold mb-4">
            Trusts &amp; Estates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the three major components of Trust &amp; Estate practice
          </p>
        </div>

        <Tabs defaultValue="planning" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="planning" className="text-sm md:text-base">Planning</TabsTrigger>
            <TabsTrigger value="administration" className="text-sm md:text-base">Administration</TabsTrigger>
            <TabsTrigger value="litigation" className="text-sm md:text-base">Litigation</TabsTrigger>
          </TabsList>

          <TabsContent value="planning" className="mt-0">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h3 className="font-serif text-2xl text-accent mb-4">Trust &amp; Estate Planning</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Trust &amp; Estate Planning runs the spectrum from a relatively simple affair to an 
                  extremely complex, interrelated web of documents and entities. No matter how simple 
                  or complex, however, the usual goal is the same: <strong className="text-foreground">preservation of assets during 
                  lifetime, smooth inheritance for beneficiaries upon death and saving on taxes where 
                  possible.</strong>
                </p>
                <p>
                  The best known Trust &amp; Estate Planning tool is the Last Will and Testament. While 
                  a tried and true document, the utility of a thoughtfully prepared Last Will and 
                  Testament cannot be overstated. While Wills are frequently used to ensure inheritances 
                  pass between spouses and to children, they&apos;re also a great way to nominate guardians 
                  for minor and disabled children, engage in asset protection planning for young or 
                  troubled beneficiaries and ensure a fair distribution of assets for blended families.
                </p>
                <p>
                  Trusts are similar to Wills, in that they have provisions which direct distribution 
                  of assets upon death, but Trusts also serve many other purposes. Unlike Wills, Trusts 
                  are typically not subject to Court review and oversight — that is, they avoid probate. 
                  In addition, Trusts are frequently used as a tool for Medicaid planning and asset 
                  protection planning during life.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="administration" className="mt-0">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h3 className="font-serif text-2xl text-accent mb-4">Trust &amp; Estate Administration</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Trust &amp; Estate Administration is the process of running or operating the Trust or Estate.
                </p>
                <p>
                  When it comes to Estates, this process usually begins with the offering of a Last Will 
                  and Testament for probate or petitioning the Surrogate&apos;s Court for Letters of 
                  Administration after the death of a loved one, depending upon if they had a Last Will 
                  and Testament or not.
                </p>
                <p>
                  After Court appointment of an Executor or Administrator, the next step of Estate 
                  Administration consist of <strong className="text-foreground">collection of assets, payment of creditors and, 
                  ultimately, making distributions to the beneficiaries of the Estate.</strong>
                </p>
                <p>
                  Trust administration typically begins the moment the Trust is created. Trusts tend 
                  to be administered pursuant to the terms of the Trust documents itself, but external 
                  laws must be considered as well, especially when using Trusts to qualify for Medicaid 
                  benefits. Trust administration can last for several years, even several generations.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="litigation" className="mt-0">
            <div className="bg-muted rounded-lg p-6 md:p-8">
              <h3 className="font-serif text-2xl text-accent mb-4">Trust &amp; Estate Litigation</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Trust &amp; Estate Litigation is the legal, Court-involved process which tends to result 
                  when either Trust &amp; Estate Planning or Trust &amp; Estate Administration go awry.
                </p>
                <p>
                  Trust &amp; Estate Litigation typically concerns:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The validity of a Last Will and Testament</li>
                  <li>Issues of mental capacity of those creating Trusts or Wills</li>
                  <li>Concerns of undue influence</li>
                  <li>Claims surrounding the failure of Executor, Administrator or Trustee to properly administer an Estate or Trust</li>
                </ul>
                <p>
                  Having experienced legal counsel during these challenging times is essential to 
                  protecting your rights and interests.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
