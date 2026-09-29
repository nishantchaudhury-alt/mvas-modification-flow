function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(function () {
  var React = window.React;
  var WF = Object.freeze({
    ink: '#0F172A',
    inkSoft: '#475569',
    inkLabel: '#64748B',
    inkFaint: '#94A3B8',
    panel: '#FFFFFF',
    fill: '#F8FAFC',
    fillStrong: '#E2E8F0',
    line: '#E2E8F0',
    lineSoft: '#EEF2F6',
    controlLine: '#7C8B9F',
    accent: '#1B2434',
    accentInk: '#1B2434',
    accentTint: '#EFF6FF',
    accentLine: '#DBEAFE'
  });
  function PortableSelect(_ref) {
    var value = _ref.value,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      onValueChange = _ref.onValueChange,
      ariaLabel = _ref.ariaLabel,
      ariaDescribedBy = _ref.ariaDescribedBy,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$menuMinWidth = _ref.menuMinWidth,
      menuMinWidth = _ref$menuMinWidth === void 0 ? 200 : _ref$menuMinWidth,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 32 : _ref$height,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 12 : _ref$fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 600 : _ref$fontWeight,
      _ref$showSelectedMeta = _ref.showSelectedMeta,
      showSelectedMeta = _ref$showSelectedMeta === void 0 ? true : _ref$showSelectedMeta,
      _ref$menuZIndex = _ref.menuZIndex,
      menuZIndex = _ref$menuZIndex === void 0 ? 'var(--ds-layer-popover, 40)' : _ref$menuZIndex;
    var normalizedValue = value == null ? '' : String(value);
    var selectedIndex = options.findIndex(function (option) {
      return String(option.value) === normalizedValue;
    });
    var selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;
    var enabledIndices = options.map(function (option, index) {
      return option.disabled ? -1 : index;
    }).filter(function (index) {
      return index >= 0;
    });
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];
    var _React$useState3 = React.useState(selectedIndex),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      activeIndex = _React$useState4[0],
      setActiveIndex = _React$useState4[1];
    var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      triggerHovered = _React$useState6[0],
      setTriggerHovered = _React$useState6[1];
    var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      menuPosition = _React$useState8[0],
      setMenuPosition = _React$useState8[1];
    var triggerRef = React.useRef(null);
    var rootRef = React.useRef(null);
    var menuRef = React.useRef(null);
    var reactId = React.useId();
    var menuId = "portable-select-".concat(reactId.replace(/:/g, ''));
    var moveActive = function moveActive(direction) {
      if (!enabledIndices.length) return;
      var currentPosition = enabledIndices.indexOf(activeIndex);
      var nextPosition = currentPosition < 0 ? direction > 0 ? 0 : enabledIndices.length - 1 : (currentPosition + direction + enabledIndices.length) % enabledIndices.length;
      setActiveIndex(enabledIndices[nextPosition]);
    };
    var openMenu = function openMenu() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (disabled || !enabledIndices.length) return;
      var fallback = direction < 0 ? enabledIndices[enabledIndices.length - 1] : enabledIndices[0];
      setActiveIndex(selectedIndex >= 0 && !options[selectedIndex].disabled ? selectedIndex : fallback);
      setOpen(true);
    };
    var chooseOption = function chooseOption(index) {
      var option = options[index];
      if (!option || option.disabled) return;
      onValueChange && onValueChange(option.value);
      setOpen(false);
      window.requestAnimationFrame(function () {
        return triggerRef.current && triggerRef.current.focus();
      });
    };
    React.useLayoutEffect(function () {
      if (!open || !triggerRef.current) return undefined;
      var placeMenu = function placeMenu() {
        var rect = triggerRef.current.getBoundingClientRect();
        var menuWidth = Math.min(Math.max(rect.width, menuMinWidth), window.innerWidth - 16);
        var spaceBelow = window.innerHeight - rect.bottom;
        var openAbove = spaceBelow < 200 && rect.top > spaceBelow;
        var left = Math.max(8, Math.min(rect.left, window.innerWidth - menuWidth - 8));
        setMenuPosition(openAbove ? {
          left: left,
          bottom: window.innerHeight - rect.top + 4,
          width: menuWidth
        } : {
          left: left,
          top: rect.bottom + 4,
          width: menuWidth
        });
      };
      placeMenu();
      window.addEventListener('resize', placeMenu);
      window.addEventListener('scroll', placeMenu, true);
      return function () {
        window.removeEventListener('resize', placeMenu);
        window.removeEventListener('scroll', placeMenu, true);
      };
    }, [open, width, menuMinWidth]);
    React.useEffect(function () {
      if (!open) return undefined;
      var onPointerDown = function onPointerDown(event) {
        if (rootRef.current && rootRef.current.contains(event.target)) return;
        if (menuRef.current && menuRef.current.contains(event.target)) return;
        setOpen(false);
      };
      document.addEventListener('mousedown', onPointerDown);
      return function () {
        return document.removeEventListener('mousedown', onPointerDown);
      };
    }, [open]);
    React.useEffect(function () {
      if (!open || activeIndex < 0) return;
      var activeOption = document.getElementById("".concat(menuId, "-option-").concat(activeIndex));
      if (activeOption) activeOption.scrollIntoView({
        block: 'nearest'
      });
    }, [open, activeIndex, menuId]);
    var onTriggerKeyDown = function onTriggerKeyDown(event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (!open) openMenu(event.key === 'ArrowUp' ? -1 : 1);else moveActive(event.key === 'ArrowUp' ? -1 : 1);
        return;
      }
      if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
        event.preventDefault();
        if (!open) openMenu();else if (activeIndex >= 0) chooseOption(activeIndex);
        return;
      }
      if (event.key === 'Home' || event.key === 'End') {
        if (!open) return;
        event.preventDefault();
        setActiveIndex(event.key === 'Home' ? enabledIndices[0] : enabledIndices[enabledIndices.length - 1]);
        return;
      }
      if (event.key === 'Escape' && open) {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key === 'Tab') setOpen(false);
    };
    var menu = open && menuPosition && React.createElement("div", {
      ref: menuRef,
      id: menuId,
      role: "listbox",
      "aria-label": ariaLabel,
      style: _objectSpread(_objectSpread({
        position: 'fixed'
      }, menuPosition), {}, {
        zIndex: menuZIndex,
        maxHeight: 240,
        overflowY: 'auto',
        padding: 4,
        border: "1px solid ".concat(WF.line),
        borderRadius: 8,
        background: WF.panel,
        boxShadow: '0 8px 24px rgba(15,23,42,.14)',
        fontFamily: 'inherit'
      })
    }, options.map(function (option, index) {
      var selected = index === selectedIndex;
      var active = index === activeIndex;
      return React.createElement("button", {
        key: "".concat(option.value, "-").concat(index),
        id: "".concat(menuId, "-option-").concat(index),
        type: "button",
        role: "option",
        "aria-selected": selected,
        "aria-disabled": option.disabled || undefined,
        disabled: option.disabled,
        onMouseDown: function onMouseDown(event) {
          return event.preventDefault();
        },
        onMouseEnter: function onMouseEnter() {
          return !option.disabled && setActiveIndex(index);
        },
        onClick: function onClick() {
          return chooseOption(index);
        },
        style: {
          width: '100%',
          minHeight: 36,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 12px',
          border: 0,
          borderRadius: 6,
          textAlign: 'left',
          background: active || selected ? WF.accentTint : 'transparent',
          color: option.disabled ? WF.inkFaint : WF.ink,
          fontFamily: 'inherit',
          fontSize: fontSize,
          fontWeight: selected ? 700 : 500,
          cursor: option.disabled ? 'not-allowed' : 'pointer',
          opacity: option.disabled ? 0.56 : 1
        }
      }, React.createElement("span", {
        style: {
          minWidth: 0,
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, option.label), option.meta != null && React.createElement("span", {
        style: {
          padding: '4px 8px',
          borderRadius: 999,
          background: WF.fill,
          color: WF.inkSoft,
          fontSize: 12,
          fontWeight: 600,
          lineHeight: '16px'
        }
      }, option.meta), selected && React.createElement("svg", {
        "aria-hidden": "true",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        style: {
          flexShrink: 0,
          color: WF.accent
        }
      }, React.createElement("path", {
        d: "M2.5 7.2 5.4 10 11.5 3.8",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })));
    }));
    return React.createElement("div", {
      ref: rootRef,
      style: {
        position: 'relative',
        width: width,
        minWidth: 0
      }
    }, React.createElement("button", {
      ref: triggerRef,
      type: "button",
      role: "combobox",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-haspopup": "listbox",
      "aria-autocomplete": "none",
      "aria-expanded": open,
      "aria-controls": menuId,
      "aria-activedescendant": open && activeIndex >= 0 ? "".concat(menuId, "-option-").concat(activeIndex) : undefined,
      disabled: disabled,
      onClick: function onClick() {
        return open ? setOpen(false) : openMenu();
      },
      onKeyDown: onTriggerKeyDown,
      onMouseEnter: function onMouseEnter() {
        return setTriggerHovered(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setTriggerHovered(false);
      },
      style: {
        width: '100%',
        height: height,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 12px',
        borderRadius: 6,
        border: "1px solid ".concat(open ? WF.accent : WF.controlLine),
        background: disabled ? WF.fill : triggerHovered ? WF.fill : WF.panel,
        color: selectedOption && !selectedOption.placeholder ? WF.ink : WF.inkFaint,
        boxShadow: open ? "0 0 0 2px ".concat(WF.accentLine) : 'none',
        fontFamily: 'inherit',
        fontSize: fontSize,
        fontWeight: fontWeight,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.64 : 1,
        transition: 'background-color 120ms ease, border-color 120ms ease, box-shadow 120ms ease'
      }
    }, React.createElement("span", {
      style: {
        minWidth: 0,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textAlign: 'left'
      }
    }, selectedOption ? selectedOption.triggerLabel || selectedOption.label : 'Select an option'), showSelectedMeta && selectedOption && selectedOption.meta != null && React.createElement("span", {
      style: {
        padding: '4px 8px',
        borderRadius: 999,
        background: WF.fill,
        color: WF.inkSoft,
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '16px'
      }
    }, selectedOption.triggerMeta || selectedOption.meta), React.createElement("svg", {
      "aria-hidden": "true",
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      style: {
        flexShrink: 0,
        color: WF.inkSoft,
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform 120ms ease'
      }
    }, React.createElement("path", {
      d: "m3 5 4 4 4-4",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), menu && typeof ReactDOM !== 'undefined' ? ReactDOM.createPortal(menu, document.body) : menu);
  }
  var PORTABLE_CABIN_SUPP_PREFIX = 'cabin:';
  var portableCabinSuppKey = function portableCabinSuppKey(cabinId) {
    return PORTABLE_CABIN_SUPP_PREFIX + cabinId;
  };
  var portableIsCabinSuppKey = function portableIsCabinSuppKey(key) {
    return typeof key === 'string' && key.indexOf(PORTABLE_CABIN_SUPP_PREFIX) === 0;
  };
  function pruneCabinSuppAssignments(suppAssignments, cabins) {
    var valid = new Set((cabins || []).map(function (cabin) {
      return portableCabinSuppKey(cabin.id);
    }));
    var nextAssignments = {};
    var nextQuantities = {};
    Object.entries(suppAssignments || {}).forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        supplementId = _ref3[0],
        assignment = _ref3[1];
      var kept = {};
      Object.entries(assignment || {}).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          value = _ref5[1];
        if (portableIsCabinSuppKey(key) && !valid.has(key)) return;
        kept[key] = value;
      });
      if (Object.keys(kept).length > 0) {
        nextAssignments[supplementId] = kept;
        nextQuantities[supplementId] = Object.values(kept).reduce(function (sum, value) {
          return sum + value;
        }, 0);
      }
    });
    return {
      suppAssignments: nextAssignments,
      selectedSupps: nextQuantities
    };
  }
  var STATEROOM_ROWS = [{
    id: 'I6',
    cat: 'IS',
    label: 'Interior Stateroom – I6',
    color: '#F59E0B',
    price: 472,
    total: 2,
    single: 0,
    "double": 2,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'mid'
  }, {
    id: 'I7',
    cat: 'IS',
    label: 'Cozy Interior Quad – I7',
    color: '#EAB308',
    price: 472,
    total: 6,
    single: 0,
    "double": 5,
    dbinf: 0,
    triple: 1,
    trinf: 0,
    quad: 0,
    location: 'aft'
  }, {
    id: 'I8',
    cat: 'IS',
    label: 'Cozy Interior – I8',
    color: '#84CC16',
    price: 472,
    total: 1,
    single: 0,
    "double": 1,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'fwd'
  }, {
    id: 'O4',
    cat: 'OV',
    label: 'Picturesque Oceanview Pullman – O4',
    color: '#A855F7',
    price: 512,
    total: 0,
    single: 0,
    "double": 0,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'mid'
  }, {
    id: 'O5',
    cat: 'OV',
    label: 'Picturesque Oceanview – O5',
    color: '#EF4444',
    price: 512,
    total: 0,
    single: 0,
    "double": 0,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'fwd'
  }, {
    id: 'I8G',
    cat: 'BAL',
    label: 'Category I8-G',
    color: '#8B5CF6',
    price: 499,
    total: 13,
    single: 0,
    "double": 0,
    dbinf: 0,
    triple: 13,
    trinf: 0,
    quad: 0,
    location: 'mid'
  }, {
    id: 'B2',
    cat: 'BAL',
    label: 'Balcony Deluxe – B2',
    color: '#6366F1',
    price: 549,
    total: 8,
    single: 0,
    "double": 4,
    dbinf: 2,
    triple: 2,
    trinf: 0,
    quad: 0,
    location: 'fwd'
  }, {
    id: 'B3',
    cat: 'BAL',
    label: 'Balcony Premium – B3',
    color: '#0EA5E9',
    price: 579,
    total: 5,
    single: 0,
    "double": 3,
    dbinf: 0,
    triple: 2,
    trinf: 0,
    quad: 0,
    location: 'aft'
  }, {
    id: 'S1',
    cat: 'STE',
    label: 'Grand Terrace Suite – S1',
    color: '#7C3AED',
    price: 1932,
    total: 0,
    single: 0,
    "double": 0,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'fwd'
  }, {
    id: 'S3',
    cat: 'STE',
    label: 'Junior Suite – S3',
    color: '#6D28D9',
    price: 1732,
    total: 0,
    single: 0,
    "double": 0,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'mid'
  }, {
    id: 'S5',
    cat: 'STE',
    label: 'Owner Suite – S5',
    color: '#5B21B6',
    price: 2250,
    total: 2,
    single: 0,
    "double": 2,
    dbinf: 0,
    triple: 0,
    trinf: 0,
    quad: 0,
    location: 'aft'
  }];
  var STATEROOM_ROOMS = {
    IS: [{
      num: '3104',
      deck: 3,
      a11y: [],
      infantFriendly: true
    }, {
      num: '3106',
      deck: 3,
      a11y: ['wheelchair'],
      infantFriendly: false
    }, {
      num: '3108',
      deck: 3,
      a11y: [],
      infantFriendly: false
    }, {
      num: '3110',
      deck: 3,
      a11y: [],
      infantFriendly: true
    }, {
      num: '4104',
      deck: 4,
      a11y: [],
      infantFriendly: true
    }, {
      num: '4106',
      deck: 4,
      a11y: ['wheelchair'],
      infantFriendly: false
    }, {
      num: '4108',
      deck: 4,
      a11y: [],
      infantFriendly: true
    }, {
      num: '4110',
      deck: 4,
      a11y: [],
      infantFriendly: false
    }, {
      num: '4112',
      deck: 4,
      a11y: ['hearing'],
      infantFriendly: true
    }, {
      num: '4114',
      deck: 4,
      a11y: [],
      infantFriendly: false
    }, {
      num: '4116',
      deck: 4,
      a11y: [],
      infantFriendly: true
    }, {
      num: '4118',
      deck: 4,
      a11y: ['visual'],
      infantFriendly: false
    }, {
      num: '4204',
      deck: 4,
      a11y: [],
      infantFriendly: false
    }, {
      num: '4206',
      deck: 4,
      a11y: [],
      infantFriendly: true
    }, {
      num: '4208',
      deck: 4,
      a11y: ['wheelchair', 'hearing'],
      infantFriendly: true
    }, {
      num: '4210',
      deck: 4,
      a11y: [],
      infantFriendly: false
    }, {
      num: '5304',
      deck: 5,
      a11y: [],
      infantFriendly: false
    }, {
      num: '5306',
      deck: 5,
      a11y: [],
      infantFriendly: true
    }, {
      num: '5308',
      deck: 5,
      a11y: ['visual'],
      infantFriendly: false
    }],
    OV: [{
      num: '5110',
      deck: 5,
      a11y: [],
      infantFriendly: true
    }, {
      num: '5112',
      deck: 5,
      a11y: ['wheelchair'],
      infantFriendly: false
    }, {
      num: '5114',
      deck: 5,
      a11y: [],
      infantFriendly: false
    }, {
      num: '5116',
      deck: 5,
      a11y: [],
      infantFriendly: true
    }, {
      num: '5118',
      deck: 5,
      a11y: ['hearing'],
      infantFriendly: false
    }, {
      num: '5210',
      deck: 5,
      a11y: [],
      infantFriendly: true
    }, {
      num: '5212',
      deck: 5,
      a11y: [],
      infantFriendly: false
    }, {
      num: '5214',
      deck: 5,
      a11y: ['visual'],
      infantFriendly: false
    }],
    BAL: [{
      num: '6110',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6112',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6114',
      deck: 6,
      a11y: ['wheelchair'],
      infantFriendly: false
    }, {
      num: '6116',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6118',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6120',
      deck: 6,
      a11y: ['hearing'],
      infantFriendly: false
    }, {
      num: '6122',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6124',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6126',
      deck: 6,
      a11y: ['visual'],
      infantFriendly: false
    }, {
      num: '6128',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6130',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6132',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6134',
      deck: 6,
      a11y: ['wheelchair', 'hearing'],
      infantFriendly: true
    }, {
      num: '6136',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6210',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6212',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6214',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6216',
      deck: 6,
      a11y: ['visual'],
      infantFriendly: true
    }, {
      num: '6218',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6220',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6222',
      deck: 6,
      a11y: ['wheelchair'],
      infantFriendly: false
    }, {
      num: '6224',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6226',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6228',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6310',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }, {
      num: '6312',
      deck: 6,
      a11y: [],
      infantFriendly: true
    }, {
      num: '6314',
      deck: 6,
      a11y: ['hearing'],
      infantFriendly: false
    }, {
      num: '6316',
      deck: 6,
      a11y: [],
      infantFriendly: false
    }],
    STE: [{
      num: '8101',
      deck: 8,
      a11y: [],
      infantFriendly: true
    }, {
      num: '8102',
      deck: 8,
      a11y: ['wheelchair'],
      infantFriendly: true
    }, {
      num: '8103',
      deck: 8,
      a11y: [],
      infantFriendly: false
    }, {
      num: '8201',
      deck: 8,
      a11y: [],
      infantFriendly: true
    }, {
      num: '8202',
      deck: 8,
      a11y: ['hearing'],
      infantFriendly: false
    }, {
      num: '8203',
      deck: 8,
      a11y: ['visual'],
      infantFriendly: false
    }]
  };
  var STATEROOM_DECKS = [3, 4, 5, 6, 7, 8];
  var ROOMS_PER_DECK = 28;
  var ROW_ROOM_BANDS = {
    I6: 100,
    I7: 130,
    I8: 160,
    O4: 200,
    O5: 230,
    I8G: 300,
    B2: 330,
    B3: 360,
    S1: 400,
    S3: 430,
    S5: 460
  };
  var ROOM_DELTA_AMOUNTS = [35, 50, 25, 65];
  var roomDeltaForOrdinal = function roomDeltaForOrdinal(ordinal) {
    return ROOM_DELTA_AMOUNTS[(Math.max(1, ordinal) - 1) % ROOM_DELTA_AMOUNTS.length];
  };
  var roomDeltaForNumber = function roomDeltaForNumber(roomNumber) {
    var numeric = parseInt(roomNumber, 10);
    return roomDeltaForOrdinal(Number.isFinite(numeric) ? numeric % 100 : 1);
  };
  var STATEROOM_ROOMS_BY_ROW = STATEROOM_ROWS.reduce(function (byRow, row) {
    var band = ROW_ROOM_BANDS[row.id];
    byRow[row.id] = STATEROOM_DECKS.flatMap(function (deck) {
      return Array.from({
        length: ROOMS_PER_DECK
      }, function (_, index) {
        var ordinal = index + 1;
        var roomDelta = roomDeltaForOrdinal(ordinal);
        var a11y = [];
        if (ordinal % 11 === 0) a11y.push('wheelchair');
        if (ordinal % 13 === 0) a11y.push('hearing');
        if (ordinal % 17 === 0) a11y.push('visual');
        return {
          num: "".concat(deck).concat(String(band + ordinal).padStart(3, '0')),
          deck: deck,
          loc: index < 10 ? 'fwd' : index < 19 ? 'mid' : 'aft',
          a11y: a11y,
          infantFriendly: ordinal % 4 === 0 || ordinal % 9 === 0,
          rollawayBed: ordinal % 3 === 0,
          connectedRoom: ordinal % 7 === 0,
          roomDelta: roomDelta,
          premium: roomDelta >= 65
        };
      });
    });
    return byRow;
  }, {});
  var roomsForRow = function roomsForRow(row) {
    return STATEROOM_ROOMS_BY_ROW[row.id] || [];
  };
  var CAT_LABELS = {
    IS: 'Interior',
    OV: 'Oceanview',
    BAL: 'Balcony',
    STE: 'Suite'
  };
  var LOC_LABELS = {
    fwd: 'Forward',
    mid: 'Mid Ship',
    aft: 'Aft Ship'
  };
  var SHIP_POSITION_OPTIONS = [{
    value: '',
    label: 'All positions'
  }].concat(_toConsumableArray(Object.keys(LOC_LABELS).map(function (value) {
    return {
      value: value,
      label: LOC_LABELS[value]
    };
  })));
  var ROOM_ASSIGNMENT_OPTIONS = [{
    value: 'manual',
    label: 'Manual'
  }, {
    value: 'auto',
    label: 'Auto Assign'
  }, {
    value: 'exclude-premium',
    label: 'Exclude Premium'
  }];
  var STATEROOM_DECK_NAMES = {
    4: 'Coastal Confessions',
    5: 'Changes in Attitude',
    6: 'Last Mango',
    7: 'Painted Sky',
    8: 'Limes and Salt',
    9: "5 O'Clock Somewhere",
    10: 'Lucky Star'
  };
  var SP = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
  };
  var RD = {
    sm: 6,
    md: 10,
    lg: 14
  };
  var TEAL = {
    base: WF.accentInk,
    tint: WF.accentTint,
    border: WF.accentLine
  };
  var OK = '#15803D',
    BAD = '#B91C1C';
  var GUEST_TYPES = [{
    key: 'adults',
    label: 'Adults',
    sub: '21+',
    "short": 'A'
  }, {
    key: 'youngAdults',
    label: 'Young Adults',
    sub: '13–21',
    "short": 'YA'
  }, {
    key: 'children',
    label: 'Children',
    sub: '3–12',
    "short": 'C'
  }, {
    key: 'infants',
    label: 'Infants',
    sub: '0–3',
    "short": 'I'
  }];
  var ZERO_GUESTS = {
    adults: 0,
    youngAdults: 0,
    children: 0,
    infants: 0
  };
  var cabinGuestTotal = function cabinGuestTotal(g) {
    return GUEST_TYPES.reduce(function (n, t) {
      return n + (g && g[t.key] || 0);
    }, 0);
  };
  var nextUnfilledCabinSlot = function nextUnfilledCabinSlot(roomsBySlot, activeSlot, qty) {
    for (var offset = 1; offset < qty; offset += 1) {
      var candidate = (activeSlot + offset) % qty;
      if (!roomsBySlot[candidate]) return candidate;
    }
    return activeSlot;
  };
  var cabinCapacity = function cabinCapacity(row) {
    return {
      berths: row.quad > 0 ? 4 : row.triple > 0 || row.trinf > 0 ? 3 : row["double"] > 0 || row.dbinf > 0 ? 2 : row.single > 0 ? 1 : 4,
      cotInfants: row.dbinf > 0 || row.trinf > 0 ? 1 : 0
    };
  };
  var berthedCount = function berthedCount(g, cap) {
    var gg = g || ZERO_GUESTS;
    return (gg.adults || 0) + (gg.youngAdults || 0) + (gg.children || 0) + Math.max(0, (gg.infants || 0) - cap.cotInfants);
  };
  var validateCabin = function validateCabin(g, cap) {
    var gg = g || ZERO_GUESTS;
    var total = cabinGuestTotal(gg);
    var berths = berthedCount(gg, cap);
    return {
      total: total,
      berths: berths,
      warning: total > 0 && (gg.adults || 0) === 0 ? 'No adult 21+' : null
    };
  };
  var assignedInOtherRows = function assignedInOtherRows(selections, exceptRowId) {
    var out = _objectSpread({}, ZERO_GUESTS);
    Object.keys(selections || {}).forEach(function (rowId) {
      if (rowId === exceptRowId) return;
      Object.values(selections[rowId] && selections[rowId].cabinGuests || {}).forEach(function (g) {
        GUEST_TYPES.forEach(function (_ref6) {
          var key = _ref6.key;
          out[key] += g && g[key] || 0;
        });
      });
    });
    return out;
  };
  var categoryIdForSlot = function categoryIdForSlot(originRowId, selection, slot) {
    return (selection && selection.categoryBySlot || {})[slot] || originRowId;
  };
  var categoryRowForSlot = function categoryRowForSlot(originRow, categoryBySlot, slot) {
    return STATEROOM_ROWS.find(function (candidate) {
      return candidate.id === ((categoryBySlot || {})[slot] || originRow.id);
    }) || originRow;
  };
  var roomsTakenByOtherAssignments = function roomsTakenByOtherAssignments(selections, exceptRowId, exceptSlot, categoryRowId) {
    var out = [];
    Object.keys(selections || {}).forEach(function (rowId) {
      var selection = selections[rowId] || {};
      Object.entries(selection.roomsBySlot || {}).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          slotKey = _ref8[0],
          num = _ref8[1];
        var slot = parseInt(slotKey, 10);
        if (!num || rowId === exceptRowId && slot === exceptSlot) return;
        if (categoryIdForSlot(rowId, selection, slot) === categoryRowId) out.push(num);
      });
    });
    return out;
  };
  var cabinSeats = function cabinSeats(cap) {
    return cap.berths + cap.cotInfants;
  };
  var ROOM_FEATURES = [{
    key: 'infant',
    label: 'Crib',
    test: function test(r) {
      return !!r.infantFriendly;
    }
  }, {
    key: 'rollaway',
    label: 'Rollaway',
    test: function test(r) {
      return !!r.rollawayBed;
    }
  }, {
    key: 'wheelchair',
    label: 'Accessible',
    test: function test(r) {
      return r.a11y.includes('wheelchair');
    }
  }, {
    key: 'connected',
    label: 'Connecting',
    test: function test(r) {
      return !!r.connectedRoom;
    }
  }];
  var ROOM_FEATURE_EMOJIS = {
    infant: '👶',
    rollaway: '🛏️',
    wheelchair: '♿',
    connected: '🔗'
  };
  function RoomFeatureEmoji(_ref9) {
    var feature = _ref9.feature,
      _ref9$size = _ref9.size,
      size = _ref9$size === void 0 ? 16 : _ref9$size;
    return React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: size,
        lineHeight: 1,
        flexShrink: 0
      }
    }, ROOM_FEATURE_EMOJIS[feature]);
  }
  function SailboatIcon(_ref10) {
    var _ref10$size = _ref10.size,
      size = _ref10$size === void 0 ? 15 : _ref10$size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false"
    }, React.createElement("path", {
      d: "M10 2.5v10.25"
    }), React.createElement("path", {
      d: "M9.75 3.25 4.5 11h5.25V3.25Z"
    }), React.createElement("path", {
      d: "m10.75 5 4 6h-4V5Z"
    }), React.createElement("path", {
      d: "M3 13h14l-1.2 2.25a3.1 3.1 0 0 1-2.75 1.65h-6.1a3.1 3.1 0 0 1-2.75-1.65L3 13Z"
    }));
  }
  function CabinDetailIcon(_ref11) {
    var name = _ref11.name,
      _ref11$size = _ref11.size,
      size = _ref11$size === void 0 ? 22 : _ref11$size;
    var content = {
      bed: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M3 12.5V7.25A1.25 1.25 0 0 1 4.25 6h4.5A1.25 1.25 0 0 1 10 7.25v5.25"
      }), React.createElement("path", {
        d: "M10 9h5.75A1.25 1.25 0 0 1 17 10.25v2.25M2 12.5h16v4M4 16.5v1.5M16 16.5v1.5"
      })),
      guests: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M7.25 9.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.5 17v-1.5a4.75 4.75 0 0 1 9.5 0V17M14 9a2.5 2.5 0 1 0 0-5M13.5 11.25A4 4 0 0 1 18 15v2"
      })),
      deck: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "m3 6 7-3 7 3-7 3-7-3Z"
      }), React.createElement("path", {
        d: "m3 10 7 3 7-3M3 14l7 3 7-3"
      })),
      location: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M10 18s5-4.4 5-9a5 5 0 1 0-10 0c0 4.6 5 9 5 9Z"
      }), React.createElement("circle", {
        cx: "10",
        cy: "9",
        r: "1.75"
      })),
      crib: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M3 6v10M17 6v10M3 8h14v6H3V8ZM7 8v6M11 8v6M15 8v6M2 16h16"
      })),
      rollaway: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M3 7v7h14v-3.5A1.5 1.5 0 0 0 15.5 9H9V7H3ZM3 14h14"
      }), React.createElement("circle", {
        cx: "5",
        cy: "16.5",
        r: "1"
      }), React.createElement("circle", {
        cx: "15",
        cy: "16.5",
        r: "1"
      })),
      sofa: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M4 10V7.5A1.5 1.5 0 0 1 5.5 6h9A1.5 1.5 0 0 1 16 7.5V10M3 10h14a1 1 0 0 1 1 1v4H2v-4a1 1 0 0 1 1-1ZM4 15v2M16 15v2"
      })),
      pullman: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M3 5h14v7H3V5ZM5.5 8.5h9M5 12v5M15 12v5M5 15h10"
      })),
      single: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M5 18V3h10v15M5 18h10M12 10h.01"
      })),
      connected: React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M8.25 12.25 6.5 14a3.18 3.18 0 0 1-4.5-4.5l2.5-2.5A3.18 3.18 0 0 1 9 7M11.75 7.75 13.5 6A3.18 3.18 0 0 1 18 10.5L15.5 13a3.18 3.18 0 0 1-4.5 0M7 10h6"
      })),
      accessibility: React.createElement(React.Fragment, null, React.createElement("circle", {
        cx: "10",
        cy: "3.5",
        r: "1.5"
      }), React.createElement("path", {
        d: "M8 7h4l1 4h3M10 7l-1 5-3 5M9 12h4l2 5"
      }))
    }[name] || React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "7"
    });
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false"
    }, content);
  }
  function CabinOverviewFact(_ref12) {
    var icon = _ref12.icon,
      label = _ref12.label,
      value = _ref12.value;
    return React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minWidth: 0
      }
    }, React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        borderRadius: RD.sm,
        background: WF.fill,
        color: WF.inkSoft
      }
    }, React.createElement(CabinDetailIcon, {
      name: icon,
      size: 18
    })), React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("dt", {
      style: {
        fontSize: 11,
        lineHeight: '16px',
        color: WF.inkSoft
      }
    }, label), React.createElement("dd", {
      style: {
        margin: 0,
        fontSize: 13,
        lineHeight: '18px',
        fontWeight: 700,
        color: WF.ink
      }
    }, value || 'Not provided')));
  }
  function CabinAmenity(_ref13) {
    var icon = _ref13.icon,
      label = _ref13.label,
      status = _ref13.status,
      _ref13$available = _ref13.available,
      available = _ref13$available === void 0 ? true : _ref13$available;
    return React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minWidth: 0,
        padding: '7px 0',
        color: available ? WF.accentInk : WF.inkSoft
      }
    }, React.createElement("span", {
      style: {
        position: 'relative',
        width: 38,
        height: 38,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        borderRadius: RD.md,
        border: "1px solid ".concat(available ? WF.accentLine : WF.line),
        background: available ? WF.accentTint : WF.fill
      }
    }, React.createElement(CabinDetailIcon, {
      name: icon,
      size: 21
    }), React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        right: -3,
        bottom: -3,
        width: 15,
        height: 15,
        display: 'grid',
        placeItems: 'center',
        borderRadius: 999,
        border: "2px solid ".concat(WF.panel),
        background: available ? WF.accent : WF.fillStrong,
        color: available ? WF.accentText : WF.inkSoft,
        fontSize: 10,
        lineHeight: 1,
        fontWeight: 700
      }
    }, available ? '✓' : '–')), React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: '18px',
        fontWeight: 600,
        color: WF.ink
      }
    }, label), React.createElement("div", {
      style: {
        marginTop: 1,
        fontSize: 11,
        lineHeight: '16px',
        color: available ? WF.inkSoft : WF.inkFaint
      }
    }, status)));
  }
  function CabinSectionLabel(_ref14) {
    var id = _ref14.id,
      children = _ref14.children;
    return React.createElement("div", {
      id: id,
      style: {
        fontSize: 17,
        lineHeight: '24px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        color: WF.ink
      }
    }, children);
  }
  var DEFAULT_CABIN_GALLERY = [{
    src: 'assets/cabin-gallery/interior-stateroom-beds.png',
    alt: 'Interior stateroom with twin beds'
  }, {
    src: 'assets/cabin-gallery/interior-stateroom-desk.png',
    alt: 'Interior stateroom desk, wardrobe, and seating area'
  }, {
    src: 'assets/cabin-gallery/stateroom-bathroom.png',
    alt: 'Stateroom bathroom with vanity and shower'
  }];
  function CabinDetailsDialog(_ref15) {
    var room = _ref15.room,
      row = _ref15.row,
      onClose = _ref15.onClose;
    var cap = cabinCapacity(row);
    var derivedBaseOccupancy = row.single > 0 ? 1 : Math.min(2, cap.berths);
    var baseOccupancy = room.baseOccupancy != null ? room.baseOccupancy : derivedBaseOccupancy;
    var derivedTotalOccupancy = Math.min(4, Math.max(baseOccupancy, cap.berths) + (room.rollawayBed ? 1 : 0) + (room.infantFriendly ? 1 : 0));
    var totalOccupancy = room.totalOccupancy != null ? room.totalOccupancy : derivedTotalOccupancy;
    var deckName = room.deckName || STATEROOM_DECK_NAMES[room.deck];
    var deckLabel = deckName ? "Deck ".concat(room.deck, " \xB7 ").concat(deckName) : "Deck ".concat(room.deck);
    var bedConfiguration = room.baseBedConfiguration || 'Twin beds / queen conversion';
    var hasConvertibleBeds = /twin/i.test(bedConfiguration) && /queen/i.test(bedConfiguration);
    var connectedCabins = Array.isArray(room.connectedCabins) ? room.connectedCabins.length ? room.connectedCabins.join(', ') : 'None' : room.connectedRoom === true ? 'Available — cabin number not provided' : room.connectedRoom === false ? 'None' : 'Not provided';
    var accessibility = (room.a11y || []).map(function (feature) {
      return {
        wheelchair: 'Wheelchair-accessible layout',
        hearing: 'Hearing assistance',
        visual: 'Visual alert system'
      }[feature];
    }).filter(Boolean);
    var providedGallery = Array.isArray(room.gallery) ? room.gallery.filter(Boolean) : [];
    var gallery = providedGallery.length > 0 ? providedGallery : DEFAULT_CABIN_GALLERY;
    return React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 520,
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: 'rgba(15,23,42,0.58)',
        backdropFilter: 'blur(2px)'
      }
    }, React.createElement("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "cabin-details-title-".concat(room.num),
      "aria-describedby": "cabin-details-summary-".concat(room.num),
      style: {
        width: 'min(820px, 100%)',
        maxHeight: '86vh',
        overflowY: 'auto',
        background: WF.panel,
        border: "1px solid ".concat(WF.line),
        borderRadius: RD.lg,
        boxShadow: '0 24px 64px rgba(15,23,42,0.30)'
      }
    }, React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        gap: SP.lg,
        padding: "".concat(SP.lg, "px ").concat(SP.xl, "px"),
        borderBottom: "1px solid ".concat(WF.line),
        background: WF.panel
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      id: "cabin-details-title-".concat(room.num),
      style: {
        fontSize: 20,
        lineHeight: '28px',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        color: WF.ink
      }
    }, "Cabin ", room.num), React.createElement("div", {
      id: "cabin-details-summary-".concat(room.num),
      style: {
        marginTop: 4,
        fontSize: 12,
        lineHeight: '16px',
        color: WF.inkSoft
      }
    }, CAT_LABELS[row.cat], " Stateroom \xB7 ", row.id)), React.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close cabin details",
      autoFocus: true,
      style: {
        marginLeft: 'auto',
        width: 30,
        height: 30,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: "1px solid ".concat(WF.line),
        borderRadius: RD.sm,
        background: WF.panel,
        color: WF.inkSoft,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 16,
        lineHeight: 1,
        flexShrink: 0
      }
    }, "\xD7")), React.createElement("div", {
      style: {
        padding: "".concat(SP.xl, "px ").concat(SP.xl, "px ").concat(SP.lg, "px")
      }
    }, React.createElement("section", {
      "aria-labelledby": "cabin-core-details-".concat(room.num)
    }, React.createElement(CabinSectionLabel, {
      id: "cabin-core-details-".concat(room.num)
    }, "Cabin at a glance"), React.createElement("dl", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
        gap: SP.lg,
        margin: "".concat(SP.lg, "px 0 0")
      }
    }, React.createElement(CabinOverviewFact, {
      icon: "deck",
      label: "Deck",
      value: deckLabel
    }), React.createElement(CabinOverviewFact, {
      icon: "location",
      label: "Location",
      value: LOC_LABELS[room.loc]
    }), React.createElement(CabinOverviewFact, {
      icon: "guests",
      label: "Minimum occupancy",
      value: "".concat(baseOccupancy, " ").concat(baseOccupancy === 1 ? 'guest' : 'guests')
    }))), React.createElement("section", {
      "aria-labelledby": "cabin-sleeping-".concat(room.num),
      style: {
        marginTop: SP.xl,
        paddingTop: SP.xl,
        borderTop: "1px solid ".concat(WF.line)
      }
    }, React.createElement(CabinSectionLabel, {
      id: "cabin-sleeping-".concat(room.num)
    }, "Where guests will sleep"), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        flexWrap: 'wrap',
        width: '100%',
        marginTop: SP.lg,
        padding: 16,
        border: "1px solid ".concat(WF.line),
        borderRadius: RD.lg,
        background: WF.fill
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        minWidth: 0
      }
    }, React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        borderRadius: RD.md,
        border: "1px solid ".concat(WF.line),
        background: WF.panel,
        color: WF.ink
      }
    }, React.createElement(CabinDetailIcon, {
      name: "bed",
      size: 30
    })), React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 11,
        lineHeight: '16px',
        fontWeight: 700,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: WF.inkLabel
      }
    }, "Flexible bed setup"), React.createElement("div", {
      style: {
        marginTop: 2,
        fontSize: 15,
        lineHeight: '20px',
        fontWeight: 700,
        color: WF.ink
      }
    }, hasConvertibleBeds ? 'Twin or queen configuration' : bedConfiguration), React.createElement("div", {
      style: {
        marginTop: 3,
        fontSize: 12,
        lineHeight: '17px',
        color: WF.inkSoft
      }
    }, hasConvertibleBeds ? 'Two twin beds convert to one queen bed.' : "Configured for ".concat(baseOccupancy, " ").concat(baseOccupancy === 1 ? 'guest' : 'guests', ".")))), React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        flexShrink: 0,
        padding: '6px 10px',
        borderRadius: 999,
        border: "1px solid ".concat(WF.accentLine),
        background: WF.accentTint,
        color: WF.accentInk,
        fontSize: 12,
        fontWeight: 700,
        whiteSpace: 'nowrap'
      }
    }, React.createElement(CabinDetailIcon, {
      name: "guests",
      size: 15
    }), "Sleeps ", totalOccupancy))), React.createElement("section", {
      "aria-labelledby": "cabin-suitability-".concat(room.num),
      style: {
        marginTop: SP.xl,
        paddingTop: SP.xl,
        borderTop: "1px solid ".concat(WF.line)
      }
    }, React.createElement(CabinSectionLabel, {
      id: "cabin-suitability-".concat(room.num)
    }, "Cabin features"), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        columnGap: 32,
        rowGap: 2,
        marginTop: SP.sm
      }
    }, React.createElement(CabinAmenity, {
      icon: "crib",
      label: "Infant friendly",
      status: room.infantFriendly === true ? 'Available' : room.infantFriendly === false ? 'Not available' : 'Not specified',
      available: room.infantFriendly === true
    }), React.createElement(CabinAmenity, {
      icon: "rollaway",
      label: "Rollaway bed",
      status: room.rollawayBed === true ? 'Available' : room.rollawayBed === false ? 'Not available' : 'Not specified',
      available: room.rollawayBed === true
    }), React.createElement(CabinAmenity, {
      icon: "sofa",
      label: "Sofa bed",
      status: room.sofaBed === true ? 'Available' : room.sofaBed === false ? 'Not available' : 'Not specified',
      available: room.sofaBed === true
    }), React.createElement(CabinAmenity, {
      icon: "pullman",
      label: "Pullman bed",
      status: room.pullmanBed === true ? 'Available' : room.pullmanBed === false ? 'Not available' : 'Not specified',
      available: room.pullmanBed === true
    }), React.createElement(CabinAmenity, {
      icon: "single",
      label: "Single cabin",
      status: room.singleCabin === true ? 'Yes' : room.singleCabin === false ? 'No' : 'Not specified',
      available: room.singleCabin === true
    }), React.createElement(CabinAmenity, {
      icon: "connected",
      label: "Connected cabins",
      status: connectedCabins,
      available: connectedCabins !== 'None' && connectedCabins !== 'Not provided'
    }), accessibility.map(function (feature) {
      return React.createElement(CabinAmenity, {
        key: feature,
        icon: "accessibility",
        label: feature,
        status: "Available"
      });
    }))), React.createElement("section", {
      "aria-labelledby": "cabin-gallery-".concat(room.num),
      style: {
        marginTop: SP.xl,
        paddingTop: SP.xl,
        borderTop: "1px solid ".concat(WF.line)
      }
    }, React.createElement(CabinSectionLabel, {
      id: "cabin-gallery-".concat(room.num)
    }, "Cabin gallery"), gallery.length > 0 ? React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
        gap: SP.sm,
        marginTop: SP.lg
      }
    }, gallery.map(function (image, index) {
      var source = typeof image === 'string' ? image : image.src;
      var alt = typeof image === 'string' ? "".concat(CAT_LABELS[row.cat], " cabin ").concat(room.num) : image.alt || "".concat(CAT_LABELS[row.cat], " cabin ").concat(room.num);
      return React.createElement("img", {
        key: "".concat(source, "-").concat(index),
        src: source,
        alt: alt,
        style: {
          width: '100%',
          height: 150,
          objectFit: 'cover',
          border: "1px solid ".concat(WF.line),
          borderRadius: RD.md
        }
      });
    })) : React.createElement("div", {
      style: {
        minHeight: 112,
        marginTop: SP.sm,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SP.sm,
        padding: SP.lg,
        border: "1px dashed ".concat(WF.line),
        borderRadius: RD.md,
        background: WF.fill,
        color: WF.inkSoft,
        textAlign: 'center'
      }
    }, React.createElement(SailboatIcon, {
      size: 24
    }), React.createElement("div", null, React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 700,
        color: WF.ink
      }
    }, "No cabin images available"), React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 12,
        lineHeight: '16px'
      }
    }, "Gallery content has not been provided for this cabin.")))), React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: SP.xl,
        paddingTop: SP.lg,
        borderTop: "1px solid ".concat(WF.line)
      }
    }, React.createElement("button", {
      type: "button",
      onClick: onClose,
      style: {
        minHeight: 36,
        padding: '8px 16px',
        border: 'none',
        borderRadius: RD.sm,
        background: WF.accent,
        color: WF.accentText,
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 700,
        cursor: 'pointer'
      }
    }, "Close details")))));
  }
  function QtyControl(_ref16) {
    var value = _ref16.value,
      onChange = _ref16.onChange,
      disabled = _ref16.disabled,
      max = _ref16.max;
    var atMax = max != null && value >= max;
    return React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 0
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return value > 0 && onChange(value - 1);
      },
      disabled: value === 0 || disabled,
      style: {
        width: 22,
        height: 22,
        border: "1px solid ".concat(WF.line),
        borderRadius: '4px 0 0 4px',
        background: value === 0 ? WF.fill : WF.panel,
        color: value === 0 ? WF.inkFaint : WF.ink,
        cursor: value === 0 ? 'default' : 'pointer',
        fontFamily: 'inherit',
        fontSize: 14,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1
      }
    }, "\u2212"), React.createElement("div", {
      style: {
        width: 28,
        height: 22,
        border: "1px solid ".concat(WF.line),
        borderLeft: 'none',
        borderRight: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 700,
        color: WF.ink,
        background: WF.panel
      }
    }, value), React.createElement("button", {
      onClick: function onClick() {
        return !atMax && onChange(value + 1);
      },
      disabled: disabled || atMax,
      title: atMax ? "Only ".concat(max, " room").concat(max === 1 ? '' : 's', " left in this category") : undefined,
      style: {
        width: 22,
        height: 22,
        border: "1px solid ".concat(WF.line),
        borderRadius: '0 4px 4px 0',
        background: atMax ? WF.fill : WF.panel,
        color: atMax ? WF.inkFaint : WF.ink,
        cursor: atMax || disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'inherit',
        fontSize: 14,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1
      }
    }, "+"));
  }
  function NumCell(_ref17) {
    var val = _ref17.val;
    var isZero = val === 0;
    return React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: isZero ? WF.inkSoft : WF.accentInk,
        fontFamily: 'ui-monospace, monospace'
      }
    }, val);
  }
  function GuestAssignmentSummary(_ref18) {
    var partyGuests = _ref18.partyGuests,
      assignedTotals = _ref18.assignedTotals,
      otherAssigned = _ref18.otherAssigned;
    var other = otherAssigned || ZERO_GUESTS;
    var totalParty = GUEST_TYPES.reduce(function (n, t) {
      return n + (partyGuests[t.key] || 0);
    }, 0);
    var totalOther = GUEST_TYPES.reduce(function (n, t) {
      return n + (other[t.key] || 0);
    }, 0);
    var totalAssigned = GUEST_TYPES.reduce(function (n, t) {
      return n + (assignedTotals[t.key] || 0);
    }, 0) + totalOther;
    var complete = totalParty > 0 && totalAssigned === totalParty;
    var over = totalAssigned > totalParty;
    if (complete) return null;
    var tone = over ? BAD : '#92400E';
    return React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: SP.md,
        padding: "".concat(SP.md, "px ").concat(SP.lg, "px"),
        borderRadius: RD.md,
        background: over ? '#FEF2F2' : '#FFFBEB',
        border: "1px solid ".concat(over ? '#FECACA' : '#FDE68A')
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: SP.sm
      }
    }, React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: tone
      }
    }, totalAssigned, " of ", totalParty, " guest", totalParty === 1 ? '' : 's', " assigned"), React.createElement("span", {
      style: {
        fontSize: 12,
        color: tone
      }
    }, over ? '· Too many guests assigned' : "\xB7 ".concat(totalParty - totalAssigned, " remaining"), totalOther > 0 ? " \xB7 ".concat(totalOther, " in other categories") : '')), React.createElement("div", {
      style: {
        display: 'flex',
        gap: SP.lg,
        flexWrap: 'wrap'
      }
    }, GUEST_TYPES.map(function (_ref19) {
      var key = _ref19.key,
        label = _ref19.label;
      var need = partyGuests[key] || 0;
      var got = (assignedTotals[key] || 0) + (other[key] || 0);
      if (need === 0 && got === 0) return null;
      var done = got === need;
      return React.createElement("div", {
        key: key,
        style: {
          fontSize: 12,
          color: done ? WF.inkSoft : '#92400E',
          whiteSpace: 'nowrap'
        }
      }, React.createElement("span", {
        style: {
          fontWeight: 700,
          color: got > need ? BAD : done ? WF.ink : '#92400E',
          fontFamily: 'ui-monospace, monospace'
        }
      }, got, "/", need), " ", label);
    })));
  }
  function CabinCellStepper(_ref20) {
    var value = _ref20.value,
      onChange = _ref20.onChange,
      canAdd = _ref20.canAdd,
      addBlockedReason = _ref20.addBlockedReason;
    return React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0
      }
    }, React.createElement("button", {
      onClick: function onClick() {
        return onChange(Math.max(0, value - 1));
      },
      disabled: value === 0,
      "aria-label": "Remove one",
      style: {
        width: 26,
        height: 26,
        border: "1px solid ".concat(WF.line),
        borderRadius: "".concat(RD.sm, "px 0 0 ").concat(RD.sm, "px"),
        background: '#fff',
        color: value === 0 ? WF.inkFaint : WF.ink,
        cursor: value === 0 ? 'default' : 'pointer',
        fontFamily: 'inherit',
        fontSize: 14,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1
      }
    }, "\u2212"), React.createElement("div", {
      style: {
        width: 30,
        height: 26,
        border: "1px solid ".concat(WF.line),
        borderLeft: 'none',
        borderRight: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 700,
        color: value > 0 ? WF.ink : WF.inkFaint,
        background: '#F8FAFC',
        fontFamily: 'ui-monospace, monospace'
      }
    }, value), React.createElement("button", {
      onClick: function onClick() {
        return canAdd && onChange(value + 1);
      },
      disabled: !canAdd,
      title: canAdd ? undefined : addBlockedReason,
      "aria-label": "Add one",
      style: {
        width: 26,
        height: 26,
        border: 'none',
        borderRadius: "0 ".concat(RD.sm, "px ").concat(RD.sm, "px 0"),
        background: canAdd ? TEAL.base : WF.fillStrong,
        color: canAdd ? '#fff' : WF.inkFaint,
        cursor: canAdd ? 'pointer' : 'not-allowed',
        fontFamily: 'inherit',
        fontSize: 14,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 1
      }
    }, "+"));
  }
  function CabinAssignmentTable(_ref21) {
    var row = _ref21.row,
      qty = _ref21.qty,
      categoryBySlot = _ref21.categoryBySlot,
      roomsBySlot = _ref21.roomsBySlot,
      cabinGuests = _ref21.cabinGuests,
      activeSlot = _ref21.activeSlot,
      partyGuests = _ref21.partyGuests,
      otherAssigned = _ref21.otherAssigned,
      _ref21$showGuestTypes = _ref21.showGuestTypes,
      showGuestTypes = _ref21$showGuestTypes === void 0 ? true : _ref21$showGuestTypes,
      onSelectSlot = _ref21.onSelectSlot,
      onGuestChange = _ref21.onGuestChange,
      onSwitchCategory = _ref21.onSwitchCategory;
    var TYPES = [{
      key: 'adults',
      icon: '🧑',
      label: 'Adults',
      sub: 'Age 21+'
    }, {
      key: 'youngAdults',
      icon: '🧑',
      label: 'Young Adults',
      sub: 'Age 13-21'
    }, {
      key: 'children',
      icon: '🧒',
      label: 'Children',
      sub: 'Age 3-12'
    }, {
      key: 'infants',
      icon: '👶',
      label: 'Infants',
      sub: 'Age 0-3'
    }];
    var LABEL_COL = showGuestTypes ? 140 : 0;
    var CABIN_COL = 228;
    var TABLE_WIDTH = LABEL_COL + qty * CABIN_COL;
    var categoryOptions = STATEROOM_ROWS.map(function (category) {
      return {
        value: category.id,
        label: category.label,
        triggerLabel: category.label.replace(' Stateroom', ''),
        meta: category.total === 0 ? 'Sold out' : "$".concat(category.price.toLocaleString(), " / room"),
        triggerMeta: category.total === 0 ? 'Sold out' : "$".concat(category.price.toLocaleString()),
        disabled: category.total === 0
      };
    });
    var other = otherAssigned || ZERO_GUESTS;
    var partyRemaining = {};
    TYPES.forEach(function (_ref22) {
      var key = _ref22.key;
      var assigned = Array.from({
        length: qty
      }, function (_, i) {
        return (cabinGuests[i] || ZERO_GUESTS)[key] || 0;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
      partyRemaining[key] = ((partyGuests || ZERO_GUESTS)[key] || 0) - (other[key] || 0) - assigned;
    });
    var scrollRef = React.useRef(null);
    var _React$useState9 = React.useState({
        left: false,
        right: false
      }),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      scrollState = _React$useState10[0],
      setScrollState = _React$useState10[1];
    var updateScrollShadows = React.useCallback(function () {
      var el = scrollRef.current;
      if (!el) return;
      setScrollState({
        left: el.scrollLeft > 2,
        right: el.scrollLeft < el.scrollWidth - el.clientWidth - 2
      });
    }, []);
    React.useEffect(function () {
      updateScrollShadows();
      window.addEventListener('resize', updateScrollShadows);
      return function () {
        return window.removeEventListener('resize', updateScrollShadows);
      };
    }, [updateScrollShadows, qty]);
    React.useEffect(function () {
      var el = scrollRef.current;
      if (!el) return;
      var colLeft = LABEL_COL + activeSlot * CABIN_COL;
      var colRight = colLeft + CABIN_COL;
      if (colLeft < el.scrollLeft) el.scrollTo({
        left: colLeft,
        behavior: 'smooth'
      });else if (colRight > el.scrollLeft + el.clientWidth) el.scrollTo({
        left: colRight - el.clientWidth,
        behavior: 'smooth'
      });
    }, [activeSlot]);
    return React.createElement("div", null, qty > 4 && React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
        fontSize: 12,
        color: WF.inkSoft
      }
    }, React.createElement("span", null, "\u2194"), " Scroll to see all ", qty, " cabins"), React.createElement("div", {
      style: {
        position: 'relative',
        width: TABLE_WIDTH + 2,
        maxWidth: '100%',
        border: "1px solid ".concat(WF.line),
        borderRadius: 10,
        overflow: 'hidden',
        background: '#fff'
      }
    }, React.createElement("div", {
      className: "stateroom-cabin-scroll",
      role: "region",
      "aria-label": showGuestTypes ? qty > 1 ? "".concat(qty, " cabin assignments; scroll horizontally to view all cabins") : 'Cabin assignment' : qty > 1 ? "".concat(qty, " cabin summaries; scroll horizontally to view all cabins") : 'Cabin summary',
      "data-scrollable": qty > 4 ? 'true' : 'false',
      tabIndex: qty > 4 ? 0 : undefined,
      ref: scrollRef,
      onScroll: updateScrollShadows,
      style: {
        width: '100%',
        maxWidth: '100%',
        overflowX: qty > 4 ? 'scroll' : 'auto',
        overflowY: 'hidden',
        scrollbarGutter: qty > 4 ? 'stable' : 'auto',
        overscrollBehaviorX: 'contain'
      }
    }, React.createElement("table", {
      style: {
        width: TABLE_WIDTH,
        borderCollapse: 'collapse',
        tableLayout: 'fixed'
      }
    }, React.createElement("colgroup", null, showGuestTypes && React.createElement("col", {
      style: {
        width: LABEL_COL
      }
    }), Array.from({
      length: qty
    }, function (_, i) {
      return React.createElement("col", {
        key: i,
        style: {
          width: CABIN_COL
        }
      });
    })), React.createElement("thead", null, React.createElement("tr", null, showGuestTypes && React.createElement("th", {
      style: {
        position: 'sticky',
        left: 0,
        zIndex: 2,
        padding: '12px 16px',
        textAlign: 'left',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: WF.inkLabel,
        textTransform: 'uppercase',
        background: '#F8FAFC',
        borderBottom: "1px solid ".concat(WF.line),
        boxShadow: scrollState.left ? '2px 0 6px rgba(15,23,42,0.08)' : 'none'
      }
    }, "Guest Type"), Array.from({
      length: qty
    }, function (_, i) {
      var roomNum = roomsBySlot[i];
      var isActive = activeSlot === i;
      var slotRow = categoryRowForSlot(row, categoryBySlot, i);
      var slotCap = cabinCapacity(slotRow);
      var v = validateCabin(cabinGuests[i], slotCap);
      return React.createElement("th", {
        key: i,
        style: {
          padding: 8,
          textAlign: 'center',
          verticalAlign: 'top',
          background: isActive ? WF.accentTint : '#F8FAFC',
          borderBottom: "2px solid ".concat(isActive ? WF.accent : WF.line),
          borderLeft: "1px solid ".concat(WF.lineSoft),
          transition: 'background-color 120ms ease'
        }
      }, React.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return onSelectSlot(i);
        },
        "aria-pressed": isActive,
        "aria-label": "Work on Cabin ".concat(i + 1).concat(roomNum ? ", room ".concat(roomNum) : ', room pending'),
        style: {
          width: '100%',
          minHeight: 24,
          padding: 0,
          border: 0,
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          color: WF.ink,
          cursor: 'pointer',
          fontFamily: 'inherit'
        }
      }, React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          whiteSpace: 'nowrap'
        }
      }, "Cabin ", i + 1), roomNum ? React.createElement("span", {
        title: "Room ".concat(roomNum, " assigned"),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          padding: '4px 8px',
          borderRadius: 999,
          border: '1px solid var(--ds-badge-success-border, #A7F3D0)',
          background: 'var(--ds-badge-success-bg, #D1FAE5)',
          color: 'var(--ds-badge-success-text, #047857)',
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 700,
          fontFamily: 'ui-monospace, monospace',
          whiteSpace: 'nowrap'
        }
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\u2713"), "#", roomNum) : React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: isActive ? 700 : 500,
          color: isActive ? WF.accent : WF.inkFaint,
          whiteSpace: 'nowrap'
        }
      }, isActive ? 'Selecting room' : 'Room pending')), React.createElement("div", {
        style: {
          width: '100%',
          maxWidth: 260,
          margin: '4px auto 0',
          textAlign: 'left'
        }
      }, React.createElement(PortableSelect, {
        value: slotRow.id,
        onValueChange: function onValueChange(newRowId) {
          onSelectSlot(i);
          onSwitchCategory(i, newRowId);
        },
        ariaLabel: "Stateroom category for Cabin ".concat(i + 1),
        width: "100%",
        menuMinWidth: 260,
        menuZIndex: "var(--ds-layer-modal-nested, 520)",
        showSelectedMeta: true,
        fontWeight: 700,
        options: categoryOptions
      })), v.warning && React.createElement("div", {
        style: {
          height: 13,
          marginTop: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: '#92400E',
          whiteSpace: 'nowrap'
        }
      }, "\u26A0 ", v.warning)));
    }))), showGuestTypes && React.createElement("tbody", null, TYPES.map(function (_ref23, ri) {
      var key = _ref23.key,
        icon = _ref23.icon,
        label = _ref23.label,
        sub = _ref23.sub;
      return React.createElement("tr", {
        key: key
      }, React.createElement("td", {
        style: {
          position: 'sticky',
          left: 0,
          zIndex: 1,
          background: '#fff',
          padding: '12px 16px',
          borderBottom: ri < TYPES.length - 1 ? "1px solid ".concat(WF.lineSoft) : 'none',
          boxShadow: scrollState.left ? '2px 0 6px rgba(15,23,42,0.08)' : 'none'
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, React.createElement("span", {
        style: {
          fontSize: 14
        }
      }, icon), React.createElement("div", null, React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: WF.ink,
          whiteSpace: 'nowrap'
        }
      }, label), React.createElement("div", {
        style: {
          fontSize: 12,
          color: WF.inkSoft,
          whiteSpace: 'nowrap'
        }
      }, sub)))), Array.from({
        length: qty
      }, function (_, i) {
        var g = cabinGuests[i] || ZERO_GUESTS;
        var partyOk = partyRemaining[key] > 0;
        return React.createElement("td", {
          key: i,
          style: {
            padding: "".concat(SP.md, "px ").concat(SP.sm, "px"),
            textAlign: 'center',
            borderBottom: ri < TYPES.length - 1 ? "1px solid ".concat(WF.lineSoft) : 'none',
            borderLeft: "1px solid ".concat(WF.lineSoft),
            background: '#fff'
          }
        }, React.createElement(CabinCellStepper, {
          value: g[key] || 0,
          canAdd: partyOk,
          addBlockedReason: "All ".concat(label.toLowerCase(), " in this party are already assigned"),
          onChange: function onChange(v) {
            return onGuestChange(i, key, v);
          }
        }));
      }));
    })), showGuestTypes && React.createElement("tfoot", null, React.createElement("tr", null, React.createElement("td", {
      style: {
        position: 'sticky',
        left: 0,
        zIndex: 1,
        background: '#F8FAFC',
        padding: "".concat(SP.sm, "px ").concat(SP.lg, "px"),
        borderTop: "1px solid ".concat(WF.line),
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: WF.inkLabel,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        boxShadow: scrollState.left ? '2px 0 6px rgba(15,23,42,0.08)' : 'none'
      }
    }, "In cabin"), Array.from({
      length: qty
    }, function (_, i) {
      var slotCap = cabinCapacity(categoryRowForSlot(row, categoryBySlot, i));
      var v = validateCabin(cabinGuests[i], slotCap);
      var full = v.total > 0 && v.berths === slotCap.berths;
      var tone = full ? OK : v.total > 0 ? WF.ink : WF.inkFaint;
      return React.createElement("td", {
        key: i,
        style: {
          padding: "".concat(SP.sm, "px"),
          textAlign: 'center',
          borderTop: "1px solid ".concat(WF.line),
          borderLeft: "1px solid ".concat(WF.lineSoft),
          background: '#F8FAFC'
        }
      }, React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: tone,
          fontFamily: 'ui-monospace, monospace'
        }
      }, v.total, full ? ' ✓' : ''));
    }))))), scrollState.right && React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 28,
        pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(15,23,42,0.06))'
      }
    })));
  }
  function FeatureChip(_ref24) {
    var icon = _ref24.icon,
      label = _ref24.label,
      active = _ref24.active,
      onClick = _ref24.onClick;
    return React.createElement("button", {
      type: "button",
      onClick: onClick,
      "aria-pressed": !!active,
      "aria-label": label,
      title: label,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        height: 30,
        padding: '0 8px',
        borderRadius: 6,
        fontSize: 12,
        fontWeight: active ? 700 : 600,
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
        border: "1px solid ".concat(active ? TEAL.border : WF.line),
        background: active ? TEAL.tint : WF.panel,
        color: active ? TEAL.base : WF.inkSoft,
        cursor: 'pointer',
        transition: 'all 0.12s',
        flexShrink: 0
      },
      onMouseEnter: function onMouseEnter(e) {
        if (!active) e.currentTarget.style.borderColor = TEAL.border;
      },
      onMouseLeave: function onMouseLeave(e) {
        if (!active) e.currentTarget.style.borderColor = WF.line;
      }
    }, icon && React.createElement(RoomFeatureEmoji, {
      feature: icon
    }), label);
  }
  var ROOM_STATE_STYLE = {
    selected: {
      border: WF.accent,
      bg: WF.accentTint,
      num: WF.accent,
      opacity: 1
    },
    taken: {
      border: WF.line,
      bg: WF.fill,
      num: WF.inkFaint,
      opacity: 1
    },
    available: {
      border: WF.line,
      bg: WF.panel,
      num: WF.ink,
      opacity: 1
    },
    filtered: {
      border: WF.lineSoft,
      bg: WF.fill,
      num: WF.inkFaint,
      opacity: 0.58
    }
  };
  function RoomCard(_ref25) {
    var room = _ref25.room,
      state = _ref25.state,
      ownerSlot = _ref25.ownerSlot,
      onClick = _ref25.onClick,
      onShowDetails = _ref25.onShowDetails,
      disabled = _ref25.disabled;
    var s = ROOM_STATE_STYLE[state];
    var tags = ROOM_FEATURES.filter(function (f) {
      return f.test(room);
    });
    var roomDelta = Number.isFinite(Number(room.roomDelta)) ? Number(room.roomDelta) : roomDeltaForNumber(room.num);
    var statusLabel = state === 'selected' ? "\u2713 Cabin ".concat(ownerSlot + 1) : state === 'taken' ? "Cabin ".concat(ownerSlot + 1) : state === 'filtered' ? 'Doesn’t match' : 'Available';
    var statusColor = state === 'selected' ? WF.accent : state === 'taken' || state === 'filtered' ? WF.inkSoft : '#047857';
    return React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: 116,
        borderRadius: RD.sm,
        border: "1px solid ".concat(s.border),
        background: s.bg,
        opacity: s.opacity,
        overflow: 'hidden',
        boxShadow: state === 'selected' ? "inset 0 0 0 1px ".concat(WF.accent) : '0 1px 1px rgba(15,23,42,0.03)',
        transition: 'background-color 0.12s, border-color 0.12s, box-shadow 0.12s'
      }
    }, React.createElement("button", {
      type: "button",
      onClick: onClick,
      disabled: disabled,
      "aria-pressed": state === 'selected',
      "aria-label": "Room ".concat(room.num, ", deck ").concat(room.deck, ", adds $").concat(roomDelta, " to the booking total, ").concat(LOC_LABELS[room.loc], ", ").concat(statusLabel).concat(tags.length ? ", ".concat(tags.map(function (f) {
        return f.label;
      }).join(', ')) : ''),
      style: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        textAlign: 'left',
        width: '100%',
        minHeight: 84,
        padding: '8px 12px',
        border: 'none',
        background: 'transparent',
        color: 'inherit',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontFamily: 'inherit',
        transition: 'background-color 0.12s'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (!disabled && state !== 'selected') e.currentTarget.style.background = WF.accentTint;
      },
      onMouseLeave: function onMouseLeave(e) {
        if (!disabled && state !== 'selected') e.currentTarget.style.background = 'transparent';
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        width: '100%'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: '24px',
        letterSpacing: '-0.01em',
        color: s.num,
        fontFamily: 'ui-monospace, monospace'
      }
    }, room.num), React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        minWidth: 0,
        color: statusColor,
        fontSize: 12,
        fontWeight: 700,
        whiteSpace: 'nowrap'
      }
    }, React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        flexShrink: 0,
        background: state === 'selected' ? WF.accent : state === 'available' ? '#059669' : WF.inkFaint
      }
    }), statusLabel)), React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 8,
        width: '100%'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: WF.inkSoft
      }
    }, LOC_LABELS[room.loc]), React.createElement("span", {
      title: "Adds $".concat(roomDelta, " to the booking total"),
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: WF.ink,
        fontFamily: 'ui-monospace, monospace',
        whiteSpace: 'nowrap'
      }
    }, "+$", roomDelta.toLocaleString())), React.createElement("div", {
      style: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
        width: '100%'
      }
    }, tags.length === 0 && React.createElement("span", {
      style: {
        fontSize: 12,
        color: WF.inkFaint
      }
    }, "Standard room"), tags.map(function (f) {
      return React.createElement("span", {
        key: f.key,
        title: f.label,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          minHeight: 20,
          padding: '4px 4px',
          borderRadius: 4,
          border: "1px solid ".concat(state === 'selected' ? WF.accentLine : WF.line),
          background: state === 'selected' ? '#FFFFFF' : WF.fill,
          color: state === 'selected' ? WF.accent : WF.inkSoft,
          fontSize: 12,
          fontWeight: 600,
          lineHeight: '16px',
          whiteSpace: 'nowrap'
        }
      }, React.createElement(RoomFeatureEmoji, {
        feature: f.key,
        size: 12
      }), f.label);
    }))), React.createElement("button", {
      type: "button",
      onClick: onShowDetails,
      "aria-label": "View details for room ".concat(room.num),
      title: "View details for room ".concat(room.num),
      style: {
        width: '100%',
        minHeight: 31,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '4px 8px',
        border: 'none',
        borderTop: "1px solid ".concat(state === 'selected' ? WF.accentLine : WF.line),
        background: state === 'selected' ? '#FFFFFF' : WF.fill,
        color: WF.accent,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 700
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = WF.accentTint;
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = state === 'selected' ? '#FFFFFF' : WF.fill;
      }
    }, React.createElement(SailboatIcon, {
      size: 14
    }), "Room details"));
  }
  function DeckPlanIcon(_ref26) {
    var _ref26$size = _ref26.size,
      size = _ref26$size === void 0 ? 14 : _ref26$size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, React.createElement("path", {
      d: "M3 6 9 3l6 3 6-3v15l-6 3-6-3-6 3V6Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M9 3v15M15 6v15",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round"
    }));
  }
  function DeckServiceIcon(_ref27) {
    var _ref27$size = _ref27.size,
      size = _ref27$size === void 0 ? 14 : _ref27$size;
    return React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, React.createElement("path", {
      d: "M7 3h10l3 5v8l-3 5H7l-3-5V8l3-5Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinejoin: "round"
    }), React.createElement("path", {
      d: "M9 7h6M8 11h8M8 15h8M10 19h4",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round"
    }));
  }
  function DeckPlanDialog(_ref28) {
    var dialogId = _ref28.dialogId,
      deck = _ref28.deck,
      rooms = _ref28.rooms,
      activeSlot = _ref28.activeSlot,
      getRoomState = _ref28.getRoomState,
      onSelectRoom = _ref28.onSelectRoom,
      onClose = _ref28.onClose,
      returnFocusRef = _ref28.returnFocusRef;
    var closeRef = React.useRef(null);
    var portRooms = rooms.filter(function (_, index) {
      return index % 2 === 0;
    });
    var starboardRooms = rooms.filter(function (_, index) {
      return index % 2 === 1;
    });
    React.useEffect(function () {
      window.requestAnimationFrame(function () {
        var _closeRef$current;
        return (_closeRef$current = closeRef.current) === null || _closeRef$current === void 0 ? void 0 : _closeRef$current.focus();
      });
      return function () {
        return window.requestAnimationFrame(function () {
          var _returnFocusRef$curre;
          return returnFocusRef === null || returnFocusRef === void 0 || (_returnFocusRef$curre = returnFocusRef.current) === null || _returnFocusRef$curre === void 0 ? void 0 : _returnFocusRef$curre.focus();
        });
      };
    }, []);
    var renderMapRoom = function renderMapRoom(room) {
      var _getRoomState = getRoomState(room),
        active = _getRoomState.active,
        ownerSlot = _getRoomState.ownerSlot,
        state = _getRoomState.state;
      var selected = state === 'selected';
      var assigned = ownerSlot != null;
      var disabled = !active && !assigned;
      var features = ROOM_FEATURES.filter(function (feature) {
        return feature.test(room);
      });
      return React.createElement("button", {
        key: room.num,
        type: "button",
        disabled: disabled,
        "aria-pressed": selected,
        "aria-label": "Room ".concat(room.num, ", ").concat(LOC_LABELS[room.loc], ", adds $").concat(room.roomDelta, " to the booking").concat(assigned ? ", assigned to Cabin ".concat(ownerSlot + 1) : active ? ', available' : ', does not match current filters'),
        onClick: function onClick() {
          return onSelectRoom(room);
        },
        style: {
          minHeight: 44,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          padding: '8px',
          borderRadius: 6,
          border: "1px solid ".concat(selected ? WF.accent : assigned ? WF.line : active ? WF.accentLine : WF.lineSoft),
          background: selected ? WF.accentTint : assigned ? WF.fill : '#FFFFFF',
          color: WF.ink,
          fontFamily: 'inherit',
          textAlign: 'left',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.48 : 1,
          boxShadow: selected ? "inset 3px 0 ".concat(WF.accent) : 'none',
          transition: 'background-color 120ms ease, border-color 120ms ease'
        }
      }, React.createElement("span", {
        style: {
          minWidth: 0
        }
      }, React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }
      }, React.createElement("strong", {
        style: {
          fontSize: 12,
          color: WF.ink,
          fontFamily: 'ui-monospace, monospace'
        }
      }, room.num), features.slice(0, 2).map(function (feature) {
        return React.createElement(RoomFeatureEmoji, {
          key: feature.key,
          feature: feature.key,
          size: 12
        });
      })), React.createElement("span", {
        style: {
          display: 'block',
          marginTop: 4,
          fontSize: 12,
          color: WF.inkSoft,
          whiteSpace: 'nowrap'
        }
      }, assigned ? "Cabin ".concat(ownerSlot + 1) : active ? 'Available' : 'Filtered')), React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: WF.ink,
          fontFamily: 'ui-monospace, monospace',
          whiteSpace: 'nowrap'
        }
      }, "+$", room.roomDelta));
    };
    return React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 520,
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: 'rgba(15,23,42,0.62)',
        backdropFilter: 'blur(2px)'
      }
    }, React.createElement("div", {
      id: dialogId,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "deck-plan-title",
      "aria-describedby": "deck-plan-description",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      style: {
        width: 'min(880px, 100%)',
        maxHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: 10,
        border: "1px solid ".concat(WF.line),
        background: WF.panel,
        boxShadow: '0 24px 64px rgba(15,23,42,0.28)'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 16,
        padding: '12px 16px',
        borderBottom: "1px solid ".concat(WF.line)
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      id: "deck-plan-title",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 16,
        lineHeight: '24px',
        fontWeight: 700,
        color: WF.ink
      }
    }, React.createElement(DeckPlanIcon, {
      size: 16
    }), " Deck ", deck, " ship map"), React.createElement("div", {
      id: "deck-plan-description",
      style: {
        marginTop: 4,
        fontSize: 12,
        lineHeight: '16px',
        color: WF.inkSoft
      }
    }, "Select a room for Cabin ", activeSlot + 1, ". Forward is shown at the top of the ship.")), React.createElement("button", {
      ref: closeRef,
      type: "button",
      onClick: onClose,
      "aria-label": "Close ship map",
      style: {
        marginLeft: 'auto',
        width: 32,
        height: 32,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        borderRadius: 6,
        border: "1px solid ".concat(WF.line),
        background: '#FFFFFF',
        color: WF.inkSoft,
        fontFamily: 'inherit',
        fontSize: 16,
        cursor: 'pointer'
      }
    }, "\xD7")), React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        padding: 16,
        background: WF.fill
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        flexWrap: 'wrap',
        marginBottom: 12
      }
    }, [{
      label: 'Available',
      swatch: '#FFFFFF',
      border: WF.accentLine
    }, {
      label: "Cabin ".concat(activeSlot + 1),
      swatch: WF.accentTint,
      border: WF.accent
    }, {
      label: 'Assigned',
      swatch: WF.fillStrong,
      border: WF.line
    }].map(function (item) {
      return React.createElement("span", {
        key: item.label,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          fontSize: 12,
          color: WF.inkSoft
        }
      }, React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: 12,
          height: 12,
          borderRadius: 3,
          background: item.swatch,
          border: "1px solid ".concat(item.border)
        }
      }), item.label);
    })), React.createElement("div", {
      style: {
        width: 'min(620px, 100%)',
        margin: '0 auto'
      }
    }, React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: WF.inkLabel,
        textTransform: 'uppercase'
      }
    }, "\u2191 Forward"), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(148px, 1fr) minmax(180px, 1.2fr) minmax(148px, 1fr)',
        gap: 12,
        padding: 16,
        borderLeft: "3px solid ".concat(WF.accent),
        borderRight: "3px solid ".concat(WF.accent),
        borderRadius: '40px 40px 12px 12px',
        background: WF.accentTint
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, portRooms.map(renderMapRoom)), React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: 'repeat(3, minmax(180px, 1fr))',
        gap: 8
      }
    }, [{
      label: 'Forward',
      detail: 'Elevators & stairs'
    }, {
      label: 'Mid Ship',
      detail: 'Atrium · lobby · guest services'
    }, {
      label: 'Aft Ship',
      detail: 'Elevators & stairs'
    }].map(function (zone) {
      return React.createElement("div", {
        key: zone.label,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 12,
          borderRadius: 8,
          border: "1px solid ".concat(WF.line),
          background: 'rgba(255,255,255,0.64)',
          textAlign: 'center'
        }
      }, React.createElement(DeckServiceIcon, {
        size: 20
      }), React.createElement("strong", {
        style: {
          marginTop: 8,
          fontSize: 12,
          color: WF.ink
        }
      }, zone.label), React.createElement("span", {
        style: {
          marginTop: 4,
          fontSize: 12,
          lineHeight: '16px',
          color: WF.inkSoft
        }
      }, zone.detail));
    })), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }
    }, starboardRooms.map(renderMapRoom))), React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: WF.inkLabel,
        textTransform: 'uppercase'
      }
    }, "Aft"))), React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '12px 16px',
        borderTop: "1px solid ".concat(WF.line),
        background: '#FFFFFF'
      }
    }, React.createElement("button", {
      type: "button",
      onClick: onClose,
      style: {
        minHeight: 32,
        padding: '8px 16px',
        borderRadius: 6,
        border: "1px solid ".concat(WF.line),
        background: '#FFFFFF',
        color: WF.ink,
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, "Close map"))));
  }
  function SelectRoomPanel(_ref29) {
    var row = _ref29.row,
      qty = _ref29.qty,
      categoryBySlot = _ref29.categoryBySlot,
      roomsBySlot = _ref29.roomsBySlot,
      cabinGuests = _ref29.cabinGuests,
      activeSlot = _ref29.activeSlot,
      partyGuests = _ref29.partyGuests,
      otherAssigned = _ref29.otherAssigned,
      takenRooms = _ref29.takenRooms,
      onToggleRoom = _ref29.onToggleRoom,
      onAutoAssign = _ref29.onAutoAssign,
      onSelectSlot = _ref29.onSelectSlot,
      onGuestChange = _ref29.onGuestChange,
      onConfirm = _ref29.onConfirm,
      onBack = _ref29.onBack,
      onClose = _ref29.onClose,
      onQtyChange = _ref29.onQtyChange,
      onSwitchCategory = _ref29.onSwitchCategory;
    var activeRow = categoryRowForSlot(row, categoryBySlot, activeSlot);
    var takenKey = (takenRooms || []).join(',');
    var selectedRoomKey = (roomsBySlot || {})[activeSlot] || '';
    var rooms = React.useMemo(function () {
      var taken = new Set(takenKey ? takenKey.split(',') : []);
      var selected = new Set(selectedRoomKey ? selectedRoomKey.split(',') : []);
      var rowPool = roomsForRow(activeRow);
      var legacySelected = (STATEROOM_ROOMS[activeRow.cat] || []).filter(function (room) {
        return selected.has(room.num) && !rowPool.some(function (candidate) {
          return candidate.num === room.num;
        });
      });
      return [].concat(_toConsumableArray(rowPool), _toConsumableArray(legacySelected)).filter(function (r) {
        return !taken.has(r.num);
      }).map(function (r) {
        return _objectSpread(_objectSpread({}, r), {}, {
          loc: r.loc || activeRow.location,
          rollawayBed: r.rollawayBed !== undefined ? r.rollawayBed : parseInt(r.num, 10) % 4 === 0,
          connectedRoom: r.connectedRoom !== undefined ? r.connectedRoom : parseInt(r.num, 10) % 5 === 0,
          roomDelta: Number.isFinite(Number(r.roomDelta)) ? Number(r.roomDelta) : roomDeltaForNumber(r.num),
          premium: r.premium !== undefined ? r.premium : roomDeltaForNumber(r.num) >= 65
        });
      });
    }, [activeRow.id, selectedRoomKey, takenKey]);
    var roomsByDeck = React.useMemo(function () {
      var groups = {};
      rooms.forEach(function (r) {
        (groups[r.deck] = groups[r.deck] || []).push(r);
      });
      return Object.keys(groups).map(Number).sort(function (a, b) {
        return a - b;
      }).map(function (deck) {
        return {
          deck: deck,
          rooms: groups[deck].slice().sort(function (a, b) {
            return a.num.localeCompare(b.num, undefined, {
              numeric: true
            });
          })
        };
      });
    }, [rooms]);
    var _React$useState11 = React.useState(function () {
        return new Set();
      }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      activeFilters = _React$useState12[0],
      setActiveFilters = _React$useState12[1];
    var _React$useState13 = React.useState('manual'),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      assignmentMode = _React$useState14[0],
      setAssignmentMode = _React$useState14[1];
    var _React$useState15 = React.useState(null),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      locFilter = _React$useState16[0],
      setLocFilter = _React$useState16[1];
    var _React$useState17 = React.useState(function () {
        var _roomsByDeck$;
        return ((_roomsByDeck$ = roomsByDeck[0]) === null || _roomsByDeck$ === void 0 ? void 0 : _roomsByDeck$.deck) || STATEROOM_DECKS[0];
      }),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      activeDeck = _React$useState18[0],
      setActiveDeck = _React$useState18[1];
    var _React$useState19 = React.useState(null),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      detailRoom = _React$useState20[0],
      setDetailRoom = _React$useState20[1];
    var _React$useState21 = React.useState(false),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      deckPlanOpen = _React$useState22[0],
      setDeckPlanOpen = _React$useState22[1];
    var _React$useState23 = React.useState(''),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      roomAdvanceNotice = _React$useState24[0],
      setRoomAdvanceNotice = _React$useState24[1];
    var roomAdvanceNoticeTimer = React.useRef(null);
    var deckMapButtonRef = React.useRef(null);
    var deckScrollRef = React.useRef(null);
    var positionGroupRefs = React.useRef({});
    React.useEffect(function () {
      return function () {
        if (roomAdvanceNoticeTimer.current) window.clearTimeout(roomAdvanceNoticeTimer.current);
      };
    }, []);
    var announceRoomAdvance = function announceRoomAdvance(message) {
      if (roomAdvanceNoticeTimer.current) window.clearTimeout(roomAdvanceNoticeTimer.current);
      setRoomAdvanceNotice(message);
      roomAdvanceNoticeTimer.current = window.setTimeout(function () {
        return setRoomAdvanceNotice('');
      }, 3200);
    };
    var toggleFilter = function toggleFilter(key) {
      return setActiveFilters(function (prev) {
        var next = new Set(prev);
        if (next.has(key)) next["delete"](key);else next.add(key);
        return next;
      });
    };
    React.useEffect(function () {
      var onKey = function onKey(e) {
        if (e.key !== 'Escape') return;
        if (deckPlanOpen) setDeckPlanOpen(false);else if (detailRoom) setDetailRoom(null);else onClose();
      };
      window.addEventListener('keydown', onKey);
      return function () {
        return window.removeEventListener('keydown', onKey);
      };
    }, [onClose, detailRoom, deckPlanOpen]);
    React.useEffect(function () {
      var _roomsByDeck$2;
      setActiveDeck(((_roomsByDeck$2 = roomsByDeck[0]) === null || _roomsByDeck$2 === void 0 ? void 0 : _roomsByDeck$2.deck) || STATEROOM_DECKS[0]);
      setLocFilter(null);
      setActiveFilters(new Set());
      setAssignmentMode('manual');
      setDetailRoom(null);
      setDeckPlanOpen(false);
    }, [activeRow.id]);
    var handleAssignmentModeChange = function handleAssignmentModeChange(value) {
      setAssignmentMode(value);
      setLocFilter(null);
      setActiveFilters(new Set());
      setRoomAdvanceNotice('');
    };
    var autoAssignActive = assignmentMode !== 'manual';
    var accessibleOnly = activeFilters.has('wheelchair');
    var applyAutoAssignment = function applyAutoAssignment() {
      onAutoAssign({
        excludePremium: assignmentMode === 'exclude-premium',
        accessibleOnly: accessibleOnly
      });
      announceRoomAdvance("".concat(accessibleOnly ? 'Accessible rooms' : 'Rooms', " auto-assigned. Review the selections below or choose another room to override."));
    };
    var isRoomActive = function isRoomActive(room) {
      return (!locFilter || room.loc === locFilter) && ROOM_FEATURES.every(function (f) {
        return !activeFilters.has(f.key) || f.test(room);
      });
    };
    var filledCount = Object.values(roomsBySlot).filter(Boolean).length;
    var assignedTotals = Object.values(cabinGuests).reduce(function (acc, g) {
      return {
        adults: acc.adults + ((g === null || g === void 0 ? void 0 : g.adults) || 0),
        youngAdults: acc.youngAdults + ((g === null || g === void 0 ? void 0 : g.youngAdults) || 0),
        children: acc.children + ((g === null || g === void 0 ? void 0 : g.children) || 0),
        infants: acc.infants + ((g === null || g === void 0 ? void 0 : g.infants) || 0)
      };
    }, {
      adults: 0,
      youngAdults: 0,
      children: 0,
      infants: 0
    });
    var totalParty = partyGuests ? (partyGuests.adults || 0) + (partyGuests.youngAdults || 0) + (partyGuests.children || 0) + (partyGuests.infants || 0) : 0;
    var assignedHere = assignedTotals.adults + assignedTotals.youngAdults + assignedTotals.children + assignedTotals.infants;
    var other = otherAssigned || ZERO_GUESTS;
    var assignedElsewhere = (other.adults || 0) + (other.youngAdults || 0) + (other.children || 0) + (other.infants || 0);
    var totalAssignedGuests = assignedHere + assignedElsewhere;
    var overAssigned = totalAssignedGuests > totalParty;
    var guestAllocationComplete = totalParty > 0 && totalAssignedGuests === totalParty;
    var _React$useState25 = React.useState(function () {
        return !guestAllocationComplete;
      }),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      showGuestTypes = _React$useState26[0],
      setShowGuestTypes = _React$useState26[1];
    var guestAllocationToggleRef = React.useRef(null);
    var wasGuestAllocationComplete = React.useRef(guestAllocationComplete);
    React.useEffect(function () {
      if (!guestAllocationComplete) {
        setShowGuestTypes(true);
      } else if (!wasGuestAllocationComplete.current) {
        setShowGuestTypes(false);
        window.requestAnimationFrame(function () {
          var _guestAllocationToggl;
          return (_guestAllocationToggl = guestAllocationToggleRef.current) === null || _guestAllocationToggl === void 0 ? void 0 : _guestAllocationToggl.focus();
        });
      }
      wasGuestAllocationComplete.current = guestAllocationComplete;
    }, [guestAllocationComplete]);
    var configuredCount = Array.from({
      length: qty
    }, function (_, i) {
      return i;
    }).filter(function (i) {
      return roomsBySlot[i] && cabinGuestTotal(cabinGuests[i]) > 0;
    }).length;
    var canConfirm = filledCount === qty && !overAssigned;
    var filtersActive = !!locFilter || activeFilters.size > 0;
    var assignedRoomNums = new Set(Object.entries(roomsBySlot || {}).filter(function (_ref30) {
      var _ref31 = _slicedToArray(_ref30, 2),
        slot = _ref31[0],
        num = _ref31[1];
      return num && categoryIdForSlot(row.id, {
        categoryBySlot: categoryBySlot
      }, parseInt(slot, 10)) === activeRow.id;
    }).map(function (_ref32) {
      var _ref33 = _slicedToArray(_ref32, 2),
        num = _ref33[1];
      return num;
    }));
    var activeDeckGroup = roomsByDeck.find(function (group) {
      return group.deck === activeDeck;
    }) || roomsByDeck[0] || {
      deck: activeDeck,
      rooms: []
    };
    var activeDeckRooms = activeDeckGroup.rooms;
    var activeDeckMatches = activeDeckRooms.filter(isRoomActive);
    var visibleActiveDeckRooms = activeDeckRooms.filter(function (room) {
      return isRoomActive(room) || assignedRoomNums.has(room.num);
    });
    var activeDeckPositionGroups = Object.entries(LOC_LABELS).map(function (_ref34) {
      var _ref35 = _slicedToArray(_ref34, 2),
        value = _ref35[0],
        label = _ref35[1];
      return {
        value: value,
        label: label,
        rooms: visibleActiveDeckRooms.filter(function (room) {
          return room.loc === value;
        })
      };
    });
    var activeDeckPositionSummary = Object.entries(LOC_LABELS).map(function (_ref36) {
      var _ref37 = _slicedToArray(_ref36, 2),
        value = _ref37[0],
        label = _ref37[1];
      return "".concat(activeDeckRooms.filter(function (room) {
        return room.loc === value;
      }).length, " ").concat(label);
    }).join(' · ');
    var scrollToPositionGroup = function scrollToPositionGroup(value) {
      var _window$matchMedia, _window;
      var scroller = deckScrollRef.current;
      var target = positionGroupRefs.current[value];
      if (!scroller || !target) return;
      var prefersReducedMotion = (_window$matchMedia = (_window = window).matchMedia) === null || _window$matchMedia === void 0 ? void 0 : _window$matchMedia.call(_window, '(prefers-reduced-motion: reduce)').matches;
      var targetTop = target.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 8;
      scroller.scrollTo({
        top: Math.max(0, targetTop),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    };
    var getRoomState = function getRoomState(room) {
      var active = isRoomActive(room);
      var ownerSlotEntry = Object.entries(roomsBySlot).find(function (_ref38) {
        var _ref39 = _slicedToArray(_ref38, 2),
          slot = _ref39[0],
          num = _ref39[1];
        return num === room.num && categoryIdForSlot(row.id, {
          categoryBySlot: categoryBySlot
        }, parseInt(slot, 10)) === activeRow.id;
      });
      var ownerSlot = ownerSlotEntry ? parseInt(ownerSlotEntry[0], 10) : null;
      var selected = ownerSlot != null;
      var isCurrentSlot = ownerSlot === activeSlot;
      var state = isCurrentSlot ? 'selected' : selected ? 'taken' : active ? 'available' : 'filtered';
      return {
        active: active,
        ownerSlot: ownerSlot,
        selected: selected,
        isCurrentSlot: isCurrentSlot,
        state: state
      };
    };
    var handleRoomSelection = function handleRoomSelection(room) {
      var _getRoomState2 = getRoomState(room),
        active = _getRoomState2.active,
        ownerSlot = _getRoomState2.ownerSlot,
        selected = _getRoomState2.selected;
      if (!active && !selected) return;
      if (ownerSlot === activeSlot) {
        setRoomAdvanceNotice('');
        onToggleRoom(room.num);
        return;
      }
      var projectedRooms = _objectSpread({}, roomsBySlot || {});
      if (ownerSlot != null) delete projectedRooms[ownerSlot];
      projectedRooms[activeSlot] = room.num;
      var nextSlot = nextUnfilledCabinSlot(projectedRooms, activeSlot, qty);
      var completedMessage = nextSlot === activeSlot ? "Room ".concat(room.num, " assigned to Cabin ").concat(activeSlot + 1, ". All cabins now have rooms.") : "Room ".concat(room.num, " assigned to Cabin ").concat(activeSlot + 1, ". Now selecting Cabin ").concat(nextSlot + 1, ".");
      onToggleRoom(room.num);
      announceRoomAdvance(completedMessage);
    };
    var renderRoomOption = function renderRoomOption(room) {
      var _getRoomState3 = getRoomState(room),
        active = _getRoomState3.active,
        ownerSlot = _getRoomState3.ownerSlot,
        selected = _getRoomState3.selected,
        state = _getRoomState3.state;
      return React.createElement(RoomCard, {
        key: room.num,
        room: room,
        state: state,
        ownerSlot: ownerSlot,
        disabled: !active && !selected,
        onShowDetails: function onShowDetails() {
          return setDetailRoom({
            room: room,
            state: state,
            ownerSlot: ownerSlot
          });
        },
        onClick: function onClick() {
          return handleRoomSelection(room);
        }
      });
    };
    return React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 400,
        background: 'rgba(15,23,42,0.55)',
        backdropFilter: 'blur(1px)',
        display: 'grid',
        placeItems: 'center',
        padding: 24
      }
    }, React.createElement("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "assign-staterooms-title",
      "aria-describedby": "assign-staterooms-description",
      style: {
        width: 'min(1120px, 100%)',
        maxHeight: '90vh',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: WF.panel,
        borderRadius: RD.lg,
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(15,23,42,0.28)',
        border: "1px solid ".concat(WF.line)
      }
    }, React.createElement("div", {
      style: {
        flexShrink: 0,
        padding: "".concat(SP.md, "px ").concat(SP.lg, "px"),
        borderBottom: "1px solid ".concat(WF.line),
        background: WF.panel
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: SP.lg
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      id: "assign-staterooms-title",
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: WF.ink,
        letterSpacing: '-0.01em'
      }
    }, "Assign staterooms"), React.createElement("div", {
      id: "assign-staterooms-description",
      style: {
        marginTop: 4,
        fontSize: 12,
        color: WF.inkSoft
      }
    }, "Choose a category for each cabin, place guests, then confirm a room.")), React.createElement("button", {
      onClick: onClose,
      "aria-label": "Close",
      title: "Close \xB7 your selections are kept",
      style: {
        marginLeft: 'auto',
        width: 30,
        height: 30,
        borderRadius: RD.sm,
        border: "1px solid ".concat(WF.line),
        background: WF.panel,
        color: WF.inkSoft,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 16,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = WF.fill;
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = WF.panel;
      }
    }, "\xD7"))), React.createElement("div", {
      className: "stateroom-modal-scroll",
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        scrollbarGutter: 'auto',
        background: WF.panel
      }
    }, React.createElement("div", {
      style: {
        padding: "".concat(SP.md, "px ").concat(SP.lg, "px 0")
      }
    }, React.createElement("div", {
      style: {
        border: "1px solid ".concat(WF.line),
        borderRadius: RD.md,
        overflow: 'hidden',
        background: WF.panel,
        boxShadow: '0 1px 2px rgba(15,23,42,0.08)'
      }
    }, React.createElement("div", {
      role: "group",
      "aria-label": "Cabin distribution settings",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
        padding: '8px 12px',
        borderBottom: "1px solid ".concat(WF.line),
        background: WF.fill,
        color: WF.ink
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: WF.ink
      }
    }, "Guest distribution"), React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 12,
        color: WF.inkSoft
      }
    }, guestAllocationComplete && !showGuestTypes ? "".concat(totalParty, " guest").concat(totalParty === 1 ? '' : 's', " allocated across ").concat(qty, " cabin").concat(qty === 1 ? '' : 's', ". Review cabins and assign rooms below.") : 'Each cabin starts with the category you selected. Change a cabin independently, then assign its guests and room.')), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        gap: 12,
        flexShrink: 0
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: WF.inkLabel,
        textTransform: 'uppercase'
      }
    }, "Cabins"), React.createElement("div", null, React.createElement(QtyControl, {
      value: qty,
      max: row.total,
      onChange: function onChange(val) {
        return val >= 1 && val <= row.total && onQtyChange(val);
      }
    }))), guestAllocationComplete && React.createElement("button", {
      ref: guestAllocationToggleRef,
      type: "button",
      "aria-expanded": showGuestTypes,
      "aria-controls": "guest-distribution-".concat(row.id),
      onClick: function onClick() {
        return setShowGuestTypes(function (visible) {
          return !visible;
        });
      },
      style: {
        minHeight: 30,
        padding: '4px 12px',
        borderRadius: RD.sm,
        border: "1px solid ".concat(WF.line),
        background: WF.panel,
        color: WF.ink,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 700,
        whiteSpace: 'nowrap'
      }
    }, showGuestTypes ? 'Hide guest types' : 'Edit guest allocation'))), React.createElement("div", {
      id: "guest-distribution-".concat(row.id),
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        minWidth: 0,
        maxWidth: '100%',
        overflow: 'hidden',
        gap: SP.sm,
        padding: SP.sm,
        background: WF.panel
      }
    }, React.createElement(GuestAssignmentSummary, {
      partyGuests: partyGuests || ZERO_GUESTS,
      assignedTotals: assignedTotals,
      otherAssigned: other
    }), React.createElement(CabinAssignmentTable, {
      row: row,
      qty: qty,
      categoryBySlot: categoryBySlot,
      roomsBySlot: roomsBySlot,
      cabinGuests: cabinGuests,
      activeSlot: activeSlot,
      partyGuests: partyGuests || ZERO_GUESTS,
      otherAssigned: other,
      showGuestTypes: showGuestTypes,
      onSelectSlot: onSelectSlot,
      onGuestChange: onGuestChange,
      onSwitchCategory: onSwitchCategory
    })))), React.createElement("div", {
      style: {
        padding: "".concat(SP.lg, "px")
      }
    }, React.createElement("div", {
      style: {
        border: "1px solid ".concat(WF.line),
        borderRadius: RD.md,
        overflow: 'hidden',
        background: WF.panel
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: SP.md,
        flexWrap: 'wrap',
        padding: '8px 12px',
        borderBottom: "1px solid ".concat(WF.line),
        background: '#FFFFFF'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        color: WF.inkSoft,
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, "Assignment"), React.createElement(PortableSelect, {
      value: assignmentMode,
      onValueChange: handleAssignmentModeChange,
      ariaLabel: "Room assignment method",
      width: 144,
      menuMinWidth: 184,
      menuZIndex: "var(--ds-layer-modal-nested, 520)",
      height: 30,
      showSelectedMeta: false,
      options: ROOM_ASSIGNMENT_OPTIONS
    })), autoAssignActive ? React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        width: 1,
        height: 20,
        background: WF.line
      }
    }), React.createElement("div", {
      role: "group",
      "aria-label": "Auto assign preferences",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        color: WF.inkSoft,
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, "Accessibility"), React.createElement(FeatureChip, {
      icon: "wheelchair",
      label: "Accessible rooms",
      active: accessibleOnly,
      onClick: function onClick() {
        return toggleFilter('wheelchair');
      }
    }), React.createElement("button", {
      type: "button",
      onClick: applyAutoAssignment,
      style: {
        minHeight: 30,
        padding: '4px 12px',
        borderRadius: RD.sm,
        border: "1px solid ".concat(WF.accent),
        background: WF.accent,
        color: WF.accentText,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 700,
        whiteSpace: 'nowrap'
      }
    }, "Assign rooms")), React.createElement("div", {
      style: {
        flexBasis: '100%',
        fontSize: 12,
        color: WF.inkSoft
      }
    }, "Choose whether accessible rooms are required, then assign. You can override any result by selecting another room below.")) : React.createElement(React.Fragment, null, React.createElement("div", {
      style: {
        width: 1,
        height: 20,
        background: WF.line
      }
    }), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        color: WF.inkSoft,
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, "Ship position"), React.createElement(PortableSelect, {
      value: locFilter || '',
      onValueChange: function onValueChange(value) {
        return setLocFilter(value || null);
      },
      ariaLabel: "Filter rooms by ship position",
      width: 136,
      menuMinWidth: 168,
      menuZIndex: "var(--ds-layer-modal-nested, 520)",
      height: 30,
      showSelectedMeta: false,
      options: SHIP_POSITION_OPTIONS
    })), React.createElement("div", {
      style: {
        width: 1,
        height: 20,
        background: WF.line
      }
    }), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flexWrap: 'wrap'
      }
    }, React.createElement("span", {
      style: {
        marginRight: 4,
        fontSize: 12,
        fontWeight: 600,
        color: WF.inkSoft,
        whiteSpace: 'nowrap'
      }
    }, "Filters"), React.createElement(FeatureChip, {
      label: "All",
      active: activeFilters.size === 0,
      onClick: function onClick() {
        return setActiveFilters(new Set());
      }
    }), ROOM_FEATURES.map(function (f) {
      return React.createElement(FeatureChip, {
        key: f.key,
        icon: f.key,
        label: f.label,
        active: activeFilters.has(f.key),
        onClick: function onClick() {
          return toggleFilter(f.key);
        }
      });
    })), filtersActive && React.createElement("button", {
      onClick: function onClick() {
        setLocFilter(null);
        setActiveFilters(new Set());
      },
      style: {
        minHeight: 30,
        padding: '0 8px',
        border: 'none',
        background: 'transparent',
        color: WF.accent,
        fontSize: 12,
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'inherit',
        whiteSpace: 'nowrap'
      }
    }, "Clear filters")), roomAdvanceNotice && React.createElement("div", {
      role: "status",
      "aria-live": "polite",
      "aria-atomic": "true",
      style: {
        flexBasis: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 32,
        padding: '4px 8px',
        borderRadius: RD.sm,
        border: "1px solid ".concat(WF.accentLine),
        background: WF.accentTint,
        color: WF.accent,
        fontSize: 12,
        fontWeight: 700
      }
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\u2713"), roomAdvanceNotice)), React.createElement("div", {
      style: {
        background: WF.fill
      }
    }, React.createElement("div", {
      role: "tablist",
      "aria-label": "Available decks",
      style: {
        display: 'grid',
        gridTemplateColumns: "repeat(".concat(roomsByDeck.length, ", minmax(0, 1fr))"),
        gap: 8,
        padding: 8,
        borderBottom: "1px solid ".concat(WF.line),
        background: '#FFFFFF'
      }
    }, roomsByDeck.map(function (_ref40) {
      var deck = _ref40.deck,
        deckRooms = _ref40.rooms;
      var selected = deck === activeDeck;
      var deckMatches = deckRooms.filter(isRoomActive).length;
      var deckAssigned = deckRooms.filter(function (room) {
        return assignedRoomNums.has(room.num);
      }).length;
      return React.createElement("button", {
        key: deck,
        id: "deck-tab-".concat(activeRow.id, "-").concat(deck),
        role: "tab",
        "aria-selected": selected,
        "aria-controls": "deck-panel-".concat(activeRow.id, "-").concat(deck),
        onClick: function onClick() {
          return setActiveDeck(deck);
        },
        style: {
          minHeight: 48,
          padding: '8px 8px',
          borderRadius: RD.sm,
          border: "1px solid ".concat(selected ? WF.accent : WF.line),
          background: selected ? WF.accent : WF.panel,
          color: selected ? '#FFFFFF' : WF.ink,
          cursor: 'pointer',
          fontFamily: 'inherit',
          textAlign: 'left'
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8
        }
      }, React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700
        }
      }, "Deck ", deck), React.createElement("span", {
        style: {
          minWidth: 22,
          padding: '4px 4px',
          borderRadius: 999,
          textAlign: 'center',
          background: selected ? 'rgba(255,255,255,0.14)' : WF.fill,
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'ui-monospace, monospace'
        }
      }, filtersActive ? "".concat(deckMatches, "/").concat(deckRooms.length) : deckRooms.length)), React.createElement("div", {
        style: {
          marginTop: 4,
          minHeight: 13,
          fontSize: 12,
          color: selected ? '#CBD5E1' : WF.inkSoft
        }
      }, deckAssigned > 0 ? "\u2713 ".concat(deckAssigned, " assigned") : filtersActive ? "".concat(deckMatches, " matching") : 'Available rooms'));
    })), React.createElement("section", {
      id: "deck-panel-".concat(activeRow.id, "-").concat(activeDeck),
      role: "tabpanel",
      "aria-labelledby": "deck-tab-".concat(activeRow.id, "-").concat(activeDeck),
      style: {
        width: 'auto',
        minWidth: 0,
        background: WF.fill
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '8px 12px',
        borderBottom: "1px solid ".concat(WF.line),
        background: WF.panel
      }
    }, React.createElement("div", null, React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: WF.ink
      }
    }, "Deck ", activeDeck), React.createElement("span", {
      style: {
        marginLeft: 8,
        fontSize: 12,
        color: WF.inkSoft
      }
    }, filtersActive ? "".concat(activeDeckMatches.length, " matching \xB7 ").concat(activeDeckRooms.length, " total") : "".concat(activeDeckRooms.length, " eligible rooms"))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, !locFilter && React.createElement("div", {
      role: "group",
      "aria-label": "Jump to rooms by ship position",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        flexWrap: 'wrap'
      }
    }, activeDeckPositionGroups.map(function (group) {
      var total = activeDeckRooms.filter(function (room) {
        return room.loc === group.value;
      }).length;
      var disabled = group.rooms.length === 0;
      return React.createElement("button", {
        key: group.value,
        type: "button",
        "aria-controls": "position-group-".concat(activeRow.id, "-").concat(activeDeck, "-").concat(group.value),
        disabled: disabled,
        onClick: function onClick() {
          return scrollToPositionGroup(group.value);
        },
        title: disabled ? "No matching ".concat(group.label, " rooms") : "Show ".concat(group.label, " rooms"),
        style: {
          minHeight: 28,
          padding: '4px 8px',
          borderRadius: 999,
          border: "1px solid ".concat(WF.line),
          background: '#FFFFFF',
          color: WF.inkSoft,
          fontFamily: 'inherit',
          fontSize: 12,
          fontWeight: 600,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.48 : 1,
          transition: 'background-color 120ms ease, border-color 120ms ease, color 120ms ease'
        }
      }, React.createElement("strong", {
        style: {
          color: 'inherit'
        }
      }, total), " ", group.label);
    })), React.createElement("button", {
      ref: deckMapButtonRef,
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": deckPlanOpen,
      "aria-controls": "deck-plan-".concat(activeRow.id, "-").concat(activeDeck),
      onClick: function onClick() {
        return setDeckPlanOpen(true);
      },
      style: {
        minHeight: 28,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '4px 8px',
        borderRadius: RD.sm,
        border: "1px solid ".concat(WF.line),
        background: '#FFFFFF',
        color: WF.accent,
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 700,
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }
    }, React.createElement(DeckPlanIcon, null), "Ship map"), locFilter && React.createElement("span", {
      style: {
        fontSize: 12,
        color: WF.inkSoft
      }
    }, activeDeckPositionSummary))), React.createElement("div", {
      ref: deckScrollRef,
      className: "stateroom-deck-scroll",
      style: {
        maxHeight: 330,
        overflowY: 'auto',
        scrollbarGutter: 'auto',
        padding: 12,
        background: WF.fill
      }
    }, visibleActiveDeckRooms.length > 0 ? !locFilter ? React.createElement("div", {
      role: "group",
      "aria-label": "Rooms on deck ".concat(activeDeck, ", grouped by ship position"),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, activeDeckPositionGroups.filter(function (group) {
      return group.rooms.length > 0;
    }).map(function (group, index) {
      return React.createElement("section", {
        key: group.value,
        id: "position-group-".concat(activeRow.id, "-").concat(activeDeck, "-").concat(group.value),
        ref: function ref(node) {
          positionGroupRefs.current[group.value] = node;
        },
        "aria-labelledby": "position-heading-".concat(activeRow.id, "-").concat(activeDeck, "-").concat(group.value),
        style: {
          paddingTop: index === 0 ? 0 : 12,
          borderTop: index === 0 ? 'none' : "1px solid ".concat(WF.line)
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 8
        }
      }, React.createElement("div", {
        id: "position-heading-".concat(activeRow.id, "-").concat(activeDeck, "-").concat(group.value),
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: WF.ink
        }
      }, group.label), React.createElement("div", {
        style: {
          fontSize: 12,
          color: WF.inkSoft
        }
      }, group.rooms.length, " room", group.rooms.length === 1 ? '' : 's')), React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
          gap: 8,
          alignItems: 'stretch'
        }
      }, group.rooms.map(renderRoomOption)));
    })) : React.createElement("div", {
      role: "group",
      "aria-label": "".concat(LOC_LABELS[locFilter], " rooms on deck ").concat(activeDeck),
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: 8,
        alignItems: 'stretch'
      }
    }, visibleActiveDeckRooms.map(renderRoomOption)) : React.createElement("div", {
      role: "status",
      style: {
        minHeight: 116,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        border: "1px dashed ".concat(WF.line),
        borderRadius: RD.sm,
        background: '#FFFFFF'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: WF.ink
      }
    }, "No rooms match on Deck ", activeDeck), React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 12,
        color: WF.inkSoft
      }
    }, "Choose another deck or clear the current filters.")))))))), React.createElement("div", {
      style: {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: SP.lg,
        padding: "".concat(SP.md, "px ").concat(SP.lg, "px"),
        borderTop: "1px solid ".concat(WF.line),
        background: WF.panel
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: SP.sm,
        marginLeft: 'auto',
        flexShrink: 0
      }
    }, React.createElement("button", {
      onClick: onClose,
      style: {
        padding: '8px 20px',
        fontSize: 14,
        fontWeight: 600,
        borderRadius: RD.sm,
        border: "1px solid ".concat(WF.line),
        background: WF.panel,
        color: WF.ink,
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, "Cancel"), React.createElement("button", {
      onClick: function onClick() {
        return canConfirm && onConfirm();
      },
      disabled: !canConfirm,
      title: overAssigned ? "".concat(totalAssignedGuests, " guests placed but the party has ").concat(totalParty, " \u2014 remove ").concat(totalAssignedGuests - totalParty) : filledCount !== qty ? 'Assign a room to every cabin first' : configuredCount < qty ? 'Some cabins have no guests assigned yet' : undefined,
      style: {
        padding: '8px 20px',
        fontSize: 14,
        fontWeight: 700,
        borderRadius: RD.sm,
        border: 'none',
        background: canConfirm ? TEAL.base : WF.fillStrong,
        color: canConfirm ? '#fff' : WF.inkFaint,
        cursor: canConfirm ? 'pointer' : 'not-allowed',
        fontFamily: 'inherit',
        transition: 'all 0.15s'
      }
    }, "Confirm Selection"))), deckPlanOpen && React.createElement(DeckPlanDialog, {
      dialogId: "deck-plan-".concat(activeRow.id, "-").concat(activeDeck),
      deck: activeDeck,
      rooms: activeDeckRooms,
      activeSlot: activeSlot,
      getRoomState: getRoomState,
      onSelectRoom: handleRoomSelection,
      onClose: function onClose() {
        return setDeckPlanOpen(false);
      },
      returnFocusRef: deckMapButtonRef
    }), detailRoom && React.createElement(CabinDetailsDialog, {
      room: detailRoom.room,
      row: activeRow,
      onClose: function onClose() {
        return setDetailRoom(null);
      }
    })));
  }
  var buildRowCabins = function buildRowCabins(row, sel, qty) {
    return Array.from({
      length: qty
    }, function (_, slot) {
      return {
        slot: slot,
        num: (sel && sel.roomsBySlot || {})[slot],
        categoryRow: categoryRowForSlot(row, sel && sel.categoryBySlot || {}, slot)
      };
    }).filter(function (x) {
      return x.num;
    }).map(function (_ref41) {
      var slot = _ref41.slot,
        num = _ref41.num,
        categoryRow = _ref41.categoryRow;
      var room = roomsForRow(categoryRow).find(function (candidate) {
        return candidate.num === num;
      }) || (STATEROOM_ROOMS[categoryRow.cat] || []).find(function (candidate) {
        return candidate.num === num;
      });
      return {
        id: "".concat(row.id, "-").concat(slot),
        rowId: row.id,
        categoryRowId: categoryRow.id,
        cat: categoryRow.cat,
        label: categoryRow.label,
        num: num,
        roomDelta: room && Number.isFinite(Number(room.roomDelta)) ? Number(room.roomDelta) : roomDeltaForNumber(num),
        guests: _objectSpread({
          adults: 0,
          youngAdults: 0,
          children: 0,
          infants: 0
        }, (sel && sel.cabinGuests || {})[slot] || {})
      };
    });
  };
  var mergeRowCabins = function mergeRowCabins(prev, rowId, rowCabins) {
    return [].concat(_toConsumableArray((prev || []).filter(function (c) {
      return c.rowId !== rowId;
    })), _toConsumableArray(rowCabins)).sort(function (a, b) {
      return STATEROOM_ROWS.findIndex(function (r) {
        return r.id === a.rowId;
      }) - STATEROOM_ROWS.findIndex(function (r) {
        return r.id === b.rowId;
      }) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    });
  };
  var deriveMatrixStateFromCabins = function deriveMatrixStateFromCabins(cabins) {
    var qtys = {};
    var selections = {};
    var confirmedRooms = {};
    (cabins || []).forEach(function (c) {
      var slot = parseInt(c.id.slice(c.rowId.length + 1), 10);
      if (!selections[c.rowId]) selections[c.rowId] = {
        categoryBySlot: {},
        roomsBySlot: {},
        cabinGuests: {},
        activeSlot: 0
      };
      selections[c.rowId].categoryBySlot[slot] = c.categoryRowId || c.rowId;
      selections[c.rowId].roomsBySlot[slot] = c.num;
      selections[c.rowId].cabinGuests[slot] = c.guests;
      qtys[c.rowId] = (qtys[c.rowId] || 0) + 1;
    });
    Object.keys(selections).forEach(function (rowId) {
      confirmedRooms[rowId] = Object.keys(selections[rowId].roomsBySlot).sort(function (a, b) {
        return a - b;
      }).map(function (slot) {
        return selections[rowId].roomsBySlot[slot];
      });
    });
    return {
      qtys: qtys,
      selections: selections,
      confirmedRooms: confirmedRooms
    };
  };
  function StateRoomMatrix(_ref42) {
    var update = _ref42.update,
      s = _ref42.s,
      onConfirmRooms = _ref42.onConfirmRooms,
      _ref42$initialOpenPan = _ref42.initialOpenPanel,
      initialOpenPanel = _ref42$initialOpenPan === void 0 ? null : _ref42$initialOpenPan,
      _ref42$initialActiveS = _ref42.initialActiveSlot,
      initialActiveSlot = _ref42$initialActiveS === void 0 ? 0 : _ref42$initialActiveS,
      onPanelClose = _ref42.onPanelClose;
    var _React$useState27 = React.useState(null),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      catFilter = _React$useState28[0],
      setCatFilter = _React$useState28[1];
    var _React$useState29 = React.useState(function () {
        return deriveMatrixStateFromCabins(s.cabins).qtys;
      }),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      qtys = _React$useState30[0],
      setQtys = _React$useState30[1];
    var _React$useState31 = React.useState(initialOpenPanel),
      _React$useState32 = _slicedToArray(_React$useState31, 2),
      openPanel = _React$useState32[0],
      setOpenPanel = _React$useState32[1];
    var _React$useState33 = React.useState(function () {
        var derived = deriveMatrixStateFromCabins(s.cabins).selections;
        if (initialOpenPanel && derived[initialOpenPanel]) derived[initialOpenPanel].activeSlot = initialActiveSlot;
        return derived;
      }),
      _React$useState34 = _slicedToArray(_React$useState33, 2),
      selections = _React$useState34[0],
      setSelections = _React$useState34[1];
    var _React$useState35 = React.useState(function () {
        return deriveMatrixStateFromCabins(s.cabins).confirmedRooms;
      }),
      _React$useState36 = _slicedToArray(_React$useState35, 2),
      confirmedRooms = _React$useState36[0],
      setConfirmedRooms = _React$useState36[1];
    var filteredRows = STATEROOM_ROWS.filter(function (r) {
      return !catFilter || r.cat === catFilter;
    });
    var categoryInventory = ['IS', 'OV', 'BAL', 'STE'].reduce(function (totals, cat) {
      totals[cat] = STATEROOM_ROWS.filter(function (row) {
        return row.cat === cat;
      }).reduce(function (sum, row) {
        return sum + row.total;
      }, 0);
      return totals;
    }, {});
    var assignedRoomCount = Object.values(confirmedRooms).reduce(function (sum, rooms) {
      return sum + rooms.length;
    }, 0);
    var editRoomCategory = STATEROOM_ROWS.find(function (row) {
      return (confirmedRooms[row.id] || []).length > 0;
    });
    var addRoomCategory = filteredRows.find(function (row) {
      return row.total > (qtys[row.id] || 0);
    });
    var writeCabins = function writeCabins(nextCabins, extra) {
      var pruned = pruneCabinSuppAssignments(s.suppAssignments, nextCabins);
      update(_objectSpread(_objectSpread({
        cabins: nextCabins
      }, pruned), extra || {}));
    };
    var dropRowCabins = function dropRowCabins(rowId) {
      writeCabins((s.cabins || []).filter(function (c) {
        return c.rowId !== rowId;
      }));
    };
    var handleQtyChange = function handleQtyChange(row, rawVal) {
      var val = Math.max(0, Math.min(rawVal, row.total));
      var prev = qtys[row.id] || 0;
      if (prev === 0 && val > 0) {
        var seats = cabinSeats(cabinCapacity(row));
        var seated = assignedInOtherRows(selections, row.id);
        var unseated = GUEST_TYPES.reduce(function (n, t) {
          return n + ((s.guests || ZERO_GUESTS)[t.key] || 0) - (seated[t.key] || 0);
        }, 0);
        if (seats > 0 && unseated > 0) val = Math.min(row.total, Math.max(val, Math.ceil(unseated / seats)));
      }
      if (val === prev) return;
      setQtys(function (q) {
        return _objectSpread(_objectSpread({}, q), {}, _defineProperty({}, row.id, val));
      });
      if (val > 0) {
        setSelections(function (sel) {
          var cur = sel[row.id] || {
            categoryBySlot: {},
            roomsBySlot: {},
            cabinGuests: {},
            activeSlot: 0
          };
          var categoryBySlot = {};
          var roomsBySlot = {};
          var cabinGuests = {};
          for (var i = 0; i < val; i++) {
            categoryBySlot[i] = cur.categoryBySlot && cur.categoryBySlot[i] || row.id;
            if (cur.roomsBySlot[i] != null) roomsBySlot[i] = cur.roomsBySlot[i];
            if (cur.cabinGuests[i] != null) cabinGuests[i] = cur.cabinGuests[i];
          }
          var activeSlot = cur.activeSlot < val ? cur.activeSlot : 0;
          return _objectSpread(_objectSpread({}, sel), {}, _defineProperty({}, row.id, {
            categoryBySlot: categoryBySlot,
            roomsBySlot: roomsBySlot,
            cabinGuests: cabinGuests,
            activeSlot: activeSlot
          }));
        });
        if (prev === 0) setOpenPanel(row.id);
      }
      if (val === 0) {
        setOpenPanel(null);
        setSelections(function (sel) {
          var n = _objectSpread({}, sel);
          delete n[row.id];
          return n;
        });
        setConfirmedRooms(function (r) {
          var n = _objectSpread({}, r);
          delete n[row.id];
          return n;
        });
        dropRowCabins(row.id);
      }
    };
    var openCategoryAssignment = function openCategoryAssignment(row) {
      var currentQty = qtys[row.id] || 0;
      if (row.total < 1) return;
      if (currentQty < 1) {
        setQtys(function (current) {
          return _objectSpread(_objectSpread({}, current), {}, _defineProperty({}, row.id, 1));
        });
        setSelections(function (current) {
          return _objectSpread(_objectSpread({}, current), {}, _defineProperty({}, row.id, {
            categoryBySlot: {
              0: row.id
            },
            roomsBySlot: {},
            cabinGuests: {},
            activeSlot: 0
          }));
        });
      }
      setOpenPanel(row.id);
    };
    var handleToggleRoom = function handleToggleRoom(rowId, roomNum, qty) {
      setSelections(function (sel) {
        var cur = sel[rowId] || {
          categoryBySlot: {},
          roomsBySlot: {},
          cabinGuests: {},
          activeSlot: 0
        };
        var activeSlot = Number.isInteger(cur.activeSlot) ? cur.activeSlot : 0;
        var roomsBySlot = _objectSpread({}, cur.roomsBySlot);
        var ownerEntry = Object.entries(roomsBySlot).find(function (_ref43) {
          var _ref44 = _slicedToArray(_ref43, 2),
            num = _ref44[1];
          return num === roomNum;
        });
        var ownerSlot = ownerEntry ? parseInt(ownerEntry[0], 10) : null;
        var nextActiveSlot = activeSlot;
        if (ownerSlot === activeSlot) {
          delete roomsBySlot[activeSlot];
        } else {
          if (ownerSlot != null) delete roomsBySlot[ownerSlot];
          roomsBySlot[activeSlot] = roomNum;
          if (qty > 0) nextActiveSlot = nextUnfilledCabinSlot(roomsBySlot, activeSlot, qty);
        }
        return _objectSpread(_objectSpread({}, sel), {}, _defineProperty({}, rowId, _objectSpread(_objectSpread({}, cur), {}, {
          roomsBySlot: roomsBySlot,
          activeSlot: nextActiveSlot
        })));
      });
    };
    var handleAutoAssign = function handleAutoAssign(rowId, row, qty) {
      var _ref45 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref45$excludePremium = _ref45.excludePremium,
        excludePremium = _ref45$excludePremium === void 0 ? false : _ref45$excludePremium,
        _ref45$accessibleOnly = _ref45.accessibleOnly,
        accessibleOnly = _ref45$accessibleOnly === void 0 ? false : _ref45$accessibleOnly;
      setSelections(function (sel) {
        var cur = sel[rowId] || {
          categoryBySlot: {},
          roomsBySlot: {},
          cabinGuests: {},
          activeSlot: 0
        };
        var categoryBySlot = _objectSpread({}, cur.categoryBySlot || {});
        var usedRooms = new Set();
        Object.entries(sel || {}).forEach(function (_ref46) {
          var _ref47 = _slicedToArray(_ref46, 2),
            groupId = _ref47[0],
            selection = _ref47[1];
          Object.entries(selection && selection.roomsBySlot || {}).forEach(function (_ref48) {
            var _ref49 = _slicedToArray(_ref48, 2),
              slotKey = _ref49[0],
              num = _ref49[1];
            if (!num || groupId === rowId) return;
            usedRooms.add(num);
          });
        });
        var roomsBySlot = {};
        Array.from({
          length: qty
        }, function (_, slot) {
          return slot;
        }).forEach(function (slot) {
          var slotRow = categoryRowForSlot(row, categoryBySlot, slot);
          categoryBySlot[slot] = slotRow.id;
          var room = roomsForRow(slotRow).find(function (candidate) {
            return !usedRooms.has(candidate.num) && (!excludePremium || candidate.premium !== true) && (!accessibleOnly || candidate.a11y.includes('wheelchair'));
          });
          if (!room) return;
          roomsBySlot[slot] = room.num;
          usedRooms.add(room.num);
        });
        var cabinGuests = Array.from({
          length: qty
        }, function () {
          return _objectSpread({}, ZERO_GUESTS);
        });
        var party = s.guests || ZERO_GUESTS;
        var seated = assignedInOtherRows(sel, rowId);
        GUEST_TYPES.forEach(function (_ref50) {
          var key = _ref50.key;
          var toPlace = Math.max(0, (party[key] || 0) - (seated[key] || 0));
          for (var n = 0; n < toPlace; n++) {
            var candidates = cabinGuests.map(function (g, i) {
              return {
                g: g,
                i: i
              };
            });
            if (!candidates.length) break;
            var best = candidates.reduce(function (a, b) {
              if (key === 'adults') {
                var aHas = a.g.adults > 0,
                  bHas = b.g.adults > 0;
                if (aHas !== bHas) return aHas ? b : a;
              }
              return cabinGuestTotal(b.g) < cabinGuestTotal(a.g) ? b : a;
            });
            best.g[key] += 1;
          }
        });
        var nextGuests = {};
        cabinGuests.forEach(function (g, i) {
          nextGuests[i] = g;
        });
        return _objectSpread(_objectSpread({}, sel), {}, _defineProperty({}, rowId, _objectSpread(_objectSpread({}, cur), {}, {
          categoryBySlot: categoryBySlot,
          roomsBySlot: roomsBySlot,
          cabinGuests: nextGuests
        })));
      });
    };
    var handleSelectSlot = function handleSelectSlot(rowId, slotIdx) {
      setSelections(function (sel) {
        return _objectSpread(_objectSpread({}, sel), {}, _defineProperty({}, rowId, _objectSpread(_objectSpread({}, sel[rowId] || {
          categoryBySlot: {},
          roomsBySlot: {},
          cabinGuests: {}
        }), {}, {
          activeSlot: slotIdx
        })));
      });
    };
    var handleGuestChange = function handleGuestChange(rowId, slotIdx, field, val) {
      setSelections(function (sel) {
        var cur = sel[rowId];
        if (!cur) return sel;
        var guests = _objectSpread(_objectSpread({}, cur.cabinGuests[slotIdx] || {
          adults: 0,
          youngAdults: 0,
          children: 0,
          infants: 0
        }), {}, _defineProperty({}, field, Math.max(0, val)));
        return _objectSpread(_objectSpread({}, sel), {}, _defineProperty({}, rowId, _objectSpread(_objectSpread({}, cur), {}, {
          cabinGuests: _objectSpread(_objectSpread({}, cur.cabinGuests), {}, _defineProperty({}, slotIdx, guests))
        })));
      });
    };
    var handleConfirmRoom = function handleConfirmRoom(rowId, row, qty) {
      var cur = selections[rowId] || {
        categoryBySlot: {},
        roomsBySlot: {}
      };
      var roomNums = Array.from({
        length: qty
      }, function (_, i) {
        return cur.roomsBySlot[i];
      }).filter(Boolean);
      setConfirmedRooms(function (r) {
        return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, row.id, roomNums));
      });
      setOpenPanel(null);
      var rowCabins = buildRowCabins(row, cur, qty);
      writeCabins(mergeRowCabins(s.cabins, row.id, rowCabins), {
        cabinId: rowCabins[0] && rowCabins[0].cat || row.cat,
        selectedCabinNum: roomNums[0],
        selectedRoomCount: roomNums.length
      });
      if (onConfirmRooms) onConfirmRooms();
    };
    var handleBackPanel = function handleBackPanel(rowId) {
      setQtys(function (q) {
        return _objectSpread(_objectSpread({}, q), {}, _defineProperty({}, rowId, 0));
      });
      setOpenPanel(null);
      setSelections(function (sel) {
        var n = _objectSpread({}, sel);
        delete n[rowId];
        return n;
      });
      dropRowCabins(rowId);
    };
    var handleSlotCategoryChange = function handleSlotCategoryChange(rowId, slotIdx, newRowId) {
      var nextRow = STATEROOM_ROWS.find(function (candidate) {
        return candidate.id === newRowId;
      });
      if (!nextRow || nextRow.total < 1) return;
      setSelections(function (sel) {
        var cur = sel[rowId];
        if (!cur || categoryIdForSlot(rowId, cur, slotIdx) === newRowId) return sel;
        var roomsBySlot = _objectSpread({}, cur.roomsBySlot || {});
        delete roomsBySlot[slotIdx];
        return _objectSpread(_objectSpread({}, sel), {}, _defineProperty({}, rowId, _objectSpread(_objectSpread({}, cur), {}, {
          categoryBySlot: _objectSpread(_objectSpread({}, cur.categoryBySlot || {}), {}, _defineProperty({}, slotIdx, newRowId)),
          roomsBySlot: roomsBySlot,
          activeSlot: slotIdx
        })));
      });
    };
    var TH = function TH(_ref51) {
      var children = _ref51.children,
        right = _ref51.right;
      return React.createElement("th", {
        scope: "col",
        style: {
          padding: '8px 4px',
          fontSize: 12,
          lineHeight: '16px',
          fontWeight: 600,
          color: WF.inkLabel,
          textAlign: right ? 'center' : 'left',
          borderBottom: "1px solid ".concat(WF.line),
          whiteSpace: 'nowrap',
          verticalAlign: 'bottom',
          background: WF.fill
        }
      }, children);
    };
    return React.createElement("div", {
      className: "assign-stateroom-portable",
      style: {
        border: "1px solid ".concat(WF.line),
        borderRadius: 9,
        overflow: 'hidden',
        background: '#FFFFFF',
        boxShadow: '0 1px 2px rgba(15,23,42,0.05)'
      }
    }, React.createElement("style", null, "\n        .assign-stateroom-portable {\n          color: ".concat(WF.ink, ";\n          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n          font-size: 14px;\n          line-height: 20px;\n        }\n        .assign-stateroom-portable *,\n        .assign-stateroom-portable *::before,\n        .assign-stateroom-portable *::after { box-sizing: border-box; }\n        .assign-stateroom-portable button,\n        .assign-stateroom-portable input,\n        .assign-stateroom-portable textarea,\n        .assign-stateroom-portable select { font: inherit; }\n        .assign-stateroom-portable button:focus-visible,\n        .assign-stateroom-portable input:focus-visible,\n        .assign-stateroom-portable [role=\"button\"]:focus-visible,\n        .assign-stateroom-portable [role=\"tab\"]:focus-visible {\n          outline: 2px solid ").concat(WF.accent, ";\n          outline-offset: 2px;\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .assign-stateroom-portable *,\n          .assign-stateroom-portable *::before,\n          .assign-stateroom-portable *::after {\n            scroll-behavior: auto !important;\n            animation-duration: 1ms !important;\n            animation-iteration-count: 1 !important;\n            transition-duration: 1ms !important;\n          }\n        }\n        .assign-stateroom-portable .stateroom-modal-scroll,\n        .assign-stateroom-portable .stateroom-deck-scroll {\n          scrollbar-width: thin;\n          scrollbar-color: #CBD5E1 transparent;\n        }\n        .assign-stateroom-portable .stateroom-cabin-scroll {\n          scrollbar-width: none;\n          -ms-overflow-style: none;\n        }\n        .assign-stateroom-portable .stateroom-cabin-scroll[data-scrollable=\"true\"] {\n          scrollbar-width: thin;\n          scrollbar-color: #94A3B8 #F8FAFC;\n        }\n        .assign-stateroom-portable .stateroom-cabin-scroll::-webkit-scrollbar {\n          display: none;\n          width: 0;\n          height: 0;\n        }\n        .assign-stateroom-portable .stateroom-modal-scroll::-webkit-scrollbar { width: 6px; }\n        .assign-stateroom-portable .stateroom-deck-scroll::-webkit-scrollbar { width: 5px; }\n        .assign-stateroom-portable .stateroom-cabin-scroll[data-scrollable=\"true\"]::-webkit-scrollbar {\n          display: block !important;\n          width: 0 !important;\n          height: 12px !important;\n        }\n        .assign-stateroom-portable .stateroom-cabin-scroll[data-scrollable=\"true\"]::-webkit-scrollbar-track { background: #F8FAFC; }\n        .assign-stateroom-portable .stateroom-cabin-scroll[data-scrollable=\"true\"]::-webkit-scrollbar-thumb {\n          background: #64748B;\n          background-clip: padding-box;\n          border: 3px solid transparent;\n          border-radius: 999px;\n        }\n        .assign-stateroom-portable .stateroom-modal-scroll::-webkit-scrollbar-track,\n        .assign-stateroom-portable .stateroom-deck-scroll::-webkit-scrollbar-track {\n          background: transparent;\n          margin-block: 8px;\n        }\n        .assign-stateroom-portable .stateroom-modal-scroll::-webkit-scrollbar-thumb,\n        .assign-stateroom-portable .stateroom-deck-scroll::-webkit-scrollbar-thumb {\n          background: rgba(100, 116, 139, 0.38);\n          border-radius: 999px;\n        }\n      ")), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        padding: '12px',
        background: WF.fill,
        borderBottom: "1px solid ".concat(WF.line)
      }
    }, React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: '-0.01em',
        color: WF.ink
      }
    }, "Choose a stateroom category"), React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 12,
        color: WF.inkSoft
      }
    }, "Live fare inventory by occupancy \xB7 use ", assignedRoomCount > 0 ? 'Edit rooms' : 'Add room', " to choose cabins and rooms")), assignedRoomCount > 0 && React.createElement("div", {
      role: "status",
      "aria-label": "".concat(assignedRoomCount, " ").concat(assignedRoomCount === 1 ? 'room' : 'rooms', " assigned"),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
        padding: '8px 8px',
        borderRadius: 7,
        border: "1px solid ".concat(WF.accentLine),
        background: WF.accentTint,
        color: WF.ink
      }
    }, React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 17,
        height: 17,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        background: WF.accent,
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 1
      }
    }, "\u2713"), React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: WF.inkSoft,
        whiteSpace: 'nowrap'
      }
    }, React.createElement("strong", {
      style: {
        color: WF.ink
      }
    }, assignedRoomCount), " ", assignedRoomCount === 1 ? 'room' : 'rooms', " assigned"))), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '8px 12px',
        background: '#FFFFFF',
        borderBottom: "1px solid ".concat(WF.line)
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.04em',
        color: WF.inkLabel,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    }, "Cabin type"), React.createElement(PortableSelect, {
      value: catFilter || '',
      onValueChange: function onValueChange(nextValue) {
        return setCatFilter(nextValue || null);
      },
      ariaLabel: "Filter staterooms by cabin type",
      width: 200,
      options: [{
        value: '',
        label: 'All types',
        meta: STATEROOM_ROWS.reduce(function (sum, row) {
          return sum + row.total;
        }, 0)
      }].concat(_toConsumableArray(['IS', 'OV', 'BAL', 'STE'].map(function (cat) {
        return {
          value: cat,
          label: CAT_LABELS[cat],
          meta: categoryInventory[cat]
        };
      })))
    })), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0
      }
    }, editRoomCategory ? React.createElement("button", {
      type: "button",
      "aria-label": "Edit assigned rooms",
      onClick: function onClick() {
        return openCategoryAssignment(editRoomCategory);
      },
      style: {
        minHeight: 32,
        padding: '8px 12px',
        borderRadius: 6,
        border: "1px solid ".concat(WF.accent),
        background: WF.accent,
        color: '#FFFFFF',
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '16px',
        cursor: 'pointer',
        whiteSpace: 'nowrap'
      }
    }, "Edit rooms") : React.createElement("button", {
      type: "button",
      disabled: !addRoomCategory,
      onClick: function onClick() {
        return addRoomCategory && openCategoryAssignment(addRoomCategory);
      },
      title: addRoomCategory ? "Add a room in ".concat(addRoomCategory.label) : 'No rooms available for this cabin type',
      style: {
        minHeight: 32,
        padding: '8px 12px',
        borderRadius: 6,
        border: "1px solid ".concat(WF.accent),
        background: WF.accent,
        color: '#FFFFFF',
        fontFamily: 'inherit',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '16px',
        cursor: addRoomCategory ? 'pointer' : 'not-allowed',
        opacity: addRoomCategory ? 1 : 0.48,
        whiteSpace: 'nowrap'
      }
    }, "Add room"))), React.createElement("div", {
      style: {
        overflowX: 'auto',
        scrollbarWidth: 'thin'
      }
    }, React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        tableLayout: 'auto'
      }
    }, React.createElement("thead", null, React.createElement("tr", null, React.createElement(TH, null, "Category name"), React.createElement(TH, {
      right: true
    }, React.createElement("span", {
      style: {
        display: 'block',
        color: WF.inkLabel
      }
    }, "Price"), React.createElement("span", {
      style: {
        display: 'block',
        color: WF.inkFaint,
        fontWeight: 400
      }
    }, "Double occupancy")), React.createElement(TH, {
      right: true
    }, "Total"), React.createElement(TH, {
      right: true
    }, "Single"), React.createElement(TH, {
      right: true
    }, "Double"), React.createElement(TH, {
      right: true
    }, "Double + infant"), React.createElement(TH, {
      right: true
    }, "Triple"), React.createElement(TH, {
      right: true
    }, "Triple + infant"), React.createElement(TH, {
      right: true
    }, "Quad"))), React.createElement("tbody", null, filteredRows.map(function (row) {
      var confirmed = confirmedRooms[row.id];
      var soldOut = row.total === 0;
      var categoryName = row.label.includes(' – ') ? row.label.split(' – ')[0] : row.label;
      return React.createElement(React.Fragment, {
        key: row.id
      }, React.createElement("tr", {
        className: "stateroom-category-row",
        "data-confirmed": confirmed ? 'true' : 'false',
        onClick: function onClick(event) {
          return event.stopPropagation();
        },
        style: {
          background: confirmed ? WF.accentTint : soldOut ? WF.fill : WF.panel,
          boxShadow: confirmed ? "inset 3px 0 ".concat(WF.accent) : 'none',
          opacity: soldOut ? 0.66 : 1,
          cursor: 'default'
        }
      }, React.createElement("td", {
        style: {
          padding: '8px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          minWidth: 188
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'flex-start',
          gap: 8
        }
      }, React.createElement("div", {
        style: {
          width: 9,
          height: 28,
          borderRadius: 3,
          background: row.color,
          flexShrink: 0
        }
      }), React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: WF.ink
        }
      }, categoryName), React.createElement("span", {
        style: {
          padding: '4px 4px',
          borderRadius: 4,
          border: "1px solid ".concat(WF.line),
          background: '#FFFFFF',
          fontSize: 12,
          fontWeight: 700,
          color: WF.inkSoft,
          fontFamily: 'ui-monospace, monospace'
        }
      }, row.id), soldOut && React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 600,
          color: BAD
        }
      }, "Unavailable"))))), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }
      }, React.createElement("span", {
        style: {
          fontSize: 12,
          fontWeight: 700,
          color: WF.ink,
          fontFamily: 'ui-monospace, monospace'
        }
      }, "$", row.price.toLocaleString(), ".00")), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row.total
      })), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row.single
      })), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row["double"]
      })), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row.dbinf
      })), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row.triple
      })), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row.trinf
      })), React.createElement("td", {
        style: {
          padding: '8px 4px',
          borderBottom: "1px solid ".concat(WF.lineSoft),
          textAlign: 'center'
        }
      }, React.createElement(NumCell, {
        val: row.quad
      }))));
    })))), openPanel && function () {
      var row = STATEROOM_ROWS.find(function (r) {
        return r.id === openPanel;
      });
      if (!row) return null;
      var qty = qtys[row.id] || 0;
      if (qty < 1) return null;
      var sel = selections[row.id] || {
        categoryBySlot: {
          0: row.id
        },
        roomsBySlot: {},
        cabinGuests: {},
        activeSlot: 0
      };
      var activeSlot = sel.activeSlot || 0;
      var activeCategoryId = categoryIdForSlot(row.id, sel, activeSlot);
      var taken = roomsTakenByOtherAssignments(selections, row.id, activeSlot, activeCategoryId);
      return React.createElement(SelectRoomPanel, {
        row: row,
        qty: qty,
        categoryBySlot: sel.categoryBySlot || {},
        roomsBySlot: sel.roomsBySlot,
        cabinGuests: sel.cabinGuests,
        activeSlot: activeSlot,
        partyGuests: s.guests,
        otherAssigned: assignedInOtherRows(selections, row.id),
        takenRooms: taken,
        onToggleRoom: function onToggleRoom(roomNum) {
          return handleToggleRoom(row.id, roomNum, qty);
        },
        onAutoAssign: function onAutoAssign(options) {
          return handleAutoAssign(row.id, row, qty, options);
        },
        onSelectSlot: function onSelectSlot(slotIdx) {
          return handleSelectSlot(row.id, slotIdx);
        },
        onGuestChange: function onGuestChange(slotIdx, field, val) {
          return handleGuestChange(row.id, slotIdx, field, val);
        },
        onConfirm: function onConfirm() {
          return handleConfirmRoom(row.id, row, qty);
        },
        onQtyChange: function onQtyChange(val) {
          return handleQtyChange(row, val);
        },
        onSwitchCategory: function onSwitchCategory(slotIdx, newRowId) {
          return handleSlotCategoryChange(row.id, slotIdx, newRowId);
        },
        onBack: function onBack() {
          handleBackPanel(row.id);
          if (onPanelClose) onPanelClose();
        },
        onClose: function onClose() {
          setOpenPanel(null);
          if (onPanelClose) onPanelClose();
        }
      });
    }());
  }
  var AssignStateroom = StateRoomMatrix;
  var DEMO_BOOKING_STATE = {
    guests: {
      adults: 4,
      youngAdults: 2,
      children: 2,
      infants: 2
    },
    cabins: [],
    suppAssignments: {},
    selectedSupps: {},
    cabinId: null,
    selectedCabinNum: null,
    selectedRoomCount: 0
  };
  window.MVASAssignStateroom = {
    AssignStateroom: AssignStateroom,
    StateRoomMatrix: StateRoomMatrix,
    SelectRoomPanel: SelectRoomPanel,
    STATEROOM_ROWS: STATEROOM_ROWS,
    STATEROOM_ROOMS_BY_ROW: STATEROOM_ROOMS_BY_ROW,
    ROOM_FEATURES: ROOM_FEATURES,
    DEMO_BOOKING_STATE: DEMO_BOOKING_STATE
  };
})();
