import React, {Component} from 'react';
import Home from './Home';
import Away from './Away';
import './scoreboard.css';

class ScoreBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      scores: 0
    }
  }

  resetScore(){
    let scores = this.state.scores
    console.log('score', this.state.scores);
    scores = 0
    console.log('this.state.scores', this.state.scores);

    this.setState({scores: scores})
  }

  render() {
    return (
      <div className="scoreboard">
        <div className="inner_border"></div>
        <div className="inner_rect"></div>
        <div className="rim"></div>
        <div className="net1"></div>
        <div className="net2"></div>
        <div className="net3"></div>
        <div className="net4"></div>
        <div className="net5"></div>
        <div className="net6"></div>
        <div className="net7"></div>
        <div className="net8"></div>
        <div className="net9"></div>
        <Home />
        <Away />
        <a className="reset" onClick={() => this.resetScore()}>NEW GAME</a>
      </div>
    );
  }
}

export default ScoreBoard;
