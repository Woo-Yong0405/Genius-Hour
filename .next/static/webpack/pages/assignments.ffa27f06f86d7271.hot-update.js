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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var storageRef = _fb__WEBPACK_IMPORTED_MODULE_2__.storageService.ref();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nomask = ref1[0], notalk = ref1[1];\n    var onFileChange = function(event) {\n        var afile = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            var result = d.target.result;\n            storageRef.child(afile.name).putString(result, 'data_url');\n            setFile(result);\n            notalk(afile.name);\n        };\n        reader.readAsDataURL(afile);\n    };\n    var onRemove = function() {\n        storageRef.child(nomask).delete();\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file.toString();\n                storageRef.child(asdfasdf[a].file).getMetadata().then(function(metadata) {\n                    console.log(metadata);\n                });\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: nomask,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_2__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 82,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"mY2RsrqoWTLo+cwG97RGukVGK4Q=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQUNDLFFBQVEsRUFBRXRFLFlBQVk7Ozs7OztvR0FDN0VtRSxDQUFDO3NDQUFDLENBQVE7Ozs7Ozt3QkFDVnZFLElBQUksZ0ZBQUlvQixDQUFHOzRCQUFDNEMsU0FBUyxFQUFFdkUsMkVBQVk7OzRHQUFJbUYsQ0FBRztvQ0FBQ1osU0FBUyxFQUFFdkUsd0VBQVM7b0NBQUV1RCxHQUFHLEVBQUVoRCxJQUFJOzs7Ozs7NEdBQUs4RSxDQUFNO29DQUFDZCxTQUFTLEVBQUV2RSx1RUFBUTtvQ0FBRXVGLE9BQU8sRUFBRTlELFFBQVE7OENBQUUsQ0FBWTs7Ozs7Ozs7Ozs7O29HQUMxSXFELENBQUM7c0NBQUMsQ0FBVTs7Ozs7O29HQUNaSixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQzFDLEVBQUUsRUFBQyxDQUFNOzRCQUFDc0MsU0FBUyxFQUFFdkUscUVBQU07Ozs7Ozs7Ozs7Ozs0RkFFakRxRixDQUFNO29CQUFDcEQsRUFBRSxFQUFDLENBQVE7b0JBQUNzQyxTQUFTLEVBQUV2RSx1RUFBUTs4QkFBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RSxDQUFDO0dBckZ1QkksV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hc3NpZ25tZW50cy5qcz85MDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGkgZnJvbSBcIi4vYXNzaWdubWVudHMubW9kdWxlLmNzc1wiXG5pbXBvcnQge2F1dGhTZXJ2aWNlLCBkYlNlcnZpY2UsIHN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JhZ2VTZXJ2aWNlLnJlZigpO1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW25vbWFzaywgbm90YWxrXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3Qgb25GaWxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgc3RvcmFnZVJlZi5jaGlsZChhZmlsZS5uYW1lKS5wdXRTdHJpbmcocmVzdWx0LCAnZGF0YV91cmwnKVxuICAgICAgICAgICAgc2V0RmlsZShyZXN1bHQpXG4gICAgICAgICAgICBub3RhbGsoYWZpbGUubmFtZSlcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChhZmlsZSlcbiAgICB9XG4gICAgY29uc3Qgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHN0b3JhZ2VSZWYuY2hpbGQobm9tYXNrKS5kZWxldGUoKVxuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGkuYXNzaWdubWVudClcbiAgICAgICAgZGl2LmlkID0gXCJhc3NpZ25tZW50XCJcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJBc3NpZ25tZW50c1wiKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNkZmFzZGYgPSBbXTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXNkZmFzZGYucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBkb2MuZGF0YSgpLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZG9jLmRhdGEoKS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRvYy5kYXRhKCkuYXV0aG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGE8YXNkZmFzZGYubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaXR0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKFwiYXNkZlwiKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuY2xhc3NMaXN0LmFkZChpLmZvcm1EaXYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBhc2RmYXNkZlthXS5maWxlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgc3RvcmFnZVJlZi5jaGlsZChhc2RmYXNkZlthXS5maWxlKS5nZXRNZXRhZGF0YSgpLnRoZW4oKG1ldGFkYXRhKSA9PiB7Y29uc29sZS5sb2cobWV0YWRhdGEpfSlcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpdHRsZURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaWdEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IG5vbWFzayxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICBhdXRob3I6IGF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NpZ25tZW50XCIpXG4gICAgICAgIGFzZGYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9IGlkPVwiYmlkRGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17aS5waG90b30gYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBvbkNsaWNrPXtvblJlbW92ZX0+UmVtb3ZlIFBob3RvPC9idXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzc05hbWU9e2kuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJhdXRoU2VydmljZSIsImRiU2VydmljZSIsInN0b3JhZ2VTZXJ2aWNlIiwiYXNzaWdubWVudHMiLCJzdG9yYWdlUmVmIiwicmVmIiwiZmlsZSIsInNldEZpbGUiLCJub21hc2siLCJub3RhbGsiLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsImFmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiZCIsInJlc3VsdCIsImNoaWxkIiwibmFtZSIsInB1dFN0cmluZyIsInJlYWRBc0RhdGFVUkwiLCJvblJlbW92ZSIsImRlbGV0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFzc2lnbm1lbnQiLCJpZCIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImFzZGZhc2RmIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ0aXRsZSIsImRhdGEiLCJzdWJqZWN0IiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImF1dGhvciIsImJpZ0RpdiIsImdldEVsZW1lbnRCeUlkIiwiYSIsImxlbmd0aCIsImxpdHRsZURpdiIsImZvcm1EaXYiLCJpbWFnZSIsInNyYyIsInRvU3RyaW5nIiwiZ2V0TWV0YWRhdGEiLCJ0aGVuIiwibWV0YWRhdGEiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybUNoaWxkcmVuIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImN1cnJlbnRVc2VyIiwiZGlzcGxheU5hbWUiLCJhc2RmIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInAiLCJwaG90byIsImFjY2VwdCIsIm9uQ2hhbmdlIiwicHJldmlld0RpdiIsImltZyIsInByZXZpZXciLCJidXR0b24iLCJyZW1vdmUiLCJvbkNsaWNrIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});