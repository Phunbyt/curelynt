import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  FlaskConical,
  Microscope,
  HeartPulse,
  BarChart3,
  Shield,
  Globe,
  Users,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Dna,
  Activity,
  FileText,
  Beaker,
  Brain,
  TrendingUp,
  Star,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";

type Page = "home" | "about" | "solutions" | "contact";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About Us", page: "about" },
  { label: "Solutions", page: "solutions" },
  { label: "Contact", page: "contact" },
];

// â”€â”€â”€ Shared Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Navbar({ current, onNav }: { current: Page; onNav: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#0F1E35] text-white text-xs py-1.5 px-6 hidden md:flex items-center justify-between">
        <span className="text-slate-300">Advancing health through rigorous science and innovation</span>
        <div className="flex items-center gap-6">
          <a href="mailto:info@curelyntresearch.com" className="flex items-center gap-1.5 hover:text-[#00A896] transition-colors">
            <Mail size={11} /> info@curelyntresearch.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNav("home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 bg-[#00A896] rounded-md flex items-center justify-center">
            <Dna size={18} className="text-white" />
          </div>
          <span className="font-['Figtree'] font-800 text-[1.2rem] text-[#0F1E35] tracking-tight">
            cure<span className="text-[#00A896]">lynt</span>
            <span className="font-300 text-slate-500 text-sm ml-1">Research</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => onNav(l.page)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 font-['DM_Sans'] ${
                current === l.page
                  ? "text-[#00A896] bg-[#F0F7F6]"
                  : "text-slate-600 hover:text-[#0F1E35] hover:bg-slate-50"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => onNav("contact")}
            className="ml-4 px-5 py-2 bg-[#00A896] text-white text-sm font-semibold rounded-md hover:bg-[#008F7E] transition-colors font-['DM_Sans']"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => { onNav(l.page); setOpen(false); }}
              className={`text-left px-4 py-3 rounded-md font-medium text-sm font-['DM_Sans'] ${
                current === l.page
                  ? "text-[#00A896] bg-[#F0F7F6]"
                  : "text-slate-700"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { onNav("contact"); setOpen(false); }}
            className="mt-2 px-4 py-3 bg-[#00A896] text-white text-sm font-semibold rounded-md font-['DM_Sans']"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}

function Footer({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <footer className="bg-[#0F1E35] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#00A896] rounded-md flex items-center justify-center">
                <Dna size={18} className="text-white" />
              </div>
              <span className="font-['Figtree'] font-bold text-[1.1rem]">
                cure<span className="text-[#00A896]">lynt</span>
                <span className="font-light text-slate-400 text-sm ml-1">Research</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 font-['DM_Sans']">
              Advancing human health through precision research, clinical intelligence, and translational science since 2009.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover:bg-[#00A896] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-['Figtree'] font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", page: "about" as Page },
                { label: "Solutions", page: "solutions" as Page },
                { label: "Contact", page: "contact" as Page },
                { label: "Home", page: "home" as Page },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => onNav(l.page)}
                    className="text-slate-400 hover:text-white text-sm transition-colors font-['DM_Sans'] flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={12} className="text-[#00A896] group-hover:translate-x-0.5 transition-transform" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-['Figtree'] font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {["Clinical Research", "Genomics & Biomarkers", "Pharmacovigilance", "Data Analytics", "Regulatory Affairs", "Life Sciences Staffing"].map((s) => (
                <li key={s}>
                  <span className="text-slate-400 text-sm font-['DM_Sans'] flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-[#00A896]" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Figtree'] font-semibold text-sm uppercase tracking-widest text-slate-400 mb-4">Contact</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-slate-400 text-sm font-['DM_Sans']">
                <MapPin size={15} className="text-[#00A896] mt-0.5 shrink-0" />
                <span>9250 E Costilla Avenue, Suite 220<br />Greenwood Village, Colorado 80112</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm font-['DM_Sans']">
                <Mail size={15} className="text-[#00A896] mt-0.5 shrink-0" />
                <span>info@curelyntresearch.com</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm font-['DM_Sans']">
                <Clock size={15} className="text-[#00A896] mt-0.5 shrink-0" />
                <span>Mon-Fri, 8:00 AM - 6:00 PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs font-['DM_Sans']">
            (c) 2024 curelynt Research Inc. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500 font-['DM_Sans']">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// â”€â”€â”€ HOME PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F7F5] text-[#00A896] text-xs font-semibold tracking-wide uppercase font-['DM_Mono']">
      {children}
    </span>
  );
}

const STATS = [
  { value: "500+", label: "Clinical Trials Completed", sub: "Across 40+ therapeutic areas" },
  { value: "98%", label: "Regulatory Approval Rate", sub: "FDA, EMA, Health Canada" },
  { value: "2,400+", label: "Research Professionals", sub: "Global multidisciplinary teams" },
  { value: "47", label: "Countries Served", sub: "Active research networks" },
];

const SERVICES_PREVIEW = [
  {
    icon: FlaskConical,
    title: "Clinical Research",
    desc: "Phase I-IV trial design, execution, and monitoring with global site networks and expert CRO capabilities.",
    color: "#00A896",
  },
  {
    icon: Dna,
    title: "Genomics & Biomarkers",
    desc: "Next-generation sequencing, biomarker discovery, and precision medicine platforms for translational research.",
    color: "#3B82F6",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    desc: "Advanced statistical modeling, real-world evidence, and AI-powered insights to accelerate decision-making.",
    color: "#8B5CF6",
  },
  {
    icon: Shield,
    title: "Pharmacovigilance",
    desc: "End-to-end safety surveillance, signal detection, and regulatory reporting across global jurisdictions.",
    color: "#F59E0B",
  },
  {
    icon: Microscope,
    title: "Lab Diagnostics",
    desc: "CAP-accredited central and specialty labs delivering high-quality, timely results for clinical studies.",
    color: "#EF4444",
  },
  {
    icon: FileText,
    title: "Regulatory Affairs",
    desc: "Strategic regulatory consulting, submission preparation, and agency liaison across FDA, EMA, and PMDA.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Life Sciences Staffing",
    desc: "Connecting life sciences talent with breakthrough opportunities across clinical operations, research, quality, and regulatory teams.",
    color: "#0EA5E9",
  },
];

const TESTIMONIALS = [
  {
    quote: "curelynt Research delivered our Phase III oncology trial on time and under budget, with exceptional data quality. Their team's expertise was invaluable to our approval process.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "NovaBioTherapeutics",
    initials: "SC",
  },
  {
    quote: "Their genomics platform identified biomarker signatures we hadn't considered. It completely changed our patient stratification strategy and ultimately our trial's success.",
    author: "Prof. James Hartwell",
    role: "Head of Translational Research",
    company: "Meridian Pharma Group",
    initials: "JH",
  },
  {
    quote: "The pharmacovigilance team's responsiveness and regulatory insight gave us complete confidence during our NDA submission. We wouldn't choose another partner.",
    author: "Dr. Priya Nair",
    role: "VP of Drug Safety",
    company: "Helix Therapeutics",
    initials: "PN",
  },
];

const PARTNERS = [
  "BioNexus Inc.", "Meridian Pharma", "GenCore Labs", "Apex Biotech",
  "Solaris Health", "NovaClinical", "TriPath Sciences", "Veridian RX"
];

function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="relative min-h-[92vh] bg-[#0F1E35] flex items-center overflow-hidden pt-24">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00A896] rounded-full blur-3xl opacity-10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-8 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge>Health Research Excellence</SectionBadge>
              <h1 className="font-['Figtree'] font-extrabold text-5xl md:text-6xl text-white mt-6 leading-[1.1] tracking-tight">
                Precision Research.<br />
                <span className="text-[#00A896]">Transformative</span><br />
                Outcomes.
              </h1>
              <p className="mt-6 text-slate-300 text-lg leading-relaxed font-['DM_Sans'] max-w-xl">
                curelynt Research links life sciences professionals to high-impact roles across clinical research, regulatory operations, and specialized staffing for teams that need to move programs forward.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => onNav("solutions")}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#00A896] text-white font-semibold rounded-md hover:bg-[#008F7E] transition-colors font-['DM_Sans']"
                >
                  Explore Solutions <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => onNav("contact")}
                  className="flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors font-['DM_Sans']"
                >
                  Talk to an Expert
                </button>
              </div>

              {/* Certifications */}
              <div className="mt-10 flex flex-wrap gap-3">
                {["FDA Compliant", "ICH GCP Certified", "ISO 9001:2015", "CAP Accredited"].map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-xs text-slate-300 font-['DM_Mono']">
                    <CheckCircle2 size={11} className="text-[#00A896]" /> {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side: Floating stat cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/8 backdrop-blur border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity size={18} className="text-[#00A896]" />
                    <span className="text-xs text-slate-400 font-['DM_Mono']">Active Trials</span>
                  </div>
                  <div className="text-4xl font-extrabold text-white font-['Figtree']">87</div>
                  <div className="text-xs text-emerald-400 mt-1 font-['DM_Sans']">Up 12 new this quarter</div>
                </div>
                <div className="bg-[#00A896] rounded-xl p-5">
                  <div className="text-3xl font-extrabold text-white font-['Figtree']">500+</div>
                  <div className="text-white/80 text-sm mt-1 font-['DM_Sans']">Trials Completed</div>
                  <div className="text-white/60 text-xs mt-0.5 font-['DM_Sans']">Since 2009</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-600/20 border border-blue-400/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe size={18} className="text-blue-400" />
                    <span className="text-xs text-slate-400 font-['DM_Mono']">Global Reach</span>
                  </div>
                  <div className="text-4xl font-extrabold text-white font-['Figtree']">47</div>
                  <div className="text-slate-300 text-sm mt-1 font-['DM_Sans']">Countries</div>
                </div>
                <div className="bg-white/8 backdrop-blur border border-white/10 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={18} className="text-purple-400" />
                    <span className="text-xs text-slate-400 font-['DM_Mono']">Specialists</span>
                  </div>
                  <div className="text-4xl font-extrabold text-white font-['Figtree']">2,400</div>
                  <div className="text-slate-300 text-sm mt-1 font-['DM_Sans']">Research Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500">
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* â”€â”€ Stats bar â”€â”€ */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-['Figtree'] font-extrabold text-4xl text-[#0F1E35]">{s.value}</div>
              <div className="font-['DM_Sans'] font-semibold text-sm text-[#0F1E35] mt-1">{s.label}</div>
              <div className="font-['DM_Sans'] text-xs text-slate-500 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ Services preview â”€â”€ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <SectionBadge>Our Capabilities</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4 leading-tight">
              Research and Talent Solutions
            </h2>
            <p className="text-slate-500 mt-3 font-['DM_Sans'] leading-relaxed">
              From early discovery through commercialization, curelynt provides the scientific rigor, operational expertise, and life sciences staffing support your program requires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_PREVIEW.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: s.color + "18" }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <h3 className="font-['Figtree'] font-bold text-[#0F1E35] text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-['DM_Sans']">{s.desc}</p>
                <button
                  onClick={() => onNav("solutions")}
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold font-['DM_Sans'] group-hover:gap-2 transition-all"
                  style={{ color: s.color }}
                >
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNav("solutions")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0F1E35] text-white font-semibold rounded-md hover:bg-[#162840] transition-colors font-['DM_Sans']"
            >
              View All Solutions <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* â”€â”€ Why curelynt â”€â”€ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=700&h=550&fit=crop&auto=format"
                alt="Scientists working in a research laboratory"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#00A896] rounded-xl p-5 shadow-xl hidden md:block">
                <div className="text-white font-['Figtree'] font-extrabold text-3xl">98%</div>
                <div className="text-white/80 text-sm font-['DM_Sans'] mt-0.5">Regulatory Approval<br/>Success Rate</div>
              </div>
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3.5 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-50 rounded-md flex items-center justify-center">
                  <Award size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-['Figtree'] font-bold text-sm text-[#0F1E35]">ICH GCP Certified</div>
                  <div className="text-xs text-slate-500 font-['DM_Sans']">15+ years of compliance</div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <SectionBadge>Why curelynt</SectionBadge>
              <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4 leading-tight">
                Science-First. Patient-Centered. Results-Driven.
              </h2>
              <p className="text-slate-500 mt-4 font-['DM_Sans'] leading-relaxed">
                For over 15 years, we have partnered with innovators across the life sciences spectrum - helping them navigate complexity, meet regulatory requirements, and bring breakthrough therapies to the patients who need them most.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Brain, title: "Scientific Leadership", desc: "Teams led by PhDs, MDs, and clinical specialists with deep therapeutic area expertise." },
                { icon: TrendingUp, title: "Operational Excellence", desc: "Proven project management frameworks that keep timelines and budgets on track." },
                { icon: Globe, title: "Global Infrastructure", desc: "Established investigator site networks and regulatory capabilities in 47+ countries." },
                { icon: Shield, title: "Quality Assurance", desc: "Robust QMS, continuous audit readiness, and zero tolerance for data integrity compromises." },
                { icon: Users, title: "Talent Partnerships", desc: "Embedded staffing support for sponsors, CROs, and life sciences organizations building high-performing teams." },
              ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#E6F7F5] rounded-lg flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#00A896]" />
                    </div>
                    <div>
                      <div className="font-['Figtree'] font-semibold text-[#0F1E35]">{item.title}</div>
                      <div className="text-slate-500 text-sm font-['DM_Sans'] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNav("about")}
                className="mt-8 flex items-center gap-2 px-7 py-3.5 border-2 border-[#0F1E35] text-[#0F1E35] font-semibold rounded-md hover:bg-[#0F1E35] hover:text-white transition-colors font-['DM_Sans']"
              >
                Learn Our Story <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Therapeutic areas â”€â”€ */}
      <section className="py-16 bg-[#0F1E35]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionBadge>Therapeutic Expertise</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-3xl text-white mt-4">
              Specialized Across Disease Areas
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Oncology", "Rare Diseases", "Neurology", "Cardiology", "Immunology",
              "Infectious Disease", "Metabolic Disorders", "Respiratory", "Ophthalmology",
              "Dermatology", "Gene Therapy", "Cell Therapy", "Pediatrics", "Women's Health"
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full border border-white/20 text-slate-300 text-sm font-['DM_Sans'] hover:bg-[#00A896] hover:border-[#00A896] hover:text-white transition-colors cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Testimonials â”€â”€ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionBadge>Client Testimonials</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4">
              Trusted by Leading Life Sciences Organizations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border p-6 transition-all duration-200 ${
                  activeTestimonial === i ? "border-[#00A896] shadow-lg" : "border-slate-100"
                }`}
                onClick={() => setActiveTestimonial(i)}
              >
                <div className="flex gap-1 mb-4">
                  {[0,1,2,3,4].map(s => (
                    <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-['DM_Sans'] italic mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E6F7F5] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#00A896] font-['Figtree']">{t.initials}</span>
                  </div>
                  <div>
                    <div className="font-['Figtree'] font-semibold text-sm text-[#0F1E35]">{t.author}</div>
                    <div className="text-xs text-slate-500 font-['DM_Sans']">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ Partner logos â”€â”€ */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 font-['DM_Mono'] mb-8">
            Trusted Partners & Collaborators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {PARTNERS.map((p) => (
              <div key={p} className="px-5 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 text-sm font-semibold font-['DM_Sans'] hover:text-[#0F1E35] hover:border-slate-300 transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA Banner â”€â”€ */}
      <section className="py-20 bg-[#00A896]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Figtree'] font-extrabold text-4xl text-white leading-tight">
            Ready to Accelerate Your Research Program?
          </h2>
          <p className="text-white/80 mt-4 font-['DM_Sans'] text-lg max-w-2xl mx-auto">
            Our experts are ready to design a tailored research strategy for your program. Schedule a consultation today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNav("contact")}
              className="px-8 py-3.5 bg-white text-[#00A896] font-bold rounded-md hover:bg-slate-50 transition-colors font-['DM_Sans']"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => onNav("solutions")}
              className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors font-['DM_Sans']"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// â”€â”€â”€ ABOUT PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const TEAM = [
  {
    name: "Dr. Miriam Osei-Bonsu",
    role: "Chief Executive Officer",
    bio: "20+ years in clinical research leadership. Former Global VP at a Top 5 CRO. PhD in Biomedical Sciences, Johns Hopkins.",
    initials: "MO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Dr. Alejandro Reyes",
    role: "Chief Science Officer",
    bio: "Pioneering genomics researcher and former NIH grant recipient. Expertise in translational oncology. MD/PhD, Harvard Medical School.",
    initials: "AR",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Dr. Yuki Tanaka",
    role: "Chief Medical Officer",
    bio: "Specialist in rare diseases and gene therapy trials. Former faculty at Mayo Clinic. Board-certified in Clinical Pharmacology.",
    initials: "YT",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Ms. Priyanka Sharma",
    role: "Chief Operating Officer",
    bio: "Operational excellence leader with expertise in global trial management and site network development. MBA, Wharton.",
    initials: "PS",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Dr. Marcus Ellison",
    role: "VP, Regulatory Affairs",
    bio: "15+ years of FDA and EMA submission experience. Former FDA Reviewer. Expert in NDA, BLA, and MAA filings.",
    initials: "ME",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Dr. Amara Diallo",
    role: "Head of Biostatistics",
    bio: "Expert in adaptive trial design, Bayesian methods, and real-world evidence. PhD Statistics, Stanford University.",
    initials: "AD",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&auto=format",
  },
];

const VALUES = [
  { icon: Microscope, title: "Scientific Rigor", desc: "Every study we conduct is grounded in sound methodology, robust design, and uncompromising data integrity." },
  { icon: HeartPulse, title: "Patient Centricity", desc: "Our work exists to improve patient outcomes. Every decision is evaluated through the lens of patient safety and benefit." },
  { icon: Shield, title: "Ethical Standards", desc: "We operate with complete transparency, full regulatory compliance, and the highest ethical standards in human research." },
  { icon: Globe, title: "Global Collaboration", desc: "Our diverse, international teams bring multidisciplinary perspectives to solve the most complex research challenges." },
];

const MILESTONES = [
  { year: "2009", event: "Founded in Boston, MA with a focus on oncology clinical trials" },
  { year: "2012", event: "Expanded to Europe, opened offices in London and Munich" },
  { year: "2015", event: "Launched proprietary genomics platform and biomarker services" },
  { year: "2018", event: "Reached 200 completed clinical trials milestone; expanded to Asia-Pacific" },
  { year: "2020", event: "Rapidly deployed COVID-19 vaccine trial infrastructure across 30 countries" },
  { year: "2022", event: "Launched AI-powered data analytics division; crossed 2,000 employees" },
  { year: "2024", event: "500+ completed trials; recognized among top 10 global CROs by industry analysts" },
];

function AboutPage({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0F1E35] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionBadge>About curelynt Research</SectionBadge>
            <h1 className="font-['Figtree'] font-extrabold text-5xl text-white mt-5 leading-tight">
              Fifteen Years of<br />
              <span className="text-[#00A896]">Advancing Human Health</span>
            </h1>
            <p className="text-slate-300 mt-5 text-lg leading-relaxed font-['DM_Sans'] max-w-2xl">
              curelynt Research was founded on a simple but powerful conviction: that rigorous science, powered by the right people and the right tools, can change the trajectory of human health. From our founding lab in Boston to a global presence spanning 47 countries, that conviction drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100">
              <div className="w-10 h-10 bg-[#E6F7F5] rounded-lg flex items-center justify-center mb-4">
                <HeartPulse size={20} className="text-[#00A896]" />
              </div>
              <h3 className="font-['Figtree'] font-bold text-2xl text-[#0F1E35] mb-3">Our Mission</h3>
              <p className="text-slate-500 font-['DM_Sans'] leading-relaxed">
                To advance human health by delivering scientifically rigorous, operationally excellent, and ethically grounded research services that accelerate the development of transformative therapies and diagnostics for patients worldwide.
              </p>
            </div>
            <div className="bg-[#0F1E35] rounded-2xl p-8">
              <div className="w-10 h-10 bg-[#00A896]/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={20} className="text-[#00A896]" />
              </div>
              <h3 className="font-['Figtree'] font-bold text-2xl text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 font-['DM_Sans'] leading-relaxed">
                To be the world's most trusted health research partner - recognized for the quality of our science, the depth of our expertise, and our unwavering commitment to the patients at the heart of every study we conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + story */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=500&fit=crop&auto=format"
                alt="curelynt Research laboratory team"
                className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white border border-slate-100 rounded-xl p-4 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E6F7F5] rounded-lg flex items-center justify-center">
                  <Award size={22} className="text-[#00A896]" />
                </div>
                <div>
                  <div className="font-['Figtree'] font-bold text-[#0F1E35]">Top 10 Global CRO</div>
                  <div className="text-sm text-slate-500 font-['DM_Sans']">Industry Analyst Recognition 2024</div>
                </div>
              </div>
            </div>
            <div>
              <SectionBadge>Our Story</SectionBadge>
              <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4 leading-tight">
                Built for the Complex Questions in Human Health
              </h2>
              <p className="text-slate-500 mt-4 font-['DM_Sans'] leading-relaxed">
                curelynt Research was founded in 2009 by a group of scientists and clinicians who believed the clinical research industry needed a fundamentally different approach - one that put scientific quality before speed, and patient outcomes before commercial convenience.
              </p>
              <p className="text-slate-500 mt-3 font-['DM_Sans'] leading-relaxed">
                Starting with a focused oncology practice in Boston, we expanded methodically into new therapeutic areas and geographies, always ensuring that quality and scientific rigor scaled with our growth. Today, with over 2,400 professionals across 47 countries, we remain committed to those founding principles.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { n: "500+", l: "Completed Trials" },
                  { n: "47", l: "Countries" },
                  { n: "2,400+", l: "Professionals" },
                  { n: "15+", l: "Years Experience" },
                ].map((s) => (
                  <div key={s.l} className="bg-white rounded-lg border border-slate-100 p-4">
                    <div className="font-['Figtree'] font-extrabold text-2xl text-[#00A896]">{s.n}</div>
                    <div className="text-sm text-slate-500 font-['DM_Sans']">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionBadge>Core Values</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-xl hover:bg-[#F8FAFC] transition-colors">
                <div className="w-14 h-14 bg-[#E6F7F5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-[#00A896]" />
                </div>
                <h3 className="font-['Figtree'] font-bold text-[#0F1E35] text-lg mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm font-['DM_Sans'] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0F1E35]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionBadge>Our Journey</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-4xl text-white mt-4">15 Years of Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Year bubble */}
                  <div className="md:w-1/2 flex md:justify-center md:relative md:static">
                    <div className="w-16 h-16 rounded-full bg-[#00A896] flex items-center justify-center font-['DM_Mono'] font-bold text-white text-sm z-10 shrink-0">
                      {m.year}
                    </div>
                  </div>
                  {/* Content */}
                  <div className={`md:w-1/2 pb-2 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"}`}>
                    <div className="bg-white/8 border border-white/10 rounded-xl p-4">
                      <p className="text-slate-200 text-sm font-['DM_Sans'] leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Accreditations */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 font-['DM_Mono'] mb-8">Accreditations & Certifications</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["FDA 21 CFR Part 11", "ICH E6(R2) GCP", "ISO 9001:2015", "CAP Laboratory Accreditation", "CLIA Certified", "AAHRPP Accredited", "EMA GCP Compliant", "PMDA Registered"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50">
                <CheckCircle2 size={14} className="text-[#00A896]" />
                <span className="text-sm font-semibold text-[#0F1E35] font-['DM_Sans']">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// â”€â”€â”€ SOLUTIONS PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const SOLUTIONS = [
  {
    icon: FlaskConical,
    color: "#00A896",
    bg: "#E6F7F5",
    title: "Clinical Research & Trial Management",
    tag: "CRO Services",
    desc: "Full-service clinical research organization capabilities from protocol development through final study report. We manage Phase Iâ€“IV trials globally with unmatched operational precision.",
    features: [
      "Protocol design and study planning",
      "Site selection and activation",
      "Patient recruitment and retention strategies",
      "Clinical monitoring and data management",
      "Medical writing and reporting",
      "IWRS/CTMS technology integration",
    ],
    outcomes: ["Average 15% faster enrollment vs. industry benchmark", "99.2% data quality rate", "98% on-time milestone delivery"],
  },
  {
    icon: Dna,
    color: "#3B82F6",
    bg: "#EFF6FF",
    title: "Genomics & Precision Medicine",
    tag: "Biomarker Science",
    desc: "Cutting-edge next-generation sequencing, biomarker discovery, and precision stratification platforms that unlock deeper insights from your clinical program.",
    features: [
      "Whole genome and exome sequencing",
      "RNA-seq and transcriptomics",
      "Biomarker discovery and validation",
      "Companion diagnostic development",
      "Tumor profiling and liquid biopsy",
      "Pharmacogenomics analysis",
    ],
    outcomes: ["CLIA-certified lab operations", "72-hour turnaround for critical samples", "NGS panel with 500+ gene coverage"],
  },
  {
    icon: BarChart3,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Biostatistics & Data Analytics",
    tag: "Data Science",
    desc: "Advanced statistical methodology, AI-assisted analytics, and real-world evidence capabilities to generate the insights that drive regulatory and commercial success.",
    features: [
      "Statistical analysis plan development",
      "Adaptive trial design and simulation",
      "Real-world evidence and data linkage",
      "AI/ML model development",
      "Health economics & outcomes research",
      "Integrated data reporting",
    ],
    outcomes: ["Bayesian adaptive design expertise", "RWE data access in 15+ countries", "FDA-accepted AI modeling approaches"],
  },
  {
    icon: Shield,
    color: "#F59E0B",
    bg: "#FFFBEB",
    title: "Pharmacovigilance & Drug Safety",
    tag: "Safety Surveillance",
    desc: "Comprehensive drug safety monitoring, signal detection, and regulatory reporting programs that protect patients and maintain your product's safety profile worldwide.",
    features: [
      "Individual Case Safety Report (ICSR) processing",
      "Aggregate reporting (PSUR/PBRER/DSUR)",
      "Signal detection and evaluation",
      "Risk Management Plans (RMP/REMS)",
      "Literature screening and monitoring",
      "Global regulatory submissions",
    ],
    outcomes: ["24/7 safety surveillance coverage", "Compliant with EudraVigilance, FDA FAERS", "< 24 hr expedited reporting capability"],
  },
  {
    icon: Microscope,
    color: "#EF4444",
    bg: "#FFF1F1",
    title: "Central & Specialty Laboratory",
    tag: "Lab Sciences",
    desc: "CAP-accredited central laboratory services and specialized testing capabilities designed to meet the unique demands of your clinical program.",
    features: [
      "Hematology and clinical chemistry",
      "Immunology and serology",
      "Flow cytometry and cell-based assays",
      "PK/PD sample management",
      "Specimen repository services",
      "Global kit distribution",
    ],
    outcomes: ["CAP and CLIA certified", "24/7 specimen receiving", "99.8% sample integrity rate"],
  },
  {
    icon: FileText,
    color: "#10B981",
    bg: "#ECFDF5",
    title: "Regulatory Affairs & Strategy",
    tag: "Regulatory",
    desc: "Strategic regulatory consulting and submission services to navigate the global regulatory landscape with confidence and efficiency.",
    features: [
      "Pre-IND/Pre-CTA meeting strategy",
      "NDA, BLA, MAA submission management",
      "Orphan drug designation support",
      "Pediatric investigation plans",
      "CMC regulatory support",
      "Post-approval lifecycle management",
    ],
    outcomes: ["98% first-cycle approval rate", "Regulatory representation in 25+ markets", "Former FDA and EMA reviewers on team"],
  },
  {
    icon: Users,
    color: "#0EA5E9",
    bg: "#E0F2FE",
    title: "Life Sciences Talent & Staffing",
    tag: "Talent Solutions",
    desc: "Flexible staffing and talent acquisition support for life sciences organizations that need experienced people in the right roles at the right time.",
    features: [
      "Clinical operations and project management staffing",
      "Regulatory affairs and quality hires",
      "Research coordinators and study support roles",
      "Contract, contract-to-hire, and direct placement",
      "Rapid-response team augmentation",
      "Leadership search for specialized functions",
    ],
    outcomes: ["Access to pre-vetted life sciences talent", "Support for urgent backfills and scale-up", "Matches aligned to technical and cultural fit"],
  },
];

function SolutionsPage({ onNav }: { onNav: (p: Page) => void }) {
  const [active, setActive] = useState(0);
  const sol = SOLUTIONS[active];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F1E35] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionBadge>Our Solutions</SectionBadge>
          <h1 className="font-['Figtree'] font-extrabold text-5xl text-white mt-5 leading-tight max-w-3xl">
            Comprehensive Research Services for Every Stage of Drug Development
          </h1>
          <p className="text-slate-300 mt-5 text-lg leading-relaxed font-['DM_Sans'] max-w-2xl">
            From early discovery to post-market surveillance, curelynt delivers integrated, high-quality research solutions tailored to your scientific and regulatory needs.
          </p>
        </div>
      </section>

      {/* Solutions explorer */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Solution tabs */}
            <div className="lg:col-span-1 space-y-2">
              {SOLUTIONS.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                    active === i
                      ? "bg-white border-[#00A896] shadow-md"
                      : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: s.bg }}
                  >
                    <s.icon size={17} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className={`font-['Figtree'] font-semibold text-sm ${active === i ? "text-[#0F1E35]" : "text-slate-600"}`}>
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-400 font-['DM_Mono']">{s.tag}</div>
                  </div>
                  {active === i && <ChevronRight size={14} className="ml-auto text-[#00A896]" />}
                </button>
              ))}
            </div>

            {/* Right: Detail panel */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: sol.bg }}>
                    <sol.icon size={22} style={{ color: sol.color }} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest font-['DM_Mono']" style={{ color: sol.color }}>
                      {sol.tag}
                    </span>
                    <h2 className="font-['Figtree'] font-bold text-2xl text-[#0F1E35]">{sol.title}</h2>
                  </div>
                </div>
                <p className="text-slate-500 font-['DM_Sans'] leading-relaxed">{sol.desc}</p>
              </div>

              {/* Features + outcomes */}
              <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-8">
                  <h4 className="font-['Figtree'] font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Capabilities</h4>
                  <ul className="space-y-2.5">
                    {sol.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-slate-600 font-['DM_Sans']">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: sol.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <h4 className="font-['Figtree'] font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Key Outcomes</h4>
                  <div className="space-y-3">
                    {sol.outcomes.map((o) => (
                      <div key={o} className="rounded-lg p-3.5" style={{ backgroundColor: sol.bg }}>
                        <p className="text-sm font-semibold font-['DM_Sans']" style={{ color: sol.color }}>{o}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onNav("contact")}
                    className="mt-6 w-full py-3 rounded-lg font-semibold font-['DM_Sans'] text-white text-sm transition-colors"
                    style={{ backgroundColor: sol.color }}
                  >
                    Inquire About This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drug development lifecycle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionBadge>Drug Development Lifecycle</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4">
              Supporting Every Phase of Development
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[700px] grid grid-cols-6 gap-0 rounded-xl overflow-hidden border border-slate-100">
              {[
                { phase: "Discovery", services: ["Target ID", "Biomarker Research", "Genomics"], color: "#8B5CF6" },
                { phase: "Pre-Clinical", services: ["Study Design", "Safety Assessment", "Analytics"], color: "#3B82F6" },
                { phase: "Phase I", services: ["FIH Trials", "PK/PD", "Safety Monitoring"], color: "#00A896" },
                { phase: "Phase II", services: ["PoC Trials", "Biomarker Eval", "Interim Analysis"], color: "#10B981" },
                { phase: "Phase III", services: ["Pivotal Trials", "Global Sites", "Regulatory"], color: "#F59E0B" },
                { phase: "Phase IV", services: ["PV Surveillance", "RWE Studies", "Lifecycle Mgmt"], color: "#EF4444" },
              ].map((p, i) => (
                <div key={p.phase} className={`p-5 border-r border-slate-100 last:border-r-0 ${i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}>
                  <div className="w-3 h-3 rounded-full mb-2" style={{ backgroundColor: p.color }} />
                  <div className="font-['Figtree'] font-bold text-sm text-[#0F1E35] mb-2">{p.phase}</div>
                  <ul className="space-y-1">
                    {p.services.map((s) => (
                      <li key={s} className="text-xs text-slate-500 font-['DM_Sans']">{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology platform */}
      <section className="py-20 bg-[#0F1E35]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge>Technology Platform</SectionBadge>
              <h2 className="font-['Figtree'] font-bold text-4xl text-white mt-4 leading-tight">
                Powered by Next-Generation Research Technology
              </h2>
              <p className="text-slate-300 mt-4 font-['DM_Sans'] leading-relaxed">
                Our proprietary CureSphere platform integrates CTMS, CDMS, ePRO, IWRS, and pharmacovigilance in a unified, FDA 21 CFR Part 11 compliant environment - giving sponsors real-time visibility into every aspect of their program.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Real-time trial dashboard and KPI monitoring",
                  "AI-powered patient enrollment prediction",
                  "Integrated safety signal detection engine",
                  "Seamless regulatory submission formatting",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-[#00A896] shrink-0" />
                    <span className="text-slate-300 text-sm font-['DM_Sans']">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="font-['DM_Mono'] text-xs text-[#00A896] mb-3">CureSphere Platform - Live Metrics</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Active Sites", value: "1,284", delta: "+23 this week" },
                  { label: "Enrolled Patients", value: "48,903", delta: "+412 today" },
                  { label: "Data Queries", value: "99.2%", delta: "resolution rate" },
                  { label: "Safety Alerts", value: "< 6 hrs", delta: "avg response time" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/8 rounded-xl p-4">
                    <div className="text-slate-400 text-xs font-['DM_Mono'] mb-1">{m.label}</div>
                    <div className="text-white font-['Figtree'] font-bold text-2xl">{m.value}</div>
                    <div className="text-emerald-400 text-xs mt-0.5 font-['DM_Sans']">{m.delta}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-[#00A896]/10 border border-[#00A896]/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#00A896] text-xs font-['DM_Mono'] font-semibold">SYSTEM STATUS: ALL OPERATIONAL</span>
                </div>
                <div className="text-slate-400 text-xs font-['DM_Sans']">Last updated: 2 minutes ago - 99.97% uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#00A896]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Figtree'] font-extrabold text-4xl text-white">
            Find the Right Solution for Your Program
          </h2>
          <p className="text-white/80 mt-3 font-['DM_Sans'] text-lg">
            Our scientific consultants will help you design the optimal approach for your specific program needs.
          </p>
          <button
            onClick={() => onNav("contact")}
            className="mt-8 px-8 py-3.5 bg-white text-[#00A896] font-bold rounded-md hover:bg-slate-50 transition-colors font-['DM_Sans']"
          >
            Schedule a Scientific Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

// â”€â”€â”€ CONTACT PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const FAQS = [
  {
    q: "How do I initiate a new study partnership with curelynt?",
    a: "The best way to get started is to submit a Request for Proposal (RFP) through our contact form or reach out directly to our Business Development team. We'll schedule a discovery call within 24 hours to understand your program needs.",
  },
  {
    q: "What types of therapeutic areas does curelynt specialize in?",
    a: "We have deep expertise across oncology, rare diseases, neurology, cardiovascular, immunology, and infectious disease - among 14 total therapeutic areas. Our scientific teams include board-certified specialists in each domain."
  },
  {
    q: "Does curelynt conduct trials outside the United States?",
    a: "Yes. We operate active clinical research networks in 47 countries across North America, Europe, Asia-Pacific, Latin America, and the Middle East, with dedicated regulatory teams for each major jurisdiction.",
  },
  {
    q: "How does curelynt ensure data quality and regulatory compliance?",
    a: "Our quality management system is built on ICH E6(R2) GCP principles, FDA 21 CFR Part 11, and ISO 9001:2015 standards. We conduct continuous risk-based monitoring, regular audits, and maintain complete audit trails through CureSphere our proprietary technology platform.",
  },
  {
    q: "Can curelynt support late-stage rescue studies?",
    a: "Absolutely. We have a specialized team experienced in taking over troubled or at-risk programs, performing data audits, corrective action planning, and regulatory remediation. Contact us for a rapid assessment.",
  },
];

function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "",
    role: "", service: "", message: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F1E35] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid4" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid4)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionBadge>Get In Touch</SectionBadge>
          <h1 className="font-['Figtree'] font-extrabold text-5xl text-white mt-5 leading-tight">
            Let's Accelerate<br />
            <span className="text-[#00A896]">Your Research Together</span>
          </h1>
          <p className="text-slate-300 mt-5 text-lg leading-relaxed font-['DM_Sans'] max-w-xl">
            Whether you're planning your first clinical study or expanding a global program, our team is ready to design the right solution for your needs.
          </p>

          {/* Quick contact cards */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Mail, label: "Email Us", value: "info@curelyntresearch.com", sub: "Response within 4 hours" },
              { icon: Clock, label: "Hours", value: "24/7 Support", sub: "Emergency safety line" },
            ].map((c) => (
              <div key={c.label} className="bg-white/8 border border-white/10 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#00A896]/20 rounded-lg flex items-center justify-center mb-2">
                  <c.icon size={15} className="text-[#00A896]" />
                </div>
                <div className="text-xs text-slate-400 font-['DM_Mono'] mb-0.5">{c.label}</div>
                <div className="text-white text-sm font-semibold font-['DM_Sans']">{c.value}</div>
                <div className="text-slate-500 text-xs font-['DM_Sans']">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h2 className="font-['Figtree'] font-bold text-2xl text-[#0F1E35] mb-1">Submit an Inquiry</h2>
              <p className="text-slate-500 text-sm font-['DM_Sans'] mb-6">A member of our Business Development team will respond within one business day.</p>

              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 bg-[#E6F7F5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-[#00A896]" />
                  </div>
                  <h3 className="font-['Figtree'] font-bold text-2xl text-[#0F1E35] mb-2">Thank You!</h3>
                  <p className="text-slate-500 font-['DM_Sans']">
                    Your inquiry has been received. A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">First Name *</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition"
                        placeholder="Dr. Jane"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition"
                        placeholder="jane.doe@pharma.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">Company / Institution *</label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition"
                        placeholder="NovaBioTherapeutics"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">Your Role</label>
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition"
                      >
                        <option value="">Select role</option>
                        <option>Chief Medical Officer</option>
                        <option>Clinical Development</option>
                        <option>Regulatory Affairs</option>
                        <option>Business Development</option>
                        <option>Research Scientist</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">Area of Interest</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition"
                      >
                        <option value="">Select service</option>
                        <option>Clinical Research & Trial Management</option>
                        <option>Genomics & Precision Medicine</option>
                        <option>Biostatistics & Data Analytics</option>
                        <option>Pharmacovigilance & Drug Safety</option>
                        <option>Central Laboratory</option>
                        <option>Regulatory Affairs</option>
                        <option>Life Sciences Staffing</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 font-['DM_Sans'] mb-1.5 block">Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-[#F4F7FA] text-[#0F1E35] text-sm font-['DM_Sans'] focus:outline-none focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition resize-none"
                      placeholder="Please describe your research program, study phase, therapeutic area, and how we can help..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      className="mt-0.5 accent-[#00A896]"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500 font-['DM_Sans'] leading-relaxed">
                      I consent to curelynt Research processing my personal data to respond to this inquiry, in accordance with our Privacy Policy. I understand I may unsubscribe at any time.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#00A896] text-white font-bold rounded-lg hover:bg-[#008F7E] transition-colors font-['DM_Sans'] flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Right info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* What happens next */}
              <div className="bg-[#0F1E35] rounded-2xl p-6 text-white">
                <h3 className="font-['Figtree'] font-bold text-lg mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Inquiry Received", desc: "Your submission is reviewed by our BD team within 4 business hours." },
                    { step: "02", title: "Discovery Call", desc: "A scientific consultant schedules a 30-minute call to understand your needs." },
                    { step: "03", title: "Tailored Proposal", desc: "We prepare a customized scope and budget within 5 business days." },
                    { step: "04", title: "Partnership Begins", desc: "Contracts executed and your dedicated project team is assembled." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#00A896]/20 border border-[#00A896]/40 flex items-center justify-center shrink-0">
                        <span className="text-[#00A896] text-xs font-bold font-['DM_Mono']">{s.step}</span>
                      </div>
                      <div>
                        <div className="font-['Figtree'] font-semibold text-sm">{s.title}</div>
                        <div className="text-slate-400 text-xs font-['DM_Sans'] mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6">
                <h3 className="font-['Figtree'] font-bold text-[#0F1E35] mb-3">Compliance & Quality</h3>
                <div className="flex flex-wrap gap-2">
                  {["ICH GCP", "FDA 21 CFR", "ISO 9001", "CAP Accredited", "CLIA Certified"].map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-full bg-[#E6F7F5] text-[#00A896] text-xs font-semibold font-['DM_Mono']">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-3 font-['DM_Sans']">
                  All communications with curelynt are protected under our confidentiality and data privacy frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="font-['Figtree'] font-bold text-4xl text-[#0F1E35] mt-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  <span className="font-['Figtree'] font-semibold text-[#0F1E35] text-sm">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform ${faqOpen === i ? "rotate-180" : ""}`}
                  />
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm font-['DM_Sans'] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// â”€â”€â”€ App Shell â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const onNav = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['DM_Sans']">
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }
        * { scrollbar-width: thin; scrollbar-color: rgba(0,0,0,0.15) transparent; }
      `}</style>
      <Navbar current={page} onNav={onNav} />
      <main>
        {page === "home" && <HomePage onNav={onNav} />}
        {page === "about" && <AboutPage onNav={onNav} />}
        {page === "solutions" && <SolutionsPage onNav={onNav} />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer onNav={onNav} />
    </div>
  );
}



