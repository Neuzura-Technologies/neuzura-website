import {
    Zap,
    ChevronRight,
    ArrowRight,
    Shield,
    Award,
    Brain,
} from "lucide-react";

import bgImage from "../../assets/images/background.png";
import { SITE_CONTENT } from "../../data/siteContent";

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

export default Hero;