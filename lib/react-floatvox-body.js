"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var FloatvoxBody = React.createClass({
  displayName: "FloatvoxBody",

  propTypes: {
    id: React.PropTypes.number.isRequired,
    content: React.PropTypes.element.isRequired,
    className: React.PropTypes.string
  },

  render: function render() {
    return React.createElement(
      "div",
      { key: this.props.id, className: this.props.className },
      this.props.content
    );
  }
});

module.exports = FloatvoxBody;