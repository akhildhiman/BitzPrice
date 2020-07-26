webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/home/akhil/Desktop/BitzPrice/components/Prices.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Prices = function Prices(_ref) {\n  _s();\n\n  var bpiData = _ref.bpiData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"USD\"),\n      currency = _useState[0],\n      setCurrency = _useState[1];\n\n  var bpi = bpiData.bpi;\n  return currency ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"list-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"li\", {\n    className: \"list-group-item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Bitcoin rate for \", bpi[currency].description, \" :\", __jsx(\"span\", {\n    className: \"badge badge-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, bpi[currency].code), __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, bpi[currency].rate))), __jsx(\"select\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, \"onChange=\", function (e) {\n    return setCurrency(e.target.value);\n  }, \"value=\", currency, \"className=\\\"form-control\\\"\", __jsx(\"option\", {\n    value: \"USD\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"USD\"), __jsx(\"option\", {\n    value: \"GBP\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"GBP\"), __jsx(\"option\", {\n    value: \"EUR\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"EUR\"))) : null;\n};\n\n_s(Prices, \"mZOo+M/8Cx3D1iWsGz7XC1WyjwA=\");\n\n_c = Prices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices); // class Prices extends React.Component {\n//   state = {\n//     currency: \"USD\",\n//   }\n//   render() {\n//     console.log(this.props)\n//     const { currency } = this.state\n//     const { bpi } = this.props.bpiData\n//     return currency ? (\n//       <div>\n//         <ul className=\"list-group\">\n//           <li className=\"list-group-item\">\n//             Bitcoin rate for {bpi[this.state.currency].description} :\n//             <span className=\"badge badge-primary\">{bpi[currency].code}</span>\n//             <strong>{bpi[currency].rate}</strong>\n//           </li>\n//         </ul>\n//         <select\n//           className=\"form-control\"\n//           onChange={(e) => this.setState({ currency: e.target.value })}\n//         >\n//           <option value=\"USD\">USD</option>\n//           <option value=\"GBP\">GBP</option>\n//           <option value=\"EUR\">EUR</option>\n//         </select>\n//       </div>\n//     ) : null\n//   }\n// }\n// export default Prices\n\nvar _c;\n\n$RefreshReg$(_c, \"Prices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlcy5qcz9iZTJkIl0sIm5hbWVzIjpbIlByaWNlcyIsImJwaURhdGEiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJicGkiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxLQUFELENBRFY7QUFBQSxNQUN2QkMsUUFEdUI7QUFBQSxNQUNiQyxXQURhOztBQUU5QixNQUFNQyxHQUFHLEdBQUlKLE9BQU8sQ0FBQ0ksR0FBckI7QUFFQSxTQUFPRixRQUFRLEdBQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQ29CRSxHQUFHLENBQUNGLFFBQUQsQ0FBSCxDQUFjRyxXQURsQyxRQUVFO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDRCxHQUFHLENBQUNGLFFBQUQsQ0FBSCxDQUFjSSxJQUFyRCxDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTRixHQUFHLENBQUNGLFFBQUQsQ0FBSCxDQUFjSyxJQUF2QixDQUhGLENBREYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1ksVUFBQ0MsQ0FBRDtBQUFBLFdBQU9MLFdBQVcsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxHQURaLFlBRVNSLFFBRlQsZ0NBSUU7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkYsRUFLRTtBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRixFQU1FO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5GLENBVEYsQ0FEYSxHQW1CWCxJQW5CSjtBQW9CRCxDQXhCRDs7R0FBTUgsTTs7S0FBQUEsTTtBQTBCU0EscUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJpY2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBQcmljZXMgPSAoeyBicGlEYXRhIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZShcIlVTRFwiKVxuICBjb25zdCBicGkgID0gYnBpRGF0YS5icGlcblxuICByZXR1cm4gY3VycmVuY3kgPyAoXG4gICAgPGRpdj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbiAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHticGlbY3VycmVuY3ldLmRlc2NyaXB0aW9ufSA6XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGlbY3VycmVuY3ldLmNvZGV9PC9zcGFuPlxuICAgICAgICAgIDxzdHJvbmc+e2JwaVtjdXJyZW5jeV0ucmF0ZX08L3N0cm9uZz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxzZWxlY3Q+XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VycmVuY3koZS50YXJnZXQudmFsdWUpfVxuICAgICAgICB2YWx1ZT17Y3VycmVuY3l9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiPkdCUDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzXG5cbi8vIGNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIHN0YXRlID0ge1xuLy8gICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4vLyAgICAgY29uc3QgeyBjdXJyZW5jeSB9ID0gdGhpcy5zdGF0ZVxuLy8gICAgIGNvbnN0IHsgYnBpIH0gPSB0aGlzLnByb3BzLmJwaURhdGFcbi8vICAgICByZXR1cm4gY3VycmVuY3kgPyAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuLy8gICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cbi8vICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige2JwaVt0aGlzLnN0YXRlLmN1cnJlbmN5XS5kZXNjcmlwdGlvbn0gOlxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnticGlbY3VycmVuY3ldLmNvZGV9PC9zcGFuPlxuLy8gICAgICAgICAgICAgPHN0cm9uZz57YnBpW2N1cnJlbmN5XS5yYXRlfTwvc3Ryb25nPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgIDwvdWw+XG5cbi8vICAgICAgICAgPHNlbGVjdFxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4vLyAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVuY3k6IGUudGFyZ2V0LnZhbHVlIH0pfVxuLy8gICAgICAgICA+XG4vLyAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRDwvb3B0aW9uPlxuLy8gICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQlBcIj5HQlA8L29wdGlvbj5cbi8vICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XG4vLyAgICAgICAgIDwvc2VsZWN0PlxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgKSA6IG51bGxcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBQcmljZXNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})