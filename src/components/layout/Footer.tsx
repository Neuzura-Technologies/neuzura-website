import { Github, Linkedin, MapPin } from "lucide-react";
import { SITE_CONTENT } from "../../data/siteContent";

export default function Footer() {
    const { footer } = SITE_CONTENT;

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand & Copyright */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                            {SITE_CONTENT.company.name}
                        </h3>
                        <p className="text-slate-400 text-sm">
                            {footer.copyright}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={footer.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={footer.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={footer.social.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                            aria-label="Google Maps"
                        >
                            <MapPin size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}