import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landingpage from "./Components/Landingpage";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Proffessional from "./Components/Proffessional";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Landingpage />
      <About />
      <WhyChooseUs />
      <Proffessional />
      <Footer />
    </div>
  );
}

export default App;
