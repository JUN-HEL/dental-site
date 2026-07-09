import { motion } from "framer-motion";
import {
    CalendarCheck,
    ShieldCheck,
    Sparkles,
    Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    const stats = [
        {
            value: "10+",
            label: "Years Experience",
        },
        {
            value: "5000+",
            label: "Happy Patients",
        },
        {
            value: "4.9★",
            label: "Average Rating",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-teal-50/40">

            {/* Background glow */}
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />


            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-28">


                {/* MAIN HERO */}
                <div className="grid items-center gap-14 lg:grid-cols-2">


                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                    >

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2">
                            <Sparkles
                                size={16}
                                className="text-teal-700"
                            />

                            <span className="text-sm font-semibold text-teal-700">
                                Premium Dental Care
                            </span>
                        </div>


                        {/* Heading */}
                        <h1 className="mt-7 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">

                            Your Smile
                            <br />

                            <span className="text-teal-700">
                                Deserves The
                            </span>

                            <br />

                            Best Care

                        </h1>


                        {/* Description */}
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">

                            Modern dentistry with advanced technology
                            and gentle care to create confident,
                            healthy smiles.

                        </p>



                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                            <button
                                onClick={() => navigate("/book")}
                                className="flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
                            >

                                <CalendarCheck size={18} />

                                Book Appointment

                            </button>


                            <button
                                onClick={() => navigate("/services")}
                                className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                            >

                                View Treatments

                            </button>

                        </div>


                    </motion.div>





                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        className="relative flex justify-center"
                    >


                        {/* Glow behind image */}
                        <div className="absolute h-[420px] w-[420px] rounded-full bg-teal-100 blur-3xl" />



                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-[40px] shadow-[0_40px_90px_rgba(15,23,42,.15)]">

                            <img
                                src="/images/doctor.png"
                                alt="Dental clinic"
                                className="
                  h-[430px]
                  w-[320px]
                  object-cover
                  sm:w-[380px]
                  lg:h-[620px]
                  lg:w-[450px]
                "
                            />

                        </div>




                        {/* Rating card */}

                        <div className="
              absolute
              left-2
              top-6
              rounded-2xl
              bg-white
              px-5
              py-4
              shadow-xl
              sm:left-5
            ">

                            <div className="flex items-center gap-2">

                                <Star
                                    size={18}
                                    className="fill-yellow-400 text-yellow-400"
                                />

                                <span className="font-bold text-slate-900">
                                    4.9
                                </span>

                            </div>


                            <p className="mt-1 text-sm text-slate-500">
                                Patient Rating
                            </p>


                        </div>




                        {/* Safety card */}

                        <div className="
              absolute
              bottom-5
              right-2
              rounded-2xl
              bg-white
              px-5
              py-4
              shadow-xl
              sm:right-5
            ">


                            <div className="flex items-center gap-3">


                                <div className="rounded-full bg-teal-100 p-2">

                                    <ShieldCheck
                                        size={20}
                                        className="text-teal-700"
                                    />

                                </div>



                                <div>

                                    <p className="font-semibold text-slate-900">
                                        Safe & Sterile
                                    </p>

                                    <p className="text-sm text-slate-500">
                                        Modern Equipment
                                    </p>

                                </div>


                            </div>


                        </div>



                    </motion.div>


                </div>





                {/* STATS BELOW IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .3 }}
                    className="
            mt-16
            grid
            grid-cols-2
            gap-4
            md:grid-cols-3
          "
                >


                    {stats.map((item, index) => (

                        <div
                            key={item.label}
                            className={`
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                ${index === 2
                                    ? "col-span-2 md:col-span-1"
                                    : ""
                                }
              `}
                        >

                            <h3 className="text-3xl font-black text-slate-900">

                                {item.value}

                            </h3>


                            <p className="mt-1 text-sm text-slate-500">

                                {item.label}

                            </p>


                        </div>


                    ))}


                </motion.div>


            </div>


        </section>
    );
}