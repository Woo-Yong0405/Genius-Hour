"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var _pages_home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home.module.css */ \"./pages/home.module.css\");\n/* harmony import */ var _pages_home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction home(prop) {\n    _s();\n    var asdf = false;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.authService.onAuthStateChanged(function(user) {\n            console.log(user.uid);\n            if (user) {\n                asdf = true;\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: asdf ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_pages_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().n),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome Back!\"\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n            lineNumber: 19,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_pages_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().n),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Welcome!\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"If you are already a member, log in \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login\",\n                            children: \"here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 60\n                        }, this),\n                        \". If you are new, sign up \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/signup\",\n                            children: \"here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 117\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/index.js\",\n            lineNumber: 23,\n            columnNumber: 17\n        }, this)\n    }, void 0, false));\n};\n_s(home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSztBQUNFO0FBQ0s7O0FBRXpCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDaEMsR0FBRyxDQUFDQyxJQUFJLEdBQUcsS0FBSztJQUNoQkwsZ0RBQVMsQ0FBQyxRQUNaLEdBRGdCLENBQUM7UUFDWEMsK0RBQThCLENBQUMsUUFBUSxDQUFQTSxJQUFJLEVBQUssQ0FBQztZQUN0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0csR0FBRztZQUNwQixFQUFFLEVBQUVILElBQUksRUFBRSxDQUFDO2dCQUNQRixJQUFJLEdBQUcsSUFBSTtZQUNmLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU07a0JBRUdBLElBQUksK0VBQ0FNLENBQUc7WUFBQ0MsU0FBUyxFQUFFVixpRUFBRztrR0FDZFksQ0FBRTswQkFBQyxDQUFhOzs7Ozs7Ozs7OytGQUdwQkgsQ0FBRztZQUFDQyxTQUFTLEVBQUVWLGlFQUFHOzs0RkFDZFksQ0FBRTs4QkFBQyxDQUFROzs7Ozs7NEZBQ1hDLENBQUM7O3dCQUFDLENBQW9DO29HQUFDaEIsa0RBQUk7NEJBQUNpQixJQUFJLEVBQUMsQ0FBUTtzQ0FBQyxDQUFJOzs7Ozs7d0JBQU8sQ0FBMEI7b0dBQUNqQixrREFBSTs0QkFBQ2lCLElBQUksRUFBQyxDQUFTO3NDQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0ksQ0FBQztHQXhCdUJiLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCI7XG5pbXBvcnQgaSBmcm9tIFwiLi4vcGFnZXMvaG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUocHJvcCkge1xuICAgIGxldCBhc2RmID0gZmFsc2U7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGF1dGhTZXJ2aWNlLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci51aWQpXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGFzZGYgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7YXNkZiA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5ufT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgQmFjayE8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kubn0gPlxuICAgICAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSE8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD5JZiB5b3UgYXJlIGFscmVhZHkgYSBtZW1iZXIsIGxvZyBpbiA8TGluayBocmVmPVwiL2xvZ2luXCI+aGVyZTwvTGluaz4uIElmIHlvdSBhcmUgbmV3LCBzaWduIHVwIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+aGVyZTwvTGluaz48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJhdXRoU2VydmljZSIsImkiLCJob21lIiwicHJvcCIsImFzZGYiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInVpZCIsImRpdiIsImNsYXNzTmFtZSIsIm4iLCJoMSIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});