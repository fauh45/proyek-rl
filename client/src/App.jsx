import React from 'react';
//import Board from './integrations/board';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './pages/Nav';

//Importing Pages
import landing_page_play from './pages/landing_page_play';
//import landing_page_watch from './pages/landing_page_watch';
import about_us from './pages/about_us';
import dashboard from './pages/dashboard';
import explaination from './pages/explaination';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={landing_page_play}/>
          <Route path="/home" component={landing_page_play}/>
          <Route path="/about-us" component={about_us}/>
          <Route path="/dashboard-play" component={dashboard}/>
          <Route path="/explaination" component={explaination}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*const boardsContainer = {
  display: "flex", 
  justifyContent: "space-around", 
  alignItems: "center", 
  flexWrap: "wrap", 
  width: "100vw", 
  marginTop: 200, 
  marginBottom: 50
};*/