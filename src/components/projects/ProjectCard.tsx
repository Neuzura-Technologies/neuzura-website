import type { Project } from "../../types/projects";
import ProjectStatusBadge from "./ProjectStatusBadge";
import { ArrowRight, Star } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    onClick?: (project: Project) => void;
}

export default function ProjectCard({
    project,
    onClick,
}: ProjectCardProps) {
    return (
        <div
            data-aos="fade-up"
            onClick={() => onClick?.(project)}
            className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300"
        >

            {/* Image */}

            <div className="relative h-56 bg-slate-100 overflow-hidden">

                {project.thumbnail ? (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                        Project Image
                    </div>
                )}

                {/* Featured Badge */}

                {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow">
                        <Star size={12} />
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}

            <div className="p-6">

                <div className="flex items-center justify-between">

                    <span className="text-xs uppercase tracking-wider font-semibold text-blue-600">
                        {project.category}
                    </span>

                    <ProjectStatusBadge
                        status={project.status}
                    />

                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {project.title}
                </h3>

                {project.subtitle && (
                    <p className="text-blue-600 text-sm mt-1">
                        {project.subtitle}
                    </p>
                )}

                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                    {project.shortDescription}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                        >
                            {tech}
                        </span>
                    ))}

                </div>

                {/* Footer */}

                <div className="mt-8 flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                        {project.year}
                    </span>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                        View Project
                        <ArrowRight size={16} />
                    </div>

                </div>

            </div>

        </div>
    );
}