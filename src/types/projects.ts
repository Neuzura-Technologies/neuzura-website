export interface Project {
    id: string;
    slug: string;

    title: string;
    subtitle?: string;

    category:
    | "Artificial Intelligence"
    | "Robotics"
    | "Healthcare"
    | "Enterprise Software"
    | "IoT"
    | "Mobile"
    | "Data Analytics"
    | "Embedded Systems"
    | "Research"
    | "Patent"
    | "Web Development"
    | "Other";

    status:
    | "Completed"
    | "In Progress"
    | "Research";

    featured: boolean;

    thumbnail: string;
    coverImage?: string;

    shortDescription: string;
    fullDescription: string;

    technologies: string[];

    tags: string[];

    gallery: string[];
    videos: string[];

    github?: string;
    demo?: string;
    documentation?: string;

    year: number;
}