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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1];\n            var desc = formChildren[0];\n            var file = formChildren[0];\n            var date = formChildren[0];\n            console.log(title);\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().bigDiv),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Photos: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"file\",\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().photo)\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 32\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Due Date: \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().date)\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 34\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hc3NpZ25tZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTzs7QUFFekIsUUFBUSxDQUFDRSxXQUFXLEdBQUcsQ0FBQzs7SUFDbkNGLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVEsU0FBRUMsZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQ3BFLEdBRDBFLENBQUM7WUFDL0QsR0FBSyxDQUFDQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU0sT0FBRUcsUUFBUTtZQUM3RCxHQUFLLENBQUNDLEtBQUssR0FBR0YsWUFBWSxDQUFDLENBQUMsRUFBRUcsS0FBSztZQUNuQyxHQUFLLENBQUNDLE9BQU8sR0FBR0osWUFBWSxDQUFDLENBQUM7WUFDOUIsR0FBSyxDQUFDSyxJQUFJLEdBQUdMLFlBQVksQ0FBQyxDQUFDO1lBQzNCLEdBQUssQ0FBQ00sSUFBSSxHQUFHTixZQUFZLENBQUMsQ0FBQztZQUMzQixHQUFLLENBQUNPLElBQUksR0FBR1AsWUFBWSxDQUFDLENBQUM7WUFDM0JRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxLQUFLO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSw2RUFDRFEsQ0FBRztRQUFDQyxTQUFTLEVBQUVoQix1RUFBUTs4RkFDbkJlLENBQUc7WUFBQ0MsU0FBUyxFQUFFaEIsd0VBQVM7OzRGQUNwQm1CLENBQUU7OEJBQUMsQ0FBaUI7Ozs7Ozs0RkFDcEJDLENBQUk7b0JBQUNDLEVBQUUsRUFBQyxDQUFNOztvR0FDVkMsQ0FBSzs0QkFBQ04sU0FBUyxFQUFFaEIsc0VBQU87NEJBQUV1QixJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQWtCOzRCQUFDQyxRQUFROzs7Ozs7b0dBQzdFSCxDQUFLOzRCQUFDTixTQUFTLEVBQUVoQix3RUFBUzs0QkFBRXVCLElBQUksRUFBQyxDQUFNOzRCQUFDQyxXQUFXLEVBQUMsQ0FBUzs0QkFBQ0MsUUFBUTs7Ozs7O29HQUN0RUgsQ0FBSzs0QkFBQ04sU0FBUyxFQUFFaEIscUVBQU07NEJBQUV1QixJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQXdCOzs7Ozs7b0dBQ3pFRSxDQUFDOztnQ0FBQyxDQUFROzRHQUFDSixDQUFLO29DQUFDQyxJQUFJLEVBQUMsQ0FBTTtvQ0FBQ1AsU0FBUyxFQUFFaEIsc0VBQU87Ozs7Ozs7Ozs7OztvR0FDL0MwQixDQUFDOztnQ0FBQyxDQUFVOzRHQUFDSixDQUFLO29DQUFDQyxJQUFJLEVBQUMsQ0FBTTtvQ0FBQ1AsU0FBUyxFQUFFaEIscUVBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFFcEQ0QixDQUFNO29CQUFDUCxFQUFFLEVBQUMsQ0FBUTtvQkFBQ0wsU0FBUyxFQUFFaEIsdUVBQVE7OEJBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkUsQ0FBQztHQTNCdUJDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzaWdubWVudHMuanM/OTAyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbm1lbnRzKCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtQ2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuY2hpbGRyZW5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybUNoaWxkcmVuWzBdLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBzdWJqZWN0ID0gZm9ybUNoaWxkcmVuWzFdXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gZm9ybUNoaWxkcmVuWzBdXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZm9ybUNoaWxkcmVuWzBdXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZm9ybUNoaWxkcmVuWzBdXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IC8+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+PC9wPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPXtpLnN1Ym1pdH0+QWRkIEFzc2lnbm1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImkiLCJhc3NpZ25tZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInZhbHVlIiwic3ViamVjdCIsImRlc2MiLCJmaWxlIiwiZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJiaWdEaXYiLCJmb3JtRGl2IiwiaDEiLCJmb3JtIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicCIsInBob3RvIiwiYnV0dG9uIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});