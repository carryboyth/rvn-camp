
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ManageTrip = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-bold">Plan Your Adventure</h1>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Campervan",
                image: "/lovable-uploads/3e1b13b0-4b5b-4eec-85e7-d9d8ff30e668.png",
                link: "/rent-campervan",
                description: "Perfect campervan for your journey!",
              },
              {
                title: "Campsite",
                image: "/lovable-uploads/e0b94fa6-244f-45da-a2ec-cadf28c5ce17.png",
                link: "/book-campsite",
                description: "Find the perfect spot to park and camp",
              },
              {
                title: "Campervan and Campsite",
                image: "/lovable-uploads/63ef8743-4447-423d-9522-4c57fe057b48.png",
                link: "/book-motorhome",
                description: "Plan your ultimate road trip with ease",
              },
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden">
                {index === 2 ? (
                  <Link to={item.link} className="block">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                      <p className="mb-4 text-muted-foreground">{item.description}</p>
                      <Button className="w-full">Book Now</Button>
                    </CardContent>
                  </Link>
                ) : (
                  <div 
                    className="block cursor-pointer"
                    onClick={() => window.open(
                      index === 0 
                        ? 'https://preview--camp-vista-filters-25.lovable.app/' 
                        : 'https://lovable.dev/projects/9a02ea7c-ff63-40ad-b29b-e149dfb117ed', 
                      '_blank'
                    )}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                      <p className="mb-4 text-muted-foreground">{item.description}</p>
                      <Button className="w-full">Book Now</Button>
                    </CardContent>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageTrip;
