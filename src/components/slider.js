import "./slider.css";

function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://codedesign.org/storage/app/media/uploaded-files/how-to-choose-the-right-e-commerce-agency.jpeg"
              className="d-block w-100 height-300"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/04165947/EC_Retail_ECommerce_750.jpg"
              className="d-block w-100 height-300"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://co-well.vn/wp-content/uploads/2019/10/best-payment-gateway-for-eCommerce-website-Top-payment-gateway-for-eCommerce-website-1200x450-1024x384.png"
              className="d-block w-100 height-300"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
