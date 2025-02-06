import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  // Mock data - replace with actual user data later
  const user = {
    name: "John Doe",
    email: "john@example.com",
    savedPlans: [
      {
        id: 1,
        title: "Weekend Camping Trip",
        date: "2024-04-15",
      },
      {
        id: 2,
        title: "Summer RV Adventure",
        date: "2024-07-01",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name:</span> {user.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Saved Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.savedPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex justify-between items-center p-4 border rounded-lg hover:bg-accent cursor-pointer"
                  >
                    <div>
                      <h3 className="font-medium">{plan.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;