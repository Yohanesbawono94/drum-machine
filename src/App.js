import React, { Component } from 'react';
import './css/App.css';
import { clipsOne, clipsTwo } from './clips.js';
import { AllDrumPads } from './Drumpads.js';
import { Power } from './Power.js';
import { Display } from './Display.js';
import { SoundsToggle } from './SoundsToggle.js';
import { Volume } from './Volume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: 'ON',
      currentSounds: clipsOne,
      currentSoundsId: 'Sound One',
      slider: 0.5
    }
    this.powerControl= this.powerControl.bind(this);
    this.showDisplay = this.showDisplay.bind(this);
    this.adjustVol = this.adjustVol.bind(this);
    this.selectSounds = this.selectSounds.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }
  
  powerControl() {
    this.setState({
      power: !this.state.power,
      display: !this.state.power ? 'ON' : 'OFF'
    });
  }
  
  showDisplay(name) {
    if (this.state.power) {
      this.setState ({
      display: name
      });
    }
  }
  
  selectSounds() {
    if (this.state.power) {
      this.state.currentSoundsId === 'Sound One' ?
        this.setState({
        currentSounds: clipsTwo,
        currentSoundsId: 'Sound Two',
        display: 'Sound Two'
      }) :
        this.setState({
        currentSounds: clipsOne,
        currentSoundsId: 'Sound One',
        display: 'Sound One'
      });
    }
  }
  
  clearDisplay() {
    this.setState({
      display: ''
    })
  }
  
  adjustVol(e) {
    if (this.state.power) {
      this.setState({
        slider: e.target.value,
        display: 'volume: ' + Math.round(e.target.value * 100) + '%'
      });
    }
  }
  
  render () {
    const powerStyle = this.state.power ? {border: '2px solid #5FD9E2', color: '#5FD9E2'} : {border: '2px solid #F90505', color: '#F90505'};
    
    const soundStyle = this.state.currentSounds === clipsOne ? {float: 'right'} : {float: 'left'};
    
    {
      document.querySelectorAll('.sound').forEach( sound => {
        sound.volume = this.state.slider
      });
    }
    return (
      <div id='drum-machine'>
        <AllDrumPads
          power={this.state.power}
          currentSounds={this.state.currentSounds}
          showDisplay={this.showDisplay}
          soundVolume={this.state.slider}
          />
        <div className='controller'>
          <Power 
            powerControl={this.powerControl}
            style={powerStyle}
            />
          <Display 
            display={this.state.display} />
          <SoundsToggle 
            selectSounds={this.selectSounds}
            style={soundStyle} />
          <Volume 
            slider={this.state.slider}
            adjustVol={this.adjustVol}/>
       </div>
      </div>
    )
  }
}

export default App;
