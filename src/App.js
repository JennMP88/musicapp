import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

//pages/components
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Genres from "./components/Genres"
import Footer from "./components/Footer"



class App extends Component{
 
render(){
  return(
   
    <HashRouter>
      <Route path='/' component={Navbar}/>
      <Switch>
      <Route exact path='/' component={Header}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/genres' component={Genres}/>
      </Switch>
      <Route path='/' component={Footer}/>
     </HashRouter>
      
    
 
  )
}

}

export default App;