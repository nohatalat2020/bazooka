import React, { Component } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Dishes from './Pages/Dishes';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import {BrowserRouter , Route,Redirect,Switch,useLocation} from 'react-router-dom'

class App extends Component {
 
 constructor(props){
   super(props);
   
 }

  render() { 

    return ( 
 <BrowserRouter >
     <Navbar/>
     
     <Switch>
            <Route exact path="/" component={ Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/dishes" component={ Dishes}/>
            <Route  path="/testimonials" component={ Testimonials}/>
            <Route  path="/contact" component={Contact}/>
            <Redirect to="/"/>
      </Switch>
    
</BrowserRouter>
     );
  }
}
 
export default App;