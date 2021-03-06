// FloatvoxEmitter

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = React.createClass({
  displayName: "react-floatvox-emitter",

  propTypes: {
    id: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  _onClick: function _onClick() {
    this.props.onClick();
  },

  render: function render() {
    return React.createElement(
      "div",
      { key: this.props.id, className: "floatvox-emitter" },
      React.createElement(
        "button",
        { onClick: this._onClick },
        "OPEN"
      )
    );
  }
});