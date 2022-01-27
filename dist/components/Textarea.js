"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextareaAutosize = _interopRequireDefault(require("@mui/base/TextareaAutosize"));

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

const Input = (0, _styledComponents.default)(_TextareaAutosize.default)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n  width: 100%;\n  height: 50px;\n  min-height: 50px;\n  border: 1px solid #999999;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 21px;\n  letter-spacing: -0.41px;\n  color: #000000;\n  padding: 12px;\n  padding-left: 14px;\n  background: transparent;\n  font-family: inherit;\n  resize: none;\n\n  &::placeholder{\n    color: #999999;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), _ref => {
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
    hasPersistentLabel
  } = _ref4;
  return hasPersistentLabel && "\n    padding-top: 23px;\n  ";
}, _ref5 => {
  let {
    hasPersistentLabel,
    hasPlaceholder,
    hasText
  } = _ref5;
  return hasPersistentLabel && !hasPlaceholder && !hasText && "\n    padding-top: 12px;\n    padding-bottom: 23px;\n  ";
});

const PersistentLabel = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: calc(100% - 20px);\n  left: 1px;\n  top: 1px;\n  padding-left: 14px;\n  padding-top: 5px;\n  padding-bottom: 2px;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.41px;\n  color: #4F4F4F;\n  pointer-events: none;\n  transition: padding 0.2s ease, font-size 0.2s ease;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), _ref6 => {
  let {
    isFocused
  } = _ref6;
  return isFocused && "\n    color: #007AFF;\n  ";
}, _ref7 => {
  let {
    isInvalid
  } = _ref7;
  return isInvalid && "\n    color: #F44336;\n  ";
}, _ref8 => {
  let {
    hasPlaceholder,
    hasText
  } = _ref8;
  return !hasPlaceholder && !hasText && "\n    padding: 12px;\n    padding-left: 14px;\n    color: #999999;\n    font-size: 17px;\n    line-height: 21px;\n    letter-spacing: -0.41px;\n  ";
});

const CharacterCounter = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: calc(100% + 2px);\n    right: 13px;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 14px;\n    text-align: right;\n    color: #757575;\n    opacity: 0;\n    transition: all 0.15s ease;\n\n    ", "\n\n    ", "\n"])), _ref9 => {
  let {
    isInvalid
  } = _ref9;
  return isInvalid && "\n        color: #F44336;\n    ";
}, _ref10 => {
  let {
    isVisible
  } = _ref10;
  return isVisible && "\n        opacity: 1;\n    ";
});

const InputError = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  color: #F44336;\n  margin-left: 13px;\n"])));

const Textarea = props => {
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
    autoCapitalize: "none",
    hasPersistentLabel: hasPersistentLabel,
    hasPlaceholder: hasPlaceholder,
    hasText: value !== '',
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

var _default = Textarea;
exports.default = _default;