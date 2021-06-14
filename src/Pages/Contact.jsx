import React, { Component } from 'react';
import Message from '../Components/ContactComponent';
import Footer from '../Components/Footer';


class Contact  extends Component {
    state = {  }
    render() { 
        return (
            <div> 

                <Message/>
                 <Footer/>

            </div>
          );
    }
}
 
export default Contact;