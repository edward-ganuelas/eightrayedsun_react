import React from 'react';
import { Link } from "react-router-dom";
import './footer.scss';

const footer = () => {
    return (
        <footer className="container-fluid end">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>EightRayedSun</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            {/* <li><a href="/blog">Blog</a></li> */}
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <p>Email me at <a href="mailto:epganuelas@gmail.com">epganuelas@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default footer;