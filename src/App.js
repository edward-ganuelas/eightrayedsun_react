import React from 'react';
import NavBar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Home from "./views/Home/home";
import About from "./views/About/about";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Jumbotron title="EightRayedSun" />
        <div className="wrapper">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </div>
        <Footer />
    </div>
  );
}

export default App;
