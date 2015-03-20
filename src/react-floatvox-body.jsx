"use strict";

import React from 'react';

var FloatvoxBody = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.element.isRequired,
    className: React.PropTypes.string
  },

  render() {
    return (
      <div key={this.props.id} className={this.props.className}>
        {this.props.content}
      </div>
    );
  }
});

export default FloatvoxBody
