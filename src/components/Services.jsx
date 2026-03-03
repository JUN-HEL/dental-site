import { useState } from "react";
import { motion } from "framer-motion";
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

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="relative py-28 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-800"
                >
                    Our <span className="text-teal-600">Premium Services</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10 mt-16">

                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                onClick={() => setSelectedService(service)}
                                className="cursor-pointer backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-3xl p-8 transition-all duration-500"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="bg-teal-600 p-4 rounded-full">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-gray-600 text-sm">
                                    {service.short}
                                </p>

                                <p className="mt-6 text-teal-600 font-medium">
                                    Click to Learn More →
                                </p>
                            </motion.div>
                        );
                    })}

                </div>
            </div>

            {/* MODAL */}
            {selectedService && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl max-w-lg w-full p-10 shadow-2xl relative"
                    >
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold text-gray-800">
                            {selectedService.title}
                        </h3>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            {selectedService.full}
                        </p>

                        <button className="mt-8 w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition">
                            Book Appointment
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}