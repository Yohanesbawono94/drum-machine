import React, { Component } from 'react';
import './App.css';

class SoundsToggle extends Component {
    constructor(props) {
     super(props);
   }
   render () {
     return (
       <div className='soundstoggle-container'>
         <div onClick={this.props.selectSounds}>
           <div className='toggle-sounds'>
             <div className='sounds-slider' style={this.props.style}></div>
           </div>
         </div>
       </div>
     )
   }
 }

 export default SoundsToggle;