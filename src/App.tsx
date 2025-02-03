import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ManageTrip from "@/pages/ManageTrip";
import RentCampervan from "@/pages/RentCampervan";
import NotFound from "@/pages/NotFound";
import BookCampsite from "@/pages/BookCampsite";
import CampsiteDetails from "@/pages/CampsiteDetails";
import Booking from "@/pages/Booking";
import SearchResults from "@/pages/SearchResults";
import BookMotorhome from "@/pages/BookMotorhome";
import CampervanSummary from "@/pages/CampervanSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/manage-trip" element={<ManageTrip />} />
        <Route path="/rent-campervan" element={<RentCampervan />} />
        <Route path="/book-campsite" element={<BookCampsite />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/campsite/:id" element={<CampsiteDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/book-motorhome" element={<BookMotorhome />} />
        <Route path="/campervan-summary" element={<CampervanSummary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;