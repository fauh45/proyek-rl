import React, { Component } from "react";
import Nav from './Nav';
import "../css/about-us.css";
import Card from './CardProfile';
import img1 from '../images/img_fadil.PNG';
import img2 from "../images/img_fathul.PNG"
import img3 from "../images/img_fauzan.PNG";
import img4 from "../images/img_hargi.PNG";
import img5 from "../images/img_rey.PNG";

class about_us extends Component{
  render(){
    return(
      <div className="App">
        <Nav />
        <div className="Row1">
          <div className="row">
            <div className="col-md-4">
              <Card imgsrc={img1} name="Mochamad Fadillah Wijaya" title="Front-End Developer"/>
            </div>
            <div className="col-md-4">
              <Card imgsrc={img2} name="Muhammad Fathul Hafidz Mubarok" title="Front-End Developer"/>
            </div>
            <div className="col-md-4">
              <Card imgsrc={img3} name="Muhammad Fauzan Lubis" title="Project Leader"/>
            </div>
          </div>
        </div>
        <div className="Row2">
          <div className="row">
            <div className="col-md-5">
              <Card imgsrc={img4} name="Muhammad Hargi Muttaqin" title="Back-End Developer"/>
            </div>
            <div className="col-md-5">
              <Card imgsrc={img5} name="Reynaldi Rizki Saputra" title="Back-End Developer"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about_us;