import React, { Component, useState } from "react";
import '../css/dashboard.css'
import Board from '../integrations/board';
import { Button, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function dashboard() {
  const navStyle={color: 'black'};

  return (
    <div className="App">
      <nav>
        <Navbar.Brand style={navStyle} href="/home">MARBOT</Navbar.Brand>
      </nav>
      <div style={boardsContainer}>
        <Board />
      </div>
      <center>
        <ul className="btn-end">
          <Link to="/">
                <Button variant="dark" size="sm">END</Button>
            </Link>
          </ul>
      </center>
    </div>
  );
}

const boardsContainer = {
    display: "flex", 
    justifyContent: "space-around", 
    alignItems: "center", 
    flexWrap: "wrap", 
    width: "100vw", 
    marginTop: 55, 
    marginBottom: 50
  };

export default dashboard;