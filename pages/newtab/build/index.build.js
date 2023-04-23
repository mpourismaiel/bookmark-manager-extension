(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/sortablejs/Sortable.min.js
  var require_Sortable_min = __commonJS({
    "node_modules/sortablejs/Sortable.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sortable = e();
      }(exports, function() {
        "use strict";
        function e(e2, t2) {
          var n2, o2 = Object.keys(e2);
          return Object.getOwnPropertySymbols && (n2 = Object.getOwnPropertySymbols(e2), t2 && (n2 = n2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), o2.push.apply(o2, n2)), o2;
        }
        function M(o2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var i2 = null != arguments[t2] ? arguments[t2] : {};
            t2 % 2 ? e(Object(i2), true).forEach(function(t3) {
              var e2, n2;
              e2 = o2, t3 = i2[n2 = t3], n2 in e2 ? Object.defineProperty(e2, n2, { value: t3, enumerable: true, configurable: true, writable: true }) : e2[n2] = t3;
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o2, Object.getOwnPropertyDescriptors(i2)) : e(Object(i2)).forEach(function(t3) {
              Object.defineProperty(o2, t3, Object.getOwnPropertyDescriptor(i2, t3));
            });
          }
          return o2;
        }
        function o(t2) {
          return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        function a() {
          return (a = Object.assign || function(t2) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var n2, o2 = arguments[e2];
              for (n2 in o2)
                Object.prototype.hasOwnProperty.call(o2, n2) && (t2[n2] = o2[n2]);
            }
            return t2;
          }).apply(this, arguments);
        }
        function i(t2, e2) {
          if (null == t2)
            return {};
          var n2, o2 = function(t3, e3) {
            if (null == t3)
              return {};
            for (var n3, o3 = {}, i3 = Object.keys(t3), r3 = 0; r3 < i3.length; r3++)
              n3 = i3[r3], 0 <= e3.indexOf(n3) || (o3[n3] = t3[n3]);
            return o3;
          }(t2, e2);
          if (Object.getOwnPropertySymbols)
            for (var i2 = Object.getOwnPropertySymbols(t2), r2 = 0; r2 < i2.length; r2++)
              n2 = i2[r2], 0 <= e2.indexOf(n2) || Object.prototype.propertyIsEnumerable.call(t2, n2) && (o2[n2] = t2[n2]);
          return o2;
        }
        function r(t2) {
          return function(t3) {
            if (Array.isArray(t3))
              return l(t3);
          }(t2) || function(t3) {
            if ("undefined" != typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"])
              return Array.from(t3);
          }(t2) || function(t3, e2) {
            if (t3) {
              if ("string" == typeof t3)
                return l(t3, e2);
              var n2 = Object.prototype.toString.call(t3).slice(8, -1);
              return "Map" === (n2 = "Object" === n2 && t3.constructor ? t3.constructor.name : n2) || "Set" === n2 ? Array.from(t3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l(t3, e2) : void 0;
            }
          }(t2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function l(t2, e2) {
          (null == e2 || e2 > t2.length) && (e2 = t2.length);
          for (var n2 = 0, o2 = new Array(e2); n2 < e2; n2++)
            o2[n2] = t2[n2];
          return o2;
        }
        function t(t2) {
          if ("undefined" != typeof window && window.navigator)
            return !!navigator.userAgent.match(t2);
        }
        var y = t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), w = t(/Edge/i), s = t(/firefox/i), u = t(/safari/i) && !t(/chrome/i) && !t(/android/i), n = t(/iP(ad|od|hone)/i), c = t(/chrome/i) && t(/android/i), d = { capture: false, passive: false };
        function h(t2, e2, n2) {
          t2.addEventListener(e2, n2, !y && d);
        }
        function f(t2, e2, n2) {
          t2.removeEventListener(e2, n2, !y && d);
        }
        function p(t2, e2) {
          if (e2 && (">" === e2[0] && (e2 = e2.substring(1)), t2))
            try {
              if (t2.matches)
                return t2.matches(e2);
              if (t2.msMatchesSelector)
                return t2.msMatchesSelector(e2);
              if (t2.webkitMatchesSelector)
                return t2.webkitMatchesSelector(e2);
            } catch (t3) {
              return;
            }
        }
        function N(t2, e2, n2, o2) {
          if (t2) {
            n2 = n2 || document;
            do {
              if (null != e2 && (">" !== e2[0] || t2.parentNode === n2) && p(t2, e2) || o2 && t2 === n2)
                return t2;
            } while (t2 !== n2 && (t2 = (i2 = t2).host && i2 !== document && i2.host.nodeType ? i2.host : i2.parentNode));
          }
          var i2;
          return null;
        }
        var g, m = /\s+/g;
        function I(t2, e2, n2) {
          var o2;
          t2 && e2 && (t2.classList ? t2.classList[n2 ? "add" : "remove"](e2) : (o2 = (" " + t2.className + " ").replace(m, " ").replace(" " + e2 + " ", " "), t2.className = (o2 + (n2 ? " " + e2 : "")).replace(m, " ")));
        }
        function P(t2, e2, n2) {
          var o2 = t2 && t2.style;
          if (o2) {
            if (void 0 === n2)
              return document.defaultView && document.defaultView.getComputedStyle ? n2 = document.defaultView.getComputedStyle(t2, "") : t2.currentStyle && (n2 = t2.currentStyle), void 0 === e2 ? n2 : n2[e2];
            o2[e2 = !(e2 in o2 || -1 !== e2.indexOf("webkit")) ? "-webkit-" + e2 : e2] = n2 + ("string" == typeof n2 ? "" : "px");
          }
        }
        function v(t2, e2) {
          var n2 = "";
          if ("string" == typeof t2)
            n2 = t2;
          else
            do {
              var o2 = P(t2, "transform");
            } while (o2 && "none" !== o2 && (n2 = o2 + " " + n2), !e2 && (t2 = t2.parentNode));
          var i2 = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
          return i2 && new i2(n2);
        }
        function b(t2, e2, n2) {
          if (t2) {
            var o2 = t2.getElementsByTagName(e2), i2 = 0, r2 = o2.length;
            if (n2)
              for (; i2 < r2; i2++)
                n2(o2[i2], i2);
            return o2;
          }
          return [];
        }
        function O() {
          var t2 = document.scrollingElement;
          return t2 || document.documentElement;
        }
        function k(t2, e2, n2, o2, i2) {
          if (t2.getBoundingClientRect || t2 === window) {
            var r2, a2, l2, s2, c2, u2, d2 = t2 !== window && t2.parentNode && t2 !== O() ? (a2 = (r2 = t2.getBoundingClientRect()).top, l2 = r2.left, s2 = r2.bottom, c2 = r2.right, u2 = r2.height, r2.width) : (l2 = a2 = 0, s2 = window.innerHeight, c2 = window.innerWidth, u2 = window.innerHeight, window.innerWidth);
            if ((e2 || n2) && t2 !== window && (i2 = i2 || t2.parentNode, !y))
              do {
                if (i2 && i2.getBoundingClientRect && ("none" !== P(i2, "transform") || n2 && "static" !== P(i2, "position"))) {
                  var h2 = i2.getBoundingClientRect();
                  a2 -= h2.top + parseInt(P(i2, "border-top-width")), l2 -= h2.left + parseInt(P(i2, "border-left-width")), s2 = a2 + r2.height, c2 = l2 + r2.width;
                  break;
                }
              } while (i2 = i2.parentNode);
            return o2 && t2 !== window && (o2 = (e2 = v(i2 || t2)) && e2.a, t2 = e2 && e2.d, e2 && (s2 = (a2 /= t2) + (u2 /= t2), c2 = (l2 /= o2) + (d2 /= o2))), { top: a2, left: l2, bottom: s2, right: c2, width: d2, height: u2 };
          }
        }
        function R(t2, e2, n2) {
          for (var o2 = A(t2, true), i2 = k(t2)[e2]; o2; ) {
            var r2 = k(o2)[n2];
            if (!("top" === n2 || "left" === n2 ? r2 <= i2 : i2 <= r2))
              return o2;
            if (o2 === O())
              break;
            o2 = A(o2, false);
          }
          return false;
        }
        function X(t2, e2, n2, o2) {
          for (var i2 = 0, r2 = 0, a2 = t2.children; r2 < a2.length; ) {
            if ("none" !== a2[r2].style.display && a2[r2] !== Bt.ghost && (o2 || a2[r2] !== Bt.dragged) && N(a2[r2], n2.draggable, t2, false)) {
              if (i2 === e2)
                return a2[r2];
              i2++;
            }
            r2++;
          }
          return null;
        }
        function Y(t2, e2) {
          for (var n2 = t2.lastElementChild; n2 && (n2 === Bt.ghost || "none" === P(n2, "display") || e2 && !p(n2, e2)); )
            n2 = n2.previousElementSibling;
          return n2 || null;
        }
        function B(t2, e2) {
          var n2 = 0;
          if (!t2 || !t2.parentNode)
            return -1;
          for (; t2 = t2.previousElementSibling; )
            "TEMPLATE" === t2.nodeName.toUpperCase() || t2 === Bt.clone || e2 && !p(t2, e2) || n2++;
          return n2;
        }
        function E(t2) {
          var e2 = 0, n2 = 0, o2 = O();
          if (t2)
            do {
              var i2 = v(t2), r2 = i2.a, i2 = i2.d;
            } while (e2 += t2.scrollLeft * r2, n2 += t2.scrollTop * i2, t2 !== o2 && (t2 = t2.parentNode));
          return [e2, n2];
        }
        function A(t2, e2) {
          if (!t2 || !t2.getBoundingClientRect)
            return O();
          var n2 = t2, o2 = false;
          do {
            if (n2.clientWidth < n2.scrollWidth || n2.clientHeight < n2.scrollHeight) {
              var i2 = P(n2);
              if (n2.clientWidth < n2.scrollWidth && ("auto" == i2.overflowX || "scroll" == i2.overflowX) || n2.clientHeight < n2.scrollHeight && ("auto" == i2.overflowY || "scroll" == i2.overflowY)) {
                if (!n2.getBoundingClientRect || n2 === document.body)
                  return O();
                if (o2 || e2)
                  return n2;
                o2 = true;
              }
            }
          } while (n2 = n2.parentNode);
          return O();
        }
        function D(t2, e2) {
          return Math.round(t2.top) === Math.round(e2.top) && Math.round(t2.left) === Math.round(e2.left) && Math.round(t2.height) === Math.round(e2.height) && Math.round(t2.width) === Math.round(e2.width);
        }
        function S(e2, n2) {
          return function() {
            var t2;
            g || (1 === (t2 = arguments).length ? e2.call(this, t2[0]) : e2.apply(this, t2), g = setTimeout(function() {
              g = void 0;
            }, n2));
          };
        }
        function F(t2, e2, n2) {
          t2.scrollLeft += e2, t2.scrollTop += n2;
        }
        function _(t2) {
          var e2 = window.Polymer, n2 = window.jQuery || window.Zepto;
          return e2 && e2.dom ? e2.dom(t2).cloneNode(true) : n2 ? n2(t2).clone(true)[0] : t2.cloneNode(true);
        }
        function C(t2, e2) {
          P(t2, "position", "absolute"), P(t2, "top", e2.top), P(t2, "left", e2.left), P(t2, "width", e2.width), P(t2, "height", e2.height);
        }
        function T(t2) {
          P(t2, "position", ""), P(t2, "top", ""), P(t2, "left", ""), P(t2, "width", ""), P(t2, "height", "");
        }
        var j = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
        function x() {
          var e2, o2 = [];
          return { captureAnimationState: function() {
            o2 = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t2) {
              var e3, n2;
              "none" !== P(t2, "display") && t2 !== Bt.ghost && (o2.push({ target: t2, rect: k(t2) }), e3 = M({}, o2[o2.length - 1].rect), !t2.thisAnimationDuration || (n2 = v(t2, true)) && (e3.top -= n2.f, e3.left -= n2.e), t2.fromRect = e3);
            });
          }, addAnimationState: function(t2) {
            o2.push(t2);
          }, removeAnimationState: function(t2) {
            o2.splice(function(t3, e3) {
              for (var n2 in t3)
                if (t3.hasOwnProperty(n2)) {
                  for (var o3 in e3)
                    if (e3.hasOwnProperty(o3) && e3[o3] === t3[n2][o3])
                      return Number(n2);
                }
              return -1;
            }(o2, { target: t2 }), 1);
          }, animateAll: function(t2) {
            var c2 = this;
            if (!this.options.animation)
              return clearTimeout(e2), void ("function" == typeof t2 && t2());
            var u2 = false, d2 = 0;
            o2.forEach(function(t3) {
              var e3 = 0, n2 = t3.target, o3 = n2.fromRect, i2 = k(n2), r2 = n2.prevFromRect, a2 = n2.prevToRect, l2 = t3.rect, s2 = v(n2, true);
              s2 && (i2.top -= s2.f, i2.left -= s2.e), n2.toRect = i2, n2.thisAnimationDuration && D(r2, i2) && !D(o3, i2) && (l2.top - i2.top) / (l2.left - i2.left) == (o3.top - i2.top) / (o3.left - i2.left) && (t3 = l2, s2 = r2, r2 = a2, a2 = c2.options, e3 = Math.sqrt(Math.pow(s2.top - t3.top, 2) + Math.pow(s2.left - t3.left, 2)) / Math.sqrt(Math.pow(s2.top - r2.top, 2) + Math.pow(s2.left - r2.left, 2)) * a2.animation), D(i2, o3) || (n2.prevFromRect = o3, n2.prevToRect = i2, e3 = e3 || c2.options.animation, c2.animate(n2, l2, i2, e3)), e3 && (u2 = true, d2 = Math.max(d2, e3), clearTimeout(n2.animationResetTimer), n2.animationResetTimer = setTimeout(function() {
                n2.animationTime = 0, n2.prevFromRect = null, n2.fromRect = null, n2.prevToRect = null, n2.thisAnimationDuration = null;
              }, e3), n2.thisAnimationDuration = e3);
            }), clearTimeout(e2), u2 ? e2 = setTimeout(function() {
              "function" == typeof t2 && t2();
            }, d2) : "function" == typeof t2 && t2(), o2 = [];
          }, animate: function(t2, e3, n2, o3) {
            var i2, r2;
            o3 && (P(t2, "transition", ""), P(t2, "transform", ""), i2 = (r2 = v(this.el)) && r2.a, r2 = r2 && r2.d, i2 = (e3.left - n2.left) / (i2 || 1), r2 = (e3.top - n2.top) / (r2 || 1), t2.animatingX = !!i2, t2.animatingY = !!r2, P(t2, "transform", "translate3d(" + i2 + "px," + r2 + "px,0)"), this.forRepaintDummy = t2.offsetWidth, P(t2, "transition", "transform " + o3 + "ms" + (this.options.easing ? " " + this.options.easing : "")), P(t2, "transform", "translate3d(0,0,0)"), "number" == typeof t2.animated && clearTimeout(t2.animated), t2.animated = setTimeout(function() {
              P(t2, "transition", ""), P(t2, "transform", ""), t2.animated = false, t2.animatingX = false, t2.animatingY = false;
            }, o3));
          } };
        }
        var H = [], L = { initializeByDefault: true }, K = { mount: function(e2) {
          for (var t2 in L)
            !L.hasOwnProperty(t2) || t2 in e2 || (e2[t2] = L[t2]);
          H.forEach(function(t3) {
            if (t3.pluginName === e2.pluginName)
              throw "Sortable: Cannot mount plugin ".concat(e2.pluginName, " more than once");
          }), H.push(e2);
        }, pluginEvent: function(e2, n2, o2) {
          var t2 = this;
          this.eventCanceled = false, o2.cancel = function() {
            t2.eventCanceled = true;
          };
          var i2 = e2 + "Global";
          H.forEach(function(t3) {
            n2[t3.pluginName] && (n2[t3.pluginName][i2] && n2[t3.pluginName][i2](M({ sortable: n2 }, o2)), n2.options[t3.pluginName] && n2[t3.pluginName][e2] && n2[t3.pluginName][e2](M({ sortable: n2 }, o2)));
          });
        }, initializePlugins: function(n2, o2, i2, t2) {
          for (var e2 in H.forEach(function(t3) {
            var e3 = t3.pluginName;
            (n2.options[e3] || t3.initializeByDefault) && ((t3 = new t3(n2, o2, n2.options)).sortable = n2, t3.options = n2.options, n2[e3] = t3, a(i2, t3.defaults));
          }), n2.options) {
            var r2;
            n2.options.hasOwnProperty(e2) && (void 0 !== (r2 = this.modifyOption(n2, e2, n2.options[e2])) && (n2.options[e2] = r2));
          }
        }, getEventProperties: function(e2, n2) {
          var o2 = {};
          return H.forEach(function(t2) {
            "function" == typeof t2.eventProperties && a(o2, t2.eventProperties.call(n2[t2.pluginName], e2));
          }), o2;
        }, modifyOption: function(e2, n2, o2) {
          var i2;
          return H.forEach(function(t2) {
            e2[t2.pluginName] && t2.optionListeners && "function" == typeof t2.optionListeners[n2] && (i2 = t2.optionListeners[n2].call(e2[t2.pluginName], o2));
          }), i2;
        } };
        function W(t2) {
          var e2 = t2.sortable, n2 = t2.rootEl, o2 = t2.name, i2 = t2.targetEl, r2 = t2.cloneEl, a2 = t2.toEl, l2 = t2.fromEl, s2 = t2.oldIndex, c2 = t2.newIndex, u2 = t2.oldDraggableIndex, d2 = t2.newDraggableIndex, h2 = t2.originalEvent, f2 = t2.putSortable, p2 = t2.extraEventProperties;
          if (e2 = e2 || n2 && n2[j]) {
            var g2, m2 = e2.options, t2 = "on" + o2.charAt(0).toUpperCase() + o2.substr(1);
            !window.CustomEvent || y || w ? (g2 = document.createEvent("Event")).initEvent(o2, true, true) : g2 = new CustomEvent(o2, { bubbles: true, cancelable: true }), g2.to = a2 || n2, g2.from = l2 || n2, g2.item = i2 || n2, g2.clone = r2, g2.oldIndex = s2, g2.newIndex = c2, g2.oldDraggableIndex = u2, g2.newDraggableIndex = d2, g2.originalEvent = h2, g2.pullMode = f2 ? f2.lastPutMode : void 0;
            var v2, b2 = M(M({}, p2), K.getEventProperties(o2, e2));
            for (v2 in b2)
              g2[v2] = b2[v2];
            n2 && n2.dispatchEvent(g2), m2[t2] && m2[t2].call(e2, g2);
          }
        }
        function z(t2, e2) {
          var n2 = (o2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt, o2 = i(o2, G);
          K.pluginEvent.bind(Bt)(t2, e2, M({ dragEl: q, parentEl: V, ghostEl: Z, rootEl: $, nextEl: Q, lastDownEl: J, cloneEl: tt, cloneHidden: et, dragStarted: pt, putSortable: lt, activeSortable: Bt.active, originalEvent: n2, oldIndex: nt, oldDraggableIndex: it, newIndex: ot, newDraggableIndex: rt, hideGhostForTarget: kt, unhideGhostForTarget: Rt, cloneNowHidden: function() {
            et = true;
          }, cloneNowShown: function() {
            et = false;
          }, dispatchSortableEvent: function(t3) {
            U({ sortable: e2, name: t3, originalEvent: n2 });
          } }, o2));
        }
        var G = ["evt"];
        function U(t2) {
          W(M({ putSortable: lt, cloneEl: tt, targetEl: q, rootEl: $, oldIndex: nt, oldDraggableIndex: it, newIndex: ot, newDraggableIndex: rt }, t2));
        }
        var q, V, Z, $, Q, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, mt, vt, bt, yt = false, wt = false, Et = [], Dt = false, St = false, _t = [], Ct = false, Tt = [], xt = "undefined" != typeof document, Ot = n, At = w || y ? "cssFloat" : "float", Mt = xt && !c && !n && "draggable" in document.createElement("div"), Nt = function() {
          if (xt) {
            if (y)
              return false;
            var t2 = document.createElement("x");
            return t2.style.cssText = "pointer-events:auto", "auto" === t2.style.pointerEvents;
          }
        }(), It = function(t2, e2) {
          var n2 = P(t2), o2 = parseInt(n2.width) - parseInt(n2.paddingLeft) - parseInt(n2.paddingRight) - parseInt(n2.borderLeftWidth) - parseInt(n2.borderRightWidth), i2 = X(t2, 0, e2), r2 = X(t2, 1, e2), a2 = i2 && P(i2), l2 = r2 && P(r2), s2 = a2 && parseInt(a2.marginLeft) + parseInt(a2.marginRight) + k(i2).width, t2 = l2 && parseInt(l2.marginLeft) + parseInt(l2.marginRight) + k(r2).width;
          if ("flex" === n2.display)
            return "column" === n2.flexDirection || "column-reverse" === n2.flexDirection ? "vertical" : "horizontal";
          if ("grid" === n2.display)
            return n2.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
          if (i2 && a2.float && "none" !== a2.float) {
            e2 = "left" === a2.float ? "left" : "right";
            return !r2 || "both" !== l2.clear && l2.clear !== e2 ? "horizontal" : "vertical";
          }
          return i2 && ("block" === a2.display || "flex" === a2.display || "table" === a2.display || "grid" === a2.display || o2 <= s2 && "none" === n2[At] || r2 && "none" === n2[At] && o2 < s2 + t2) ? "vertical" : "horizontal";
        }, Pt = function(t2) {
          function l2(r2, a2) {
            return function(t3, e3, n3, o2) {
              var i2 = t3.options.group.name && e3.options.group.name && t3.options.group.name === e3.options.group.name;
              if (null == r2 && (a2 || i2))
                return true;
              if (null == r2 || false === r2)
                return false;
              if (a2 && "clone" === r2)
                return r2;
              if ("function" == typeof r2)
                return l2(r2(t3, e3, n3, o2), a2)(t3, e3, n3, o2);
              e3 = (a2 ? t3 : e3).options.group.name;
              return true === r2 || "string" == typeof r2 && r2 === e3 || r2.join && -1 < r2.indexOf(e3);
            };
          }
          var e2 = {}, n2 = t2.group;
          n2 && "object" == o(n2) || (n2 = { name: n2 }), e2.name = n2.name, e2.checkPull = l2(n2.pull, true), e2.checkPut = l2(n2.put), e2.revertClone = n2.revertClone, t2.group = e2;
        }, kt = function() {
          !Nt && Z && P(Z, "display", "none");
        }, Rt = function() {
          !Nt && Z && P(Z, "display", "");
        };
        xt && !c && document.addEventListener("click", function(t2) {
          if (wt)
            return t2.preventDefault(), t2.stopPropagation && t2.stopPropagation(), t2.stopImmediatePropagation && t2.stopImmediatePropagation(), wt = false;
        }, true);
        function Xt(t2) {
          if (q) {
            t2 = t2.touches ? t2.touches[0] : t2;
            var e2 = (i2 = t2.clientX, r2 = t2.clientY, Et.some(function(t3) {
              var e3 = t3[j].options.emptyInsertThreshold;
              if (e3 && !Y(t3)) {
                var n3 = k(t3), o3 = i2 >= n3.left - e3 && i2 <= n3.right + e3, e3 = r2 >= n3.top - e3 && r2 <= n3.bottom + e3;
                return o3 && e3 ? a2 = t3 : void 0;
              }
            }), a2);
            if (e2) {
              var n2, o2 = {};
              for (n2 in t2)
                t2.hasOwnProperty(n2) && (o2[n2] = t2[n2]);
              o2.target = o2.rootEl = e2, o2.preventDefault = void 0, o2.stopPropagation = void 0, e2[j]._onDragOver(o2);
            }
          }
          var i2, r2, a2;
        }
        function Yt(t2) {
          q && q.parentNode[j]._isOutsideThisEl(t2.target);
        }
        function Bt(t2, e2) {
          if (!t2 || !t2.nodeType || 1 !== t2.nodeType)
            throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t2));
          this.el = t2, this.options = e2 = a({}, e2), t2[j] = this;
          var n2, o2, i2 = { group: null, sort: true, disabled: false, store: null, handle: null, draggable: /^[uo]l$/i.test(t2.nodeName) ? ">li" : ">*", swapThreshold: 1, invertSwap: false, invertedSwapThreshold: null, removeCloneOnHide: true, direction: function() {
            return It(t2, this.options);
          }, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: true, animation: 0, easing: null, setData: function(t3, e3) {
            t3.setData("Text", e3.textContent);
          }, dropBubble: false, dragoverBubble: false, dataIdAttr: "data-id", delay: 0, delayOnTouchOnly: false, touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1, forceFallback: false, fallbackClass: "sortable-fallback", fallbackOnBody: false, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: false !== Bt.supportPointer && "PointerEvent" in window && !u, emptyInsertThreshold: 5 };
          for (n2 in K.initializePlugins(this, t2, i2), i2)
            n2 in e2 || (e2[n2] = i2[n2]);
          for (o2 in Pt(e2), this)
            "_" === o2.charAt(0) && "function" == typeof this[o2] && (this[o2] = this[o2].bind(this));
          this.nativeDraggable = !e2.forceFallback && Mt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e2.supportPointer ? h(t2, "pointerdown", this._onTapStart) : (h(t2, "mousedown", this._onTapStart), h(t2, "touchstart", this._onTapStart)), this.nativeDraggable && (h(t2, "dragover", this), h(t2, "dragenter", this)), Et.push(this.el), e2.store && e2.store.get && this.sort(e2.store.get(this) || []), a(this, x());
        }
        function Ft(t2, e2, n2, o2, i2, r2, a2, l2) {
          var s2, c2, u2 = t2[j], d2 = u2.options.onMove;
          return !window.CustomEvent || y || w ? (s2 = document.createEvent("Event")).initEvent("move", true, true) : s2 = new CustomEvent("move", { bubbles: true, cancelable: true }), s2.to = e2, s2.from = t2, s2.dragged = n2, s2.draggedRect = o2, s2.related = i2 || e2, s2.relatedRect = r2 || k(e2), s2.willInsertAfter = l2, s2.originalEvent = a2, t2.dispatchEvent(s2), c2 = d2 ? d2.call(u2, s2, a2) : c2;
        }
        function jt(t2) {
          t2.draggable = false;
        }
        function Ht() {
          Ct = false;
        }
        function Lt(t2) {
          return setTimeout(t2, 0);
        }
        function Kt(t2) {
          return clearTimeout(t2);
        }
        Bt.prototype = { constructor: Bt, _isOutsideThisEl: function(t2) {
          this.el.contains(t2) || t2 === this.el || (gt = null);
        }, _getDirection: function(t2, e2) {
          return "function" == typeof this.options.direction ? this.options.direction.call(this, t2, e2, q) : this.options.direction;
        }, _onTapStart: function(e2) {
          if (e2.cancelable) {
            var n2 = this, o2 = this.el, t2 = this.options, i2 = t2.preventOnFilter, r2 = e2.type, a2 = e2.touches && e2.touches[0] || e2.pointerType && "touch" === e2.pointerType && e2, l2 = (a2 || e2).target, s2 = e2.target.shadowRoot && (e2.path && e2.path[0] || e2.composedPath && e2.composedPath()[0]) || l2, c2 = t2.filter;
            if (!function(t3) {
              Tt.length = 0;
              var e3 = t3.getElementsByTagName("input"), n3 = e3.length;
              for (; n3--; ) {
                var o3 = e3[n3];
                o3.checked && Tt.push(o3);
              }
            }(o2), !q && !(/mousedown|pointerdown/.test(r2) && 0 !== e2.button || t2.disabled) && !s2.isContentEditable && (this.nativeDraggable || !u || !l2 || "SELECT" !== l2.tagName.toUpperCase()) && !((l2 = N(l2, t2.draggable, o2, false)) && l2.animated || J === l2)) {
              if (nt = B(l2), it = B(l2, t2.draggable), "function" == typeof c2) {
                if (c2.call(this, e2, l2, this))
                  return U({ sortable: n2, rootEl: s2, name: "filter", targetEl: l2, toEl: o2, fromEl: o2 }), z("filter", n2, { evt: e2 }), void (i2 && e2.cancelable && e2.preventDefault());
              } else if (c2 = c2 && c2.split(",").some(function(t3) {
                if (t3 = N(s2, t3.trim(), o2, false))
                  return U({ sortable: n2, rootEl: t3, name: "filter", targetEl: l2, fromEl: o2, toEl: o2 }), z("filter", n2, { evt: e2 }), true;
              }))
                return void (i2 && e2.cancelable && e2.preventDefault());
              t2.handle && !N(s2, t2.handle, o2, false) || this._prepareDragStart(e2, a2, l2);
            }
          }
        }, _prepareDragStart: function(t2, e2, n2) {
          var o2, i2 = this, r2 = i2.el, a2 = i2.options, l2 = r2.ownerDocument;
          n2 && !q && n2.parentNode === r2 && (o2 = k(n2), $ = r2, V = (q = n2).parentNode, Q = q.nextSibling, J = n2, at = a2.group, st = { target: Bt.dragged = q, clientX: (e2 || t2).clientX, clientY: (e2 || t2).clientY }, ht = st.clientX - o2.left, ft = st.clientY - o2.top, this._lastX = (e2 || t2).clientX, this._lastY = (e2 || t2).clientY, q.style["will-change"] = "all", o2 = function() {
            z("delayEnded", i2, { evt: t2 }), Bt.eventCanceled ? i2._onDrop() : (i2._disableDelayedDragEvents(), !s && i2.nativeDraggable && (q.draggable = true), i2._triggerDragStart(t2, e2), U({ sortable: i2, name: "choose", originalEvent: t2 }), I(q, a2.chosenClass, true));
          }, a2.ignore.split(",").forEach(function(t3) {
            b(q, t3.trim(), jt);
          }), h(l2, "dragover", Xt), h(l2, "mousemove", Xt), h(l2, "touchmove", Xt), h(l2, "mouseup", i2._onDrop), h(l2, "touchend", i2._onDrop), h(l2, "touchcancel", i2._onDrop), s && this.nativeDraggable && (this.options.touchStartThreshold = 4, q.draggable = true), z("delayStart", this, { evt: t2 }), !a2.delay || a2.delayOnTouchOnly && !e2 || this.nativeDraggable && (w || y) ? o2() : Bt.eventCanceled ? this._onDrop() : (h(l2, "mouseup", i2._disableDelayedDrag), h(l2, "touchend", i2._disableDelayedDrag), h(l2, "touchcancel", i2._disableDelayedDrag), h(l2, "mousemove", i2._delayedDragTouchMoveHandler), h(l2, "touchmove", i2._delayedDragTouchMoveHandler), a2.supportPointer && h(l2, "pointermove", i2._delayedDragTouchMoveHandler), i2._dragStartTimer = setTimeout(o2, a2.delay)));
        }, _delayedDragTouchMoveHandler: function(t2) {
          t2 = t2.touches ? t2.touches[0] : t2;
          Math.max(Math.abs(t2.clientX - this._lastX), Math.abs(t2.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
        }, _disableDelayedDrag: function() {
          q && jt(q), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
        }, _disableDelayedDragEvents: function() {
          var t2 = this.el.ownerDocument;
          f(t2, "mouseup", this._disableDelayedDrag), f(t2, "touchend", this._disableDelayedDrag), f(t2, "touchcancel", this._disableDelayedDrag), f(t2, "mousemove", this._delayedDragTouchMoveHandler), f(t2, "touchmove", this._delayedDragTouchMoveHandler), f(t2, "pointermove", this._delayedDragTouchMoveHandler);
        }, _triggerDragStart: function(t2, e2) {
          e2 = e2 || "touch" == t2.pointerType && t2, !this.nativeDraggable || e2 ? this.options.supportPointer ? h(document, "pointermove", this._onTouchMove) : h(document, e2 ? "touchmove" : "mousemove", this._onTouchMove) : (h(q, "dragend", this), h($, "dragstart", this._onDragStart));
          try {
            document.selection ? Lt(function() {
              document.selection.empty();
            }) : window.getSelection().removeAllRanges();
          } catch (t3) {
          }
        }, _dragStarted: function(t2, e2) {
          var n2;
          yt = false, $ && q ? (z("dragStarted", this, { evt: e2 }), this.nativeDraggable && h(document, "dragover", Yt), n2 = this.options, t2 || I(q, n2.dragClass, false), I(q, n2.ghostClass, true), Bt.active = this, t2 && this._appendGhost(), U({ sortable: this, name: "start", originalEvent: e2 })) : this._nulling();
        }, _emulateDragOver: function() {
          if (ct) {
            this._lastX = ct.clientX, this._lastY = ct.clientY, kt();
            for (var t2 = document.elementFromPoint(ct.clientX, ct.clientY), e2 = t2; t2 && t2.shadowRoot && (t2 = t2.shadowRoot.elementFromPoint(ct.clientX, ct.clientY)) !== e2; )
              e2 = t2;
            if (q.parentNode[j]._isOutsideThisEl(t2), e2)
              do {
                if (e2[j]) {
                  if (e2[j]._onDragOver({ clientX: ct.clientX, clientY: ct.clientY, target: t2, rootEl: e2 }) && !this.options.dragoverBubble)
                    break;
                }
              } while (e2 = (t2 = e2).parentNode);
            Rt();
          }
        }, _onTouchMove: function(t2) {
          if (st) {
            var e2 = this.options, n2 = e2.fallbackTolerance, o2 = e2.fallbackOffset, i2 = t2.touches ? t2.touches[0] : t2, r2 = Z && v(Z, true), a2 = Z && r2 && r2.a, l2 = Z && r2 && r2.d, e2 = Ot && bt && E(bt), a2 = (i2.clientX - st.clientX + o2.x) / (a2 || 1) + (e2 ? e2[0] - _t[0] : 0) / (a2 || 1), l2 = (i2.clientY - st.clientY + o2.y) / (l2 || 1) + (e2 ? e2[1] - _t[1] : 0) / (l2 || 1);
            if (!Bt.active && !yt) {
              if (n2 && Math.max(Math.abs(i2.clientX - this._lastX), Math.abs(i2.clientY - this._lastY)) < n2)
                return;
              this._onDragStart(t2, true);
            }
            Z && (r2 ? (r2.e += a2 - (ut || 0), r2.f += l2 - (dt || 0)) : r2 = { a: 1, b: 0, c: 0, d: 1, e: a2, f: l2 }, r2 = "matrix(".concat(r2.a, ",").concat(r2.b, ",").concat(r2.c, ",").concat(r2.d, ",").concat(r2.e, ",").concat(r2.f, ")"), P(Z, "webkitTransform", r2), P(Z, "mozTransform", r2), P(Z, "msTransform", r2), P(Z, "transform", r2), ut = a2, dt = l2, ct = i2), t2.cancelable && t2.preventDefault();
          }
        }, _appendGhost: function() {
          if (!Z) {
            var t2 = this.options.fallbackOnBody ? document.body : $, e2 = k(q, true, Ot, true, t2), n2 = this.options;
            if (Ot) {
              for (bt = t2; "static" === P(bt, "position") && "none" === P(bt, "transform") && bt !== document; )
                bt = bt.parentNode;
              bt !== document.body && bt !== document.documentElement ? (bt === document && (bt = O()), e2.top += bt.scrollTop, e2.left += bt.scrollLeft) : bt = O(), _t = E(bt);
            }
            I(Z = q.cloneNode(true), n2.ghostClass, false), I(Z, n2.fallbackClass, true), I(Z, n2.dragClass, true), P(Z, "transition", ""), P(Z, "transform", ""), P(Z, "box-sizing", "border-box"), P(Z, "margin", 0), P(Z, "top", e2.top), P(Z, "left", e2.left), P(Z, "width", e2.width), P(Z, "height", e2.height), P(Z, "opacity", "0.8"), P(Z, "position", Ot ? "absolute" : "fixed"), P(Z, "zIndex", "100000"), P(Z, "pointerEvents", "none"), Bt.ghost = Z, t2.appendChild(Z), P(Z, "transform-origin", ht / parseInt(Z.style.width) * 100 + "% " + ft / parseInt(Z.style.height) * 100 + "%");
          }
        }, _onDragStart: function(t2, e2) {
          var n2 = this, o2 = t2.dataTransfer, i2 = n2.options;
          z("dragStart", this, { evt: t2 }), Bt.eventCanceled ? this._onDrop() : (z("setupClone", this), Bt.eventCanceled || ((tt = _(q)).removeAttribute("id"), tt.draggable = false, tt.style["will-change"] = "", this._hideClone(), I(tt, this.options.chosenClass, false), Bt.clone = tt), n2.cloneId = Lt(function() {
            z("clone", n2), Bt.eventCanceled || (n2.options.removeCloneOnHide || $.insertBefore(tt, q), n2._hideClone(), U({ sortable: n2, name: "clone" }));
          }), e2 || I(q, i2.dragClass, true), e2 ? (wt = true, n2._loopId = setInterval(n2._emulateDragOver, 50)) : (f(document, "mouseup", n2._onDrop), f(document, "touchend", n2._onDrop), f(document, "touchcancel", n2._onDrop), o2 && (o2.effectAllowed = "move", i2.setData && i2.setData.call(n2, o2, q)), h(document, "drop", n2), P(q, "transform", "translateZ(0)")), yt = true, n2._dragStartId = Lt(n2._dragStarted.bind(n2, e2, t2)), h(document, "selectstart", n2), pt = true, u && P(document.body, "user-select", "none"));
        }, _onDragOver: function(n2) {
          var o2, i2, r2, t2, a2 = this.el, l2 = n2.target, e2 = this.options, s2 = e2.group, c2 = Bt.active, u2 = at === s2, d2 = e2.sort, h2 = lt || c2, f2 = this, p2 = false;
          if (!Ct) {
            if (void 0 !== n2.preventDefault && n2.cancelable && n2.preventDefault(), l2 = N(l2, e2.draggable, a2, true), T2("dragOver"), Bt.eventCanceled)
              return p2;
            if (q.contains(n2.target) || l2.animated && l2.animatingX && l2.animatingY || f2._ignoreWhileAnimating === l2)
              return O2(false);
            if (wt = false, c2 && !e2.disabled && (u2 ? d2 || (i2 = V !== $) : lt === this || (this.lastPutMode = at.checkPull(this, c2, q, n2)) && s2.checkPut(this, c2, q, n2))) {
              if (r2 = "vertical" === this._getDirection(n2, l2), o2 = k(q), T2("dragOverValid"), Bt.eventCanceled)
                return p2;
              if (i2)
                return V = $, x2(), this._hideClone(), T2("revert"), Bt.eventCanceled || (Q ? $.insertBefore(q, Q) : $.appendChild(q)), O2(true);
              var g2 = Y(a2, e2.draggable);
              if (!g2 || function(t3, e3, n3) {
                n3 = k(Y(n3.el, n3.options.draggable));
                return e3 ? t3.clientX > n3.right + 10 || t3.clientX <= n3.right && t3.clientY > n3.bottom && t3.clientX >= n3.left : t3.clientX > n3.right && t3.clientY > n3.top || t3.clientX <= n3.right && t3.clientY > n3.bottom + 10;
              }(n2, r2, this) && !g2.animated) {
                if (g2 === q)
                  return O2(false);
                if ((l2 = g2 && a2 === n2.target ? g2 : l2) && (w2 = k(l2)), false !== Ft($, a2, q, o2, l2, w2, n2, !!l2))
                  return x2(), g2 && g2.nextSibling ? a2.insertBefore(q, g2.nextSibling) : a2.appendChild(q), V = a2, A2(), O2(true);
              } else if (g2 && function(t3, e3, n3) {
                n3 = k(X(n3.el, 0, n3.options, true));
                return e3 ? t3.clientX < n3.left - 10 || t3.clientY < n3.top && t3.clientX < n3.right : t3.clientY < n3.top - 10 || t3.clientY < n3.bottom && t3.clientX < n3.left;
              }(n2, r2, this)) {
                var m2 = X(a2, 0, e2, true);
                if (m2 === q)
                  return O2(false);
                if (w2 = k(l2 = m2), false !== Ft($, a2, q, o2, l2, w2, n2, false))
                  return x2(), a2.insertBefore(q, m2), V = a2, A2(), O2(true);
              } else if (l2.parentNode === a2) {
                var v2, b2, y2, w2 = k(l2), E2 = q.parentNode !== a2, D2 = (D2 = q.animated && q.toRect || o2, C2 = l2.animated && l2.toRect || w2, S2 = (t2 = r2) ? D2.left : D2.top, s2 = t2 ? D2.right : D2.bottom, g2 = t2 ? D2.width : D2.height, m2 = t2 ? C2.left : C2.top, D2 = t2 ? C2.right : C2.bottom, C2 = t2 ? C2.width : C2.height, !(S2 === m2 || s2 === D2 || S2 + g2 / 2 === m2 + C2 / 2)), S2 = r2 ? "top" : "left", g2 = R(l2, "top", "top") || R(q, "top", "top"), m2 = g2 ? g2.scrollTop : void 0;
                if (gt !== l2 && (b2 = w2[S2], Dt = false, St = !D2 && e2.invertSwap || E2), 0 !== (v2 = function(t3, e3, n3, o3, i3, r3, a3, l3) {
                  var s3 = o3 ? t3.clientY : t3.clientX, c3 = o3 ? n3.height : n3.width, t3 = o3 ? n3.top : n3.left, o3 = o3 ? n3.bottom : n3.right, n3 = false;
                  if (!a3) {
                    if (l3 && vt < c3 * i3) {
                      if (Dt = !Dt && (1 === mt ? t3 + c3 * r3 / 2 < s3 : s3 < o3 - c3 * r3 / 2) ? true : Dt)
                        n3 = true;
                      else if (1 === mt ? s3 < t3 + vt : o3 - vt < s3)
                        return -mt;
                    } else if (t3 + c3 * (1 - i3) / 2 < s3 && s3 < o3 - c3 * (1 - i3) / 2)
                      return function(t4) {
                        return B(q) < B(t4) ? 1 : -1;
                      }(e3);
                  }
                  if ((n3 = n3 || a3) && (s3 < t3 + c3 * r3 / 2 || o3 - c3 * r3 / 2 < s3))
                    return t3 + c3 / 2 < s3 ? 1 : -1;
                  return 0;
                }(n2, l2, w2, r2, D2 ? 1 : e2.swapThreshold, null == e2.invertedSwapThreshold ? e2.swapThreshold : e2.invertedSwapThreshold, St, gt === l2)))
                  for (var _2 = B(q); (y2 = V.children[_2 -= v2]) && ("none" === P(y2, "display") || y2 === Z); )
                    ;
                if (0 === v2 || y2 === l2)
                  return O2(false);
                mt = v2;
                var C2 = (gt = l2).nextElementSibling, E2 = false, D2 = Ft($, a2, q, o2, l2, w2, n2, E2 = 1 === v2);
                if (false !== D2)
                  return 1 !== D2 && -1 !== D2 || (E2 = 1 === D2), Ct = true, setTimeout(Ht, 30), x2(), E2 && !C2 ? a2.appendChild(q) : l2.parentNode.insertBefore(q, E2 ? C2 : l2), g2 && F(g2, 0, m2 - g2.scrollTop), V = q.parentNode, void 0 === b2 || St || (vt = Math.abs(b2 - k(l2)[S2])), A2(), O2(true);
              }
              if (a2.contains(q))
                return O2(false);
            }
            return false;
          }
          function T2(t3, e3) {
            z(t3, f2, M({ evt: n2, isOwner: u2, axis: r2 ? "vertical" : "horizontal", revert: i2, dragRect: o2, targetRect: w2, canSort: d2, fromSortable: h2, target: l2, completed: O2, onMove: function(t4, e4) {
              return Ft($, a2, q, o2, t4, k(t4), n2, e4);
            }, changed: A2 }, e3));
          }
          function x2() {
            T2("dragOverAnimationCapture"), f2.captureAnimationState(), f2 !== h2 && h2.captureAnimationState();
          }
          function O2(t3) {
            return T2("dragOverCompleted", { insertion: t3 }), t3 && (u2 ? c2._hideClone() : c2._showClone(f2), f2 !== h2 && (I(q, (lt || c2).options.ghostClass, false), I(q, e2.ghostClass, true)), lt !== f2 && f2 !== Bt.active ? lt = f2 : f2 === Bt.active && lt && (lt = null), h2 === f2 && (f2._ignoreWhileAnimating = l2), f2.animateAll(function() {
              T2("dragOverAnimationComplete"), f2._ignoreWhileAnimating = null;
            }), f2 !== h2 && (h2.animateAll(), h2._ignoreWhileAnimating = null)), (l2 === q && !q.animated || l2 === a2 && !l2.animated) && (gt = null), e2.dragoverBubble || n2.rootEl || l2 === document || (q.parentNode[j]._isOutsideThisEl(n2.target), t3 || Xt(n2)), !e2.dragoverBubble && n2.stopPropagation && n2.stopPropagation(), p2 = true;
          }
          function A2() {
            ot = B(q), rt = B(q, e2.draggable), U({ sortable: f2, name: "change", toEl: a2, newIndex: ot, newDraggableIndex: rt, originalEvent: n2 });
          }
        }, _ignoreWhileAnimating: null, _offMoveEvents: function() {
          f(document, "mousemove", this._onTouchMove), f(document, "touchmove", this._onTouchMove), f(document, "pointermove", this._onTouchMove), f(document, "dragover", Xt), f(document, "mousemove", Xt), f(document, "touchmove", Xt);
        }, _offUpEvents: function() {
          var t2 = this.el.ownerDocument;
          f(t2, "mouseup", this._onDrop), f(t2, "touchend", this._onDrop), f(t2, "pointerup", this._onDrop), f(t2, "touchcancel", this._onDrop), f(document, "selectstart", this);
        }, _onDrop: function(t2) {
          var e2 = this.el, n2 = this.options;
          ot = B(q), rt = B(q, n2.draggable), z("drop", this, { evt: t2 }), V = q && q.parentNode, ot = B(q), rt = B(q, n2.draggable), Bt.eventCanceled || (Dt = St = yt = false, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Kt(this.cloneId), Kt(this._dragStartId), this.nativeDraggable && (f(document, "drop", this), f(e2, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), u && P(document.body, "user-select", ""), P(q, "transform", ""), t2 && (pt && (t2.cancelable && t2.preventDefault(), n2.dropBubble || t2.stopPropagation()), Z && Z.parentNode && Z.parentNode.removeChild(Z), ($ === V || lt && "clone" !== lt.lastPutMode) && tt && tt.parentNode && tt.parentNode.removeChild(tt), q && (this.nativeDraggable && f(q, "dragend", this), jt(q), q.style["will-change"] = "", pt && !yt && I(q, (lt || this).options.ghostClass, false), I(q, this.options.chosenClass, false), U({ sortable: this, name: "unchoose", toEl: V, newIndex: null, newDraggableIndex: null, originalEvent: t2 }), $ !== V ? (0 <= ot && (U({ rootEl: V, name: "add", toEl: V, fromEl: $, originalEvent: t2 }), U({ sortable: this, name: "remove", toEl: V, originalEvent: t2 }), U({ rootEl: V, name: "sort", toEl: V, fromEl: $, originalEvent: t2 }), U({ sortable: this, name: "sort", toEl: V, originalEvent: t2 })), lt && lt.save()) : ot !== nt && 0 <= ot && (U({ sortable: this, name: "update", toEl: V, originalEvent: t2 }), U({ sortable: this, name: "sort", toEl: V, originalEvent: t2 })), Bt.active && (null != ot && -1 !== ot || (ot = nt, rt = it), U({ sortable: this, name: "end", toEl: V, originalEvent: t2 }), this.save())))), this._nulling();
        }, _nulling: function() {
          z("nulling", this), $ = q = V = Z = Q = tt = J = et = st = ct = pt = ot = rt = nt = it = gt = mt = lt = at = Bt.dragged = Bt.ghost = Bt.clone = Bt.active = null, Tt.forEach(function(t2) {
            t2.checked = true;
          }), Tt.length = ut = dt = 0;
        }, handleEvent: function(t2) {
          switch (t2.type) {
            case "drop":
            case "dragend":
              this._onDrop(t2);
              break;
            case "dragenter":
            case "dragover":
              q && (this._onDragOver(t2), function(t3) {
                t3.dataTransfer && (t3.dataTransfer.dropEffect = "move");
                t3.cancelable && t3.preventDefault();
              }(t2));
              break;
            case "selectstart":
              t2.preventDefault();
          }
        }, toArray: function() {
          for (var t2, e2 = [], n2 = this.el.children, o2 = 0, i2 = n2.length, r2 = this.options; o2 < i2; o2++)
            N(t2 = n2[o2], r2.draggable, this.el, false) && e2.push(t2.getAttribute(r2.dataIdAttr) || function(t3) {
              var e3 = t3.tagName + t3.className + t3.src + t3.href + t3.textContent, n3 = e3.length, o3 = 0;
              for (; n3--; )
                o3 += e3.charCodeAt(n3);
              return o3.toString(36);
            }(t2));
          return e2;
        }, sort: function(t2, e2) {
          var n2 = {}, o2 = this.el;
          this.toArray().forEach(function(t3, e3) {
            e3 = o2.children[e3];
            N(e3, this.options.draggable, o2, false) && (n2[t3] = e3);
          }, this), e2 && this.captureAnimationState(), t2.forEach(function(t3) {
            n2[t3] && (o2.removeChild(n2[t3]), o2.appendChild(n2[t3]));
          }), e2 && this.animateAll();
        }, save: function() {
          var t2 = this.options.store;
          t2 && t2.set && t2.set(this);
        }, closest: function(t2, e2) {
          return N(t2, e2 || this.options.draggable, this.el, false);
        }, option: function(t2, e2) {
          var n2 = this.options;
          if (void 0 === e2)
            return n2[t2];
          var o2 = K.modifyOption(this, t2, e2);
          n2[t2] = void 0 !== o2 ? o2 : e2, "group" === t2 && Pt(n2);
        }, destroy: function() {
          z("destroy", this);
          var t2 = this.el;
          t2[j] = null, f(t2, "mousedown", this._onTapStart), f(t2, "touchstart", this._onTapStart), f(t2, "pointerdown", this._onTapStart), this.nativeDraggable && (f(t2, "dragover", this), f(t2, "dragenter", this)), Array.prototype.forEach.call(t2.querySelectorAll("[draggable]"), function(t3) {
            t3.removeAttribute("draggable");
          }), this._onDrop(), this._disableDelayedDragEvents(), Et.splice(Et.indexOf(this.el), 1), this.el = t2 = null;
        }, _hideClone: function() {
          et || (z("hideClone", this), Bt.eventCanceled || (P(tt, "display", "none"), this.options.removeCloneOnHide && tt.parentNode && tt.parentNode.removeChild(tt), et = true));
        }, _showClone: function(t2) {
          "clone" === t2.lastPutMode ? et && (z("showClone", this), Bt.eventCanceled || (q.parentNode != $ || this.options.group.revertClone ? Q ? $.insertBefore(tt, Q) : $.appendChild(tt) : $.insertBefore(tt, q), this.options.group.revertClone && this.animate(q, tt), P(tt, "display", ""), et = false)) : this._hideClone();
        } }, xt && h(document, "touchmove", function(t2) {
          (Bt.active || yt) && t2.cancelable && t2.preventDefault();
        }), Bt.utils = { on: h, off: f, css: P, find: b, is: function(t2, e2) {
          return !!N(t2, e2, t2, false);
        }, extend: function(t2, e2) {
          if (t2 && e2)
            for (var n2 in e2)
              e2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
          return t2;
        }, throttle: S, closest: N, toggleClass: I, clone: _, index: B, nextTick: Lt, cancelNextTick: Kt, detectDirection: It, getChild: X }, Bt.get = function(t2) {
          return t2[j];
        }, Bt.mount = function() {
          for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++)
            e2[n2] = arguments[n2];
          (e2 = e2[0].constructor === Array ? e2[0] : e2).forEach(function(t3) {
            if (!t3.prototype || !t3.prototype.constructor)
              throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t3));
            t3.utils && (Bt.utils = M(M({}, Bt.utils), t3.utils)), K.mount(t3);
          });
        }, Bt.create = function(t2, e2) {
          return new Bt(t2, e2);
        };
        var Wt, zt, Gt, Ut, qt, Vt, Zt = [], $t = !(Bt.version = "1.15.0");
        function Qt() {
          Zt.forEach(function(t2) {
            clearInterval(t2.pid);
          }), Zt = [];
        }
        function Jt() {
          clearInterval(Vt);
        }
        var te, ee = S(function(n2, t2, e2, o2) {
          if (t2.scroll) {
            var i2, r2 = (n2.touches ? n2.touches[0] : n2).clientX, a2 = (n2.touches ? n2.touches[0] : n2).clientY, l2 = t2.scrollSensitivity, s2 = t2.scrollSpeed, c2 = O(), u2 = false;
            zt !== e2 && (zt = e2, Qt(), Wt = t2.scroll, i2 = t2.scrollFn, true === Wt && (Wt = A(e2, true)));
            var d2 = 0, h2 = Wt;
            do {
              var f2 = h2, p2 = k(f2), g2 = p2.top, m2 = p2.bottom, v2 = p2.left, b2 = p2.right, y2 = p2.width, w2 = p2.height, E2 = void 0, D2 = void 0, S2 = f2.scrollWidth, _2 = f2.scrollHeight, C2 = P(f2), T2 = f2.scrollLeft, p2 = f2.scrollTop, D2 = f2 === c2 ? (E2 = y2 < S2 && ("auto" === C2.overflowX || "scroll" === C2.overflowX || "visible" === C2.overflowX), w2 < _2 && ("auto" === C2.overflowY || "scroll" === C2.overflowY || "visible" === C2.overflowY)) : (E2 = y2 < S2 && ("auto" === C2.overflowX || "scroll" === C2.overflowX), w2 < _2 && ("auto" === C2.overflowY || "scroll" === C2.overflowY)), T2 = E2 && (Math.abs(b2 - r2) <= l2 && T2 + y2 < S2) - (Math.abs(v2 - r2) <= l2 && !!T2), p2 = D2 && (Math.abs(m2 - a2) <= l2 && p2 + w2 < _2) - (Math.abs(g2 - a2) <= l2 && !!p2);
              if (!Zt[d2])
                for (var x2 = 0; x2 <= d2; x2++)
                  Zt[x2] || (Zt[x2] = {});
              Zt[d2].vx == T2 && Zt[d2].vy == p2 && Zt[d2].el === f2 || (Zt[d2].el = f2, Zt[d2].vx = T2, Zt[d2].vy = p2, clearInterval(Zt[d2].pid), 0 == T2 && 0 == p2 || (u2 = true, Zt[d2].pid = setInterval(function() {
                o2 && 0 === this.layer && Bt.active._onTouchMove(qt);
                var t3 = Zt[this.layer].vy ? Zt[this.layer].vy * s2 : 0, e3 = Zt[this.layer].vx ? Zt[this.layer].vx * s2 : 0;
                "function" == typeof i2 && "continue" !== i2.call(Bt.dragged.parentNode[j], e3, t3, n2, qt, Zt[this.layer].el) || F(Zt[this.layer].el, e3, t3);
              }.bind({ layer: d2 }), 24))), d2++;
            } while (t2.bubbleScroll && h2 !== c2 && (h2 = A(h2, false)));
            $t = u2;
          }
        }, 30), c = function(t2) {
          var e2 = t2.originalEvent, n2 = t2.putSortable, o2 = t2.dragEl, i2 = t2.activeSortable, r2 = t2.dispatchSortableEvent, a2 = t2.hideGhostForTarget, t2 = t2.unhideGhostForTarget;
          e2 && (i2 = n2 || i2, a2(), e2 = e2.changedTouches && e2.changedTouches.length ? e2.changedTouches[0] : e2, e2 = document.elementFromPoint(e2.clientX, e2.clientY), t2(), i2 && !i2.el.contains(e2) && (r2("spill"), this.onSpill({ dragEl: o2, putSortable: n2 })));
        };
        function ne() {
        }
        function oe() {
        }
        ne.prototype = { startIndex: null, dragStart: function(t2) {
          t2 = t2.oldDraggableIndex;
          this.startIndex = t2;
        }, onSpill: function(t2) {
          var e2 = t2.dragEl, n2 = t2.putSortable;
          this.sortable.captureAnimationState(), n2 && n2.captureAnimationState();
          t2 = X(this.sortable.el, this.startIndex, this.options);
          t2 ? this.sortable.el.insertBefore(e2, t2) : this.sortable.el.appendChild(e2), this.sortable.animateAll(), n2 && n2.animateAll();
        }, drop: c }, a(ne, { pluginName: "revertOnSpill" }), oe.prototype = { onSpill: function(t2) {
          var e2 = t2.dragEl, t2 = t2.putSortable || this.sortable;
          t2.captureAnimationState(), e2.parentNode && e2.parentNode.removeChild(e2), t2.animateAll();
        }, drop: c }, a(oe, { pluginName: "removeOnSpill" });
        var ie, re, ae, le, se, ce = [], ue = [], de = false, he = false, fe = false;
        function pe(n2, o2) {
          ue.forEach(function(t2, e2) {
            e2 = o2.children[t2.sortableIndex + (n2 ? Number(e2) : 0)];
            e2 ? o2.insertBefore(t2, e2) : o2.appendChild(t2);
          });
        }
        function ge() {
          ce.forEach(function(t2) {
            t2 !== ae && t2.parentNode && t2.parentNode.removeChild(t2);
          });
        }
        return Bt.mount(new function() {
          function t2() {
            for (var t3 in this.defaults = { scroll: true, forceAutoScrollFallback: false, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: true }, this)
              "_" === t3.charAt(0) && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
          }
          return t2.prototype = { dragStarted: function(t3) {
            t3 = t3.originalEvent;
            this.sortable.nativeDraggable ? h(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? h(document, "pointermove", this._handleFallbackAutoScroll) : t3.touches ? h(document, "touchmove", this._handleFallbackAutoScroll) : h(document, "mousemove", this._handleFallbackAutoScroll);
          }, dragOverCompleted: function(t3) {
            t3 = t3.originalEvent;
            this.options.dragOverBubble || t3.rootEl || this._handleAutoScroll(t3);
          }, drop: function() {
            this.sortable.nativeDraggable ? f(document, "dragover", this._handleAutoScroll) : (f(document, "pointermove", this._handleFallbackAutoScroll), f(document, "touchmove", this._handleFallbackAutoScroll), f(document, "mousemove", this._handleFallbackAutoScroll)), Jt(), Qt(), clearTimeout(g), g = void 0;
          }, nulling: function() {
            qt = zt = Wt = $t = Vt = Gt = Ut = null, Zt.length = 0;
          }, _handleFallbackAutoScroll: function(t3) {
            this._handleAutoScroll(t3, true);
          }, _handleAutoScroll: function(e2, n2) {
            var o2, i2 = this, r2 = (e2.touches ? e2.touches[0] : e2).clientX, a2 = (e2.touches ? e2.touches[0] : e2).clientY, t3 = document.elementFromPoint(r2, a2);
            qt = e2, n2 || this.options.forceAutoScrollFallback || w || y || u ? (ee(e2, this.options, t3, n2), o2 = A(t3, true), !$t || Vt && r2 === Gt && a2 === Ut || (Vt && Jt(), Vt = setInterval(function() {
              var t4 = A(document.elementFromPoint(r2, a2), true);
              t4 !== o2 && (o2 = t4, Qt()), ee(e2, i2.options, t4, n2);
            }, 10), Gt = r2, Ut = a2)) : this.options.bubbleScroll && A(t3, true) !== O() ? ee(e2, this.options, A(t3, false), false) : Qt();
          } }, a(t2, { pluginName: "scroll", initializeByDefault: true });
        }()), Bt.mount(oe, ne), Bt.mount(new function() {
          function t2() {
            this.defaults = { swapClass: "sortable-swap-highlight" };
          }
          return t2.prototype = { dragStart: function(t3) {
            t3 = t3.dragEl;
            te = t3;
          }, dragOverValid: function(t3) {
            var e2 = t3.completed, n2 = t3.target, o2 = t3.onMove, i2 = t3.activeSortable, r2 = t3.changed, a2 = t3.cancel;
            i2.options.swap && (t3 = this.sortable.el, i2 = this.options, n2 && n2 !== t3 && (t3 = te, te = false !== o2(n2) ? (I(n2, i2.swapClass, true), n2) : null, t3 && t3 !== te && I(t3, i2.swapClass, false)), r2(), e2(true), a2());
          }, drop: function(t3) {
            var e2, n2, o2 = t3.activeSortable, i2 = t3.putSortable, r2 = t3.dragEl, a2 = i2 || this.sortable, l2 = this.options;
            te && I(te, l2.swapClass, false), te && (l2.swap || i2 && i2.options.swap) && r2 !== te && (a2.captureAnimationState(), a2 !== o2 && o2.captureAnimationState(), n2 = te, t3 = (e2 = r2).parentNode, l2 = n2.parentNode, t3 && l2 && !t3.isEqualNode(n2) && !l2.isEqualNode(e2) && (i2 = B(e2), r2 = B(n2), t3.isEqualNode(l2) && i2 < r2 && r2++, t3.insertBefore(n2, t3.children[i2]), l2.insertBefore(e2, l2.children[r2])), a2.animateAll(), a2 !== o2 && o2.animateAll());
          }, nulling: function() {
            te = null;
          } }, a(t2, { pluginName: "swap", eventProperties: function() {
            return { swapItem: te };
          } });
        }()), Bt.mount(new function() {
          function t2(o2) {
            for (var t3 in this)
              "_" === t3.charAt(0) && "function" == typeof this[t3] && (this[t3] = this[t3].bind(this));
            o2.options.avoidImplicitDeselect || (o2.options.supportPointer ? h(document, "pointerup", this._deselectMultiDrag) : (h(document, "mouseup", this._deselectMultiDrag), h(document, "touchend", this._deselectMultiDrag))), h(document, "keydown", this._checkKeyDown), h(document, "keyup", this._checkKeyUp), this.defaults = { selectedClass: "sortable-selected", multiDragKey: null, avoidImplicitDeselect: false, setData: function(t4, e2) {
              var n2 = "";
              ce.length && re === o2 ? ce.forEach(function(t5, e3) {
                n2 += (e3 ? ", " : "") + t5.textContent;
              }) : n2 = e2.textContent, t4.setData("Text", n2);
            } };
          }
          return t2.prototype = { multiDragKeyDown: false, isMultiDrag: false, delayStartGlobal: function(t3) {
            t3 = t3.dragEl;
            ae = t3;
          }, delayEnded: function() {
            this.isMultiDrag = ~ce.indexOf(ae);
          }, setupClone: function(t3) {
            var e2 = t3.sortable, t3 = t3.cancel;
            if (this.isMultiDrag) {
              for (var n2 = 0; n2 < ce.length; n2++)
                ue.push(_(ce[n2])), ue[n2].sortableIndex = ce[n2].sortableIndex, ue[n2].draggable = false, ue[n2].style["will-change"] = "", I(ue[n2], this.options.selectedClass, false), ce[n2] === ae && I(ue[n2], this.options.chosenClass, false);
              e2._hideClone(), t3();
            }
          }, clone: function(t3) {
            var e2 = t3.sortable, n2 = t3.rootEl, o2 = t3.dispatchSortableEvent, t3 = t3.cancel;
            this.isMultiDrag && (this.options.removeCloneOnHide || ce.length && re === e2 && (pe(true, n2), o2("clone"), t3()));
          }, showClone: function(t3) {
            var e2 = t3.cloneNowShown, n2 = t3.rootEl, t3 = t3.cancel;
            this.isMultiDrag && (pe(false, n2), ue.forEach(function(t4) {
              P(t4, "display", "");
            }), e2(), se = false, t3());
          }, hideClone: function(t3) {
            var e2 = this, n2 = (t3.sortable, t3.cloneNowHidden), t3 = t3.cancel;
            this.isMultiDrag && (ue.forEach(function(t4) {
              P(t4, "display", "none"), e2.options.removeCloneOnHide && t4.parentNode && t4.parentNode.removeChild(t4);
            }), n2(), se = true, t3());
          }, dragStartGlobal: function(t3) {
            t3.sortable;
            !this.isMultiDrag && re && re.multiDrag._deselectMultiDrag(), ce.forEach(function(t4) {
              t4.sortableIndex = B(t4);
            }), ce = ce.sort(function(t4, e2) {
              return t4.sortableIndex - e2.sortableIndex;
            }), fe = true;
          }, dragStarted: function(t3) {
            var e2, n2 = this, t3 = t3.sortable;
            this.isMultiDrag && (this.options.sort && (t3.captureAnimationState(), this.options.animation && (ce.forEach(function(t4) {
              t4 !== ae && P(t4, "position", "absolute");
            }), e2 = k(ae, false, true, true), ce.forEach(function(t4) {
              t4 !== ae && C(t4, e2);
            }), de = he = true)), t3.animateAll(function() {
              de = he = false, n2.options.animation && ce.forEach(function(t4) {
                T(t4);
              }), n2.options.sort && ge();
            }));
          }, dragOver: function(t3) {
            var e2 = t3.target, n2 = t3.completed, t3 = t3.cancel;
            he && ~ce.indexOf(e2) && (n2(false), t3());
          }, revert: function(t3) {
            var n2, o2, e2 = t3.fromSortable, i2 = t3.rootEl, r2 = t3.sortable, a2 = t3.dragRect;
            1 < ce.length && (ce.forEach(function(t4) {
              r2.addAnimationState({ target: t4, rect: he ? k(t4) : a2 }), T(t4), t4.fromRect = a2, e2.removeAnimationState(t4);
            }), he = false, n2 = !this.options.removeCloneOnHide, o2 = i2, ce.forEach(function(t4, e3) {
              e3 = o2.children[t4.sortableIndex + (n2 ? Number(e3) : 0)];
              e3 ? o2.insertBefore(t4, e3) : o2.appendChild(t4);
            }));
          }, dragOverCompleted: function(t3) {
            var e2, n2 = t3.sortable, o2 = t3.isOwner, i2 = t3.insertion, r2 = t3.activeSortable, a2 = t3.parentEl, l2 = t3.putSortable, t3 = this.options;
            i2 && (o2 && r2._hideClone(), de = false, t3.animation && 1 < ce.length && (he || !o2 && !r2.options.sort && !l2) && (e2 = k(ae, false, true, true), ce.forEach(function(t4) {
              t4 !== ae && (C(t4, e2), a2.appendChild(t4));
            }), he = true), o2 || (he || ge(), 1 < ce.length ? (o2 = se, r2._showClone(n2), r2.options.animation && !se && o2 && ue.forEach(function(t4) {
              r2.addAnimationState({ target: t4, rect: le }), t4.fromRect = le, t4.thisAnimationDuration = null;
            })) : r2._showClone(n2)));
          }, dragOverAnimationCapture: function(t3) {
            var e2 = t3.dragRect, n2 = t3.isOwner, t3 = t3.activeSortable;
            ce.forEach(function(t4) {
              t4.thisAnimationDuration = null;
            }), t3.options.animation && !n2 && t3.multiDrag.isMultiDrag && (le = a({}, e2), e2 = v(ae, true), le.top -= e2.f, le.left -= e2.e);
          }, dragOverAnimationComplete: function() {
            he && (he = false, ge());
          }, drop: function(t3) {
            var e2 = t3.originalEvent, n2 = t3.rootEl, o2 = t3.parentEl, i2 = t3.sortable, r2 = t3.dispatchSortableEvent, a2 = t3.oldIndex, l2 = t3.putSortable, s2 = l2 || this.sortable;
            if (e2) {
              var c2, u2, d2, h2 = this.options, f2 = o2.children;
              if (!fe)
                if (h2.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), I(ae, h2.selectedClass, !~ce.indexOf(ae)), ~ce.indexOf(ae))
                  ce.splice(ce.indexOf(ae), 1), ie = null, W({ sortable: i2, rootEl: n2, name: "deselect", targetEl: ae, originalEvent: e2 });
                else {
                  if (ce.push(ae), W({ sortable: i2, rootEl: n2, name: "select", targetEl: ae, originalEvent: e2 }), e2.shiftKey && ie && i2.el.contains(ie)) {
                    var p2 = B(ie), t3 = B(ae);
                    if (~p2 && ~t3 && p2 !== t3)
                      for (var g2, m2 = p2 < t3 ? (g2 = p2, t3) : (g2 = t3, p2 + 1); g2 < m2; g2++)
                        ~ce.indexOf(f2[g2]) || (I(f2[g2], h2.selectedClass, true), ce.push(f2[g2]), W({ sortable: i2, rootEl: n2, name: "select", targetEl: f2[g2], originalEvent: e2 }));
                  } else
                    ie = ae;
                  re = s2;
                }
              fe && this.isMultiDrag && (he = false, (o2[j].options.sort || o2 !== n2) && 1 < ce.length && (c2 = k(ae), u2 = B(ae, ":not(." + this.options.selectedClass + ")"), !de && h2.animation && (ae.thisAnimationDuration = null), s2.captureAnimationState(), de || (h2.animation && (ae.fromRect = c2, ce.forEach(function(t4) {
                var e3;
                t4.thisAnimationDuration = null, t4 !== ae && (e3 = he ? k(t4) : c2, t4.fromRect = e3, s2.addAnimationState({ target: t4, rect: e3 }));
              })), ge(), ce.forEach(function(t4) {
                f2[u2] ? o2.insertBefore(t4, f2[u2]) : o2.appendChild(t4), u2++;
              }), a2 === B(ae) && (d2 = false, ce.forEach(function(t4) {
                t4.sortableIndex !== B(t4) && (d2 = true);
              }), d2 && r2("update"))), ce.forEach(function(t4) {
                T(t4);
              }), s2.animateAll()), re = s2), (n2 === o2 || l2 && "clone" !== l2.lastPutMode) && ue.forEach(function(t4) {
                t4.parentNode && t4.parentNode.removeChild(t4);
              });
            }
          }, nullingGlobal: function() {
            this.isMultiDrag = fe = false, ue.length = 0;
          }, destroyGlobal: function() {
            this._deselectMultiDrag(), f(document, "pointerup", this._deselectMultiDrag), f(document, "mouseup", this._deselectMultiDrag), f(document, "touchend", this._deselectMultiDrag), f(document, "keydown", this._checkKeyDown), f(document, "keyup", this._checkKeyUp);
          }, _deselectMultiDrag: function(t3) {
            if (!(void 0 !== fe && fe || re !== this.sortable || t3 && N(t3.target, this.options.draggable, this.sortable.el, false) || t3 && 0 !== t3.button))
              for (; ce.length; ) {
                var e2 = ce[0];
                I(e2, this.options.selectedClass, false), ce.shift(), W({ sortable: this.sortable, rootEl: this.sortable.el, name: "deselect", targetEl: e2, originalEvent: t3 });
              }
          }, _checkKeyDown: function(t3) {
            t3.key === this.options.multiDragKey && (this.multiDragKeyDown = true);
          }, _checkKeyUp: function(t3) {
            t3.key === this.options.multiDragKey && (this.multiDragKeyDown = false);
          } }, a(t2, { pluginName: "multiDrag", utils: { select: function(t3) {
            var e2 = t3.parentNode[j];
            e2 && e2.options.multiDrag && !~ce.indexOf(t3) && (re && re !== e2 && (re.multiDrag._deselectMultiDrag(), re = e2), I(t3, e2.options.selectedClass, true), ce.push(t3));
          }, deselect: function(t3) {
            var e2 = t3.parentNode[j], n2 = ce.indexOf(t3);
            e2 && e2.options.multiDrag && ~n2 && (I(t3, e2.options.selectedClass, false), ce.splice(n2, 1));
          } }, eventProperties: function() {
            var n2 = this, o2 = [], i2 = [];
            return ce.forEach(function(t3) {
              var e2;
              o2.push({ multiDragElement: t3, index: t3.sortableIndex }), e2 = he && t3 !== ae ? -1 : he ? B(t3, ":not(." + n2.options.selectedClass + ")") : B(t3), i2.push({ multiDragElement: t3, index: e2 });
            }), { items: r(ce), clones: [].concat(ue), oldIndicies: o2, newIndicies: i2 };
          }, optionListeners: { multiDragKey: function(t3) {
            return "ctrl" === (t3 = t3.toLowerCase()) ? t3 = "Control" : 1 < t3.length && (t3 = t3.charAt(0).toUpperCase() + t3.substr(1)), t3;
          } } });
        }()), Bt;
      });
    }
  });

  // node_modules/handlebars/dist/handlebars.runtime.js
  var require_handlebars_runtime = __commonJS({
    "node_modules/handlebars/dist/handlebars.runtime.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["Handlebars"] = factory();
        else
          root["Handlebars"] = factory();
      })(exports, function() {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId])
                return installedModules[moduleId].exports;
              var module2 = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: false
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.loaded = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.p = "";
            return __webpack_require__(0);
          }([
            /* 0 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireWildcard = __webpack_require__(1)["default"];
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              var _handlebarsBase = __webpack_require__(3);
              var base = _interopRequireWildcard(_handlebarsBase);
              var _handlebarsSafeString = __webpack_require__(36);
              var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
              var _handlebarsException = __webpack_require__(5);
              var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
              var _handlebarsUtils = __webpack_require__(4);
              var Utils = _interopRequireWildcard(_handlebarsUtils);
              var _handlebarsRuntime = __webpack_require__(37);
              var runtime = _interopRequireWildcard(_handlebarsRuntime);
              var _handlebarsNoConflict = __webpack_require__(43);
              var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
              function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2["default"];
                hb.Exception = _handlebarsException2["default"];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                  return runtime.template(spec, hb);
                };
                return hb;
              }
              var inst = create();
              inst.create = create;
              _handlebarsNoConflict2["default"](inst);
              inst["default"] = inst;
              exports2["default"] = inst;
              module2.exports = exports2["default"];
            },
            /* 1 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2["default"] = function(obj) {
                if (obj && obj.__esModule) {
                  return obj;
                } else {
                  var newObj = {};
                  if (obj != null) {
                    for (var key in obj) {
                      if (Object.prototype.hasOwnProperty.call(obj, key))
                        newObj[key] = obj[key];
                    }
                  }
                  newObj["default"] = obj;
                  return newObj;
                }
              };
              exports2.__esModule = true;
            },
            /* 2 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                  "default": obj
                };
              };
              exports2.__esModule = true;
            },
            /* 3 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              exports2.HandlebarsEnvironment = HandlebarsEnvironment;
              var _utils = __webpack_require__(4);
              var _exception = __webpack_require__(5);
              var _exception2 = _interopRequireDefault(_exception);
              var _helpers = __webpack_require__(9);
              var _decorators = __webpack_require__(29);
              var _logger = __webpack_require__(31);
              var _logger2 = _interopRequireDefault(_logger);
              var _internalProtoAccess = __webpack_require__(32);
              var VERSION = "4.7.7";
              exports2.VERSION = VERSION;
              var COMPILER_REVISION = 8;
              exports2.COMPILER_REVISION = COMPILER_REVISION;
              var LAST_COMPATIBLE_COMPILER_REVISION = 7;
              exports2.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
              var REVISION_CHANGES = {
                1: "<= 1.0.rc.2",
                // 1.0.rc.2 is actually rev2 but doesn't report it
                2: "== 1.0.0-rc.3",
                3: "== 1.0.0-rc.4",
                4: "== 1.x.x",
                5: "== 2.0.0-alpha.x",
                6: ">= 2.0.0-beta.1",
                7: ">= 4.0.0 <4.3.0",
                8: ">= 4.3.0"
              };
              exports2.REVISION_CHANGES = REVISION_CHANGES;
              var objectType = "[object Object]";
              function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
              }
              HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2["default"],
                log: _logger2["default"].log,
                registerHelper: function registerHelper(name, fn) {
                  if (_utils.toString.call(name) === objectType) {
                    if (fn) {
                      throw new _exception2["default"]("Arg not supported with multiple helpers");
                    }
                    _utils.extend(this.helpers, name);
                  } else {
                    this.helpers[name] = fn;
                  }
                },
                unregisterHelper: function unregisterHelper(name) {
                  delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                  if (_utils.toString.call(name) === objectType) {
                    _utils.extend(this.partials, name);
                  } else {
                    if (typeof partial === "undefined") {
                      throw new _exception2["default"]('Attempting to register a partial called "' + name + '" as undefined');
                    }
                    this.partials[name] = partial;
                  }
                },
                unregisterPartial: function unregisterPartial(name) {
                  delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                  if (_utils.toString.call(name) === objectType) {
                    if (fn) {
                      throw new _exception2["default"]("Arg not supported with multiple decorators");
                    }
                    _utils.extend(this.decorators, name);
                  } else {
                    this.decorators[name] = fn;
                  }
                },
                unregisterDecorator: function unregisterDecorator(name) {
                  delete this.decorators[name];
                },
                /**
                 * Reset the memory of illegal property accesses that have already been logged.
                 * @deprecated should only be used in handlebars test-cases
                 */
                resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                  _internalProtoAccess.resetLoggedProperties();
                }
              };
              var log = _logger2["default"].log;
              exports2.log = log;
              exports2.createFrame = _utils.createFrame;
              exports2.logger = _logger2["default"];
            },
            /* 4 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2.__esModule = true;
              exports2.extend = extend;
              exports2.indexOf = indexOf;
              exports2.escapeExpression = escapeExpression;
              exports2.isEmpty = isEmpty;
              exports2.createFrame = createFrame;
              exports2.blockParams = blockParams;
              exports2.appendContextPath = appendContextPath;
              var escape = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;",
                "=": "&#x3D;"
              };
              var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
              function escapeChar(chr) {
                return escape[chr];
              }
              function extend(obj) {
                for (var i = 1; i < arguments.length; i++) {
                  for (var key in arguments[i]) {
                    if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                      obj[key] = arguments[i][key];
                    }
                  }
                }
                return obj;
              }
              var toString = Object.prototype.toString;
              exports2.toString = toString;
              var isFunction = function isFunction2(value) {
                return typeof value === "function";
              };
              if (isFunction(/x/)) {
                exports2.isFunction = isFunction = function(value) {
                  return typeof value === "function" && toString.call(value) === "[object Function]";
                };
              }
              exports2.isFunction = isFunction;
              var isArray = Array.isArray || function(value) {
                return value && typeof value === "object" ? toString.call(value) === "[object Array]" : false;
              };
              exports2.isArray = isArray;
              function indexOf(array, value) {
                for (var i = 0, len = array.length; i < len; i++) {
                  if (array[i] === value) {
                    return i;
                  }
                }
                return -1;
              }
              function escapeExpression(string) {
                if (typeof string !== "string") {
                  if (string && string.toHTML) {
                    return string.toHTML();
                  } else if (string == null) {
                    return "";
                  } else if (!string) {
                    return string + "";
                  }
                  string = "" + string;
                }
                if (!possible.test(string)) {
                  return string;
                }
                return string.replace(badChars, escapeChar);
              }
              function isEmpty(value) {
                if (!value && value !== 0) {
                  return true;
                } else if (isArray(value) && value.length === 0) {
                  return true;
                } else {
                  return false;
                }
              }
              function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
              }
              function blockParams(params, ids) {
                params.path = ids;
                return params;
              }
              function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + "." : "") + id;
              }
            },
            /* 5 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _Object$defineProperty = __webpack_require__(6)["default"];
              exports2.__esModule = true;
              var errorProps = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
              function Exception(message, node) {
                var loc = node && node.loc, line = void 0, endLineNumber = void 0, column = void 0, endColumn = void 0;
                if (loc) {
                  line = loc.start.line;
                  endLineNumber = loc.end.line;
                  column = loc.start.column;
                  endColumn = loc.end.column;
                  message += " - " + line + ":" + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                for (var idx = 0; idx < errorProps.length; idx++) {
                  this[errorProps[idx]] = tmp[errorProps[idx]];
                }
                if (Error.captureStackTrace) {
                  Error.captureStackTrace(this, Exception);
                }
                try {
                  if (loc) {
                    this.lineNumber = line;
                    this.endLineNumber = endLineNumber;
                    if (_Object$defineProperty) {
                      Object.defineProperty(this, "column", {
                        value: column,
                        enumerable: true
                      });
                      Object.defineProperty(this, "endColumn", {
                        value: endColumn,
                        enumerable: true
                      });
                    } else {
                      this.column = column;
                      this.endColumn = endColumn;
                    }
                  }
                } catch (nop) {
                }
              }
              Exception.prototype = new Error();
              exports2["default"] = Exception;
              module2.exports = exports2["default"];
            },
            /* 6 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(7), __esModule: true };
            },
            /* 7 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $ = __webpack_require__(8);
              module2.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
              };
            },
            /* 8 */
            /***/
            function(module2, exports2) {
              var $Object = Object;
              module2.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: {}.propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
              };
            },
            /* 9 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              exports2.registerDefaultHelpers = registerDefaultHelpers;
              exports2.moveHelperToHooks = moveHelperToHooks;
              var _helpersBlockHelperMissing = __webpack_require__(10);
              var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
              var _helpersEach = __webpack_require__(11);
              var _helpersEach2 = _interopRequireDefault(_helpersEach);
              var _helpersHelperMissing = __webpack_require__(24);
              var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
              var _helpersIf = __webpack_require__(25);
              var _helpersIf2 = _interopRequireDefault(_helpersIf);
              var _helpersLog = __webpack_require__(26);
              var _helpersLog2 = _interopRequireDefault(_helpersLog);
              var _helpersLookup = __webpack_require__(27);
              var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
              var _helpersWith = __webpack_require__(28);
              var _helpersWith2 = _interopRequireDefault(_helpersWith);
              function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2["default"](instance);
                _helpersEach2["default"](instance);
                _helpersHelperMissing2["default"](instance);
                _helpersIf2["default"](instance);
                _helpersLog2["default"](instance);
                _helpersLookup2["default"](instance);
                _helpersWith2["default"](instance);
              }
              function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                  instance.hooks[helperName] = instance.helpers[helperName];
                  if (!keepHelper) {
                    delete instance.helpers[helperName];
                  }
                }
              }
            },
            /* 10 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _utils = __webpack_require__(4);
              exports2["default"] = function(instance) {
                instance.registerHelper("blockHelperMissing", function(context, options) {
                  var inverse = options.inverse, fn = options.fn;
                  if (context === true) {
                    return fn(this);
                  } else if (context === false || context == null) {
                    return inverse(this);
                  } else if (_utils.isArray(context)) {
                    if (context.length > 0) {
                      if (options.ids) {
                        options.ids = [options.name];
                      }
                      return instance.helpers.each(context, options);
                    } else {
                      return inverse(this);
                    }
                  } else {
                    if (options.data && options.ids) {
                      var data = _utils.createFrame(options.data);
                      data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                      options = { data };
                    }
                    return fn(context, options);
                  }
                });
              };
              module2.exports = exports2["default"];
            },
            /* 11 */
            /***/
            function(module2, exports2, __webpack_require__) {
              (function(global) {
                "use strict";
                var _Object$keys = __webpack_require__(12)["default"];
                var _interopRequireDefault = __webpack_require__(2)["default"];
                exports2.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports2["default"] = function(instance) {
                  instance.registerHelper("each", function(context, options) {
                    if (!options) {
                      throw new _exception2["default"]("Must pass iterator to #each");
                    }
                    var fn = options.fn, inverse = options.inverse, i = 0, ret = "", data = void 0, contextPath = void 0;
                    if (options.data && options.ids) {
                      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + ".";
                    }
                    if (_utils.isFunction(context)) {
                      context = context.call(this);
                    }
                    if (options.data) {
                      data = _utils.createFrame(options.data);
                    }
                    function execIteration(field, index, last) {
                      if (data) {
                        data.key = field;
                        data.index = index;
                        data.first = index === 0;
                        data.last = !!last;
                        if (contextPath) {
                          data.contextPath = contextPath + field;
                        }
                      }
                      ret = ret + fn(context[field], {
                        data,
                        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
                      });
                    }
                    if (context && typeof context === "object") {
                      if (_utils.isArray(context)) {
                        for (var j = context.length; i < j; i++) {
                          if (i in context) {
                            execIteration(i, i, i === context.length - 1);
                          }
                        }
                      } else if (global.Symbol && context[global.Symbol.iterator]) {
                        var newContext = [];
                        var iterator = context[global.Symbol.iterator]();
                        for (var it = iterator.next(); !it.done; it = iterator.next()) {
                          newContext.push(it.value);
                        }
                        context = newContext;
                        for (var j = context.length; i < j; i++) {
                          execIteration(i, i, i === context.length - 1);
                        }
                      } else {
                        (function() {
                          var priorKey = void 0;
                          _Object$keys(context).forEach(function(key) {
                            if (priorKey !== void 0) {
                              execIteration(priorKey, i - 1);
                            }
                            priorKey = key;
                            i++;
                          });
                          if (priorKey !== void 0) {
                            execIteration(priorKey, i - 1, true);
                          }
                        })();
                      }
                    }
                    if (i === 0) {
                      ret = inverse(this);
                    }
                    return ret;
                  });
                };
                module2.exports = exports2["default"];
              }).call(exports2, function() {
                return this;
              }());
            },
            /* 12 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(13), __esModule: true };
            },
            /* 13 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(14);
              module2.exports = __webpack_require__(20).Object.keys;
            },
            /* 14 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var toObject = __webpack_require__(15);
              __webpack_require__(17)("keys", function($keys) {
                return function keys(it) {
                  return $keys(toObject(it));
                };
              });
            },
            /* 15 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var defined = __webpack_require__(16);
              module2.exports = function(it) {
                return Object(defined(it));
              };
            },
            /* 16 */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (it == void 0)
                  throw TypeError("Can't call method on  " + it);
                return it;
              };
            },
            /* 17 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
              module2.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                  fn(1);
                }), "Object", exp);
              };
            },
            /* 18 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = "prototype";
              var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports3 = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL)
                  source = name;
                for (key in source) {
                  own = !IS_FORCED && target && key in target;
                  if (own && key in exports3)
                    continue;
                  out = own ? target[key] : source[key];
                  exports3[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                    var F = function(param) {
                      return this instanceof C ? new C(param) : C(param);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                  }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
                  if (IS_PROTO)
                    (exports3[PROTOTYPE] || (exports3[PROTOTYPE] = {}))[key] = out;
                }
              };
              $export.F = 1;
              $export.G = 2;
              $export.S = 4;
              $export.P = 8;
              $export.B = 16;
              $export.W = 32;
              module2.exports = $export;
            },
            /* 19 */
            /***/
            function(module2, exports2) {
              var global = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
              if (typeof __g == "number")
                __g = global;
            },
            /* 20 */
            /***/
            function(module2, exports2) {
              var core = module2.exports = { version: "1.2.6" };
              if (typeof __e == "number")
                __e = core;
            },
            /* 21 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var aFunction = __webpack_require__(22);
              module2.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === void 0)
                  return fn;
                switch (length) {
                  case 1:
                    return function(a) {
                      return fn.call(that, a);
                    };
                  case 2:
                    return function(a, b) {
                      return fn.call(that, a, b);
                    };
                  case 3:
                    return function(a, b, c) {
                      return fn.call(that, a, b, c);
                    };
                }
                return function() {
                  return fn.apply(that, arguments);
                };
              };
            },
            /* 22 */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                if (typeof it != "function")
                  throw TypeError(it + " is not a function!");
                return it;
              };
            },
            /* 23 */
            /***/
            function(module2, exports2) {
              module2.exports = function(exec) {
                try {
                  return !!exec();
                } catch (e) {
                  return true;
                }
              };
            },
            /* 24 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              var _exception = __webpack_require__(5);
              var _exception2 = _interopRequireDefault(_exception);
              exports2["default"] = function(instance) {
                instance.registerHelper("helperMissing", function() {
                  if (arguments.length === 1) {
                    return void 0;
                  } else {
                    throw new _exception2["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                  }
                });
              };
              module2.exports = exports2["default"];
            },
            /* 25 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              var _utils = __webpack_require__(4);
              var _exception = __webpack_require__(5);
              var _exception2 = _interopRequireDefault(_exception);
              exports2["default"] = function(instance) {
                instance.registerHelper("if", function(conditional, options) {
                  if (arguments.length != 2) {
                    throw new _exception2["default"]("#if requires exactly one argument");
                  }
                  if (_utils.isFunction(conditional)) {
                    conditional = conditional.call(this);
                  }
                  if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
                    return options.inverse(this);
                  } else {
                    return options.fn(this);
                  }
                });
                instance.registerHelper("unless", function(conditional, options) {
                  if (arguments.length != 2) {
                    throw new _exception2["default"]("#unless requires exactly one argument");
                  }
                  return instance.helpers["if"].call(this, conditional, {
                    fn: options.inverse,
                    inverse: options.fn,
                    hash: options.hash
                  });
                });
              };
              module2.exports = exports2["default"];
            },
            /* 26 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2.__esModule = true;
              exports2["default"] = function(instance) {
                instance.registerHelper("log", function() {
                  var args = [void 0], options = arguments[arguments.length - 1];
                  for (var i = 0; i < arguments.length - 1; i++) {
                    args.push(arguments[i]);
                  }
                  var level = 1;
                  if (options.hash.level != null) {
                    level = options.hash.level;
                  } else if (options.data && options.data.level != null) {
                    level = options.data.level;
                  }
                  args[0] = level;
                  instance.log.apply(instance, args);
                });
              };
              module2.exports = exports2["default"];
            },
            /* 27 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2.__esModule = true;
              exports2["default"] = function(instance) {
                instance.registerHelper("lookup", function(obj, field, options) {
                  if (!obj) {
                    return obj;
                  }
                  return options.lookupProperty(obj, field);
                });
              };
              module2.exports = exports2["default"];
            },
            /* 28 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              var _utils = __webpack_require__(4);
              var _exception = __webpack_require__(5);
              var _exception2 = _interopRequireDefault(_exception);
              exports2["default"] = function(instance) {
                instance.registerHelper("with", function(context, options) {
                  if (arguments.length != 2) {
                    throw new _exception2["default"]("#with requires exactly one argument");
                  }
                  if (_utils.isFunction(context)) {
                    context = context.call(this);
                  }
                  var fn = options.fn;
                  if (!_utils.isEmpty(context)) {
                    var data = options.data;
                    if (options.data && options.ids) {
                      data = _utils.createFrame(options.data);
                      data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                    }
                    return fn(context, {
                      data,
                      blockParams: _utils.blockParams([context], [data && data.contextPath])
                    });
                  } else {
                    return options.inverse(this);
                  }
                });
              };
              module2.exports = exports2["default"];
            },
            /* 29 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              exports2.registerDefaultDecorators = registerDefaultDecorators;
              var _decoratorsInline = __webpack_require__(30);
              var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
              function registerDefaultDecorators(instance) {
                _decoratorsInline2["default"](instance);
              }
            },
            /* 30 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _utils = __webpack_require__(4);
              exports2["default"] = function(instance) {
                instance.registerDecorator("inline", function(fn, props, container, options) {
                  var ret = fn;
                  if (!props.partials) {
                    props.partials = {};
                    ret = function(context, options2) {
                      var original = container.partials;
                      container.partials = _utils.extend({}, original, props.partials);
                      var ret2 = fn(context, options2);
                      container.partials = original;
                      return ret2;
                    };
                  }
                  props.partials[options.args[0]] = options.fn;
                  return ret;
                });
              };
              module2.exports = exports2["default"];
            },
            /* 31 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              exports2.__esModule = true;
              var _utils = __webpack_require__(4);
              var logger = {
                methodMap: ["debug", "info", "warn", "error"],
                level: "info",
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                  if (typeof level === "string") {
                    var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                    if (levelMap >= 0) {
                      level = levelMap;
                    } else {
                      level = parseInt(level, 10);
                    }
                  }
                  return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                  level = logger.lookupLevel(level);
                  if (typeof console !== "undefined" && logger.lookupLevel(logger.level) <= level) {
                    var method = logger.methodMap[level];
                    if (!console[method]) {
                      method = "log";
                    }
                    for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      message[_key - 1] = arguments[_key];
                    }
                    console[method].apply(console, message);
                  }
                }
              };
              exports2["default"] = logger;
              module2.exports = exports2["default"];
            },
            /* 32 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _Object$create = __webpack_require__(33)["default"];
              var _Object$keys = __webpack_require__(12)["default"];
              var _interopRequireWildcard = __webpack_require__(1)["default"];
              exports2.__esModule = true;
              exports2.createProtoAccessControl = createProtoAccessControl;
              exports2.resultIsAllowed = resultIsAllowed;
              exports2.resetLoggedProperties = resetLoggedProperties;
              var _createNewLookupObject = __webpack_require__(35);
              var _logger = __webpack_require__(31);
              var logger = _interopRequireWildcard(_logger);
              var loggedProperties = _Object$create(null);
              function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList["constructor"] = false;
                defaultMethodWhiteList["__defineGetter__"] = false;
                defaultMethodWhiteList["__defineSetter__"] = false;
                defaultMethodWhiteList["__lookupGetter__"] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                defaultPropertyWhiteList["__proto__"] = false;
                return {
                  properties: {
                    whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                    defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                  },
                  methods: {
                    whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                    defaultValue: runtimeOptions.allowProtoMethodsByDefault
                  }
                };
              }
              function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === "function") {
                  return checkWhiteList(protoAccessControl.methods, propertyName);
                } else {
                  return checkWhiteList(protoAccessControl.properties, propertyName);
                }
              }
              function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== void 0) {
                  return protoAccessControlForType.whitelist[propertyName] === true;
                }
                if (protoAccessControlForType.defaultValue !== void 0) {
                  return protoAccessControlForType.defaultValue;
                }
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
              }
              function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                  loggedProperties[propertyName] = true;
                  logger.log("error", 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
                }
              }
              function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                  delete loggedProperties[propertyName];
                });
              }
            },
            /* 33 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(34), __esModule: true };
            },
            /* 34 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var $ = __webpack_require__(8);
              module2.exports = function create(P, D) {
                return $.create(P, D);
              };
            },
            /* 35 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _Object$create = __webpack_require__(33)["default"];
              exports2.__esModule = true;
              exports2.createNewLookupObject = createNewLookupObject;
              var _utils = __webpack_require__(4);
              function createNewLookupObject() {
                for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
                  sources[_key] = arguments[_key];
                }
                return _utils.extend.apply(void 0, [_Object$create(null)].concat(sources));
              }
            },
            /* 36 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2.__esModule = true;
              function SafeString(string) {
                this.string = string;
              }
              SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return "" + this.string;
              };
              exports2["default"] = SafeString;
              module2.exports = exports2["default"];
            },
            /* 37 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var _Object$seal = __webpack_require__(38)["default"];
              var _Object$keys = __webpack_require__(12)["default"];
              var _interopRequireWildcard = __webpack_require__(1)["default"];
              var _interopRequireDefault = __webpack_require__(2)["default"];
              exports2.__esModule = true;
              exports2.checkRevision = checkRevision;
              exports2.template = template;
              exports2.wrapProgram = wrapProgram;
              exports2.resolvePartial = resolvePartial;
              exports2.invokePartial = invokePartial;
              exports2.noop = noop;
              var _utils = __webpack_require__(4);
              var Utils = _interopRequireWildcard(_utils);
              var _exception = __webpack_require__(5);
              var _exception2 = _interopRequireDefault(_exception);
              var _base = __webpack_require__(3);
              var _helpers = __webpack_require__(9);
              var _internalWrapHelper = __webpack_require__(42);
              var _internalProtoAccess = __webpack_require__(32);
              function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
                  return;
                }
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                  var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                  throw new _exception2["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").");
                } else {
                  throw new _exception2["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ").");
                }
              }
              function template(templateSpec, env) {
                if (!env) {
                  throw new _exception2["default"]("No environment passed to template");
                }
                if (!templateSpec || !templateSpec.main) {
                  throw new _exception2["default"]("Unknown template object: " + typeof templateSpec);
                }
                templateSpec.main.decorator = templateSpec.main_d;
                env.VM.checkRevision(templateSpec.compiler);
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                  if (options.hash) {
                    context = Utils.extend({}, context, options.hash);
                    if (options.ids) {
                      options.ids[0] = true;
                    }
                  }
                  partial = env.VM.resolvePartial.call(this, partial, context, options);
                  var extendedOptions = Utils.extend({}, options, {
                    hooks: this.hooks,
                    protoAccessControl: this.protoAccessControl
                  });
                  var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                  if (result == null && env.compile) {
                    options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                    result = options.partials[options.name](context, extendedOptions);
                  }
                  if (result != null) {
                    if (options.indent) {
                      var lines = result.split("\n");
                      for (var i = 0, l = lines.length; i < l; i++) {
                        if (!lines[i] && i + 1 === l) {
                          break;
                        }
                        lines[i] = options.indent + lines[i];
                      }
                      result = lines.join("\n");
                    }
                    return result;
                  } else {
                    throw new _exception2["default"]("The partial " + options.name + " could not be compiled when running in runtime-only mode");
                  }
                }
                var container = {
                  strict: function strict(obj, name, loc) {
                    if (!obj || !(name in obj)) {
                      throw new _exception2["default"]('"' + name + '" not defined in ' + obj, {
                        loc
                      });
                    }
                    return container.lookupProperty(obj, name);
                  },
                  lookupProperty: function lookupProperty(parent, propertyName) {
                    var result = parent[propertyName];
                    if (result == null) {
                      return result;
                    }
                    if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                      return result;
                    }
                    if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
                      return result;
                    }
                    return void 0;
                  },
                  lookup: function lookup(depths, name) {
                    var len = depths.length;
                    for (var i = 0; i < len; i++) {
                      var result = depths[i] && container.lookupProperty(depths[i], name);
                      if (result != null) {
                        return depths[i][name];
                      }
                    }
                  },
                  lambda: function lambda(current, context) {
                    return typeof current === "function" ? current.call(context) : current;
                  },
                  escapeExpression: Utils.escapeExpression,
                  invokePartial: invokePartialWrapper,
                  fn: function fn(i) {
                    var ret2 = templateSpec[i];
                    ret2.decorator = templateSpec[i + "_d"];
                    return ret2;
                  },
                  programs: [],
                  program: function program(i, data, declaredBlockParams, blockParams, depths) {
                    var programWrapper = this.programs[i], fn = this.fn(i);
                    if (data || depths || blockParams || declaredBlockParams) {
                      programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                    } else if (!programWrapper) {
                      programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                    }
                    return programWrapper;
                  },
                  data: function data(value, depth) {
                    while (value && depth--) {
                      value = value._parent;
                    }
                    return value;
                  },
                  mergeIfNeeded: function mergeIfNeeded(param, common) {
                    var obj = param || common;
                    if (param && common && param !== common) {
                      obj = Utils.extend({}, common, param);
                    }
                    return obj;
                  },
                  // An empty object to use as replacement for null-contexts
                  nullContext: _Object$seal({}),
                  noop: env.VM.noop,
                  compilerInfo: templateSpec.compiler
                };
                function ret(context) {
                  var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
                  var data = options.data;
                  ret._setup(options);
                  if (!options.partial && templateSpec.useData) {
                    data = initData(context, data);
                  }
                  var depths = void 0, blockParams = templateSpec.useBlockParams ? [] : void 0;
                  if (templateSpec.useDepths) {
                    if (options.depths) {
                      depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
                    } else {
                      depths = [context];
                    }
                  }
                  function main(context2) {
                    return "" + templateSpec.main(container, context2, container.helpers, container.partials, data, blockParams, depths);
                  }
                  main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                  return main(context, options);
                }
                ret.isTop = true;
                ret._setup = function(options) {
                  if (!options.partial) {
                    var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                    wrapHelpersToPassLookupProperty(mergedHelpers, container);
                    container.helpers = mergedHelpers;
                    if (templateSpec.usePartial) {
                      container.partials = container.mergeIfNeeded(options.partials, env.partials);
                    }
                    if (templateSpec.usePartial || templateSpec.useDecorators) {
                      container.decorators = Utils.extend({}, env.decorators, options.decorators);
                    }
                    container.hooks = {};
                    container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                    var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                    _helpers.moveHelperToHooks(container, "helperMissing", keepHelperInHelpers);
                    _helpers.moveHelperToHooks(container, "blockHelperMissing", keepHelperInHelpers);
                  } else {
                    container.protoAccessControl = options.protoAccessControl;
                    container.helpers = options.helpers;
                    container.partials = options.partials;
                    container.decorators = options.decorators;
                    container.hooks = options.hooks;
                  }
                };
                ret._child = function(i, data, blockParams, depths) {
                  if (templateSpec.useBlockParams && !blockParams) {
                    throw new _exception2["default"]("must pass block params");
                  }
                  if (templateSpec.useDepths && !depths) {
                    throw new _exception2["default"]("must pass parent depths");
                  }
                  return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret;
              }
              function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                  var options = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
                  var currentDepths = depths;
                  if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
                    currentDepths = [context].concat(depths);
                  }
                  return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
              }
              function resolvePartial(partial, context, options) {
                if (!partial) {
                  if (options.name === "@partial-block") {
                    partial = options.data["partial-block"];
                  } else {
                    partial = options.partials[options.name];
                  }
                } else if (!partial.call && !options.name) {
                  options.name = partial;
                  partial = options.partials[partial];
                }
                return partial;
              }
              function invokePartial(partial, context, options) {
                var currentPartialBlock = options.data && options.data["partial-block"];
                options.partial = true;
                if (options.ids) {
                  options.data.contextPath = options.ids[0] || options.data.contextPath;
                }
                var partialBlock = void 0;
                if (options.fn && options.fn !== noop) {
                  (function() {
                    options.data = _base.createFrame(options.data);
                    var fn = options.fn;
                    partialBlock = options.data["partial-block"] = function partialBlockWrapper(context2) {
                      var options2 = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
                      options2.data = _base.createFrame(options2.data);
                      options2.data["partial-block"] = currentPartialBlock;
                      return fn(context2, options2);
                    };
                    if (fn.partials) {
                      options.partials = Utils.extend({}, options.partials, fn.partials);
                    }
                  })();
                }
                if (partial === void 0 && partialBlock) {
                  partial = partialBlock;
                }
                if (partial === void 0) {
                  throw new _exception2["default"]("The partial " + options.name + " could not be found");
                } else if (partial instanceof Function) {
                  return partial(context, options);
                }
              }
              function noop() {
                return "";
              }
              function initData(context, data) {
                if (!data || !("root" in data)) {
                  data = data ? _base.createFrame(data) : {};
                  data.root = context;
                }
                return data;
              }
              function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                  var props = {};
                  prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                  Utils.extend(prog, props);
                }
                return prog;
              }
              function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                  var helper = mergedHelpers[helperName];
                  mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
              }
              function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                  return Utils.extend({ lookupProperty }, options);
                });
              }
            },
            /* 38 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = { "default": __webpack_require__(39), __esModule: true };
            },
            /* 39 */
            /***/
            function(module2, exports2, __webpack_require__) {
              __webpack_require__(40);
              module2.exports = __webpack_require__(20).Object.seal;
            },
            /* 40 */
            /***/
            function(module2, exports2, __webpack_require__) {
              var isObject = __webpack_require__(41);
              __webpack_require__(17)("seal", function($seal) {
                return function seal(it) {
                  return $seal && isObject(it) ? $seal(it) : it;
                };
              });
            },
            /* 41 */
            /***/
            function(module2, exports2) {
              module2.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
              };
            },
            /* 42 */
            /***/
            function(module2, exports2) {
              "use strict";
              exports2.__esModule = true;
              exports2.wrapHelper = wrapHelper;
              function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== "function") {
                  return helper;
                }
                var wrapper = function wrapper2() {
                  var options = arguments[arguments.length - 1];
                  arguments[arguments.length - 1] = transformOptionsFn(options);
                  return helper.apply(this, arguments);
                };
                return wrapper;
              }
            },
            /* 43 */
            /***/
            function(module2, exports2) {
              (function(global) {
                "use strict";
                exports2.__esModule = true;
                exports2["default"] = function(Handlebars2) {
                  var root = typeof global !== "undefined" ? global : window, $Handlebars = root.Handlebars;
                  Handlebars2.noConflict = function() {
                    if (root.Handlebars === Handlebars2) {
                      root.Handlebars = $Handlebars;
                    }
                    return Handlebars2;
                  };
                };
                module2.exports = exports2["default"];
              }).call(exports2, function() {
                return this;
              }());
            }
            /******/
          ])
        );
      });
    }
  });

  // pages/newtab/build/templates.js
  var require_templates = __commonJS({
    "pages/newtab/build/templates.js"() {
      (function() {
        var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
        templates["add-shortcut-modal"] = template({ "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
          return '<div\n  id="add-shortcut-modal"\n  class="hide"\n  data-modal=""\n  data-tab-container="add-shortcut"\n>\n  <h3>Add new shortcut</h3>\n  <div class="tabs">\n    <button class="active" data-tab="new">Create new shortcut</button>\n    <button data-tab="link">Link to another shortcut</button>\n  </div>\n  <div class="tab" data-tab="new">\n    <form id="add-shortcut-form" data-form>\n      <div class="field">\n        <label for="shortcut-new-title">Title</label>\n        <input\n          type="text"\n          id="shortcut-new-title"\n          placeholder="Eg. Reddit"\n          name="title"\n        />\n      </div>\n      <div class="field">\n        <label for="shortcut-new-link">Link</label>\n        <input\n          type="text"\n          id="shortcut-new-link"\n          placeholder="Eg. reddit.com"\n          name="link"\n        />\n      </div>\n      <div class="field">\n        <label for="shortcut-new-icon">Icon</label>\n        <input\n          type="text"\n          id="shortcut-new-icon"\n          placeholder="Link to the favicon, I have to optimize this somehow"\n          name="icon"\n        />\n      </div>\n      <div class="field-submit">\n        <button type="submit">Submit</button>\n      </div>\n    </form>\n  </div>\n  <div class="tab hide" data-tab="link">\n    <form id="add-shortcut-form-related" data-form>\n      <div class="field">\n        <label for="shortcut-related">Related shortcut</label>\n        <select id="shortcut-related" name="parent"></select>\n      </div>\n      <div class="field">\n        <label for="shortcut-related-title">Title</label>\n        <input\n          type="text"\n          id="shortcut-related-title"\n          placeholder="Eg. Reddit"\n          name="title"\n        />\n      </div>\n      <div class="field">\n        <label for="shortcut-related-link">Link</label>\n        <input\n          type="text"\n          id="shortcut-related-link"\n          placeholder="Eg. reddit.com"\n          name="link"\n        />\n      </div>\n      <div class="field-submit">\n        <button type="submit">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n';
        }, "useData": true });
        templates["auth-modal"] = template({ "1": function(container, depth0, helpers, partials, data) {
          var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '    <div class="signup-message">\n      <p>Your account is created. You can access your account using your username</p>\n      <div id="login-uuid-container"><span>Or use this UUID:</span><span id="login-uuid">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "uuid") || (depth0 != null ? lookupProperty(depth0, "uuid") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "uuid", "hash": {}, "data": data, "loc": { "start": { "line": 10, "column": 89 }, "end": { "line": 10, "column": 97 } } }) : helper)) + '</span></div>\n      <p>You will need your password to login if you have set it. You can set a password later as well.</p>\n      <div class="field-submit">\n        <button id="proceed">Proceed</button>\n      </div>\n    </div>\n';
        }, "3": function(container, depth0, helpers, partials, data) {
          var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "isCreatingAccount") : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.program(6, data, 0), "data": data, "loc": { "start": { "line": 16, "column": 4 }, "end": { "line": 78, "column": 4 } } })) != null ? stack1 : "";
        }, "4": function(container, depth0, helpers, partials, data) {
          var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '    <div class="actions-container">\n      <button id="back">Go Back</button>\n    </div>\n    <form id="register-form" data-form>\n      <div class="field">\n        <label for="username">Username</label>\n        <input\n          type="text"\n          name="username"\n          id="username"\n          placeholder="Username"\n        />\n      </div>\n      <div class="field">\n        <label for="password">Password</label>\n        <input\n          type="password"\n          name="password"\n          id="password"\n          placeholder="Password"\n        />\n      </div>\n      <div class="error"><p>' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "error") || (depth0 != null ? lookupProperty(depth0, "error") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "error", "hash": {}, "data": data, "loc": { "start": { "line": 39, "column": 28 }, "end": { "line": 39, "column": 37 } } }) : helper)) + '</p></div>\n      <div class="field-submit">\n        <button type="submit" id="login-submit">Register</button>\n      </div>\n    </form>\n';
        }, "6": function(container, depth0, helpers, partials, data) {
          var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "isLoggingIn") : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.program(9, data, 0), "data": data, "loc": { "start": { "line": 44, "column": 4 }, "end": { "line": 78, "column": 4 } } })) != null ? stack1 : "";
        }, "7": function(container, depth0, helpers, partials, data) {
          var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '    <div class="actions-container">\n      <button id="back">Go Back</button>\n    </div>\n    <form id="login-form" data-form>\n      <div class="field">\n        <label for="username">Username or UUID</label>\n        <input\n          type="text"\n          name="username"\n          id="username"\n          placeholder="Username or UUID"\n          required\n        />\n      </div>\n      <div class="field">\n        <label for="password">Password</label>\n        <input\n          type="password"\n          name="password"\n          id="password"\n          placeholder="Password"\n        />\n      </div>\n      <div class="error"><p>' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "error") || (depth0 != null ? lookupProperty(depth0, "error") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "error", "hash": {}, "data": data, "loc": { "start": { "line": 68, "column": 28 }, "end": { "line": 68, "column": 37 } } }) : helper)) + '</p></div>\n      <div class="field-submit">\n        <button type="submit" id="login-submit">Login</button>\n      </div>\n    </form>\n';
        }, "9": function(container, depth0, helpers, partials, data) {
          return `    <p class="disclaimer">You are currently using this app as a guest. Your shortcuts are stored locally on your device and will not be synced across other devices. If you want to access your shortcuts from anywhere and keep them safe in the cloud, you can create a free account with us. Creating an account will also allow you to share your shortcuts with others and discover new ones from our community. Are you ready to join us?</p>
    <button id="register-button" class="navigation-button">Sure, I'll create an account</button>
    <div class="separator">Or</div>
    <button id="login-button" class="navigation-button">Already have an account</button>
    `;
        }, "11": function(container, depth0, helpers, partials, data) {
          return '    <div id="loading"></div>\n';
        }, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
          var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '<div\n  id="auth-modal"\n  class="hide"\n  data-modal=""\n  data-tab-container="auth"\n>\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "createdAccount") : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(3, data, 0), "data": data, "loc": { "start": { "line": 7, "column": 4 }, "end": { "line": 78, "column": 11 } } })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "loading") : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 79, "column": 4 }, "end": { "line": 81, "column": 11 } } })) != null ? stack1 : "") + "</div>\n";
        }, "useData": true });
        templates["shortcut"] = template({ "1": function(container, depth0, helpers, partials, data) {
          var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '  <a href="https://' + alias4((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "link", "hash": {}, "data": data, "loc": { "start": { "line": 3, "column": 19 }, "end": { "line": 3, "column": 27 } } }) : helper)) + '">\n    <div class="header">\n      <img src="' + alias4((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data, "loc": { "start": { "line": 5, "column": 16 }, "end": { "line": 5, "column": 24 } } }) : helper)) + '" />\n      <div class="title">\n        <h1>' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "title", "hash": {}, "data": data, "loc": { "start": { "line": 7, "column": 12 }, "end": { "line": 7, "column": 21 } } }) : helper)) + "</h1>\n        <h3>https://" + alias4((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "link", "hash": {}, "data": data, "loc": { "start": { "line": 8, "column": 20 }, "end": { "line": 8, "column": 28 } } }) : helper)) + '</h3>\n      </div>\n    </div>\n  </a>\n  <div class="children">\n' + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "children") : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 13, "column": 4 }, "end": { "line": 18, "column": 13 } } })) != null ? stack1 : "") + "  </div>\n";
        }, "2": function(container, depth0, helpers, partials, data) {
          var helper, alias1 = container.lambda, alias2 = container.escapeExpression, alias3 = depth0 != null ? depth0 : container.nullContext || {}, alias4 = container.hooks.helperMissing, alias5 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '    <a href="' + alias2(alias1(depth0 != null ? lookupProperty(depth0, "link") : depth0, depth0)) + '" data-id="child-' + alias2((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, { "name": "link", "hash": {}, "data": data, "loc": { "start": { "line": 14, "column": 43 }, "end": { "line": 14, "column": 51 } } }) : helper)) + "-" + alias2((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, { "name": "index", "hash": {}, "data": data, "loc": { "start": { "line": 14, "column": 52 }, "end": { "line": 14, "column": 62 } } }) : helper)) + '">\n      <img src="./icons/chevron-right.svg" class="icon" />\n      <span>' + alias2(alias1(depth0 != null ? lookupProperty(depth0, "title") : depth0, depth0)) + "</span>\n    </a>\n";
        }, "4": function(container, depth0, helpers, partials, data) {
          var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '  <a href="https://' + alias4((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "link", "hash": {}, "data": data, "loc": { "start": { "line": 21, "column": 19 }, "end": { "line": 21, "column": 27 } } }) : helper)) + '">\n    <div>\n      <h1>' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "title", "hash": {}, "data": data, "loc": { "start": { "line": 23, "column": 10 }, "end": { "line": 23, "column": 19 } } }) : helper)) + "</h1>\n      <h3>https://" + alias4((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "link", "hash": {}, "data": data, "loc": { "start": { "line": 24, "column": 18 }, "end": { "line": 24, "column": 26 } } }) : helper)) + '</h3>\n    </div>\n  </a>\n  <div class="img">\n    <img src="' + alias4((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data, "loc": { "start": { "line": 28, "column": 14 }, "end": { "line": 28, "column": 22 } } }) : helper)) + '" />\n  </div>\n';
        }, "compiler": [8, ">= 4.3.0"], "main": function(container, depth0, helpers, partials, data) {
          var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return void 0;
          };
          return '<div class="shortcut" data-id="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "id", "hash": {}, "data": data, "loc": { "start": { "line": 1, "column": 31 }, "end": { "line": 1, "column": 37 } } }) : helper)) + '">\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "hasChildren") : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(4, data, 0), "data": data, "loc": { "start": { "line": 2, "column": 2 }, "end": { "line": 30, "column": 9 } } })) != null ? stack1 : "") + '  <div class="edit-actions">\n    <button class="edit"><img src="./icons/edit.svg" class="icon" /></button>\n    <button class="delete"><img src="./icons/delete.svg" class="icon" /></button>\n  </div>\n</div>\n';
        }, "useData": true });
      })();
    }
  });

  // pages/newtab/scripts/handlebars.js
  var require_handlebars = __commonJS({
    "pages/newtab/scripts/handlebars.js"(exports, module) {
      var handlebars = require_handlebars_runtime();
      globalThis.Handlebars = handlebars;
      require_templates();
      module.exports = handlebars;
    }
  });

  // pages/newtab/scripts/store.js
  var require_store = __commonJS({
    "pages/newtab/scripts/store.js"(exports, module) {
      var stores = {};
      var store = (initial = {}, key = "", compute = null) => {
        const subscribers = [];
        let data = initial;
        if (key) {
          const memory = localStorage.getItem(key);
          try {
            data = JSON.parse(memory);
            if (!data) {
              throw new Error();
            }
          } catch (err) {
            data = initial;
            localStorage.setItem(key, JSON.stringify(data));
          }
        }
        const emit = () => {
          subscribers.forEach((fn) => fn(data));
        };
        const set = (newData) => {
          data = newData;
          if (compute) {
            data = compute(data);
          }
          if (key) {
            localStorage.setItem(key, JSON.stringify(data));
          }
          emit();
        };
        const update = (newData) => {
          set({ ...data, ...newData });
        };
        const get = () => {
          return data;
        };
        const subscribe = (fn) => {
          subscribers.push(fn);
          fn(data);
        };
        stores[key] = { set, get, subscribe, compute, update };
        return stores[key];
      };
      var getStore = (key) => {
        return stores[key];
      };
      module.exports = { store, getStore };
    }
  });

  // pages/newtab/scripts/constants.js
  var require_constants = __commonJS({
    "pages/newtab/scripts/constants.js"(exports, module) {
      var shortcutsDefault = [
        {
          title: "Reddit",
          link: "reddit.com",
          icon: "./icons/reddit.png",
          children: []
        },
        {
          title: "Github",
          link: "github.com",
          icon: "./icons/github.svg",
          children: []
        },
        {
          title: "30nama",
          link: "30nama.com",
          icon: "./icons/30nama.ico",
          children: []
        },
        {
          title: "Youtube",
          link: "youtube.com",
          icon: "./icons/youtube.png",
          children: []
        }
      ];
      module.exports = {
        shortcutsDefault
      };
    }
  });

  // pages/newtab/scripts/shortcuts.js
  var require_shortcuts = __commonJS({
    "pages/newtab/scripts/shortcuts.js"(exports, module) {
      var sortable = require_Sortable_min();
      var handlebars = require_handlebars();
      var { store } = require_store();
      var { shortcutsDefault } = require_constants();
      var shortcutsContainer = document.querySelector("#shortcuts");
      var shortcutsEdit = document.querySelector("#shortcuts-edit");
      var {
        get: getShortcuts,
        set: setShortcuts,
        subscribe: subscribeShortcuts
      } = store(shortcutsDefault, "shortcuts");
      var isEditing = false;
      subscribeShortcuts((shortcuts) => {
        shortcutsContainer.innerHTML = "";
        isEditing = false;
        shortcuts.forEach(({ title, link, icon, children }, i) => {
          shortcutsContainer.innerHTML += handlebars.templates.shortcut({
            id: i,
            title,
            icon: icon || "https://s2.googleusercontent.com/s2/favicons?domain=" + link,
            children,
            hasChildren: children && children.length > 0,
            link: link.replace(/^https?:\/\//, "")
          });
        });
        Array.from(shortcutsContainer.querySelectorAll(".shortcut")).forEach(
          (shortcut, i) => {
            shortcut.querySelector(".edit-actions .delete").addEventListener("click", () => {
              setShortcuts(getShortcuts().filter((_, j) => i !== j));
            });
          }
        );
      });
      shortcutsEdit.addEventListener("click", () => {
        const shortcuts = Array.from(
          shortcutsContainer.querySelectorAll(".shortcut")
        );
        if (!isEditing) {
          isEditing = true;
          shortcuts.forEach((shortcut) => shortcut.classList.add("editing"));
          return;
        }
        isEditing = false;
        shortcuts.forEach((shortcut) => shortcut.classList.remove("editing"));
      });
      var changeOrder = (arr, m, n) => {
        const newArr = [...arr];
        const [item] = newArr.splice(m, 1);
        newArr.splice(n, 0, item);
        return newArr;
      };
      sortable.create(shortcutsContainer, {
        animation: 150,
        ghostClass: "ghost-draggable",
        onEnd: (e) => {
          setShortcuts(changeOrder(getShortcuts(), e.oldIndex, e.newIndex));
        }
      });
      module.exports = { getShortcuts, setShortcuts, subscribeShortcuts };
    }
  });

  // pages/newtab/scripts/bookmarks.js
  var require_bookmarks = __commonJS({
    "pages/newtab/scripts/bookmarks.js"(exports, module) {
      var { store } = require_store();
      var bookmarksContainer = document.querySelector("#bookmarks");
      var bookmarksEmptyTemplate = document.querySelector(
        "#bookmarks-template-empty"
      );
      var bookmarkTemplate = document.querySelector("#bookmark-template");
      var bookmarkTemplateWithChildren = document.querySelector(
        "#bookmark-template-with-children"
      );
      var {
        get: getBookmarks,
        set: setBookmarks,
        subscribe: subscribeBookmarks
      } = store([], "bookmarks");
      setTimeout(() => {
        chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
          let bookmarks = getAllBookmarks(bookmarkTreeNodes);
          if (bookmarks.every((bookmark) => bookmark.children && !bookmark.title)) {
            bookmarks = bookmarks.reduce((acc, bookmark) => {
              return [...acc, ...bookmark.children];
            }, []);
          }
          setBookmarks(bookmarks);
        });
      }, 1e3);
      subscribeBookmarks(
        (bookmarks) => bookmarksContainer.innerHTML = renderBookmarks(bookmarks)
      );
      function renderBookmarks(bookmarks) {
        if (!bookmarks)
          return "";
        if (bookmarks.length === 0)
          return bookmarksEmptyTemplate.innerHTML;
        return bookmarks.map((bookmark) => {
          if (bookmark.children === null) {
            return bookmarkTemplate.innerHTML.replace(/%title%/g, bookmark.title).replace(/%link%/g, bookmark.link).replace(/%icon%/g, bookmark.iconUrl);
          } else {
            return bookmarkTemplateWithChildren.innerHTML.replace(/%title%/g, bookmark.title).replace(/%children%/g, renderBookmarks(bookmark.children));
          }
        }).join("");
      }
      function getAllBookmarks(nodes) {
        return nodes.map(function(node) {
          if (node.url) {
            return {
              id: node.id,
              title: node.title,
              link: node.url.startsWith("http") ? node.url : "http://" + node.url,
              iconUrl: "https://s2.googleusercontent.com/s2/favicons?domain=" + node.url,
              children: null
            };
          } else if (node.children) {
            return {
              title: node.title,
              id: node.id,
              children: getAllBookmarks(node.children)
            };
          }
        });
      }
      module.exports = { getBookmarks, setBookmarks, subscribeBookmarks };
    }
  });

  // pages/newtab/scripts/tabs.js
  var require_tabs = __commonJS({
    "pages/newtab/scripts/tabs.js"(exports, module) {
      var tabListeners = {};
      var setupTabs = (scope) => {
        const tabs = scope.querySelectorAll("[data-tab-container]");
        Array.from(tabs || []).forEach((tabContainer) => {
          const tabButtons = Array.from(
            tabContainer.querySelectorAll(".tabs button") || []
          );
          const tabs2 = Array.from(tabContainer.querySelectorAll(".tab") || []);
          tabs2.forEach((tab) => tab.classList.add("hide"));
          tabButtons.forEach((button) => {
            const tab = tabs2.find((tab2) => tab2.dataset.tab === button.dataset.tab);
            if (button.classList.contains("active")) {
              tab.classList.remove("hide");
            }
            if (!tab) {
              console.error("no related tab found", button.dataset.tab, tabContainer);
              return;
            }
            button.addEventListener("click", () => {
              tabButtons.forEach((button2) => button2.classList.remove("active"));
              button.classList.add("active");
              tabs2.forEach((tab2) => tab2.classList.add("hide"));
              tab.classList.remove("hide");
              tabListeners[tabContainer.dataset.tabContainer]?.[button.dataset.tab]?.();
            });
          });
        });
      };
      var removeTabs = (scope) => {
        const tabs = scope.querySelectorAll("[data-tab-container]");
        Array.from(tabs || []).forEach((tabContainer) => {
          delete tabListeners[tabContainer.dataset.tabContainer];
        });
      };
      var listenToTab = (id, tab, fn) => {
        if (!tabListeners[id]) {
          tabListeners[id] = {};
        }
        tabListeners[id][tab] = fn;
      };
      setupTabs(document);
      module.exports = { listenToTab, setupTabs, removeTabs };
    }
  });

  // pages/newtab/scripts/dynamic.js
  var require_dynamic = __commonJS({
    "pages/newtab/scripts/dynamic.js"(exports, module) {
      var querySelector = (selector, scope = document) => (fn) => {
        const element = scope.querySelector(selector);
        if (element)
          return fn(element);
        return null;
      };
      async function observeElementChanges(fn) {
        const result = fn();
        if (result)
          return result;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        return observeElementChanges(fn);
      }
      module.exports = { querySelector, observeElementChanges };
    }
  });

  // pages/newtab/scripts/forms.js
  var require_forms = __commonJS({
    "pages/newtab/scripts/forms.js"(exports, module) {
      var formValues = {};
      var setupForms = (scope) => {
        const forms = scope.querySelectorAll("[data-form]");
        Array.from(forms || []).forEach((form) => {
          const formName = form.id;
          formValues[formName] = { values: {} };
          Array.from(form.querySelectorAll("input, textarea, select")).forEach(
            (input) => {
              formValues[formName].values[input.name] = input.value;
              input.addEventListener("change", (e) => {
                formValues[formName].values[input.name] = e.target.value;
              });
            }
          );
          const defaultValues = { ...formValues[formName].values };
          formValues[formName].reset = () => {
            formValues[formName].values = { ...defaultValues };
          };
        });
      };
      var removeForms = (scope) => {
        const forms = scope.querySelectorAll("[data-form]");
        Array.from(forms || []).forEach((form) => {
          const formName = form.id;
          delete formValues[formName];
        });
      };
      var stopPropagation = (fn) => (e) => {
        e.stopPropagation();
        if (fn) {
          fn(e);
        }
      };
      var preventDefault = (fn) => (e) => {
        e.preventDefault();
        if (fn) {
          fn(e);
        }
      };
      setupForms(document);
      module.exports = {
        formValues,
        stopPropagation,
        preventDefault,
        setupForms,
        removeForms
      };
    }
  });

  // pages/newtab/scripts/modal.js
  var require_modal = __commonJS({
    "pages/newtab/scripts/modal.js"(exports, module) {
      var { observeElementChanges } = require_dynamic();
      var { setupForms, removeForms, stopPropagation } = require_forms();
      var { setupTabs } = require_tabs();
      var modalBackdrop = document.querySelector("#backdrop");
      var showModal = async (template) => {
        modalBackdrop.innerHTML = template;
        const modal = await observeElementChanges(
          () => modalBackdrop.querySelector("[data-modal]")
        );
        setupTabs(modalBackdrop);
        setupForms(modalBackdrop);
        modal.addEventListener("click", stopPropagation());
        modalBackdrop.classList.remove("hide");
        modal.classList.remove("hide");
        modalBackdrop.addEventListener("click", hideModal, { once: true });
      };
      var hideModal = async () => {
        modalBackdrop.innerHTML = "";
        modalBackdrop.classList.add("hide");
        removeForms(modalBackdrop);
      };
      module.exports = { showModal, hideModal, modalBackdrop };
    }
  });

  // pages/newtab/scripts/add-shortcuts.js
  var require_add_shortcuts = __commonJS({
    "pages/newtab/scripts/add-shortcuts.js"() {
      var { listenToTab } = require_tabs();
      var { showModal, hideModal } = require_modal();
      var { getShortcuts, setShortcuts } = require_shortcuts();
      var { formValues, preventDefault } = require_forms();
      var handlebars = require_handlebars();
      var shortcutAddButton = document.querySelector("#shortcuts-add");
      shortcutAddButton.addEventListener("click", async () => {
        await showModal(handlebars.templates["add-shortcut-modal"]());
        const addShortcutModalForm = document.querySelector("#add-shortcut-form");
        const addShortcutModalRelatedForm = document.querySelector(
          "#add-shortcut-form-related"
        );
        addShortcutModalForm.addEventListener(
          "submit",
          preventDefault(addShortcut())
        );
        addShortcutModalRelatedForm.addEventListener(
          "submit",
          preventDefault(addShortcut("related"))
        );
      });
      listenToTab("add-shortcut", "link", () => {
        const shortcutsSelector = document.querySelector("#shortcut-related");
        shortcutsSelector.innerHTML = [
          '<option disabled value=""></option>',
          ...getShortcuts().map(
            ({ title, link }) => `<option value="${link}">${title}</option>`
          )
        ];
        shortcutsSelector.value = "";
      });
      var addShortcut = (mode = "") => () => {
        const formName = mode === "related" ? "add-shortcut-form-related" : "add-shortcut-form";
        const emptyFields = Object.keys(formValues[formName].values).filter(
          (key) => key !== "icon" && formValues[formName].values[key] === ""
        );
        if (emptyFields.length > 0) {
          emptyFields.forEach((field) => {
            const input = document.querySelector(`#${formName} [name="${field}"]`);
            input.classList.add("error");
          });
          return;
        }
        if (mode === "related") {
          const shortcuts = getShortcuts();
          const shortcut = shortcuts.find(
            (shortcut2) => shortcut2.link === formValues["add-shortcut-form-related"].values.parent
          );
          if (!shortcut) {
            throw new Error("Shortcut not found");
          }
          shortcut.children.push(formValues["add-shortcut-form-related"].values);
          setShortcuts(shortcuts);
        } else {
          setShortcuts([
            ...getShortcuts(),
            { ...formValues["add-shortcut-form"].values, children: [] }
          ]);
        }
        formValues["add-shortcut-form-related"].reset();
        formValues["add-shortcut-form"].reset();
        hideModal();
      };
    }
  });

  // node_modules/fuse.js/dist/fuse.common.js
  var require_fuse_common = __commonJS({
    "node_modules/fuse.js/dist/fuse.common.js"(exports, module) {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, _typeof(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        Object.defineProperty(subClass, "prototype", {
          value: Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          }),
          writable: false
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      function _possibleConstructorReturn(self2, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return _assertThisInitialized(self2);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function isArray(value) {
        return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
      }
      var INFINITY = 1 / 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      function isString(value) {
        return typeof value === "string";
      }
      function isNumber(value) {
        return typeof value === "number";
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
      }
      function isObject(value) {
        return _typeof(value) === "object";
      }
      function isObjectLike(value) {
        return isObject(value) && value !== null;
      }
      function isDefined(value) {
        return value !== void 0 && value !== null;
      }
      function isBlank(value) {
        return !value.trim().length;
      }
      function getTag(value) {
        return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
      }
      var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
      var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY2(key) {
        return "Invalid value for key ".concat(key);
      };
      var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE2(max) {
        return "Pattern length exceeds max of ".concat(max, ".");
      };
      var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY2(name) {
        return "Missing ".concat(name, " property in key");
      };
      var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE2(key) {
        return "Property 'weight' in key '".concat(key, "' must be a positive integer");
      };
      var hasOwn = Object.prototype.hasOwnProperty;
      var KeyStore = /* @__PURE__ */ function() {
        function KeyStore2(keys) {
          var _this = this;
          _classCallCheck(this, KeyStore2);
          this._keys = [];
          this._keyMap = {};
          var totalWeight = 0;
          keys.forEach(function(key) {
            var obj = createKey(key);
            totalWeight += obj.weight;
            _this._keys.push(obj);
            _this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
          });
          this._keys.forEach(function(key) {
            key.weight /= totalWeight;
          });
        }
        _createClass(KeyStore2, [{
          key: "get",
          value: function get2(keyId) {
            return this._keyMap[keyId];
          }
        }, {
          key: "keys",
          value: function keys() {
            return this._keys;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return JSON.stringify(this._keys);
          }
        }]);
        return KeyStore2;
      }();
      function createKey(key) {
        var path = null;
        var id = null;
        var src = null;
        var weight = 1;
        var getFn = null;
        if (isString(key) || isArray(key)) {
          src = key;
          path = createKeyPath(key);
          id = createKeyId(key);
        } else {
          if (!hasOwn.call(key, "name")) {
            throw new Error(MISSING_KEY_PROPERTY("name"));
          }
          var name = key.name;
          src = name;
          if (hasOwn.call(key, "weight")) {
            weight = key.weight;
            if (weight <= 0) {
              throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
            }
          }
          path = createKeyPath(name);
          id = createKeyId(name);
          getFn = key.getFn;
        }
        return {
          path,
          id,
          weight,
          src,
          getFn
        };
      }
      function createKeyPath(key) {
        return isArray(key) ? key : key.split(".");
      }
      function createKeyId(key) {
        return isArray(key) ? key.join(".") : key;
      }
      function get(obj, path) {
        var list = [];
        var arr = false;
        var deepGet = function deepGet2(obj2, path2, index) {
          if (!isDefined(obj2)) {
            return;
          }
          if (!path2[index]) {
            list.push(obj2);
          } else {
            var key = path2[index];
            var value = obj2[key];
            if (!isDefined(value)) {
              return;
            }
            if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
              list.push(toString(value));
            } else if (isArray(value)) {
              arr = true;
              for (var i = 0, len = value.length; i < len; i += 1) {
                deepGet2(value[i], path2, index + 1);
              }
            } else if (path2.length) {
              deepGet2(value, path2, index + 1);
            }
          }
        };
        deepGet(obj, isString(path) ? path.split(".") : path, 0);
        return arr ? list : list[0];
      }
      var MatchOptions = {
        // Whether the matches should be included in the result set. When `true`, each record in the result
        // set will include the indices of the matched characters.
        // These can consequently be used for highlighting purposes.
        includeMatches: false,
        // When `true`, the matching function will continue to the end of a search pattern even if
        // a perfect match has already been located in the string.
        findAllMatches: false,
        // Minimum number of characters that must be matched before a result is considered a match
        minMatchCharLength: 1
      };
      var BasicOptions = {
        // When `true`, the algorithm continues searching to the end of the input even if a perfect
        // match is found before the end of the same input.
        isCaseSensitive: false,
        // When true, the matching function will continue to the end of a search pattern even if
        includeScore: false,
        // List of properties that will be searched. This also supports nested properties.
        keys: [],
        // Whether to sort the result list, by score
        shouldSort: true,
        // Default sort function: sort by ascending score, ascending index
        sortFn: function sortFn(a, b) {
          return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
        }
      };
      var FuzzyOptions = {
        // Approximately where in the text is the pattern expected to be found?
        location: 0,
        // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
        // (of both letters and location), a threshold of '1.0' would match anything.
        threshold: 0.6,
        // Determines how close the match must be to the fuzzy location (specified above).
        // An exact letter match which is 'distance' characters away from the fuzzy location
        // would score as a complete mismatch. A distance of '0' requires the match be at
        // the exact location specified, a threshold of '1000' would require a perfect match
        // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
        distance: 100
      };
      var AdvancedOptions = {
        // When `true`, it enables the use of unix-like search commands
        useExtendedSearch: false,
        // The get function to use when fetching an object's properties.
        // The default will search nested paths *ie foo.bar.baz*
        getFn: get,
        // When `true`, search will ignore `location` and `distance`, so it won't matter
        // where in the string the pattern appears.
        // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
        ignoreLocation: false,
        // When `true`, the calculation for the relevance score (used for sorting) will
        // ignore the field-length norm.
        // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
        ignoreFieldNorm: false,
        // The weight to determine how much field length norm effects scoring.
        fieldNormWeight: 1
      };
      var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
      var SPACE = /[^ ]+/g;
      function norm() {
        var weight = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        var mantissa = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
        var cache = /* @__PURE__ */ new Map();
        var m = Math.pow(10, mantissa);
        return {
          get: function get2(value) {
            var numTokens = value.match(SPACE).length;
            if (cache.has(numTokens)) {
              return cache.get(numTokens);
            }
            var norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
            var n = parseFloat(Math.round(norm2 * m) / m);
            cache.set(numTokens, n);
            return n;
          },
          clear: function clear() {
            cache.clear();
          }
        };
      }
      var FuseIndex = /* @__PURE__ */ function() {
        function FuseIndex2() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$getFn = _ref.getFn, getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn, _ref$fieldNormWeight = _ref.fieldNormWeight, fieldNormWeight = _ref$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref$fieldNormWeight;
          _classCallCheck(this, FuseIndex2);
          this.norm = norm(fieldNormWeight, 3);
          this.getFn = getFn;
          this.isCreated = false;
          this.setIndexRecords();
        }
        _createClass(FuseIndex2, [{
          key: "setSources",
          value: function setSources() {
            var docs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            this.docs = docs;
          }
        }, {
          key: "setIndexRecords",
          value: function setIndexRecords() {
            var records = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            this.records = records;
          }
        }, {
          key: "setKeys",
          value: function setKeys() {
            var _this = this;
            var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            this.keys = keys;
            this._keysMap = {};
            keys.forEach(function(key, idx) {
              _this._keysMap[key.id] = idx;
            });
          }
        }, {
          key: "create",
          value: function create() {
            var _this2 = this;
            if (this.isCreated || !this.docs.length) {
              return;
            }
            this.isCreated = true;
            if (isString(this.docs[0])) {
              this.docs.forEach(function(doc, docIndex) {
                _this2._addString(doc, docIndex);
              });
            } else {
              this.docs.forEach(function(doc, docIndex) {
                _this2._addObject(doc, docIndex);
              });
            }
            this.norm.clear();
          }
          // Adds a doc to the end of the index
        }, {
          key: "add",
          value: function add(doc) {
            var idx = this.size();
            if (isString(doc)) {
              this._addString(doc, idx);
            } else {
              this._addObject(doc, idx);
            }
          }
          // Removes the doc at the specified index of the index
        }, {
          key: "removeAt",
          value: function removeAt(idx) {
            this.records.splice(idx, 1);
            for (var i = idx, len = this.size(); i < len; i += 1) {
              this.records[i].i -= 1;
            }
          }
        }, {
          key: "getValueForItemAtKeyId",
          value: function getValueForItemAtKeyId(item, keyId) {
            return item[this._keysMap[keyId]];
          }
        }, {
          key: "size",
          value: function size() {
            return this.records.length;
          }
        }, {
          key: "_addString",
          value: function _addString(doc, docIndex) {
            if (!isDefined(doc) || isBlank(doc)) {
              return;
            }
            var record = {
              v: doc,
              i: docIndex,
              n: this.norm.get(doc)
            };
            this.records.push(record);
          }
        }, {
          key: "_addObject",
          value: function _addObject(doc, docIndex) {
            var _this3 = this;
            var record = {
              i: docIndex,
              $: {}
            };
            this.keys.forEach(function(key, keyIndex) {
              var value = key.getFn ? key.getFn(doc) : _this3.getFn(doc, key.path);
              if (!isDefined(value)) {
                return;
              }
              if (isArray(value)) {
                (function() {
                  var subRecords = [];
                  var stack = [{
                    nestedArrIndex: -1,
                    value
                  }];
                  while (stack.length) {
                    var _stack$pop = stack.pop(), nestedArrIndex = _stack$pop.nestedArrIndex, _value = _stack$pop.value;
                    if (!isDefined(_value)) {
                      continue;
                    }
                    if (isString(_value) && !isBlank(_value)) {
                      var subRecord2 = {
                        v: _value,
                        i: nestedArrIndex,
                        n: _this3.norm.get(_value)
                      };
                      subRecords.push(subRecord2);
                    } else if (isArray(_value)) {
                      _value.forEach(function(item, k) {
                        stack.push({
                          nestedArrIndex: k,
                          value: item
                        });
                      });
                    } else
                      ;
                  }
                  record.$[keyIndex] = subRecords;
                })();
              } else if (isString(value) && !isBlank(value)) {
                var subRecord = {
                  v: value,
                  n: _this3.norm.get(value)
                };
                record.$[keyIndex] = subRecord;
              }
            });
            this.records.push(record);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              keys: this.keys,
              records: this.records
            };
          }
        }]);
        return FuseIndex2;
      }();
      function createIndex(keys, docs) {
        var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$getFn = _ref2.getFn, getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn, _ref2$fieldNormWeight = _ref2.fieldNormWeight, fieldNormWeight = _ref2$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref2$fieldNormWeight;
        var myIndex = new FuseIndex({
          getFn,
          fieldNormWeight
        });
        myIndex.setKeys(keys.map(createKey));
        myIndex.setSources(docs);
        myIndex.create();
        return myIndex;
      }
      function parseIndex(data) {
        var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$getFn = _ref3.getFn, getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn, _ref3$fieldNormWeight = _ref3.fieldNormWeight, fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;
        var keys = data.keys, records = data.records;
        var myIndex = new FuseIndex({
          getFn,
          fieldNormWeight
        });
        myIndex.setKeys(keys);
        myIndex.setIndexRecords(records);
        return myIndex;
      }
      function computeScore$1(pattern) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$errors = _ref.errors, errors = _ref$errors === void 0 ? 0 : _ref$errors, _ref$currentLocation = _ref.currentLocation, currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation, _ref$expectedLocation = _ref.expectedLocation, expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
        var accuracy = errors / pattern.length;
        if (ignoreLocation) {
          return accuracy;
        }
        var proximity = Math.abs(expectedLocation - currentLocation);
        if (!distance) {
          return proximity ? 1 : accuracy;
        }
        return accuracy + proximity / distance;
      }
      function convertMaskToIndices() {
        var matchmask = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var minMatchCharLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Config.minMatchCharLength;
        var indices = [];
        var start = -1;
        var end = -1;
        var i = 0;
        for (var len = matchmask.length; i < len; i += 1) {
          var match = matchmask[i];
          if (match && start === -1) {
            start = i;
          } else if (!match && start !== -1) {
            end = i - 1;
            if (end - start + 1 >= minMatchCharLength) {
              indices.push([start, end]);
            }
            start = -1;
          }
        }
        if (matchmask[i - 1] && i - start >= minMatchCharLength) {
          indices.push([start, i - 1]);
        }
        return indices;
      }
      var MAX_BITS = 32;
      function search(text, pattern, patternAlphabet) {
        var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
        if (pattern.length > MAX_BITS) {
          throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
        }
        var patternLen = pattern.length;
        var textLen = text.length;
        var expectedLocation = Math.max(0, Math.min(location, textLen));
        var currentThreshold = threshold;
        var bestLocation = expectedLocation;
        var computeMatches = minMatchCharLength > 1 || includeMatches;
        var matchMask = computeMatches ? Array(textLen) : [];
        var index;
        while ((index = text.indexOf(pattern, bestLocation)) > -1) {
          var score = computeScore$1(pattern, {
            currentLocation: index,
            expectedLocation,
            distance,
            ignoreLocation
          });
          currentThreshold = Math.min(score, currentThreshold);
          bestLocation = index + patternLen;
          if (computeMatches) {
            var i = 0;
            while (i < patternLen) {
              matchMask[index + i] = 1;
              i += 1;
            }
          }
        }
        bestLocation = -1;
        var lastBitArr = [];
        var finalScore = 1;
        var binMax = patternLen + textLen;
        var mask = 1 << patternLen - 1;
        for (var _i = 0; _i < patternLen; _i += 1) {
          var binMin = 0;
          var binMid = binMax;
          while (binMin < binMid) {
            var _score2 = computeScore$1(pattern, {
              errors: _i,
              currentLocation: expectedLocation + binMid,
              expectedLocation,
              distance,
              ignoreLocation
            });
            if (_score2 <= currentThreshold) {
              binMin = binMid;
            } else {
              binMax = binMid;
            }
            binMid = Math.floor((binMax - binMin) / 2 + binMin);
          }
          binMax = binMid;
          var start = Math.max(1, expectedLocation - binMid + 1);
          var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
          var bitArr = Array(finish + 2);
          bitArr[finish + 1] = (1 << _i) - 1;
          for (var j = finish; j >= start; j -= 1) {
            var currentLocation = j - 1;
            var charMatch = patternAlphabet[text.charAt(currentLocation)];
            if (computeMatches) {
              matchMask[currentLocation] = +!!charMatch;
            }
            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
            if (_i) {
              bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
            }
            if (bitArr[j] & mask) {
              finalScore = computeScore$1(pattern, {
                errors: _i,
                currentLocation,
                expectedLocation,
                distance,
                ignoreLocation
              });
              if (finalScore <= currentThreshold) {
                currentThreshold = finalScore;
                bestLocation = currentLocation;
                if (bestLocation <= expectedLocation) {
                  break;
                }
                start = Math.max(1, 2 * expectedLocation - bestLocation);
              }
            }
          }
          var _score = computeScore$1(pattern, {
            errors: _i + 1,
            currentLocation: expectedLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (_score > currentThreshold) {
            break;
          }
          lastBitArr = bitArr;
        }
        var result = {
          isMatch: bestLocation >= 0,
          // Count exact matches (those with a score of 0) to be "almost" exact
          score: Math.max(1e-3, finalScore)
        };
        if (computeMatches) {
          var indices = convertMaskToIndices(matchMask, minMatchCharLength);
          if (!indices.length) {
            result.isMatch = false;
          } else if (includeMatches) {
            result.indices = indices;
          }
        }
        return result;
      }
      function createPatternAlphabet(pattern) {
        var mask = {};
        for (var i = 0, len = pattern.length; i < len; i += 1) {
          var _char = pattern.charAt(i);
          mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
        }
        return mask;
      }
      var BitapSearch = /* @__PURE__ */ function() {
        function BitapSearch2(pattern) {
          var _this = this;
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
          _classCallCheck(this, BitapSearch2);
          this.options = {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
          };
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.chunks = [];
          if (!this.pattern.length) {
            return;
          }
          var addChunk = function addChunk2(pattern2, startIndex2) {
            _this.chunks.push({
              pattern: pattern2,
              alphabet: createPatternAlphabet(pattern2),
              startIndex: startIndex2
            });
          };
          var len = this.pattern.length;
          if (len > MAX_BITS) {
            var i = 0;
            var remainder = len % MAX_BITS;
            var end = len - remainder;
            while (i < end) {
              addChunk(this.pattern.substr(i, MAX_BITS), i);
              i += MAX_BITS;
            }
            if (remainder) {
              var startIndex = len - MAX_BITS;
              addChunk(this.pattern.substr(startIndex), startIndex);
            }
          } else {
            addChunk(this.pattern, 0);
          }
        }
        _createClass(BitapSearch2, [{
          key: "searchIn",
          value: function searchIn(text) {
            var _this$options = this.options, isCaseSensitive = _this$options.isCaseSensitive, includeMatches = _this$options.includeMatches;
            if (!isCaseSensitive) {
              text = text.toLowerCase();
            }
            if (this.pattern === text) {
              var _result = {
                isMatch: true,
                score: 0
              };
              if (includeMatches) {
                _result.indices = [[0, text.length - 1]];
              }
              return _result;
            }
            var _this$options2 = this.options, location = _this$options2.location, distance = _this$options2.distance, threshold = _this$options2.threshold, findAllMatches = _this$options2.findAllMatches, minMatchCharLength = _this$options2.minMatchCharLength, ignoreLocation = _this$options2.ignoreLocation;
            var allIndices = [];
            var totalScore = 0;
            var hasMatches = false;
            this.chunks.forEach(function(_ref2) {
              var pattern = _ref2.pattern, alphabet = _ref2.alphabet, startIndex = _ref2.startIndex;
              var _search = search(text, pattern, alphabet, {
                location: location + startIndex,
                distance,
                threshold,
                findAllMatches,
                minMatchCharLength,
                includeMatches,
                ignoreLocation
              }), isMatch = _search.isMatch, score = _search.score, indices = _search.indices;
              if (isMatch) {
                hasMatches = true;
              }
              totalScore += score;
              if (isMatch && indices) {
                allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
              }
            });
            var result = {
              isMatch: hasMatches,
              score: hasMatches ? totalScore / this.chunks.length : 1
            };
            if (hasMatches && includeMatches) {
              result.indices = allIndices;
            }
            return result;
          }
        }]);
        return BitapSearch2;
      }();
      var BaseMatch = /* @__PURE__ */ function() {
        function BaseMatch2(pattern) {
          _classCallCheck(this, BaseMatch2);
          this.pattern = pattern;
        }
        _createClass(BaseMatch2, [{
          key: "search",
          value: function search2() {
          }
        }], [{
          key: "isMultiMatch",
          value: function isMultiMatch(pattern) {
            return getMatch(pattern, this.multiRegex);
          }
        }, {
          key: "isSingleMatch",
          value: function isSingleMatch(pattern) {
            return getMatch(pattern, this.singleRegex);
          }
        }]);
        return BaseMatch2;
      }();
      function getMatch(pattern, exp) {
        var matches = pattern.match(exp);
        return matches ? matches[1] : null;
      }
      var ExactMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(ExactMatch2, _BaseMatch);
        var _super = _createSuper(ExactMatch2);
        function ExactMatch2(pattern) {
          _classCallCheck(this, ExactMatch2);
          return _super.call(this, pattern);
        }
        _createClass(ExactMatch2, [{
          key: "search",
          value: function search2(text) {
            var isMatch = text === this.pattern;
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "exact";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^="(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^=(.*)$/;
          }
        }]);
        return ExactMatch2;
      }(BaseMatch);
      var InverseExactMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(InverseExactMatch2, _BaseMatch);
        var _super = _createSuper(InverseExactMatch2);
        function InverseExactMatch2(pattern) {
          _classCallCheck(this, InverseExactMatch2);
          return _super.call(this, pattern);
        }
        _createClass(InverseExactMatch2, [{
          key: "search",
          value: function search2(text) {
            var index = text.indexOf(this.pattern);
            var isMatch = index === -1;
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "inverse-exact";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^!"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^!(.*)$/;
          }
        }]);
        return InverseExactMatch2;
      }(BaseMatch);
      var PrefixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(PrefixExactMatch2, _BaseMatch);
        var _super = _createSuper(PrefixExactMatch2);
        function PrefixExactMatch2(pattern) {
          _classCallCheck(this, PrefixExactMatch2);
          return _super.call(this, pattern);
        }
        _createClass(PrefixExactMatch2, [{
          key: "search",
          value: function search2(text) {
            var isMatch = text.startsWith(this.pattern);
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, this.pattern.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "prefix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^\^(.*)$/;
          }
        }]);
        return PrefixExactMatch2;
      }(BaseMatch);
      var InversePrefixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(InversePrefixExactMatch2, _BaseMatch);
        var _super = _createSuper(InversePrefixExactMatch2);
        function InversePrefixExactMatch2(pattern) {
          _classCallCheck(this, InversePrefixExactMatch2);
          return _super.call(this, pattern);
        }
        _createClass(InversePrefixExactMatch2, [{
          key: "search",
          value: function search2(text) {
            var isMatch = !text.startsWith(this.pattern);
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "inverse-prefix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^!\^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^!\^(.*)$/;
          }
        }]);
        return InversePrefixExactMatch2;
      }(BaseMatch);
      var SuffixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(SuffixExactMatch2, _BaseMatch);
        var _super = _createSuper(SuffixExactMatch2);
        function SuffixExactMatch2(pattern) {
          _classCallCheck(this, SuffixExactMatch2);
          return _super.call(this, pattern);
        }
        _createClass(SuffixExactMatch2, [{
          key: "search",
          value: function search2(text) {
            var isMatch = text.endsWith(this.pattern);
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices: [text.length - this.pattern.length, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "suffix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^(.*)\$$/;
          }
        }]);
        return SuffixExactMatch2;
      }(BaseMatch);
      var InverseSuffixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(InverseSuffixExactMatch2, _BaseMatch);
        var _super = _createSuper(InverseSuffixExactMatch2);
        function InverseSuffixExactMatch2(pattern) {
          _classCallCheck(this, InverseSuffixExactMatch2);
          return _super.call(this, pattern);
        }
        _createClass(InverseSuffixExactMatch2, [{
          key: "search",
          value: function search2(text) {
            var isMatch = !text.endsWith(this.pattern);
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices: [0, text.length - 1]
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "inverse-suffix-exact";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^!"(.*)"\$$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^!(.*)\$$/;
          }
        }]);
        return InverseSuffixExactMatch2;
      }(BaseMatch);
      var FuzzyMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(FuzzyMatch2, _BaseMatch);
        var _super = _createSuper(FuzzyMatch2);
        function FuzzyMatch2(pattern) {
          var _this;
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
          _classCallCheck(this, FuzzyMatch2);
          _this = _super.call(this, pattern);
          _this._bitapSearch = new BitapSearch(pattern, {
            location,
            threshold,
            distance,
            includeMatches,
            findAllMatches,
            minMatchCharLength,
            isCaseSensitive,
            ignoreLocation
          });
          return _this;
        }
        _createClass(FuzzyMatch2, [{
          key: "search",
          value: function search2(text) {
            return this._bitapSearch.searchIn(text);
          }
        }], [{
          key: "type",
          get: function get2() {
            return "fuzzy";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^(.*)$/;
          }
        }]);
        return FuzzyMatch2;
      }(BaseMatch);
      var IncludeMatch = /* @__PURE__ */ function(_BaseMatch) {
        _inherits(IncludeMatch2, _BaseMatch);
        var _super = _createSuper(IncludeMatch2);
        function IncludeMatch2(pattern) {
          _classCallCheck(this, IncludeMatch2);
          return _super.call(this, pattern);
        }
        _createClass(IncludeMatch2, [{
          key: "search",
          value: function search2(text) {
            var location = 0;
            var index;
            var indices = [];
            var patternLen = this.pattern.length;
            while ((index = text.indexOf(this.pattern, location)) > -1) {
              location = index + patternLen;
              indices.push([index, location - 1]);
            }
            var isMatch = !!indices.length;
            return {
              isMatch,
              score: isMatch ? 0 : 1,
              indices
            };
          }
        }], [{
          key: "type",
          get: function get2() {
            return "include";
          }
        }, {
          key: "multiRegex",
          get: function get2() {
            return /^'"(.*)"$/;
          }
        }, {
          key: "singleRegex",
          get: function get2() {
            return /^'(.*)$/;
          }
        }]);
        return IncludeMatch2;
      }(BaseMatch);
      var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
      var searchersLen = searchers.length;
      var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
      var OR_TOKEN = "|";
      function parseQuery(pattern) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return pattern.split(OR_TOKEN).map(function(item) {
          var query = item.trim().split(SPACE_RE).filter(function(item2) {
            return item2 && !!item2.trim();
          });
          var results = [];
          for (var i = 0, len = query.length; i < len; i += 1) {
            var queryItem = query[i];
            var found = false;
            var idx = -1;
            while (!found && ++idx < searchersLen) {
              var searcher = searchers[idx];
              var token = searcher.isMultiMatch(queryItem);
              if (token) {
                results.push(new searcher(token, options));
                found = true;
              }
            }
            if (found) {
              continue;
            }
            idx = -1;
            while (++idx < searchersLen) {
              var _searcher = searchers[idx];
              var _token = _searcher.isSingleMatch(queryItem);
              if (_token) {
                results.push(new _searcher(_token, options));
                break;
              }
            }
          }
          return results;
        });
      }
      var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
      var ExtendedSearch = /* @__PURE__ */ function() {
        function ExtendedSearch2(pattern) {
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance;
          _classCallCheck(this, ExtendedSearch2);
          this.query = null;
          this.options = {
            isCaseSensitive,
            includeMatches,
            minMatchCharLength,
            findAllMatches,
            ignoreLocation,
            location,
            threshold,
            distance
          };
          this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
          this.query = parseQuery(this.pattern, this.options);
        }
        _createClass(ExtendedSearch2, [{
          key: "searchIn",
          value: function searchIn(text) {
            var query = this.query;
            if (!query) {
              return {
                isMatch: false,
                score: 1
              };
            }
            var _this$options = this.options, includeMatches = _this$options.includeMatches, isCaseSensitive = _this$options.isCaseSensitive;
            text = isCaseSensitive ? text : text.toLowerCase();
            var numMatches = 0;
            var allIndices = [];
            var totalScore = 0;
            for (var i = 0, qLen = query.length; i < qLen; i += 1) {
              var searchers2 = query[i];
              allIndices.length = 0;
              numMatches = 0;
              for (var j = 0, pLen = searchers2.length; j < pLen; j += 1) {
                var searcher = searchers2[j];
                var _searcher$search = searcher.search(text), isMatch = _searcher$search.isMatch, indices = _searcher$search.indices, score = _searcher$search.score;
                if (isMatch) {
                  numMatches += 1;
                  totalScore += score;
                  if (includeMatches) {
                    var type = searcher.constructor.type;
                    if (MultiMatchSet.has(type)) {
                      allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                    } else {
                      allIndices.push(indices);
                    }
                  }
                } else {
                  totalScore = 0;
                  numMatches = 0;
                  allIndices.length = 0;
                  break;
                }
              }
              if (numMatches) {
                var result = {
                  isMatch: true,
                  score: totalScore / numMatches
                };
                if (includeMatches) {
                  result.indices = allIndices;
                }
                return result;
              }
            }
            return {
              isMatch: false,
              score: 1
            };
          }
        }], [{
          key: "condition",
          value: function condition(_, options) {
            return options.useExtendedSearch;
          }
        }]);
        return ExtendedSearch2;
      }();
      var registeredSearchers = [];
      function register() {
        registeredSearchers.push.apply(registeredSearchers, arguments);
      }
      function createSearcher(pattern, options) {
        for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
          var searcherClass = registeredSearchers[i];
          if (searcherClass.condition(pattern, options)) {
            return new searcherClass(pattern, options);
          }
        }
        return new BitapSearch(pattern, options);
      }
      var LogicalOperator = {
        AND: "$and",
        OR: "$or"
      };
      var KeyType = {
        PATH: "$path",
        PATTERN: "$val"
      };
      var isExpression = function isExpression2(query) {
        return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
      };
      var isPath = function isPath2(query) {
        return !!query[KeyType.PATH];
      };
      var isLeaf = function isLeaf2(query) {
        return !isArray(query) && isObject(query) && !isExpression(query);
      };
      var convertToExplicit = function convertToExplicit2(query) {
        return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function(key) {
          return _defineProperty({}, key, query[key]);
        }));
      };
      function parse(query, options) {
        var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$auto = _ref3.auto, auto = _ref3$auto === void 0 ? true : _ref3$auto;
        var next = function next2(query2) {
          var keys = Object.keys(query2);
          var isQueryPath = isPath(query2);
          if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
            return next2(convertToExplicit(query2));
          }
          if (isLeaf(query2)) {
            var key = isQueryPath ? query2[KeyType.PATH] : keys[0];
            var pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
            if (!isString(pattern)) {
              throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
            }
            var obj = {
              keyId: createKeyId(key),
              pattern
            };
            if (auto) {
              obj.searcher = createSearcher(pattern, options);
            }
            return obj;
          }
          var node = {
            children: [],
            operator: keys[0]
          };
          keys.forEach(function(key2) {
            var value = query2[key2];
            if (isArray(value)) {
              value.forEach(function(item) {
                node.children.push(next2(item));
              });
            }
          });
          return node;
        };
        if (!isExpression(query)) {
          query = convertToExplicit(query);
        }
        return next(query);
      }
      function computeScore(results, _ref) {
        var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm, ignoreFieldNorm = _ref$ignoreFieldNorm === void 0 ? Config.ignoreFieldNorm : _ref$ignoreFieldNorm;
        results.forEach(function(result) {
          var totalScore = 1;
          result.matches.forEach(function(_ref2) {
            var key = _ref2.key, norm2 = _ref2.norm, score = _ref2.score;
            var weight = key ? key.weight : null;
            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
          });
          result.score = totalScore;
        });
      }
      function transformMatches(result, data) {
        var matches = result.matches;
        data.matches = [];
        if (!isDefined(matches)) {
          return;
        }
        matches.forEach(function(match) {
          if (!isDefined(match.indices) || !match.indices.length) {
            return;
          }
          var indices = match.indices, value = match.value;
          var obj = {
            indices,
            value
          };
          if (match.key) {
            obj.key = match.key.src;
          }
          if (match.idx > -1) {
            obj.refIndex = match.idx;
          }
          data.matches.push(obj);
        });
      }
      function transformScore(result, data) {
        data.score = result.score;
      }
      function format(results, docs) {
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$includeScore = _ref.includeScore, includeScore = _ref$includeScore === void 0 ? Config.includeScore : _ref$includeScore;
        var transformers = [];
        if (includeMatches)
          transformers.push(transformMatches);
        if (includeScore)
          transformers.push(transformScore);
        return results.map(function(result) {
          var idx = result.idx;
          var data = {
            item: docs[idx],
            refIndex: idx
          };
          if (transformers.length) {
            transformers.forEach(function(transformer) {
              transformer(result, data);
            });
          }
          return data;
        });
      }
      var Fuse$1 = /* @__PURE__ */ function() {
        function Fuse2(docs) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var index = arguments.length > 2 ? arguments[2] : void 0;
          _classCallCheck(this, Fuse2);
          this.options = _objectSpread2(_objectSpread2({}, Config), options);
          if (this.options.useExtendedSearch && false) {
            throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
          }
          this._keyStore = new KeyStore(this.options.keys);
          this.setCollection(docs, index);
        }
        _createClass(Fuse2, [{
          key: "setCollection",
          value: function setCollection(docs, index) {
            this._docs = docs;
            if (index && !(index instanceof FuseIndex)) {
              throw new Error(INCORRECT_INDEX_TYPE);
            }
            this._myIndex = index || createIndex(this.options.keys, this._docs, {
              getFn: this.options.getFn,
              fieldNormWeight: this.options.fieldNormWeight
            });
          }
        }, {
          key: "add",
          value: function add(doc) {
            if (!isDefined(doc)) {
              return;
            }
            this._docs.push(doc);
            this._myIndex.add(doc);
          }
        }, {
          key: "remove",
          value: function remove() {
            var predicate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
              return false;
            };
            var results = [];
            for (var i = 0, len = this._docs.length; i < len; i += 1) {
              var doc = this._docs[i];
              if (predicate(doc, i)) {
                this.removeAt(i);
                i -= 1;
                len -= 1;
                results.push(doc);
              }
            }
            return results;
          }
        }, {
          key: "removeAt",
          value: function removeAt(idx) {
            this._docs.splice(idx, 1);
            this._myIndex.removeAt(idx);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this._myIndex;
          }
        }, {
          key: "search",
          value: function search2(query) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? -1 : _ref$limit;
            var _this$options = this.options, includeMatches = _this$options.includeMatches, includeScore = _this$options.includeScore, shouldSort = _this$options.shouldSort, sortFn = _this$options.sortFn, ignoreFieldNorm = _this$options.ignoreFieldNorm;
            var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
            computeScore(results, {
              ignoreFieldNorm
            });
            if (shouldSort) {
              results.sort(sortFn);
            }
            if (isNumber(limit) && limit > -1) {
              results = results.slice(0, limit);
            }
            return format(results, this._docs, {
              includeMatches,
              includeScore
            });
          }
        }, {
          key: "_searchStringList",
          value: function _searchStringList(query) {
            var searcher = createSearcher(query, this.options);
            var records = this._myIndex.records;
            var results = [];
            records.forEach(function(_ref2) {
              var text = _ref2.v, idx = _ref2.i, norm2 = _ref2.n;
              if (!isDefined(text)) {
                return;
              }
              var _searcher$searchIn = searcher.searchIn(text), isMatch = _searcher$searchIn.isMatch, score = _searcher$searchIn.score, indices = _searcher$searchIn.indices;
              if (isMatch) {
                results.push({
                  item: text,
                  idx,
                  matches: [{
                    score,
                    value: text,
                    norm: norm2,
                    indices
                  }]
                });
              }
            });
            return results;
          }
        }, {
          key: "_searchLogical",
          value: function _searchLogical(query) {
            var _this = this;
            var expression = parse(query, this.options);
            var evaluate = function evaluate2(node, item, idx) {
              if (!node.children) {
                var keyId = node.keyId, searcher = node.searcher;
                var matches = _this._findMatches({
                  key: _this._keyStore.get(keyId),
                  value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
                  searcher
                });
                if (matches && matches.length) {
                  return [{
                    idx,
                    item,
                    matches
                  }];
                }
                return [];
              }
              var res = [];
              for (var i = 0, len = node.children.length; i < len; i += 1) {
                var child = node.children[i];
                var result = evaluate2(child, item, idx);
                if (result.length) {
                  res.push.apply(res, _toConsumableArray(result));
                } else if (node.operator === LogicalOperator.AND) {
                  return [];
                }
              }
              return res;
            };
            var records = this._myIndex.records;
            var resultMap = {};
            var results = [];
            records.forEach(function(_ref3) {
              var item = _ref3.$, idx = _ref3.i;
              if (isDefined(item)) {
                var expResults = evaluate(expression, item, idx);
                if (expResults.length) {
                  if (!resultMap[idx]) {
                    resultMap[idx] = {
                      idx,
                      item,
                      matches: []
                    };
                    results.push(resultMap[idx]);
                  }
                  expResults.forEach(function(_ref4) {
                    var _resultMap$idx$matche;
                    var matches = _ref4.matches;
                    (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
                  });
                }
              }
            });
            return results;
          }
        }, {
          key: "_searchObjectList",
          value: function _searchObjectList(query) {
            var _this2 = this;
            var searcher = createSearcher(query, this.options);
            var _this$_myIndex = this._myIndex, keys = _this$_myIndex.keys, records = _this$_myIndex.records;
            var results = [];
            records.forEach(function(_ref5) {
              var item = _ref5.$, idx = _ref5.i;
              if (!isDefined(item)) {
                return;
              }
              var matches = [];
              keys.forEach(function(key, keyIndex) {
                matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
                  key,
                  value: item[keyIndex],
                  searcher
                })));
              });
              if (matches.length) {
                results.push({
                  idx,
                  item,
                  matches
                });
              }
            });
            return results;
          }
        }, {
          key: "_findMatches",
          value: function _findMatches(_ref6) {
            var key = _ref6.key, value = _ref6.value, searcher = _ref6.searcher;
            if (!isDefined(value)) {
              return [];
            }
            var matches = [];
            if (isArray(value)) {
              value.forEach(function(_ref7) {
                var text2 = _ref7.v, idx = _ref7.i, norm3 = _ref7.n;
                if (!isDefined(text2)) {
                  return;
                }
                var _searcher$searchIn2 = searcher.searchIn(text2), isMatch2 = _searcher$searchIn2.isMatch, score2 = _searcher$searchIn2.score, indices2 = _searcher$searchIn2.indices;
                if (isMatch2) {
                  matches.push({
                    score: score2,
                    key,
                    value: text2,
                    idx,
                    norm: norm3,
                    indices: indices2
                  });
                }
              });
            } else {
              var text = value.v, norm2 = value.n;
              var _searcher$searchIn3 = searcher.searchIn(text), isMatch = _searcher$searchIn3.isMatch, score = _searcher$searchIn3.score, indices = _searcher$searchIn3.indices;
              if (isMatch) {
                matches.push({
                  score,
                  key,
                  value: text,
                  norm: norm2,
                  indices
                });
              }
            }
            return matches;
          }
        }]);
        return Fuse2;
      }();
      Fuse$1.version = "6.6.2";
      Fuse$1.createIndex = createIndex;
      Fuse$1.parseIndex = parseIndex;
      Fuse$1.config = Config;
      {
        Fuse$1.parseQuery = parse;
      }
      {
        register(ExtendedSearch);
      }
      var Fuse = Fuse$1;
      module.exports = Fuse;
    }
  });

  // pages/newtab/scripts/search.js
  var require_search = __commonJS({
    "pages/newtab/scripts/search.js"() {
      var Fuse = require_fuse_common();
      var { formValues, preventDefault } = require_forms();
      var { getBookmarks, subscribeBookmarks } = require_bookmarks();
      var { getShortcuts, subscribeShortcuts } = require_shortcuts();
      var searchEverythingContainer = document.querySelector("#search-everything");
      var searchInput = document.querySelector("#search-form input[name=search]");
      var searchForm = document.querySelector("#search-form");
      var getSearchOptions = () => searchEverythingContainer.querySelectorAll(".search-option");
      var updateSearchData = () => {
        const bookmarks = flattenData(getBookmarks());
        const shortcuts = flattenData(getShortcuts());
        searchEverythingContainer.innerHTML = [...bookmarks, ...shortcuts].map(
          (data) => `<div class="search-option" data-value="${data.link}" data-title="${data.title}"><h3>${data.title}</h3><h4>${data.link}</h4></div>`
        ).join("");
        Array.from(getSearchOptions()).forEach((option) => {
          option.addEventListener("mouseenter", () => {
            Array.from(getSearchOptions()).forEach(
              (option2) => option2.classList.remove("hover")
            );
            option.classList.add("hover");
          });
          option.addEventListener("click", (e) => {
            searchInput.value = option.dataset.value;
            const event = new Event("change", { bubbles: true });
            searchInput.dispatchEvent(event);
            searchForm.dispatchEvent(new Event("submit"));
          });
        });
      };
      var flattenData = (data) => {
        return data.reduce((result, data2) => {
          if (!data2.link) {
            return result;
          }
          if (data2.children) {
            return [...result, data2, ...flattenData(data2.children)];
          } else {
            return [...result, data2];
          }
        }, []);
      };
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          searchInput.value = "";
          searchInput.focus();
          searchEverythingContainer.classList.remove("show");
          Array.from(getSearchOptions()).forEach(
            (option) => option.classList.remove("hover")
          );
        }
        const options = Array.from(getSearchOptions()).filter(
          (option) => !option.classList.contains("hide")
        );
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (options.length === 0) {
            return;
          }
          const hoveredOption = options.find(
            (option) => option.classList.contains("hover")
          );
          if (hoveredOption) {
            const hoveredOptionIndex = options.indexOf(hoveredOption);
            const nextOption = options[hoveredOptionIndex + 1];
            if (nextOption) {
              hoveredOption.classList.remove("hover");
              nextOption.classList.add("hover");
            } else {
              hoveredOption.classList.remove("hover");
              options[0].classList.add("hover");
            }
          } else {
            options[0].classList.add("hover");
          }
          const newHoveredOption = options.find(
            (option) => option.classList.contains("hover")
          );
          if (newHoveredOption) {
            newHoveredOption.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (options.length === 0) {
            return;
          }
          const hoveredOption = options.find(
            (option) => option.classList.contains("hover")
          );
          if (hoveredOption) {
            const hoveredOptionIndex = options.indexOf(hoveredOption);
            const previousOption = options[hoveredOptionIndex - 1];
            if (previousOption) {
              hoveredOption.classList.remove("hover");
              previousOption.classList.add("hover");
            } else {
              hoveredOption.classList.remove("hover");
              options[options.length - 1].classList.add("hover");
            }
          } else {
            options[options.length - 1].classList.add("hover");
          }
          const newHoveredOption = options.find(
            (option) => option.classList.contains("hover")
          );
          if (newHoveredOption) {
            newHoveredOption.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        } else if (e.key === "Enter") {
          if (options.length === 0) {
            return;
          }
          const hoveredOption = options.find(
            (option) => option.classList.contains("hover")
          );
          if (hoveredOption) {
            hoveredOption.click();
          }
        }
      });
      var debounce = (fn, delay) => {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => fn(...args), delay);
        };
      };
      searchInput.addEventListener(
        "input",
        debounce((e) => {
          const query = e.target.value;
          if (!query) {
            searchEverythingContainer.classList.remove("show");
            return;
          }
          Array.from(getSearchOptions()).forEach(
            (option) => option.classList.remove("hover")
          );
          const options = Array.from(getSearchOptions()).map((option) => ({
            title: option.dataset.title,
            link: option.dataset.value,
            option
          }));
          const results = searchOptions(query, options);
          Array.from(getSearchOptions()).forEach(
            (option) => results.some(
              (result) => result.title === option.dataset.title && result.link === option.dataset.value
            ) ? option.classList.remove("hide") : option.classList.add("hide")
          );
          if (query && results.length > 0) {
            searchEverythingContainer.classList.add("show");
          }
        }, 200)
      );
      function searchOptions(query, data) {
        const results = data.filter((item) => {
          const title = item.title.toLowerCase();
          const link = item.link.toLowerCase();
          if (!link) {
            return false;
          }
          const q = query.toLowerCase();
          return title.includes(q) || link.includes(q);
        });
        const uniqueResults = [];
        results.forEach((result) => {
          if (!uniqueResults.some(
            (uniqueResult) => uniqueResult.title === result.title && uniqueResult.link === result.link
          )) {
            uniqueResults.push(result);
          }
        });
        return uniqueResults.slice(0, 10);
      }
      var search = () => {
        let query = formValues["search-form"].values.search;
        if (!query) {
          return;
        }
        if (isUrl(query)) {
          if (!query.startsWith("http://") && !query.startsWith("https://")) {
            query = "http://" + query;
          }
          const url = new URL(query);
          window.location.href = url;
        } else {
          const url = new URL("https://www.google.com/search");
          url.searchParams.set("q", query);
          window.location.href = url;
        }
      };
      function isUrl(str) {
        const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[^\s\/]+\.[^\s\/]+/;
        return urlRegex.test(str);
      }
      searchForm.addEventListener("submit", preventDefault(search));
      searchInput.focus();
      subscribeBookmarks(updateSearchData);
      subscribeShortcuts(updateSearchData);
    }
  });

  // pages/newtab/scripts/auth.js
  var require_auth = __commonJS({
    "pages/newtab/scripts/auth.js"(exports, module) {
      var { showModal, modalBackdrop, hideModal } = require_modal();
      var { store } = require_store();
      var handlebars = require_handlebars();
      var { querySelector } = require_dynamic();
      var { preventDefault, formValues } = require_forms();
      var loginButton = document.querySelector("#menu");
      var loginForm = querySelector("#login-form", modalBackdrop);
      var registerForm = querySelector("#register-form", modalBackdrop);
      var registerNavigateButton = querySelector("#register-button", modalBackdrop);
      var loginNavigateButton = querySelector("#login-button", modalBackdrop);
      var proceedNavigationButton = querySelector("#proceed", modalBackdrop);
      var backNavigationButton = querySelector("#back", modalBackdrop);
      var {
        get: getUser,
        set: setUser,
        subscribe: subscribeUser
      } = store({ uuid: "", username: "", token: "" }, "user");
      var {
        get: getRequestState,
        set: setRequestState,
        update: updateRequestState,
        subscribe: subscribeRequestState
      } = store({
        isShowingModal: false,
        loading: false,
        error: "",
        uuid: "",
        createdAccount: false,
        isCreatingAccount: false,
        isLoggingIn: false
      });
      subscribeRequestState(async (state) => {
        if (!state.isShowingModal) {
          hideModal();
          return;
        }
        hideModal();
        await showModal(handlebars.templates["auth-modal"](state));
        loginNavigateButton(
          (node) => node.addEventListener(
            "click",
            () => setRequestState({ isShowingModal: true, isLoggingIn: true })
          )
        );
        registerNavigateButton(
          (node) => node.addEventListener(
            "click",
            () => setRequestState({ isShowingModal: true, isCreatingAccount: true })
          )
        );
        proceedNavigationButton(
          (node) => node.addEventListener(
            "click",
            () => setRequestState({ isShowingModal: false })
          )
        );
        backNavigationButton(
          (node) => node.addEventListener(
            "click",
            () => setRequestState({
              isShowingModal: true
            })
          )
        );
        loginForm(
          (node) => node.addEventListener("submit", preventDefault(loginUser))
        );
        registerForm(
          (node) => node.addEventListener("submit", preventDefault(registerUser))
        );
      });
      loginButton.addEventListener("click", async () => {
        setRequestState({ isShowingModal: true });
      });
      var loginUser = async () => {
        updateRequestState({ loading: true, error: "" });
        const { username, password } = formValues["login-form"].values;
        const response = await fetch(`${"http://localhost:3000/api/v1"}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        });
        if (response.ok) {
          const { uuid, token } = await response.json();
          setRequestState({ isShowingModal: false });
          setUser({ uuid, username, token });
        } else {
          updateRequestState({ error: (await response.json()).error });
        }
        updateRequestState({ loading: false });
      };
      var registerUser = async () => {
        updateRequestState({ loading: true, error: "" });
        const { username, password } = formValues["register-form"].values;
        const response = await fetch(`${"http://localhost:3000/api/v1"}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        });
        if (response.ok) {
          const { uuid, token } = await response.json();
          setUser({ uuid, username, token });
          updateRequestState({ createdAccount: true, uuid });
        } else {
          updateRequestState({ error: (await response.json()).error });
        }
        updateRequestState({ loading: false });
      };
      module.exports = { subscribeUser };
    }
  });

  // pages/newtab/scripts/index.js
  require_shortcuts();
  require_bookmarks();
  require_add_shortcuts();
  require_tabs();
  require_search();
  require_auth();
  var timeState = document.querySelector("#greeting #time-state");
  var date = document.querySelector("#greeting #greeting-info #date");
  var time = document.querySelector("#greeting #greeting-info #time");
  var weather = document.querySelector("#greeting #greeting-info #weather");
  var timeMessages = {
    "19-24": "Good night!",
    "24-3": "Nice night, isn't it?",
    "3-8": "You should be sleeping...",
    "8-12": "Good morning!",
    "12-15": "Lunch time!",
    "15-19": "Nice Evening"
  };
  var timeStates = Object.keys(timeMessages).map((timeRange) => {
    let [start, end] = timeRange.split("-").map((d) => parseInt(d));
    start = start === 24 ? 0 : start;
    const arr = [];
    for (let i = start + 1; i <= end; i++) {
      arr.push(i === 24 ? 0 : i);
    }
    return [timeMessages[timeRange], arr];
  }).reduce((tmp, [message, hours]) => {
    hours.forEach((hour) => tmp[hour] = message);
    return tmp;
  }, {});
  var setTimeState = () => {
    const date2 = /* @__PURE__ */ new Date();
    const hour = date2.getHours();
    timeState.innerText = timeStates[hour];
  };
  setTimeState();
  setInterval(setTimeState, 6e4);
  var dateMap = {
    1: "1st",
    2: "2nd",
    3: "3rd"
  };
  var setDate = () => {
    const d = /* @__PURE__ */ new Date();
    date.innerHTML = d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).replace(/,\s\d+$/, "").replace(/(\d+)$/, (substr) => {
      const ret = substr.padStart(2, "0");
      return (ret[0] + (dateMap[ret[1]] || ret[1] + "th")).replace(/^0/, "");
    });
  };
  var setTime = () => {
    const d = /* @__PURE__ */ new Date();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    time.innerHTML = `${hours}:${minutes}`;
  };
  setDate();
  setTime();
  setInterval(() => {
    setDate();
    setTime();
  }, 1e3);
})();
/*! Bundled license information:

sortablejs/Sortable.min.js:
  (*! Sortable 1.15.0 - MIT | git://github.com/SortableJS/Sortable.git *)

handlebars/dist/handlebars.runtime.js:
  (**!
  
   @license
   handlebars v4.7.7
  
  Copyright (C) 2011-2019 by Yehuda Katz
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  
  *)
*/
//# sourceMappingURL=index.build.js.map
