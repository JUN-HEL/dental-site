import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <p className="text-sm font-semibold text-teal-700">CONTACT</p>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Visit the clinic
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Call, message or walk in — we’re happy to help.
                    </p>
                </div>

                <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
                    <div className="rounded-[2rem] bg-white border border-gray-100 shadow-xl p-10">
                        <div className="space-y-5 text-gray-800">
                            <div className="flex gap-3">
                                <Phone className="text-teal-700" />
                                <div>
                                    <p className="font-bold">Phone</p>
                                    <p className="text-gray-600">+91 99999 99999</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="text-teal-700" />
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p className="text-gray-600">clinic@email.com</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <MapPin className="text-teal-700" />
                                <div>
                                    <p className="font-bold">Address</p>
                                    <p className="text-gray-600">Your clinic address here</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Clock className="text-teal-700" />
                                <div>
                                    <p className="font-bold">Hours</p>
                                    <p className="text-gray-600">Mon–Sat: 10:00 AM – 7:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-3xl bg-teal-50 border border-teal-100 p-6">
                            <p className="font-bold text-gray-900">Quick tip</p>
                            <p className="text-gray-700 mt-2">
                                For fastest booking, use the WhatsApp form above.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl bg-gray-50 grid place-items-center">
                        <p className="text-gray-500 font-medium px-6 text-center">
                            Add your Google Map embed here (optional)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}