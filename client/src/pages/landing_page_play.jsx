import React from 'react';
import '../css/landing_page_play.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Nav from './Nav';

function landing_page_play() {
    return (
      <div className="App">
        <Nav />
        <div className="Header">
          <center><h1>Mari Kita Main BOT</h1>
          <br></br>
          <h5>Menggunakan teknologi paling canggih dari riset tingkat tinggi oleh DeepMind</h5>
          <h5>Menciptakan AI yang lebih pintar dari manusia (walaupun sama kita sih kayaknya gak).</h5>
          <ul className="nav-links">
          <Link to="/dashboard-play">
                <Button variant="dark" size="lg">PLAY</Button>
            </Link>
          </ul></center>
        </div>
      </div>
    );
  }

  export default landing_page_play;