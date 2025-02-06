
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
import Contact from "@/pages/Contact";
import MotorhomeResults from "@/pages/MotorhomeResults";
import SearchHotels from "@/pages/SearchHotels";
import BookingSummary from "@/pages/BookingSummary";
import CustomerDetails from "@/pages/CustomerDetails";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Profile from "@/pages/Profile";
import Download from "@/pages/Download";

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
        <Route path="/motorhome-results" element={<MotorhomeResults />} />
        <Route path="/campervan-summary" element={<CampervanSummary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search-hotels" element={<SearchHotels />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
