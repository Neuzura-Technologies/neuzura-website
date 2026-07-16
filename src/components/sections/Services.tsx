import serviceBg from "../../services.png";

import { SITE_CONTENT } from "../../data/siteContent";

import ServiceCard from "../services/ServiceCard";

import PatentProcess from "./PatentProcess";

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
              {services.badge}
            </span>

            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-teal-500 rounded-full transition-all duration-500 group-hover:w-12 group-hover:opacity-100 opacity-70"></div>
          </div>

          {/* Main Heading - Hardcoded to fix TypeScript error */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 drop-shadow-sm">
            {services.heading}
          </h2>

          {/* Subheading - Hardcoded to fix TypeScript error */}
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            {services.subheading}
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
       
        <PatentProcess />
      </div>
    </section>
  );
}

export default Services;