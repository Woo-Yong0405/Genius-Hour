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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var storageRef = _fb__WEBPACK_IMPORTED_MODULE_3__.storageService.ref();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), nomask = ref1[0], setNomask = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), resp = ref2[0], setResp = ref2[1];\n    var sued = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file;\n                if (asdfasdf[a].file != \"\") {\n                    storageRef.child(\"images/\" + asdfasdf[a].file).getMetadata().then(function(metadata) {\n                        console.log(metadata);\n                    });\n                }\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            console.log(sued);\n            _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: sued,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_3__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n        var ds = document.getElementById(\"asd\");\n        ds.addEventListener(\"change\", function(event) {\n            if (nomask) {\n                storageRef.child(\"images/\" + nomask).delete();\n            }\n            var afile = event.target.files[0];\n            setNomask(afile.name);\n            var reader = new FileReader();\n            function loadEnd(d) {\n                return _loadEnd.apply(this, arguments);\n            }\n            function _loadEnd() {\n                _loadEnd = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(d) {\n                    var result, response;\n                    return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                result = d.target.result;\n                                _ctx.next = 3;\n                                return storageRef.child(\"images/\" + afile.name).putString(result, 'data_url');\n                            case 3:\n                                response = _ctx.sent;\n                                response.ref.getDownloadURL().then(function(asdf) {\n                                    sued = asdf.toString();\n                                });\n                                setFile(result);\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _loadEnd.apply(this, arguments);\n            }\n            reader.onloadend = function(d) {\n                loadEnd(d);\n            };\n            reader.readAsDataURL(afile);\n            console.log(afile.name);\n        });\n        var asdfasdfasdf = document.getElementById(\"asdfasdfasdf\");\n        asdfasdfasdf.addEventListener(\"click\", function() {\n            storageRef.child(\"images/\" + nomask).delete();\n            setFile(null);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            id: \"asd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    id: \"asdfasdfasdf\",\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 99,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"ovxT9bvUWGFnhH8Xfv0T3zr/SEs=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUs7Ozs7OztvR0FDL0RnRSxDQUFDO3NDQUFDLENBQVE7Ozs7Ozt3QkFDVjdFLElBQUksZ0ZBQUlPLENBQUc7NEJBQUMrRCxTQUFTLEVBQUU3RSwyRUFBWTs7NEdBQUl3RixDQUFHO29DQUFDWCxTQUFTLEVBQUU3RSx3RUFBUztvQ0FBRTBDLEdBQUcsRUFBRW5DLElBQUk7Ozs7Ozs0R0FBS21GLENBQU07b0NBQUNiLFNBQVMsRUFBRTdFLHVFQUFRO29DQUFFb0IsRUFBRSxFQUFDLENBQWM7OENBQUMsQ0FBWTs7Ozs7Ozs7Ozs7O29HQUN6SWdFLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O29HQUNaSixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQzdELEVBQUUsRUFBQyxDQUFNOzRCQUFDeUQsU0FBUyxFQUFFN0UscUVBQU07Ozs7Ozs7Ozs7Ozs0RkFFakQwRixDQUFNO29CQUFDdEUsRUFBRSxFQUFDLENBQVE7b0JBQUN5RCxTQUFTLEVBQUU3RSx1RUFBUTs4QkFBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RSxDQUFDO0dBdEd1QkksV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2UsIHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JhZ2VTZXJ2aWNlLnJlZigpO1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW25vbWFzaywgc2V0Tm9tYXNrXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Jlc3AsIHNldFJlc3BdID0gdXNlU3RhdGUoXCJcIilcbiAgICBsZXQgc3VlZCA9IFwiXCI7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaS5hc3NpZ25tZW50KVxuICAgICAgICBkaXYuaWQgPSBcImFzc2lnbm1lbnRcIlxuICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihcIkFzc2lnbm1lbnRzXCIpLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGxldCBhc2RmYXNkZiA9IFtdO1xuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBhc2RmYXNkZi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IGRvYy5kYXRhKCkuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogZG9jLmRhdGEoKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZG9jLmRhdGEoKS5maWxlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkb2MuZGF0YSgpLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZG9jLmRhdGEoKS5hdXRob3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxhc2RmYXNkZi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpdHRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgbGl0dGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJhc2RmXCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKGkuZm9ybURpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzZGZhc2RmW2FdLmZpbGU7XG4gICAgICAgICAgICAgICAgaWYgKGFzZGZhc2RmW2FdLmZpbGUgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUmVmLmNoaWxkKFwiaW1hZ2VzL1wiICsgYXNkZmFzZGZbYV0uZmlsZSkuZ2V0TWV0YWRhdGEoKS50aGVuKChtZXRhZGF0YSkgPT4ge2NvbnNvbGUubG9nKG1ldGFkYXRhKX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGl0dGxlRGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpZ0Rpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybUNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpLmNoaWxkcmVuXG4gICAgICAgIGxldCB0aXRsZSA9IGZvcm1DaGlsZHJlblswXS52YWx1ZVxuICAgICAgICBsZXQgc3ViamVjdCA9IGZvcm1DaGlsZHJlblsxXS52YWx1ZVxuICAgICAgICBsZXQgZGVzYyA9IGZvcm1DaGlsZHJlblsyXS52YWx1ZVxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhzdWVkKVxuICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihgQXNzaWdubWVudHNgKS5hZGQoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgICAgICAgZmlsZTogc3VlZCxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICBhdXRob3I6IGF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NpZ25tZW50XCIpXG4gICAgICAgIGFzZGYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzZFwiKVxuICAgICAgICBkcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vbWFzaykge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VSZWYuY2hpbGQoXCJpbWFnZXMvXCIgKyBub21hc2spLmRlbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgc2V0Tm9tYXNrKGFmaWxlLm5hbWUpXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZEVuZChkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmFnZVJlZi5jaGlsZChcImltYWdlcy9cIiArIGFmaWxlLm5hbWUpLnB1dFN0cmluZyhyZXN1bHQsICdkYXRhX3VybCcpXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UucmVmLmdldERvd25sb2FkVVJMKCkudGhlbigoYXNkZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWVkID0gYXNkZi50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRGaWxlKHJlc3VsdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRFbmQoZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGFmaWxlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWZpbGUubmFtZSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYXNkZmFzZGZhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2RmYXNkZmFzZGZcIilcbiAgICAgICAgYXNkZmFzZGZhc2RmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzdG9yYWdlUmVmLmNoaWxkKFwiaW1hZ2VzL1wiICsgbm9tYXNrKS5kZWxldGUoKVxuICAgICAgICAgICAgc2V0RmlsZShudWxsKVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0gaWQ9XCJiaWREaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmZvcm1EaXZ9PlxuICAgICAgICAgICAgICAgIDxoMT5BZGQgYW4gQXNzaWdubWVudDwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IFRpdGxlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5zdWJqZWN0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuZGVzY30gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QaG90b3M6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPXtpLnBob3RvfSBhY2NlcHQ9XCJpbWFnZS8qXCIgaWQ9XCJhc2RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aWV3OjwvcD5cbiAgICAgICAgICAgICAgICAgICAge2ZpbGUmJiA8ZGl2IGNsYXNzTmFtZT17aS5wcmV2aWV3RGl2fSA+PGltZyBjbGFzc05hbWU9e2kucHJldmlld30gc3JjPXtmaWxlfSAvPjxidXR0b24gY2xhc3NOYW1lPXtpLnJlbW92ZX0gaWQ9XCJhc2RmYXNkZmFzZGZcIj5SZW1vdmUgUGhvdG88L2J1dHRvbj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDxwPkR1ZSBEYXRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzTmFtZT17aS5kYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPXtpLnN1Ym1pdH0+QWRkIEFzc2lnbm1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaSIsImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwic3RvcmFnZVNlcnZpY2UiLCJhc3NpZ25tZW50cyIsInN0b3JhZ2VSZWYiLCJyZWYiLCJmaWxlIiwic2V0RmlsZSIsIm5vbWFzayIsInNldE5vbWFzayIsInJlc3AiLCJzZXRSZXNwIiwic3VlZCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFzc2lnbm1lbnQiLCJpZCIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImFzZGZhc2RmIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ0aXRsZSIsImRhdGEiLCJzdWJqZWN0IiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImF1dGhvciIsImJpZ0RpdiIsImdldEVsZW1lbnRCeUlkIiwiYSIsImxlbmd0aCIsImxpdHRsZURpdiIsImZvcm1EaXYiLCJpbWFnZSIsInNyYyIsImNoaWxkIiwiZ2V0TWV0YWRhdGEiLCJ0aGVuIiwibWV0YWRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImN1cnJlbnRVc2VyIiwiZGlzcGxheU5hbWUiLCJhc2RmIiwiaW5uZXJIVE1MIiwiZHMiLCJldmVudCIsImRlbGV0ZSIsImFmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImxvYWRFbmQiLCJkIiwicmVzdWx0IiwicmVzcG9uc2UiLCJwdXRTdHJpbmciLCJnZXREb3dubG9hZFVSTCIsInRvU3RyaW5nIiwib25sb2FkZW5kIiwicmVhZEFzRGF0YVVSTCIsImFzZGZhc2RmYXNkZiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwIiwicGhvdG8iLCJhY2NlcHQiLCJwcmV2aWV3RGl2IiwiaW1nIiwicHJldmlldyIsImJ1dHRvbiIsInJlbW92ZSIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});