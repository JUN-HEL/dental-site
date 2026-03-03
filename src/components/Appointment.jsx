import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Calendar, Clock, Stethoscope, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const services = [
    "General Consultation",
    "Dental Implants",
    "Root Canal Treatment",
    "Teeth Whitening",
    "Smile Makeover",
];

function Field({ icon: Icon, label, children }) {
    return (
        <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon size={18} />
                </div>
                {children}
            </div>
        </div>
    );
}

export default function AppointmentSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "General Consultation",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const link = generateWhatsAppLink(formData);
        window.open(link, "_blank");
    };

    const inputBase =
        "w-full rounded-2xl bg-white/90 border border-gray-200 pl-11 pr-4 py-4 text-gray-800 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100";

    return (
        <section
            id="appointment"
            className="relative py-24 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800" />
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <p className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm">
                            <MessageCircle size={16} />
                            WhatsApp Instant Booking
                        </p>

                        <h2 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
                            Book your appointment in{" "}
                            <span className="text-teal-100">30 seconds</span>
                        </h2>

                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            Choose your service, pick a time, and confirm instantly on WhatsApp.
                            No calls. No waiting. Just smooth scheduling ✨
                        </p>

                        <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-xl">
                            <div className="rounded-2xl bg-white/12 border border-white/15 p-5">
                                <p className="text-sm text-white/80">Response</p>
                                <p className="text-xl font-semibold mt-1">Fast</p>
                            </div>
                            <div className="rounded-2xl bg-white/12 border border-white/15 p-5">
                                <p className="text-sm text-white/80">Booking</p>
                                <p className="text-xl font-semibold mt-1">Direct</p>
                            </div>
                            <div className="rounded-2xl bg-white/12 border border-white/15 p-5">
                                <p className="text-sm text-white/80">Support</p>
                                <p className="text-xl font-semibold mt-1">Friendly</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="relative"
                    >
                        <div className="rounded-3xl bg-white/85 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-10">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Appointment Details
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Fill this form — we’ll open WhatsApp with your message ready.
                                    </p>
                                </div>

                                <div className="hidden sm:flex items-center gap-2 bg-teal-50 text-teal-700 border border-teal-100 px-3 py-2 rounded-2xl text-sm font-medium">
                                    <MessageCircle size={16} />
                                    Secure
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
                                <Field icon={User} label="Your Name">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        required
                                        onChange={handleChange}
                                        className={inputBase}
                                    />
                                </Field>

                                <Field icon={Phone} label="Phone Number">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="e.g. 9876543210"
                                        required
                                        onChange={handleChange}
                                        className={inputBase}
                                    />
                                </Field>

                                <Field icon={Stethoscope} label="Service">
                                    <select
                                        name="service"
                                        onChange={handleChange}
                                        className={`${inputBase} appearance-none`}
                                        defaultValue={formData.service}
                                    >
                                        {services.map((s) => (
                                            <option key={s} value={s}>
                                                {s}
                                            </option>
                                        ))}
                                    </select>
                                </Field>

                                <Field icon={Calendar} label="Preferred Date">
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        onChange={handleChange}
                                        className={inputBase}
                                    />
                                </Field>

                                <div className="md:col-span-2">
                                    <Field icon={Clock} label="Preferred Time">
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                            onChange={handleChange}
                                            className={inputBase}
                                        />
                                    </Field>
                                </div>

                                <button
                                    type="submit"
                                    className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-teal-600 text-white font-semibold py-4 shadow-lg hover:bg-teal-700 transition"
                                >
                                    <span className="relative z-10 inline-flex items-center justify-center gap-2">
                                        <MessageCircle size={18} />
                                        Confirm on WhatsApp
                                    </span>
                                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                                </button>

                                <p className="md:col-span-2 text-xs text-gray-500 text-center">
                                    By confirming, you’ll be redirected to WhatsApp with your appointment message.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}