import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-teal-600">
                    Smile<span className="text-gray-800">Craft</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <li className="hover:text-teal-600 cursor-pointer">Home</li>
                    <li className="hover:text-teal-600 cursor-pointer">About</li>
                    <li className="hover:text-teal-600 cursor-pointer">Services</li>
                    <li className="hover:text-teal-600 cursor-pointer">Contact</li>
                </ul>

                {/* CTA Button */}
                <button className="hidden md:block bg-teal-600 text-white px-5 py-2 rounded-xl shadow hover:bg-teal-700 transition">
                    Book Now
                </button>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    {isOpen ? (
                        <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
                    ) : (
                        <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4 text-gray-700 font-medium">
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">About</p>
                    <p className="cursor-pointer">Services</p>
                    <p className="cursor-pointer">Contact</p>

                    <button className="w-full bg-teal-600 text-white py-3 rounded-xl">
                        Book Now
                    </button>
                </div>
            )}
        </nav>
    );
}