import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import IndustrialAutomation from "./pages/IndustrialAutomation";
import TradingAndSolutions from "./pages/TradingAndSolutions";
import DigitalManufacturingSolutions from "./pages/DigitalManufacturingSolutions";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Industries from "./pages/Industries";
import Aboutus from "./pages/Aboutus";
import Offerings from "./pages/Offerings";
import SoftwareSolutions from "./pages/SoftwareSolutions";
import ElectricalSolutions from "./pages/ElectricalSolutions";
import LightingSolutions from "./pages/LightingSolutions";
import House from "./pages/House";
import Turnkey from "./pages/Turnkey";

function App() {
  return (
    <Router>
      {/* Navbar and other static sections */}
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/industrial-automation"
          element={<IndustrialAutomation />}
        />
        <Route path="/trading-solutions" element={<TradingAndSolutions />} />
        <Route
          path="/digital-manufacturing-solutions"
          element={<DigitalManufacturingSolutions />}
        />
        <Route path="/software-solutions" element={<SoftwareSolutions />} />
        <Route path="/electrical-solutions" element={<ElectricalSolutions />} />
        <Route path="/lightning-solutions" element={<LightingSolutions />} />
        <Route path="/house-office-solutions" element={<House />} />
        <Route path="/turnkey-solutions" element={<Turnkey />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/industries/:sector?" element={<Industries />} />
        <Route path="/offerings" element={<Offerings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
