"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isStringEmpty = _interopRequireDefault(require("../util/isStringEmpty"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

;
;
;

const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n"])));

const Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n  width: 100%;\n  height: 50px;\n  resize: none;\n  border: 1px solid #999999;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: -0.41px;\n  color: #000000;\n  padding: 12px;\n  padding-left: 14px;\n  padding-top: 28px;\n  background: transparent;\n  transition: all 0.2s ease;\n  font-family: inherit;\n\n  &::placeholder{\n    color: #999999;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), _ref => {
  let {
    isInvalid
  } = _ref;
  return isInvalid && "\n    border-color: #F44336;\n  ";
}, _ref2 => {
  let {
    isFocused
  } = _ref2;
  return isFocused && "\n    border-color: #007AFF;\n  ";
}, _ref3 => {
  let {
    borderRadius
  } = _ref3;
  return borderRadius && "\n    border-radius: ".concat(borderRadius, "px;\n  ");
}, _ref4 => {
  let {
    hasText,
    hasPlaceholder,
    hasPersistentLabel
  } = _ref4;

  if (hasPersistentLabel && !hasPlaceholder && !hasText || !hasPersistentLabel && hasPlaceholder && hasText || !hasPersistentLabel && !hasPlaceholder || !hasPersistentLabel && !hasText) {
    return 'padding-top: 12px;';
  }

  return '';
});

const PersistentLabel = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: calc(100% - 20px);\n  left: 1px;\n  top: calc(50% - 1px);\n  padding-left: 14px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  transform: translateY(-50%);\n\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 21px;\n  color: #4F4F4F;\n  pointer-events: none;\n  transition: all 0.2s ease;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), _ref5 => {
  let {
    isInvalid
  } = _ref5;
  return isInvalid && "\n    color: #F44336;\n  ";
}, _ref6 => {
  let {
    hasText,
    hasPlaceholder
  } = _ref6;
  return !hasPlaceholder && !hasText && "\n    color: #999999;\n  ";
}, _ref7 => {
  let {
    hasText,
    hasPlaceholder
  } = _ref7;
  return hasText || hasPlaceholder ? "\n    left: 1px;\n    top: 1px;\n    padding-left: 14px;\n    padding-top: 5px;\n    padding-bottom: 2px;\n    transform: translateY(0);\n    font-size: 12px;\n    line-height: 18px;\n  " : "\n    color: #999999;\n  ";
}, _ref8 => {
  let {
    hasText,
    hasPlaceholder,
    isFocused
  } = _ref8;
  return (hasText || hasPlaceholder) && isFocused && "\n    color: #007AFF;\n  ";
});

const CharacterCounter = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: calc(100% + 2px);\n    right: 13px;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: right;\n    color: #757575;\n    opacity: 0;\n    transition: all 0.15s ease;\n\n    ", "\n\n    ", "\n"])), _ref9 => {
  let {
    isInvalid
  } = _ref9;
  return isInvalid && "\n      color: #F44336;\n    ";
}, _ref10 => {
  let {
    isVisible
  } = _ref10;
  return isVisible && "\n      opacity: 1;\n    ";
});

const InputError = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #F44336;\n  margin-left: 13px;\n"])));

const TextInput = props => {
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const {
    persistentLabel,
    value,
    onChange,
    placeholder,
    maxLength,
    errorLabel,
    borderRadius = 10
  } = props;
  const isExceedingMaxLength = maxLength ? value.length > maxLength : false;
  const isInvalid = !(0, _isStringEmpty.default)(errorLabel);
  const hasPersistentLabel = !(0, _isStringEmpty.default)(persistentLabel);
  const hasPlaceholder = !(0, _isStringEmpty.default)(placeholder);
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Input, {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    isInvalid: isExceedingMaxLength || isInvalid,
    isFocused: isFocused,
    borderRadius: borderRadius,
    hasText: value !== '',
    autoCapitalize: "none",
    hasPersistentLabel: hasPersistentLabel,
    hasPlaceholder: hasPlaceholder,
    maxLength: maxLength
  }), hasPersistentLabel && /*#__PURE__*/_react.default.createElement(PersistentLabel, {
    isInvalid: isExceedingMaxLength || isInvalid,
    isFocused: isFocused,
    hasText: value !== '',
    hasPlaceholder: hasPlaceholder
  }, persistentLabel), maxLength && /*#__PURE__*/_react.default.createElement(CharacterCounter, {
    isInvalid: isExceedingMaxLength,
    isVisible: isFocused || isExceedingMaxLength
  }, "".concat(value.length, "/").concat(maxLength)), errorLabel !== '' && /*#__PURE__*/_react.default.createElement(InputError, null, errorLabel));
};

TextInput.propTypes = {
  persistentLabel: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  maxLength: _propTypes.default.number,
  errorLabel: _propTypes.default.string,
  borderRadius: _propTypes.default.number,
  type: _propTypes.default.string
};
var _default = TextInput;
exports.default = _default;