import React, {Component} from 'react';
import ScoreBoard from './Components/ScoreBoard';
import Header from './Components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ScoreBoard/>
      </div>
    );
  }
}

export default App;
