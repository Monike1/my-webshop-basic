import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={HomePage} />
      </div>
    );
  }
}

export default App;
