import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './Page/Home.jsx';
import Thanks from "./Page/Thanks.jsx";

function App() {
  return (
   <Router basename="/Portfolio">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/thanks" element={<Thanks/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
