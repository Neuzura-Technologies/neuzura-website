import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
//1
    {
        id: "nos",
        slug: "neuzura-operating-system",

        title: "Neuzura Operating System (NOS)",
        subtitle: "Enterprise Multimodal AI Orchestration Layer",

        category: "Enterprise Software",

        status: "In Progress",

        featured: true,

        thumbnail: "/projects/nos.png",

        shortDescription: "A cognitive enterprise engine engineered to unify cross-functional data schemas, decentralized knowledge assets, autonomous workflow agentic architectures, and predictive operational analytics into a centralized infrastructure.",

        fullDescription: "Neuzura Operating System (NOS) serves as the flagship enterprise cognitive layer engineered by Neuzura Technologies. By synthesizing intelligent CRM architectures, real-time ERP data streams, semantic knowledge retrieval systems, multi-agent task automation, and predictive customer telemetry, NOS acts as an adaptive enterprise operating layer that optimizes organizational workflows and automates high-level strategic decision paths.",

        technologies: [
            "React",
            "TypeScript",
            "Artificial Intelligence",
            "Enterprise Architecture",
            "Intelligent CRM Systems",
            "Distributed ERP Systems"
        ],

        tags: [
            "Enterprise Architecture",
            "Agentic AI",
            "Cognitive CRM",
            "Distributed ERP",
            "Hyper-Automation"
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

        subtitle: "ROS-Driven Kinematic Mobile Manipulation via Semantic Natural Language Interfaces",

        category: "Robotics",

        status: "Completed",

        featured: true,

        thumbnail: "/projects/tiago_robot.jpg",

        shortDescription:
            "Engineered an autonomous mobile manipulation framework capable of intent-driven voice command decoding, simultaneous localization and mapping (SLAM), zero-shot object localization, and closed-loop robotic manipulation using ROS architectures.",

        fullDescription:
            "Designed and validated an autonomous mobile manipulator utilizing the Robot Operating System (ROS) ecosystem within simulated Gazebo physics. The system architecture integrates spatial SLAM navigation pipelines, automatic speech recognition (ASR) semantic intent decoding, sampling-based manipulator motion planning via MoveIt, visual servoing via OpenCV, and dynamic collision avoidance algorithms. This configuration forms a cohesive robotic system applicable to high-throughput logistics, flexible smart manufacturing cells, clinical environments, and advanced service robotics.",

        technologies: [
            "ROS (Robot Operating System)",
            "Gazebo Physics Simulator",
            "MoveIt Motion Planning Framework",
            "Automatic Speech Recognition (ASR)",
            "Mobile Manipulation Pipelines",
            "Simultaneous Localization and Mapping (SLAM)",
            "Python",
            "OpenCV Architecture"
        ],

        tags: [
            "Robotics Engineering",
            "Kinematic Manipulation",
            "Natural Language Interfaces",
            "Autonomous Navigation",
            "ROS Ecosystem",
            "Human-Robot Interaction (HRI)"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2024,
    },
//3
    {
        id: "robotic-arm-control",

        slug: "real-time-hand-gesture-robotic-arm",

        title: "Real-Time Hand Gesture Controlled Robotic Arm",

        subtitle: "OpenManipulator-X • Ultraleap Depth Sensing • Spatial Human-Robot Interaction",

        category: "Robotics",

        status: "Completed",

        featured: true,

        thumbnail: "/projects/openX.jpeg",

        shortDescription:
            "Developed a low-latency, contactless robotic control pipeline utilizing spatial hand tracking and high-fidelity depth telemetry for intuitive degree-of-freedom mapping.",

        fullDescription:
            "Constructed a high-fidelity human-robot interaction (HRI) system enabling fine-grained control of an OpenManipulator-X robotic arm via markerless spatial tracking. The architecture ingests raw depth frames from an Ultraleap sensor, translates skeletal hand tracking data into joint-space trajectories, and transmits real-time kinematic commands to execute fluid, contactless payload manipulation.",

        technologies: [
            "OpenManipulator-X Hardware",
            "Ultraleap Spatial Tracking SDK",
            "Kinematic Control",
            "Computer Vision Pipelines",
            "Python"
        ],

        tags: [
            "Robotics Engineering",
            "Spatial Teleoperation",
            "Human-Robot Interaction (HRI)"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2024,
    },
//4
    {
        id: "eye-controlled-display",

        slug: "eye-controlled-assistive-display",

        title: "Eye-Controlled Assistive Display for Paralyzed Individuals",

        subtitle: "Computer Vision • Gaze Estimation Telemetry • Assistive Bio-Interfaces",

        category: "Healthcare",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/eyes.jpeg",

        shortDescription:
            "Engineered a computer vision–based assistive interface using facial landmark extraction and gaze vector tracking to facilitate hands-free human-computer interaction.",

        fullDescription:
            "Designed and implemented a real-time assistive display interface engineered for users with severe motor impairments. The software system processes high-resolution video streams to execute facial alignment, extraction of localized eye regions, continuous gaze vector estimation, and intentional blink detection. By translating biological ocular metrics into deterministic operating system cursor operations, the project delivers a low-latency, non-invasive digital accessibility platform powered by edge computer vision.",

        technologies: [
            "Python",
            "OpenCV Framework",
            "MediaPipe Perceptual Pipelines",
            "Computer Vision Processing",
            "Gaze Telemetry & Eye Tracking",
            "Tkinter GUI Architecture"
        ],

        tags: [
            "Healthcare AI",
            "Assistive Biocomputing",
            "Computer Vision",
            "Gaze Telemetry",
            "Digital Accessibility",
            "Human-Computer Interaction (HCI)"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2024,
    },
//5
    {
        id: "multimodal-fall-detection",

        slug: "explainable-multimodal-fall-detection",

        title: "Explainable Multimodal Fall Detection via Audio–Kinematic Fusion",

        subtitle: "Audio–Kinematic Sensor Fusion • Explainable AI (XAI) • Telehealth Edge Systems",

        category: "Healthcare",

        status: "In Progress",

        featured: false,

        thumbnail: "/projects/fall.png",

        shortDescription:
            "A high-reliability telehealth framework combining audio acoustic analysis and IMU kinematic streams via an explainable neural network architecture for intelligent anomaly detection.",

        fullDescription:
            "Developing an advanced clinical-grade monitoring framework optimized for human fall detection via multimodal deep learning. The architecture processes heterogeneous inputs—fusing spatial-temporal kinematic vectors from wearable IMU sensors with ambient acoustic signatures—to maximize diagnostic specificity in high-noise environments. To meet regulatory compliance, Explainable AI (XAI) feature attribution maps (such as SHAP or Integrated Gradients) clarify the model's predictive pathways, while an adaptive threat response scoring module calculates real-time incident severity metrics to optimize emergency dispatch protocols.",

        technologies: [
            "Python",
            "Deep Learning Models",
            "Multimodal Data Fusion",
            "Explainable AI (XAI) Architectures",
            "Supervised Machine Learning",
            "Sensor Fusion Paradigms",
            "Acoustic Digital Signal Processing (DSP)"
        ],

        tags: [
            "Healthcare AI Systems",
            "Biomechanical Anomaly Detection",
            "Explainable AI",
            "Human Activity Recognition (HAR)",
            "Inertial Sensor Arrays",
            "Acoustic Telemetry",
            "Clinical Patient Monitoring"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2026,
    },
//6
    {
        id: "tamil-valam",

        slug: "tamil-valam-mobile-app",

        title: "Tamil Valam Mobile Application",

        subtitle: "State-Recognized Regional Content Delivery Architecture",

        category: "Mobile",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/Thamizh.png",

        shortDescription:
            "Engineered an award-winning regional language localization mobile platform presented at Niral Thiruvizha and officially commended by the Government of Tamil Nadu.",

        fullDescription:
            "Conceptualized and developed the 'Tamil Valam' mobile application as part of a competitive software engineering incubator program at Niral Thiruvizha. Leveraging cloud-based document schemas and performant rendering layers, the architecture achieved a state government innovation grant of ₹10,000 for exceptional UI/UX localization and content optimization infrastructure.",

        technologies: [
            "Android SDK",
            "Java Architecture",
            "Firebase Backend-as-a-Service (BaaS)"
        ],

        tags: [
            "Mobile Architecture",
            "Native Android",
            "Government Innovation Award"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2023,
    },
//7
    {
        id: "grain-insect-detection",
        slug: "open-vocabulary-ai-pest-detection",

        title: "Open-Vocabulary AI Pest Detection for Industrial Grain Storage",

        subtitle: "YOLO-World Open-Vocabulary Inference • SAHI Tiling Framework • Zero-Shot Object Recognition",

        category: "Artificial Intelligence",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/SAHI.png",

        shortDescription:
            "Developed an industrial-grade computer vision pipeline leveraging open-vocabulary zero-shot generalization and slicing-aided sub-image inference for high-resolution target acquisition.",

        fullDescription:
            "Designed and implemented an automated biosecurity inspection framework that marries Slicing-Aided Hyper Inference (SAHI) with open-vocabulary YOLO-World deep neural networks. Optimized for gigapixel industrial insect trap imaging, the pipeline applies sub-window sliding inference to preserve fine-grained morphological structures. This architecture bypasses static category limitations through zero-shot textual embedding extraction, providing adaptive spatial auditing metrics for large-scale grain storage infrastructure.",

        technologies: [
            "YOLO-World Open Vocabulary Model",
            "Slicing-Aided Hyper Inference (SAHI)",
            "Zero-Shot Generalization",
            "Open Vocabulary Object Detection",
            "Advanced Computer Vision",
            "Python",
            "Deep Neural Networks"
        ],

        tags: [
            "Computer Vision Architecture",
            "AgTech Infrastructure",
            "Industrial AI Systems",
            "YOLO Object Detection",
            "Applied Machine Learning Research"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2025,
    },
//8
    {
        id: "smart-waste-classification",

        slug: "ai-smart-waste-classification",

        title: "AI Smart Waste Classification System",

        subtitle: "VGG16 Architecture • Deep Transfer Learning • Comparative Classifier Auditing",

        category: "Artificial Intelligence",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/waste.jpeg",

        shortDescription:
            "An intelligent resource sorting framework utilizing deep feature extraction and comparative machine learning architectures for high-throughput material segregation.",

        fullDescription:
            "Engineered a computer vision–driven classification engine to automate multi-class municipal solid waste segregation. The system utilizes a deep convolutional backbone (VGG16 and MobileNet) as a feature extractor, running an extensive benchmark suite across downstream classifiers, including Softmax dense networks, Support Vector Machines (SVM) with radial basis kernels, and Random Forest ensembles. This implementation isolated the optimal architecture to fulfill tight latency constraints for edge sorting devices.",

        technologies: [
            "VGG16 Convolutional Backbone",
            "MobileNet Topologies",
            "TensorFlow Engine",
            "Python Pipelines",
            "Softmax Decision Layers",
            "Random Forest Classifiers",
            "Support Vector Machines (SVM)"
        ],

        tags: [
            "Artificial Intelligence Systems",
            "Computer Vision Paradigms",
            "Deep Transfer Learning",
            "Ecological Sustainability Infrastructure"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2025,
    },
//9
    {
        id: "atrs-multimodal-detection",

        slug: "atrs-driven-multimodal-detection",

        title: "ATRS-Driven Multimodal Detection with Real-Time Voice Interaction and Intelligent Nurse Alerting",

        subtitle: "Clinical Healthcare AI • Speech Intelligence Subsystems • Smart Patient Telemetry Platforms",

        category: "Healthcare",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/nurse.png",

        shortDescription:
            "Engineered a dynamic, multimodal clinical intelligence platform combining sensory telemetry, predictive risk scoring, conversational agents, and automated dispatch routing.",

        fullDescription:
            "Designed and implemented an enterprise healthcare telemetry and alerting infrastructure engineered to continuously assess critical patient indicators via heterogeneous sensor inputs. The system computes a dynamic Adaptive Threat Response Score (ATRS) to prioritize patient risk in real time, while integrating an interactive natural language interface for hands-free patient feedback loops. Upon diagnosing acute biometric deviations, the algorithmic dispatch layer automatically registers incident priority levels, flags on-duty clinical staff devices, and transmits structured context payloads to optimize turnaround times in critical care workflows.",

        technologies: [
            "Python Data Engineering",
            "Artificial Intelligence Topologies",
            "Supervised Machine Learning",
            "Automated Speech Recognition (ASR)",
            "Multimodal AI Models",
            "IoT Architecture",
            "Real-Time Stream Processing"
        ],

        tags: [
            "Healthcare AI Infrastructure",
            "Patient Telemetry Analytics",
            "Conversational Bio-Interfaces",
            "Smart Hospital Automation",
            "Clinical Alert Orchestration",
            "Multimodal Intelligence Layers"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2025,
    },
//10
    {
        id: "low-light-object-detection",

        slug: "low-light-object-detection",

        title: "Low-Light Object Detection System",

        subtitle: "Computer Vision • Deep Learning Enhancements • Illumination-Invariant AI Models",

        category: "Artificial Intelligence",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/darken.png",

        shortDescription:
            "Developed an illumination-invariant deep object detection framework optimized for highly degraded, low-light urban and outdoor structural operational profiles.",

        fullDescription:
            "Designed and evaluated a robust low-light computer vision architecture designed to mitigate spatial information loss caused by poor lux conditions. By training neural feature extractors on low-light benchmark datasets such as ExDark and ARID, the pipeline achieves robust structural boundary classification for targets including pedestrians, static objects, and transport units. The software integrates high-speed gamma and contrast correction heuristics, deep model inference optimization, and validation protocols tailored for edge deployments in smart traffic surveillance and autonomous vehicular perception.",

        technologies: [
            "Python Systems",
            "OpenCV Vision Library",
            "Deep Learning Frameworks",
            "Computer Vision Processing"
        ],

        tags: [
            "Artificial Intelligence Systems",
            "Computer Vision Perception",
            "Robust Object Detection",
            "Low-Light Performance Tuning",
            "ExDark Benchmark Evaluation",
            "ARID Dataset Auditing"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

        year: 2023,
    },
//11   
    {
    id: "bldc-motor-control",

    slug: "ann-based-back-emf-prediction-sensorless-bldc-control",

    title: "ANN-Based Back-EMF Prediction for Sensorless BLDC Motor Velocity Control Using Zero-Cross Detection",

    subtitle: "Artificial Neural Networks • Sensorless Commutation Controllers • Industrial IoT Nodes",

    category: "IoT",

    status: "In Progress",

    featured: false,

    thumbnail: "/projects/bldc.png",

    shortDescription:
        "Developing a sensorless Brushless DC (BLDC) commutation framework utilizing Artificial Neural Networks (ANN) for Back-EMF regression modeling and adaptive closed-loop velocity regulation.",

    fullDescription:
        "This research isolates the development of an intelligent, sensorless electronic commutation control paradigm for Brushless DC (BLDC) motors. By leveraging deep regression Artificial Neural Networks (ANN), the architecture models and predicts non-linear Back Electromotive Force (Back-EMF) behaviors to accurately detect Zero-Crossing Events (ZCD). By eliminating classical physical Hall-effect sensory requirements, the system mitigates hardware complexity, mechanical failure thresholds, and overall bill-of-materials (BOM) overhead. The embedded computing workflow runs on a Raspberry Pi 4 coprocessor, streaming predictive diagnostic data via an IoT broker configuration to achieve industrial remote state monitoring, live execution profiling, and intelligent automation management.",

    technologies: [
        "Artificial Neural Networks (ANN)",
        "Back-EMF Regression Modeling",
        "Zero-Cross Detection (ZCD) Math",
        "Sensorless BLDC Architecture",
        "Raspberry Pi 4 Embedded SoC",
        "Python Subsystems",
        "Embedded Systems Engineering",
        "Industrial IoT (IIoT)",
        "Blynk Telemetry Engine"
    ],

    tags: [
        "Artificial Intelligence Architectures",
        "Sensorless Control Systems",
        "BLDC Motor Optimization",
        "Back-EMF Diagnostics",
        "Zero-Cross Signal Processing",
        "Embedded Edge AI",
        "Industrial Automation Frameworks",
        "Industrial IoT (IIoT)",
        "Robotics Systems Control"
    ],

    github: "https://github.com/Neuzura-Technologies/neuzura-website",

    linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",

    year: 2026,
    },
//12
    {
        id: "smart-fisherman",

        slug: "smart-fisherman-maritime-safety",

        title: "Smart Fisherman Maritime Safety System",

        subtitle: "Edge IoT Architecture • GNSS Geofencing Telemetry • Cross-Platform Mobile Application",

        category: "IoT",

        status: "Completed",

        featured: false,

        thumbnail: "/projects/user.jpg",

        shortDescription:
            "An edge IoT-enabled maritime telematics system deploying low-latency GNSS tracking algorithms and real-time geofencing protocols to prevent international boundary infractions.",

        fullDescription:
            "Engineered an IoT-driven maritime safety architecture integrating high-precision Global Navigation Satellite System (GNSS) telemetry with cross-platform mobile visualization endpoints. The edge computing layer parses vessel coordinates in real time, running polygon-in-polygon calculations against sovereign maritime boundary polygons. Upon approaching defined thresholds, the system pushes asynchronous state synchronization packets via a Firebase data layer to generate immediate audio-visual boundary warnings for vessel operators.",

        technologies: [
            "Firebase Distributed Realtime Database",
            "Android SDK Core",
            "GNSS Global Positioning Architectures",
            "IoT Firmware Engineering",
            "Google Maps APIs & Spatial Layers"
        ],

        tags: [
            "IoT Architecture",
            "Maritime Telematics Safety",
            "Mobile Infrastructure",
            "GNSS Spatial Auditing"
        ],

        github: "https://github.com/Neuzura-Technologies/neuzura-website",

        linkedin: "https://github.com/Neuzura-Technologies/neuzura-website",
        year: 2024,
    },
];
