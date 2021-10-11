import React, { Component } from "react";
import image1 from "./12080.png";
import image2 from "./21792.png";
import "./Timeline.css";

export default class image extends Component {
  render() {
    return (
      <>
        <center>
        <h2 className='titleContainer'>
            Sample Soloots
        </h2>
        </center>
        <div className="imageContainer">
          <div className="image11">
            <center>
              <img src={image1} className="image" alt="First Soloot"/>
            </center>
          </div>
          <div className="image22">
            <center>
              <img src={image2} className="image" alt="Second Soloot"/>
            </center>
          </div>
        </div>
      </>
    );
  }
}
