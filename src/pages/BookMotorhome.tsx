
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchForm from "@/components/motorhome/SearchForm";

const BookMotorhome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            Your entire holiday in one click!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Book Motorhome + Hotel
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-12">
        <SearchForm />
      </div>

      <Footer />
    </div>
  );
};

export default BookMotorhome;
