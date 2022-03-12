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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date, bigDiv;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date\n                        });\n                    case 8:\n                        bigDiv = document.getElementById(\"bidDiv\");\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date\n                });\n            });\n            for(var a = 0; a < asdfasdf.length; a++){\n                var bigDiv = document.getElementById(\"bidDiv\");\n                var dolts = document.getElementsByClassName(\"asdf\");\n                for(var a1 = 0; a1 < dolts.length; a1++){\n                    bigDiv.removeChild(dolts[a1]);\n                }\n                var p = document.createElement(\"p\");\n                p.innerText = asdfasdf[a].title;\n                p.classList.add(\"asdf\");\n                bigDiv.appendChild(p);\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQ0wsU0FBUyxFQUFFbkQsd0VBQVM7NEJBQUV5RCxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQVM7NEJBQUNDLFFBQVE7Ozs7OztvR0FDdEVILENBQUs7NEJBQUNMLFNBQVMsRUFBRW5ELHFFQUFNOzRCQUFFeUQsSUFBSSxFQUFDLENBQU07NEJBQUNDLFdBQVcsRUFBQyxDQUF3Qjs7Ozs7O29HQUN6RWIsQ0FBQztzQ0FBQyxDQUFROzs7Ozs7b0dBQ1ZXLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDTixTQUFTLEVBQUVuRCxzRUFBTzs0QkFBRTZELE1BQU0sRUFBQyxDQUFTOzRCQUFDQyxRQUFRLEVBQUV4QyxZQUFZOzs7Ozs7b0dBQzdFdUIsQ0FBQztzQ0FBQyxDQUFROzs7Ozs7d0JBQ1Z6QyxLQUFJLGdGQUFJOEMsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFbkQsMkVBQVk7OzRHQUFJZ0UsQ0FBRztvQ0FBQ2IsU0FBUyxFQUFFbkQsd0VBQVM7b0NBQUVrRSxHQUFHLEVBQUU5RCxLQUFJOzs7Ozs7NEdBQUsrRCxDQUFNO29DQUFDaEIsU0FBUyxFQUFFbkQsdUVBQVE7b0NBQUVxRSxPQUFPLEVBQUVyQyxRQUFROzhDQUFFLENBQVk7Ozs7Ozs7Ozs7OztvR0FDMUlhLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O29HQUNaVyxDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0wsRUFBRSxFQUFDLENBQU07NEJBQUNELFNBQVMsRUFBRW5ELHFFQUFNOzs7Ozs7Ozs7Ozs7NEZBRWpEbUUsQ0FBTTtvQkFBQ2YsRUFBRSxFQUFDLENBQVE7b0JBQUNELFNBQVMsRUFBRW5ELHVFQUFRO29CQUFFcUUsT0FBTyxFQUFFL0QsSUFBSTs4QkFBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RixDQUFDO0dBekV1QkgsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2V9IGZyb20gXCIuLi9mYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgYXN5bmMgZnVuY3Rpb24gYXNkZigpIHtcbiAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZSlcbiAgICAgICAgYXdhaXQgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgIH1cbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKGQpID0+IHtcbiAgICAgICAgICAgIHNldEZpbGUoZC50YXJnZXQucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKFwiQXNzaWdubWVudHNcIikub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFzZGZhc2RmID0gW107XG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGFzZGZhc2RmLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogZG9jLmRhdGEoKS5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiBkb2MuZGF0YSgpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBkb2MuZGF0YSgpLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IGRvYy5kYXRhKCkuZGF0ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGE8YXNkZmFzZGYubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFzZGZcIilcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxkb2x0cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBiaWdEaXYucmVtb3ZlQ2hpbGQoZG9sdHNbYV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICBwLmlubmVyVGV4dCA9IGFzZGZhc2RmW2FdLnRpdGxlO1xuICAgICAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZChcImFzZGZcIik7XG4gICAgICAgICAgICAgICAgYmlnRGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0gaWQ9XCJiaWREaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmZvcm1EaXZ9PlxuICAgICAgICAgICAgICAgIDxoMT5BZGQgYW4gQXNzaWdubWVudDwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IFRpdGxlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5zdWJqZWN0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuZGVzY30gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QaG90b3M6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPXtpLnBob3RvfSBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJldmlldzo8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtmaWxlJiYgPGRpdiBjbGFzc05hbWU9e2kucHJldmlld0Rpdn0gPjxpbWcgY2xhc3NOYW1lPXtpLnByZXZpZXd9IHNyYz17ZmlsZX0gLz48YnV0dG9uIGNsYXNzTmFtZT17aS5yZW1vdmV9IG9uQ2xpY2s9e29uUmVtb3ZlfT5SZW1vdmUgUGhvdG88L2J1dHRvbj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDxwPkR1ZSBEYXRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzTmFtZT17aS5kYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPXtpLnN1Ym1pdH0gb25DbGljaz17YXNkZn0+QWRkIEFzc2lnbm1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaSIsImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwiYXNzaWdubWVudHMiLCJmaWxlIiwic2V0RmlsZSIsImFzZGYiLCJmb3JtQ2hpbGRyZW4iLCJ0aXRsZSIsInN1YmplY3QiLCJkZXNjIiwiZGF0ZSIsImJpZ0RpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZHJlbiIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNvbGxlY3Rpb24iLCJhZGQiLCJkZXNjcmlwdGlvbiIsIm9uRmlsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJvblJlbW92ZSIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYXNkZmFzZGYiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJhIiwibGVuZ3RoIiwiZG9sdHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJwIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFwcGVuZENoaWxkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJmb3JtRGl2IiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInBob3RvIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwcmV2aWV3RGl2IiwiaW1nIiwicHJldmlldyIsInNyYyIsImJ1dHRvbiIsInJlbW92ZSIsIm9uQ2xpY2siLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});