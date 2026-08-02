import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle, BadgeCheck } from "lucide-react"; // Replaced ArrowRight with MessageCircle

import logoImage from "../../assets/images/logo1.png";
import { SITE_CONTENT } from "../../data/siteContent";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);

        // Projects page
        if (href === "#projects") {
            navigate("/projects");
            return;
        }

        // If we're not on homepage, go home first
        if (location.pathname !== "/") {
            navigate("/", {
                state: {
                    scrollTo: href,
                },
            });
            return;
        }

        // Already on homepage
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    // --- New WhatsApp Handler ---
    const handleWhatsAppClick = () => {
        setMobileOpen(false); // Close mobile menu if open

        // REPLACE this with your actual client's WhatsApp number (Include Country Code, no + or spaces)
        // Example for India: "919876543210"
        const phoneNumber = "919360090778";

        // Pre-filled message the user will send
        const message = encodeURIComponent("Hi Neuzura Technologies, I would like to know more about your services.");

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleVerifyClick = () => {
        window.open("https://verify.neuzura.com", "_blank");
    };
    

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isHomePage || scrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('#home')}
                        className="flex items-center gap-2.5 group"
                    >
                        <img src={logoImage} alt="Neuzura Logo" className="h-9 w-auto object-contain" />

                        <span
                            className={`text-xl font-bold tracking-wide bg-clip-text text-transparent transition-all duration-300 ${!isHomePage || scrolled
                                ? "bg-gradient-to-r from-blue-700 to-blue-900"
                                : "bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                                }`}
                        >
                            {SITE_CONTENT.company.name}
                        </span>
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {SITE_CONTENT.nav.links.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${!isHomePage || scrolled
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
                            onClick={handleVerifyClick}
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-blue-300 transition-all duration-200"
                        >
                            Verify Certificate
                            <BadgeCheck size={16} />
                        </button>
                        
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${!isHomePage || scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/20'}`}
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

                        {/* Updated Mobile WhatsApp Button */}
                        <button
                            onClick={handleWhatsAppClick}
                            className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md"
                        >
                            Chat on WhatsApp
                            <MessageCircle size={18} />
                        </button>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;