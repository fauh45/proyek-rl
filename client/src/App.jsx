import React from 'react';
import './App.css';
import Board from './integrations/board'

function App() {
  return (
    <div className="App">
      <div>
        <div style={boardsContainer}>
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;

const boardsContainer = {
  display: "flex", 
  justifyContent: "space-around", 
  alignItems: "center", 
  flexWrap: "wrap", 
  width: "100vw", 
  marginTop: 30, 
  marginBottom: 50
};