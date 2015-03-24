"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var FloatvoxMain = React.createClass({
  displayName: "FloatvoxMain",

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
        className: this.props.display ? "floatvox-outer is-display" : "floatvox-outer"
      },
      React.createElement("div", { className: "floatvox-shade" }),
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
        { className: "floatvox-body" },
        this.props.content
      )
    );
  }
});

module.exports = FloatvoxMain;