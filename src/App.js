import React from 'react';
import NavBar from "./components/navbar/navbar";
import Home from "./views/Home/home";
import About from "./views/About/about";
import Blog from "./views/Blog/blog";
import Footer from "./components/footer/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App" id="App">
        <Router>
            <NavBar />
            <div className="wrapper" id="wrapper">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>
                </Switch>
            </div>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
