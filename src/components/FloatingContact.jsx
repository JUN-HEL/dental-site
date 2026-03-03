import { useEffect, useRef, useState } from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FloatingContact() {
    const navigate = useNavigate();

    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    const phoneNumber = "919876543210"; // WhatsApp number (no +)
    const callNumber = "+919876543210"; // Phone number (with +)

    // ---- Working Hours Logic ----
    const isClinicOpen = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 10 && hour < 19; // 10 AM – 7 PM
    };

    const message = isClinicOpen()
        ? "Hello Doctor, I would like to book an appointment."
        : "Hello Doctor, I tried reaching outside clinic hours. Please confirm appointment timing.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // ---- Auto Hide on Scroll (smooth + efficient) ----
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current + 8) {
                setVisible(false); // scrolling down
            } else if (currentY < lastScrollY.current - 8) {
                setVisible(true); // scrolling up
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
        >
            <div className="flex flex-col gap-4 items-end">
                {/* Appointment */}
                <button
                    onClick={() => navigate("/book")}
                    className="group relative bg-teal-600 hover:bg-teal-700 p-4 rounded-full shadow-xl transition"
                    aria-label="Book Appointment"
                >
                    <Calendar className="text-white" size={22} />
                    <span className="absolute right-14 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Book Appointment
                    </span>
                </button>

                {/* Call */}
                <a
                    href={`tel:${callNumber}`}
                    className="group relative bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-xl transition"
                    aria-label="Call Now"
                >
                    <Phone className="text-white" size={22} />
                    <span className="absolute right-14 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Call Now
                    </span>
                </a>

                {/* WhatsApp */}
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-xl transition"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="text-white" size={22} />
                    <span className="absolute right-14 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Chat With Us
                    </span>
                </a>
            </div>
        </div>
    );
}