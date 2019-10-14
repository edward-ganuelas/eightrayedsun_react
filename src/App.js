import React from 'react';
import NavBar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import './App.scss';

function App() {
  return (
    <div className="App">
        {/* <NavBar /> */}
        <Jumbotron title="EightRayedSun" />
    </div>
  );
}

export default App;
