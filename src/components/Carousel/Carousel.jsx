import React from "react";
import "./Carousel.css";

export const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide m-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="carousel/image1.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="carousel/image2.png" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="carousel/image3.png" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <i className="fa fa-arrow-left fs-3" aria-hidden="true"></i>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <i className="fa fa-arrow-right fs-3" aria-hidden="true"></i>
        <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};

