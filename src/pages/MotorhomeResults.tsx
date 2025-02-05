import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchResults from "@/components/motorhome/SearchResults";

const MotorhomeResults = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SearchResults />
      </main>
      <Footer />
    </div>
  );
};

export default MotorhomeResults;