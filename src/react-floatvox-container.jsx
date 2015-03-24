"use strict";

import React from 'react';

var FloatvoxContainer = React.createClass({
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
        className={this.props.display ? 'floatvox-container is-display' : 'floatvox-container'}
      >
        <div className="floatvox-background"></div>
        <div className="floatvox-close">
          <button onClick={this._onCloseClick}>CLOSE</button>
        </div>
        <div className="floatvox-content">
          {this.props.content}
        </div>
      </div>
    );
  }
});

export default FloatvoxContainer
