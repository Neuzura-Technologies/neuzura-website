interface SectionTitleProps {
    badge?: string;
    heading: string;
    description?: string;
    align?: "left" | "center";
}

export default function SectionTitle({
    badge,
    heading,
    description,
    align = "center",
}: SectionTitleProps) {
    const alignment =
        align === "center"
            ? "text-center mx-auto"
            : "text-left";

    return (
        <div className={`max-w-3xl mb-16 ${alignment}`}>
            {badge && (
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">
                    {badge}
                </span>
            )}

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {heading}
            </h2>

            {description && (
                <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}