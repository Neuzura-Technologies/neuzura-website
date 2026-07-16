import type { Project } from "../../types/projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({
    project,
    onClose,
}: ProjectModalProps) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cover */}

                <div className="relative">

                    {project.coverImage ? (
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-80 object-cover"
                        />
                    ) : (
                        <div className="h-80 bg-gradient-to-r from-blue-700 to-slate-900 flex items-center justify-center text-white text-3xl font-bold">
                            {project.title}
                        </div>
                    )}

                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 bg-white w-11 h-11 rounded-full shadow hover:bg-slate-100 text-xl"
                    >
                        ×
                    </button>

                </div>

                {/* Content */}

                <div className="p-10">

                    <div className="flex flex-wrap items-center gap-3 mb-6">

                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {project.category}
                        </span>

                        <span className="px-4 py-2 bg-slate-100 rounded-full text-sm">
                            {project.status}
                        </span>

                        <span className="px-4 py-2 bg-slate-100 rounded-full text-sm">
                            {project.year}
                        </span>

                    </div>

                    <h2 className="text-4xl font-bold text-slate-900">
                        {project.title}
                    </h2>

                    {project.subtitle && (
                        <p className="mt-3 text-lg text-blue-600 font-medium">
                            {project.subtitle}
                        </p>
                    )}

                    <div className="mt-8 border-t border-slate-200 pt-8">

                        <h3 className="text-xl font-bold mb-4">
                            Overview
                        </h3>

                        <p className="text-slate-700 leading-8 whitespace-pre-line">
                            {project.fullDescription}
                        </p>

                    </div>

                    <div className="mt-10 border-t border-slate-200 pt-8">

                        <h3 className="text-xl font-bold mb-5">
                            Technologies Used
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {project.technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                    {project.tags && project.tags.length > 0 && (
                        <div className="mt-10 border-t border-slate-200 pt-8">

                            <h3 className="text-xl font-bold mb-5">
                                Domains
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {project.tags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-full bg-slate-100 text-slate-700"
                                    >
                                        {tag}
                                    </span>

                                ))}

                            </div>

                        </div>

                    )}

                </div>
            </div>
        </div>
    );
}