"use strict";

import React from 'react';

var FloatvoxMain = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.element.isRequired,
    display: React.PropTypes.bool.isRequired,
    onCloseClick: React.PropTypes.func.isRequired
  },

  _onCloseClick() {
    this.props.onCloseClick();
  },

  render() {
    return (
      <div
        key={this.props.id}
        className={this.props.display ? 'floatvox-outer is-display' : 'floatvox-outer'}
      >
        <div className="floatvox-shade"></div>
        <div className="floatvox-close">
          <button onClick={this._onCloseClick}>CLOSE</button>
        </div>
        <div className="floatvox-body">
          {this.props.content}
        </div>
      </div>
    );
  }
});

export default FloatvoxMain
