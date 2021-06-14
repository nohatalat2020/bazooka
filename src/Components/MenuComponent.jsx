import React, { Component } from 'react';
import './MenuComponent.css';
import {DISHES} from './menu';
import {Card,CardBody,CardImg,CardTitle,CardSubtitle} from 'reactstrap'


class Menu  extends Component {
    
    constructor(props){
        super(props);

        this.state = { 
           dishes:DISHES
     }
    }


    render() { 
        const dishRender = this.state.dishes.map((dish)=>{
           return ( 
                
                  
                <Card className="col-md-5 ml-4  mr-4 col-sm-12 image" key={dish.id}>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody className="details">
                    <CardTitle>{dish.name}</CardTitle>
                   <CardSubtitle>{dish.price}</CardSubtitle>
                   
                    </CardBody>
                </Card>
        );
        });


        return(
            <div className="container">
                    <div className="row ">
            
                      {dishRender}
                    </div>
            </div>
        );
        
    }
}
 
export default Menu ;