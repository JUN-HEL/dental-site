export default function FloatingWhatsApp() {
    const phoneNumber = "919876543210";
    // Replace with dentist number (without +, no spaces)

    const message = "Hello Doctor, I would like to book an appointment.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
        >
            <div className="relative">

                {/* Ping Animation */}
                <span className="absolute inline-flex h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

                {/* Button */}
                <div className="relative h-14 w-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition duration-300">

                    {/* WhatsApp SVG Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        className="w-7 h-7"
                    >
                        <path d="M20.52 3.48A11.79 11.79 0 0012.01 0C5.39 0 .01 5.38.01 12a11.9 11.9 0 001.63 6L0 24l6.2-1.63A11.88 11.88 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.8a9.74 9.74 0 01-4.96-1.34l-.36-.22-3.68.97.98-3.59-.23-.37A9.75 9.75 0 1121.8 12 9.8 9.8 0 0112 21.8zm5.45-7.35c-.3-.15-1.78-.88-2.05-.98s-.47-.15-.66.15-.76.98-.93 1.18-.34.22-.64.07a7.88 7.88 0 01-2.32-1.43 8.68 8.68 0 01-1.6-2c-.17-.3 0-.47.13-.62.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5s.05-.37-.03-.52-.66-1.6-.9-2.18c-.23-.57-.47-.5-.66-.5h-.57c-.2 0-.52.07-.8.37a3.4 3.4 0 00-1.05 2.53 5.92 5.92 0 001.25 3.18 13.44 13.44 0 005.16 4.82 12.6 12.6 0 001.73.64 4.2 4.2 0 001.93.12c.59-.09 1.78-.73 2.03-1.43s.25-1.3.17-1.43-.28-.22-.59-.37z" />
                    </svg>

                </div>
            </div>
        </a>
    );
}