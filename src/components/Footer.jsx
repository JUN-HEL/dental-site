import { NavLink } from "react-router-dom";
import { PhoneCall, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    const quickLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/gallery", label: "Gallery" },
        { to: "/reviews", label: "Reviews" },
        { to: "/book", label: "Book Appointment" },
        { to: "/contact", label: "Contact" },
    ];

    const treatmentLinks = [
        { to: "/services", label: "Dental Implants" },
        { to: "/services", label: "Root Canal Treatment" },
        { to: "/services", label: "Teeth Whitening" },
        { to: "/services", label: "Smile Makeover" },
        { to: "/services", label: "Braces / Aligners" },
    ];

    // Optional policy pages (you can create these later)
    const policyLinks = [
        { to: "/privacy", label: "Privacy Policy" },
        { to: "/terms", label: "Terms & Conditions" },
    ];

    return (
        <footer className="border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <p className="text-xl font-extrabold tracking-tight text-gray-900">
                            Denti<span className="text-teal-700">Care</span>
                        </p>

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Modern dentistry with a comfort-first approach. Book instantly on WhatsApp
                            and get expert care with clarity and confidence.
                        </p>

                        <a
                            href="https://wa.me/919313935657?text=Hi%20%F0%9F%91%8B%20I%20want%20to%20book%20an%20appointment."
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 text-white font-semibold hover:bg-teal-700 transition"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Booking
                        </a>

                        {/* Social links (optional) */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 grid place-items-center transition"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} className="text-gray-700" />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 grid place-items-center transition"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} className="text-gray-700" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <p className="font-bold text-gray-900">Quick Links</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {quickLinks.map((l) => (
                                <li key={l.to}>
                                    <NavLink
                                        to={l.to}
                                        className={({ isActive }) =>
                                            `transition ${isActive
                                                ? "text-teal-700 font-semibold"
                                                : "text-gray-600 hover:text-teal-700"
                                            }`
                                        }
                                    >
                                        {l.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services / Treatments (now clickable) */}
                    <div>
                        <p className="font-bold text-gray-900">Popular Treatments</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {treatmentLinks.map((t) => (
                                <li key={t.label}>
                                    <NavLink
                                        to={t.to}
                                        className="text-gray-600 hover:text-teal-700 transition"
                                    >
                                        {t.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Policies */}
                        <p className="mt-8 font-bold text-gray-900">Policies</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            {policyLinks.map((p) => (
                                <li key={p.to}>
                                    <NavLink
                                        to={p.to}
                                        className="text-gray-600 hover:text-teal-700 transition"
                                    >
                                        {p.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-bold text-gray-900">Contact</p>
                        <div className="mt-4 space-y-4 text-sm text-gray-600">
                            <div className="flex items-start gap-3">
                                <PhoneCall className="text-teal-700 mt-0.5" size={18} />
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <a className="hover:text-teal-700" href="tel:+919999999999">
                                        +91 99999 99999
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="text-teal-700 mt-0.5" size={18} />
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <a className="hover:text-teal-700" href="mailto:clinic@email.com">
                                        clinic@email.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="text-teal-700 mt-0.5" size={18} />
                                <div>
                                    <p className="font-semibold text-gray-900">Address</p>
                                    <p>Your clinic address here</p>
                                </div>
                            </div>

                            <NavLink
                                to="/contact"
                                className="inline-flex items-center justify-center w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
                            >
                                View Contact Page
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600">
                        © {year} DentiCare Clinic. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3 text-sm">
                        <NavLink to="/book" className="text-gray-600 hover:text-teal-700 transition">
                            Book Appointment
                        </NavLink>
                        <span className="text-gray-300">•</span>
                        <NavLink to="/services" className="text-gray-600 hover:text-teal-700 transition">
                            Treatments
                        </NavLink>
                        <span className="text-gray-300">•</span>
                        <NavLink to="/contact" className="text-gray-600 hover:text-teal-700 transition">
                            Location
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}