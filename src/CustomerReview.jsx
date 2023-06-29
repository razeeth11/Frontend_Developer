export function CustomerReview() {
  return (
    <div className="customer-review">
      <div className="content-review">
        <h1>Review from customers</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
      </div>
      <div className="customer-review-comp">
        <CustomerReviewComponent />
        <CustomerReviewComponent />
        <CustomerReviewComponent />
        <CustomerReviewComponent />
        <CustomerReviewComponent />
        <CustomerReviewComponent />
      </div>
    </div>
  );
}
function CustomerReviewComponent() {
  return (
    <div className="review-component">
      <div className="first">
        <div className="img-comp">
          <img src="public/images/lolla-1.png" alt="" width="50px" />
        </div>
        <div className="customer-name">
          <p className="customer-review-name">Lolla Smith</p>
          <p>Microsoft</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <div className="customer-reviews">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make{" "}
        </p>
      </div>
    </div>
  );
}
