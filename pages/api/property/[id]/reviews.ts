// pages/api/properties/[id]/reviews.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Review } from "@/interfaces";

const reviewsData: Record<string, Review[]> = {
  "1": [
    {
      id: 1,
      user: "John Doe",
      avatar: "/reviews/review-1.png",
      date: "2024-09-21",
      rating: 5,
      comment: "Absolutely loved the stay! The villa was spotless and peaceful.",
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "/reviews/review-2.png",
      date: "2024-09-18",
      rating: 4,
      comment: "Great location and view. Just wished Wi-Fi was faster.",
    },
  ],
  "2": [
    {
      id: 3,
      user: "Michael Johnson",
      avatar: "/reviews/review-3.png",
      date: "2024-09-15",
      rating: 5,
      comment: "A perfect vacation spot. Highly recommended!",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    const reviews = reviewsData[id as string] || [];
    return res.status(200).json(reviews);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
