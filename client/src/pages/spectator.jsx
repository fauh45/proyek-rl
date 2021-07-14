import React, { Component } from "react";
import Board from '../integrations/board';
import { Navbar } from 'react-bootstrap';
import "../css/spectator.css";

function spectator() {
  const navStyle={
    color: 'black'
  };

  return (
    <div className="App">
      <nav>
        <Navbar.Brand style={navStyle} href="/home">MARBOT</Navbar.Brand>
      </nav>
      <div className="heads">
        <h4>You are spectating a game, Please don't be toxic!</h4>
      </div>
      <div style={boardsContainer}>
        <Board />
      </div>
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
  };

export default spectator;