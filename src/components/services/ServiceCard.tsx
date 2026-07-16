import { useState } from "react";

interface ServiceCardProps {
    title: string;
    image: string;
    intro: string;
    note: string;
}

function ServiceCard({
    title,
    image,
    intro,
    note,
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group h-[420px] w-[320px] [perspective:1000px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

        {/* FRONT SIDE - Outer Gradient Border (Preserved exactly as you liked it) */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-400 via-blue-500 to-teal-400 p-[2px] rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-sky-200 transition-all duration-500 [backface-visibility:hidden]">

          {/* Inner Front Content - Elegant Sky Blue Gradient (No White Background) */}
          <div className="h-full w-full rounded-[14px] p-8 flex flex-col items-center text-center bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100 group-hover:from-sky-200 group-hover:via-sky-100 group-hover:to-blue-200 transition-all duration-500">

            {/* Image subtly scales up on hover */}
            <img src={image} alt={title} className="h-24 w-auto object-contain mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />

            {/* Typography optimized for high readability over light backgrounds */}
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-500">{title}</h3>
            <p className="text-slate-700 text-sm mb-auto group-hover:text-slate-900 transition-colors duration-500">{intro}</p>

            {/* The Highly Animated Read More Button with Sky/Teal Glow Effect */}
            <button className="mt-6 px-6 py-2.5 rounded-lg text-white font-semibold tracking-wide bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:-translate-y-1 hover:scale-110 active:scale-95">
              Read more...
            </button>
          </div>
        </div>

        {/* BACK SIDE - Preserved Outer Border */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-400 via-blue-500 to-teal-400 p-[2px] rounded-2xl shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">

          {/* Inner Back Content - Soft, Light Shade Sky Blue Gradient */}
          <div className="h-full w-full rounded-[14px] p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-sky-200 via-blue-100 to-sky-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-950 drop-shadow-md">Detailed Insights</h3>
            <p className="text-slate-800 leading-relaxed font-medium">{note}</p>

            <span className="mt-8 text-blue-700 text-xs uppercase tracking-widest font-bold group-hover:text-blue-900 transition-colors">
              Tap to flip back
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServiceCard;