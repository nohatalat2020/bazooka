import React, { Component } from 'react';
import Hero from '../Components/HeroSection';
import Jumbtron from '../Components/Jumbtron';
import Footer from '../Components/Footer';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
    <div>
        <Jumbtron/> 
        <Hero/>
        <Footer/>
        </div>
         );
    }
}
 
export default Home;