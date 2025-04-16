import React from "react";
import "./Carousel.css";

export const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide m-2" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="carousel/image1.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="carousel/image2.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="carousel/image3.png" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <i class="fa fa-arrow-left fs-3" aria-hidden="true"></i>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <i class="fa fa-arrow-right fs-3" aria-hidden="true"></i>
        <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

