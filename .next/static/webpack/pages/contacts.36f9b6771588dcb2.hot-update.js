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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ contacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction contacts() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.authService.onAuthStateChanged(function(user) {\n            if (user) {\n                _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).onSnapshot(function(querySnapshot) {\n                    var boxes = [];\n                    querySnapshot.forEach(function(doc) {\n                        boxes.push({\n                            name: doc.data().name,\n                            email: doc.data().email\n                        });\n                    });\n                    for(var a = 0; a < boxes.length; a++){\n                        var container = document.getElementById(\"asdf\");\n                        var box = document.createElement(\"div\");\n                        box.classList.add((_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box));\n                        var name = document.createElement(\"p\");\n                        name.name = \"name\";\n                        name.innerText = boxes[a].name + \": \" + boxes[a].email;\n                        box.append(name);\n                        container.append(box);\n                        box.addEventListener(\"mouseenter\", function(e) {\n                            var adf = e.target;\n                            adf.innerHTML = \"\";\n                            var btn1 = document.createElement(\"button\");\n                            btn1.id = \"btn1\";\n                            btn1.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn1.innerText = \"Edit Contact\";\n                            var btn2 = document.createElement(\"button\");\n                            btn2.id = \"btn1\";\n                            btn2.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn2.innerText = \"Delete Contact\";\n                            var btn3 = document.createElement(\"button\");\n                            btn3.id = \"btn1\";\n                            btn3.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn3.innerText = \"Mail to this Email\";\n                            adf.append(btn1);\n                            adf.append(btn2);\n                            adf.append(btn3);\n                            console.log(e.composedPath[0]);\n                        }, true);\n                        box.addEventListener(\"mouseleave\", function(e) {\n                            var b = document.createElement(\"p\");\n                            b.innerText = name.innerText;\n                            e.target.innerHTML = \"\";\n                            e.target.append(b);\n                        });\n                    }\n                });\n                document.getElementById(\"submit\").addEventListener(\"click\", function() {\n                    var nameinput = document.getElementById(\"name\");\n                    var emailinput = document.getElementById(\"email\");\n                    _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).add({\n                        name: nameinput.value,\n                        email: emailinput.value\n                    });\n                    var asdf = document.getElementById(\"asdf\");\n                    asdf.innerHTML = \"\";\n                    nameinput.value = \"\";\n                    emailinput.value = \"\";\n                });\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_name),\n                                type: \"text\",\n                                placeholder: \"Full Name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_email),\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                        id: \"submit\",\n                        children: \"Create Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"asdf\",\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts)\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this));\n};\n_s(contacts, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO29CQUNuQlcsU0FBUyxDQUFDRSxLQUFLLEdBQUcsQ0FBRTtvQkFDcEJELFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLENBQUU7Z0JBQ3pCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNERSxDQUFHO1FBQUNaLFNBQVMsRUFBRXBDLG9FQUFROzt3RkFDbkJrRCxDQUFFOzBCQUFDLENBQWM7Ozs7Ozt3RkFDYkYsQ0FBRztnQkFBQ1osU0FBUyxFQUFFcEMsMEVBQWM7O2dHQUN6Qm1ELENBQUk7d0JBQUNmLFNBQVMsRUFBRXBDLDJFQUFlOzt3R0FDM0JxRCxDQUFLO2dDQUFDbEIsRUFBRSxFQUFDLENBQU07Z0NBQUNDLFNBQVMsRUFBRXBDLDJFQUFlO2dDQUFFdUQsSUFBSSxFQUFDLENBQU07Z0NBQUNDLFdBQVcsRUFBQyxDQUFXO2dDQUFDQyxRQUFROzs7Ozs7d0dBQ3hGSixDQUFLO2dDQUFDbEIsRUFBRSxFQUFDLENBQU87Z0NBQUNDLFNBQVMsRUFBRXBDLDRFQUFnQjtnQ0FBRXVELElBQUksRUFBQyxDQUFPO2dDQUFDQyxXQUFXLEVBQUMsQ0FBTztnQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7O2dHQUUzRkUsQ0FBTTt3QkFBQ3ZCLFNBQVMsRUFBRXBDLG9FQUFRO3dCQUFFbUMsRUFBRSxFQUFDLENBQVE7a0NBQUUsQ0FBYzs7Ozs7Ozs7Ozs7O3dGQUUvRGEsQ0FBRztnQkFBQ2IsRUFBRSxFQUFDLENBQU07Z0JBQUNDLFNBQVMsRUFBRXBDLHNFQUFVOzs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQS9FdUJFLFFBQVE7O1FBQ2JELGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3RzLmpzPzI2NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aFNlcnZpY2UsIGRiU2VydmljZSB9IGZyb20gXCIuLi9mYlwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGkgZnJvbSBcIi4vY29udGFjdHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdHMoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhdXRoU2VydmljZS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYFVzZXJzLyR7dXNlci51aWR9L2NvbnRhY3RzYCkub25TbmFwc2hvdCgocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm94ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRvYy5kYXRhKCkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZG9jLmRhdGEoKS5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBib3hlcy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2RmXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChpLmNvbnRhY3RzX2JveClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5uYW1lID0gXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gYm94ZXNbYV0ubmFtZSArIFwiOiBcIiArIGJveGVzW2FdLmVtYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYXBwZW5kKG5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGJveClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZiA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRmLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjEuaWQgPSBcImJ0bjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjEuY2xhc3NOYW1lID0gaS5jb250YWN0c19idXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMS5pbm5lclRleHQgPSBcIkVkaXQgQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4yLmlkID0gXCJidG4xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4yLmNsYXNzTmFtZSA9IGkuY29udGFjdHNfYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjIuaW5uZXJUZXh0ID0gXCJEZWxldGUgQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4zLmlkID0gXCJidG4xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4zLmNsYXNzTmFtZSA9IGkuY29udGFjdHNfYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjMuaW5uZXJUZXh0ID0gXCJNYWlsIHRvIHRoaXMgRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZi5hcHBlbmQoYnRuMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGYuYXBwZW5kKGJ0bjIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRmLmFwcGVuZChidG4zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY29tcG9zZWRQYXRoWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuaW5uZXJUZXh0ID0gbmFtZS5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuYXBwZW5kKGIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1laW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihgVXNlcnMvJHt1c2VyLnVpZH0vY29udGFjdHNgKS5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZWlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzZGYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzZGZcIilcbiAgICAgICAgICAgICAgICAgICAgYXNkZi5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWVpbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxpbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8aDE+WW91ciBDb250YWN0czo8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX2JveH0+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17aS5jb250YWN0c19mb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzc05hbWU9e2kuY29udGFjdHNfbmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT17aS5jb250YWN0c19lbWFpbH0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2kuc3VibWl0fSBpZD1cInN1Ym1pdFwiID5DcmVhdGUgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFzZGZcIiBjbGFzc05hbWU9e2kuY29udGFjdHN9PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJ1c2VSb3V0ZXIiLCJjb250YWN0cyIsInJvdXRlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJjb2xsZWN0aW9uIiwidWlkIiwib25TbmFwc2hvdCIsInF1ZXJ5U25hcHNob3QiLCJib3hlcyIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwibmFtZSIsImRhdGEiLCJlbWFpbCIsImEiLCJsZW5ndGgiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm94IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRhY3RzX2JveCIsImlubmVyVGV4dCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYWRmIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiYnRuMSIsImlkIiwiY2xhc3NOYW1lIiwiY29udGFjdHNfYnV0dG9ucyIsImJ0bjIiLCJidG4zIiwiY29uc29sZSIsImxvZyIsImNvbXBvc2VkUGF0aCIsImIiLCJuYW1laW5wdXQiLCJlbWFpbGlucHV0IiwidmFsdWUiLCJhc2RmIiwiZGl2IiwiYmlnRGl2IiwiaDEiLCJmb3JtIiwiY29udGFjdHNfZm9ybSIsImlucHV0IiwiY29udGFjdHNfbmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiY29udGFjdHNfZW1haWwiLCJidXR0b24iLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ })

});