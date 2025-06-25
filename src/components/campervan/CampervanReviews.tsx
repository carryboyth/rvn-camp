
import React from "react";
import { Star, ThumbsUp } from "lucide-react";

interface CampervanReviewsProps {
  campervan: {
    rating: number;
    reviewCount: number;
  };
}

const mockReviews = [
  {
    id: 1,
    author: "Sarah & Mike",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    rating: 5,
    date: "September 2024",
    text: "Amazing adventure! The campervan was clean, well-equipped, and perfect for our week-long road trip through the national parks. The solar panel kept us powered up even in remote locations.",
    helpful: 15,
    trip: "7-day trip • Couple"
  },
  {
    id: 2,
    author: "The Johnson Family",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    rating: 5,
    date: "August 2024",
    text: "Perfect for our family camping trip! Kids loved the bunk beds and the kitchenette made meal prep so easy. Great communication from the owner and pickup was seamless.",
    helpful: 12,
    trip: "5-day trip • Family with kids"
  },
  {
    id: 3,
    author: "Adventure_Alex",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    rating: 4,
    date: "July 2024",
    text: "Solid van with everything you need for outdoor adventures. Great fuel efficiency and easy to drive. Only minor issue was the shower pressure could be better, but overall excellent experience.",
    helpful: 8,
    trip: "10-day trip • Solo traveler"
  }
];

export const CampervanReviews = ({ campervan }: CampervanReviewsProps) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          <span className="text-2xl font-bold text-green-800">{campervan.rating}</span>
        </div>
        <div>
          <p className="font-medium text-green-800">{campervan.reviewCount} reviews</p>
          <p className="text-sm text-green-600">From verified renters</p>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-2 mb-6">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-3">
            <span className="text-sm w-3 text-green-700">{rating}</span>
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <div className="flex-1 bg-green-100 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" 
                style={{ width: `${rating === 5 ? 78 : rating === 4 ? 15 : 4}%` }}
              />
            </div>
            <span className="text-sm text-green-600 w-8">{rating === 5 ? 78 : rating === 4 ? 15 : 4}%</span>
          </div>
        ))}
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b border-green-100 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-green-800">{review.author}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-green-600">{review.date}</span>
                </div>
                <p className="text-sm text-green-600 mb-2">{review.trip}</p>
                <p className="text-green-700 mb-3 leading-relaxed">{review.text}</p>
                <button className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 border-2 border-green-200 rounded-lg text-green-700 hover:bg-green-50 transition-colors font-medium">
        Show all {campervan.reviewCount} reviews
      </button>
    </div>
  );
};
