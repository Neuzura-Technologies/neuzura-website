import { useState, useEffect } from 'react';
import {
  Shield,
  Brain,
  Bot,
  Lightbulb,
  GraduationCap,
  Award,
  BookOpen,
  Stamp,
  BarChart2,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  ArrowRight,
  Cpu,
  FileText,
  Users,
  Zap,
  Target,
  Eye,
} from 'lucide-react';
import { supabase } from './lib/supabase';
import bgImage from './background.png';
import logoImage from './logo1.png';
import iprImg from './ipr.jpg';
import aiImg from './robot.jpg';
import robotImg from './ai.jpg';
import consultingImg from './innovation.jpg';
import trainingImg from './prof.jpg';
import serviceBg from './services.png';

// ============================================================
// SITE_CONTENT — Edit all visible text here.
// No need to touch any HTML, Tailwind classes, or layout logic.
// ============================================================
const SITE_CONTENT = {
  company: {
    name: 'Neuzura Technologies',
    tagline: 'Innovating Through Research. Protecting Ideas. Building the Future.',
    subheadline:
      'We bridge the gap between advanced engineering and strategic intellectual property protection — delivering AI, Robotics, and IP solutions that transform research into lasting competitive advantage.',
    ctaPrimary: 'Our Services',
    ctaSecondary: 'Get in Touch',
    bookConsultation: 'Book Consultation',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Achievements', href: '#achievements' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  services: {
    items: [
      {
        title: 'Intellectual Property Strategy',
        image: iprImg, // Fixed: Now correctly uses the imported variable
        description: 'End-to-end patent drafting, filing, and publication support.',
        detailedNote: 'We craft robust IP portfolios that safeguard your innovations and maximize commercial value in competitive markets.'
      },
      {
        title: 'AI & Machine Learning Solutions',
        image: robotImg,
        description: 'Custom algorithm design, intelligent data pipelines, and production-ready ML models tailored to your domain.',
        detailedNote: 'From proof-of-concept to enterprise deployment.'
      },
      {
        title: 'Robotics Research & Development',
        image: aiImg,
        description: 'Full-cycle robotics engineering — from conceptual system design and multi-physics simulation.',
        detailedNote: '...to physical prototyping and field validation for industrial and research applications.'
      },
      {
        title: 'Product Innovation Consulting',
        image: consultingImg,
        description: 'We translate cutting-edge research into commercially scalable products.',
        detailedNote: 'Our consultants guide technical founders and enterprises from technology readiness to market launch.'
      },
      {
        title: 'Professional Skill Development',
        image: trainingImg,
        description: 'Immersive workshops in AI, Machine Learning, and Robotics for students, researchers, and enterprise teams.',
        detailedNote: 'Structured curricula designed for real-world application.'
      }
    ],
  },

  achievements: {
    heading: 'Milestones & Achievements',
    subheading: 'A record of impact built through rigorous research and strategic execution.',
    metrics: [
      {
        icon: 'Award',
        value: '100+',
        label: 'Patent Publications Supported',
        description: 'Successfully guided inventors through the full patent publication lifecycle.',
      },
      {
        icon: 'BookOpen',
        value: '10+',
        label: 'Copyright Grant Secured',
        description: 'Official copyright protection granted for proprietary creative and technical works.',
      },
      {
        icon: 'Stamp',
        value: '20+',
        label: 'Registered Design Grant',
        description: 'Formal registered design protection secured for innovative product aesthetics.',
      },
      {
        icon: 'BarChart2',
        value: 'Active', // Changed from "Proven"
        label: 'Industry Consultancy', // Changed label
        description:
          'Providing expert technical guidance and system architecture strategies for enterprise and startup partners.',
      },
    ],
  },

  about: {
    heading: 'About Neuzura Technologies',
    subheading:
      'We are an elite multi-disciplinary innovation firm, fusing rigorous engineering capabilities with comprehensive intellectual property strategies.',
    approach: {
      heading: 'Our Engineering DNA',
      points: [
        {
          icon: 'Zap',
          title: 'Advanced Applied Research',
          body: 'From optimizing resource-constrained edge AI deployments to developing advanced autonomous systems, we build architectures that push the boundaries of current technology.',
        },
        {
          icon: 'Cpu',
          title: 'Integrated Technical & Legal Mastery',
          body: 'We uniquely combine hands-on engineering execution with precise patent claim formatting and IP legal frameworks. Your innovations are not just technically superior—they are legally impenetrable.',
        },
        {
          icon: 'Users',
          title: 'End-to-End Partnership',
          body: 'Whether drafting complex technical specifications for IP filings or bringing simulated robotic environments into the physical world, we operate as a dedicated extension of your R&D team.',
        },
      ],
    },
    vision: {
      heading: 'Vision',
      body: 'To act as the definitive catalyst for global innovation—empowering technologists to build intelligent systems and secure their proprietary assets in an increasingly competitive technological era.',
    },
    mission: {
      heading: 'Mission',
      body: 'To bridge the critical gap between conceptual research and commercial reality by delivering world-class engineering in AI and Robotics, paired with ironclad intellectual property services.',
    },
  },

  contact: {
    heading: 'Get in Touch',
    subheading:
      'Whether you need IP strategy, R&D collaboration, or technical training, our team is ready to assist.',
    whatsapp: {
      number: '919360090778', // Enter your full number with country code (e.g., 91 for India), no plus or spaces
      defaultMessage: 'Hi Neuzura Technologies, I would like to know more about your services.',
    },
    tabs: {
      consultation: 'Book a Consultation',
      workshop: 'Workshop Enquiry',
    },
    consultation: {
      heading: 'Request a Consultation',
      description:
        'Speak with our specialists about your IP, AI, or Robotics requirements. We typically respond within one business day.',
      serviceOptions: [
        'Patent Support',
        'AI / Machine Learning R&D',
        'Robotics R&D',
        'Product Innovation Consulting',
        'Workshops & Training',
        'Other Technical Services',
      ],
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        organization: 'Organization / Institution',
        serviceInterest: 'Service Interest',
        message: 'Tell us about your project or requirements',
      },
      submitLabel: 'Send Consultation Request',
      successTitle: 'Request Received',
      successMessage:
        'Thank you for reaching out. A Neuzura specialist will contact you within one business day.',
    },
    workshop: {
      heading: 'Workshop Registration & Enquiry',
      description:
        'Enroll your team, students, or institution in our AI, ML, or Robotics training programmes. We offer flexible formats including full-day intensives, multi-week cohorts, and corporate customised sessions.',
      serviceOptions: [
        'AI Fundamentals Workshop',
        'Machine Learning Bootcamp',
        'Robotics Systems Workshop',
        'IP Strategy for Researchers',
        'Custom Corporate Training',
      ],
      fields: {
        name: 'Full Name',
        email: 'Email Address',
        organization: 'Organization / Institution',
        serviceInterest: 'Workshop Programme',
        message: 'Describe your team size, goals, or preferred schedule',
      },
      submitLabel: 'Submit Workshop Enquiry',
      successTitle: 'Enquiry Received',
      successMessage:
        'Thank you for your workshop interest. Our training team will reach out within one business day to discuss your requirements.',
    },
  },

  footer: {
    founderName: 'Deepika Govind',
    founderTitle: 'Founder & Director',

    quickLinks: 'Quick Links',
    contactHeading: 'Contact',
    email: 'neuzuratechnologies@gmail.com',
    phone: '+91 9360090778',
    location: 'Chennai, Tamil Nadu, India',
    copyright: `© ${new Date().getFullYear()} Neuzura Technologies. All rights reserved.`,
  },
};

