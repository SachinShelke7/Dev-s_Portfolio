import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import BG from './assets/images/main.jpg'
import Footer from "./components/Footer";

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
      <Footer />
    </Router>
  );
}

export default App;
