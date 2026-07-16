import { useMemo, useState } from "react";

import { PROJECTS } from "../../data/projects";
import { SITE_CONTENT } from "../../data/siteContent";

import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

import type { Project } from "../../types/projects";

export default function ProjectExplorer() {

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const filteredProjects = useMemo(() => {

        return PROJECTS.filter((project) => {

            const matchesCategory =
                category === "All" ||
                project.category === category;

            const keyword = search.toLowerCase();

            const matchesSearch =
                project.title.toLowerCase().includes(keyword) ||
                project.shortDescription.toLowerCase().includes(keyword) ||
                project.category.toLowerCase().includes(keyword) ||
                project.technologies.some((tech) =>
                    tech.toLowerCase().includes(keyword)
                );

            return matchesCategory && matchesSearch;

        });

    }, [search, category]);

    return (

        <section className="py-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <SearchBar
                    value={search}
                    onChange={setSearch}
                    placeholder={SITE_CONTENT.projects.searchPlaceholder}
                />

                <div className="mt-8 mb-10">

                    <CategoryFilter
                        categories={SITE_CONTENT.projects.categories}
                        selected={category}
                        onSelect={setCategory}
                    />

                </div>

                <ProjectGrid
                    projects={filteredProjects}
                    onProjectClick={setSelectedProject}
                />

            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </section>

    );
}