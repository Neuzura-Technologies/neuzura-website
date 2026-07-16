import type { Project } from "../../types/projects";

interface Props {
    project: Project;
}

export default function ProjectDetails({ project }: Props) {
    return (
        <div className="space-y-8">

            {/* Cover */}
            {project.coverImage && (
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full rounded-2xl object-cover"
                />
            )}

            {/* Title */}
            <div>
                <h1 className="text-4xl font-bold text-slate-900">
                    {project.title}
                </h1>

                {project.subtitle && (
                    <p className="mt-2 text-xl text-slate-600">
                        {project.subtitle}
                    </p>
                )}
            </div>

            {/* Description */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Overview
                </h2>

                <p className="text-slate-700 leading-relaxed">
                    {project.fullDescription}
                </p>
            </div>

            {/* Technologies */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Technologies
                </h2>

                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-blue-50 text-blue-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}