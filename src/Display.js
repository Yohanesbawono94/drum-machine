import React, { Component } from 'react';
import './App.css';

class Display extends Component {
    constructor(props) {
     super(props);
   }
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