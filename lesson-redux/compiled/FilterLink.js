var _excluded = ["filter", "children"];

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { setVisibilityFilter } from '../store/index.js';
var _ReactRedux = ReactRedux,
    useSelector = _ReactRedux.useSelector,
    useDispatch = _ReactRedux.useDispatch;
export var FilterLink = function FilterLink(_ref) {
  var filter = _ref.filter,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var currentFilter = useSelector(function (_ref2) {
    var visibilityFilter = _ref2.visibilityFilter;
    return visibilityFilter;
  });
  var dispatch = useDispatch();
  return currentFilter === filter ? /*#__PURE__*/React.createElement("span", {
    className: "filterActived"
  }, children) : /*#__PURE__*/React.createElement("a", _extends({
    onClick: function onClick() {
      return dispatch(setVisibilityFilter(filter));
    }
  }, restProps), children);
};