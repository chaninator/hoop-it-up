import React, { Component } from 'react';
import './scoreboard.css';

class Away extends Component {


  render() {
    return (
        <div>
          <h4 className="away">AWAY</h4>
          <div className="div_line_away"></div>
          <div className="score_container_away">30</div>

          <div className="add_button away1">+1</div>
          <div className="add_button away2">+2</div>
          <div className="add_button away3">+3</div>
          <div className="minus_button away-subtract2">-1</div>

        </div>
    );
  }
}

export default Away;
