import { Eye, Target, Users, CheckCircle, GraduationCap, Building } from "lucide-react";
import { SITE_CONTENT } from "../../data/siteContent";

import deepikaImg from "../../assets/images/deepika.jpeg";
import yourImg from "../../assets/images/ram.jpeg";

function About() {
    const { about } = SITE_CONTENT;

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                        Who We Are
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        {about.heading}
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                        {about.subheading}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-24">

                    {/* LEFT COLUMN: Who We Work With & Departments */}
                    <div className="space-y-8">

                        {/* Who We Work With Card */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-8">
                                <Users className="text-blue-600" size={28} />
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {about.whoWeWorkWith.heading}
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                                {about.whoWeWorkWith.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-blue-600 shrink-0" size={20} />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Departments We Support Card */}
                        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-3">
                                <GraduationCap className="text-blue-600" size={28} />
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {about.departments.heading}
                                </h3>
                            </div>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {about.departments.subheading}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                                {about.departments.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Building className="text-blue-600 shrink-0" size={20} />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Vision & Mission */}
                    <div className="space-y-8">

                        {/* Vision */}
                        <div className="relative rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/60 p-8 overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10 blur-3xl" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                        <Eye size={18} className="text-white" />
                                    </div>
                                    <span className="text-blue-700 font-bold uppercase tracking-wider">
                                        {about.vision.heading}
                                    </span>
                                </div>
                                <p className="text-slate-700 leading-8">
                                    {about.vision.body}
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 overflow-hidden h-full">
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/30 rounded-full translate-y-10 -translate-x-10 blur-3xl" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                                        <Target size={18} className="text-white" />
                                    </div>
                                    <span className="text-slate-700 font-bold uppercase tracking-wider">
                                        {about.mission.heading}
                                    </span>
                                </div>
                                <p className="text-slate-600 leading-8">
                                    {about.mission.body}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Section: Leadership Team */}
                {about.team.enabled && (
                <div className="border-t border-slate-100 pt-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-slate-900">
                            {about.team.heading}
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Deepika's Profile */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-32 h-32 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img src={deepikaImg} alt={about.team.members[0].name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">{about.team.members[0].name}</h4>
                            <p className="text-blue-600 font-medium text-sm mb-4">{about.team.members[0].role}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {about.team.members[0].bio}
                            </p>
                        </div>

                        {/* Your Profile */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                            <div className="w-32 h-32 rounded-full bg-slate-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
                                <img src={yourImg} alt={about.team.members[1].name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900">{about.team.members[1].name}</h4>
                            <p className="text-blue-600 font-medium text-sm mb-4">{about.team.members[1].role}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {about.team.members[1].bio}
                            </p>
                        </div>

                    </div>
                </div>
                )}

            </div>
        </section>
    );
}

export default About;