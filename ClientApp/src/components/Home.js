import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    const headerStyle = {
      width: '100',
      padding: '2%',
      backgroundColor: "yellowgreen",
      color: 'black',
      textAlign: 'center'
    }
    return (
      <div style={headerStyle}>
        <h1>Plants Watering Solution</h1>
        <Plants></Plants>
      </div>
    );
  }
}
