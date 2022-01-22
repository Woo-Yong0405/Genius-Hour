"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contacts",{

/***/ "./pages/contacts.js":
/*!***************************!*\
  !*** ./pages/contacts.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ contacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction contacts() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.authService.onAuthStateChanged(function(user) {\n            if (user) {\n                _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).onSnapshot(function(querySnapshot) {\n                    var boxes = [];\n                    querySnapshot.forEach(function(doc) {\n                        boxes.push({\n                            name: doc.data().name,\n                            email: doc.data().email\n                        });\n                    });\n                    for(var a = 0; a < boxes.length; a++){\n                        var container = document.getElementById(\"asdf\");\n                        var box = document.createElement(\"div\");\n                        box.classList.add((_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box));\n                        var name = document.createElement(\"p\");\n                        name.name = \"name\";\n                        name.innerText = boxes[a].name + \": \" + boxes[a].email;\n                        box.append(name);\n                        container.append(box);\n                        box.addEventListener(\"mouseover\", function(e) {\n                            var adf = e.target;\n                            adf.innerHTML = \"\\n                            <div>\\n        <button>Edit Contact</button>\\n        <button>Delete Contact</button>\\n        <button>Mail to Contact</button>\\n    </div>\\n                            \";\n                        });\n                        box.addEventListener(\"mouseleave\", function(e) {\n                            var b = document.createElement(\"p\");\n                            b.innerText = name.innerText;\n                            e.target.innerHTML = \"\";\n                            e.target.append(b);\n                        });\n                    }\n                });\n                document.getElementById(\"submit\").addEventListener(\"click\", function() {\n                    var nameinput = document.getElementById(\"name\");\n                    var name = nameinput.value;\n                    var emailinput = document.getElementById(\"email\");\n                    var email = emailinput.value;\n                    _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).add({\n                        name: nameinput.value,\n                        email: emailinput.value\n                    });\n                    var asdf = document.getElementById(\"asdf\");\n                    asdf.innerHTML = \"\";\n                    nameinput.value = \"\";\n                    emailinput.value = \"\";\n                });\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_name),\n                                type: \"text\",\n                                placeholder: \"Full Name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_email),\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                        id: \"submit\",\n                        children: \"Create Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 67,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"asdf\",\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts)\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this));\n};\n_s(contacts, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUU4QyxFQUFFLEVBQUMsQ0FBUTtrQ0FBRSxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBRS9EUCxDQUFHO2dCQUFDTyxFQUFFLEVBQUMsQ0FBTTtnQkFBQ04sU0FBUyxFQUFFeEMsc0VBQVU7Ozs7Ozs7Ozs7OztBQUloRCxDQUFDO0dBdkV1QkUsUUFBUTs7UUFDYkQsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdHMuanM/MjY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoU2VydmljZSwgZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaSBmcm9tIFwiLi9jb250YWN0cy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0cygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF1dGhTZXJ2aWNlLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihgVXNlcnMvJHt1c2VyLnVpZH0vY29udGFjdHNgKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkb2MuZGF0YSgpLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGJveGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzZGZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGkuY29udGFjdHNfYm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLm5hbWUgPSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lclRleHQgPSBib3hlc1thXS5uYW1lICsgXCI6IFwiICsgYm94ZXNbYV0uZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hcHBlbmQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGYgPSBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbj5FZGl0IENvbnRhY3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbj5EZWxldGUgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uPk1haWwgdG8gQ29udGFjdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmlubmVyVGV4dCA9IG5hbWUuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmFwcGVuZChiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZWlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZWlucHV0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9IGVtYWlsaW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYFVzZXJzLyR7dXNlci51aWR9L2NvbnRhY3RzYCkuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2RmXCIpXG4gICAgICAgICAgICAgICAgICAgIGFzZGYuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1laW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsaW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9PlxuICAgICAgICAgICAgPGgxPllvdXIgQ29udGFjdHM6PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5jb250YWN0c19ib3h9PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2kuY29udGFjdHNfZm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX25hbWV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBjbGFzc05hbWU9e2kuY29udGFjdHNfZW1haWx9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpLnN1Ym1pdH0gaWQ9XCJzdWJtaXRcIiA+Q3JlYXRlIENvbnRhY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc2RmXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwidXNlUm91dGVyIiwiY29udGFjdHMiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29sbGVjdGlvbiIsInVpZCIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYm94ZXMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJkYXRhIiwiZW1haWwiLCJhIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJveCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWN0c19ib3giLCJpbm5lclRleHQiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImFkZiIsInRhcmdldCIsImlubmVySFRNTCIsImIiLCJuYW1laW5wdXQiLCJ2YWx1ZSIsImVtYWlsaW5wdXQiLCJhc2RmIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmlnRGl2IiwiaDEiLCJmb3JtIiwiY29udGFjdHNfZm9ybSIsImlucHV0IiwiaWQiLCJjb250YWN0c19uYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJjb250YWN0c19lbWFpbCIsImJ1dHRvbiIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ })

});