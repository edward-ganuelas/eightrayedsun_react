import React from 'react';

function Jumbotron(props) {
  return (
    <div className="container-fluid header section jumbotron">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Jumbotron;
