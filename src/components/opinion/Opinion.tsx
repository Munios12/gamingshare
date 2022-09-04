import "./opinion.css";

export const Opinion = (review: any) => {
  return (
    <>
      <div className="review-container glass-effect">
        <h5>{review.review.reviewtext}</h5>
      </div>
    </>
  );
};
