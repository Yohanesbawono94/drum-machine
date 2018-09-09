import React, { Component } from 'react';
import '/App.css';

class Power extends Component {
    constructor(props) {
      super(props);
    }
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