import React, { Component, useState, useEffect } from "react";
import Board from '../integrations/board';
import { Navbar, Form, Button } from 'react-bootstrap';
import { Formik, Form as FormikForm } from 'formik';
import "../css/spectator.css";
import { TextInput } from '../components/text_input';
import socketClient from "socket.io-client";


function Spectator() {
  const navStyle = {
    color: 'black'
  };
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    var socket = socketClient('http://127.0.0.1:5000');

    socket.on('GAME_CHAT', (newMessage) => {
      setMessages(current => [...current, newMessage])
    });
  }, []);

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
      <div id="chat-box">
        {messages && messages.map((value, index) => {
          console.log(value)
          return (
            <p key={index}>{value}</p>
          )
        })}
      </div>
      <div className="chat-input">
        <Formik
          initialValues={{ chat: '' }}
          onSubmit={(values) => {
            var socket = socketClient('http://127.0.0.1:5000');

            socket.emit('NEW_CHAT', values.chat);
          }}
        >
          <FormikForm>
            <TextInput
              name='chat'
              type='text'
            />
            <Button variant="primary" type="submit">
              Send
            </Button>
          </FormikForm>
        </Formik>
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

export default Spectator;
