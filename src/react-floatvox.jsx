/*!
 * @license react-floatvox
 * (c) sugarshin
 * License: MIT
 */

"use strict";

import React from 'react';
import FloatvoxContainer from './react-floatvox-container';
import FloatvoxEmitter from './react-floatvox-emitter';

export default React.createClass({
  getInitialState() {
    return {
      display: false
    };
  },

  getDefaultProps() {
    return {
      id: Date.now() + Math.floor(Math.random() * 999999),
      content: React.createElement('div')
    };
  },

  open() {
    this.setState({
      display: true
    });
  },

  close() {
    this.setState({
      display: false
    });
  },

  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (this.state.display && e.keyCode === 27) {
        this.close();
      }
    });
  },

  render() {
    return (
      <div>
        <FloatvoxEmitter
          id={this.props.id}
          onClick={this.open}
        />
        <FloatvoxContainer
          id={this.props.id}
          display={this.state.display}
          content={this.props.content}
          onCloseClick={this.close}
        />
      </div>
    );
  }
});
