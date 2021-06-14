import React, { Component } from 'react';
import './ReviewComponent.css';
import {COMMENTS} from './comments.js';



class Review extends Component {
    constructor(props){
        super(props);

      this.state={
        comments: COMMENTS
    
       }
   
    }
    
    render() { 
        const commentRender = this.state.comments.map((comment)=>{
            return ( 
         <div className="card review offset-1 col-md-5 col-sm-12" key={comment.id}>  
               <h5 className="text-center"> {comment.author}<span>{comment.date}</span>التقيم :{comment.rating}<span></span></h5>
               <input type="range" className="custom-range" min="0" max={comment.rating}/>
                <p className="card-text text-center">{comment.comment}</p>
            
        </div>
       
        )
       
  
         
  });


    return(
         <div className="container">
             <div className="row">
             {commentRender}
             <div className="card review offset-1 col-md-5 col-sm-12">  
            <textarea ></textarea>
             <input type="range" className="custom-range"/>
            <button className="btn btn-warning text-center" type="submit">اضف تعليق</button>
            
        </div>
             </div>
         </div>
                  
                  
        
    )}
}
 
export default Review;