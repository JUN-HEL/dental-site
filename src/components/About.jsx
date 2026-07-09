import React from "react";
import { motion } from "framer-motion";
import { Award, Users, HeartHandshake, Sparkles } from "lucide-react";

const doctorName = "Kailaish Chandra"

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
                    <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(15,118,110,.18)] lg:w-[460px]">
                        <img
                            src="/images/doctor.png"
                            alt="Dentist"
                            className="h-[420px] w-full object-cover lg:h-[580px]"
                        />
                    </div>

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
                            Meet <span className="text-teal-700">Dr. {doctorName}</span>
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                            With over 12 years of experience, Dr. {doctorName} specializes in cosmetic
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