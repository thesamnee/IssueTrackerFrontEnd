import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import IssueContainer from './components/issueContainer/issueContainer.js'
import NewIssue from './components/newIssue/newIssue.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={IssueContainer} />
        <Route path="/newissue" component={NewIssue} />
      </Router>
    </div>
  );
}

export default App;
