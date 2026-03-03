import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1585417233727-7c3b1103a1e3?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1598257006463-7c64a26b83d8?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1609840114035-3c981b782f19?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1588776813677-77c6c4f4b7a2?auto=format&fit=crop&w=1400&q=80",
];

export default function Gallery() {
    const [active, setActive] = useState(null);

    return (
        <section id="gallery" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-semibold text-teal-700">GALLERY</p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Clinic & Treatment Moments
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        A clean, calm, modern environment designed for comfort.
                    </p>
                </motion.div>

                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src) => (
                        <button
                            key={src}
                            onClick={() => setActive(src)}
                            className="group rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition text-left"
                        >
                            <img
                                src={src}
                                alt="Clinic"
                                className="h-56 w-full object-cover group-hover:scale-[1.03] transition duration-500"
                                loading="lazy"
                            />
                            <div className="p-5">
                                <p className="font-semibold text-gray-900">View</p>
                                <p className="text-sm text-gray-600 mt-1">Tap to enlarge</p>
                            </div>
                        </button>
                    ))}
                </div>

                <AnimatePresence>
                    {active && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActive(null)}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-6 flex items-center justify-center"
                        >
                            <motion.img
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.98, opacity: 0 }}
                                src={active}
                                alt="Preview"
                                onClick={(e) => e.stopPropagation()}
                                className="max-h-[82vh] max-w-[92vw] rounded-[2rem] object-contain shadow-2xl"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}