// FloatvoxEmitter

"use strict";

import React from 'react';

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  _onClick() {
    this.props.onClick();
  },

  render() {
    return (
      <div key={this.props.id} className="floatvox-emitter">
        <button onClick={this._onClick}>OPEN</button>
      </div>
    );
  }
});
