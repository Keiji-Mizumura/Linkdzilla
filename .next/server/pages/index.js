(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/sample-component.jsx":
/*!*****************************************!*\
  !*** ./components/sample-component.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\keiji\\OneDrive\\Documents\\Programming\\nextjs\\linkdzilla-dev\\Webpage\\components\\sample-component.jsx";

function SampleComponent(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "A BUTTON"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: props.alert,
      children: "CLICK ME!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SampleComponent);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sample_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sample-component */ "./components/sample-component.jsx");

var _jsxFileName = "C:\\Users\\keiji\\OneDrive\\Documents\\Programming\\nextjs\\linkdzilla-dev\\Webpage\\pages\\index.js";



function Home() {
  function alertMessage() {
    alert("HELLO WORLD HAHAHA");
  }

  function alertMessage1() {
    alert("HELLO HAHAHAHA");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Linkdzilla"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "HI I'm JOSHUA"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Linkdzilla :D by linkdzilla.com"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "IS THIS WORKING?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sample_component__WEBPACK_IMPORTED_MODULE_2__.default, {
      alert: alertMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sample_component__WEBPACK_IMPORTED_MODULE_2__.default, {
      alert: alertMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sample_component__WEBPACK_IMPORTED_MODULE_2__.default, {
      alert: alertMessage1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZHppbGxhLy4vY29tcG9uZW50cy9zYW1wbGUtY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly9saW5rZHppbGxhLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlua2R6aWxsYS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2xpbmtkemlsbGEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJTYW1wbGVDb21wb25lbnQiLCJwcm9wcyIsImFsZXJ0IiwiSG9tZSIsImFsZXJ0TWVzc2FnZSIsImFsZXJ0TWVzc2FnZTEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUErQjtBQUMzQixzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFRLGFBQU8sRUFBRUEsS0FBSyxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0FBRUQsK0RBQWVGLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7O0FBR0EsU0FBU0csSUFBVCxHQUFlO0FBRWIsV0FBU0MsWUFBVCxHQUF1QjtBQUNyQkYsU0FBSyxDQUFDLG9CQUFELENBQUw7QUFDRDs7QUFFRCxXQUFTRyxhQUFULEdBQXdCO0FBQ3RCSCxTQUFLLENBQUMsZ0JBQUQsQ0FBTDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFLDhEQUFDLGlFQUFEO0FBQWlCLFdBQUssRUFBRUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0UsOERBQUMsaUVBQUQ7QUFBaUIsV0FBSyxFQUFFQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRSw4REFBQyxpRUFBRDtBQUFpQixXQUFLLEVBQUVDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVELCtEQUFlRixJQUFmLEU7Ozs7Ozs7Ozs7O0FDL0JBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2FtcGxlQ29tcG9uZW50KHByb3BzKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkEgQlVUVE9OPC9oMT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5hbGVydH0+Q0xJQ0sgTUUhPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbXBsZUNvbXBvbmVudDsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuXHJcbmltcG9ydCBTYW1wbGVDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2FtcGxlLWNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKXtcclxuXHJcbiAgZnVuY3Rpb24gYWxlcnRNZXNzYWdlKCl7XHJcbiAgICBhbGVydChcIkhFTExPIFdPUkxEIEhBSEFIQVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFsZXJ0TWVzc2FnZTEoKXtcclxuICAgIGFsZXJ0KFwiSEVMTE8gSEFIQUhBSEFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TGlua2R6aWxsYTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxoMT5ISSBJJ20gSk9TSFVBPC9oMT5cclxuICAgICAgPGgxPkxpbmtkemlsbGEgOkQgYnkgbGlua2R6aWxsYS5jb208L2gxPlxyXG4gICAgICA8aDE+SVMgVEhJUyBXT1JLSU5HPzwvaDE+XHJcbiAgICAgIDxTYW1wbGVDb21wb25lbnQgYWxlcnQ9e2FsZXJ0TWVzc2FnZX0vPlxyXG4gICAgICA8U2FtcGxlQ29tcG9uZW50IGFsZXJ0PXthbGVydE1lc3NhZ2V9Lz5cclxuICAgICAgPFNhbXBsZUNvbXBvbmVudCBhbGVydD17YWxlcnRNZXNzYWdlMX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9