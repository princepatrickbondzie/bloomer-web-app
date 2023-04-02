import React from "react";
import Data from "../../data/Data.json";
import ReviewCard from "../cards/ReviewCard";

export default function Reviews() {
  return (
    <div className="py-2">
      <h3 className="text-2xl ml-4 mb-4">Reviews</h3>
      <div className="py-3 flex overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {Data.reviews.map((review, idx) => (
          <ReviewCard review={review} key={idx} />
        ))}
      </div>
    </div>
  );
}
