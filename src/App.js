import React from 'react';
import NavBar from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron";
import Footer from "./components/footer/footer";
import './App.scss';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Jumbotron title="EightRayedSun" />
        <div className="wrapper"></div>

        <Footer />
    </div>
  );
}

export default App;
