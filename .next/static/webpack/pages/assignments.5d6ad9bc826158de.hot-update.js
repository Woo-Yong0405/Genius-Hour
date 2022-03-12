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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date,\n                            author: _fb__WEBPACK_IMPORTED_MODULE_3__.authService.currentUser\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var bigDiv = document.getElementById(\"bidDiv\");\n            var dolts = document.getElementsByClassName(\"asdf\");\n            for(var b = 0; b < dolts.length; b++){\n                dolts[b].remove();\n            }\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date\n                });\n            });\n            for(var a = 0; a < asdfasdf.length; a++){\n                var bigDiv1 = document.getElementById(\"bidDiv\");\n                var p = document.createElement(\"p\");\n                p.innerText = asdfasdf[a].title;\n                p.classList.add(\"asdf\");\n                p.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv));\n                bigDiv1.appendChild(p);\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 72,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2V9IGZyb20gXCIuLi9mYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgYXN5bmMgZnVuY3Rpb24gYXNkZigpIHtcbiAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICAgICAgYXdhaXQgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgYXV0aG9yOiBhdXRoU2VydmljZS5jdXJyZW50VXNlcixcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IChkKSA9PiB7XG4gICAgICAgICAgICBzZXRGaWxlKGQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cbiAgICBjb25zdCBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RmlsZShudWxsKVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihcIkFzc2lnbm1lbnRzXCIpLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICBjb25zdCBkb2x0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhc2RmXCIpXG4gICAgICAgICAgICBmb3IgKGxldCBiID0gMDsgYjxkb2x0cy5sZW5ndGg7IGIrKykge1xuICAgICAgICAgICAgICAgIGRvbHRzW2JdLnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXNkZmFzZGYgPSBbXTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXNkZmFzZGYucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBkb2MuZGF0YSgpLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZG9jLmRhdGEoKS5kYXRlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxhc2RmYXNkZi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gYXNkZmFzZGZbYV0udGl0bGU7XG4gICAgICAgICAgICAgICAgcC5jbGFzc0xpc3QuYWRkKFwiYXNkZlwiKTtcbiAgICAgICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoaS5mb3JtRGl2KTtcbiAgICAgICAgICAgICAgICBiaWdEaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fSBpZD1cImJpZERpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aWV3OjwvcD5cbiAgICAgICAgICAgICAgICAgICAge2ZpbGUmJiA8ZGl2IGNsYXNzTmFtZT17aS5wcmV2aWV3RGl2fSA+PGltZyBjbGFzc05hbWU9e2kucHJldmlld30gc3JjPXtmaWxlfSAvPjxidXR0b24gY2xhc3NOYW1lPXtpLnJlbW92ZX0gb25DbGljaz17b25SZW1vdmV9PlJlbW92ZSBQaG90bzwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2kuc3VibWl0fSBvbkNsaWNrPXthc2RmfT5BZGQgQXNzaWdubWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJhc3NpZ25tZW50cyIsImZpbGUiLCJzZXRGaWxlIiwiYXNkZiIsImZvcm1DaGlsZHJlbiIsInRpdGxlIiwic3ViamVjdCIsImRlc2MiLCJkYXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkcmVuIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29sbGVjdGlvbiIsImFkZCIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwiY3VycmVudFVzZXIiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25SZW1vdmUiLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImJpZ0RpdiIsImRvbHRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImIiLCJsZW5ndGgiLCJyZW1vdmUiLCJhc2RmYXNkZiIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsImEiLCJwIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImZvcm1EaXYiLCJhcHBlbmRDaGlsZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInBob3RvIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwcmV2aWV3RGl2IiwiaW1nIiwicHJldmlldyIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});