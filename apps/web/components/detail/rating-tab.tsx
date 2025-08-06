"use client";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Textarea } from "@workspace/ui/components/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export function RatingTab() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Submitted review:", { rating, review });
    // Reset form
    setRating(0);
    setReview("");
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`p-1 rounded-full transition-colors ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              <Star size={32} fill={rating >= star ? "currentColor" : "none"} />
            </button>
          ))}
        </div>
        <Textarea
          placeholder="Chia sẻ cảm nghĩ của bạn về truyện này..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="min-h-[150px]"
        />
        <Button
          type="submit"
          className="w-full"
          onClick={handleSubmitReview}
          disabled={rating === 0 || review.trim() === ""}
        >
          Gửi đánh giá
        </Button>
      </CardContent>
    </Card>
  );
}
