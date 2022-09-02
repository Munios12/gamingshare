import "./opinion.css";

export const Opinion = (review: any) => {
  return (
    <>
      {/* <h5>{review.review.reviewtext}</h5>; */}
      <div className="review-container glass-effect">
        <h5>{review.review.reviewtext}</h5>
      </div>
    </>
  );
};
