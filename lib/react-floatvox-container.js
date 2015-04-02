// FloatvoxContainer

"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = React.createClass({
  displayName: "react-floatvox-container",

  propTypes: {
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.element.isRequired,
    display: React.PropTypes.bool.isRequired,
    onCloseClick: React.PropTypes.func.isRequired
  },

  _onCloseClick: function _onCloseClick() {
    this.props.onCloseClick();
  },

  render: function render() {
    return React.createElement(
      "div",
      {
        key: this.props.id,
        className: this.props.display ? "floatvox-container is-display" : "floatvox-container"
      },
      React.createElement("div", { className: "floatvox-background" }),
      React.createElement(
        "div",
        { className: "floatvox-close" },
        React.createElement(
          "button",
          { onClick: this._onCloseClick },
          "CLOSE"
        )
      ),
      React.createElement(
        "div",
        { className: "floatvox-content" },
        this.props.content
      )
    );
  }
});