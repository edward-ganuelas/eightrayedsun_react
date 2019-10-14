import React from 'react';
import './navbar.scss';

function App() {
  return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1><a className="navbar-brand" href="#">EightRayedSun</a></h1>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="nav-item" href="/">Home</a></li>
                            <li><a href="/documents/Edward_Ganuelas_Resume_05_22_2018.pdf" className="nav-item" target="_blank">Resume</a></li>
                            <li><a href="https://blog.eightrayedsun.com/" className="nav-item">Blog</a></li>
                            <li><a href="https://ca.linkedin.com/in/epganuelas" className="nav-item" target="_blank">LinkedIn</a></li>
                            <li><a href="http://pokedex.eightrayedsun.com" className="nav-item" target="_blank">Pokedex Project</a></li>
                            <li><a href="/about" className="nav-item">About</a></li>
                            <li><a className="button is-primary is-inverted" href="https://www.github.com/edward-ganuelas" target="_blank">
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
            </nav>
  );
}

export default App;
