import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="container-fluid end">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h4>EightRayedSun</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        {/* <li><a href="/blog">Blog</a></li> */}
                        <li><a href="/about">About</a></li>
                    </ul>
                    <p>Email me at <a href="mailto:epganuelas@gmail.com">epganuelas@gmail.com</a></p>
                </div>
            </div>
        </div>

    </footer>
  );
}

export default Footer;
