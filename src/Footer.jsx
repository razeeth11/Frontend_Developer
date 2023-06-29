export function Footer() {
  return (
    <div className="footer">
      <div className="footer-one">
        <div className="footer-content">
          <h1>We have what you’re looking for</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            a
          </p>
        </div>
        <button className="footer-button">Get Started Now</button>
      </div>
      <FooterNav />
    </div>
  );
}
function FooterNav() {
  return (
    <div className="footer-nav">
      <p>All Right Reserved @Copyright 2023</p>
      <div className="policy">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Product</p>
      </div>
      <div className="social">
        <img src="src/images/mdi_facebook.svg" alt="" />
        <img src="src/images/uil_youtube.svg" alt="" />
        <img src="public/images/basil-instagram-solid.svg" alt="" />
        <img src="public/images/uil-twitter.svg" alt="" />
      </div>
    </div>
  );
}
