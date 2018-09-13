import React, { Component } from 'react';
import './css/App.css';

class DrumPad extends Component {
    constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
    
    playSound() {
      const sound = document.getElementById(this.props.soundId);
      sound.currentTime = 0;
      sound.play();
      this.props.showDisplay(this.props.soundId.replace(/-/g, ' '));
    }
    
    render () {
      return (
        <div className = 'drum-pad'
          id={this.props.keyTrigger}
          onClick={this.playSound}>
          <audio className='sound' id={this.props.soundId} src={this.props.source}></audio>
          {this.props.keyTrigger}
        </div>
      )
    }
  }

  export default DrumPad;