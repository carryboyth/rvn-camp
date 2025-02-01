import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Campsite {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface CampsiteListProps {
  campsites: Campsite[];
}

const CampsiteList = ({ campsites }: CampsiteListProps) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {campsites.map((campsite) => (
        <Card key={campsite.id} className="overflow-hidden animate-fade-up">
          <img
            src={campsite.image}
            alt={campsite.name}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{campsite.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {campsite.description}
            </p>
            <div className="flex items-center justify-between">
              <p className="font-bold">
                ฿{campsite.price.toLocaleString()}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  / night
                </span>
              </p>
              <Button
                onClick={() => navigate(`/campsite/${campsite.id}`)}
                variant="secondary"
              >
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CampsiteList;