import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './Page/Home.jsx';
import AboutMe from "./Components/AboutMe.jsx";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/aboutMe" element={<AboutMe/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
