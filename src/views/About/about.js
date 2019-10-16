import React from 'react';
import Jumbotron from "../../components/jumbotron/jumbotron";
import './about.scss';

export default () => {
  return (
<>
    <Jumbotron title="About" />
    <div className="container introCopy">
        <div className="row">
            <div className="col-12">
                <p>This webpage is being hosted on a Digital Ocean droplet and is built using the following open source technologies:</p>
                    <p><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></p>
                    <p><a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a></p>
                    <p><a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a></p>
                    <p>My <a href="/blog">blog</a> is powered by vue.js + directus REST api. 
                    Check out the source code <a href="https://github.com/edward-ganuelas/directus-client" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    <p>Check out Indeed Prime. Here is my referal <a href="https://prime.indeed.com/refer/c-LFgl4du" target="_blank" rel="noopener noreferrer">link</a></p>
            </div>
        </div>
    </div>
</>
  );
}
