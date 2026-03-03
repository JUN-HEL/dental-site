import { useEffect, useRef, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/reviews", label: "Reviews" },
    { to: "/book", label: "Appointment" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const mobileRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // glass on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // close mobile menu when route changes
    useEffect(() => {
        setOpen(false);
        // also scroll to top on page change (feels clean)
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    // close on outside click + ESC
    useEffect(() => {
        const onDown = (e) => {
            if (!open) return;
            if (mobileRef.current && !mobileRef.current.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        window.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onDown);
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    // lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top glass bar */}
            <div
                className={`transition-all ${scrolled
                        ? "backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => navigate("/")}
                        className="font-extrabold tracking-tight text-xl text-gray-900"
                    >
                        Denti<span className="text-teal-600">Care</span>
                    </button>

                    {/* Desktop links */}
                    <nav className="hidden lg:flex items-center gap-2 rounded-full border border-gray-100 bg-white/60 backdrop-blur px-2 py-2 shadow-sm">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 rounded-full text-sm font-semibold transition ${isActive ? "text-teal-700" : "text-gray-700 hover:text-teal-700"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <motion.span
                                                layoutId="navPill"
                                                className="absolute inset-0 rounded-full bg-teal-50 border border-teal-100"
                                                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                            />
                                        )}
                                        <span className="relative z-10">{l.label}</span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+919999999999"
                            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-gray-200 bg-white/70 hover:bg-white transition text-sm font-semibold shadow-sm"
                        >
                            <PhoneCall size={16} />
                            Call
                        </a>

                        <button
                            onClick={() => navigate("/book")}
                            className="rounded-2xl px-5 py-2 text-sm font-semibold text-white shadow-lg transition
              bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="lg:hidden rounded-2xl border border-gray-200 bg-white/85 backdrop-blur p-2 shadow-sm"
                        onClick={() => setOpen((p) => !p)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 z-50 bg-black/35 backdrop-blur-sm"
                    >
                        <motion.div
                            ref={mobileRef}
                            initial={{ y: -10, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -10, opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="mx-4 mt-4 rounded-3xl bg-white/95 border border-gray-100 shadow-2xl overflow-hidden"
                        >
                            <div className="px-6 py-5 flex items-center justify-between">
                                <button
                                    onClick={() => navigate("/")}
                                    className="font-extrabold text-gray-900 text-lg"
                                >
                                    Denti<span className="text-teal-600">Care</span>
                                </button>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-200 grid place-items-center"
                                    aria-label="Close"
                                >
                                    <X />
                                </button>
                            </div>

                            <div className="px-6 pb-6 flex flex-col gap-2">
                                {links.map((l) => (
                                    <NavLink
                                        key={l.to}
                                        to={l.to}
                                        className={({ isActive }) =>
                                            `text-left px-4 py-3 rounded-2xl font-semibold transition border ${isActive
                                                ? "bg-teal-50 text-teal-700 border-teal-100"
                                                : "hover:bg-gray-50 text-gray-800 border-transparent"
                                            }`
                                        }
                                    >
                                        {l.label}
                                    </NavLink>
                                ))}

                                <div className="mt-2 grid grid-cols-2 gap-3">
                                    <a
                                        href="tel:+919999999999"
                                        className="rounded-2xl px-4 py-3 border border-gray-200 bg-white font-semibold text-gray-800 text-center hover:bg-gray-50 transition"
                                    >
                                        Call
                                    </a>

                                    <button
                                        onClick={() => navigate("/book")}
                                        className="rounded-2xl px-4 py-3 text-white font-semibold shadow-lg transition
                    bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                                    >
                                        Book Now
                                    </button>
                                </div>

                                <p className="mt-3 text-xs text-gray-500 text-center">
                                    Tip: Press <span className="font-semibold">ESC</span> to close
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}