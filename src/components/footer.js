import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
        <div>
          <div className="footer">
            <div className="col-md-4">
              <ul className="list-inline social">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/paul-cosmin-tanase-a3389b15b/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/paulcosmin.tanase">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/tanasecosmin/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>            
          </div>
        </div>
        )
    }
}
