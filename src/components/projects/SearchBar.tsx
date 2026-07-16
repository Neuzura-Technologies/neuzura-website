import { Search } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function SearchBar({
    value,
    onChange,
    placeholder = "Search projects...",
}: SearchBarProps) {
    return (
        <div className="relative w-full">

            <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

        </div>
    );
}