import { Mail, Phone, MapPin, Linkedin, Github, Building2 } from "lucide-react";
import { SITE_CONTENT } from "../../data/siteContent";

export default function Contact() {
    const { contact, footer } = SITE_CONTENT;

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                        {contact.heading}
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                        Let's Work Together
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                        {contact.subheading}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                    {/* LEFT COLUMN: Contact Info & Socials */}
                    <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-center">

                        <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>

                        <div className="space-y-6 mb-10">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email</h4>
                                    <a href={`mailto:${footer.email}`} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                                        {footer.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Phone</h4>
                                    <a href={`tel:${footer.phone}`} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                                        {footer.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-slate-600 font-medium">
                                        {footer.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-200 mb-8" />

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect With Us</h3>

                        <div className="flex flex-wrap gap-4">
                            {/* LinkedIn */}
                            <a
                                href={footer.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-4 py-2.5 rounded-lg transition-all shadow-sm font-medium"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>

                            {/* GitHub */}
                            <a
                                href={footer.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-100 text-slate-700 hover:text-slate-900 px-4 py-2.5 rounded-lg transition-all shadow-sm font-medium"
                            >
                                <Github size={18} />
                                GitHub
                            </a>

                            {/* Crunchbase */}
                            <a
                                href={footer.social.crunchbase}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-4 py-2.5 rounded-lg transition-all shadow-sm font-medium"
                            >
                                <Building2 size={18} />
                                Crunchbase
                            </a>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Google Maps Embed */}
                    <div className="h-[500px] lg:h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.5421041549482!2d80.2457144980097!3d13.148222941498537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa33421cc22b8f8b7%3A0x3d6a46f591fa4fdf!2sNeuzura%20Technologies!5e0!3m2!1sen!2sin!4v1784382916051!5m2!1sen!2sin"
                            className="w-full h-full absolute inset-0 border-0 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}