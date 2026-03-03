import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import Hero from "../components/Hero";

const servicesPreview = [
    {
        title: "Dental Implants",
        desc: "Permanent solution for missing teeth with natural feel.",
    },
    {
        title: "Teeth Whitening",
        desc: "Professional whitening for a brighter smile in one session.",
    },
    {
        title: "Smile Makeover",
        desc: "Complete cosmetic transformation tailored for you.",
    },
];

const galleryPreview = [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1585417233727-7c3b1103a1e3?auto=format&fit=crop&w=1400&q=80",
];

const reviewPreview = {
    name: "Neha Sharma",
    text: "Quick appointment on WhatsApp and the clinic was super clean. Whitening results were amazing!",
    rating: 5,
};

function SectionHead({ eyebrow, title, desc, actionLabel, onAction }) {
    return (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
                <p className="text-sm font-semibold text-teal-700">{eyebrow}</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                    {title}
                </h2>
                {desc && <p className="mt-4 text-gray-600 max-w-2xl">{desc}</p>}
            </div>

            {actionLabel && (
                <button
                    onClick={onAction}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
                >
                    {actionLabel}
                    <ArrowRight size={18} />
                </button>
            )}
        </div>
    );
}

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Hero />

            {/* SERVICES PREVIEW */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHead
                            eyebrow="SERVICES"
                            title="Popular treatments"
                            desc="Premium care, modern tools, and a comfort-first approach."
                            actionLabel="View all services"
                            onAction={() => navigate("/services")}
                        />
                    </motion.div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {servicesPreview.map((s, idx) => (
                            <motion.button
                                key={s.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                whileHover={{ y: -6 }}
                                onClick={() => navigate("/services")}
                                className="text-left rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition p-8"
                            >
                                <p className="text-xl font-extrabold text-gray-900">{s.title}</p>
                                <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
                                <p className="mt-6 font-semibold text-teal-700 inline-flex items-center gap-2">
                                    Learn more <ArrowRight size={18} />
                                </p>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY PREVIEW */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHead
                            eyebrow="GALLERY"
                            title="Clinic moments"
                            desc="A clean, calm, modern environment designed for comfort."
                            actionLabel="View full gallery"
                            onAction={() => navigate("/gallery")}
                        />
                    </motion.div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {galleryPreview.map((src, idx) => (
                            <motion.button
                                key={src}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                whileHover={{ y: -6 }}
                                onClick={() => navigate("/gallery")}
                                className="rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition"
                            >
                                <img
                                    src={src}
                                    alt="Clinic"
                                    className="h-64 w-full object-cover"
                                    loading="lazy"
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIAL PREVIEW */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionHead
                            eyebrow="REVIEWS"
                            title="Patients love the experience"
                            desc="Here’s what a recent patient said."
                            actionLabel="View all reviews"
                            onAction={() => navigate("/reviews")}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.06 }}
                        className="mt-12 max-w-3xl"
                    >
                        <div className="rounded-[2rem] bg-white border border-gray-100 shadow-xl p-10">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <p className="text-xl font-extrabold text-gray-900">
                                        {reviewPreview.name}
                                    </p>
                                    <div className="mt-2 flex items-center gap-1 text-teal-700">
                                        {Array.from({ length: reviewPreview.rating }).map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate("/reviews")}
                                    className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
                                >
                                    More reviews <ArrowRight size={18} />
                                </button>
                            </div>

                            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                                “{reviewPreview.text}”
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-12 rounded-[2rem] bg-gradient-to-r from-teal-600 to-teal-700 text-white border border-white/20 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        <div>
                            <p className="text-sm font-semibold text-white/90">READY TO BOOK?</p>
                            <p className="mt-2 text-2xl md:text-3xl font-extrabold">
                                Get an appointment in seconds
                            </p>
                            <p className="mt-2 text-white/85">
                                Use WhatsApp booking and we’ll confirm quickly.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate("/book")}
                            className="rounded-2xl bg-white text-teal-700 px-6 py-4 font-extrabold hover:bg-gray-100 transition"
                        >
                            Book Appointment
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}