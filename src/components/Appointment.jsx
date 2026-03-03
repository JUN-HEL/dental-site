import { useState } from "react";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "../utils/whatsapp";

export default function Appointment() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "General Consultation",
        date: "",
        time: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const link = generateWhatsAppLink(formData);
        window.open(link, "_blank");
    };

    return (
        <section
            id="appointment"
            className="relative py-32 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative max-w-4xl mx-auto px-6"
            >
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 md:p-14">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Book Your Appointment
                        </h2>
                        <p className="mt-4 text-white/80">
                            Choose your preferred date & time and confirm instantly via WhatsApp.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {/* Name */}
                        <InputField
                            label="Full Name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                        />

                        {/* Phone */}
                        <InputField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            onChange={handleChange}
                        />

                        {/* Service */}
                        <div className="relative">
                            <select
                                name="service"
                                onChange={handleChange}
                                className="peer w-full bg-white/20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-white transition"
                            >
                                <option className="text-black">General Consultation</option>
                                <option className="text-black">Dental Implants</option>
                                <option className="text-black">Root Canal Treatment</option>
                                <option className="text-black">Teeth Whitening</option>
                                <option className="text-black">Smile Makeover</option>
                            </select>
                            <label className="absolute left-4 -top-3 text-sm text-white bg-teal-700 px-2 rounded">
                                Select Service
                            </label>
                        </div>

                        {/* Date */}
                        <InputField
                            label="Preferred Date"
                            name="date"
                            type="date"
                            onChange={handleChange}
                        />

                        {/* Time */}
                        <InputField
                            label="Preferred Time"
                            name="time"
                            type="time"
                            onChange={handleChange}
                            colSpan
                        />

                        {/* Button */}
                        <div className="md:col-span-2 mt-4">
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-white text-teal-700 font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300"
                            >
                                Confirm on WhatsApp →
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}

/* Reusable Floating Label Input */
function InputField({ label, name, type, onChange, colSpan }) {
    return (
        <div className={`relative ${colSpan ? "md:col-span-2" : ""}`}>
            <input
                type={type}
                name={name}
                required
                onChange={onChange}
                className="peer w-full bg-white/20 text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-white transition"
            />
            <label className="absolute left-4 -top-3 text-sm text-white bg-teal-700 px-2 rounded">
                {label}
            </label>
        </div>
    );
}