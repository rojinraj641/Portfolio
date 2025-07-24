import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-3xl md:text-5xl font-extrabold text-center font-[Poppins]"
      >
        Thank you for visiting my website.
        <br className="hidden md:block" />
        Have a wonderful day!
      </motion.h1>
    </section>
  );
};

export default Thanks;
