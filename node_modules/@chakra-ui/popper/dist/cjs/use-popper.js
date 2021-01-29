"use strict";

exports.__esModule = true;
exports.usePopper = usePopper;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _popper = require("./popper.utils");

var _reactPopper = require("./react-popper");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function usePopper(props) {
  var _popperJS$state$place, _popperJS$state;

  if (props === void 0) {
    props = {};
  }

  var _props = props,
      enabled = _props.enabled,
      _props$placement = _props.placement,
      placement = _props$placement === void 0 ? "bottom" : _props$placement,
      _props$preventOverflo = _props.preventOverflow,
      preventOverflow = _props$preventOverflo === void 0 ? true : _props$preventOverflo,
      _props$fixed = _props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$flip = _props.flip,
      flip = _props$flip === void 0 ? true : _props$flip,
      _props$arrowSize = _props.arrowSize,
      arrowSize = _props$arrowSize === void 0 ? 8 : _props$arrowSize,
      arrowShadowColor = _props.arrowShadowColor,
      _props$gutter = _props.gutter,
      gutter = _props$gutter === void 0 ? 8 : _props$gutter,
      _props$arrowPadding = _props.arrowPadding,
      arrowPadding = _props$arrowPadding === void 0 ? 4 : _props$arrowPadding,
      offsetProp = _props.offset,
      matchWidth = _props.matchWidth,
      _props$modifiers = _props.modifiers,
      modifiers = _props$modifiers === void 0 ? [] : _props$modifiers;

  var _React$useState = React.useState(null),
      referenceNode = _React$useState[0],
      setReferenceNode = _React$useState[1];

  var _React$useState2 = React.useState(null),
      popperNode = _React$useState2[0],
      setPopperNode = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      arrowNode = _React$useState3[0],
      setArrowNode = _React$useState3[1];
  /**
   * recommended via popper docs
   * @see https://popper.js.org/react-popper/v2/faq/#why-i-get-render-loop-whenever-i-put-a-function-inside-the-popper-configuration
   */


  var customModifiers = React.useMemo(function () {
    var offset = offsetProp != null ? offsetProp : [0, gutter];
    return [// @see https://popper.js.org/docs/v2/modifiers/offset/
    {
      name: "offset",
      options: {
        offset: offset != null ? offset : [0, gutter]
      },
      phase: "main"
    }, // @see https://popper.js.org/docs/v2/modifiers/prevent-overflow/
    {
      name: "preventOverflow",
      enabled: !!preventOverflow,
      phase: "main"
    }, // @see https://popper.js.org/docs/v2/modifiers/arrow/
    {
      name: "arrow",
      enabled: !!arrowNode,
      options: {
        element: arrowNode,
        padding: arrowPadding
      },
      phase: "main"
    }, // @see https://popper.js.org/docs/v2/modifiers/flip/
    {
      name: "flip",
      enabled: flip,
      options: {
        padding: 8
      },
      phase: "main"
    }, {
      name: "matchWidth",
      enabled: !!matchWidth,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn(_ref2) {
        var state = _ref2.state;
        state.styles.popper.width = state.rects.reference.width + "px";
      },
      effect: function effect(_ref3) {
        var state = _ref3.state;
        return function () {
          var reference = state.elements.reference;
          state.elements.popper.style.width = reference.offsetWidth + "px";
        };
      }
    }, {
      name: "applyArrowHide",
      enabled: true,
      phase: "write",
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var arrow = state.elements.arrow;

        if (arrow) {
          var _state$modifiersData$;

          if (((_state$modifiersData$ = state.modifiersData.arrow) == null ? void 0 : _state$modifiersData$.centerOffset) !== 0) {
            arrow.setAttribute("data-hide", "");
          } else {
            arrow.removeAttribute("data-hide");
          }
        }
      }
    }];
  }, [arrowNode, arrowPadding, flip, preventOverflow, offsetProp, gutter, matchWidth]);
  var popperJS = (0, _reactPopper.usePopper)(referenceNode, popperNode, {
    enabled: enabled,
    placement: placement,
    strategy: fixed ? "fixed" : "absolute",
    modifiers: customModifiers.concat(modifiers)
  });
  /**
   * Ensure the popper will be correctly positioned with an extra update
   */

  React.useEffect(function () {
    popperJS.forceUpdate == null ? void 0 : popperJS.forceUpdate();
  });
  var finalPlacement = (_popperJS$state$place = (_popperJS$state = popperJS.state) == null ? void 0 : _popperJS$state.placement) != null ? _popperJS$state$place : placement;
  var arrowStyles = (0, _popper.getArrowStyles)({
    placement: finalPlacement,
    popperArrowStyles: popperJS.styles.arrow,
    arrowSize: arrowSize
  });
  var getReferenceProps = React.useCallback(function (props, _ref) {
    if (props === void 0) {
      props = {};
    }

    if (_ref === void 0) {
      _ref = null;
    }

    return _extends({}, props, {
      ref: (0, _utils.mergeRefs)(setReferenceNode, _ref)
    });
  }, []);
  var getPopperProps = React.useCallback(function (props, _ref) {
    var _popperJS$styles;

    if (props === void 0) {
      props = {};
    }

    if (_ref === void 0) {
      _ref = null;
    }

    return _extends({}, props, popperJS.attributes.popper, {
      ref: (0, _utils.mergeRefs)(setPopperNode, _ref),
      style: _extends({}, props.style, (_popperJS$styles = popperJS.styles) == null ? void 0 : _popperJS$styles.popper)
    });
  }, [popperJS.attributes, popperJS.styles]);
  var getArrowWrapperProps = React.useCallback(function (props, _ref) {
    if (props === void 0) {
      props = {};
    }

    if (_ref === void 0) {
      _ref = null;
    }

    return _extends({}, props, popperJS.attributes.arrow, {
      ref: (0, _utils.mergeRefs)(setArrowNode, _ref),
      style: _extends({}, props.style, arrowStyles)
    });
  }, [popperJS.attributes, arrowStyles]);
  var getArrowProps = React.useCallback(function (props, _ref) {
    if (props === void 0) {
      props = {};
    }

    if (_ref === void 0) {
      _ref = null;
    }

    return _extends({}, props, {
      ref: _ref,
      style: _extends({
        boxShadow: (0, _popper.getBoxShadow)(finalPlacement, arrowShadowColor)
      }, props.style, {
        position: "absolute",
        zIndex: -1,
        width: "100%",
        height: "100%",
        transform: "rotate(45deg)"
      })
    });
  }, [finalPlacement, arrowShadowColor]);
  return {
    transformOrigin: (0, _popper.toTransformOrigin)(finalPlacement),
    getReferenceProps: getReferenceProps,
    getPopperProps: getPopperProps,
    getArrowWrapperProps: getArrowWrapperProps,
    getArrowProps: getArrowProps,
    state: popperJS.state,
    forceUpdate: popperJS.forceUpdate,
    update: popperJS.update,
    placement: finalPlacement
  };
}
//# sourceMappingURL=use-popper.js.map