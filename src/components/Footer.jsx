export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

                {/* Clinic Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Smile<span className="text-teal-400">Craft</span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed">
                        Providing advanced and comfortable dental care with modern
                        technology and a patient-first approach.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-teal-400 cursor-pointer">Home</li>
                        <li className="hover:text-teal-400 cursor-pointer">About</li>
                        <li className="hover:text-teal-400 cursor-pointer">Services</li>
                        <li className="hover:text-teal-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Treatments</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Dental Implants</li>
                        <li>Root Canal</li>
                        <li>Teeth Whitening</li>
                        <li>Smile Makeover</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <p className="text-sm">📍 Shiamgir, India</p>
                    <p className="text-sm mt-2">📞 +91 98765 43210</p>
                    <p className="text-sm mt-2">✉ info@smilecraft.com</p>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
                © {new Date().getFullYear()} SmileCraft Dental Clinic. All rights reserved.
            </div>
        </footer>
    );
}