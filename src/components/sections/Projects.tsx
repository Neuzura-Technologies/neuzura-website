import { getFeaturedProjects } from "../../utils/projectUtils";
import { SITE_CONTENT } from "../../data/siteContent";
import ProjectGrid from "../projects/ProjectGrid";
import { useState } from "react";
import type { Project } from "../../types/projects";
import ProjectModal from "../projects/ProjectModal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";

export default function Projects() {
    const { projects } = SITE_CONTENT;

    const featuredProjects = getFeaturedProjects();

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    return (
        <section
            id="projects"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                        {projects.badge}
                    </span>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        {projects.heading}
                    </h2>

                    <p className="mt-5 text-slate-600 text-lg">
                        {projects.subheading}
                    </p>

                </div>
                
                {/* Featured Projects */}

                <ProjectGrid
                    projects={featuredProjects}
                    onProjectClick={setSelectedProject}
                />

                <div className="mt-14 text-center">
                    <Link to="/projects">
                        <Button>
                            {projects.viewAll}
                            <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </div>
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}