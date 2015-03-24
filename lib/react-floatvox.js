/*!
 * @license react-floatvox
 * (c) sugarshin
 * License: MIT
 */

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var FloatvoxContainer = _interopRequire(require("./react-floatvox-container"));

var FloatvoxEmitter = _interopRequire(require("./react-floatvox-emitter"));

var Floatvox = React.createClass({
  displayName: "Floatvox",

  getInitialState: function getInitialState() {
    return {
      display: false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      id: Date.now() + Math.floor(Math.random() * 999999),
      content: React.createElement("div")
    };
  },

  open: function open() {
    this.setState({
      display: true
    });
  },

  close: function close() {
    this.setState({
      display: false
    });
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    document.addEventListener("keydown", function (e) {
      if (_this.state.display && e.keyCode === 27) {
        _this.close();
      }
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(FloatvoxEmitter, {
        id: this.props.id,
        onClick: this.open
      }),
      React.createElement(FloatvoxContainer, {
        id: this.props.id,
        display: this.state.display,
        content: this.props.content,
        onCloseClick: this.close
      })
    );
  }
});

module.exports = Floatvox;