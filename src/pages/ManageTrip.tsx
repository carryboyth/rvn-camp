
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ManageTrip = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setIsLoggedIn(true);
  };

  const LoginForm = () => (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Manage Your Trip</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-between text-sm">
              <a href="#" className="text-primary hover:underline">
                Forgot Password?
              </a>
              <a href="#" className="text-primary hover:underline">
                Sign Up
              </a>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button">
                <Mail className="mr-2 h-4 w-4" /> Google
              </Button>
              <Button variant="outline" type="button">
                <Facebook className="mr-2 h-4 w-4" /> Facebook
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

  const TripDashboard = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Plan Your Adventure</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Rent a Campervan",
            image: "/lovable-uploads/3e1b13b0-4b5b-4eec-85e7-d9d8ff30e668.png",
            link: "/rent-campervan",
            description: "Choose from our fleet of modern campervans",
          },
          {
            title: "Book a Campsite",
            image: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
            link: "/book-campsite",
            description: "Find the perfect spot to park and camp",
          },
          {
            title: "Campervan + Accommodation Package",
            image: "/lovable-uploads/b7d87dfa-8531-459d-aa23-7eeb6c5fae70.png",
            link: "/book-motorhome",
            description: "Get the best of both worlds with our combined packages",
          },
        ].map((item, index) => (
          <Card key={index} className="group overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mb-4 text-muted-foreground">{item.description}</p>
              <Link to={item.link}>
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {isLoggedIn ? <TripDashboard /> : <LoginForm />}
      </main>
      <Footer />
    </div>
  );
};

export default ManageTrip;
