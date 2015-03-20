"use strict";

import React from 'react';

var FloatvoxEmitter = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  _onClick() {
    this.props.onClick(this.props.id);
  },

  render() {
    return (
      <div className={this.props.className}>
        <button onClick={this._onClick}>OPEN</button>
      </div>
    );
  }
});

export default FloatvoxEmitter
