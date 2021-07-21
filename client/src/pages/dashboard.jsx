import React, { Component, useEffect, useState } from "react";
import '../css/dashboard.css'
import Board from '../integrations/board';
import { Button, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import socketClient from "socket.io-client";

function Dashboard() {
  const navStyle={
    color: 'black'
  };
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    var socket = socketClient('http://127.0.0.1:5000');

    socket.on('GAME_DATA', (data) => {
      console.log(data)
      setGameData(JSON.parse(data))
    });
  }, []);
  
  return (
    <div className="App">
      <nav>
        <Navbar.Brand style={navStyle} href="/home">MARBOT</Navbar.Brand>
      </nav>
      <div style={boardsContainer}>
        {gameData && (<Board fen={gameData.fen} />)}
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

export default Dashboard;