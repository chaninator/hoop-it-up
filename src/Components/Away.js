import React, { Component } from 'react';
import './scoreboard.css';

class Away extends Component {
  constructor(props){
    super(props);
    this.state = {
      scoreAway: 0
    }
  }

  addOneAway(){
    let scoreAway = this.state.scoreAway
    scoreAway = scoreAway+1
    this.setState({scoreAway: scoreAway})
  }

  addTwoAway(){
    let scoreAway = this.state.scoreAway
    scoreAway = scoreAway+2
    this.setState({scoreAway: scoreAway})
  }

  addThreeAway(){
    let scoreAway = this.state.scoreAway
    scoreAway = scoreAway+3
    this.setState({scoreAway: scoreAway})
  }

  minusOneAway(){
    let scoreAway = this.state.scoreAway
    scoreAway = scoreAway-1
    this.setState({scoreAway: scoreAway})
  }

  render() {
    return (
        <div>
          <h4 className="away">AWAY</h4>
          <div className="div_line_away"></div>
          <div className="score_container_away">{this.state.scoreAway}</div>

        <div>
          <button className="add_button away1" onClick={() => this.addOneAway()}>
            +1
          </button>
        </div>

        <div>
          <button className="add_button away2" onClick={() => this.addTwoAway()}>
            +2
          </button>
        </div>

        <div>
          <button className="add_button away3" onClick={() => this.addThreeAway()}>
            +3
          </button>
        </div>


        <div>
          <button className="minus_button away-subtract2" onClick={() => this.minusOneAway()}>
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Away;
