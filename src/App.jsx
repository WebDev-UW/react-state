import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Exercises />} />
        <Route path="/exercise1" element={<Exercise1 />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route path="/exercise3" element={<Exercise3 />} />
        <Route path="/exercise4" element={<Exercise4 />} />
      </Routes>
    </Router>
  )
}

export default App
