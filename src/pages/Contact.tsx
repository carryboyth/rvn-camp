
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import CompanyInformation from "@/components/contact/CompanyInformation";
import LocationMap from "@/components/contact/LocationMap";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="w-full h-[400px] relative">
        <img
          src="/lovable-uploads/e057b8ac-7c8d-49ec-93ab-fce4ba591922.png"
          alt="RVN Camp Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch with Us</h1>
          <p className="text-muted-foreground">
            We're here to help! Contact us for inquiries, bookings, or any assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <CompanyInformation />
          <ContactForm />
        </div>

        <LocationMap />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
