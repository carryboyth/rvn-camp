import React from "react";
import CampsiteList from "@/components/CampsiteList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SearchResults = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Available Campsites</h1>
          <p className="text-muted-foreground mb-8">
            Showing {mockCampsites.length} results for your search
          </p>
          <CampsiteList campsites={mockCampsites} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;