import React, { Component } from 'react'

export default class MyCv extends Component {
render() {
return (
<section className="page-section">

<div class="MainContainer">
  <div class="CvHeading">
      <h1 class="heads">About Me</h1>
      <h2>Tanase Paul Cosmin</h2>
      <h5><i class="fa fa-envelope"></i>paulcosmintanase@gmail.com</h5>
      <h5 id="mobile"><i class="fa fa-mobile"></i>+40755467940</h5>
      <h5><i class="fa fa-map"></i>Cluj-Napoca,Calea Baciului,Jupiter no.4,Ap.18</h5>
  </div>
  <div class="CvStudies">
      <h1 class="heads">Education</h1>
      <h5><i class="fa fa-graduation-cap"></i> 2016-09-present  Technical University of Cluj-Napoca</h5>
        <p>Computer Programming (C)</p>
        <p>Applied Informatics</p>
        <p>Computer Programming - Algorithms (C)</p>
        <p>Graphics on Computer Aided Design (MatLab)</p>
        <p>Computer Aided Design (Orcad)</p>
        <p>Systems with Analog Integrated Circuits</p>
        <p>Microprocessors</p>
        <p>Software Engineering</p>
      <h5><i class="fa fa-graduation-cap"></i>2020-02 - 2020-08  The Informal School of IT – Web Development (JavaScript)</h5>
        <p>Web Concepts: How the web works, Client-Server architecture, protocols</p>
        <p>HTTP: fundamentals about the protocol: methods, status codes, headers, cookies and sessions</p>
        <p>HTML and CSS: how to build a responsive User Interface with semantic HTML elements</p>
        <p>JavaScript: how to use variables, primitive types, functions, hoisting, objects, scope, DOM, AJAX & Promises</p>
        <p>OOP in JavaScript: prototypes, classes and inheritance in JavaScript</p>
        <p>GIT: learned the principles and basic commands</p>
        <p>jQuery: how to include it in a project and how to use it, why it’s helpful, selectors</p>
        <p>React JS: how modern JS applications work, React components, props, state, JSX</p>
      <h5><i class="fa fa-graduation-cap"></i>2015-02 - 2016-06  National College "Vasile Alecsandri" Bacau</h5>
        <p>High School "Diploma de Bacalaureat"</p>
      <h5><i class="fa fa-graduation-cap"></i>2012-09 -2015-02 National College "Ferdinand I" Bacau</h5>
        <p>Studying mathematics and informatics, basic algorithms C++</p>
  </div>
  <div class="CvSkills">
    <h1 class="heads">Skills</h1>
    <h5>English</h5>
    <h6>Advanced</h6>
    <div class="progress">
      <div class="progress-bar1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5>Romanian</h5>
    <h6>Native</h6>
    <div class="progress">
      <div class="progress-bar2" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5>French</h5>
    <h6>Beginner</h6>
    <div class="progress">
      <div class="progress-bar3" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5>Results driven</h5>
    <div class="progress">
      <div class="progress-bar4" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5>Self-starter</h5>
    <div class="progress">
      <div class="progress-bar5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5>Analytical mindset</h5>
    <div class="progress">
      <div class="progress-bar6" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5>Attention to details</h5>
    <div class="progress">
      <div class="progress-bar7" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>


</section>
        )
    }
}
