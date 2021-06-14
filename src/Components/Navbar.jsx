import React ,{useEffect} from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';


const Navbar =()=> {
   

      function animation() {
      var tabNewAnim = $('#navbarSupportedContent');
      var activeItemNewAnim= tabNewAnim.find('.active');
      var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      var itemPosNewAnimTop = activeItemNewAnim.position();
      var itemPosNewAnimLeft = activeItemNewAnim.position();

      $(".hori-selector").css({
         "top":itemPosNewAnimTop.top+"px",
         "left":itemPosNewAnimLeft.left+"px",
         "height":activeWidthNewAnimHeight +"px",
         "width":activeWidthNewAnimWidth+"px"
      });
      $("#navbarSupportedContent").on("click","li",function(e){
         $('#navbarSupportedContent ul li').removeClass("active");
         $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();

          $(".hori-selector").css({
         "top":itemPosNewAnimTop.top +"px",
         "left":itemPosNewAnimLeft.left +"px",
         "height":activeWidthNewAnimHeight +"px",
         "width":activeWidthNewAnimWidth+"px"
          });
      });
   }

   useEffect( () =>{
      animation();
      $(window).on('resize',function(){
        setTimeout(function(){
           animation();
        },500)
      });
   },[])


        return (
         <nav className="navbar navbar-expand-lg navbar-mainbg ">
           <div className="container-fluid">
           <button className="navbar-toggler"
            type="button"
            onClick={function(){
              setTimeout(function(){
               animation();
            })}}
            data-toggle="collapse"
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i>
               </span>
            </button>

               
          <div className="collapse navbar-collapse float-left" id="navbarSupportedContent">

               <ul className="navbar-nav ml-auto">
                  <div className="hori-selector">
                    <div className="right"></div>
                     <div className="left"></div> 
                  </div> 
                  <li className="nav-item active">
                     <NavLink to='/' className="nav-link">
                         الرئيسية
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/about' className="nav-link" >
                         معلومات عنا
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/dishes' className="nav-link">
                         Menu
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/testimonials' className="nav-link">
                         أراء العملاء
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to='/contact' className="nav-link">
                         تواصل معنا
                     </NavLink>
                  </li>
               </ul> 
            </div>
            <NavLink to="/" className="navbar-logo navbar-brand ">
                BAZOOKA  
               </NavLink>
            </div>
         </nav>
          );
   
}
 
export default Navbar;