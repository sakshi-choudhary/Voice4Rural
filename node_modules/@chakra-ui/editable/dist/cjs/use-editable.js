"use strict";

exports.__esModule = true;
exports.useEditable = useEditable;

var _hooks = require("@chakra-ui/hooks");

var _utils = require("@chakra-ui/utils");

var _react = require("react");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * React hook for managing the inline renaming of some text.
 *
 * @see Docs https://chakra-ui.com/docs/editable
 */
function useEditable(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      onChangeProp = _props.onChange,
      onCancelProp = _props.onCancel,
      onSubmitProp = _props.onSubmit,
      valueProp = _props.value,
      isDisabled = _props.isDisabled,
      defaultValue = _props.defaultValue,
      startWithEditView = _props.startWithEditView,
      _props$isPreviewFocus = _props.isPreviewFocusable,
      isPreviewFocusable = _props$isPreviewFocus === void 0 ? true : _props$isPreviewFocus,
      _props$submitOnBlur = _props.submitOnBlur,
      submitOnBlur = _props$submitOnBlur === void 0 ? true : _props$submitOnBlur,
      _props$selectAllOnFoc = _props.selectAllOnFocus,
      selectAllOnFocus = _props$selectAllOnFoc === void 0 ? true : _props$selectAllOnFoc,
      placeholder = _props.placeholder,
      onEditProp = _props.onEdit,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["onChange", "onCancel", "onSubmit", "value", "isDisabled", "defaultValue", "startWithEditView", "isPreviewFocusable", "submitOnBlur", "selectAllOnFocus", "placeholder", "onEdit"]);

  var defaultIsEditing = Boolean(startWithEditView && !isDisabled);

  var _useState = (0, _react.useState)(defaultIsEditing),
      isEditing = _useState[0],
      setIsEditing = _useState[1];

  var _useControllableState = (0, _hooks.useControllableState)({
    defaultValue: defaultValue || "",
    value: valueProp,
    onChange: onChangeProp
  }),
      value = _useControllableState[0],
      setValue = _useControllableState[1];
  /**
   * Keep track of the previous value, so if users
   * presses `cancel`, we can revert to it.
   */


  var _useState2 = (0, _react.useState)(value),
      prevValue = _useState2[0],
      setPrevValue = _useState2[1];
  /**
   * Ref to help focus the input in edit mode
   */


  var inputRef = (0, _react.useRef)(null);
  var previewRef = (0, _react.useRef)(null);
  var editButtonRef = (0, _react.useRef)(null);
  var isInteractive = !isEditing || !isDisabled;
  (0, _hooks.useUpdateEffect)(function () {
    if (!isEditing) {
      var _editButtonRef$curren;

      (_editButtonRef$curren = editButtonRef.current) == null ? void 0 : _editButtonRef$curren.focus();
      return;
    }

    if (selectAllOnFocus) {
      var _inputRef$current;

      (_inputRef$current = inputRef.current) == null ? void 0 : _inputRef$current.select();
    } else {
      var _inputRef$current2;

      (_inputRef$current2 = inputRef.current) == null ? void 0 : _inputRef$current2.focus();
    }

    onEditProp == null ? void 0 : onEditProp();
  }, [isEditing, onEditProp, selectAllOnFocus]);
  var onEdit = (0, _react.useCallback)(function () {
    if (isInteractive) {
      setIsEditing(true);
    }
  }, [isInteractive]);
  var onCancel = (0, _react.useCallback)(function () {
    setIsEditing(false);
    setValue(prevValue);
    onCancelProp == null ? void 0 : onCancelProp(prevValue);
  }, [onCancelProp, setValue, prevValue]);
  var onSubmit = (0, _react.useCallback)(function () {
    setIsEditing(false);
    setPrevValue(value);
    onSubmitProp == null ? void 0 : onSubmitProp(value);
  }, [value, onSubmitProp]);
  var onChange = (0, _react.useCallback)(function (event) {
    setValue(event.target.value);
  }, [setValue]);
  var onKeyDown = (0, _react.useCallback)(function (event) {
    var eventKey = (0, _utils.normalizeEventKey)(event);
    var keyMap = {
      Escape: onCancel,
      Enter: function Enter(event) {
        if (!event.shiftKey && !event.metaKey) {
          onSubmit();
        }
      }
    };
    var action = keyMap[eventKey];

    if (action) {
      event.preventDefault();
      action(event);
    }
  }, [onCancel, onSubmit]);
  var isValueEmpty = (0, _utils.isEmpty)(value);

  var getTabIndex = function getTabIndex() {
    var shouldHaveTabIndex = isInteractive && isPreviewFocusable;
    return shouldHaveTabIndex ? 0 : undefined;
  };

  var onBlur = (0, _react.useCallback)(function () {
    if (submitOnBlur) {
      onSubmit();
    }
  }, [submitOnBlur, onSubmit]);

  var getPreviewProps = function getPreviewProps(props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: (0, _utils.mergeRefs)(ref, previewRef),
      children: isValueEmpty ? placeholder : value,
      hidden: isEditing,
      "aria-disabled": (0, _utils.ariaAttr)(isDisabled),
      tabIndex: getTabIndex(),
      onFocus: (0, _utils.callAllHandlers)(props.onFocus, onEdit)
    });
  };

  var getInputProps = function getInputProps(props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      hidden: !isEditing,
      placeholder: placeholder,
      ref: (0, _utils.mergeRefs)(ref, inputRef),
      disabled: isDisabled,
      "aria-disabled": (0, _utils.ariaAttr)(isDisabled),
      value: value,
      onBlur: (0, _utils.callAllHandlers)(props.onBlur, onBlur),
      onChange: (0, _utils.callAllHandlers)(props.onChange, onChange),
      onKeyDown: (0, _utils.callAllHandlers)(props.onKeyDown, onKeyDown)
    });
  };

  var getEditButtonProps = function getEditButtonProps(props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({
      "aria-label": "Edit"
    }, props, {
      type: "button",
      onClick: (0, _utils.callAllHandlers)(props.onClick, onEdit),
      ref: (0, _utils.mergeRefs)(ref, editButtonRef)
    });
  };

  var getSubmitButtonProps = function getSubmitButtonProps(props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      "aria-label": "Submit",
      ref: ref,
      type: "button",
      onClick: (0, _utils.callAllHandlers)(props.onClick, onSubmit)
    });
  };

  var getCancelButtonProps = function getCancelButtonProps(props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({
      "aria-label": "Cancel"
    }, props, {
      ref: ref,
      type: "button",
      onClick: (0, _utils.callAllHandlers)(props.onClick, onCancel)
    });
  };

  return {
    isEditing: isEditing,
    isDisabled: isDisabled,
    isValueEmpty: isValueEmpty,
    value: value,
    onEdit: onEdit,
    onCancel: onCancel,
    onSubmit: onSubmit,
    getPreviewProps: getPreviewProps,
    getInputProps: getInputProps,
    getEditButtonProps: getEditButtonProps,
    getSubmitButtonProps: getSubmitButtonProps,
    getCancelButtonProps: getCancelButtonProps,
    htmlProps: htmlProps
  };
}
//# sourceMappingURL=use-editable.js.map