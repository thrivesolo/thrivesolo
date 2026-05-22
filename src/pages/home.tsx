import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CircleArrowRight,
  FileText,
  TrendingUp,
  PiggyBank,
  Zap,
  Target,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  CalendarClock,
  MessageCircle,
  Rocket,
  Receipt,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";

const testimonials = [
  {
    name: "Chase",
    title: "Business Owner",
    quote:
      "Working with JT has been an absolute pleasure! I'm the owner of multiple businesses and he was the expert I needed. I've already referred JT to other friends and family, and I'll definitely be back each year!",
    rating: 5,
    image: "/avatars/huntzinger.jpeg",
  },
  {
    name: "Logan",
    title: "Business Owner",
    quote:
      "JT is awesome. So easy to work with, great communication. Asked all the right questions to make taxes simple and know you are being as tax efficient as possible. Would 100% recommended individuals or business owners working with JT.",
    rating: 5,
    image: "/avatars/smith.jpeg",
  },
  {
    name: "Cole",
    title: "Physician's Assistant",
    quote:
      "Working with J.T. gave me confidence about what to do with my money. I also wouldn't have known about all the tax benefits I qualified for without him. J.T. is so friendly and knowledgeable and made setting goals comfortable and easy.",
    rating: 5,
    image: "/avatars/engemann2.jpeg",
  },
  {
    name: "Lydia",
    title: "Health Coach",
    quote:
      "Without J.T.'s help, it was hard to take action. But with him, I not only learned new info, but then I followed through! His expert advice gave me a clear path. I may not have ever heard about some of the options available to me without his help. J.T.'s the best!",
    rating: 5,
    image: "/avatars/engemann.jpeg",
  },
  {
    name: "Joe",
    title: "Franchise Director",
    quote:
      "I was very impressed with J.T.'s clear guidance and overall knowledge with our situation. He was able to assist with questions about our personal tax situation as well as financial guidance. Well recommended.",
    rating: 5,
    image: "/avatars/villalobos.jpeg",
  },
  {
    name: "Emily",
    title: "Human Resources",
    quote:
      "J.T.'s knowledge of finance and tax, paired with a genuine commitment to helping clients succeed, sets him apart. He simplified complex concepts and provided clear guidance that truly made a difference. I trust J.T. completely and can't recommend him enough!",
    rating: 5,
    image: "/avatars/villalobos2.jpeg",
  },
];

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const maxIdx = Math.max(0, testimonials.length - visibleCount);
    if (testimonialIndex > maxIdx) {
      setTestimonialIndex(maxIdx);
    }
  }, [visibleCount, testimonialIndex]);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const nextTestimonials = () => {
    setTestimonialIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevTestimonials = () => {
    setTestimonialIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-[200vh] bg-black text-white overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(63, 63, 70, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(63, 63, 70, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <Navbar />
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-32 pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Status Toggle */}
          <div className="flex items-center gap-3 mb-12 animate-fade-in">
            <div className="relative w-11 h-[22px] bg-gradient-to-r from-green-400 to-green-500 rounded-full">
              <div className="absolute right-1 top-[3px] w-4 h-4 bg-white rounded-full transition-transform duration-300" />
            </div>
            <span className="text-sm text-zinc-300">
              Currently taking new clients.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 animate-fade-in-up">
            <span className="md:whitespace-nowrap">
              Turn taxes into{" "}
              <span className="relative inline-block">
                strategy
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#FFBB33]/40 -z-10 rounded-sm"></span>
              </span>
              ,
            </span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>not a chore.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-zinc-400 mb-12 animate-fade-in-up animation-delay-200 max-w-2xl">Tax filing and tax planning from a pro you can actually talk to.<br />Clear communication. Flat-fee pricing. No surprises.</p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="group bg-[#0500FF] hover:bg-[#2020FF] text-white px-8 py-6 text-base rounded-full transition-all duration-[650ms] hover:scale-[1.02]"
            >
              Click to get a price
              <CircleArrowRight className="ml-2 h-5 w-5 transition-transform duration-[650ms] group-hover:rotate-90" />
            </Button>
          </div>

          {/* Trust Widget */}
          <div className="animate-fade-in-up animation-delay-600 flex items-center gap-3 mt-[25px]">
            <button
              onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center group"
              aria-label="Read client testimonials"
            >
              {[
                "/avatars/huntzinger.jpeg",
                "/avatars/smith.jpeg",
                "/avatars/engemann2.jpeg",
                "/avatars/villalobos.jpeg",
                "/avatars/villalobos2.jpeg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  loading="eager"
                  className="w-8 h-8 rounded-full object-cover border-2 border-zinc-900 transition-transform duration-200 group-hover:scale-110"
                  style={{ marginLeft: i === 0 ? 0 : "-0.8rem" }}
                />
              ))}
            </button>
            <p className="text-sm text-zinc-400">
              Trusted by 50+ owners & their families.
            </p>
          </div>
        </div>
      </div>
      {/* Why Work With Me Section */}
      <section id="why-work-with-me" className="relative z-20 py-24">
        <div className="container p-12 rounded-2xl z-50 bg-zinc-950/50 border border-zinc-800 mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">Why work with ThriveSolo?</h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl">Not all tax pros are the same. Here's what sets me apart.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Year-round partnership */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col overflow-hidden">
                <span className="pointer-events-none absolute -top-4 right-4 text-[9rem] font-black text-white/[0.04] select-none leading-none">01</span>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0500FF]/80 via-[#0500FF]/40 to-transparent rounded-t-xl" />
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0500FF]/30 to-[#0500FF]/10 border border-[#0500FF]/20 flex items-center justify-center mb-6">
                  <CalendarClock className="w-5 h-5 text-[#0500FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proactive, year-round partnership.</h3>
                <p className="text-zinc-400 leading-relaxed">Life doesn't wait until April, neither should your tax questions.</p>
              </div>
            </div>

            {/* Clear communication */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col overflow-hidden">
                <span className="pointer-events-none absolute -top-4 right-4 text-[9rem] font-black text-white/[0.04] select-none leading-none">02</span>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0500FF]/80 via-[#0500FF]/40 to-transparent rounded-t-xl" />
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0500FF]/30 to-[#0500FF]/10 border border-[#0500FF]/20 flex items-center justify-center mb-6">
                  <MessageCircle className="w-5 h-5 text-[#0500FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clear communication &amp; follow-through.</h3>
                <p className="text-zinc-400 leading-relaxed">Prompt answers in plain English. Always know what's happening and why.</p>
              </div>
            </div>

            {/* Implementation, not just advice */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col overflow-hidden">
                <span className="pointer-events-none absolute -top-4 right-4 text-[9rem] font-black text-white/[0.04] select-none leading-none">03</span>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0500FF]/80 via-[#0500FF]/40 to-transparent rounded-t-xl" />
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0500FF]/30 to-[#0500FF]/10 border border-[#0500FF]/20 flex items-center justify-center mb-6">
                  <Rocket className="w-5 h-5 text-[#0500FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation, not just advice.</h3>
                <p className="text-zinc-400 leading-relaxed">Strategies only work if their actually used. I help turn plans into action.</p>
              </div>
            </div>

            {/* Flat-fee pricing */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col overflow-hidden">
                <span className="pointer-events-none absolute -top-4 right-4 text-[9rem] font-black text-white/[0.04] select-none leading-none">04</span>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0500FF]/80 via-[#0500FF]/40 to-transparent rounded-t-xl" />
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0500FF]/30 to-[#0500FF]/10 border border-[#0500FF]/20 flex items-center justify-center mb-6">
                  <Receipt className="w-5 h-5 text-[#0500FF]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flat-fee pricing.</h3>
                <p className="text-zinc-400 leading-relaxed">One straightforward fee for the year. No surprise invoices and no monthly subscriptions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="relative z-20 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Photo */}
            <div className="relative h-full">
              <div className="relative h-full rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect
                  blur={0}
                  borderWidth={2}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative h-full bg-zinc-900/50 rounded-xl overflow-hidden">
                  <img
                    src="/jt-ryker.png"
                    alt="J.T. Ryker"
                    className="w-full h-full object-cover object-top block"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-3">Hi, I’m J.T.</h2>
              {/* Enrolled Agent badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-0 py-1 rounded-full bg-[#0500FF]/8 text-[#4444ff] text-xs font-medium tracking-wide">
                  Enrolled Agent
                </span>
              </div>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  I’ve been in the financial industry for more than 13 years and during that time I’ve discovered what I’m passionate about: Helping my clients take control of their taxes and keep more of what they earn.
                </p>
                <p>
                 Here's a little more about me: I'm based in Florida, have four awesome kids and am a die-hard Christian. If you’re looking for more than a once-a-year transaction and are ready for a trusted tax partner, let’s connect.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="https://www.linkedin.com/in/jtryker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0500FF]/50 text-[#4444ff] hover:bg-[#0500FF]/10 transition-colors text-sm font-medium"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
              <div className="mt-8">
                <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Previously at</p>
                <div className="flex flex-wrap items-center gap-10">
                  <img src="/logos/goldman-sachs.png?v=4" alt="Goldman Sachs" className="h-[46px] w-auto" />
                  <img src="/logos/citi.png?v=4" alt="Citi" className="h-[37px] w-auto" />
                  <img src="/logos/jm-family.png?v=4" alt="JM Family Enterprises" className="h-[46px] w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="relative z-20 py-24">
        <div className="container p-12 rounded-2xl z-50 bg-zinc-950/50 border border-zinc-800 mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">How can I help?</h2>

          <p className="text-lg md:text-xl text-zinc-400 mb-12">White-glove service for people who want <em>more</em> from their accountant.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Tax Filing */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[#0500FF]/20 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-[#0500FF]" />
                </div>
                <h3 className="text-2xl font-light mb-4">Tax Filing</h3>
                <p className="text-zinc-400 leading-relaxed">Meticulous tax return preparation for simple or complex situations.</p>
              </div>
            </div>

            {/* Year-Round Support */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[#0500FF]/20 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#0500FF]" />
                </div>
                <h3 className="text-2xl font-light mb-4">Year-Round Support</h3>
                <p className="text-zinc-400 leading-relaxed">Proactive guidance all year, not just at tax time.</p>
              </div>
            </div>

            {/* Tax Strategy */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-full bg-[#0500FF]/20 flex items-center justify-center mb-6">
                  <PiggyBank className="w-6 h-6 text-[#0500FF]" />
                </div>
                <h3 className="text-2xl font-light mb-4">Tax Strategy</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Custom planning that fits your tax profile and your lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Here's how to get started */}
          <div className="border-t border-zinc-800 pt-12">
            <h3 className="text-2xl md:text-3xl font-light mb-8">
              Here's how to get started...
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0400CC] flex items-center justify-center text-white font-medium bg-[#18181b80]">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Get a price.</h4>
                  <p className="text-zinc-400">Describe your situation, get an instant quote.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0400CC] flex items-center justify-center text-white font-medium bg-[#18181b80]">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Book a meeting.</h4>
                  <p className="text-zinc-400">Ask me questions, clarify the details.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#0400CC] flex items-center justify-center text-white font-medium bg-[#18181b80]">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Get it done.</h4>
                  <p className="text-zinc-400">Filing and planning, all in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-20 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-balance">What do clients say?</h2>
              <p className="text-lg md:text-xl text-zinc-400">
                Real feedback from real people who've worked with me.
              </p>
            </div>
            <div className="flex gap-3 shrink-0 ml-8">
              <button
                onClick={prevTestimonials}
                disabled={testimonialIndex === 0}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonials}
                disabled={testimonialIndex >= maxIndex}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(-${testimonialIndex * (100 / visibleCount)}% - ${(testimonialIndex * 24) / visibleCount}px))`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)`,
                    }}
                  >
                    <div className="relative rounded-2xl border border-zinc-800 p-3 h-full">
                      <GlowingEffect
                        blur={0}
                        borderWidth={2}
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                      />
                      <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-[#FFBB33]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-zinc-300 leading-relaxed mb-6 flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                            width={48}
                            height={48}
                          />
                          <div>
                            <p className="font-medium text-white">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-zinc-500">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Who I Serve Section */}
      <section id="who-i-serve" className="relative z-20 py-24">
        <div className="container p-12 rounded-2xl z-50 bg-zinc-950/50 border border-zinc-800 mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">Who do I serve?</h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12">First-class tax services for individuals, families, and solo business owners.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Individuals & Families */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-2xl font-light mb-3">
                  Individuals &amp; Families
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">Households who want proactive planning—not just a filed return.</p>

                <div className="mb-8">
                  <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-4">
                    Good fit if you:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0500FF] flex-shrink-0" />
                      Have solid income, but feel things are getting complicated
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0500FF] flex-shrink-0" />
                      Are looking for a tax pro who actually follows through
                    </li>
                  </ul>
                </div>

                <div className="border-t border-zinc-800 pt-6 mt-auto">
                  <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-4">
                    Common outcomes
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-zinc-400">
                      <Check className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      No surprise tax bills in April
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <Check className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      Promptly answered emails
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <Check className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      Tax plans that actually work
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Solo Business Owners */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-2xl font-light mb-3">
                  Solo Business Owners
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">Profitable owner-operators who want personalized tax strategy.</p>

                <div className="mb-8">
                  <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-4">
                    Good fit if you:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0500FF] flex-shrink-0" />
                      Run a service-based business (software, consulting, agency)
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0500FF] flex-shrink-0" />
                      Want thoughtful strategies for deductions, entity selection & more
                    </li>
                  </ul>
                </div>

                <div className="border-t border-zinc-800 pt-6 mt-auto">
                  <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-4">
                    Common outcomes
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-zinc-400">
                      <Check className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      Plain English recommendations
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <Check className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      Done-with-you implementation
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <Check className="mt-0.5 w-4 h-4 text-green-500 flex-shrink-0" />
                      Proactive partnership approach
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="relative z-20 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            Pick a plan that works for <em>you.</em>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12">Every package covers a full year of service with one simple fee.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col">
                <div className="mb-4 h-[28px]" />
                <h3 className="text-3xl font-semibold mb-6">Basic</h3>
                <div className="space-y-6 text-zinc-400 mb-8 flex-grow">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Core Services</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Tax return preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Document storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Video walkthrough</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Support</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Year-round support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Audit defense</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>IRS notice assistance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Planning</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Estimated payments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Tax projections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Scenario analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-[#0500FF] hover:bg-[#2020FF]">Get a Price</Button>
              </div>
            </div>

            {/* Essential - Featured */}
            <div className="relative rounded-2xl border-2 border-[#0500FF] p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="bg-[#0500FF] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-3xl font-semibold mb-6">Essential</h3>
                <div className="space-y-6 text-zinc-400 mb-8 flex-grow">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Core Services</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Tax return preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Document storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Video walkthrough</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Support</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Year-round support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Audit defense</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>IRS notice assistance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Planning</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Estimated payments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Tax projections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Scenario analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>1 meeting per year</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-[#0500FF] hover:bg-[#2020FF]">Get a Price</Button>
              </div>
            </div>

            {/* Premium */}
            <div className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative bg-zinc-900/50 rounded-xl p-8 h-full flex flex-col">
                <div className="mb-4 h-[28px]" />
                <h3 className="text-3xl font-semibold mb-6">Premium</h3>
                <div className="space-y-6 text-zinc-400 mb-8 flex-grow">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Core Services</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Tax return preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Document storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Video walkthrough</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Support</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Year-round support (priority)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>Audit defense</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>IRS notice assistance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Planning</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Estimated payments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Tax projections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Scenario analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>4 meetings per year</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-[#0500FF] hover:bg-[#2020FF]">Get a Price</Button>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-md text-zinc-500">
            Need help with planning only?{" "}
            <a
              href="#"
              className="text-[#0500FF] underline-offset-2 hover:underline hover:text-white transition-colors"
            >
              Click here.
            </a>
          </p>
        </div>
      </section>
      {/* FAQs Section */}
      <section id="faq" className="relative z-20 py-24">
        <div className="container p-12 rounded-2xl z-50 bg-zinc-950/50 border border-zinc-800 mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-balance">
            FAQs
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12">
            Common questions about working with ThriveSolo.
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 last:border-b"
            >
              <AccordionTrigger className="text-lg font-light hover:no-underline py-6">
                What tax situations do you handle?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6">
                Simple or complex situations are welcome. Stocks/crypto, equity
                comp (RSUs/ISOs), real estate, K1's, and more are covered. I
                also handle S-Corps. Unfortunately, I don't deal with C-Corps
                and only work with partnerships on a limited basis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 last:border-b"
            >
              <AccordionTrigger className="text-lg font-light hover:no-underline py-6">
                What's your response time to emails/questions?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6">
                I usually respond to all my clients in under 48 hours. Premium
                clients get priority responses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 last:border-b"
            >
              <AccordionTrigger className="text-lg font-light hover:no-underline py-6">
                Which states do you cover?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6">
                I can prep tax returns in 49 states (sorry Oregonians). Most of
                my clients live in Florida, Texas, Utah, and California.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 last:border-b"
            >
              <AccordionTrigger className="text-lg font-light hover:no-underline py-6">
                How do you bill?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6">
                I bill 100% upfront and every engagement covers a full calendar
                year. No hourly charges or monthly subscriptions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 last:border-b"
            >
              <AccordionTrigger className="text-lg font-light hover:no-underline py-6">
                What's your onboarding process like?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6">
                Step one is getting a price. After that, you'll acknowledge our
                engagement terms and can request an intro call. If everything's
                a fit, you'll pay and then we're off!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 last:border-b"
            >
              <AccordionTrigger className="text-lg font-light hover:no-underline py-6">
                How do you handle extensions?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6">
                Tax filing and tax planning take time. Extensions can be a great way to make sure we have enough to get everything right. If your return's extended it will alwyas be in your best interest, and never cost extra.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-20 py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} ThriveSolo. All rights reserved.
            </p>
            </div>
        </div>
      </footer>
    </main>
  );
}
