
import React from "react";
import { Star, ThumbsUp } from "lucide-react";

interface ReviewsSectionProps {
  motorhome: {
    rating: number;
    reviewCount: number;
  };
}

const mockReviews = [
  {
    id: 1,
    author: "สมชาย ใจดี",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    rating: 5,
    date: "มีนาคม 2024",
    text: "รถสะอาดมาก เจ้าของใจดี อุปกรณ์ครบครัน เหมาะสำหรับเดินทางกับครอบครัว ประทับใจมากครับ",
    helpful: 12
  },
  {
    id: 2,
    author: "น้องแนน",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    rating: 5,
    date: "กุมภาพันธ์ 2024",
    text: "ขับง่าย ประหยัดน้ำมัน ที่นอนนุ่มสบาย ครัวใช้ได้จริง จะมาเช่าอีกแน่นอนค่ะ",
    helpful: 8
  },
  {
    id: 3,
    author: "ปิติ นักเดินทาง",
    avatar: "/lovable-uploads/b3b48e94-e287-44ba-807a-e228a1df866a.png",
    rating: 4,
    date: "มกราคม 2024",
    text: "โดยรวมดีมาก แต่เครื่องปรับอากาศเสียงดังนิดหน่อย นอกนั้นไม่มีปัญหาครับ",
    helpful: 5
  }
];

export const ReviewsSection = ({ motorhome }: ReviewsSectionProps) => {
  return (
    <div className="bg-white rounded-lg p-6 border">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
          <span className="text-2xl font-bold">{motorhome.rating}</span>
        </div>
        <div>
          <p className="font-medium">{motorhome.reviewCount} รีวิว</p>
          <p className="text-sm text-gray-600">จากผู้เช่าจริง</p>
        </div>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-2 mb-6">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-3">
            <span className="text-sm w-3">{rating}</span>
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full" 
                style={{ width: `${rating === 5 ? 85 : rating === 4 ? 10 : 3}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 w-8">{rating === 5 ? 85 : rating === 4 ? 10 : 3}%</span>
          </div>
        ))}
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {mockReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium">{review.author}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{review.text}</p>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800">
                  <ThumbsUp className="h-4 w-4" />
                  <span>มีประโยชน์ ({review.helpful})</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
        ดูรีวิวทั้งหมด
      </button>
    </div>
  );
};
