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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var storageRef = _fb__WEBPACK_IMPORTED_MODULE_3__.storageService.ref();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), nomask = ref1[0], setNomask = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), resp = ref2[0], setResp = ref2[1];\n    var sued = \"\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file;\n                if (asdfasdf[a].file != \"\") {\n                    storageRef.child(\"images/\" + asdfasdf[a].file).getMetadata().then(function(metadata) {\n                        console.log(metadata);\n                    });\n                }\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            console.log(sued);\n            _fb__WEBPACK_IMPORTED_MODULE_3__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: sued,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_3__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n        window.onload = function() {\n            var ds = document.getElementById(\"asd\");\n            ds.addEventListener(\"change\", function(event) {\n                if (nomask) {\n                    storageRef.child(\"images/\" + nomask).delete();\n                }\n                var afile = event.target.files[0];\n                setNomask(afile.name);\n                var reader = new FileReader();\n                function loadEnd(d) {\n                    return _loadEnd.apply(this, arguments);\n                }\n                function _loadEnd() {\n                    _loadEnd = _asyncToGenerator(_Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(d) {\n                        var result, response;\n                        return _Users_GGUL_Documents_Genius_Hour_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                            while(1)switch(_ctx.prev = _ctx.next){\n                                case 0:\n                                    result = d.target.result;\n                                    _ctx.next = 3;\n                                    return storageRef.child(\"images/\" + afile.name).putString(result, 'data_url');\n                                case 3:\n                                    response = _ctx.sent;\n                                    response.ref.getDownloadURL().then(function(asdf) {\n                                        sued = asdf.toString();\n                                    });\n                                    setFile(result);\n                                case 6:\n                                case \"end\":\n                                    return _ctx.stop();\n                            }\n                        }, _callee);\n                    }));\n                    return _loadEnd.apply(this, arguments);\n                }\n                reader.onloadend = function(d) {\n                    loadEnd(d);\n                };\n                reader.readAsDataURL(afile);\n                console.log(afile.name);\n            });\n            var asdfasdfasdf = document.getElementById(\"asdfasdfasdf\");\n            asdfasdfasdf.addEventListener(\"click\", function() {\n                storageRef.child(\"images/\" + nomask).delete();\n                setFile(null);\n            });\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().photo),\n                            accept: \"image/*\",\n                            id: \"asd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().remove),\n                                    id: \"asdfasdfasdf\",\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 102,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 106,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 93,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"ovxT9bvUWGFnhH8Xfv0T3zr/SEs=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTs0QkFBQ0osU0FBUyxFQUFFL0Usc0VBQU87NEJBQUV3RixNQUFNLEVBQUMsQ0FBUzs0QkFBQ3BFLEVBQUUsRUFBQyxDQUFLOzs7Ozs7b0dBQy9Ea0UsQ0FBQztzQ0FBQyxDQUFROzs7Ozs7d0JBQ1YvRSxJQUFJLGdGQUFJTyxDQUFHOzRCQUFDaUUsU0FBUyxFQUFFL0UsMkVBQVk7OzRHQUFJMEYsQ0FBRztvQ0FBQ1gsU0FBUyxFQUFFL0Usd0VBQVM7b0NBQUUwQyxHQUFHLEVBQUVuQyxJQUFJOzs7Ozs7NEdBQUtxRixDQUFNO29DQUFDYixTQUFTLEVBQUUvRSx1RUFBUTtvQ0FBRW9CLEVBQUUsRUFBQyxDQUFjOzhDQUFDLENBQVk7Ozs7Ozs7Ozs7OztvR0FDeklrRSxDQUFDO3NDQUFDLENBQVU7Ozs7OztvR0FDWkosQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUMvRCxFQUFFLEVBQUMsQ0FBTTs0QkFBQzJELFNBQVMsRUFBRS9FLHFFQUFNOzs7Ozs7Ozs7Ozs7NEZBRWpENEYsQ0FBTTtvQkFBQ3hFLEVBQUUsRUFBQyxDQUFRO29CQUFDMkQsU0FBUyxFQUFFL0UsdUVBQVE7OEJBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkUsQ0FBQztHQXpHdUJJLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzaWdubWVudHMuanM/OTAyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBpIGZyb20gXCIuL2Fzc2lnbm1lbnRzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHthdXRoU2VydmljZSwgZGJTZXJ2aWNlLCBzdG9yYWdlU2VydmljZSB9IGZyb20gXCIuLi9mYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlU2VydmljZS5yZWYoKTtcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtub21hc2ssIHNldE5vbWFza10gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtyZXNwLCBzZXRSZXNwXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgbGV0IHN1ZWQgPSBcIlwiO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGkuYXNzaWdubWVudClcbiAgICAgICAgZGl2LmlkID0gXCJhc3NpZ25tZW50XCJcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJBc3NpZ25tZW50c1wiKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNkZmFzZGYgPSBbXTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXNkZmFzZGYucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBkb2MuZGF0YSgpLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZG9jLmRhdGEoKS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRvYy5kYXRhKCkuYXV0aG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGE8YXNkZmFzZGYubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXR0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKFwiYXNkZlwiKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuY2xhc3NMaXN0LmFkZChpLmZvcm1EaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc2RmYXNkZlthXS5maWxlO1xuICAgICAgICAgICAgICAgIGlmIChhc2RmYXNkZlthXS5maWxlICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVJlZi5jaGlsZChcImltYWdlcy9cIiArIGFzZGZhc2RmW2FdLmZpbGUpLmdldE1ldGFkYXRhKCkudGhlbigobWV0YWRhdGEpID0+IHtjb25zb2xlLmxvZyhtZXRhZGF0YSl9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpdHRsZURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaWdEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coc3VlZClcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IHN1ZWQsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgYXV0aG9yOiBhdXRoU2VydmljZS5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYXNkZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNzaWdubWVudFwiKVxuICAgICAgICBhc2RmLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzZFwiKVxuICAgICAgICBkcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vbWFzaykge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VSZWYuY2hpbGQoXCJpbWFnZXMvXCIgKyBub21hc2spLmRlbGV0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICAgICAgc2V0Tm9tYXNrKGFmaWxlLm5hbWUpXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gbG9hZEVuZChkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3RvcmFnZVJlZi5jaGlsZChcImltYWdlcy9cIiArIGFmaWxlLm5hbWUpLnB1dFN0cmluZyhyZXN1bHQsICdkYXRhX3VybCcpXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UucmVmLmdldERvd25sb2FkVVJMKCkudGhlbigoYXNkZikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdWVkID0gYXNkZi50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRGaWxlKHJlc3VsdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRFbmQoZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGFmaWxlKVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWZpbGUubmFtZSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYXNkZmFzZGZhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2RmYXNkZmFzZGZcIilcbiAgICAgICAgYXNkZmFzZGZhc2RmLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzdG9yYWdlUmVmLmNoaWxkKFwiaW1hZ2VzL1wiICsgbm9tYXNrKS5kZWxldGUoKVxuICAgICAgICAgICAgc2V0RmlsZShudWxsKVxuICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fSBpZD1cImJpZERpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IGFjY2VwdD1cImltYWdlLypcIiBpZD1cImFzZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBpZD1cImFzZGZhc2RmYXNkZlwiPlJlbW92ZSBQaG90bzwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2kuc3VibWl0fT5BZGQgQXNzaWdubWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJzdG9yYWdlU2VydmljZSIsImFzc2lnbm1lbnRzIiwic3RvcmFnZVJlZiIsInJlZiIsImZpbGUiLCJzZXRGaWxlIiwibm9tYXNrIiwic2V0Tm9tYXNrIiwicmVzcCIsInNldFJlc3AiLCJzdWVkIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXNzaWdubWVudCIsImlkIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYXNkZmFzZGYiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInRpdGxlIiwiZGF0YSIsInN1YmplY3QiLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiYXV0aG9yIiwiYmlnRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJhIiwibGVuZ3RoIiwibGl0dGxlRGl2IiwiZm9ybURpdiIsImltYWdlIiwic3JjIiwiY2hpbGQiLCJnZXRNZXRhZGF0YSIsInRoZW4iLCJtZXRhZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtQ2hpbGRyZW4iLCJjaGlsZHJlbiIsInZhbHVlIiwiY3VycmVudFVzZXIiLCJkaXNwbGF5TmFtZSIsImFzZGYiLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkcyIsImV2ZW50IiwiZGVsZXRlIiwiYWZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwibG9hZEVuZCIsImQiLCJyZXN1bHQiLCJyZXNwb25zZSIsInB1dFN0cmluZyIsImdldERvd25sb2FkVVJMIiwidG9TdHJpbmciLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwiYXNkZmFzZGZhc2RmIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJwaG90byIsImFjY2VwdCIsInByZXZpZXdEaXYiLCJpbWciLCJwcmV2aWV3IiwiYnV0dG9uIiwicmVtb3ZlIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});