import React, { Component } from 'react';


export default class List extends Component {
  render() {
    return (
      <div id='side-bar'>
        <h2>{this.props.count} {this.props.name} = {this.props.totalAmount} calories</h2>
        <button onClick={this.props.handleReset} style={{height: '30px', width: '60px', margin: '20px'}}>Reset</button>
      </div>
    );
  }
}
