interface Props {
    status: "Completed" | "In Progress" | "Research";
}

export default function ProjectStatusBadge({ status }: Props) {
    const colors = {
        Completed:
            "bg-green-100 text-green-700",

        "In Progress":
            "bg-blue-100 text-blue-700",

        Research:
            "bg-orange-100 text-orange-700",
    };

    return (
        <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${colors[status]}`}
        >
            {status}
        </span>
    );
}