import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/footer';
import MyCv from './components/MyCv';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';


function App() {
return (
  <div className="App">
    <Router>
    <NavBar></NavBar>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Projects" component={Projects}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/MyCv" component={MyCv}></Route>
      <Route path="/Hobbies" component={Hobbies}></Route>
    </Switch>
    <Footer></Footer>
    </Router>
  </div>
  
  );
} 


export default App;
