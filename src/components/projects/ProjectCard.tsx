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
    // Limit to exactly 3 technologies for the card display
    const displayedTech = project.technologies.slice(0, 3);
    const remainingTechCount = project.technologies.length - 3;

    return (
        <div
            data-aos="fade-up"
            onClick={() => onClick?.(project)}
            className="group cursor-pointer bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-300 flex flex-col h-full"
        >
            {/* Image */}
            <div className="relative h-56 bg-slate-100 overflow-hidden shrink-0">
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

            {/* Content - flex-grow ensures the footer is pushed to the bottom if cards have different heights */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 line-clamp-1">
                        {project.category}
                    </span>
                    <ProjectStatusBadge status={project.status} />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 line-clamp-2">
                    {project.title}
                </h3>

                {project.subtitle && (
                    <p className="text-blue-600 text-sm mt-1 line-clamp-2">
                        {project.subtitle}
                    </p>
                )}

                <p className="mt-4 text-slate-600 leading-relaxed text-sm line-clamp-3">
                    {project.shortDescription}
                </p>

                {/* Technologies - Only showing top 3 */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {displayedTech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}

                    {/* The '+X more' badge */}
                    {remainingTechCount > 0 && (
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs whitespace-nowrap">
                            +{remainingTechCount} more
                        </span>
                    )}
                </div>

                {/* Footer - mt-auto pushes this to the bottom */}
                <div className="mt-auto pt-8 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        {project.year}
                    </span>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        View Project
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}