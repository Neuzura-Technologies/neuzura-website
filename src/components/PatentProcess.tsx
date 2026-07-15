import { useState } from "react";
import { Lightbulb, Search, FileText, Upload, FileCheck, Trophy, Activity } from "lucide-react";

const steps = [
    {
        title: "Idea Evaluation",
        icon: Lightbulb,
        description: "Share your idea, abstract, PPT, research paper, or prototype. We evaluate its novelty and patentability.",
        color: "bg-amber-500",
        arrowBorder: "border-r-amber-500",
        lineColor: "bg-amber-500",
        iconColor: "text-amber-500",
    },
    {
        title: "Prior Art Search",
        icon: Search,
        description: "Comprehensive patent search to identify existing technologies and determine the uniqueness of your innovation.",
        color: "bg-pink-600",
        arrowBorder: "border-r-pink-600",
        lineColor: "bg-pink-600",
        iconColor: "text-pink-600",
    },
    {
        title: "Patent Drafting",
        icon: FileText,
        description: "Professional patent drafting with complete specification, drawings and strong patent claims.",
        color: "bg-blue-600",
        arrowBorder: "border-r-blue-600",
        lineColor: "bg-blue-600",
        iconColor: "text-blue-600",
    },
    {
        title: "Patent Filing",
        icon: Upload,
        description: "Preparation and filing of your patent application with all required documentation.",
        color: "bg-teal-500",
        arrowBorder: "border-r-teal-500",
        lineColor: "bg-teal-500",
        iconColor: "text-teal-500",
    },
    {
        title: "Publication & FER",
        icon: FileCheck,
        description: "Publication monitoring and professional responses for the First Examination Report (FER).",
        color: "bg-emerald-500",
        arrowBorder: "border-r-emerald-500",
        lineColor: "bg-emerald-500",
        iconColor: "text-emerald-500",
    },
    {
        title: "Patent Grant",
        icon: Trophy,
        description: "Continuous support until your patent is successfully granted.",
        color: "bg-purple-600",
        arrowBorder: "border-r-purple-600",
        lineColor: "bg-purple-600",
        iconColor: "text-purple-600",
    },
];

export default function PatentProcess() {
    // Fixed the TypeScript inference error by explicitly allowing number | null
    const [active, setActive] = useState<number | null>(null);

    return (
        <section className="pt-24 pb-12 mt-8 overflow-hidden bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">
                        End-to-End Patent Support
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
                        No prior patent knowledge is required. Whether you are a student, researcher, startup, or organization, we guide you through every stage of the patent process.
                    </p>
                </div>

                {/* Infographic Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">

                    {/* Left Side: Central Hub Graphic */}
                    <div className="hidden md:flex relative flex-shrink-0 w-64 h-64 rounded-full bg-white shadow-xl flex-col items-center justify-center z-10 border-[8px] border-slate-50">

                        {/* Concentric rings */}
                        <div className="absolute inset-[-10px] rounded-full border-[2px] border-amber-400 border-t-pink-500 border-r-blue-500 border-b-green-500 transition-transform duration-700 hover:rotate-180"></div>
                        <div className="absolute inset-[-18px] rounded-full border-[2px] border-teal-400 border-t-purple-500 border-r-amber-500 border-b-pink-500 opacity-40 transition-transform duration-1000 hover:-rotate-180"></div>

                        <h2 className="text-2xl font-black text-slate-800 tracking-tight text-center leading-tight">
                            Patent<br />Process
                        </h2>
                        <Activity className="w-8 h-8 mt-3 text-slate-700" />
                    </div>

                    {/* Right Side: Process Cards */}
                    <div className="flex flex-col gap-3 w-full max-w-2xl relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = active === index;

                            return (
                                <div
                                    key={index}
                                    className="flex items-center group cursor-pointer"
                                    onMouseEnter={() => setActive(index)}
                                    onMouseLeave={() => setActive(null)}
                                >

                                    {/* Connector Line (Desktop Only) */}
                                    <div className={`hidden lg:block w-8 h-[3px] rounded-full transition-all duration-300 ${isActive ? step.lineColor : 'bg-slate-200'}`}></div>

                                    {/* Infographic Pill Card */}
                                    <div className={`relative flex flex-1 items-center justify-between rounded-r-full rounded-l-lg p-3 pl-6 shadow-sm transition-all duration-300 transform group-hover:scale-[1.01] group-hover:shadow-md ${step.color}`}>

                                        {/* Left Pointing Arrow */}
                                        <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] transition-colors duration-300 ${step.arrowBorder}`}></div>

                                        {/* Text Content */}
                                        <div className="text-white pr-14 py-1">
                                            <h3 className="font-semibold text-base mb-0.5 tracking-wide">{index + 1}. {step.title}</h3>
                                            <p className="text-xs opacity-90 leading-tight">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Right Embedded Icon */}
                                        <div className={`absolute right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-inner transition-transform duration-500 ${isActive ? 'rotate-12 scale-110' : ''}`}>
                                            <Icon className={`w-5 h-5 ${step.iconColor}`} />
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Call to Action */}
                <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8 text-white text-center shadow-lg relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>

                    <h3 className="text-2xl font-bold relative z-10">
                        Have an Idea?
                    </h3>
                    <p className="mt-2 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-slate-300 relative z-10">
                        Have only an idea, abstract, PPT, research paper, or prototype?
                        That's enough to begin. We will help transform your innovation into
                        a professionally drafted patent application.
                    </p>
                </div>

            </div>
        </section>
    );
}