// ============================================================
// Icon lookup helper
// ============================================================
const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Brain,
  Bot,
  Lightbulb,
  GraduationCap,
  Award,
  BookOpen,
  Stamp,
  BarChart2,
  Zap,
  Cpu,
  Users,
  FileText,
  Target,
  Eye,
};

// ============================================================
// Types
// ============================================================
interface FormData {
  name: string;
  email: string;
  organization: string;
  service_interest: string;
  message: string;
}

const emptyForm = (): FormData => ({
  name: '',
  email: '',
  organization: '',
  service_interest: '',
  message: '',
});

// ============================================================
// Navbar
// ============================================================
// ============================================================
// Navbar
// ============================================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2.5 group"
          >
            {/* Made the logo image slightly smaller (h-9) to match the new text size */}
            <img src={logoImage} alt="Neuzura Logo" className="h-9 w-auto object-contain" />

            {/* 
              Smaller font (text-xl), Elegant Blue Gradient, and a strong drop-shadow 
              so it NEVER blends into the background image 
            */}
            <span className={`text-xl font-bold tracking-wide bg-clip-text text-transparent transition-all duration-300 ${scrolled
                ? 'bg-gradient-to-r from-blue-700 to-blue-900'
                : 'bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
              }`}>
              {SITE_CONTENT.company.name}
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {SITE_CONTENT.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${scrolled
                    ? 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white hover:bg-white/20 drop-shadow-md'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-blue-300 transition-all duration-200"
            >
              {SITE_CONTENT.company.bookConsultation}
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/20'}`}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {SITE_CONTENT.nav.links.map((link) => (
            
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all"
            >
              {SITE_CONTENT.company.bookConsultation}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// Hero Section
// ============================================================
// ============================================================
// Hero Section (Dark Overlay Version)
// ============================================================
// ============================================================
// Hero Section
// ============================================================
function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        /* This tells Vite: "You MUST include the image I imported!" */
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      {/* LOWERED OPACITY: Changed from 80 to 45 so the image is much more visible */}
      <div className="absolute inset-0 bg-slate-900/45 pointer-events-none" />

      {/* Background decorative blue glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/30 border border-blue-400/40 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-md shadow-lg">
            <Zap size={14} className="text-blue-300" />
            AI · Robotics · Intellectual Property
          </div>

          {/* Headline - Refined, Blue-to-Green Gradient, elegant weight */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight mb-6 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            {SITE_CONTENT.company.tagline}
          </h1>

          {/* Subheadline - Sleeker size, elegant icy-blue color, and dark shadow for readability */}
          <p className="text-base sm:text-lg text-blue-50 leading-relaxed max-w-2xl mb-10 font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {SITE_CONTENT.company.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#services')}
              className="flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-blue-500/50 transition-all duration-200 text-base"
            >
              {SITE_CONTENT.company.ctaPrimary}
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="flex items-center gap-2.5 px-7 py-3.5 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 backdrop-blur-md shadow-xl transition-all duration-200 text-base"
            >
              {SITE_CONTENT.company.ctaSecondary}
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-6 items-center">
            {[
              { icon: Shield, text: 'IP Protected' },
              { icon: Award, text: '100+ Patents Supported' },
              { icon: Brain, text: 'AI & Robotics Experts' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white text-sm font-bold bg-slate-900/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/20 shadow-lg">
                <Icon size={16} className="text-blue-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Services Section
// ============================================================
function Services() {
  const { services } = SITE_CONTENT;

  return (
    <section
      id="services"
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      {/* The Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-sky-50/85 backdrop-blur-[3px]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          {/* Animated Gradient 'Eyebrow' Tagline */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 group cursor-default">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-sky-500 rounded-full transition-all duration-500 group-hover:w-12 group-hover:opacity-100 opacity-70"></div>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-500 to-teal-400 text-sm font-black uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500">
              Core Services
            </span>

            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-teal-500 rounded-full transition-all duration-500 group-hover:w-12 group-hover:opacity-100 opacity-70"></div>
          </div>

          {/* Main Heading - Hardcoded to fix TypeScript error */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 drop-shadow-sm">
            Our Expertise & Solutions
          </h2>

          {/* Subheading - Hardcoded to fix TypeScript error */}
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Comprehensive solutions tailored to your research and innovation needs.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {services.items.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              image={item.image}
              intro={item.description}
              note={item.detailedNote || "Comprehensive solutions tailored to your research needs."}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function ServiceCard({ title, image, intro, note }: { title: string, image: string, intro: string, note: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group h-[420px] w-[320px] [perspective:1000px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

        {/* FRONT SIDE - Outer Gradient Border (Preserved exactly as you liked it) */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-400 via-blue-500 to-teal-400 p-[2px] rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-sky-200 transition-all duration-500 [backface-visibility:hidden]">

          {/* Inner Front Content - Elegant Sky Blue Gradient (No White Background) */}
          <div className="h-full w-full rounded-[14px] p-8 flex flex-col items-center text-center bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 group-hover:from-sky-200 group-hover:via-sky-100 group-hover:to-blue-200 transition-all duration-500">

            {/* Image subtly scales up on hover */}
            <img src={image} alt={title} className="h-24 w-auto object-contain mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />

            {/* Typography optimized for high readability over light backgrounds */}
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-500">{title}</h3>
            <p className="text-slate-700 text-sm mb-auto group-hover:text-slate-900 transition-colors duration-500">{intro}</p>

            {/* The Highly Animated Read More Button with Sky/Teal Glow Effect */}
            <button className="mt-6 px-6 py-2.5 rounded-lg text-white font-semibold tracking-wide bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:-translate-y-1 hover:scale-110 active:scale-95">
              Read more...
            </button>
          </div>
        </div>

        {/* BACK SIDE - Preserved Outer Border */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-400 via-blue-500 to-teal-400 p-[2px] rounded-2xl shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">

          {/* Inner Back Content - Soft, Light Shade Sky Blue Gradient */}
          <div className="h-full w-full rounded-[14px] p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-sky-200 via-blue-100 to-sky-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-950 drop-shadow-md">Detailed Insights</h3>
            <p className="text-slate-800 leading-relaxed font-medium">{note}</p>

            <span className="mt-8 text-blue-700 text-xs uppercase tracking-widest font-bold group-hover:text-blue-900 transition-colors">
              Tap to flip back
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
// ============================================================
// Achievements / Metrics Section
// ============================================================
function Achievements() {
  const { achievements } = SITE_CONTENT;

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Our Impact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {achievements.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{achievements.subheading}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.metrics.map((metric, i) => {
            const Icon = ICON_MAP[metric.icon];
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md mx-auto mb-5 group-hover:shadow-blue-300 transition-shadow duration-300">
                  {Icon && <Icon size={26} className="text-white" />}
                </div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-slate-900 font-semibold text-base mb-3">{metric.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// About Section
// ============================================================
function About() {
  const { about } = SITE_CONTENT;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {about.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">{about.subheading}</p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Approach */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{about.approach.heading}</h3>
            <div className="flex flex-col gap-7">
              {about.approach.points.map((point, i) => {
                const Icon = ICON_MAP[point.icon];
                return (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md">
                      {Icon && <Icon size={20} className="text-white" />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1.5">{point.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{point.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Vision & Mission */}
          <div className="flex flex-col gap-6">
            {/* Vision */}
            <div className="relative rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/60 p-7 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-8 translate-x-8 blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shadow">
                    <Eye size={17} className="text-white" />
                  </div>
                  <span className="text-blue-700 font-bold text-sm uppercase tracking-widest">
                    {about.vision.heading}
                  </span>
                </div>
                <p className="text-slate-700 text-base leading-relaxed font-medium">{about.vision.body}</p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-7 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/40 rounded-full translate-y-8 -translate-x-8 blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shadow">
                    <Target size={17} className="text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm uppercase tracking-widest">
                    {about.mission.heading}
                  </span>
                </div>
                <p className="text-slate-600 text-base leading-relaxed">{about.mission.body}</p>
              </div>
            </div>

            {/* Summary stat bar */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: 'AI', label: 'Solutions' },
                  { value: 'IP', label: 'Strategy' },
                  { value: 'R&D', label: 'Research' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-extrabold text-blue-600">{value}</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Contact & Forms Section
// ============================================================
function ContactForm({
  config,
  formType,
}: {
  config: typeof SITE_CONTENT.contact.consultation;
  formType: 'consultation' | 'workshop';
}) {
  const [form, setForm] = useState<FormData>(emptyForm());
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service_interest || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setError(null);
    const { error: dbError } = await supabase.from('contact_submissions').insert({
      name: form.name,
      email: form.email,
      organization: form.organization || null,
      service_interest: form.service_interest,
      message: form.message,
      form_type: formType,
    });
    setSubmitting(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
      return;
    }
    setSuccess(true);
    setForm(emptyForm());
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5 shadow">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{config.successTitle}</h3>
        <p className="text-slate-600 max-w-sm">{config.successMessage}</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-7 px-5 py-2.5 text-sm font-medium text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            {config.fields.name} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            {config.fields.email} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {config.fields.organization}
        </label>
        <input
          type="text"
          name="organization"
          value={form.organization}
          onChange={handleChange}
          placeholder="Acme Research Institute"
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {config.fields.serviceInterest} <span className="text-red-500">*</span>
        </label>
        <select
          name="service_interest"
          value={form.service_interest}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
        >
          <option value="">Select an option</option>
          {config.serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          {config.fields.message} <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder={config.fields.message}
          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-md hover:shadow-blue-300 transition-all duration-200"
      >
        {submitting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            {config.submitLabel}
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Contact() {
  const { contact } = SITE_CONTENT;
  const [activeTab, setActiveTab] = useState<'consultation' | 'workshop'>('consultation');

  const activeConfig =
    activeTab === 'consultation' ? contact.consultation : contact.workshop;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {contact.heading}
          </h2>
          <p className="mt-4 text-slate-600 text-lg">{contact.subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-5">Contact Information</h3>
              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${SITE_CONTENT.footer.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Mail size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <div className="text-slate-800 text-sm font-medium group-hover:text-blue-600 transition-colors">
                      {SITE_CONTENT.footer.email}
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Location
                    </div>
                    <div className="text-slate-800 text-sm font-medium">
                      {SITE_CONTENT.footer.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services quick-list */}
            <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">
                Services Available
              </h4>
              <div className="flex flex-col gap-2.5">
                {SITE_CONTENT.services.items.map((s) => (
                  <div key={s.title} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
                    {s.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-slate-100">
              {(
                [
                  { key: 'consultation', label: contact.tabs.consultation },
                  { key: 'workshop', label: contact.tabs.workshop },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 py-4 px-4 text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Form content */}
            <div className="p-7">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{activeConfig.heading}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{activeConfig.description}</p>
              </div>
              <ContactForm config={activeConfig} formType={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  const { footer, company } = SITE_CONTENT;


  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImage}
                alt="Neuzura Technologies Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-white font-bold text-xl">
                {company.name}
              </span>
            </div>

            <div className="mt-3 max-w-xs">
              <p className="text-white text-2xl font-bold tracking-wide">
                {footer.founderName}
              </p>
              <p className="text-slate-400 text-base mt-1">
                {footer.founderTitle}
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-sky-400 transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          {/* Contact Column (This is where your phone number appears!) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">{footer.contactHeading}</h4>
            <ul className="space-y-4">

              {/* Location */}
              <li className="flex items-start gap-3 text-slate-400">
                <span className="mt-1">📍</span>
                <span>{footer.location}</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 text-slate-400">
                <span>✉️</span>
                <a href={`mailto:${footer.email}`} className="hover:text-sky-400 transition-colors">
                  {footer.email}
                </a>
              </li>

              {/* Phone - wrapped in a tel link so mobile users can tap to call */}
              <li className="flex items-center gap-3 text-slate-400">
                <span>📞</span>
                <a href={`tel:${footer.phone.replace(/\s+/g, '')}`} className="hover:text-sky-400 transition-colors font-medium">
                  {footer.phone}
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/50 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">{footer.copyright}</p>
          <div className="text-slate-600 text-sm">
            Designed for the Future of Innovation
          </div>
        </div>

      </div>
    </footer>
  );
}

// ============================================================
// WhatsApp Floating Button
// ============================================================
function WhatsAppButton() {
  const { number, defaultMessage } = SITE_CONTENT.contact.whatsapp;

  // Format the URL for WhatsApp's click-to-chat API
  const waUrl = `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Official WhatsApp SVG Logo */}
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-white stroke-none"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>

      {/* Optional tooltip bubble */}
      <span className="absolute right-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
        Chat with us
      </span>
    </a>
  );
}

// ============================================================
// Root App
// ============================================================
export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Achievements />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* ADD THE BUTTON HERE */}
      <WhatsAppButton />
    </div>
  );
}
