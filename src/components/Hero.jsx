import React from "react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-teal-50 to-white min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Confident Smiles <span className="text-teal-600">Begin Here</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600">
                        Advanced dental care with modern technology and a gentle approach.
                        Trusted by 5000+ happy patients.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-teal-700 transition">
                            Book Appointment
                        </button>

                        <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-xl hover:bg-teal-50 transition">
                            View Treatments
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                        alt="Dental Clinic"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}