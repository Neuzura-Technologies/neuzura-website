import { useState } from "react";
import {
    Mail,
    MapPin,
    CheckCircle2,
    Github,
    Linkedin,
    Building2,
} from "lucide-react";

import ContactForm from "../forms/ContactForm";
import { SITE_CONTENT } from "../../data/siteContent";

function Contact() {
    const { contact, footer } = SITE_CONTENT;

    const [activeTab, setActiveTab] = useState<
        "consultation" | "workshop"
    >("consultation");

    const activeConfig =
        activeTab === "consultation"
            ? contact.consultation
            : contact.workshop;

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                        Contact Us
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        {contact.heading}
                    </h2>

                    <p className="mt-5 text-slate-600 text-lg">
                        {contact.subheading}
                    </p>

                </div>

                <div className="grid lg:grid-cols-5 gap-10">

                    {/* Left */}

                    <div className="lg:col-span-2 space-y-6">

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">

                            <h3 className="text-xl font-bold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-5">

                                <a
                                    href={`mailto:${footer.email}`}
                                    className="flex gap-4 hover:text-blue-600 transition"
                                >
                                    <Mail className="text-blue-600 mt-1" size={20} />
                                    <div>
                                        <p className="text-xs uppercase text-slate-400">
                                            Email
                                        </p>
                                        <p>{footer.email}</p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${footer.phone.replace(/\s+/g, "")}`}
                                    className="flex gap-4 hover:text-blue-600 transition"
                                >
                                    <CheckCircle2
                                        className="text-blue-600 mt-1"
                                        size={20}
                                    />
                                    <div>
                                        <p className="text-xs uppercase text-slate-400">
                                            Phone
                                        </p>
                                        <p>{footer.phone}</p>
                                    </div>
                                </a>

                                <a
                                    href={footer.social.maps}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex gap-4 hover:text-blue-600 transition"
                                >
                                    <MapPin
                                        className="text-blue-600 mt-1"
                                        size={20}
                                    />
                                    <div>
                                        <p className="text-xs uppercase text-slate-400">
                                            Location
                                        </p>
                                        <p>{footer.location}</p>
                                    </div>
                                </a>

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">

                            <h3 className="text-xl font-bold mb-5">
                                Connect With Us
                            </h3>

                            <div className="flex gap-4">

                                <a
                                    href={footer.social.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition"
                                >
                                    <Github size={22} />
                                </a>

                                <a
                                    href={footer.social.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition"
                                >
                                    <Linkedin size={22} />
                                </a>

                                <a
                                    href={footer.social.crunchbase}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white transition"
                                >
                                    <Building2 size={22} />
                                </a>

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">

                            <h3 className="text-xl font-bold mb-5">
                                Services
                            </h3>

                            <div className="space-y-3">

                                {SITE_CONTENT.services.items.map((service) => (

                                    <div
                                        key={service.title}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            className="text-blue-600"
                                            size={16}
                                        />

                                        <span className="text-sm">
                                            {service.title}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200">

                        <div className="flex border-b">

                            <button
                                onClick={() => setActiveTab("consultation")}
                                className={`flex-1 py-4 font-semibold ${activeTab === "consultation"
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-slate-500"
                                    }`}
                            >
                                {contact.tabs.consultation}
                            </button>

                            <button
                                onClick={() => setActiveTab("workshop")}
                                className={`flex-1 py-4 font-semibold ${activeTab === "workshop"
                                        ? "text-blue-600 border-b-2 border-blue-600"
                                        : "text-slate-500"
                                    }`}
                            >
                                {contact.tabs.workshop}
                            </button>

                        </div>

                        <div className="p-8">

                            <h3 className="text-2xl font-bold mb-2">
                                {activeConfig.heading}
                            </h3>

                            <p className="text-slate-600 mb-8">
                                {activeConfig.description}
                            </p>

                            <ContactForm
                                config={activeConfig}
                                formType={activeTab}
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;