
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp } from "lucide-react";

interface CampsiteReviewsProps {
  campsite: {
    rating: number;
    reviewCount: number;
  };
}

const mockReviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    country: "United States",
    date: "March 2024",
    rating: 5,
    comment: "Amazing campsite with stunning views! The facilities were clean and the host was very helpful. Perfect for a peaceful getaway.",
    helpful: 12
  },
  {
    id: 2,
    author: "Marco Silva",
    avatar: "/lovable-uploads/e4ce7067-7522-45d6-82c0-56a7fb4d8543.png",
    country: "Brazil",
    date: "February 2024",
    rating: 4,
    comment: "Great location for hiking and stargazing. Quiet and well-maintained. Would definitely come back!",
    helpful: 8
  },
  {
    id: 3,
    author: "Emily Chen",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    country: "Canada",
    date: "January 2024",
    rating: 5,
    comment: "Perfect for digital nomads. Good WiFi, peaceful environment, and beautiful nature all around.",
    helpful: 15
  }
];

export const CampsiteReviews = ({ campsite }: CampsiteReviewsProps) => {
  return (
    <div className="bg-white rounded-lg p-6 border">
      {/* Review Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Guest reviews</h2>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-semibold">{campsite.rating}</span>
            <span className="text-gray-600">• {campsite.reviewCount} reviews</span>
          </div>
        </div>
        <Button variant="outline">Write a review</Button>
      </div>

      {/* Rating Categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { category: "Cleanliness", score: 4.8 },
          { category: "Location", score: 4.9 },
          { category: "Value", score: 4.7 },
          { category: "Facilities", score: 4.6 },
          { category: "Communication", score: 4.9 },
          { category: "Check-in", score: 4.8 }
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{item.category}</span>
            <div className="flex items-center gap-1">
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-blue-600 rounded-full" 
                  style={{ width: `${(item.score / 5) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium ml-2">{item.score}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-sm text-gray-500">• {review.country}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="h-4 w-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-6">
        Show all {campsite.reviewCount} reviews
      </Button>
    </div>
  );
};
