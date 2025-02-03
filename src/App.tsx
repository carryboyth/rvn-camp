import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BookCampsite from "./pages/BookCampsite";
import CampsiteDetails from "./pages/CampsiteDetails";
import SearchResults from "./pages/SearchResults";
import ManageTrip from "./pages/ManageTrip";
import RentCampervan from "./pages/RentCampervan";
import BookMotorhome from "./pages/BookMotorhome";
import MotorhomeSummary from "./pages/MotorhomeSummary";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/book-campsite" element={<BookCampsite />} />
        <Route path="/campsite/:id" element={<CampsiteDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/manage-trip" element={<ManageTrip />} />
        <Route path="/rent-campervan" element={<RentCampervan />} />
        <Route path="/book-motorhome" element={<BookMotorhome />} />
        <Route path="/motorhome-summary" element={<MotorhomeSummary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;