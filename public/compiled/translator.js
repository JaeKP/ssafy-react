function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Translator = function () {
  function Translator(state, initalLanguageMode) {
    _classCallCheck(this, Translator);

    this._state = state;
    this._languageMode = initalLanguageMode;
  }

  _createClass(Translator, [{
    key: "currentMode",
    get: function get() {
      return this._languageMode;
    }
  }, {
    key: "isKorean",
    value: function isKorean() {
      return this.currentMode === 'ko';
    }
  }, {
    key: "isEnglish",
    value: function isEnglish() {
      return this.currentMode === 'en';
    }
  }, {
    key: "toggleLanguageMode",
    value: function toggleLanguageMode() {
      this._languageMode = this.isKorean() ? 'en' : 'ko';
      return this;
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return "".concat(this.isKorean() ? '한 → 영' : '영 → 한', " \uBC88\uC5ED");
    }
  }, {
    key: "getContents",
    value: function getContents(key) {
      var contents = this._state[this.currentMode];
      return key ? contents[key] : contents;
    }
  }]);

  return Translator;
}();

_defineProperty(Translator, "textFormatting", function (text) {
  return text.toString().replace(/\n\s+/g, '').trim();
});

var initialState = {
  en: {
    headline: 'Declarative programming',
    description: Translator.textFormatting("\n    In computer science, declarative programming is a programming paradigm\u2014a style of \n    building the structure and elements of computer programs\u2014that expresses the logic of \n    a computation without describing its control flow. Many languages that apply this style \n    attempt to minimize or eliminate side effects by describing what the program must accomplish \n    in terms of the problem domain, rather than describe how to accomplish it as a sequence of \n    the programming language primitives (the how being left up to the language's implementation). \n    This is in contrast with imperative programming, which implements algorithms in explicit steps.\n  ")
  },
  ko: {
    headline: '선언형 프로그래밍',
    description: Translator.textFormatting("\n    \uC120\uC5B8\uD615 \uD504\uB85C\uADF8\uB798\uBC0D(\u5BA3\u8A00\u578B \uD504\uB85C\uADF8\uB798\uBC0D, \uC601\uC5B4: declarative programming)\uC740 \uB450 \uAC00\uC9C0 \uB73B\uC73C\uB85C \uD1B5\uC6A9\uB418\uACE0 \uC788\uB2E4. \n    \uD55C \uC815\uC758\uC5D0 \uB530\uB974\uBA74, \uD504\uB85C\uADF8\uB7A8\uC774 \uC5B4\uB5A4 \uBC29\uBC95\uC73C\uB85C \uD574\uC57C \uD558\uB294\uC9C0\uB97C \uB098\uD0C0\uB0B4\uAE30\uBCF4\uB2E4 \uBB34\uC5C7\uACFC \uAC19\uC740\uC9C0\uB97C \uC124\uBA85\uD558\uB294 \uACBD\uC6B0\uC5D0 \"\uC120\uC5B8\uD615\"\uC774\uB77C\uACE0 \uD55C\uB2E4. \n    \uC608\uB97C \uB4E4\uC5B4, \uC6F9 \uD398\uC774\uC9C0\uB294 \uC120\uC5B8\uD615\uC778\uB370 \uC6F9\uD398\uC774\uC9C0\uB294 \uC81C\uBAA9, \uAE00\uAF34, \uBCF8\uBB38, \uADF8\uB9BC\uACFC \uAC19\uC774 \"\uBB34\uC5C7\"\uC774 \uB098\uD0C0\uB098\uC57C\uD558\uB294\uC9C0\uB97C \uBB18\uC0AC\uD558\uB294 \uAC83\uC774\uC9C0 \n    \"\uC5B4\uB5A4 \uBC29\uBC95\uC73C\uB85C\" \uCEF4\uD4E8\uD130 \uD654\uBA74\uC5D0 \uD398\uC774\uC9C0\uB97C \uB098\uD0C0\uB0B4\uC57C \uD558\uB294\uC9C0\uB97C \uBB18\uC0AC\uD558\uB294 \uAC83\uC774 \uC544\uB2C8\uAE30 \uB54C\uBB38\uC774\uB2E4.\n  ")
  }
};
var translator = new Translator(initialState, 'en');
export default translator;