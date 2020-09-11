import React, { Component, Fragment } from 'react';


export default class Contact extends Component {
render() {
return (
/*   <Fragment> am folosit fragment deoarece cerea parent element si asa am gasit pe stack overflow, nu stiu de ce imi da eroarea emailjs is undefined

  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"></script>
    <script type="text/javascript">
        (function(){
           emailjs.init('user_TpkdHY68yD146sqCwJMWO')
        })();
    </script>
    <script type="text/javascript">
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate the contact number value
                this.contact_number.value = Math.random() * 100000 | 0;
                emailjs.sendForm('contact_service', 'contact_form', this);
            })
          }
    </script> */
           
<section className="page-section">
<form id="contact-form" class="Contact">
<h1>Contact me</h1>
  <div class="contactForm">
    <div class="forml">
      <div class="form-group">
        <label for="exampleFormControlInput1">Firstname</label>
        <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Firstname"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
    </div>
    <div class="formr">
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" required id="exampleFormControlTextarea1" rows="7"></textarea>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </section>
)
 }
}