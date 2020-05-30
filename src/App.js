import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

//pages/components
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Listen from "./components/Listen"
import Genres from "./components/Genres"
import Video from "./components/Video"
import Footer from "./components/Footer"



class App extends Component{
 
render(){
  return(
   
    <HashRouter>
      <Route path='/' component={Navbar}/>
      <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/listen' component={Listen}/>
      <Route exact path='/listen/:id' component={Video}/>
      <Route exact path='/genres' component={Genres}/> 
      </Switch>
      <Route path='/' component={Footer}/>
     </HashRouter>
      
    
 
  )
}

}

export default App;