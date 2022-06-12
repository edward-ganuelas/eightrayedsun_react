import React from 'react';
import NavBar from "./components/navbar/navbar";
import Home from "./views/Home/home";
import About from "./views/About/about";
import Blog from "./views/Blog/blog";
import Footer from "./components/footer/footer";
import BlogPost from './components/blog/blogPost/blogPost';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.scss';

function App() {
    return (
        <div className="App" id="App">
            <Router>
                <NavBar />
                <div className="wrapper" id="wrapper">
                    <Routes>
                        <Route path="/" element={ <Home />} />
                        <Route path="about" element={ <About /> } />
                        <Route path="blog/*" element= {<Blog />}>
                            <Route path=":id" element={ <BlogPost />} />
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
