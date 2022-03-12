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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), file = ref1[0], setFile = ref1[1];\n    var onFileChange = function(event) {\n        var afile = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            var result = d.target.result;\n            ref.putString(result, 'data_url');\n        };\n        reader.readAsDataURL(afile);\n    };\n    var onRemove = function() {\n        _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Images\").doc().delete();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file.toString();\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: file,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_2__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 76,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtvQkFBQzdDLEVBQUUsRUFBQyxDQUFRO29CQUFDK0IsU0FBUyxFQUFFNUQsdUVBQVE7OEJBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkUsQ0FBQztHQS9FdUJHLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzaWdubWVudHMuanM/OTAyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBpIGZyb20gXCIuL2Fzc2lnbm1lbnRzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHthdXRoU2VydmljZSwgZGJTZXJ2aWNlfSBmcm9tIFwiLi4vZmJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ25tZW50cygpIHtcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBhZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKGQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHJlZi5wdXRTdHJpbmcocmVzdWx0LCAnZGF0YV91cmwnKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGFmaWxlKVxuICAgIH1cbiAgICBjb25zdCBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJJbWFnZXNcIikuZG9jKCkuZGVsZXRlKClcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaS5hc3NpZ25tZW50KVxuICAgICAgICBkaXYuaWQgPSBcImFzc2lnbm1lbnRcIlxuICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihcIkFzc2lnbm1lbnRzXCIpLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGxldCBhc2RmYXNkZiA9IFtdO1xuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBhc2RmYXNkZi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IGRvYy5kYXRhKCkuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogZG9jLmRhdGEoKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZG9jLmRhdGEoKS5maWxlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkb2MuZGF0YSgpLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZG9jLmRhdGEoKS5hdXRob3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxhc2RmYXNkZi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpdHRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgbGl0dGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJhc2RmXCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKGkuZm9ybURpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzZGZhc2RmW2FdLmZpbGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpdHRsZURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaWdEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgYXV0aG9yOiBhdXRoU2VydmljZS5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYXNkZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNzaWdubWVudFwiKVxuICAgICAgICBhc2RmLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fSBpZD1cImJpZERpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aWV3OjwvcD5cbiAgICAgICAgICAgICAgICAgICAge2ZpbGUmJiA8ZGl2IGNsYXNzTmFtZT17aS5wcmV2aWV3RGl2fSA+PGltZyBjbGFzc05hbWU9e2kucHJldmlld30gc3JjPXtmaWxlfSAvPjxidXR0b24gY2xhc3NOYW1lPXtpLnJlbW92ZX0gb25DbGljaz17b25SZW1vdmV9PlJlbW92ZSBQaG90bzwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2kuc3VibWl0fT5BZGQgQXNzaWdubWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJhc3NpZ25tZW50cyIsImZpbGUiLCJzZXRGaWxlIiwib25GaWxlQ2hhbmdlIiwiZXZlbnQiLCJhZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImQiLCJyZXN1bHQiLCJyZWYiLCJwdXRTdHJpbmciLCJyZWFkQXNEYXRhVVJMIiwib25SZW1vdmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZGVsZXRlIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXNzaWdubWVudCIsImlkIiwib25TbmFwc2hvdCIsInF1ZXJ5U25hcHNob3QiLCJhc2RmYXNkZiIsImZvckVhY2giLCJwdXNoIiwidGl0bGUiLCJkYXRhIiwic3ViamVjdCIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJhdXRob3IiLCJiaWdEaXYiLCJnZXRFbGVtZW50QnlJZCIsImEiLCJsZW5ndGgiLCJsaXR0bGVEaXYiLCJmb3JtRGl2IiwiaW1hZ2UiLCJzcmMiLCJ0b1N0cmluZyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1DaGlsZHJlbiIsImNoaWxkcmVuIiwidmFsdWUiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwiYXNkZiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwIiwicGhvdG8iLCJhY2NlcHQiLCJvbkNoYW5nZSIsInByZXZpZXdEaXYiLCJpbWciLCJwcmV2aWV3IiwiYnV0dG9uIiwicmVtb3ZlIiwib25DbGljayIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});