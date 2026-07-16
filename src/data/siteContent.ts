import iprImg from "../assets/images/ipr.png";
import aiImg from "../assets/images/robot.png";
import robotImg from "../assets/images/aiml.png";
import consultingImg from "../assets/images/innovation.jpg";
import trainingImg from "../assets/images/prof.png";

export const  SITE_CONTENT = {
    company: {
        name: 'Neuzura Technologies',
        tagline: 'Innovating Through Research. Protecting Ideas. Building the Future.',
        subheadline:
            'We bridge the gap between advanced engineering and strategic intellectual property protection — delivering AI, Robotics, and IP solutions that transform research into lasting competitive advantage.',
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
        badge: "Core Services",

        heading: "Our Expertise & Solutions",

        subheading:
            "Comprehensive solutions tailored to your research and innovation needs.",

        items: [
            {
                title: 'Intellectual Property Strategy',
                image: iprImg, // Fixed: Now correctly uses the imported variable
                description: 'End-to-end patent drafting, filing, and publication support.',
                detailedNote: 'We craft robust IP portfolios that safeguard your innovations and maximize commercial value in competitive markets.'
            },
            {
                title: 'AI & Machine Learning Solutions',
                image: robotImg,
                description: 'Custom algorithm design, intelligent data pipelines, and production-ready ML models tailored to your domain.',
                detailedNote: 'From proof-of-concept to enterprise deployment.'
            },
            {
                title: 'Robotics Research & Development',
                image: aiImg,
                description: 'Full-cycle robotics engineering — from conceptual system design and multi-physics simulation.',
                detailedNote: '...to physical prototyping and field validation for industrial and research applications.'
            },
            {
                title: 'Product Innovation Consulting',
                image: consultingImg,
                description: 'We translate cutting-edge research into commercially scalable products.',
                detailedNote: 'Our consultants guide technical founders and enterprises from technology readiness to market launch.'
            },
            {
                title: 'Professional Skill Development',
                image: trainingImg,
                description: 'Immersive workshops in AI, Machine Learning, and Robotics for students, researchers, and enterprise teams.',
                detailedNote: 'Structured curricula designed for real-world application.'
            }
        ],
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

    insights: {
        badge: "Knowledge Hub",

        heading: "Latest Insights",

        subheading:
            "Research articles, technology trends, intellectual property guidance, AI, robotics, and innovation insights from Neuzura Technologies.",

        viewAll: "View All Articles",
    },
    
    achievements: {
        heading: 'Milestones & Achievements',
        subheading: 'A record of impact built through rigorous research and strategic execution.',
        metrics: [
            {
                icon: 'Award',
                value: '150+',
                label: 'Patent Publications',
                description: 'Patent drafting, filing, and publication support delivered for researchers, institutions, and innovators.',
            },
            {
                icon: 'BookOpen',
                value: '10+',
                label: 'Copyright Registrations',
                description: 'Creative and technical works successfully protected through copyright registration.',
            },
            {
                icon: 'Stamp',
                value: '20+',
                label: 'Registered Designs',
                description: 'Industrial design registrations secured to protect innovative product designs.',
            },
            {
                icon: 'Cpu',
                value: '10+',
                label: 'Technical Projects',
                description:
                    'Successfully delivered AI, Robotics, IoT, Web Applications, Mobile Applications, and Embedded Solutions across academic and industry projects.',
            },
        ],
    },

    about: {
        heading: 'About Neuzura Technologies',
        subheading:
            'Neuzura Technologies is an innovation-driven company specializing in Artificial Intelligence, Robotics, Intellectual Property, and Technology Consulting. We help researchers, educational institutions, startups, MSMEs, and businesses transform innovative ideas into protected intellectual property and practical technology solutions.',
        approach: {
            heading: 'What We Do',
            points: [
                {
                    icon: 'Zap',
                    title: 'Research & Innovation',
                    body:
                        'We develop innovative solutions in Artificial Intelligence, Robotics, Embedded Systems, and emerging technologies to solve real-world engineering challenges.',
                },

                {
                    icon: 'Cpu',
                    title: 'Intellectual Property Solutions',
                    body:
                        'Our team provides patent drafting, prior art search, filing support, copyright registration, and design registration to help protect valuable innovations.',
                },

                {
                    icon: 'Users',
                    title: 'Technology Partnership',
                    body:
                        'From research guidance and product development to technical consulting and professional training, we work closely with clients throughout their innovation journey.',
                },
            ],
        },
        vision: {
            heading: 'Vision',
            body:
                'To empower innovators, researchers, startups, and institutions by delivering technology solutions that create lasting impact and sustainable growth.',
        },

        mission: {
            heading: 'Mission',
            body:
                'To bridge research, engineering, and intellectual property through practical innovation, enabling ideas to become successful products, protected assets, and meaningful solutions.',
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