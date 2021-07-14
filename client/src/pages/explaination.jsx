import React, { Component } from "react";
import "../css/explaination.css";
import Nav from './Nav';

function explaination() {
  return (
    <div className="App">
      <Nav />
      <div className="what-is-this">
        <div className="row">
          <h5>Marbot Documentation</h5>
          <p>Marbot is a platform that provides services for playing chess againts bot.
            It’s developed using reinforcement learning technique with MuZero as the basis of the system.</p>
        </div>
        <ul>
          <h6>Benefits from MARBOT:</h6>
          <li>Practicing your chess skill at it’s finest</li>
          <li>Become a true chess pro player</li>
          <li>Getting a headache if you’re a newcomer</li>
        </ul>
      </div>
      <br></br>
      <div className="user-terms">
        <h5>User Terms:</h5>
        <ul>
          <li>Player is available if no one is playing at the moment</li>
          <li>As a Player, you should input a token whenever you start the game</li>
          <li>Player have rights to end the game anytime</li>
          <li>Player CANNOT use the room chat. Instead of it, Player can only see what the spectators saying.</li>
        </ul>
      </div>
      <br></br>
      <div className="spectator-terms">
      <h5>Spectator Terms:</h5>
        <ul>
          <li>Spectator is available if someone is already playing at the moment</li>
          <li>Spectator have rights to use the chat room</li>
          <li>Toxic Spectator will be rewarded with a sin</li>
          <li>If the game is ended, Spectator will also navigated to the landing page.</li>
        </ul>
      </div>
    </div>
  );
}

export default explaination;