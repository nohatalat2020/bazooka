import React, { Component } from 'react';
import Menu from '../Components/MenuComponent';
import Jumbtron from '../Components/Jumbtron';


class Dishes extends Component {
    state = {  }
    render() { 
        return ( 
            <div> 
                
                <Menu/>

                <Jumbtron/>

            
            </div>
         );
    }
}
 
export default Dishes;