import { MapPin, Calendar, Key, Users } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose Your Destination",
    description: "Select from our curated list of Thailand's most beautiful locations",
  },
  {
    icon: Calendar,
    title: "Plan Your Trip",
    description: "Use our tools to create the perfect itinerary for your adventure",
  },
  {
    icon: Key,
    title: "Book Your Campervan",
    description: "Select from our fleet of fully-equipped campervans",
  },
  {
    icon: Users,
    title: "Share & Enjoy",
    description: "Invite friends to join and make memories together",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;