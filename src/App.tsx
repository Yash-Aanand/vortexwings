import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightDeckPage from "./pages/FlightDeckPage";
// import ContactPage from "./pages/ContactPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flight-deck" element={<FlightDeckPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      {/* <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;
