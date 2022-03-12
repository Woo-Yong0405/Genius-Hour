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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var storageRef = _fb__WEBPACK_IMPORTED_MODULE_2__.storageService.ref();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), file = ref[0], setFile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nomask = ref1[0], setNomask = ref1[1];\n    var onFileChange = function(event) {\n        var afile = event.target.files[0];\n        setMask(afile.name);\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            var result = d.target.result;\n            storageRef.child(\"images/\" + afile.name).putString(result, 'data_url');\n            setFile(result);\n            console.log(nomask);\n        };\n        reader.readAsDataURL(afile);\n    };\n    var onRemove = function() {\n        storageRef.child(\"images/\" + nomask).delete();\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file.toString();\n                if (asdfasdf[a].file != \"\") {\n                    storageRef.child(\"images/\" + asdfasdf[a].file).getMetadata().then(function(metadata) {\n                        console.log(metadata);\n                    });\n                }\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            console.log(nomask);\n            _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: nomask,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_2__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 84,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 86,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 90,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"mY2RsrqoWTLo+cwG97RGukVGK4Q=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBRXhFLHFFQUFNOzRCQUFFNEUsSUFBSSxFQUFDLENBQU07NEJBQUNDLFdBQVcsRUFBQyxDQUF3Qjs7Ozs7O29HQUN6RUUsQ0FBQztzQ0FBQyxDQUFROzs7Ozs7b0dBQ1ZKLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDSixTQUFTLEVBQUV4RSxzRUFBTzs0QkFBRWlGLE1BQU0sRUFBQyxDQUFTOzRCQUFDQyxRQUFRLEVBQUV2RSxZQUFZOzs7Ozs7b0dBQzdFb0UsQ0FBQztzQ0FBQyxDQUFROzs7Ozs7d0JBQ1Z4RSxJQUFJLGdGQUFJdUIsQ0FBRzs0QkFBQzBDLFNBQVMsRUFBRXhFLDJFQUFZOzs0R0FBSW9GLENBQUc7b0NBQUNaLFNBQVMsRUFBRXhFLHdFQUFTO29DQUFFMEQsR0FBRyxFQUFFbkQsSUFBSTs7Ozs7OzRHQUFLK0UsQ0FBTTtvQ0FBQ2QsU0FBUyxFQUFFeEUsdUVBQVE7b0NBQUV3RixPQUFPLEVBQUU1RCxRQUFROzhDQUFFLENBQVk7Ozs7Ozs7Ozs7OztvR0FDMUltRCxDQUFDO3NDQUFDLENBQVU7Ozs7OztvR0FDWkosQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUN4QyxFQUFFLEVBQUMsQ0FBTTs0QkFBQ29DLFNBQVMsRUFBRXhFLHFFQUFNOzs7Ozs7Ozs7Ozs7NEZBRWpEc0YsQ0FBTTtvQkFBQ2xELEVBQUUsRUFBQyxDQUFRO29CQUFDb0MsU0FBUyxFQUFFeEUsdUVBQVE7OEJBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkUsQ0FBQztHQXpGdUJJLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzaWdubWVudHMuanM/OTAyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBpIGZyb20gXCIuL2Fzc2lnbm1lbnRzLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHthdXRoU2VydmljZSwgZGJTZXJ2aWNlLCBzdG9yYWdlU2VydmljZSB9IGZyb20gXCIuLi9mYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlU2VydmljZS5yZWYoKTtcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtub21hc2ssIHNldE5vbWFza10gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IG9uRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBhZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgICBzZXRNYXNrKGFmaWxlLm5hbWUpXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgc3RvcmFnZVJlZi5jaGlsZChcImltYWdlcy9cIiArIGFmaWxlLm5hbWUpLnB1dFN0cmluZyhyZXN1bHQsICdkYXRhX3VybCcpXG4gICAgICAgICAgICBzZXRGaWxlKHJlc3VsdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vbWFzaylcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChhZmlsZSlcbiAgICB9XG4gICAgY29uc3Qgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHN0b3JhZ2VSZWYuY2hpbGQoXCJpbWFnZXMvXCIgKyBub21hc2spLmRlbGV0ZSgpXG4gICAgICAgIHNldEZpbGUobnVsbClcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaS5hc3NpZ25tZW50KVxuICAgICAgICBkaXYuaWQgPSBcImFzc2lnbm1lbnRcIlxuICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihcIkFzc2lnbm1lbnRzXCIpLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGxldCBhc2RmYXNkZiA9IFtdO1xuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBhc2RmYXNkZi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IGRvYy5kYXRhKCkuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogZG9jLmRhdGEoKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZG9jLmRhdGEoKS5maWxlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkb2MuZGF0YSgpLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZG9jLmRhdGEoKS5hdXRob3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxhc2RmYXNkZi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpdHRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgbGl0dGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJhc2RmXCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKGkuZm9ybURpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzZGZhc2RmW2FdLmZpbGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoYXNkZmFzZGZbYV0uZmlsZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VSZWYuY2hpbGQoXCJpbWFnZXMvXCIgKyBhc2RmYXNkZlthXS5maWxlKS5nZXRNZXRhZGF0YSgpLnRoZW4oKG1ldGFkYXRhKSA9PiB7Y29uc29sZS5sb2cobWV0YWRhdGEpfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGl0dGxlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXR0bGVEaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmlnRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtQ2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuY2hpbGRyZW5cbiAgICAgICAgbGV0IHRpdGxlID0gZm9ybUNoaWxkcmVuWzBdLnZhbHVlXG4gICAgICAgIGxldCBzdWJqZWN0ID0gZm9ybUNoaWxkcmVuWzFdLnZhbHVlXG4gICAgICAgIGxldCBkZXNjID0gZm9ybUNoaWxkcmVuWzJdLnZhbHVlXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKG5vbWFzaylcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IG5vbWFzayxcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgICAgICBhdXRob3I6IGF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3NpZ25tZW50XCIpXG4gICAgICAgIGFzZGYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9IGlkPVwiYmlkRGl2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5mb3JtRGl2fT5cbiAgICAgICAgICAgICAgICA8aDE+QWRkIGFuIEFzc2lnbm1lbnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnRpdGxlfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBUaXRsZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e2kuc3ViamVjdH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmRlc2N9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBc3NpZ25tZW50IERlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGhvdG9zOiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT17aS5waG90b30gYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlByZXZpZXc6PC9wPlxuICAgICAgICAgICAgICAgICAgICB7ZmlsZSYmIDxkaXYgY2xhc3NOYW1lPXtpLnByZXZpZXdEaXZ9ID48aW1nIGNsYXNzTmFtZT17aS5wcmV2aWV3fSBzcmM9e2ZpbGV9IC8+PGJ1dHRvbiBjbGFzc05hbWU9e2kucmVtb3ZlfSBvbkNsaWNrPXtvblJlbW92ZX0+UmVtb3ZlIFBob3RvPC9idXR0b24+PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICA8cD5EdWUgRGF0ZTogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBjbGFzc05hbWU9e2kuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT17aS5zdWJtaXR9PkFkZCBBc3NpZ25tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJhdXRoU2VydmljZSIsImRiU2VydmljZSIsInN0b3JhZ2VTZXJ2aWNlIiwiYXNzaWdubWVudHMiLCJzdG9yYWdlUmVmIiwicmVmIiwiZmlsZSIsInNldEZpbGUiLCJub21hc2siLCJzZXROb21hc2siLCJvbkZpbGVDaGFuZ2UiLCJldmVudCIsImFmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJzZXRNYXNrIiwibmFtZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJkIiwicmVzdWx0IiwiY2hpbGQiLCJwdXRTdHJpbmciLCJjb25zb2xlIiwibG9nIiwicmVhZEFzRGF0YVVSTCIsIm9uUmVtb3ZlIiwiZGVsZXRlIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXNzaWdubWVudCIsImlkIiwiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYXNkZmFzZGYiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsInRpdGxlIiwiZGF0YSIsInN1YmplY3QiLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiYXV0aG9yIiwiYmlnRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJhIiwibGVuZ3RoIiwibGl0dGxlRGl2IiwiZm9ybURpdiIsImltYWdlIiwic3JjIiwidG9TdHJpbmciLCJnZXRNZXRhZGF0YSIsInRoZW4iLCJtZXRhZGF0YSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1DaGlsZHJlbiIsImNoaWxkcmVuIiwidmFsdWUiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwiYXNkZiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwIiwicGhvdG8iLCJhY2NlcHQiLCJvbkNoYW5nZSIsInByZXZpZXdEaXYiLCJpbWciLCJwcmV2aWV3IiwiYnV0dG9uIiwicmVtb3ZlIiwib25DbGljayIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});