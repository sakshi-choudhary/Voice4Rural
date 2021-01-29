"use strict";

exports.__esModule = true;
exports.useFocusOnShow = useFocusOnShow;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _useEventListener = require("./use-event-listener");

var _useUpdateEffect = require("./use-update-effect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};

function useFocusOnShow(target, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  var _options = options,
      focusRef = _options.focusRef,
      preventScroll = _options.preventScroll,
      shouldFocus = _options.shouldFocus,
      visible = _options.visible;
  var element = target && "current" in target ? target.current : target;
  var autoFocus = shouldFocus && visible;
  var onFocus = React.useCallback(function () {
    if (!element || !autoFocus) return;
    if ((0, _utils.contains)(element, document.activeElement)) return;

    if (focusRef != null && focusRef.current) {
      (0, _utils.focus)(focusRef.current, {
        preventScroll: preventScroll
      });
    } else {
      var tabbableEls = (0, _utils.getAllFocusable)(element);

      if (tabbableEls.length > 0) {
        (0, _utils.focus)(tabbableEls[0], {
          preventScroll: preventScroll
        });
      }
    }
  }, [autoFocus, preventScroll, element, focusRef]);
  (0, _useUpdateEffect.useUpdateEffect)(function () {
    onFocus();
  }, [onFocus]);
  (0, _useEventListener.useEventListener)("transitionend", onFocus, element);
}
//# sourceMappingURL=use-focus-on-show.js.map