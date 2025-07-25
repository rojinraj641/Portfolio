import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Thanks = () => {
  const navigate = useNavigate();
  const [timer,setTimer] = useState(5)

  useEffect(() => {
    const interval = setInterval(()=>{
      setTimer((prev)=>{
        if(prev<=1){
          clearInterval(interval)
          navigate('/')
          return 0;
        }
        return prev-1;
      })
    },1000)
    
    return () => clearInterval(interval); 
  }, [navigate]);

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] p-6 flex-col gap-6">
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

      <p className="text-white text-center font-medium">
        You’ll be redirected to the homepage in {timer} seconds.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-2 bg-white text-[#0f0c29] font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Go to Home Now
      </button>
    </section>
  );
};

export default Thanks;

