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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ assignments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignments.module.css */ \"./pages/assignments.module.css\");\n/* harmony import */ var _assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assignments_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction assignments() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), file = ref[0], setFile = ref[1];\n    var onFileChange = function(event) {\n        var afile = event.target.files[0];\n        var reader = new FileReader();\n        reader.onloadend = function(d) {\n            var result = d.target.result;\n            setFile(result);\n        };\n        reader.readAsDataURL(afile);\n    };\n    var onRemove = function() {\n        setFile(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var div = document.createElement(\"div\");\n        div.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().assignment));\n        div.id = \"assignment\";\n        _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").onSnapshot(function(querySnapshot) {\n            var asdfasdf = [];\n            querySnapshot.forEach(function(doc) {\n                asdfasdf.push({\n                    title: doc.data().title,\n                    subject: doc.data().subject,\n                    desc: doc.data().description,\n                    file: doc.data().file,\n                    date: doc.data().date,\n                    author: doc.data().author\n                });\n            });\n            var bigDiv = document.getElementById(\"bidDiv\");\n            for(var a = 0; a < asdfasdf.length; a++){\n                var littleDiv = document.createElement(\"div\");\n                littleDiv.classList.add(\"asdf\");\n                littleDiv.classList.add((_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv));\n                var image = document.createElement(\"img\");\n                image.src = asdfasdf[a].file.toString();\n                littleDiv.appendChild(image);\n                div.appendChild(littleDiv);\n            }\n            bigDiv.appendChild(div);\n        });\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var formChildren = document.getElementById(\"form\").children;\n            var title = formChildren[0].value;\n            var subject = formChildren[1].value;\n            var desc = formChildren[2].value;\n            var date = document.getElementById(\"date\").value;\n            _fb__WEBPACK_IMPORTED_MODULE_2__.dbService.collection(\"Assignments\").add({\n                title: title,\n                subject: subject,\n                description: desc,\n                file: file,\n                date: date,\n                author: _fb__WEBPACK_IMPORTED_MODULE_2__.authService.currentUser.displayName\n            });\n            var asdf = document.getElementById(\"assignment\");\n            asdf.innerHTML = \"\";\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        id: \"bidDiv\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().formDiv),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add an Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                            type: \"text\",\n                            placeholder: \"Assignment Title\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().subject),\n                            type: \"text\",\n                            placeholder: \"Subject\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().desc),\n                            type: \"text\",\n                            placeholder: \"Assignment Description\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Photos: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n                            accept: \"image/*\",\n                            onChange: onFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 74,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Preview:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        file && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().previewDiv),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),\n                                    src: file\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 60\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().remove),\n                                    onClick: onRemove,\n                                    children: \"Remove Photo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 100\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 76,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Due Date: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            id: \"date\",\n                            className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().date)\n                        }, void 0, false, {\n                            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"submit\",\n                    className: (_assignments_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                    children: \"Add Assignment\"\n                }, void 0, false, {\n                    fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/assignments.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this));\n};\n_s(assignments, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hc3NpZ25tZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDSTs7QUFFN0IsUUFBUSxDQUFDSyxXQUFXLEdBQUcsQ0FBQzs7SUFDbkMsR0FBSyxDQUFtQkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUJLLElBQUksR0FBYUwsR0FBWSxLQUF2Qk0sT0FBTyxHQUFJTixHQUFZO0lBQ3BDLEdBQUssQ0FBQ08sWUFBWSxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDN0IsR0FBSyxDQUFDQyxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxHQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNDLFVBQVU7UUFDN0JELE1BQU0sQ0FBQ0UsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7WUFDdkIsR0FBSyxDQUFDQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0wsTUFBTSxDQUFDTSxNQUFNO1lBQzlCVixPQUFPLENBQUNVLE1BQU07UUFDbEIsQ0FBQztRQUNESixNQUFNLENBQUNLLGFBQWEsQ0FBQ1IsS0FBSztJQUM5QixDQUFDO0lBQ0QsR0FBSyxDQUFDUyxRQUFRLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztRQUNwQlosT0FBTyxDQUFDLElBQUk7SUFDaEIsQ0FBQztJQUNEUCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUssQ0FBQ29CLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBSztRQUN4Q0YsR0FBRyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ3RCLDJFQUFZO1FBQzlCa0IsR0FBRyxDQUFDTSxFQUFFLEdBQUcsQ0FBWTtRQUNyQnRCLHFEQUFvQixDQUFDLENBQWEsY0FBRXdCLFVBQVUsQ0FBQyxRQUFRLENBQVBDLGFBQWEsRUFBSyxDQUFDO1lBQy9ELEdBQUcsQ0FBQ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNqQkQsYUFBYSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztnQkFDNUJGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7b0JBQ1hDLEtBQUssRUFBRUYsR0FBRyxDQUFDRyxJQUFJLEdBQUdELEtBQUs7b0JBQ3ZCRSxPQUFPLEVBQUVKLEdBQUcsQ0FBQ0csSUFBSSxHQUFHQyxPQUFPO29CQUMzQkMsSUFBSSxFQUFFTCxHQUFHLENBQUNHLElBQUksR0FBR0csV0FBVztvQkFDNUJoQyxJQUFJLEVBQUUwQixHQUFHLENBQUNHLElBQUksR0FBRzdCLElBQUk7b0JBQ3JCaUMsSUFBSSxFQUFFUCxHQUFHLENBQUNHLElBQUksR0FBR0ksSUFBSTtvQkFDckJDLE1BQU0sRUFBRVIsR0FBRyxDQUFDRyxJQUFJLEdBQUdLLE1BQU07Z0JBQzdCLENBQUM7WUFDTCxDQUFDO1lBQ0QsR0FBSyxDQUFDQyxNQUFNLEdBQUdwQixRQUFRLENBQUNxQixjQUFjLENBQUMsQ0FBUTtZQUMvQyxHQUFHLENBQUUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUNiLFFBQVEsQ0FBQ2MsTUFBTSxFQUFFRCxDQUFDLEdBQUksQ0FBQztnQkFDckMsR0FBSyxDQUFDRSxTQUFTLEdBQUd4QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFLO2dCQUM5Q3VCLFNBQVMsQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQU07Z0JBQzlCcUIsU0FBUyxDQUFDdEIsU0FBUyxDQUFDQyxHQUFHLENBQUN0Qix3RUFBUztnQkFDakMsR0FBSyxDQUFDNkMsS0FBSyxHQUFHMUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBSztnQkFDMUN5QixLQUFLLENBQUNDLEdBQUcsR0FBR2xCLFFBQVEsQ0FBQ2EsQ0FBQyxFQUFFckMsSUFBSSxDQUFDMkMsUUFBUTtnQkFDckNKLFNBQVMsQ0FBQ0ssV0FBVyxDQUFDSCxLQUFLO2dCQUMzQjNCLEdBQUcsQ0FBQzhCLFdBQVcsQ0FBQ0wsU0FBUztZQUM3QixDQUFDO1lBQ0RKLE1BQU0sQ0FBQ1MsV0FBVyxDQUFDOUIsR0FBRztRQUMxQixDQUFDO1FBQ0RDLFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxDQUFRLFNBQUVTLGdCQUFnQixDQUFDLENBQU8sUUFBRSxRQUNwRSxHQUQwRSxDQUFDO1lBQy9ELEdBQUcsQ0FBQ0MsWUFBWSxHQUFHL0IsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLENBQU0sT0FBRVcsUUFBUTtZQUMvRCxHQUFHLENBQUNuQixLQUFLLEdBQUdrQixZQUFZLENBQUMsQ0FBQyxFQUFFRSxLQUFLO1lBQ2pDLEdBQUcsQ0FBQ2xCLE9BQU8sR0FBR2dCLFlBQVksQ0FBQyxDQUFDLEVBQUVFLEtBQUs7WUFDbkMsR0FBRyxDQUFDakIsSUFBSSxHQUFHZSxZQUFZLENBQUMsQ0FBQyxFQUFFRSxLQUFLO1lBQ2hDLEdBQUcsQ0FBQ2YsSUFBSSxHQUFHbEIsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLENBQU0sT0FBRVksS0FBSztZQUNoRGxELHFEQUFvQixDQUFFLENBQVcsY0FBR29CLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQ1UsS0FBSyxFQUFFQSxLQUFLO2dCQUNaRSxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCRSxXQUFXLEVBQUVELElBQUk7Z0JBQ2pCL0IsSUFBSSxFQUFFQSxJQUFJO2dCQUNWaUMsSUFBSSxFQUFFQSxJQUFJO2dCQUNWQyxNQUFNLEVBQUVyQyxvRUFBbUM7WUFDL0MsQ0FBQztZQUNELEdBQUssQ0FBQ3NELElBQUksR0FBR3BDLFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxDQUFZO1lBQ2pEZSxJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFFO1FBQ25CLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDRHRDLENBQUc7UUFBQ3VDLFNBQVMsRUFBRXpELHVFQUFRO1FBQUV3QixFQUFFLEVBQUMsQ0FBUTs4RkFDaENOLENBQUc7WUFBQ3VDLFNBQVMsRUFBRXpELHdFQUFTOzs0RkFDcEIwRCxDQUFFOzhCQUFDLENBQWlCOzs7Ozs7NEZBQ3BCQyxDQUFJO29CQUFDbkMsRUFBRSxFQUFDLENBQU07O29HQUNWb0MsQ0FBSzs0QkFBQ0gsU0FBUyxFQUFFekQsc0VBQU87NEJBQUU2RCxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQWtCOzRCQUFDQyxRQUFROzs7Ozs7b0dBQzdFSCxDQUFLOzRCQUFDSCxTQUFTLEVBQUV6RCx3RUFBUzs0QkFBRTZELElBQUksRUFBQyxDQUFNOzRCQUFDQyxXQUFXLEVBQUMsQ0FBUzs0QkFBQ0MsUUFBUTs7Ozs7O29HQUN0RUgsQ0FBSzs0QkFBQ0gsU0FBUyxFQUFFekQscUVBQU07NEJBQUU2RCxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsV0FBVyxFQUFDLENBQXdCOzs7Ozs7b0dBQ3pFRSxDQUFDO3NDQUFDLENBQVE7Ozs7OztvR0FDVkosQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNKLFNBQVMsRUFBRXpELHNFQUFPOzRCQUFFa0UsTUFBTSxFQUFDLENBQVM7NEJBQUNDLFFBQVEsRUFBRTdELFlBQVk7Ozs7OztvR0FDN0UwRCxDQUFDO3NDQUFDLENBQVE7Ozs7Ozt3QkFDVjVELElBQUksZ0ZBQUljLENBQUc7NEJBQUN1QyxTQUFTLEVBQUV6RCwyRUFBWTs7NEdBQUlxRSxDQUFHO29DQUFDWixTQUFTLEVBQUV6RCx3RUFBUztvQ0FBRThDLEdBQUcsRUFBRTFDLElBQUk7Ozs7Ozs0R0FBS21FLENBQU07b0NBQUNkLFNBQVMsRUFBRXpELHVFQUFRO29DQUFFeUUsT0FBTyxFQUFFeEQsUUFBUTs4Q0FBRSxDQUFZOzs7Ozs7Ozs7Ozs7b0dBQzFJK0MsQ0FBQztzQ0FBQyxDQUFVOzs7Ozs7b0dBQ1pKLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDckMsRUFBRSxFQUFDLENBQU07NEJBQUNpQyxTQUFTLEVBQUV6RCxxRUFBTTs7Ozs7Ozs7Ozs7OzRGQUVqRHVFLENBQU07b0JBQUMvQyxFQUFFLEVBQUMsQ0FBUTtvQkFBQ2lDLFNBQVMsRUFBRXpELHVFQUFROzhCQUFFLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZFLENBQUM7R0EvRXVCRyxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fzc2lnbm1lbnRzLmpzPzkwMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgaSBmcm9tIFwiLi9hc3NpZ25tZW50cy5tb2R1bGUuY3NzXCJcbmltcG9ydCB7YXV0aFNlcnZpY2UsIGRiU2VydmljZX0gZnJvbSBcIi4uL2ZiXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IChkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICBzZXRGaWxlKHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChhZmlsZSlcbiAgICB9XG4gICAgY29uc3Qgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHNldEZpbGUobnVsbClcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoaS5hc3NpZ25tZW50KVxuICAgICAgICBkaXYuaWQgPSBcImFzc2lnbm1lbnRcIlxuICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihcIkFzc2lnbm1lbnRzXCIpLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGxldCBhc2RmYXNkZiA9IFtdO1xuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICBhc2RmYXNkZi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IGRvYy5kYXRhKCkuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZGVzYzogZG9jLmRhdGEoKS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZG9jLmRhdGEoKS5maWxlLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBkb2MuZGF0YSgpLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcjogZG9jLmRhdGEoKS5hdXRob3JcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGJpZ0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlkRGl2XCIpXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYTxhc2RmYXNkZi5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpdHRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgbGl0dGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJhc2RmXCIpO1xuICAgICAgICAgICAgICAgIGxpdHRsZURpdi5jbGFzc0xpc3QuYWRkKGkuZm9ybURpdik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGFzZGZhc2RmW2FdLmZpbGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsaXR0bGVEaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGxpdHRsZURpdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaWdEaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5jaGlsZHJlblxuICAgICAgICBsZXQgdGl0bGUgPSBmb3JtQ2hpbGRyZW5bMF0udmFsdWVcbiAgICAgICAgbGV0IHN1YmplY3QgPSBmb3JtQ2hpbGRyZW5bMV0udmFsdWVcbiAgICAgICAgbGV0IGRlc2MgPSBmb3JtQ2hpbGRyZW5bMl0udmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWVcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYEFzc2lnbm1lbnRzYCkuYWRkKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgICAgYXV0aG9yOiBhdXRoU2VydmljZS5jdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYXNkZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNzaWdubWVudFwiKVxuICAgICAgICBhc2RmLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fSBpZD1cImJpZERpdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuZm9ybURpdn0+XG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhbiBBc3NpZ25tZW50PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS50aXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFzc2lnbm1lbnQgVGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLnN1YmplY3R9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17aS5kZXNjfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQXNzaWdubWVudCBEZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPlBob3RvczogPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9e2kucGhvdG99IGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17b25GaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5QcmV2aWV3OjwvcD5cbiAgICAgICAgICAgICAgICAgICAge2ZpbGUmJiA8ZGl2IGNsYXNzTmFtZT17aS5wcmV2aWV3RGl2fSA+PGltZyBjbGFzc05hbWU9e2kucHJldmlld30gc3JjPXtmaWxlfSAvPjxidXR0b24gY2xhc3NOYW1lPXtpLnJlbW92ZX0gb25DbGljaz17b25SZW1vdmV9PlJlbW92ZSBQaG90bzwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgICAgPHA+RHVlIERhdGU6IDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3NOYW1lPXtpLmRhdGV9IC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9e2kuc3VibWl0fT5BZGQgQXNzaWdubWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJhc3NpZ25tZW50cyIsImZpbGUiLCJzZXRGaWxlIiwib25GaWxlQ2hhbmdlIiwiZXZlbnQiLCJhZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwib25SZW1vdmUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhc3NpZ25tZW50IiwiaWQiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsInF1ZXJ5U25hcHNob3QiLCJhc2RmYXNkZiIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwidGl0bGUiLCJkYXRhIiwic3ViamVjdCIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJhdXRob3IiLCJiaWdEaXYiLCJnZXRFbGVtZW50QnlJZCIsImEiLCJsZW5ndGgiLCJsaXR0bGVEaXYiLCJmb3JtRGl2IiwiaW1hZ2UiLCJzcmMiLCJ0b1N0cmluZyIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm1DaGlsZHJlbiIsImNoaWxkcmVuIiwidmFsdWUiLCJjdXJyZW50VXNlciIsImRpc3BsYXlOYW1lIiwiYXNkZiIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJwIiwicGhvdG8iLCJhY2NlcHQiLCJvbkNoYW5nZSIsInByZXZpZXdEaXYiLCJpbWciLCJwcmV2aWV3IiwiYnV0dG9uIiwicmVtb3ZlIiwib25DbGljayIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/assignments.js\n");

/***/ })

});