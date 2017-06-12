import React, { Component } from 'react';
import './scoreboard.css';

class Home extends Component {
constructor(props){
  super(props);
  this.state = {
    score: 0
  }
}

addOne(){
  let score = this.state.score
  score = score+1
  this.setState({score: score})
}

addTwo(){
  let score = this.state.score
  score = score+2
  this.setState({score: score})
}

addThree(){
  let score = this.state.score
  score = score+3
  this.setState({score: score})
}

minusOne(){
  let score = this.state.score
  score = score-1
  this.setState({score: score})
}
  render() {
    return (
        <div>
          <h4 className="home">HOME</h4>
          <div className="div_line_home"></div>
          <div className="score_container_home">24</div>
          <div className="score_container_home">{this.state.score}</div>

          <div>
            <button className="add_button home1" onClick={() => this.addOne()}>
              +1
            </button>
          </div>

          <div>
            <button className="add_button home2" onClick={() => this.addTwo()}>
              +2
            </button>
          </div>

          <div>
            <button className="add_button home3" onClick={() => this.addThree()}>
              +3
            </button>
          </div>


          <div>
            <button className="minus_button home-subtract1" onClick={() => this.minusOne()}>
              -1
            </button>
          </div>
        </div>
    );
  }
}

export default Home;
