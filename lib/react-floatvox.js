"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var FloatvoxBody = _interopRequire(require("./react-floatvox-body"));

var FloatvoxEmitter = _interopRequire(require("./react-floatvox-emitter"));

var Floatvox = React.createClass({
  displayName: "Floatvox",

  getInitialState: function getInitialState() {
    return {
      id: +new Date() + Math.floor(Math.random() * 99999),
      isOpen: false,
      content: React.createElement("div"),
      outerClassName: "floatvox-outer"
    };
  },

  // 初期化処理を行うのに適す
  // ComponentがDOMツリーに追加される前に一度だけ呼ばれる
  // この中でsetStateするとrender時にまとめて行われる
  // server-side rendering時にも呼ばれる
  // どちらでも動くコードである必要がある
  componentWillMount: function componentWillMount() {},

  // DOMに関わる初期化処理に
  // ComponentがDOMツリーに追加された状態で呼ばれる
  // componentWillMountと違いserver-side rendering時には呼ばれない
  // AjaxリクエストやsetIntervalの登録などの
  // server-side rendering時には必要ない初期化処理についてはここでやる
  // isMounted()もある
  // Reactでサポートされていないイベントとかの登録はここで

  // また、touch系のイベントはデフォルトでは対象になっていないので
  // 対象にしたい場合は React.initializeTouchEvents(true)
  // を呼んでおく
  componentDidMount: function componentDidMount() {
    var _this = this;

    document.addEventListener("keydown", function (e) {
      if (_this.props.display && e.keyCode === 27) {
        _this.props.close();
      }
    });
  },

  // Propが更新される時に呼ばれる
  // Componentが新しくDOMツリーに追加される時には呼ばれない
  // 親Componentから親ComponentのStateがPropとして渡されていて、
  // その値が変化した時に画面の表示以外で何かしたいときや
  // Propの値に応じてStateの値を更新したいようなときに
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {},

  // 必ずtrueかfalseを返す
  // Componentがrerenderされる前に呼ばれ、
  // falseを返すとVirtualDOMの比較を行わずにrerenderもされなくなる
  // なので独自でPropやStateを比較するような処理を実装することで
  // 無駄な計算をなくし、Performanceの向上を行うことを目的に実装する
  // デフォルトでは常にtrueを返すようになっているので常にrerenderされる
  // また、forceUpdateという強制的にrerenderするメソッドもあるのが
  // それが呼ばれた場合にはこのメソッドは呼ばれない
  shouldComponentUpdate: function shouldComponentUpdate() {},

  // Componentが更新する前に呼ばれる
  // 初回時には呼ばれない
  // この中でsetStateを呼ぶことは出来ないので
  // Propの値を元にsetStateしたいような場合は
  // componentWillReceivePropsを使う
  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {},

  // Componentが更新された後に呼ばれる
  // 初回時には呼ばれない
  // DOMの変化にフックして何かしたい場合などに
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {},

  // ComponentがDOMから削除される時に呼ばれる
  // イベントの解除などクリーンアップ処理をする場合に
  // ComponentDidMountで登録したTimerの処理やDOMのイベントは
  // ここで解除するべき
  // Reactでサポートされていないイベントとかの解除もここで
  componentWillUnmount: function componentWillUnmount() {},

  open: function open(id) {
    this.setState({
      isOpen: true
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(FloatvoxEmitter, { id: this.state.id, onClick: this.open }),
      React.createElement(
        "div",
        { className: (this.state.outerClassName, this.state.isOpen ? "is-visible" : "") },
        React.createElement("div", { className: this.state.backgroundClassName }),
        React.createElement(
          "button",
          { ref: "closeButton" },
          "CLOSE"
        ),
        React.createElement(FloatvoxBody, { id: this.state.id, content: this.state.content })
      )
    );
  }
});

module.exports = Floatvox;