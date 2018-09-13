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

  class AllDrumPads extends Component {
    constructor(props) {
      super(props);
    }
    render () {
      let pads;
      this.props.power ?
        pads = this.props.currentSounds.map( (soundObj, index, soundArr) => {
        return (
          <DrumPad 
            soundId={soundArr[index].id}
            keyTrigger={soundArr[index].keyTrigger}
            keyCode={soundArr[index].keyCode}
            source={soundArr[index].src}
            showDisplay={this.props.showDisplay}
            power={this.props.power}
            />
        )
      }) :
       pads = this.props.currentSounds.map( (soundObj, index, soundArr) => {
       return (
         <DrumPad 
            soundId={soundArr[index].id}
            keyTrigger={soundArr[index].keyTrigger}
            keyCode={soundArr[index].keyCode}
            source='#'
            showDisplay={this.props.showDisplay}
            power={this.props.power}
            />
       )
      } )
      return (
        <div className='alldrumpads-container'>
          {pads}
        </div>
      )
    }
  }

  export default AllDrumPads;