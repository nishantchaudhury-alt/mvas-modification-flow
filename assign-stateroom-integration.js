function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
  var ReactDOM = window.ReactDOM;
  var portable = window.MVASAssignStateroom;
  var mount = document.getElementById('assignStateroomReactMount');
  if (!React || !ReactDOM || !portable || !mount) return;
  var AssignStateroom = portable.AssignStateroom;
  var root = null;
  var sessionId = 0;
  function cleanup() {
    if (root) root.unmount();
    root = null;
    mount.hidden = true;
    document.body.classList.remove('portable-stateroom-open');
  }
  function Runtime(_ref) {
    var config = _ref.config,
      id = _ref.id;
    var stateRef = React.useRef(config.bookingState);
    var _React$useState = React.useState(config.bookingState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      booking = _React$useState2[0],
      setBooking = _React$useState2[1];
    var update = React.useCallback(function (patch) {
      var next = _objectSpread(_objectSpread({}, stateRef.current), patch);
      stateRef.current = next;
      setBooking(next);
    }, []);
    var close = React.useCallback(function () {
      window.queueMicrotask(function () {
        var _config$onClose;
        cleanup();
        (_config$onClose = config.onClose) === null || _config$onClose === void 0 || _config$onClose.call(config);
      });
    }, [config]);
    var confirm = React.useCallback(function () {
      var confirmed = stateRef.current;
      window.queueMicrotask(function () {
        var _config$onConfirm;
        cleanup();
        (_config$onConfirm = config.onConfirm) === null || _config$onConfirm === void 0 || _config$onConfirm.call(config, confirmed);
      });
    }, [config]);
    return React.createElement(AssignStateroom, {
      key: id,
      s: booking,
      update: update,
      initialOpenPanel: config.initialRowId,
      initialActiveSlot: config.activeCabinIndex || 0,
      onPanelClose: close,
      onConfirmRooms: confirm
    });
  }
  window.openPortableAssignStateroom = function (config) {
    cleanup();
    sessionId += 1;
    mount.hidden = false;
    document.body.classList.add('portable-stateroom-open');
    root = ReactDOM.createRoot(mount);
    root.render(React.createElement(Runtime, {
      config: config,
      id: sessionId
    }));
  };
  window.dispatchEvent(new CustomEvent('portable-stateroom-ready'));
})();
