"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var label = _ref.label,
      backgroundColor = _ref.backgroundColor,
      onClick = _ref.onClick;
  var style = backgroundColor && {
    backgroundColor: backgroundColor
  };
  style = style || {
    backgroundColor: 'red'
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    style: style
  }, label);
}

Button.propTypes = {
  backgroundColor: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func.isRequired
};
Button.defaultProps = {
  backgroundColor: 'yellow'
};