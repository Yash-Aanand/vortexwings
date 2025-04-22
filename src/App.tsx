import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightDeckPage from "./pages/FlightDeckPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flight-deck" element={<FlightDeckPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
