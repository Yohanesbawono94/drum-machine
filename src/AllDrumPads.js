import React, { Component } from 'react';
import './css/App.css';
import DrumPad from './DrumPad';

  class AllDrumPads extends Component {
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
  };

  export default AllDrumPads;