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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.getElementById(\"submit\").addEventListener(\"click\", _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date, fileref;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = formChildren[7].value;\n                        if (!file1) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        fileref = _fb__WEBPACK_IMPORTED_MODULE_3__.storageService.ref().child(\"assignment/\".concat((0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)()));\n                        _ctx.next = 9;\n                        return fileref.putString(file1, \"data_url\");\n                    case 9:\n                        location.reload();\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        })));\n    });\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().bigDiv),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 53,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"8G+3E1ORbUFTeNuWbJr5S6TS0lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUVwQyxzRUFBTzs0QkFBRWdELE1BQU0sRUFBQyxDQUFTOzRCQUFDQyxRQUFRLEVBQUV6QixZQUFZOzs7Ozs7b0dBQzdFc0IsQ0FBQztzQ0FBQyxDQUFROzs7Ozs7d0JBQ1Z6QyxLQUFJLGdGQUFJOEIsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFcEMsMkVBQVk7OzRHQUFJbUQsQ0FBRztvQ0FBQ2YsU0FBUyxFQUFFcEMsd0VBQVM7b0NBQUVxRCxHQUFHLEVBQUVoRCxLQUFJOzs7Ozs7NEdBQUtpRCxDQUFNO29DQUFDbEIsU0FBUyxFQUFFcEMsdUVBQVE7b0NBQUV3RCxPQUFPLEVBQUV0QixRQUFROzhDQUFFLENBQVk7Ozs7Ozs7Ozs7OztvR0FDMUlZLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O29HQUNaSixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ1AsU0FBUyxFQUFFcEMscUVBQU07Ozs7Ozs7Ozs7Ozs0RkFFdkNzRCxDQUFNO29CQUFDYixFQUFFLEVBQUMsQ0FBUTtvQkFBQ0wsU0FBUyxFQUFFcEMsdUVBQVE7OEJBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkUsQ0FBQztHQXREdUJJLFdBQVc7O1FBRWhCRCxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCJcbmltcG9ydCBpIGZyb20gXCIuL2Fzc2lnbm1lbnRzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHtkYlNlcnZpY2UsIHN0b3JhZ2VTZXJ2aWNlfSBmcm9tIFwiLi4vZmJcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYygpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtQ2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuY2hpbGRyZW5cbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGZvcm1DaGlsZHJlblswXS52YWx1ZVxuICAgICAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgICAgIGxldCBkZXNjID0gZm9ybUNoaWxkcmVuWzJdLnZhbHVlXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGZvcm1DaGlsZHJlbls3XS52YWx1ZVxuICAgICAgICAgICAgLyogZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYGFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICB9KSAqL1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcmVmID0gc3RvcmFnZVNlcnZpY2UucmVmKCkuY2hpbGQoYGFzc2lnbm1lbnQvJHt1dWlkdjQoKX1gKVxuICAgICAgICAgICAgICAgIGF3YWl0IGZpbGVyZWYucHV0U3RyaW5nKGZpbGUsIFwiZGF0YV91cmxcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKGQpID0+IHtcbiAgICAgICAgICAgIHNldEZpbGUoZC50YXJnZXQucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17aS5waG90b30gYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBvbkNsaWNrPXtvblJlbW92ZX0+UmVtb3ZlIFBob3RvPC9idXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9e2kuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiaSIsImRiU2VydmljZSIsInN0b3JhZ2VTZXJ2aWNlIiwidXNlUm91dGVyIiwiYXNzaWdubWVudHMiLCJmaWxlIiwic2V0RmlsZSIsInJvdXRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybUNoaWxkcmVuIiwidGl0bGUiLCJzdWJqZWN0IiwiZGVzYyIsImRhdGUiLCJmaWxlcmVmIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInJlZiIsImNoaWxkIiwicHV0U3RyaW5nIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25SZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJiaWdEaXYiLCJmb3JtRGl2IiwiaDEiLCJmb3JtIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicCIsInBob3RvIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwcmV2aWV3RGl2IiwiaW1nIiwicHJldmlldyIsInNyYyIsImJ1dHRvbiIsInJlbW92ZSIsIm9uQ2xpY2siLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});