import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import './navbar.scss';

const navBar = () => {
    return (
            <>
            <Menu right  pageWrapId={ "wrapper" } outerContainerId={ "App" }>
                <Link to="/" className="menu-item">Home</Link>
                <a href="/documents/Edward_Ganuelas_Resume_08_12_2019.pdf" className="menu-item" target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="/blog" className="menu-item">Blog</a>
                <a href="https://ca.linkedin.com/in/epganuelas" className="menu-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="http://pokedex.eightrayedsun.com" className="menu-item" target="_blank" rel="noopener noreferrer">Pokedex Project</a>
                <Link to="/about" className="menu-item">About</Link>
                <a className="button is-primary is-inverted menu-item" href="https://www.github.com/edward-ganuelas" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                    <i className="fab fa-github"></i>
                    </span>
                    <span>
                    Github
                    </span>
                </a>
            </Menu>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/">
                            <img src="/images/eight.svg" width="32px" height="32px" alt="EightRayedSun" />
                        </Link>
                    </div>
                </div>
            </nav>
            </>
    );
};
export default navBar;

