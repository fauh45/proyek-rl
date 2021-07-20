import React, { useState } from "react";
import '../css/landing_page_play.css';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Nav from './Nav';
import Modal from '../components/Token';

function Landing_page_play() {

  const [ theToken, setToken ] = useState(false);

    return (
      <div className="App">
        <Nav />
        <div className="Header">
          <center><h1>Mari Kita Main BOT</h1>
          <br></br>
          <h5>Menggunakan teknologi paling canggih dari riset tingkat tinggi oleh DeepMind</h5>
          <h5>Menciptakan AI yang lebih pintar dari manusia (walaupun sama kita sih kayaknya gak).</h5>
          <Button className="btn btn-primary" variant="dark" onClick={() => setToken(true)}>PLAY</Button>

          <Modal open={theToken} onClose={() => setToken(false)}>
            <form>
              <label>
                Input Token:
                <input type="text" name="name" />
              </label>
            </form>
          </Modal>
          </center>
        </div>
      </div>
      
    );
  }

  export default Landing_page_play;