import React, { Component } from 'react';
import './css/App.css';

class Volume extends Component {
   render () {
     return (
       <div className='volume-container'>
         <input 
           type='range'
           min='0'
           max='1'
           step='0.01'
           value={this.props.slider}
           onChange={this.props.adjustVol}/>
       </div>
     )
   }
 }   

 export default Volume;