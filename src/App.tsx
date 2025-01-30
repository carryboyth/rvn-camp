import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ManageTrip from "@/pages/ManageTrip";
import RentCampervan from "@/pages/RentCampervan";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/manage-trip" element={<ManageTrip />} />
        <Route path="/rent-campervan" element={<RentCampervan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;