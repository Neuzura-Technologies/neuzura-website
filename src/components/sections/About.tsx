import { Eye, Target } from "lucide-react";

import { SITE_CONTENT } from "../../data/siteContent";
import { ICON_MAP } from "../../data/icons";

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
                                const Icon = ICON_MAP[point.icon as keyof typeof ICON_MAP];
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

export default About;