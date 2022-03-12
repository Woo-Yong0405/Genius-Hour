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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var storageRef = _fb__WEBPACK_IMPORTED_MODULE_3__.storageService.ref();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), nomask = ref1[0], setNomask = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), resp = ref2[0], setResp = ref2[1];\n    var sued = \"\";\n    var onFileChange = function(event) {\n        if (nomask) {\n            storageRef.child(\"images/\" + nomask).delete();\n        }\n        var afile = event.target.files[0];\n        setNomask(afile.name);\n        var reader = new FileReader();\n        function loadEnd(d) {\n            return _loadEnd.apply(this, arguments);\n        }\n        function _loadEnd() {\n            _loadEnd = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(d) {\n                var result, response;\n                return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            result = d.target.result;\n                            _ctx.next = 3;\n                            return storageRef.child(\"images/\" + afile.name).putString(result, 'data_url');\n                        case 3:\n                            response = _ctx.sent;\n                            response.ref.getDownloadURL().then(function(asdf) {\n                                sued = asdf.toString();\n                            });\n                            setFile(result);\n                        case 6:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _loadEnd.apply(this, arguments);\n        }\n        reader.onloadend = function(d) {\n            loadEnd(d);\n        };\n        reader.readAsDataURL(afile);\n        console.log(afile.name);\n    };\n    var onRemove = function() {\n        storageRef.child(\"images/\" + nomask).delete();\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file;\n                if (asdfasdf[a].file != \"\") {\n                    storageRef.child(\"images/\" + asdfasdf[a].file).getMetadata().then(function(metadata) {\n                        console.log(metadata);\n                    });\n                }\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            console.log(sued);\n            _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: sued,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_3__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 89,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 97,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 90,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 101,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 88,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"ovxT9bvUWGFnhH8Xfv0T3zr/SEs=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJOzs7Ozs7NEdBQUtvRixDQUFNO29DQUFDZCxTQUFTLEVBQUU3RSx1RUFBUTtvQ0FBRTZGLE9BQU8sRUFBRXhELFFBQVE7OENBQUUsQ0FBWTs7Ozs7Ozs7Ozs7O29HQUMxSStDLENBQUM7c0NBQUMsQ0FBVTs7Ozs7O29HQUNaSixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ3JDLEVBQUUsRUFBQyxDQUFNOzRCQUFDaUMsU0FBUyxFQUFFN0UscUVBQU07Ozs7Ozs7Ozs7Ozs0RkFFakQyRixDQUFNO29CQUFDL0MsRUFBRSxFQUFDLENBQVE7b0JBQUNpQyxTQUFTLEVBQUU3RSx1RUFBUTs4QkFBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RSxDQUFDO0dBcEd1QkksV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2UsIHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JhZ2VTZXJ2aWNlLnJlZigpO1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW25vbWFzaywgc2V0Tm9tYXNrXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3Jlc3AsIHNldFJlc3BdID0gdXNlU3RhdGUoXCJcIilcbiAgICBsZXQgc3VlZCA9IFwiXCI7XG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChub21hc2spIHtcbiAgICAgICAgICAgIHN0b3JhZ2VSZWYuY2hpbGQoXCJpbWFnZXMvXCIgKyBub21hc2spLmRlbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgc2V0Tm9tYXNrKGFmaWxlLm5hbWUpXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRFbmQoZCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdG9yYWdlUmVmLmNoaWxkKFwiaW1hZ2VzL1wiICsgYWZpbGUubmFtZSkucHV0U3RyaW5nKHJlc3VsdCwgJ2RhdGFfdXJsJylcbiAgICAgICAgICAgIHJlc3BvbnNlLnJlZi5nZXREb3dubG9hZFVSTCgpLnRoZW4oKGFzZGYpID0+IHtcbiAgICAgICAgICAgICAgICBzdWVkID0gYXNkZi50b1N0cmluZygpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0RmlsZShyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IChkKSA9PiB7XG4gICAgICAgICAgICBsb2FkRW5kKGQpXG4gICAgICAgIH1cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYWZpbGUpXG4gICAgICAgIGNvbnNvbGUubG9nKGFmaWxlLm5hbWUpXG4gICAgfVxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBzdG9yYWdlUmVmLmNoaWxkKFwiaW1hZ2VzL1wiICsgbm9tYXNrKS5kZWxldGUoKVxuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGkuYXNzaWdubWVudClcbiAgICAgICAgZGl2LmlkID0gXCJhc3NpZ25tZW50XCJcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJBc3NpZ25tZW50c1wiKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNkZmFzZGYgPSBbXTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXNkZmFzZGYucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBkb2MuZGF0YSgpLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZG9jLmRhdGEoKS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRvYy5kYXRhKCkuYXV0aG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGE8YXNkZmFzZGYubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXR0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKFwiYXNkZlwiKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuY2xhc3NMaXN0LmFkZChpLmZvcm1EaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc2RmYXNkZlthXS5maWxlO1xuICAgICAgICAgICAgICAgIGlmIChhc2RmYXNkZlthXS5maWxlICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVJlZi5jaGlsZChcImltYWdlcy9cIiArIGFzZGZhc2RmW2FdLmZpbGUpLmdldE1ldGFkYXRhKCkudGhlbigobWV0YWRhdGEpID0+IHtjb25zb2xlLmxvZyhtZXRhZGF0YSl9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpdHRsZURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaWdEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coc3VlZClcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IHN1ZWQsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgYXV0aG9yOiBhdXRoU2VydmljZS5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYXNkZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNzaWdubWVudFwiKVxuICAgICAgICBhc2RmLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fSBpZD1cImJpZERpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aWV3OjwvcD5cbiAgICAgICAgICAgICAgICAgICAge2ZpbGUmJiA8ZGl2IGNsYXNzTmFtZT17aS5wcmV2aWV3RGl2fSA+PGltZyBjbGFzc05hbWU9e2kucHJldmlld30gc3JjPXtmaWxlfSAvPjxidXR0b24gY2xhc3NOYW1lPXtpLnJlbW92ZX0gb25DbGljaz17b25SZW1vdmV9PlJlbW92ZSBQaG90bzwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2kuc3VibWl0fT5BZGQgQXNzaWdubWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJzdG9yYWdlU2VydmljZSIsImFzc2lnbm1lbnRzIiwic3RvcmFnZVJlZiIsInJlZiIsImZpbGUiLCJzZXRGaWxlIiwibm9tYXNrIiwic2V0Tm9tYXNrIiwicmVzcCIsInNldFJlc3AiLCJzdWVkIiwib25GaWxlQ2hhbmdlIiwiZXZlbnQiLCJjaGlsZCIsImRlbGV0ZSIsImFmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImxvYWRFbmQiLCJkIiwicmVzdWx0IiwicmVzcG9uc2UiLCJwdXRTdHJpbmciLCJnZXREb3dubG9hZFVSTCIsInRoZW4iLCJhc2RmIiwidG9TdHJpbmciLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwiY29uc29sZSIsImxvZyIsIm9uUmVtb3ZlIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXNzaWdubWVudCIsImlkIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYXNkZmFzZGYiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInRpdGxlIiwiZGF0YSIsInN1YmplY3QiLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiYXV0aG9yIiwiYmlnRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJhIiwibGVuZ3RoIiwibGl0dGxlRGl2IiwiZm9ybURpdiIsImltYWdlIiwic3JjIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1DaGlsZHJlbiIsImNoaWxkcmVuIiwidmFsdWUiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJwaG90byIsImFjY2VwdCIsIm9uQ2hhbmdlIiwicHJldmlld0RpdiIsImltZyIsInByZXZpZXciLCJidXR0b24iLCJyZW1vdmUiLCJvbkNsaWNrIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});