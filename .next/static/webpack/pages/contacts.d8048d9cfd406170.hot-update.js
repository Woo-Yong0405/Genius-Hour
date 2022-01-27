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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ contacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction contacts() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.authService.onAuthStateChanged(function(user) {\n            if (user) {\n                _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).onSnapshot(function(querySnapshot) {\n                    var boxes = [];\n                    querySnapshot.forEach(function(doc) {\n                        boxes.push({\n                            name: doc.data().name,\n                            email: doc.data().email\n                        });\n                    });\n                    for(var a = 0; a < boxes.length; a++){\n                        var container = document.getElementById(\"asdf\");\n                        var box = document.createElement(\"div\");\n                        box.classList.add((_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box));\n                        var name = document.createElement(\"p\");\n                        name.innerText = boxes[a].name + \": \" + boxes[a].email;\n                        box.append(name);\n                        container.append(box);\n                        box.addEventListener(\"mouseover\", function() {\n                            box.contains(\"p\");\n                        });\n                    }\n                });\n                document.getElementById(\"submit\").addEventListener(\"click\", function() {\n                    var name = document.getElementById(\"name\").value;\n                    var email = document.getElementById(\"email\").value;\n                    _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).add({\n                        name: name,\n                        email: email\n                    });\n                    var asdf = document.getElementById(\"asdf\");\n                    asdf.innerHTML = \"\";\n                });\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_name),\n                                type: \"text\",\n                                placeholder: \"Full Name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_email),\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                        id: \"submit\",\n                        children: \"Create Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"asdf\",\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts)\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this));\n};\n_s(contacts, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7Ozs7Ozt3RkFDYkgsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFbkMsMEVBQWM7O2dHQUN6QnNDLENBQUk7d0JBQUNILFNBQVMsRUFBRW5DLDJFQUFlOzt3R0FDM0J3QyxDQUFLO2dDQUFDQyxFQUFFLEVBQUMsQ0FBTTtnQ0FBQ04sU0FBUyxFQUFFbkMsMkVBQWU7Z0NBQUUyQyxJQUFJLEVBQUMsQ0FBTTtnQ0FBQ0MsV0FBVyxFQUFDLENBQVc7Z0NBQUNDLFFBQVE7Ozs7Ozt3R0FDeEZMLENBQUs7Z0NBQUNDLEVBQUUsRUFBQyxDQUFPO2dDQUFDTixTQUFTLEVBQUVuQyw0RUFBZ0I7Z0NBQUUyQyxJQUFJLEVBQUMsQ0FBTztnQ0FBQ0MsV0FBVyxFQUFDLENBQU87Z0NBQUNDLFFBQVE7Ozs7Ozs7Ozs7OztnR0FFM0ZFLENBQU07d0JBQUNaLFNBQVMsRUFBRW5DLG9FQUFRO3dCQUFFeUMsRUFBRSxFQUFDLENBQVE7a0NBQUUsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUUvRFAsQ0FBRztnQkFBQ08sRUFBRSxFQUFDLENBQU07Z0JBQUNOLFNBQVMsRUFBRW5DLHNFQUFVOzs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQXJEdUJFLFFBQVE7O1FBQ2JELGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3RzLmpzPzI2NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aFNlcnZpY2UsIGRiU2VydmljZSB9IGZyb20gXCIuLi9mYlwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGkgZnJvbSBcIi4vY29udGFjdHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdHMoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdXRoU2VydmljZS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYFVzZXJzLyR7dXNlci51aWR9L2NvbnRhY3RzYCkub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm94ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRvYy5kYXRhKCkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZG9jLmRhdGEoKS5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBib3hlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2RmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChpLmNvbnRhY3RzX2JveClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5pbm5lclRleHQgPSBib3hlc1thXS5uYW1lICsgXCI6IFwiICsgYm94ZXNbYV0uZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hcHBlbmQobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jb250YWlucyhcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYFVzZXJzLyR7dXNlci51aWR9L2NvbnRhY3RzYCkuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzZGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzZGZcIilcbiAgICAgICAgICAgICAgICAgICAgYXNkZi5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9PlxuICAgICAgICAgICAgPGgxPllvdXIgQ29udGFjdHM6PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5jb250YWN0c19ib3h9PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2kuY29udGFjdHNfZm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX25hbWV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBjbGFzc05hbWU9e2kuY29udGFjdHNfZW1haWx9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpLnN1Ym1pdH0gaWQ9XCJzdWJtaXRcIiA+Q3JlYXRlIENvbnRhY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc2RmXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwidXNlUm91dGVyIiwiY29udGFjdHMiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29sbGVjdGlvbiIsInVpZCIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYm94ZXMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJkYXRhIiwiZW1haWwiLCJhIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJveCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWN0c19ib3giLCJpbm5lclRleHQiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGFpbnMiLCJ2YWx1ZSIsImFzZGYiLCJpbm5lckhUTUwiLCJkaXYiLCJjbGFzc05hbWUiLCJiaWdEaXYiLCJoMSIsImZvcm0iLCJjb250YWN0c19mb3JtIiwiaW5wdXQiLCJpZCIsImNvbnRhY3RzX25hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImNvbnRhY3RzX2VtYWlsIiwiYnV0dG9uIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ })

});