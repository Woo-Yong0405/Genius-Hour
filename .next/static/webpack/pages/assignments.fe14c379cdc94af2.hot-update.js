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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar countera = 0;\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").onSnapshot(function(querySnapshot) {\n            var asses = [];\n            querySnapshot.forEach(function(doc) {\n                asses.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date\n                });\n            });\n            for(var a = 0; a < asses.length; a++){\n                var bigDiv = document.getElementById(\"bidDiv\");\n                bigDiv.append(asses[a].title);\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTdDLDJFQUFZOzs0R0FBSTJELENBQUc7b0NBQUNkLFNBQVMsRUFBRTdDLHdFQUFTO29DQUFFNkQsR0FBRyxFQUFFeEQsS0FBSTs7Ozs7OzRHQUFLeUQsQ0FBTTtvQ0FBQ2pCLFNBQVMsRUFBRTdDLHVFQUFRO29DQUFFZ0UsT0FBTyxFQUFFaEMsUUFBUTs4Q0FBRSxDQUFZOzs7Ozs7Ozs7Ozs7b0dBQzFJc0IsQ0FBQztzQ0FBQyxDQUFVOzs7Ozs7b0dBQ1pKLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDTCxFQUFFLEVBQUMsQ0FBTTs0QkFBQ0QsU0FBUyxFQUFFN0MscUVBQU07Ozs7Ozs7Ozs7Ozs0RkFFakQ4RCxDQUFNO29CQUFDaEIsRUFBRSxFQUFDLENBQVE7b0JBQUNELFNBQVMsRUFBRTdDLHVFQUFRO29CQUFFZ0UsT0FBTyxFQUFFekQsSUFBSTs4QkFBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RixDQUFDO0dBakV1QkgsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2V9IGZyb20gXCIuLi9mYlwiXG5cbmxldCBjb3VudGVyYSA9IDBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBhc3luYyBmdW5jdGlvbiBhc2RmKCkge1xuICAgICAgICBsZXQgZm9ybUNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNoaWxkcmVuXG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1DaGlsZHJlblswXS52YWx1ZVxuICAgICAgICBsZXQgc3ViamVjdCA9IGZvcm1DaGlsZHJlblsxXS52YWx1ZVxuICAgICAgICBsZXQgZGVzYyA9IGZvcm1DaGlsZHJlblsyXS52YWx1ZVxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxuICAgICAgICBhd2FpdCBkYlNlcnZpY2UuY29sbGVjdGlvbihgYXNzaWdubWVudHNgKS5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZCkgPT4ge1xuICAgICAgICAgICAgc2V0RmlsZShkLnRhcmdldC5yZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICB9XG4gICAgY29uc3Qgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHNldEZpbGUobnVsbClcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJhc3NpZ25tZW50c1wiKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNzZXMgPSBbXTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXNzZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBkb2MuZGF0YSgpLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZG9jLmRhdGEoKS5kYXRlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxhc3Nlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICAgICAgYmlnRGl2LmFwcGVuZChhc3Nlc1thXS50aXRsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9IGlkPVwiYmlkRGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17aS5waG90b30gYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBvbkNsaWNrPXtvblJlbW92ZX0+UmVtb3ZlIFBob3RvPC9idXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzc05hbWU9e2kuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9IG9uQ2xpY2s9e2FzZGZ9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJhdXRoU2VydmljZSIsImRiU2VydmljZSIsImNvdW50ZXJhIiwiYXNzaWdubWVudHMiLCJmaWxlIiwic2V0RmlsZSIsImFzZGYiLCJmb3JtQ2hpbGRyZW4iLCJ0aXRsZSIsInN1YmplY3QiLCJkZXNjIiwiZGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZHJlbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbGxlY3Rpb24iLCJhZGQiLCJkZXNjcmlwdGlvbiIsIm9uRmlsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJvblJlbW92ZSIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYXNzZXMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJhIiwibGVuZ3RoIiwiYmlnRGl2IiwiYXBwZW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJmb3JtRGl2IiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJwaG90byIsImFjY2VwdCIsIm9uQ2hhbmdlIiwicHJldmlld0RpdiIsImltZyIsInByZXZpZXciLCJzcmMiLCJidXR0b24iLCJyZW1vdmUiLCJvbkNsaWNrIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});