import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
    id="aboutme"
     className="min-h-screen flex flex-col items-center justify-center bg-[#302b63] px-4 sm:px-6 md:px-10 py-16 sm:py-24">
      <motion.div
        className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 text-white text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I’m a <span className="font-semibold text-white">self-taught Full Stack Developer</span> with a strong grip on the{" "}
          <span className="text-pink-400 font-semibold">MERN Stack</span>. Though my roots are in Mechatronics Engineering, I transitioned into tech driven by passion and curiosity.
          <br /><br />
          I build sleek UIs and robust backends, constantly learning and pushing my limits. I love crafting responsive, user-centric apps that solve real-world problems with clean code and creativity.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
