import { useState } from "react";
import {
    CheckCircle2,
    Users,
    Building2,
    GraduationCap,
} from "lucide-react";

import ContactForm from "../forms/ContactForm";
import { SITE_CONTENT } from "../../data/siteContent";

function Contact() {

    const { contact } = SITE_CONTENT;

    const [activeTab, setActiveTab] =
        useState<"consultation" | "workshop">(
            "consultation"
        );

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

                    {/* LEFT SIDE */}

                    <div className="lg:col-span-2 space-y-6">

                        {/* WHO WE WORK WITH */}

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">

                            <div className="flex items-center gap-3 mb-6">

                                <Users className="text-blue-600" />

                                <h3 className="text-xl font-bold">
                                    Who We Work With
                                </h3>

                            </div>

                            <div className="grid grid-cols-2 gap-3">

                                {[
                                    "Researchers",
                                    "Students",
                                    "Educational Institutions",
                                    "Startups",
                                    "MSMEs",
                                    "Businesses",
                                    "Government Organizations",
                                    "Innovators",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-sm"
                                    >

                                        <CheckCircle2
                                            size={16}
                                            className="text-blue-600"
                                        />

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>

                        </div>
                        {/* DEPARTMENTS */}

                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7">

                            <div className="flex items-center gap-3 mb-6">

                                <GraduationCap className="text-blue-600" />

                                <h3 className="text-xl font-bold">
                                    Departments We Support
                                </h3>

                            </div>

                            <p className="text-sm text-slate-600 mb-5">
                                We work across multidisciplinary domains—not limited to engineering.
                            </p>

                            <div className="grid grid-cols-2 gap-3">

                                {[
                                    "Engineering",
                                    "Medical & Healthcare",
                                    "Commerce",
                                    "Management",
                                    "Law",
                                    "Education",
                                    "Arts & Science",
                                    "Agriculture",
                                    "Pharmacy",
                                    "Allied Health Sciences",
                                    "Research",
                                    "Interdisciplinary Projects",
                                ].map((department) => (

                                    <div
                                        key={department}
                                        className="flex items-center gap-2 text-sm"
                                    >

                                        <Building2
                                            size={16}
                                            className="text-blue-600"
                                        />

                                        <span>{department}</span>

                                    </div>

                                ))}

                            </div>

                        </div>

                
                    </div>

                    {/* RIGHT SIDE */}

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