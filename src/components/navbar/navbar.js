import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './navbar.scss';

export default () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Router>
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand">
                    <img src="/images/logo.svg" width="30px" height="30px" alt="EightRayedSun" />
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><a href="/documents/Edward_Ganuelas_Resume_05_22_2018.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
                        <li className="nav-item"><a href="https://blog.eightrayedsun.com/" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="https://ca.linkedin.com/in/epganuelas" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li className="nav-item"><a href="http://pokedex.eightrayedsun.com" className="nav-link" target="_blank" rel="noopener noreferrer">Pokedex Project</a></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><a className="button is-primary is-inverted nav-link" href="https://www.github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer">
                                <span className="icon">
                                    <i className="fa fa-github"></i>
                                </span>
                                <span>
                                Github
                                </span>
                            </a>
                        </li>
                    </ul>
            </div>
        </div>
    </Router>
</nav>
  );
}

