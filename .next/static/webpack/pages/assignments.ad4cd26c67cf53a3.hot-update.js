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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date\n                        });\n                    case 8:\n                        location.reload();\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.authService.onAuthStateChanged(function(user) {\n            if (user != null) {\n                _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").onSnapshot(function(querySnapshot) {\n                    var asses = [];\n                    querySnapshot.forEach(function(doc) {\n                        asses.push({\n                            title: doc.data().title,\n                            subject: doc.data().subject,\n                            desc: doc.data().description,\n                            file: doc.data().file,\n                            date: doc.data().date\n                        });\n                    });\n                    console.log(asses);\n                });\n            }\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx1RUFBUTtvQ0FBRWdFLE9BQU8sRUFBRS9CLFFBQVE7OENBQUUsQ0FBWTs7Ozs7Ozs7Ozs7O29HQUMxSXFCLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O29HQUNaSixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0YsRUFBRSxFQUFDLENBQU07NEJBQUNMLFNBQVMsRUFBRTVDLHFFQUFNOzs7Ozs7Ozs7Ozs7NEZBRWpEOEQsQ0FBTTtvQkFBQ2IsRUFBRSxFQUFDLENBQVE7b0JBQUNMLFNBQVMsRUFBRTVDLHVFQUFRO29CQUFFZ0UsT0FBTyxFQUFFMUQsSUFBSTs4QkFBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RixDQUFDO0dBbkV1QkgsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2V9IGZyb20gXCIuLi9mYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgYXN5bmMgZnVuY3Rpb24gYXNkZigpIHtcbiAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICAgICAgYXdhaXQgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYGFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICB9KVxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKGQpID0+IHtcbiAgICAgICAgICAgIHNldEZpbGUoZC50YXJnZXQucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF1dGhTZXJ2aWNlLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKFwiYXNzaWdubWVudHNcIikub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IGRvYy5kYXRhKCkuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBkb2MuZGF0YSgpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkb2MuZGF0YSgpLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzc2VzKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aWV3OjwvcD5cbiAgICAgICAgICAgICAgICAgICAge2ZpbGUmJiA8ZGl2IGNsYXNzTmFtZT17aS5wcmV2aWV3RGl2fSA+PGltZyBjbGFzc05hbWU9e2kucHJldmlld30gc3JjPXtmaWxlfSAvPjxidXR0b24gY2xhc3NOYW1lPXtpLnJlbW92ZX0gb25DbGljaz17b25SZW1vdmV9PlJlbW92ZSBQaG90bzwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2kuc3VibWl0fSBvbkNsaWNrPXthc2RmfT5BZGQgQXNzaWdubWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJhc3NpZ25tZW50cyIsImZpbGUiLCJzZXRGaWxlIiwiYXNkZiIsImZvcm1DaGlsZHJlbiIsInRpdGxlIiwic3ViamVjdCIsImRlc2MiLCJkYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkcmVuIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29sbGVjdGlvbiIsImFkZCIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25SZW1vdmUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwib25TbmFwc2hvdCIsInF1ZXJ5U25hcHNob3QiLCJhc3NlcyIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImJpZ0RpdiIsImZvcm1EaXYiLCJoMSIsImZvcm0iLCJpZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwIiwicGhvdG8iLCJhY2NlcHQiLCJvbkNoYW5nZSIsInByZXZpZXdEaXYiLCJpbWciLCJwcmV2aWV3Iiwic3JjIiwiYnV0dG9uIiwicmVtb3ZlIiwib25DbGljayIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});