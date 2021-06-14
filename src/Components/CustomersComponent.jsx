import React, { Component } from 'react';
import './CustomersComponent.css';
import Review from './ReviewComponent';

class Customers extends Component {

   

    render() {
      return ( 
  <div className="container">
    <div className="test-intro">
    <h2> جولة مع أراء عملائنا الكرام ....</h2>
    <p>حبينا نشرك مع عملائنا لحظتهم الحلوة الى قضوها معنا فى بازوكا
 وحبينا نعملهم البوم خاص بذكرياتهم معانا ونعرض بعض أراهم فى مطعمنا وخدمتنا يارب دايما نكون عند حسن ظنكم فينا</p>
    </div>
 <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active d-none d-lg-block"/>
    <li data-target="#carouselExampleCaptions" data-slide-to="1" className="d-none d-lg-block"/>
    <li data-target="#carouselExampleCaptions" data-slide-to="2" className="d-none d-lg-block"/>
    <li data-target="#carouselExampleCaptions" data-slide-to="3" className="d-none d-lg-block" />
    <li data-target="#carouselExampleCaptions" data-slide-to="4" className="d-none d-lg-block"/>
    <li data-target="#carouselExampleCaptions" data-slide-to="5" className="d-none d-lg-block"/>
    <li data-target="#carouselExampleCaptions" data-slide-to="6" className="d-none d-lg-block"/>
    <li data-target="#carouselExampleCaptions" data-slide-to="7" className="d-none d-lg-block"/>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="././imgs/test01.jpg" className="d-block w-100" alt="testimonial 01"/>
      <div className="carousel-caption  d-md-block">
        <p>أحلى خروجة أصحاب فى بازوكا </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test02.jpg" className="d-block w-100" alt="testimonial 02"/>
      <div className="carousel-caption  d-md-block">
        <p>أحلى  يوم قضيناه فى بازوكا والاولاد أنبسطوا كتير</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test03.jpg" className="d-block w-100" alt="testimonial 03"/>
      <div className="carousel-caption  d-md-block">
        <p>أحلى أصحاب فى بازوكا متقابلين</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test04.jpg" className="d-block w-100" alt="testimonial 04"/>
      <div className="carousel-caption d-md-block">
        <p>العائلة كلها أنبسطت  كبار وصغار والخدمة ممتازة</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test05.jpg" className="d-block w-100" alt="testimonial 05"/>
      <div className="carousel-caption  d-md-block">
        <p>أحلى يوم قضيته مع صحبى وان شاء الله نكرره تانى</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test06.jpg" className="d-block w-100" alt="testimonial 06"/>
      <div className="carousel-caption  d-md-block">
        <p>يوم جميل لاحلى أصحاب وعائلة</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test07.jpg" className="d-block w-100" alt="testimonial 07"/>
      <div className="carousel-caption  d-md-block">
        <p>رحلة جميلة وقفنا فى بازوكا كان يوم رائع مايتنسيش</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="././imgs/test08.jpg" className="d-block w-100" alt="testimonial 08"/>
      <div className="carousel-caption  d-md-block">
        <p>كل سنة وانت طيب ياصحبى أنبسطنا فى بازوكا عقبال كل سنة</p>
      </div>
    </div>
  
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  </div> 

  
   <Review/>
   
   </div>        
        );
      }
    }
        
 export default Customers;