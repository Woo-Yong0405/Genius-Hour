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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date,\n                            author: _fb__WEBPACK_IMPORTED_MODULE_3__.authService.currentUser.displayName\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var bigDiv = document.getElementById(\"bidDiv\");\n            var dolts = document.getElementsByClassName(\"asdf\");\n            dolts[0].remove;\n            for(var b = 0; b < dolts.length; b++){\n                dolts[b].remove();\n            }\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            for(var a = 0; a < asdfasdf.length; a++){\n                var bigDiv1 = document.getElementById(\"bidDiv\");\n                var p = document.createElement(\"p\");\n                p.innerText = asdfasdf[a].author;\n                p.classList.add(\"asdf\");\n                p.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv));\n                bigDiv1.appendChild(p);\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 74,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRGLENBQUM7R0E3RXVCSCxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fzc2lnbm1lbnRzLmpzPzkwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgaSBmcm9tIFwiLi9hc3NpZ25tZW50cy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7YXV0aFNlcnZpY2UsIGRiU2VydmljZX0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBhc3luYyBmdW5jdGlvbiBhc2RmKCkge1xuICAgICAgICBsZXQgZm9ybUNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNoaWxkcmVuXG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1DaGlsZHJlblswXS52YWx1ZVxuICAgICAgICBsZXQgc3ViamVjdCA9IGZvcm1DaGlsZHJlblsxXS52YWx1ZVxuICAgICAgICBsZXQgZGVzYyA9IGZvcm1DaGlsZHJlblsyXS52YWx1ZVxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKVxuICAgICAgICBhd2FpdCBkYlNlcnZpY2UuY29sbGVjdGlvbihgQXNzaWdubWVudHNgKS5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICBhdXRob3I6IGF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKGQpID0+IHtcbiAgICAgICAgICAgIHNldEZpbGUoZC50YXJnZXQucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKFwiQXNzaWdubWVudHNcIikub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmlnRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWREaXZcIilcbiAgICAgICAgICAgIGNvbnN0IGRvbHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFzZGZcIilcbiAgICAgICAgICAgIGRvbHRzWzBdLnJlbW92ZVxuICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGI8ZG9sdHMubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICBkb2x0c1tiXS5yZW1vdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFzZGZhc2RmID0gW107XG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGFzZGZhc2RmLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogZG9jLmRhdGEoKS5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiBkb2MuZGF0YSgpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBkb2MuZGF0YSgpLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRvYy5kYXRhKCkuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBkb2MuZGF0YSgpLmF1dGhvclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGE8YXNkZmFzZGYubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBwLmlubmVyVGV4dCA9IGFzZGZhc2RmW2FdLmF1dGhvcjtcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoXCJhc2RmXCIpO1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZChpLmZvcm1EaXYpO1xuICAgICAgICAgICAgICAgIGJpZ0Rpdi5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9IGlkPVwiYmlkRGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17aS5waG90b30gYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBvbkNsaWNrPXtvblJlbW92ZX0+UmVtb3ZlIFBob3RvPC9idXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzc05hbWU9e2kuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9IG9uQ2xpY2s9e2FzZGZ9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJhdXRoU2VydmljZSIsImRiU2VydmljZSIsImFzc2lnbm1lbnRzIiwiZmlsZSIsInNldEZpbGUiLCJhc2RmIiwiZm9ybUNoaWxkcmVuIiwidGl0bGUiLCJzdWJqZWN0IiwiZGVzYyIsImRhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0aW9uIiwiYWRkIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwib25GaWxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJkIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIm9uUmVtb3ZlIiwib25TbmFwc2hvdCIsInF1ZXJ5U25hcHNob3QiLCJiaWdEaXYiLCJkb2x0cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmUiLCJiIiwibGVuZ3RoIiwiYXNkZmFzZGYiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJhIiwicCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJjbGFzc0xpc3QiLCJmb3JtRGl2IiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwaG90byIsImFjY2VwdCIsIm9uQ2hhbmdlIiwicHJldmlld0RpdiIsImltZyIsInByZXZpZXciLCJzcmMiLCJidXR0b24iLCJvbkNsaWNrIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});