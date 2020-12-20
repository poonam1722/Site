import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './component/Navbar';
import Part1 from './component/Part1'
import Part2 from './component/Part2';
import Part3 from './component/Part3'
import Part4 from './component/Part4';
import Part5 from './component/Part5';
import Footer from './component/Footer';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" />
        <Route exact path="/about"  />
        <Route exact path="/project"  />
        <Route exact path="/contact" />
        <Redirect to="/" />
        <Navbar />
      </Router>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Footer/>
    </>
  );
}

export default App;
