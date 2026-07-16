import { Eye, Target } from "lucide-react";

import { SITE_CONTENT } from "../../data/siteContent";
import { ICON_MAP } from "../../data/icons";

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

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT */}

                    <div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-8">
                            {about.approach.heading}
                        </h3>

                        <div className="space-y-8">

                            {about.approach.points.map((point, i) => {

                                const Icon =
                                    ICON_MAP[point.icon as keyof typeof ICON_MAP];

                                return (

                                    <div
                                        key={i}
                                        className="flex gap-5"
                                    >

                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow">

                                            {Icon && (
                                                <Icon
                                                    size={20}
                                                    className="text-white"
                                                />
                                            )}

                                        </div>

                                        <div>

                                            <h4 className="text-lg font-semibold text-slate-900 mb-2">
                                                {point.title}
                                            </h4>

                                            <p className="text-slate-600 leading-relaxed">
                                                {point.body}
                                            </p>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>
                        
                    </div>

                    {/* RIGHT */}

                    <div className="space-y-8">

                        {/* Vision */}

                        <div className="relative rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/60 p-8 overflow-hidden">

                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10 blur-3xl" />

                            <div className="relative">

                                <div className="flex items-center gap-3 mb-5">

                                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">

                                        <Eye
                                            size={18}
                                            className="text-white"
                                        />

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

                        <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 overflow-hidden">

                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100/30 rounded-full translate-y-10 -translate-x-10 blur-3xl" />

                            <div className="relative">

                                <div className="flex items-center gap-3 mb-5">

                                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">

                                        <Target
                                            size={18}
                                            className="text-white"
                                        />

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

            </div>

        </section>
    );
}

export default About;