import { motion } from "framer-motion";
import { FaJs, FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress,SiPostman, SiTailwindcss, SiRedux, SiVite } from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNode className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "REST API", icon: <FaNode className="text-gray-300" /> },
    { name: "Vite", icon: <SiVite className="text-purple-300" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen py-20 px-4 bg-[#302b63] flex flex-col items-center justify-center"
        >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 text-transparent bg-clip-text">
                Skills
            </h1>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-wrap justify-center gap-6 max-w-5xl"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-row items-center gap-3 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl backdrop-blur-md shadow transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] transition-shadow duration-300 text-left w-fit  sm:w-40"
                    >
                        <div className="text-2xl">{skill.icon}</div>
                        <div className="text-sm sm:text-base font-medium">{skill.name}</div>
                    </motion.div>
                ))}

            </motion.div>
        </section>
    );
};

export default Skills;