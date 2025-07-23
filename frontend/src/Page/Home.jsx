import Navbar from "../Components/Navbar";
import AboutMe from "../Components/AboutMe";
import HomePage from "../Components/HomePage";
import Education from "../Components/Education";
const Home = () => {

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Navbar />
      <HomePage/>
      <AboutMe />
      <Education />
    </div>
  );
};

export default Home;
