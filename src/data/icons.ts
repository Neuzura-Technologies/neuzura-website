import {
    Shield,
    Brain,
    Bot,
    Lightbulb,
    GraduationCap,
    Award,
    BookOpen,
    Stamp,
    BarChart2,
    Cpu,
    Users,
    FileText,
    Zap,
    Target,
    Eye,
} from "lucide-react";

export const ICON_MAP = {
    Shield,
    Brain,
    Bot,
    Lightbulb,
    GraduationCap,
    Award,
    BookOpen,
    Stamp,
    BarChart2,
    Cpu,
    Users,
    FileText,
    Zap,
    Target,
    Eye,
} as const;

export type IconName = keyof typeof ICON_MAP;