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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    function asdf() {\n        return _asdf.apply(this, arguments);\n    }\n    function _asdf() {\n        _asdf = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var formChildren, title, subject, desc, date;\n            return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        formChildren = document.getElementById(\"form\").children;\n                        title = formChildren[0].value;\n                        subject = formChildren[1].value;\n                        desc = formChildren[2].value;\n                        date = document.getElementById(\"date\").value;\n                        console.log(date);\n                        _ctx.next = 8;\n                        return _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"assignments\").add({\n                            title: title,\n                            subject: subject,\n                            description: desc,\n                            file: file1,\n                            date: date\n                        });\n                    case 8:\n                        location.reload();\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _asdf.apply(this, arguments);\n    }\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    var counter = 0;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"fuck you\");\n    /* authService.onAuthStateChanged((user) => {\n            if (user) {\n                dbService.collection(\"assignments\").onSnapshot((querySnapshot) => {\n                    let asses = [];\n                    querySnapshot.forEach((doc) => {\n                        asses.push({\n                            title: doc.data().title,\n                            subject: doc.data().subject,\n                            desc: doc.data().description,\n                            file: doc.data().file,\n                            date: doc.data().date\n                        })\n                    })\n                    for (let a = 0; a<asses.length; a++) {\n                        console.log(asses[a].file)\n                    }\n                })\n            }\n        }) */ });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 69,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    onClick: asdf,\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 73,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hc3NpZ25tZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixRQUFRLENBQUNLLFdBQVcsR0FBRyxDQUFDOztJQUNuQyxHQUFLLENBQW1CSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1QkssS0FBSSxHQUFhTCxHQUFZLEtBQXZCTSxPQUFPLEdBQUlOLEdBQVk7YUFDckJPLElBQUk7ZUFBSkEsS0FBSTs7YUFBSkEsS0FBSTtRQUFKQSxLQUFJLGtLQUFuQixRQUFRLFdBQWMsQ0FBQztnQkFDZkMsWUFBWSxFQUNaQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUEMsSUFBSSxFQUNKQyxJQUFJOzs7O3dCQUpKSixZQUFZLEdBQUdLLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU0sT0FBRUMsUUFBUTt3QkFDdkROLEtBQUssR0FBR0QsWUFBWSxDQUFDLENBQUMsRUFBRVEsS0FBSzt3QkFDN0JOLE9BQU8sR0FBR0YsWUFBWSxDQUFDLENBQUMsRUFBRVEsS0FBSzt3QkFDL0JMLElBQUksR0FBR0gsWUFBWSxDQUFDLENBQUMsRUFBRVEsS0FBSzt3QkFDNUJKLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBTSxPQUFFRSxLQUFLO3dCQUNoREMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUk7OytCQUNWVCxxREFBb0IsQ0FBRSxDQUFXLGNBQUdpQixHQUFHLENBQUMsQ0FBQzs0QkFDM0NYLEtBQUssRUFBRUEsS0FBSzs0QkFDWkMsT0FBTyxFQUFFQSxPQUFPOzRCQUNoQlcsV0FBVyxFQUFFVixJQUFJOzRCQUNqQk4sSUFBSSxFQUFFQSxLQUFJOzRCQUNWTyxJQUFJLEVBQUVBLElBQUk7d0JBQ2QsQ0FBQzs7d0JBQ0RVLFFBQVEsQ0FBQ0MsTUFBTTs7Ozs7O1FBQ25CLENBQUM7ZUFmY2hCLEtBQUk7O0lBZ0JuQixHQUFLLENBQUNpQixZQUFZLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztRQUM3QixHQUFLLENBQUNwQixJQUFJLEdBQUdvQixLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7UUFDakMsR0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDQyxVQUFVO1FBQzdCRCxNQUFNLENBQUNFLFNBQVMsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1lBQ3ZCekIsT0FBTyxDQUFDeUIsQ0FBQyxDQUFDTCxNQUFNLENBQUNNLE1BQU07UUFDM0IsQ0FBQztRQUNESixNQUFNLENBQUNLLGFBQWEsQ0FBQzVCLElBQUk7SUFDN0IsQ0FBQztJQUNELEdBQUssQ0FBQzZCLFFBQVEsR0FBRyxRQUNyQixHQUQyQixDQUFDO1FBQ3BCNUIsT0FBTyxDQUFDLElBQUk7SUFDaEIsQ0FBQztJQUNELEdBQUcsQ0FBQzZCLE9BQU8sR0FBRyxDQUFDO0lBQ2ZwQyxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNia0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVTtJQUN0QixFQWtCSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQUEsR0FFVCxDQUFDO0lBQ0QsTUFBTSw2RUFDRGtCLENBQUc7UUFBQ0MsU0FBUyxFQUFFcEMsdUVBQVE7OEZBQ25CbUMsQ0FBRztZQUFDQyxTQUFTLEVBQUVwQyx3RUFBUzs7NEZBQ3BCdUMsQ0FBRTs4QkFBQyxDQUFpQjs7Ozs7OzRGQUNwQkMsQ0FBSTtvQkFBQ0MsRUFBRSxFQUFDLENBQU07O29HQUNWQyxDQUFLOzRCQUFDTixTQUFTLEVBQUVwQyxzRUFBTzs0QkFBRTJDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxXQUFXLEVBQUMsQ0FBa0I7NEJBQUNDLFFBQVE7Ozs7OztvR0FDN0VILENBQUs7NEJBQUNOLFNBQVMsRUFBRXBDLHdFQUFTOzRCQUFFMkMsSUFBSSxFQUFDLENBQU07NEJBQUNDLFdBQVcsRUFBQyxDQUFTOzRCQUFDQyxRQUFROzs7Ozs7b0dBQ3RFSCxDQUFLOzRCQUFDTixTQUFTLEVBQUVwQyxxRUFBTTs0QkFBRTJDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxXQUFXLEVBQUMsQ0FBd0I7Ozs7OztvR0FDekVFLENBQUM7c0NBQUMsQ0FBUTs7Ozs7O29HQUNWSixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ1AsU0FBUyxFQUFFcEMsc0VBQU87NEJBQUVnRCxNQUFNLEVBQUMsQ0FBUzs0QkFBQ0MsUUFBUSxFQUFFMUIsWUFBWTs7Ozs7O29HQUM3RXVCLENBQUM7c0NBQUMsQ0FBUTs7Ozs7O3dCQUNWMUMsS0FBSSxnRkFBSStCLENBQUc7NEJBQUNDLFNBQVMsRUFBRXBDLDJFQUFZOzs0R0FBSW1ELENBQUc7b0NBQUNmLFNBQVMsRUFBRXBDLHdFQUFTO29DQUFFcUQsR0FBRyxFQUFFakQsS0FBSTs7Ozs7OzRHQUFLa0QsQ0FBTTtvQ0FBQ2xCLFNBQVMsRUFBRXBDLHVFQUFRO29DQUFFd0QsT0FBTyxFQUFFdkIsUUFBUTs4Q0FBRSxDQUFZOzs7Ozs7Ozs7Ozs7b0dBQzFJYSxDQUFDO3NDQUFDLENBQVU7Ozs7OztvR0FDWkosQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNGLEVBQUUsRUFBQyxDQUFNOzRCQUFDTCxTQUFTLEVBQUVwQyxxRUFBTTs7Ozs7Ozs7Ozs7OzRGQUVqRHNELENBQU07b0JBQUNiLEVBQUUsRUFBQyxDQUFRO29CQUFDTCxTQUFTLEVBQUVwQyx1RUFBUTtvQkFBRXdELE9BQU8sRUFBRWxELElBQUk7OEJBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEYsQ0FBQztHQXhFdUJILFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzaWdubWVudHMuanM/OTAyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBpIGZyb20gXCIuL2Fzc2lnbm1lbnRzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHthdXRoU2VydmljZSwgZGJTZXJ2aWNlfSBmcm9tIFwiLi4vZmJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25tZW50cygpIHtcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGFzZGYoKSB7XG4gICAgICAgIGxldCBmb3JtQ2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuY2hpbGRyZW5cbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybUNoaWxkcmVuWzBdLnZhbHVlXG4gICAgICAgIGxldCBzdWJqZWN0ID0gZm9ybUNoaWxkcmVuWzFdLnZhbHVlXG4gICAgICAgIGxldCBkZXNjID0gZm9ybUNoaWxkcmVuWzJdLnZhbHVlXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGUpXG4gICAgICAgIGF3YWl0IGRiU2VydmljZS5jb2xsZWN0aW9uKGBhc3NpZ25tZW50c2ApLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgfSlcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IChkKSA9PiB7XG4gICAgICAgICAgICBzZXRGaWxlKGQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cbiAgICBjb25zdCBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0RmlsZShudWxsKVxuICAgIH1cbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmdWNrIHlvdVwiKVxuICAgICAgICAvKiBhdXRoU2VydmljZS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJhc3NpZ25tZW50c1wiKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogZG9jLmRhdGEoKS5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogZG9jLmRhdGEoKS5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRvYy5kYXRhKCkuZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGE8YXNzZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzc2VzW2FdLmZpbGUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSAqL1xuICAgICAgICBcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17aS5waG90b30gYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBvbkNsaWNrPXtvblJlbW92ZX0+UmVtb3ZlIFBob3RvPC9idXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzc05hbWU9e2kuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9IG9uQ2xpY2s9e2FzZGZ9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJhdXRoU2VydmljZSIsImRiU2VydmljZSIsImFzc2lnbm1lbnRzIiwiZmlsZSIsInNldEZpbGUiLCJhc2RmIiwiZm9ybUNoaWxkcmVuIiwidGl0bGUiLCJzdWJqZWN0IiwiZGVzYyIsImRhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb2xsZWN0aW9uIiwiYWRkIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInJlbG9hZCIsIm9uRmlsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJvblJlbW92ZSIsImNvdW50ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJiaWdEaXYiLCJmb3JtRGl2IiwiaDEiLCJmb3JtIiwiaWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwicCIsInBob3RvIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwcmV2aWV3RGl2IiwiaW1nIiwicHJldmlldyIsInNyYyIsImJ1dHRvbiIsInJlbW92ZSIsIm9uQ2xpY2siLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});