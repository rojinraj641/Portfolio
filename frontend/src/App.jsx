import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './Page/Home.jsx';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/Portfolio/" element={<Home/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
