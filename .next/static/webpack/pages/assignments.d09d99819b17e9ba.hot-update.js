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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date\n                        });\n                    case 8:\n                        location.reload();\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.authService.onAuthStateChanged(function(user) {\n            if (user) {\n                _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").onSnapshot(function(querySnapshot) {\n                    var asses = [];\n                    querySnapshot.forEach(function(doc) {\n                        asses.push({\n                            title: doc.data().title,\n                            subject: doc.data().subject,\n                            desc: doc.data().description,\n                            file: doc.data().file,\n                            date: doc.data().date\n                        });\n                        console.log(asses);\n                    });\n                });\n            }\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFZ0UsT0FBTyxFQUFFL0IsUUFBUTs4Q0FBRSxDQUFZOzs7Ozs7Ozs7Ozs7b0dBQzFJcUIsQ0FBQztzQ0FBQyxDQUFVOzs7Ozs7b0dBQ1pKLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDRixFQUFFLEVBQUMsQ0FBTTs0QkFBQ0wsU0FBUyxFQUFFNUMscUVBQU07Ozs7Ozs7Ozs7Ozs0RkFFakQ4RCxDQUFNO29CQUFDYixFQUFFLEVBQUMsQ0FBUTtvQkFBQ0wsU0FBUyxFQUFFNUMsdUVBQVE7b0JBQUVnRSxPQUFPLEVBQUUxRCxJQUFJOzhCQUFFLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRGLENBQUM7R0FuRXVCSCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fzc2lnbm1lbnRzLmpzPzkwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgaSBmcm9tIFwiLi9hc3NpZ25tZW50cy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7YXV0aFNlcnZpY2UsIGRiU2VydmljZX0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBhc3luYyBmdW5jdGlvbiBhc2RmKCkge1xuICAgICAgICBsZXQgZm9ybUNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNoaWxkcmVuXG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1DaGlsZHJlblswXS52YWx1ZVxuICAgICAgICBsZXQgc3ViamVjdCA9IGZvcm1DaGlsZHJlblsxXS52YWx1ZVxuICAgICAgICBsZXQgZGVzYyA9IGZvcm1DaGlsZHJlblsyXS52YWx1ZVxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxuICAgICAgICBhd2FpdCBkYlNlcnZpY2UuY29sbGVjdGlvbihgYXNzaWdubWVudHNgKS5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIH0pXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZCkgPT4ge1xuICAgICAgICAgICAgc2V0RmlsZShkLnRhcmdldC5yZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICB9XG4gICAgY29uc3Qgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHNldEZpbGUobnVsbClcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXV0aFNlcnZpY2Uub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKFwiYXNzaWdubWVudHNcIikub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IGRvYy5kYXRhKCkuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBkb2MuZGF0YSgpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkb2MuZGF0YSgpLmRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhc3NlcylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmZvcm1EaXZ9PlxuICAgICAgICAgICAgICAgIDxoMT5BZGQgYW4gQXNzaWdubWVudDwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IFRpdGxlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5zdWJqZWN0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuZGVzY30gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QaG90b3M6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPXtpLnBob3RvfSBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJldmlldzo8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtmaWxlJiYgPGRpdiBjbGFzc05hbWU9e2kucHJldmlld0Rpdn0gPjxpbWcgY2xhc3NOYW1lPXtpLnByZXZpZXd9IHNyYz17ZmlsZX0gLz48YnV0dG9uIGNsYXNzTmFtZT17aS5yZW1vdmV9IG9uQ2xpY2s9e29uUmVtb3ZlfT5SZW1vdmUgUGhvdG88L2J1dHRvbj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDxwPkR1ZSBEYXRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzTmFtZT17aS5kYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPXtpLnN1Ym1pdH0gb25DbGljaz17YXNkZn0+QWRkIEFzc2lnbm1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaSIsImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwiYXNzaWdubWVudHMiLCJmaWxlIiwic2V0RmlsZSIsImFzZGYiLCJmb3JtQ2hpbGRyZW4iLCJ0aXRsZSIsInN1YmplY3QiLCJkZXNjIiwiZGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZHJlbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbGxlY3Rpb24iLCJhZGQiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwicmVsb2FkIiwib25GaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIm9uUmVtb3ZlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYXNzZXMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJiaWdEaXYiLCJmb3JtRGl2IiwiaDEiLCJmb3JtIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicCIsInBob3RvIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwcmV2aWV3RGl2IiwiaW1nIiwicHJldmlldyIsInNyYyIsImJ1dHRvbiIsInJlbW92ZSIsIm9uQ2xpY2siLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});