import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';


const Footer = ()=> {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2 links">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><NavLink to="/">الرئيسية</NavLink></li>
                        <li><NavLink to="/about">معلومات عنا</NavLink></li>
                        <li><NavLink to="/dishes">Menu</NavLink></li>
                        <li><NavLink to="/contact">تواصل معنا</NavLink></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 address">
                    <h5>Our Address</h5>
                    <address>
		           طنطا : شارع الجيش اسفل مبنى دلتا سيتى مول<br/> 
                     فروعنا:
( مصر الجديده -  مدينه نصر - المعادى - المقطم - فيصل - التجمع الخامس - شبرا - العبور - الشيخ زايد - طنطا ) 
		              <br/>
		              <a href="mailto:bazooka@food.net">
                         bazooka@food.net</a>
                    </address>
                </div>
                 <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Bazookaegy"><i className="fa fa-facebook"></i></a>
                          <a href="https://play.google.com/store/apps/details?id=com.bazooka.bazooka&fbclid=IwAR1ND6DNwZpw3zhwWdzEdSIFOQuwnsCQt8iqCHzocLOJRqa3p9zpwAk5mRc">
                               <img src="././imgs/google play.png" width="200"height="70"/></a>
                    </div>
                </div>
               
            </div>
            <div className="row justify-content-center copyright">             
                <div className="col-auto">
                    <p>Bazooka Taste of Happiness © 2021</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;