
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
import PaymentSummary from "@/pages/PaymentSummary";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Profile from "@/pages/Profile";
import MotorhomeCalculator from "@/pages/MotorhomeCalculator";
import HotelsCalculator from "@/pages/HotelsCalculator";
import PartnerRegistration from "@/pages/PartnerRegistration";
import PartnerLogin from "@/pages/PartnerLogin";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import TravelGuide from "@/pages/TravelGuide";

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
        <Route path="/motorhome-calculator" element={<MotorhomeCalculator />} />
        <Route path="/hotels-calculator" element={<HotelsCalculator />} />
        <Route path="/campervan-summary" element={<CampervanSummary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search-hotels" element={<SearchHotels />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/payment-summary" element={<PaymentSummary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
        <Route path="/partner-registration" element={<PartnerRegistration />} />
        <Route path="/partner-login" element={<PartnerLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
