import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './navbar.scss';

export default () => {
  return (
<>
<Menu right  pageWrapId={ "wrapper" } outerContainerId={ "App" }>
    <Link to="/" className="menu-item">Home</Link>
    <a href="/documents/Edward_Ganuelas_Resume_05_22_2018.pdf" className="menu-item" target="_blank" rel="noopener noreferrer">Resume</a>
    <a href="https://blog.eightrayedsun.com/" className="menu-item">Blog</a>
    <a href="https://ca.linkedin.com/in/epganuelas" className="menu-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="http://pokedex.eightrayedsun.com" className="menu-item" target="_blank" rel="noopener noreferrer">Pokedex Project</a>
    <Link to="/about" className="menu-item">About</Link>
    <a className="button is-primary is-inverted menu-item" href="https://www.github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer">
        <span className="icon">
            <i className="fa fa-github"></i>
        </span>
        <span>
        Github
        </span>
    </a>
</Menu>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
    </div>
</nav>
</>
  );
}

