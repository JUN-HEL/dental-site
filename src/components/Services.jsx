import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Smile, Crown } from "lucide-react";

const services = [
    {
        title: "Dental Implants",
        short: "Permanent solution for missing teeth.",
        full: "Dental implants provide a long-lasting and natural-looking replacement for missing teeth. Using titanium roots and advanced surgical precision, we restore both function and aesthetics.",
        icon: Crown,
    },
    {
        title: "Teeth Whitening",
        short: "Professional laser whitening.",
        full: "Our advanced laser whitening system removes deep stains and brightens your smile in just one session. Safe, effective and instant results.",
        icon: Sparkles,
    },
    {
        title: "Smile Makeover",
        short: "Complete cosmetic transformation.",
        full: "A customized combination of veneers, whitening, contouring and alignment treatments to completely enhance your smile aesthetics.",
        icon: Smile,
    },
];

const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setSelectedService(null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-teal-50 to-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900"
                >
                    Our <span className="text-teal-700">Premium Services</span>
                </motion.h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Modern treatments, careful hands, and a comfort-first approach.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-14">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.button
                                type="button"
                                key={index}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.12, duration: 0.55 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedService(service)}
                                className="text-left rounded-[2rem] bg-white/80 border border-white/60 shadow-xl p-8 hover:shadow-2xl transition"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-teal-600 p-4 rounded-2xl shadow-md">
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                                        <p className="mt-1 text-sm text-gray-600">{service.short}</p>
                                    </div>
                                </div>

                                <div className="mt-6 inline-flex items-center gap-2 text-teal-700 font-semibold">
                                    Learn more <span aria-hidden>→</span>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                        className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 px-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] max-w-lg w-full p-9 shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 grid place-items-center text-gray-700"
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-extrabold text-gray-900">
                                {selectedService.title}
                            </h3>

                            <p className="mt-5 text-gray-600 leading-relaxed">
                                {selectedService.full}
                            </p>

                            <button
                                onClick={() => {
                                    setSelectedService(null);
                                    scrollToId("appointment");
                                }}
                                className="mt-8 w-full rounded-2xl bg-teal-600 text-white py-4 font-semibold hover:bg-teal-700 transition"
                            >
                                Book Appointment
                            </button>

                            <p className="mt-3 text-xs text-gray-500 text-center">
                                Tip: press <span className="font-semibold">ESC</span> to close
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}