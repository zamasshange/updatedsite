"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Section, FadeIn } from "./ui/section"
import Image from "next/image"
import { 
  Send, 
  CheckCircle, 
  Mail, 
  MapPin, 
  Phone,
  Clock,
  ArrowRight
} from "lucide-react"
import { Input } from "./ui/input"

export function Contact() {
  const ref = useRef(null)
  const searchParams = useSearchParams()
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service")
    const messageFromUrl = searchParams.get("message")

    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl)
    }
    if (messageFromUrl) {
      setMessage(messageFromUrl)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <Section id="contact" className="bg-muted/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:px-4 sm:text-sm">
                Get In Touch
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-headline text-foreground mb-4">
                Ready to Grow?
                <br />
                <span className="gradient-text">Let&apos;s Talk.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-body-lg mb-8 text-muted-foreground sm:mb-10">
                Get in touch to discuss your growth goals. I&apos;ll create a 
                custom strategy tailored to your brand and audience.
              </p>
            </FadeIn>

            {/* Contact Options */}
            <div className="space-y-4">
              <FadeIn delay={0.3}>
                <a
                  href="https://wa.me/27736701175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-[#25D366]/50 hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="p-3 rounded-xl bg-[#25D366]/10">
                    <Image
                      src="/Whatsapp_icon.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+27 73 670 1175</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </FadeIn>

              <FadeIn delay={0.35}>
                <a
                  href="tel:+27736701175"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+27 73 670 1175</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a
                  href="mailto:contact@zamashange.co.za"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md sm:gap-4 sm:p-5"
                >
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="break-all text-sm text-muted-foreground">contact@zamashange.co.za</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 sm:gap-4 sm:p-5">
                  <div className="p-3 rounded-xl bg-muted">
                    <MapPin className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Johannesburg, South Africa</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 sm:gap-4 sm:p-5">
                  <div className="p-3 rounded-xl bg-muted">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Secondary Email */}
            <FadeIn delay={0.55}>
              <p className="mt-6 text-sm text-muted-foreground">
                Serving clients worldwide from Johannesburg, South Africa.
              </p>
            </FadeIn>
          </div>

          {/* Right - Form */}
          <FadeIn delay={0.3} direction="left">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-5 sm:p-8">
              <h3 className="text-title text-foreground mb-2">
                Start Your Growth Journey
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 XX XXX XXXX"
                    className="bg-muted border-0 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="app-development">App Development</option>
                    <option value="social-media-management">Social Media Management</option>
                    <option value="promo-videos">Promo Videos</option>
                    <option value="instagram-growth">Instagram Growth</option>
                    <option value="tiktok-marketing">TikTok Marketing</option>
                    <option value="twitter-x-growth">Twitter/X Growth</option>
                    <option value="youtube-growth">YouTube Growth</option>
                    <option value="twitch-streaming">Twitch Streaming</option>
                    <option value="spotify-music">Spotify & Music</option>
                    <option value="organic-growth">Organic Growth</option>
                    <option value="community-management">Community Management</option>
                    <option value="paid-advertising">Paid Advertising</option>
                    <option value="analytics-insights">Analytics & Insights</option>
                    <option value="influencer-marketing">Influencer Marketing</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Monthly Budget (ZAR)
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="starter">R2,500 - R5,000</option>
                    <option value="growth">R5,000 - R10,000</option>
                    <option value="scale">R10,000 - R25,000</option>
                    <option value="enterprise">R25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell me about your goals
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What are you trying to achieve? Current follower count? Target audience?"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to a friendly conversation about your project.
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
