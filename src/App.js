import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
<Router>
      <div className="">
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={<Education />}
        />
        <Route element={<Home />} />
        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
        <Route
          path="/project"
          element={
            <Project />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
