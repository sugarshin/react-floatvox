"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var FloatvoxEmitter = React.createClass({
  displayName: "FloatvoxEmitter",

  propTypes: {
    id: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  _onClick: function _onClick() {
    this.props.onClick(this.props.id);
  },

  render: function render() {
    return React.createElement(
      "div",
      { className: this.props.className },
      React.createElement(
        "button",
        { onClick: this._onClick },
        "OPEN"
      )
    );
  }
});

module.exports = FloatvoxEmitter;