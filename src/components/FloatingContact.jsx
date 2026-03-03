import { useEffect, useState } from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export default function FloatingContact() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const phoneNumber = "919876543210"; // replace
    const callNumber = "+919876543210";

    // ---- Working Hours Logic ----
    const isClinicOpen = () => {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 10 && hour < 19; // 10 AM – 7 PM
    };

    const message = isClinicOpen()
        ? "Hello Doctor, I would like to book an appointment."
        : "Hello Doctor, I tried reaching outside clinic hours. Please confirm appointment timing.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    // ---- Auto Hide on Scroll ----
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); // scrolling down
            } else {
                setVisible(true); // scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
        >
            <div className="flex flex-col gap-4 items-end">

                {/* Appointment */}
                <a
                    href="#appointment"
                    className="group relative bg-teal-600 hover:bg-teal-700 p-4 rounded-full shadow-xl transition"
                >
                    <Calendar className="text-white" size={22} />
                    <span className="absolute right-14 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        Book Appointment
                    </span>
                </a>

                {/* Call */}
                <a
                    href={`tel:${callNumber}`}
                    className="group relative bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-xl transition"
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