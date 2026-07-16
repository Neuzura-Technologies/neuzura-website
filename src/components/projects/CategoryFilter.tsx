interface CategoryFilterProps {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryFilter({
    categories,
    selected,
    onSelect,
}: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3">

            {categories.map((category) => (

                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 border ${selected === category
                            ? "bg-blue-600 text-white border-blue-600 shadow-md"
                            : "bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600"
                        }`}
                >
                    {category}
                </button>

            ))}

        </div>
    );
}