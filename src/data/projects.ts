import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
    {
        id: "nos",
        slug: "neuzura-operating-system",

        title: "Neuzura Operating System (NOS)",
        subtitle: "Enterprise AI Platform",

        category: "Enterprise Software",

        status: "In Progress",

        featured: true,

        thumbnail: "/projects/logo.png",

        shortDescription: "An AI-powered enterprise operating system designed to unify customer management, knowledge, intelligent workflows, automation, and business operations into a single platform.",

        fullDescription: "Neuzura Operating System (NOS) is the flagship enterprise platform being developed by Neuzura Technologies. It combines CRM, ERP, knowledge management, artificial intelligence, workflow automation, analytics, and personalized client guidance into a unified operating system for organizations.",

        technologies: [
            "React",
            "TypeScript",
            "Artificial Intelligence",
            "Enterprise Software",
            "CRM",
            "ERP"
        ],

        tags: [
            "Enterprise",
            "AI",
            "CRM",
            "ERP",
            "Automation"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2026,
       
    },

    {
        id: "grain-insect-detection",
        slug: "open-vocabulary-ai-pest-detection",

        title: "Open-Vocabulary AI Pest Detection for Industrial Grain Storage",

        subtitle: "YOLO-World • SAHI • Zero-Shot Learning",

        category: "Artificial Intelligence",

        status: "Completed",

        featured: true,

        thumbnail: "/projects/SAHI.png",

        shortDescription:
            "Developed an industrial-scale AI vision system for high-resolution pest monitoring using SAHI and YOLO-World with open-vocabulary zero-shot learning.",

        fullDescription:
            "Designed an advanced computer vision framework that integrates Slicing-Aided Hyper Inference (SAHI) with YOLO-World to detect insect species from ultra-high-resolution industrial sticky trap images. The system enables open-vocabulary zero-shot detection, preserves fine morphological features through tiled inference, and provides intelligent spatial auditing for industrial grain storage biosecurity.",

        technologies: [
            "YOLO-World",
            "SAHI",
            "Zero-Shot Learning",
            "Open Vocabulary Detection",
            "Computer Vision",
            "Python",
            "Deep Learning"
        ],

        tags: [
            "Computer Vision",
            "Agriculture",
            "Industrial AI",
            "YOLO",
            "Research"
        ],

       github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2025,
    },

    {
        id: "autonomous-mobile-manipulator",

        slug: "autonomous-pick-and-place-mobile-manipulator",

        title: "Autonomous Pick-and-Place Mobile Manipulator",

        subtitle: "ROS-Based Mobile Manipulation with Speech Recognition",

        category: "Robotics",

        status: "Completed",

        featured: true,

        thumbnail: "/projects/tiago_robot.jpg",

        shortDescription:
            "Developed an autonomous mobile manipulation robot capable of speech-controlled object retrieval, intelligent navigation, object detection, and autonomous pick-and-place operations using ROS and Gazebo.",

        fullDescription:
            "Designed and simulated an autonomous mobile manipulator using the Robot Operating System (ROS) and Gazebo simulation environment. The robot combines autonomous navigation, speech recognition, robotic manipulation, and intelligent object handling to execute voice-controlled pick-and-place tasks in structured indoor environments. The project integrates mobile base navigation, manipulator motion planning, object localization, grasp execution, obstacle avoidance, and human–robot interaction, demonstrating a complete autonomous robotic workflow suitable for logistics, smart manufacturing, healthcare, research, and service robotics applications.",

        technologies: [
            "ROS",
            "Gazebo",
            "MoveIt",
            "Speech Recognition",
            "Mobile Manipulation",
            "Autonomous Navigation",
            "Python",
            "OpenCV"
        ],

        tags: [
            "Robotics",
            "Mobile Manipulation",
            "Speech Recognition",
            "Autonomous Navigation",
            "ROS",
            "Human-Robot Interaction"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2024,
    },

    {
        id: "smart-waste-classification",

        slug: "ai-smart-waste-classification",

        title: "AI Smart Waste Classification System",

        subtitle: "VGG16 • Transfer Learning • Comparative Machine Learning",

        category: "Artificial Intelligence",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/logo.png",

        shortDescription:
            "An intelligent waste classification system developed using deep learning and comparative machine learning models for automated waste segregation.",

        fullDescription:
            "Developed a smart waste classification system capable of identifying multiple waste categories using transfer learning with VGG16. The project compared multiple hybrid architectures including VGG16 + Softmax, VGG16 + SVM, VGG16 + Random Forest, MobileNet + Softmax, MobileNet + SVM, and MobileNet + Random Forest to identify the most effective model for real-time waste classification.",

        technologies: [
            "VGG16",
            "MobileNet",
            "TensorFlow",
            "Python",
            "Softmax",
            "Random Forest",
            "SVM"
        ],

        tags: [
            "Artificial Intelligence",
            "Computer Vision",
            "Deep Learning",
            "Sustainability"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2025,
    },

    { 
        id: "enterprise-management", 
        slug: "enterprise-management-portal", 
        title: "Enterprise Management Portal", 
        subtitle: "Admin • Manager • Member Dashboard", 
        category: "Enterprise Software", 
        status: "Completed", 
        featured: false,
        thumbnail: "/projects/management.png", 
        shortDescription: "Designed and developed a complete enterprise web platform with role-based access control and management dashboards.", 
        fullDescription: "Built a complete enterprise web application from scratch, including UI/UX design, authentication, and separate Admin, Manager, and Member dashboards. The system demonstrates scalable enterprise software architecture and user management.", 
        technologies: [ "JavaScript", "HTML", "CSS", "Firebase" ], 
        tags: [ "Enterprise", "Dashboard", "Web Development" ], 
        github: "https://github.com/Neuzura-Technologies/neuzura-website", 
        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website", 
        year: 2023, 
    },

    {
        id: "robotic-arm-control",

        slug: "real-time-hand-gesture-robotic-arm",

        title: "Real-Time Hand Gesture Controlled Robotic Arm",

        subtitle: "OpenManipulator-X • Ultraleap • Human Robot Interaction",

        category: "Robotics",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/openX.jpeg",

        shortDescription:
            "Developed a real-time robotic arm control system using natural hand gestures captured through Ultraleap depth sensing technology.",

        fullDescription:
            "Built an intuitive human-robot interaction system capable of controlling an OpenManipulator-X robotic arm using natural hand gestures. The system integrates Ultraleap depth sensing with real-time robotic motion control to achieve contactless robotic manipulation.",

        technologies: [
            "OpenManipulator-X",
            "Ultraleap",
            "Robotics",
            "Computer Vision",
            "Python"
        ],

        tags: [
            "Robotics",
            "Gesture Recognition",
            "Human Robot Interaction"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2024,
    },

    {
        id: "eye-controlled-display",

        slug: "eye-controlled-assistive-display",

        title: "Eye-Controlled Assistive Display for Paralyzed Individuals",

        subtitle: "Assistive Technology • Human Computer Interaction",

        category: "Healthcare",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/logo.png",

        shortDescription:
            "Developed an eye-controlled communication interface to assist paralyzed individuals using gaze-based interaction.",

        fullDescription:
            "Designed an assistive technology prototype that enables individuals with severe physical disabilities to communicate and interact with digital systems using eye movements. The project focuses on accessibility, independence, and human-centered healthcare technology.",

        technologies: [
            "Computer Vision",
            "Eye Tracking",
            "Python",
            "OpenCV",
            "Human Computer Interaction"
        ],

        tags: [
            "Healthcare",
            "Accessibility",
            "Assistive Technology"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2024,
    },

    {
        id: "smart-fisherman",

        slug: "smart-fisherman-maritime-safety",

        title: "Smart Fisherman Maritime Safety System",

        subtitle: "IoT • GPS • Mobile Application",

        category: "IoT",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/vessel.jpg",

        shortDescription:
            "An IoT-enabled maritime safety platform that alerts fishermen before crossing international sea boundaries.",

        fullDescription:
            "Developed a GPS-enabled mobile and IoT solution for monitoring fishing vessel locations and generating real-time alerts when approaching maritime boundaries. The system improves fisherman safety through live tracking, Firebase connectivity, and intelligent notifications.",

        technologies: [
            "Firebase",
            "Android",
            "GPS",
            "IoT",
            "Google Maps"
        ],

        tags: [
            "IoT",
            "Safety",
            "Mobile",
            "GPS"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2024,
    },

    {
        id: "tamil-valam",

        slug: "tamil-valam-mobile-app",

        title: "Tamil Valam Mobile Application",

        subtitle: "Award-Winning Government Mobile Application",

        category: "Mobile",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/Thamizh.png",

        shortDescription:
            "Developed a Tamil language mobile application presented during Niral Thiruvizha and recognized with a Tamil Nadu government award.",

        fullDescription:
            "Designed and developed the Tamil Valam mobile application as part of an academic innovation initiative showcased during Niral Thiruvizha. The application received recognition and a ₹10,000 award from the Government of Tamil Nadu.",

        technologies: [
            "Android",
            "Java",
            "Firebase"
        ],

        tags: [
            "Mobile",
            "Android",
            "Award"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2023,
    },

    {
        id: "low-light-object-detection",

        slug: "low-light-object-detection",

        title: "Low-Light Object Detection System",

        subtitle: "Computer Vision • Deep Learning • Low-Light AI",

        category: "Artificial Intelligence",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/darken.png",

        shortDescription:
            "Developed a deep learning–based object detection system capable of recognizing real-world objects in challenging low-light environments using benchmark nighttime datasets.",

        fullDescription:
            "Designed and implemented an intelligent low-light object detection system using deep learning and computer vision techniques. The project focused on improving object recognition under poor illumination by training and evaluating models on benchmark low-light datasets, including ExDark and ARID. The system successfully detected objects such as bicycles, pedestrians, vehicles, and other everyday objects in challenging nighttime environments. Image preprocessing, model inference, and performance evaluation were integrated to enhance detection robustness for applications in intelligent surveillance, autonomous robotics, smart transportation, and outdoor monitoring.",

        technologies: [
            "Python",
            "OpenCV",
            "Deep Learning",
            "Computer Vision"
        ],

        tags: [
            "Artificial Intelligence",
            "Computer Vision",
            "Object Detection",
            "Low-Light Vision",
            "ExDark",
            "ARID"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2023,
    },

    {
        id: "business-intelligence",

        slug: "business-intelligence-dashboard",

        title: "Business Intelligence & Predictive Analytics Dashboard",

        subtitle: "Power BI • Regression Analysis",

        category: "Data Analytics",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/power.png",

        shortDescription:
            "Developed interactive business intelligence dashboards with predictive analytics for enterprise decision-making.",

        fullDescription:
            "Created analytical dashboards using Power BI for business data visualization and predictive regression analysis. The project transformed raw enterprise datasets into actionable insights supporting strategic business decisions.",

        technologies: [
            "Power BI",
            "Regression Analysis",
            "Data Analytics",
            "Business Intelligence"
        ],

        tags: [
            "Power BI",
            "Analytics",
            "Business Intelligence"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        
        year: 2024,
    },

    {
        id: "gesture-drone",

        slug: "hand-gesture-drone-control",

        title: "Hand Gesture Controlled Drone Simulation",

        subtitle: "Computer Vision • Human Drone Interaction",

        category: "Robotics",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/logo.png",

        shortDescription:
            "Designed a gesture recognition system for intuitive drone navigation using computer vision.",

        fullDescription:
            "Developed a real-time gesture-controlled drone simulation that interprets natural hand movements as flight commands. The project demonstrates intuitive human-drone interaction using computer vision techniques without traditional controllers.",

        technologies: [
            "Computer Vision",
            "Python",
            "OpenCV",
            "Gesture Recognition"
        ],

        tags: [
            "Drone",
            "Robotics",
            "Computer Vision"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2024,
    },
    
];