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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ contacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction contacts() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.authService.onAuthStateChanged(function(user) {\n            if (user) {\n                _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).onSnapshot(function(querySnapshot) {\n                    var boxes = [];\n                    querySnapshot.forEach(function(doc) {\n                        boxes.push({\n                            name: doc.data().name,\n                            email: doc.data().email\n                        });\n                    });\n                    for(var a = 0; a < boxes.length; a++){\n                        var container = document.getElementById(\"asdf\");\n                        var box = document.createElement(\"div\");\n                        box.classList.add((_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box));\n                        var name = document.createElement(\"p\");\n                        name.name = \"name\";\n                        name.innerText = boxes[a].name + \": \" + boxes[a].email;\n                        box.append(name);\n                        container.append(box);\n                        box.addEventListener(\"mouseenter\", function(e) {\n                            var adf = e.target;\n                            adf.innerHTML = \"\";\n                            var btn1 = document.createElement(\"button\");\n                            btn1.id = \"btn1\";\n                            btn1.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn1.innerText = \"Edit Contact\";\n                            var btn2 = document.createElement(\"button\");\n                            btn2.id = \"btn1\";\n                            btn2.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn2.innerText = \"Delete Contact\";\n                            var btn3 = document.createElement(\"button\");\n                            btn3.id = \"btn1\";\n                            btn3.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn3.innerText = \"Mail to this Email\";\n                            adf.append(btn1);\n                            adf.append(btn2);\n                            adf.append(btn3);\n                        }, true);\n                        box.addEventListener(\"mouseleave\", function(e) {\n                            var b = document.createElement(\"p\");\n                            b.innerText = name.innerText;\n                            e.target.innerHTML = \"\";\n                            e.target.append(b);\n                        });\n                    }\n                });\n                document.getElementById(\"submit\").addEventListener(\"click\", function() {\n                    var nameinput = document.getElementById(\"name\");\n                    var emailinput = document.getElementById(\"email\");\n                    _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).add({\n                        name: nameinput.value,\n                        email: emailinput.value\n                    });\n                    var asdf = document.getElementById(\"asdf\");\n                    asdf.innerHTML = \"\";\n                    nameinput.value = \"\";\n                    emailinput.value = \"\";\n                });\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_name),\n                                type: \"text\",\n                                placeholder: \"Full Name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_email),\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                        id: \"submit\",\n                        children: \"Create Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 74,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"asdf\",\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts)\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this));\n};\n_s(contacts, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBRyxDQUFFO2dCQUN6QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFDREUsQ0FBRztRQUFDVCxTQUFTLEVBQUVwQyxvRUFBUTs7d0ZBQ25CK0MsQ0FBRTswQkFBQyxDQUFjOzs7Ozs7d0ZBQ2JGLENBQUc7Z0JBQUNULFNBQVMsRUFBRXBDLDBFQUFjOztnR0FDekJnRCxDQUFJO3dCQUFDWixTQUFTLEVBQUVwQywyRUFBZTs7d0dBQzNCa0QsQ0FBSztnQ0FBQ2YsRUFBRSxFQUFDLENBQU07Z0NBQUNDLFNBQVMsRUFBRXBDLDJFQUFlO2dDQUFFb0QsSUFBSSxFQUFDLENBQU07Z0NBQUNDLFdBQVcsRUFBQyxDQUFXO2dDQUFDQyxRQUFROzs7Ozs7d0dBQ3hGSixDQUFLO2dDQUFDZixFQUFFLEVBQUMsQ0FBTztnQ0FBQ0MsU0FBUyxFQUFFcEMsNEVBQWdCO2dDQUFFb0QsSUFBSSxFQUFDLENBQU87Z0NBQUNDLFdBQVcsRUFBQyxDQUFPO2dDQUFDQyxRQUFROzs7Ozs7Ozs7Ozs7Z0dBRTNGRSxDQUFNO3dCQUFDcEIsU0FBUyxFQUFFcEMsb0VBQVE7d0JBQUVtQyxFQUFFLEVBQUMsQ0FBUTtrQ0FBRSxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBRS9EVSxDQUFHO2dCQUFDVixFQUFFLEVBQUMsQ0FBTTtnQkFBQ0MsU0FBUyxFQUFFcEMsc0VBQVU7Ozs7Ozs7Ozs7OztBQUloRCxDQUFDO0dBOUV1QkUsUUFBUTs7UUFDYkQsa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdHMuanM/MjY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoU2VydmljZSwgZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaSBmcm9tIFwiLi9jb250YWN0cy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0cygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF1dGhTZXJ2aWNlLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihgVXNlcnMvJHt1c2VyLnVpZH0vY29udGFjdHNgKS5vblNuYXBzaG90KChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBkb2MuZGF0YSgpLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGJveGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzZGZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGkuY29udGFjdHNfYm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLm5hbWUgPSBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lclRleHQgPSBib3hlc1thXS5uYW1lICsgXCI6IFwiICsgYm94ZXNbYV0uZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hcHBlbmQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRmID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGYuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMS5pZCA9IFwiYnRuMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMS5jbGFzc05hbWUgPSBpLmNvbnRhY3RzX2J1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4xLmlubmVyVGV4dCA9IFwiRWRpdCBDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjIuaWQgPSBcImJ0bjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjIuY2xhc3NOYW1lID0gaS5jb250YWN0c19idXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMi5pbm5lclRleHQgPSBcIkRlbGV0ZSBDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjMuaWQgPSBcImJ0bjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjMuY2xhc3NOYW1lID0gaS5jb250YWN0c19idXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMy5pbm5lclRleHQgPSBcIk1haWwgdG8gdGhpcyBFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRmLmFwcGVuZChidG4xKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZi5hcHBlbmQoYnRuMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGYuYXBwZW5kKGJ0bjMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYi5pbm5lclRleHQgPSBuYW1lLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5hcHBlbmQoYilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1haWxpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XG4gICAgICAgICAgICAgICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKGBVc2Vycy8ke3VzZXIudWlkfS9jb250YWN0c2ApLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1laW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWxpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNkZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNkZlwiKVxuICAgICAgICAgICAgICAgICAgICBhc2RmLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZWlucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICBlbWFpbGlucHV0LnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuYmlnRGl2fT5cbiAgICAgICAgICAgIDxoMT5Zb3VyIENvbnRhY3RzOjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuY29udGFjdHNfYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtpLmNvbnRhY3RzX2Zvcm19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGNsYXNzTmFtZT17aS5jb250YWN0c19uYW1lfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRnVsbCBOYW1lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX2VtYWlsfSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aS5zdWJtaXR9IGlkPVwic3VibWl0XCIgPkNyZWF0ZSBDb250YWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXNkZlwiIGNsYXNzTmFtZT17aS5jb250YWN0c30+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJhdXRoU2VydmljZSIsImRiU2VydmljZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaSIsInVzZVJvdXRlciIsImNvbnRhY3RzIiwicm91dGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImNvbGxlY3Rpb24iLCJ1aWQiLCJvblNuYXBzaG90IiwicXVlcnlTbmFwc2hvdCIsImJveGVzIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJuYW1lIiwiZGF0YSIsImVtYWlsIiwiYSIsImxlbmd0aCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib3giLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFjdHNfYm94IiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhZGYiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJidG4xIiwiaWQiLCJjbGFzc05hbWUiLCJjb250YWN0c19idXR0b25zIiwiYnRuMiIsImJ0bjMiLCJiIiwibmFtZWlucHV0IiwiZW1haWxpbnB1dCIsInZhbHVlIiwiYXNkZiIsImRpdiIsImJpZ0RpdiIsImgxIiwiZm9ybSIsImNvbnRhY3RzX2Zvcm0iLCJpbnB1dCIsImNvbnRhY3RzX25hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImNvbnRhY3RzX2VtYWlsIiwiYnV0dG9uIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ })

});