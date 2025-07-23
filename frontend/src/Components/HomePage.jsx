import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
    FaGithub,
    FaLinkedin,
    FaCode,
} from "react-icons/fa";

const HomePage = () => {
    return (
        <section
        id="home"
        className="min-h-screen pt-20 bg-gradient-to-b from-[#0f0c29] to-[#302b63]  text-white">
            <motion.div
                className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-32"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Typewriter Effect Name */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Heyy there, I’m{" "}
                    <span className="text-pink-400">
                        <Typewriter
                            words={["Rojin Raj"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={200}
                            deleteSpeed={200}
                            delaySpeed={5000}
                        />
                    </span>{" "}
                    <motion.span
                        className="inline-block origin-bottom-left"
                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        👋
                    </motion.span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="text-xl md:text-2xl font-light opacity-70 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Full Stack Web Developer | MERN Stack
                </motion.p>

                {/* Button */}
                <motion.a
                    href="./RojinRaj_Resume.pdf"
                    download
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg bg-pink-500 backdrop-blur-md text-white font-semibold transition hover:bg-white/20 hover:shadow-md"
                >
                    Download CV
                </motion.a>
                {/* Social Links */}
                <motion.div
                    className="flex gap-6 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <a
                        href="https://github.com/rojinraj641"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl hover:text-pink-400 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rojin-raj-22025229b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl hover:text-blue-400 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://leetcode.com/u/rojin_raj96/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl hover:text-yellow-400 transition duration-300"
                    >
                        <FaCode />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default HomePage;