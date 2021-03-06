import React, { Component } from 'react';
import './css/App.css';

class Power extends Component {
    render () {
      return (
        <div className='power-container'>
          <button className='power-btn' onClick={this.props.powerControl} style={this.props.style}>
              <i class="fas fa-power-off"></i>
          </button>
        </div>
      )
    }
  }
  
  export default Power;