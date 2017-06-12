import React, { Component } from 'react';
import './scoreboard.css';

class Away extends Component {


  render() {
    return (
        <div>
          <h4 class="away">AWAY</h4>
          <div class="div_line_away"></div>
          <div class="score_container_away">30</div>
        </div>
    );
  }
}

export default Away;
