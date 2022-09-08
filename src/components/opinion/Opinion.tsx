import "./opinion.css";
import { Ireview } from "./opinionInterface";

export const Opinion = (review: Ireview) => {
  return (
    <>
      <div className="review-container glass-effect">
        <h5>{review.review.reviewtext}</h5>
      </div>
    </>
  );
};
