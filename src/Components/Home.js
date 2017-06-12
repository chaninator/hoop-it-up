import React, { Component } from 'react';
import './scoreboard.css';

class Home extends Component {


  render() {
    return (
        <div>
          <h4 className="home">HOME</h4>
          <div className="div_line_home"></div>
          <div className="score_container_home">24</div>

          <div className="add_button home1">+1</div>
          <div className="add_button home2">+2</div>
          <div className="add_button home3">+3</div>
          <div className="minus_button home-subtract1">-1</div>
        </div>
    );
  }
}

export default Home;
