import React from "react";
import { motion } from "framer-motion";
import { Award, Users, HeartHandshake, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/40 to-white" />
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-[2rem] bg-white/70 border border-gray-100 shadow-2xl p-3">
                            <img
                                src="https://images.unsplash.com/photo-1606813909354-6a60b0b8f5e7?auto=format&fit=crop&w=1400&q=80"
                                alt="Doctor"
                                className="rounded-[1.7rem] shadow-xl w-full h-[440px] object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 left-6 rounded-3xl bg-white/85 backdrop-blur border border-gray-100 shadow-xl px-5 py-4">
                            <p className="text-sm text-gray-500">Specialty</p>
                            <p className="font-extrabold text-gray-900 flex items-center gap-2 mt-1">
                                <Sparkles size={18} className="text-teal-700" />
                                Cosmetic & Implants
                            </p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <p className="text-sm font-semibold tracking-widest text-teal-700">
                            ABOUT DOCTOR
                        </p>

                        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                            Meet <span className="text-teal-700">Dr. Sharma</span>
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                            With over 12 years of experience, Dr. Sharma specializes in cosmetic
                            dentistry and dental implants. The mission is simple: make every
                            visit calm, comfortable, and crystal-clear.
                        </p>

                        {/* Highlights */}
                        <div className="mt-10 grid sm:grid-cols-2 gap-4">
                            <div className="rounded-3xl bg-white/80 border border-gray-100 shadow-sm p-6">
                                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 grid place-items-center">
                                    <Award size={20} />
                                </div>
                                <p className="mt-4 font-extrabold text-gray-900">12+ Years</p>
                                <p className="mt-1 text-sm text-gray-600">
                                    Experience in advanced treatments.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-white/80 border border-gray-100 shadow-sm p-6">
                                <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-700 grid place-items-center">
                                    <Users size={20} />
                                </div>
                                <p className="mt-4 font-extrabold text-gray-900">5000+ Patients</p>
                                <p className="mt-1 text-sm text-gray-600">
                                    Trusted by families & professionals.
                                </p>
                            </div>
                        </div>

                        {/* Promise Card */}
                        <div className="mt-6 rounded-[2rem] bg-gradient-to-r from-teal-600 to-teal-700 text-white p-7 shadow-xl">
                            <div className="flex items-start gap-3">
                                <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/20 grid place-items-center">
                                    <HeartHandshake size={20} />
                                </div>
                                <div>
                                    <p className="font-extrabold text-lg">Comfort-first promise</p>
                                    <p className="mt-1 text-white/85">
                                        Gentle care, clear explanation, and modern technology — every step.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick stats line (optional) */}
                        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-gray-700">
                            <span className="px-4 py-2 rounded-full bg-white/80 border border-gray-100">
                                ✔ Sterile Environment
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/80 border border-gray-100">
                                ✔ Transparent Pricing
                            </span>
                            <span className="px-4 py-2 rounded-full bg-white/80 border border-gray-100">
                                ✔ WhatsApp Booking
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}