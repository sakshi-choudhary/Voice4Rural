"use strict";

exports.__esModule = true;
exports.getBoxShadow = getBoxShadow;
exports.getArrowStyles = exports.toTransformOrigin = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getBoxShadow(placement, color) {
  if (!color) return undefined;

  if (placement.includes("top")) {
    return "2px 2px 2px 0 " + color;
  }

  if (placement.includes("bottom")) {
    return "-1px -1px 1px 0 " + color;
  }

  if (placement.includes("right")) {
    return "-1px 1px 1px 0 " + color;
  }

  if (placement.includes("left")) {
    return "1px -1px 1px 0 " + color;
  }

  return undefined;
}

var transformEnum = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
};

var toTransformOrigin = function toTransformOrigin(placement) {
  return transformEnum[placement];
};

exports.toTransformOrigin = toTransformOrigin;

var getArrowStyles = function getArrowStyles(options) {
  var arrowSize = options.arrowSize,
      _options$popperArrowS = options.popperArrowStyles,
      popperArrowStyles = _options$popperArrowS === void 0 ? {} : _options$popperArrowS,
      placement = options.placement;

  var styles = _extends({}, popperArrowStyles, {
    width: arrowSize,
    height: arrowSize,
    zIndex: -1
  });

  var offsetAdjust = -(arrowSize / 2);
  if (placement.startsWith("top")) styles.bottom = offsetAdjust;
  if (placement.startsWith("bottom")) styles.top = offsetAdjust;
  if (placement.startsWith("left")) styles.right = offsetAdjust;
  if (placement.startsWith("right")) styles.left = offsetAdjust;
  return styles;
};

exports.getArrowStyles = getArrowStyles;
//# sourceMappingURL=popper.utils.js.map