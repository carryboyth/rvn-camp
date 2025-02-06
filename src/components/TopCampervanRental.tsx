
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const campervans = [
  {
    id: 1,
    name: "Hilux Revo Motorhome",
    image: "/lovable-uploads/c1762e4a-0c04-42c9-bb90-72efea7f0c35.png",
    price: "฿3,500",
    description: "4 ที่นั่ง พร้อมห้องน้ำและห้องครัว",
  },
  {
    id: 2,
    name: "Hilux Champ Motorhome",
    image: "/lovable-uploads/1b98df29-031c-453f-8985-bf9ab03b53a6.png",
    price: "฿4,200",
    description: "6 ที่นั่ง ห้องน้ำ ครัว และระบบโซลาร์เซลล์",
  },
  {
    id: 3,
    name: "Triton Motorhome",
    image: "/lovable-uploads/39ca8590-7c01-4b61-945b-09c0787d5e19.png",
    price: "฿2,800",
    description: "2 ที่นั่ง พร้อมครัวขนาดเล็ก",
  },
  {
    id: 4,
    name: "Isuzu D-Max Motorhome",
    image: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
    price: "฿3,800",
    description: "4 ที่นั่ง พร้อมห้องน้ำและทีวี",
  },
];

const TopCampervanRental = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Top Campervan Rental</h2>
        <p className="text-muted-foreground text-center mb-12">รถบ้านให้เช่ายอดนิยม</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campervans.map((van) => (
            <Card key={van.id} className="group overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={van.image}
                  alt={van.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-1">{van.name}</h3>
                <p className="text-primary font-medium mb-2">{van.price} / วัน</p>
                <p className="text-muted-foreground text-sm mb-4">{van.description}</p>
                <Link to="/rent-campervan">
                  <Button className="w-full">จองเลย</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCampervanRental;
