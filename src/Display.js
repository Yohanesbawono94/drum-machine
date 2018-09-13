import React, { Component } from 'react';
import './css/App.css';

class Display extends Component {
   render () {
     return (
       <div className='display-container'>
         <p id='display'>
           {this.props.display}
         </p>
       </div>
     )
   }
 }

 export default Display;