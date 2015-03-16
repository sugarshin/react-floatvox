"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = React.createClass({
  displayName: "react-floatvox",

  propTypes: {
    display: React.PropTypes.bool.isRequired,
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired,
      complete: React.PropTypes.bool.isRequired,
      className: React.PropTypes.string
    }),
    onChangeComplete: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
  getInitialState: function getInitialState() {
    return {
      todos: []
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    document.addEventListener("keydown", function (e) {
      if (_this.props.display && e.keyCode === 27) {
        _this.props.close();
      }
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", ref: "addNew", placeholder: "task name" }),
      React.createElement(
        "button",
        { type: "button", onClick: this.addTodo },
        "Add"
      ),
      React.createElement(
        "ul",
        null,
        todos
      )
    );
  }
});
