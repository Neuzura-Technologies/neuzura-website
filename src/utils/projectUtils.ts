import { PROJECTS } from "../data/projects";

export function getFeaturedProjects() {
    return PROJECTS.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
    return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string) {
    if (category === "All") {
        return PROJECTS;
    }

    return PROJECTS.filter(
        (project) => project.category === category
    );
}

export function searchProjects(search: string) {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
        return PROJECTS;
    }

    return PROJECTS.filter((project) =>
        [
            project.title,
            project.subtitle,
            project.category,
            project.shortDescription,
            project.fullDescription,
            ...project.technologies,
            ...(project.tags ?? []),
        ]
            .join(" ")
            .toLowerCase()
            .includes(keyword)
    );
}

export function filterProjects(
    category: string,
    search: string
) {
    let projects = searchProjects(search);

    if (category !== "All") {
        projects = projects.filter(
            (project) => project.category === category
        );
    }

    return projects;
}