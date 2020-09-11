import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
render() {
return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-center" type="button" data-toggle="dropdown" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-angle-down"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <Link to='/'>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Home</a>
              </li>
            </Link>
            <Link to='/Projects'>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Projects</a>
              </li>
            </Link>
            <Link to='/Hobbies'>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Hobbies</a>
              </li>
            </Link>
            <Link to='/MyCv'>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">My CV</a>
              </li>
            </Link>
            <Link to="/Contact">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
        )
    }
}
