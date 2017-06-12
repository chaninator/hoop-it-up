import React, {Component} from 'react';
import './scoreboard.css';

class ScoreBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      homeScore: 0,
      awayScore: 0
    }
  }

  resetScore() {
    this.setState({homeScore: 0, awayScore: 0})
  }

  addOneHome() {
    let homeScore = this.state.homeScore
    homeScore = homeScore + 1
    this.setState({homeScore: homeScore})
  }

  addTwoHome() {
    let homeScore = this.state.homeScore
    homeScore = homeScore + 2
    this.setState({homeScore: homeScore})
  }

  addThreeHome() {
    let homeScore = this.state.homeScore
    homeScore = homeScore + 3
    this.setState({homeScore: homeScore})
  }

  minusOneHome() {
    let homeScore = this.state.homeScore
    homeScore = homeScore - 1
    if (homeScore >= 0) {
      this.setState({homeScore: homeScore})
    }
  }

  addOneAway() {
    let awayScore = this.state.awayScore
    awayScore = awayScore + 1
    this.setState({awayScore: awayScore})
  }

  addTwoAway() {
    let awayScore = this.state.awayScore
    awayScore = awayScore + 2
    this.setState({awayScore: awayScore})
  }

  addThreeAway() {
    let awayScore = this.state.awayScore
    awayScore = awayScore + 3
    this.setState({awayScore: awayScore})
  }

  minusOneAway() {
    let awayScore = this.state.awayScore
    awayScore = awayScore - 1
    if (awayScore >= 0) {
      this.setState({awayScore: awayScore})
    }
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

        <h4 className="home">HOME</h4>
        <div className="div_line_home"></div>
        <div className="score_container_home"></div>
        <div className="score_container_home">{this.state.homeScore}</div>
        <div>
          <a className="add_button home1" onClick={() => this.addOneHome()}>+1</a>
        </div>
        <div>
          <a className="add_button home2" onClick={() => this.addTwoHome()}>+2</a>
        </div>
        <div>
          <a className="add_button home3" onClick={() => this.addThreeHome()}>+3</a>
        </div>
        <div>
          <a className="minus_button home-subtract1" onClick={() => this.minusOneHome()}>-1</a>
        </div>
        <h4 className="away">AWAY</h4>
        <div className="div_line_away"></div>
        <div className="score_container_away">{this.state.awayScore}</div>
        <div>
          <a className="add_button away1" onClick={() => this.addOneAway()}>+1</a>
        </div>
        <div>
          <a className="add_button away2" onClick={() => this.addTwoAway()}>+2</a>
        </div>
        <div>
          <a className="add_button away3" onClick={() => this.addThreeAway()}>+3</a>
        </div>
        <div>
          <a className="minus_button away-subtract2" onClick={() => this.minusOneAway()}>-1</a>
        </div>
        <a className="reset" onClick={this.resetScore.bind(this)}>NEW GAME</a>
      </div>
    );
  }
}

export default ScoreBoard;
