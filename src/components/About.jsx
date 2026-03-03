import React from "react";

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <img
                    src="https://images.unsplash.com/photo-1606813909354-6a60b0b8f5e7"
                    alt="Doctor"
                    className="rounded-3xl shadow-xl"
                />

                <div>
                    <h2 className="text-4xl font-bold text-gray-800">
                        Meet <span className="text-teal-600">Dr. Sharma</span>
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        With over 12 years of experience, Dr. Sharma specializes in
                        cosmetic dentistry and dental implants. His mission is to make
                        dental visits comfortable and stress-free.
                    </p>

                    <div className="mt-6 flex gap-6 text-teal-600 font-semibold">
                        <span>✔ 12+ Years Experience</span>
                        <span>✔ 5000+ Patients</span>
                    </div>
                </div>

            </div>
        </section>
    );
}