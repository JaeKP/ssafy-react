import { SHOW_ACTIVED, SHOW_ALL, SHOW_COMPLETED } from '../store/index.js';
import { FilterLink } from './FilterLink.js';
export var ShowVisibleFilter = function ShowVisibleFilter() {
  return /*#__PURE__*/React.createElement("span", {
    className: "showVisibleFilter"
  }, /*#__PURE__*/React.createElement(FilterLink, {
    href: "#all",
    filter: SHOW_ALL
  }, "\uBAA8\uB450"), ' ', "/", ' ', /*#__PURE__*/React.createElement(FilterLink, {
    href: "#actived",
    filter: SHOW_ACTIVED
  }, "\uD65C\uC131 \uC0C1\uD0DC\uB9CC"), ' ', "/", ' ', /*#__PURE__*/React.createElement(FilterLink, {
    href: "#completed",
    filter: SHOW_COMPLETED
  }, "\uC644\uB8CC\uB41C \uC0C1\uD0DC\uB9CC"), ' ', "\uBCF4\uAE30", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "shortcut"
  }, "\uB2E8\uCD95\uD0A4: ", /*#__PURE__*/React.createElement("code", null, "ctrl + 1, 2, 3")));
};