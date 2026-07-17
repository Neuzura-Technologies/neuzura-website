import iprImg from "../assets/images/ipr.png";
import aiImg from "../assets/images/aiml.png";
import robotImg from "../assets/images/robot.png";
import trainingImg from "../assets/images/prof.png";
import SD from "../assets/images/Soft.png";
import ARC from "../assets/images/ARC.png"
export const  SITE_CONTENT = {
    company: {
        name: 'Neuzura Technologies',
        tagline: 'Innovating Through Research. Protecting Ideas. Building the Future.',
        subheadline:
            'We help innovators, researchers, startups, businesses, educational institutions, and organizations transform ideas into intelligent technology, protected intellectual property, and impactful real-world solutions.',
        ctaPrimary: 'Our Services',
        ctaSecondary: 'Get in Touch',
        bookConsultation: 'Book Consultation',
    },

    nav: {
        links: [
            { label: 'Home', href: '#home' },
            { label: 'Services', href: '#services' },
            { label: "Projects", href: "#projects" },
            { label: 'Achievements', href: '#achievements' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
        ],
    },

    services: {
        badge: "Our Services",

        heading: "Technology, Innovation & Intellectual Property Solutions",

        subheading:
            "Helping startups, researchers, businesses, educational institutions, and innovators transform ideas into intelligent products, protected innovations, and scalable technology solutions.",

        items: [
            {
                title: "Software Development",
                image: SD,
                description:
                    "Custom web, mobile, desktop, cloud, and enterprise software tailored to business, research, and industrial requirements.",
                detailedNote:
                    "React, Next.js, Vite, TypeScript, Node.js, Python, Java, .NET, REST APIs, Microservices, Cloud Deployment, Docker, PostgreSQL, MongoDB, Firebase, and scalable system architecture."
            },

            {
                title: "Artificial Intelligence Solutions",
                image: aiImg,
                description:
                    "Intelligent AI systems, automation, computer vision, natural language processing, and data-driven decision platforms.",
                detailedNote:
                    "Generative AI, Large Language Models (LLMs), AI Agents, Retrieval-Augmented Generation (RAG), Computer Vision, Deep Learning, Reinforcement Learning, MLOps, Vector Databases, LangChain, LangGraph, MCP, and AI Workflow Automation."
            },

            {
                title: "Robotics Development",
                image: robotImg,
                description:
                    "End-to-end robotics research, intelligent automation, embedded systems, autonomous platforms, and smart robotic solutions.",
                detailedNote:
                    "Embodied AI, Vision-Language-Action (VLA) Models, World Models, Representation Learning, ROS 2, SLAM, Motion Planning, Autonomous Navigation, Edge AI, Digital Twins, Sensor Fusion, Embedded AI, and Human-Robot Interaction."
            },

            {
                title: "Intellectual Property Services",
                image: iprImg,
                description:
                    "Patent drafting, filing support, prior art research, copyright, design registration, and innovation documentation.",
                detailedNote:
                    "Patentability Assessment, Prior Art Analysis, Patent Drafting, FER Response Support, Technology Landscaping, Design Registration, Copyright Registration, Innovation Strategy, and IP Portfolio Development."
            },

            {
                title: "Academic Research Collaboration",
                image: ARC,
                description:
                    "Collaborating with universities, faculty members, and student teams to transform research ideas into innovative technologies, functional prototypes, and intellectual property.",
                detailedNote:
                    "Industry-Academia Collaboration, Sponsored Research Projects, Prototype Development, Research Project Guidance, Technology Validation, Product Innovation, Patent-Oriented Development, Publication Support, and Research & Development (R&D) Management."
            },

            {
                title: "Training, Workshops & Internships",
                image: trainingImg,
                description:
                    "Industry-oriented learning programs designed to develop practical technical skills and innovation capabilities.",
                detailedNote:
                    "Artificial Intelligence, Machine Learning, Robotics, Embedded Systems, Software Development, Patent Writing, Research Methodology, Product Development, Industry Workshops, Faculty Development Programs, and Corporate Technical Training."
            }
        ]
    },

    patentProcess: {
        heading: 'End-to-End Patent Support',
        subheading:
            'Whether you have an idea, abstract, research paper, PPT, or working prototype, we guide you through every stage of the patent journey.',

        note:
            'No prior patent knowledge is required. Whether you are a student, researcher, startup, or organization, we guide you through every stage of the patent process.',

        steps: [
            {
                title: 'Idea Evaluation',
                description:
                    'Share your idea, abstract, PPT, research paper, or prototype. We assess its novelty and patentability.',
            },
            {
                title: 'Prior Art Search',
                description:
                    'We conduct a comprehensive patent search to identify existing technologies and evaluate the uniqueness of your innovation.',
            },
            {
                title: 'Patent Drafting',
                description:
                    'Our experts prepare a professionally drafted patent specification with detailed descriptions, drawings, and strong claims.',
            },
            {
                title: 'Patent Filing',
                description:
                    'We file your patent application with the appropriate patent office, ensuring complete documentation and compliance.',
            },
            {
                title: 'Publication & FER Support',
                description:
                    'We monitor publication, handle examination procedures, and prepare professional responses to First Examination Reports (FER).',
            },
            {
                title: 'Patent Grant',
                description:
                    'We continue supporting your application until the patent is successfully granted.',
            },
        ],
    },
    highlight:
        'Have only an idea, abstract, PPT, research paper, or prototype? That is enough to get started. We will help transform your innovation into a professionally drafted patent application.',

    projects: {
        badge: "Innovation Portfolio",

        heading: "Our Projects",

        subheading:
            "Explore our software, AI, robotics, embedded systems, research, and intellectual property projects.",

        viewAll: "View All Projects",

        searchPlaceholder: "Search projects...",

        categories: [
            "All",
            "Artificial Intelligence",
            "Robotics",
            "Healthcare",
            "Enterprise Software",
            "IoT",
            "Mobile",
            "Data Analytics"
        ],
    },
    
    achievements: {
        heading: "Milestones & Achievements",

        subheading:
            "Delivering innovation, intellectual property, and technology solutions through research-driven expertise.",

        metrics: [
            {
                icon: "Award",
                value: "150+",
                label: "Patent Publications",
                description:
                    "Supported researchers, startups, universities, and innovators with patent drafting, filing, and publication services.",
            },
            {
                icon: "BookOpen",
                value: "10+",
                label: "Copyright Registrations",
                description:
                    "Successfully assisted clients in protecting software, research, and creative works through copyright registration.",
            },
            {
                icon: "Stamp",
                value: "20+",
                label: "Design Registrations",
                description:
                    "Provided design registration support to safeguard innovative product designs and industrial aesthetics.",
            },
            {
                icon: "Cpu",
                value: "10+",
                label: "Technology Solutions Delivered",
                description:
                    "Delivered solutions across Artificial Intelligence, Robotics, IoT, Software Development, Mobile Applications, Web Applications, and Embedded Systems.",
            },
        ],
    },

    about: {
        heading: "About Neuzura Technologies",

        subheading:
            "Neuzura Technologies is a technology and innovation company delivering Software Development, Artificial Intelligence, Robotics, Intellectual Property Services, Research Consulting, and Professional Training. We help individuals and organizations transform innovative ideas into practical technology solutions and protected intellectual property.",

        approach: {
            heading: "What We Do",

            points: [
                {
                    icon: "Zap",
                    title: "Technology Development",
                    body:
                        "We design and develop software, artificial intelligence, robotics, embedded systems, automation, and intelligent digital solutions for real-world applications.",
                },

                {
                    icon: "Cpu",
                    title: "Intellectual Property Services",
                    body:
                        "We support innovators through patent drafting, patent filing, prior art searches, design registration, copyright registration, and innovation documentation.",
                },

                {
                    icon: "Users",
                    title: "Research & Innovation Consulting",
                    body:
                        "We collaborate with researchers, startups, educational institutions, MSMEs, and organizations to transform innovative ideas into practical products and scalable solutions.",
                },
            ],
        },

        

        vision: {
            heading: "Vision",

            body:
                "To become a globally trusted technology and innovation company that empowers individuals, organizations, researchers, and businesses through intelligent technology, engineering excellence, and protected innovation.",
        },

        mission: {
            heading: "Mission",

            body:
                "To bridge research, technology, and intellectual property by delivering practical software, AI, robotics, consulting, and innovation services that create long-term value for society.",
        },
    },

    contact: {
        heading: 'Get in Touch',
        subheading:
            'Whether you need IP strategy, R&D collaboration, or technical training, our team is ready to assist.',
        whatsapp: {
            number: '919360090778', // Enter your full number with country code (e.g., 91 for India), no plus or spaces
            defaultMessage: 'Hi Neuzura Technologies, I would like to know more about your services.',
        },
        tabs: {
            consultation: 'Book a Consultation',
            workshop: 'Workshop Enquiry',
        },
        consultation: {
            heading: 'Request a Consultation',
            description:
                'Speak with our specialists about your IP, AI, or Robotics requirements. We typically respond within one business day.',
            serviceOptions: [
                'Patent Support',
                'AI / Machine Learning R&D',
                'Robotics R&D',
                'Product Innovation Consulting',
                'Workshops & Training',
                'Other Technical Services',
            ],
            fields: {
                name: 'Full Name',
                email: 'Email Address',
                organization: 'Organization / Institution',
                serviceInterest: 'Service Interest',
                message: 'Tell us about your project or requirements',
            },
            submitLabel: 'Send Consultation Request',
            successTitle: 'Request Received',
            successMessage:
                'Thank you for reaching out. A Neuzura specialist will contact you within one business day.',
        },
        workshop: {
            heading: 'Workshop Registration & Enquiry',
            description:
                'Enroll your team, students, or institution in our AI, ML, or Robotics training programmes. We offer flexible formats including full-day intensives, multi-week cohorts, and corporate customized sessions.',
            serviceOptions: [
                'Patent & Intellectual Property Services',
                'Artificial Intelligence & Machine Learning',
                'Robotics Research & Development',
                'Research & Academic Consultancy',
                'Professional Training & Workshops',
                'Startup & Technology Consulting',
                'Web & Mobile Application Development',
                'Other',
            ],
            fields: {
                name: 'Full Name',
                email: 'Email Address',
                organization: 'Organization / Institution',
                serviceInterest: 'Workshop Programme',
                message: 'Describe your team size, goals, or preferred schedule',
            },
            submitLabel: 'Submit Workshop Enquiry',
            successTitle: 'Enquiry Received',
            successMessage:
                'Thank you for your workshop interest. Our training team will reach out within one business day to discuss your requirements.',
        },
    },

    footer: {
        founderName: 'Deepika Govind',
        founderTitle: 'Founder & Director',

        quickLinks: 'Quick Links',
        contactHeading: 'Contact',

        email: 'info@neuzura.com',

        phone: '+91 9360090778',

        location: 'Chennai, Tamil Nadu, India',

        social: {
            github: 'https://github.com/Neuzura-Technologies',

            linkedin: 'https://www.linkedin.com/company/neuzura-technologies',

            crunchbase:
                'https://www.crunchbase.com/organization/neuzura-technologies',

            maps:
                'https://maps.app.goo.gl/T5iiK9eng9Kz5obF9',
        },

        copyright: `© ${new Date().getFullYear()} Neuzura Technologies. All rights reserved.`,
    },
};