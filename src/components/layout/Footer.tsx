import {
    Github,
    Linkedin,
    MapPin,
    Mail,
    Phone,
    Building2,
} from "lucide-react";

import { SITE_CONTENT } from "../../data/siteContent";
import logoImage from "../../assets/images/logo1.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
    const { footer, company, nav } = SITE_CONTENT;
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToSection = (href: string) => {

        if (href === "#projects") {
            navigate("/projects");
            return;
        }

        if (location.pathname !== "/") {

            navigate("/", {
                state: {
                    scrollTo: href,
                },
            });

            return;
        }

        const element = document.querySelector(href);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-slate-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Company */}

                    <div>

                        <div className="flex items-center gap-3 mb-5">

                            <img
                                src={logoImage}
                                alt={company.name}
                                className="h-12 w-auto"
                            />

                            <span className="text-white text-xl font-bold">
                                {company.name}
                            </span>

                        </div>

                        <p className="text-slate-400 leading-7">
                            {company.tagline}
                        </p>

                        <div className="mt-6">

                            <h4 className="text-white font-semibold">
                                {footer.founderName}
                            </h4>

                            <p className="text-slate-400">
                                {footer.founderTitle}
                            </p>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-white text-lg font-semibold mb-5">
                            {footer.quickLinks}
                        </h3>

                        <ul className="space-y-3">

                            {nav.links.map((link) => (

                                <li key={link.href}>

                                    <button
                                        onClick={() => navigateToSection(link.href)}
                                        className="hover:text-blue-400 transition text-left"
                                    >
                                        {link.label}
                                    </button>

                                </li>

                            ))}

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-white text-lg font-semibold mb-5">
                            {footer.contactHeading}
                        </h3>

                        <div className="space-y-4">

                            <a
                                href={footer.social.maps}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-start gap-3 hover:text-blue-400 transition"
                            >
                                <MapPin size={18} />
                                <span>{footer.location}</span>
                            </a>

                            <a
                                href={`mailto:${footer.email}`}
                                className="flex items-center gap-3 hover:text-blue-400 transition"
                            >
                                <Mail size={18} />
                                {footer.email}
                            </a>

                            <a
                                href={`tel:${footer.phone.replace(/\s+/g, "")}`}
                                className="flex items-center gap-3 hover:text-blue-400 transition"
                            >
                                <Phone size={18} />
                                {footer.phone}
                            </a>

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-white text-lg font-semibold mb-5">
                            Connect With Us
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href={footer.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
                            >
                                <Github size={22} />
                            </a>

                            <a
                                href={footer.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
                            >
                                <Linkedin size={22} />
                            </a>

                            <a
                                href={footer.social.crunchbase}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
                            >
                                <Building2 size={22} />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-slate-500 text-sm">
                        {footer.copyright}
                    </p>

                    <p className="text-slate-600 text-sm">
                        Research • Innovation • Technology • Intellectual Property
                    </p>

                </div>

            </div>

        </footer>
    );
}