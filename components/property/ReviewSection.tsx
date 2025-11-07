"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "@/interfaces";
import Image from "next/image";

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/property/${propertyId}/reviews`);
        setReviews(res.data);
      } catch (err) {
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
          >
            {/* Avatar */}
            <Image
              src={review.avatar}
              alt={review.user}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />

            {/* Review details */}
            <div>
              <h3 className="font-semibold">{review.user}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="mt-2 text-gray-700">{review.comment}</p>
              <p className="text-yellow-500">⭐ {review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
