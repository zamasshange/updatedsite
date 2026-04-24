import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Globe,
  Instagram,
  Megaphone,
  Music2,
  Palette,
  Radio,
  Share2,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react"
import { servicesBySlug, servicesData } from "@/lib/services-data"

const iconMap = {
  Palette,
  Globe,
  Smartphone,
  Share2,
  Video,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Megaphone,
  Instagram,
  TikTok: Music2,
  Twitter: Radio,
  YouTube: Video,
  Twitch: Radio,
  Spotify: Music2,
}

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = servicesBySlug[slug]

  if (!service) {
    notFound()
  }

  const Icon = iconMap[service.iconKey as keyof typeof iconMap] ?? Share2
  const interestedMailHref = `mailto:Burdolar@gmail.com?subject=${encodeURIComponent(`Interested in ${service.title}`)}&body=${encodeURIComponent(service.contactMessage)}`
  const contactHref = "/#contact"

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/80 bg-muted/30">
        <div className="pointer-events-none absolute inset-0">
          <div className={`absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-3xl`} />
          <div className="absolute left-1/3 top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-14">
          <Link href="/#services" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </Link>

          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-start lg:gap-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Service Detail
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {service.title}
                <span className={`mt-2 block h-1.5 w-24 rounded-full bg-gradient-to-r ${service.color}`} />
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{service.shortDescription}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/80 bg-card/90 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Delivery Window</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{service.deliveryTime}</p>
                </div>
                <div className="rounded-xl border border-border/80 bg-card/90 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Best Fit</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{service.idealFor[0]}</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-border/80 bg-card/90 p-4 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Quick Outcome</p>
                <p className="mt-1 text-sm text-foreground">
                  You get a clear strategy, execution structure, and measurable improvement plan tailored for this service.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-md md:sticky md:top-24">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-2xl`} />

              <div className={`mb-4 inline-flex rounded-xl p-3 ring-1 ring-black/5 ${service.bgColor}`}>
                {service.logoSrc ? (
                  <Image src={service.logoSrc} alt={service.title} width={26} height={26} className="h-[26px] w-[26px] object-contain" />
                ) : (
                  <Icon className={`h-6 w-6 ${service.textColor}`} />
                )}
              </div>
              <h2 className="text-lg font-semibold text-foreground">{service.title}</h2>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-border/70 bg-muted/70 p-3">
                <CalendarClock className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Expected Delivery</p>
                  <p className="text-sm font-medium text-foreground">{service.deliveryTime}</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <Link href={interestedMailHref} className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${service.color} px-4 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-95`}>
                  I&apos;m Interested
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={contactHref} className="inline-flex w-full items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Ideal For</h3>
              <ul className="mt-4 space-y-2.5">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">What You Get</h3>
              <ul className="mt-4 space-y-2.5">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm">
              <div className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">How I Work</h3>
              <ol className="mt-4 space-y-3">
                {service.process.map((step, index) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary ring-1 ring-primary/20">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm sm:p-7">
            <div className={`pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${service.color}`} />
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Service Article</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{service.articleTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.articleIntro}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.idealFor.slice(0, 2).map((item) => (
                  <span key={item} className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-7">
                {service.articleSections.map((section, index) => (
                  <section key={section.heading} className="relative pl-5">
                    <span className={`absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-gradient-to-br ${service.color}`} />
                    <h3 className="text-lg font-semibold text-foreground">{section.heading}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{section.content}</p>
                    {index < service.articleSections.length - 1 && (
                      <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent" />
                    )}
                  </section>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
