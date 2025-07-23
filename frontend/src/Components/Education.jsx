import { motion } from "framer-motion";
import { FaGraduationCap, FaUserGraduate, FaSchool } from "react-icons/fa";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 md:px-12 lg:px-24 py-24 bg-[#302b63] snap-y snap-mandatory overflow-y-auto"
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 text-transparent bg-clip-text">
          Education
        </h1>
        <div className="relative flex flex-col md:flex-row md:justify-between items-center gap-20">
          {/* Graduation */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full md:w-5/12 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center border hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] transition-shadow duration-300"
          >
            <FaGraduationCap className="text-4xl text-pink-400 mb-3 mx-auto" />
            <p className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-2">
              Graduation
            </p>
            <p className="font-semibold">B.E Mechatronics Engineering</p>
            <p className="font-semibold">RVS Technical Campus, Coimbatore</p>
            <p className="font-semibold">2020-2024</p>
            <div className="hidden md:block absolute w-4 h-4 bg-white border-4 border-pink-400 rounded-full left-full -translate-x-1/2 top-1/2 transform -translate-y-1/2"></div>
          </motion.div>

          {/* Higher Secondary */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full md:w-5/12 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center border hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] transition-shadow duration-300"
          >
            <FaUserGraduate className="text-4xl text-purple-400 mb-3 mx-auto" />
            <p className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-2">
              Higher Secondary
            </p>
            <p className="font-semibold">
              St Gregorios Higher Secondary School, Kottarakkara, Kollam
            </p>
            <p className="font-semibold">2018-2020</p>
            <div className="hidden md:block absolute w-4 h-4 bg-white border-4 border-purple-400 rounded-full left-full -translate-x-1/2 top-1/2 transform -translate-y-1/2"></div>
          </motion.div>

          {/* High School */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full md:w-5/12 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md text-center border hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.2)] transition-shadow duration-300"
          >
            <FaSchool className="text-4xl text-indigo-400 mb-3 mx-auto" />
            <p className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-2">
              High School
            </p>
            <p className="font-semibold">
              St Mary's Higher Secondary School, Kottarakkara, Kollam
            </p>
            <p className="font-semibold">2018</p>
            <div className="hidden md:block absolute w-4 h-4 bg-white border-4 border-indigo-400 rounded-full left-full -translate-x-1/2 top-1/2 transform -translate-y-1/2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
