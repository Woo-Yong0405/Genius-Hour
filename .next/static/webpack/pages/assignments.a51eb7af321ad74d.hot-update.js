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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), file1 = ref[0], setFile = ref[1];\n    var onFileChange = function(event) {\n        var file = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            setFile(d.target.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            var smallDiv = document.getElementById(\"assignment\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.innerText = asdfasdf[a].author;\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv));\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: file1,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_2__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        file1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                                    src: file1\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 74,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 67,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Fzc2lnbm1lbnRzLmpzPzkwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgaSBmcm9tIFwiLi9hc3NpZ25tZW50cy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7YXV0aFNlcnZpY2UsIGRiU2VydmljZX0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKGQpID0+IHtcbiAgICAgICAgICAgIHNldEZpbGUoZC50YXJnZXQucmVzdWx0KVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICAgIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKG51bGwpXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGkuYXNzaWdubWVudClcbiAgICAgICAgZGl2LmlkID0gXCJhc3NpZ25tZW50XCJcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oXCJBc3NpZ25tZW50c1wiKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBsZXQgYXNkZmFzZGYgPSBbXTtcbiAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXNkZmFzZGYucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb2MuZGF0YSgpLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBkb2MuZGF0YSgpLnN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgIGRlc2M6IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGRvYy5kYXRhKCkuZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogZG9jLmRhdGEoKS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRvYy5kYXRhKCkuYXV0aG9yXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBiaWdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJpZERpdlwiKVxuICAgICAgICAgICAgY29uc3Qgc21hbGxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzc2lnbm1lbnRcIilcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhPGFzZGZhc2RmLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGl0dGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuaW5uZXJUZXh0ID0gYXNkZmFzZGZbYV0uYXV0aG9yO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKFwiYXNkZlwiKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuY2xhc3NMaXN0LmFkZChpLmZvcm1EaXYpO1xuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXR0bGVEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmlnRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtQ2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuY2hpbGRyZW5cbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybUNoaWxkcmVuWzBdLnZhbHVlXG4gICAgICAgIGxldCBzdWJqZWN0ID0gZm9ybUNoaWxkcmVuWzFdLnZhbHVlXG4gICAgICAgIGxldCBkZXNjID0gZm9ybUNoaWxkcmVuWzJdLnZhbHVlXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlXG4gICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKGBBc3NpZ25tZW50c2ApLmFkZCh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgICAgIGF1dGhvcjogYXV0aFNlcnZpY2UuY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGFzZGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzc2lnbm1lbnRcIilcbiAgICAgICAgYXNkZi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0gaWQ9XCJiaWREaXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmZvcm1EaXZ9PlxuICAgICAgICAgICAgICAgIDxoMT5BZGQgYW4gQXNzaWdubWVudDwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kudGl0bGV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IFRpdGxlXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5zdWJqZWN0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuZGVzY30gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QaG90b3M6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPXtpLnBob3RvfSBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UHJldmlldzo8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtmaWxlJiYgPGRpdiBjbGFzc05hbWU9e2kucHJldmlld0Rpdn0gPjxpbWcgY2xhc3NOYW1lPXtpLnByZXZpZXd9IHNyYz17ZmlsZX0gLz48YnV0dG9uIGNsYXNzTmFtZT17aS5yZW1vdmV9IG9uQ2xpY2s9e29uUmVtb3ZlfT5SZW1vdmUgUGhvdG88L2J1dHRvbj48L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIDxwPkR1ZSBEYXRlOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzTmFtZT17aS5kYXRlfSAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPXtpLnN1Ym1pdH0+QWRkIEFzc2lnbm1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaSIsImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwiYXNzaWdubWVudHMiLCJmaWxlIiwic2V0RmlsZSIsIm9uRmlsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJvblJlbW92ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFzc2lnbm1lbnQiLCJpZCIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImFzZGZhc2RmIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJ0aXRsZSIsImRhdGEiLCJzdWJqZWN0IiwiZGVzYyIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImF1dGhvciIsImJpZ0RpdiIsImdldEVsZW1lbnRCeUlkIiwic21hbGxEaXYiLCJhIiwibGVuZ3RoIiwibGl0dGxlRGl2IiwiaW5uZXJUZXh0IiwiZm9ybURpdiIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1DaGlsZHJlbiIsImNoaWxkcmVuIiwidmFsdWUiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwiYXNkZiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwIiwicGhvdG8iLCJhY2NlcHQiLCJvbkNoYW5nZSIsInByZXZpZXdEaXYiLCJpbWciLCJwcmV2aWV3Iiwic3JjIiwiYnV0dG9uIiwicmVtb3ZlIiwib25DbGljayIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});