import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
    {
        name: "Aman Singh",
        text: "Very clean clinic and the doctor explained everything clearly. Pain-free experience!",
        rating: 5,
    },
    {
        name: "Neha Sharma",
        text: "Whitening results were amazing. Staff was friendly and professional.",
        rating: 5,
    },
    {
        name: "Rahul Verma",
        text: "Quick appointment on WhatsApp. Treatment was smooth and affordable.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 4500);
        return () => clearInterval(t);
    }, []);

    const r = reviews[i];

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-teal-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <p className="text-sm font-semibold text-teal-700">REVIEWS</p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Patients love the experience
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Comfort-first dentistry, explained clearly, delivered gently.
                    </p>
                </div>

                <div className="mt-14 max-w-3xl mx-auto">
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-[2rem] bg-white border border-gray-100 shadow-xl p-10"
                    >
                        <div className="flex items-center justify-between gap-6">
                            <div>
                                <p className="text-xl font-extrabold text-gray-900">{r.name}</p>
                                <div className="mt-2 flex items-center gap-1 text-teal-700">
                                    {Array.from({ length: r.rating }).map((_, idx) => (
                                        <Star key={idx} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
                                    className="w-11 h-11 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 grid place-items-center"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    onClick={() => setI((p) => (p + 1) % reviews.length)}
                                    className="w-11 h-11 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 grid place-items-center"
                                    aria-label="Next"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>

                        <p className="mt-6 text-gray-700 leading-relaxed text-lg">“{r.text}”</p>

                        <div className="mt-8 flex gap-2">
                            {reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setI(idx)}
                                    className={`h-2.5 rounded-full transition ${idx === i ? "w-10 bg-teal-600" : "w-2.5 bg-gray-200"
                                        }`}
                                    aria-label={`Go to review ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}