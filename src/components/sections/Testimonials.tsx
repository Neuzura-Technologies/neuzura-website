import { useRef, useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_CONTENT } from "../../data/siteContent";

interface Review {
    id: number;
    name: string;
    role: string;
    text: string;
    rating: number;
}

export default function Testimonials() {
    const { testimonials } = SITE_CONTENT;
    const scrollRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // We double the reviews to ensure there is enough content to loop infinitely
    const extendedReviews = [...testimonials.reviews, ...testimonials.reviews];

    // High-performance smooth continuous scrolling
    useEffect(() => {
        let animationId: number;

        const scroll = () => {
            if (!isPaused && scrollRef.current && contentRef.current) {
                // Adjust this number to make the automatic glide faster or slower
                scrollRef.current.scrollLeft += 1;

                // Seamless Infinite Loop Logic:
                // When we scroll exactly past the first identical half, reset to 0 invisibly
                if (scrollRef.current.scrollLeft >= contentRef.current.scrollWidth) {
                    scrollRef.current.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    // Manual button controls
    const scrollManual = (direction: "left" | "right") => {
        if (!scrollRef.current || !contentRef.current) return;

        // If trying to scroll left while at the very beginning, invisibly jump to the middle first
        if (direction === "left" && scrollRef.current.scrollLeft <= 0) {
            scrollRef.current.scrollLeft = contentRef.current.scrollWidth;
        }

        const scrollAmount = 400; // Roughly the width of one card + gap

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
                    {/* Updated to professional corporate text */}
                    Client Testimonials
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                    {testimonials.heading}
                </h2>
            </div>

            <div
                className="relative group max-w-[100vw]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Navigation Buttons - Visible on Desktop Hover */}
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 right-4 z-30 pointer-events-none">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                        <button
                            onClick={() => scrollManual("left")}
                            className="pointer-events-auto bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-blue-50 hover:-translate-x-1 text-slate-700 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={() => scrollManual("right")}
                            className="pointer-events-auto bg-white p-3 rounded-full shadow-lg border border-slate-100 hover:bg-blue-50 hover:translate-x-1 text-slate-700 hover:text-blue-600 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Gradient Fading Edges */}
                <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                {/* Scrolling Track */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-hidden"
                >
                    {/* First Half */}
                    <div ref={contentRef} className="flex gap-8 pr-8 pl-8 w-max">
                        {extendedReviews.map((review, idx) => (
                            <div key={`set1-${review.id}-${idx}`} className="w-80 md:w-96 shrink-0">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>

                    {/* Second Half (Identical Clone for seamless looping) */}
                    <div className="flex gap-8 pr-8 w-max">
                        {extendedReviews.map((review, idx) => (
                            <div key={`set2-${review.id}-${idx}`} className="w-80 md:w-96 shrink-0">
                                <ReviewCard review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Review Card Sub-Component
function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 cursor-default flex flex-col h-full min-h-[280px]">
            <Quote className="absolute top-6 right-6 text-blue-50" size={40} />

            <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 relative z-10 whitespace-normal flex-grow">
                "{review.text}"
            </p>

            <div className="mt-auto border-t border-slate-100 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">{review.role}</p>
                </div>
            </div>
        </div>
    );
}