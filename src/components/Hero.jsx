import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-white" />
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-100/60 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                        <Sparkles size={16} className="text-teal-700" />
                        Modern Dentistry • Gentle Care
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        Confident Smiles{" "}
                        <span className="text-teal-700">Begin Here</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                        Advanced dental care with modern technology and a gentle approach.
                        Trusted by thousands of happy patients.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => navigate("/book")}
                            className="rounded-2xl bg-teal-600 text-white px-6 py-4 font-semibold shadow-lg hover:bg-teal-700 transition inline-flex items-center justify-center gap-2"
                        >
                            <CalendarCheck size={18} />
                            Book Appointment
                        </button>

                        <button
                            onClick={() => navigate("/services")}
                            className="rounded-2xl border border-gray-200 bg-white px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 transition"
                        >
                            View Treatments
                        </button>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-xl">
                        <div className="rounded-2xl bg-white/70 border border-gray-100 p-5 shadow-sm">
                            <p className="text-sm text-gray-500">Experience</p>
                            <p className="text-2xl font-bold mt-1">10+ yrs</p>
                        </div>
                        <div className="rounded-2xl bg-white/70 border border-gray-100 p-5 shadow-sm">
                            <p className="text-sm text-gray-500">Patients</p>
                            <p className="text-2xl font-bold mt-1">5000+</p>
                        </div>
                        <div className="rounded-2xl bg-white/70 border border-gray-100 p-5 shadow-sm">
                            <p className="text-sm text-gray-500">Safety</p>
                            <p className="text-2xl font-bold mt-1 inline-flex items-center gap-2">
                                <ShieldCheck size={18} className="text-teal-700" />
                                Sterile
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right image */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="relative"
                >
                    <div className="rounded-[2rem] bg-white/70 border border-gray-100 shadow-2xl p-3">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80"
                            alt="Dental Clinic"
                            className="rounded-[1.7rem] w-full h-[420px] object-cover"
                            loading="lazy"
                        />
                    </div>

                    {/* Floating highlight card */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                        className="absolute -bottom-6 -left-6 hidden sm:block rounded-3xl bg-white/85 border border-gray-100 shadow-xl p-5"
                    >
                        <p className="text-sm text-gray-500">Today’s Highlight</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">Laser Whitening</p>
                        <p className="text-sm text-gray-600 mt-1">Bright smile in one session</p>

                        <button
                            onClick={() => navigate("/book")}
                            className="mt-4 w-full rounded-2xl bg-teal-600 text-white py-3 font-semibold hover:bg-teal-700 transition"
                        >
                            Book Whitening
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}