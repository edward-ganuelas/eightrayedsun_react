import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './footer.scss';

export default () => {
  return (
    <footer className="container-fluid end">
        <Router>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>EightRayedSun</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            {/* <li><a href="/blog">Blog</a></li> */}
                            <li><Link href="/about">About</Link></li>
                        </ul>
                        <p>Email me at <a href="mailto:epganuelas@gmail.com">epganuelas@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </Router>
    </footer>
  );
}
