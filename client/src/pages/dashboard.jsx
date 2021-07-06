import React, { Component } from "react";
import '../css/dashboard.css'
import Board from '../integrations/board'

function dashboard() {
  return (
    <div className="App">
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
    marginTop: 125, 
    marginBottom: 50
  };

export default dashboard;