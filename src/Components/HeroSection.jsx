import React from 'react';
import './HeroSection.css';

const Hero = () => {
    return ( 
         <div className="container">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
  <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="././imgs/03.jpg" className="d-block w-100  " alt="image 1"/>
        </div>
        <div className="carousel-item">
        <img src="././imgs/02.jpg" className="d-block w-100" alt="image 2"/>
        </div>
        <div className="carousel-item">
        <img src="././imgs/01.jpg" className="d-block w-100 " alt="image 3"/>
        </div>
        <div className="carousel-item">
        <img src="././imgs/04.jpg" className="d-block w-100 " alt="image 4"/>
        </div>
        <div className="carousel-item">
        <img src="././imgs/05.jpg" className="d-block w-100" alt="image 5"/>
        </div>
  </div>
  <a className="carousel-control-prev d-lg-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next d-lg-none" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>

     );
}
 
export default Hero;