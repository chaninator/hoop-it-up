import React, { Component } from 'react';
import './scoreboard.css';

class Home extends Component {


  render() {
    return (
        <div>
          <h4 class="home">HOME</h4>
          <div class="div_line_home"></div>
          <div class="score_container_home">24</div>
        </div>
    );
  }
}

export default Home;
