import React, { Component } from 'react';
import Customers from '../Components/CustomersComponent';
import Footer from '../Components/Footer';

class Testimonials extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                <Customers/>
                <Footer/>

            </div>
         );
    }
}
 
export default Testimonials;