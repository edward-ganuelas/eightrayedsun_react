import React from 'react';
import './navbar.scss';

function App() {
  return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                       <a className="navbar-brand" href="#">
                            <img src="/images/logo.svg" width="30px" height="30px" alt="EightRayedSun" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="/documents/Edward_Ganuelas_Resume_05_22_2018.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
                            <li className="nav-item"><a href="https://blog.eightrayedsun.com/" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="https://ca.linkedin.com/in/epganuelas" className="nav-link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li className="nav-item"><a href="http://pokedex.eightrayedsun.com" className="nav-link" target="_blank" rel="noopener noreferrer">Pokedex Project</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
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
            </nav>
  );
}

export default App;
