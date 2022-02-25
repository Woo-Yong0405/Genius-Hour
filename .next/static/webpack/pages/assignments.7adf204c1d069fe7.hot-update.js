"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/assignments",{

/***/ "./pages/assignments.js":
/*!******************************!*\
  !*** ./pages/assignments.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var file = formChildren[3].value;\n            var date = formChildren[4].value;\n            console.log(title, subject, desc, file, date);\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().bigDiv),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Photos: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().photo)\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 32\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Due Date: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().date)\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 34\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hc3NpZ25tZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTzs7QUFFekIsUUFBUSxDQUFDRSxXQUFXLEdBQUcsQ0FBQzs7SUFDbkNGLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVEsU0FBRUMsZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQ3BFLEdBRDBFLENBQUM7WUFDL0QsR0FBSyxDQUFDQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU0sT0FBRUcsUUFBUTtZQUM3RCxHQUFLLENBQUNDLEtBQUssR0FBR0YsWUFBWSxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNuQyxHQUFLLENBQUNDLE9BQU8sR0FBR0osWUFBWSxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNyQyxHQUFLLENBQUNFLElBQUksR0FBR0wsWUFBWSxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNsQyxHQUFLLENBQUNHLElBQUksR0FBR04sWUFBWSxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNsQyxHQUFLLENBQUNJLElBQUksR0FBR1AsWUFBWSxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNsQ0ssT0FBTyxDQUFDQyxHQUFHLENBQUNQLEtBQUssRUFBRUUsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtRQUNoRCxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sNkVBQ0RHLENBQUc7UUFBQ0MsU0FBUyxFQUFFaEIsdUVBQVE7OEZBQ25CZSxDQUFHO1lBQUNDLFNBQVMsRUFBRWhCLHdFQUFTOzs0RkFDcEJtQixDQUFFOzhCQUFDLENBQWlCOzs7Ozs7NEZBQ3BCQyxDQUFJO29CQUFDQyxFQUFFLEVBQUMsQ0FBTTs7b0dBQ1ZDLENBQUs7NEJBQUNOLFNBQVMsRUFBRWhCLHNFQUFPOzRCQUFFdUIsSUFBSSxFQUFDLENBQU07NEJBQUNDLFdBQVcsRUFBQyxDQUFrQjs0QkFBQ0MsUUFBUTs7Ozs7O29HQUM3RUgsQ0FBSzs0QkFBQ04sU0FBUyxFQUFFaEIsd0VBQVM7NEJBQUV1QixJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQVM7NEJBQUNDLFFBQVE7Ozs7OztvR0FDdEVILENBQUs7NEJBQUNOLFNBQVMsRUFBRWhCLHFFQUFNOzRCQUFFdUIsSUFBSSxFQUFDLENBQU07NEJBQUNDLFdBQVcsRUFBQyxDQUF3Qjs7Ozs7O29HQUN6RUUsQ0FBQzs7Z0NBQUMsQ0FBUTs0R0FBQ0osQ0FBSztvQ0FBQ0MsSUFBSSxFQUFDLENBQU07b0NBQUNQLFNBQVMsRUFBRWhCLHNFQUFPOzs7Ozs7Ozs7Ozs7b0dBQy9DMEIsQ0FBQzs7Z0NBQUMsQ0FBVTs0R0FBQ0osQ0FBSztvQ0FBQ0MsSUFBSSxFQUFDLENBQU07b0NBQUNQLFNBQVMsRUFBRWhCLHFFQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBRXBENEIsQ0FBTTtvQkFBQ1AsRUFBRSxFQUFDLENBQVE7b0JBQUNMLFNBQVMsRUFBRWhCLHVFQUFROzhCQUFFLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZFLENBQUM7R0EzQnVCQyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fzc2lnbm1lbnRzLmpzPzkwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBpIGZyb20gXCIuL2Fzc2lnbm1lbnRzLm1vZHVsZS5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25tZW50cygpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNoaWxkcmVuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGZvcm1DaGlsZHJlblswXS52YWx1ZVxuICAgICAgICAgICAgY29uc3Qgc3ViamVjdCA9IGZvcm1DaGlsZHJlblsxXS52YWx1ZVxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGZvcm1DaGlsZHJlblsyXS52YWx1ZVxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZvcm1DaGlsZHJlblszXS52YWx1ZVxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGZvcm1DaGlsZHJlbls0XS52YWx1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2codGl0bGUsIHN1YmplY3QsIGRlc2MsIGZpbGUsIGRhdGUpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPXtpLnBob3RvfSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT17aS5kYXRlfSAvPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJpIiwiYXNzaWdubWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1DaGlsZHJlbiIsImNoaWxkcmVuIiwidGl0bGUiLCJ2YWx1ZSIsInN1YmplY3QiLCJkZXNjIiwiZmlsZSIsImRhdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmlnRGl2IiwiZm9ybURpdiIsImgxIiwiZm9ybSIsImlkIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJwaG90byIsImJ1dHRvbiIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});