import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Project = () => {
    return (
        <section
            id="project"
            className="min-h-screen px-4 py-14 bg-[#302b63] flex flex-col items-center justify-center"
        >
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 text-transparent bg-clip-text leading-tight pb-12"
            >
                Project
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full max-w-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold text-white">
                            Bus Ticket Booking System
                        </h3>
                        <a
                            href="https://github.com/rojinraj641/Bus-ticket-booking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-400 transition"
                            aria-label="GitHub Repo"
                        >
                            <FaGithub size={26} />
                        </a>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        A scalable MERN stack application enabling users to search intercity buses, select available seats in real-time, and securely book tickets. Integrated with JWT-based authentication, role-based access control for admin operations, and optimized RESTful APIs. Built with a mobile-first UI and modular backend for maintainability and performance.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-3">
                        {["React.js", "Node.js", "Express.js", "MongoDB"].map((tech, index) => (
                            <span
                                key={index}
                                className="bg-pink-500/20 text-pink-300 text-xs px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Project;

