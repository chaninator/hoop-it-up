import React, { Component } from 'react';
import './scoreboard.css';

class Away extends Component {


  render() {
    return (
        <div>
          <h4 className="away">AWAY</h4>
          <div className="div_line_away"></div>
          <div className="score_container_away">30</div>

          <div className="add_button btn1">+1</div>
          <div className="add_button btn2">+2</div>
          <div className="add_button btn3">+3</div>

          <div className="minus_button btn-subtract2">-1</div>
        </div>
    );
  }
}

export default Away;
