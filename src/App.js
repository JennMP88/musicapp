import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//pages/components
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Listen from "./components/listen/Listen";
import Genres from "./components/genres/Genres";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/videoplayer/videoplayer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/listen" component={Listen} />
          <Route exact path="/listen/:id" component={VideoPlayer} />
          <Route exact path="/genres" component={Genres} />
        </Switch>
       <Footer/>
      </HashRouter>
    );
  }
}

export default App;
