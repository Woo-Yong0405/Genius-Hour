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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ contacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction contacts() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.authService.onAuthStateChanged(function(user) {\n            if (user) {\n                _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).onSnapshot(function(querySnapshot) {\n                    var boxes = [];\n                    querySnapshot.forEach(function(doc) {\n                        boxes.push({\n                            name: doc.data().name,\n                            email: doc.data().email\n                        });\n                    });\n                    for(var a = 0; a < boxes.length; a++){\n                        var container = document.getElementById(\"asdf\");\n                        var box = document.createElement(\"div\");\n                        box.classList.add((_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box));\n                        var name = document.createElement(\"p\");\n                        name.name = \"name\";\n                        name.innerText = boxes[a].name + \": \" + boxes[a].email;\n                        box.append(name);\n                        container.append(box);\n                        box.addEventListener(\"mouseenter\", function(e) {\n                            var adf = e.target;\n                            adf.innerHTML = \"\";\n                            var btn1 = document.createElement(\"button\");\n                            btn1.id = \"btn1\";\n                            btn1.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn1.innerText = \"Edit Contact\";\n                            var btn2 = document.createElement(\"button\");\n                            btn2.id = \"btn1\";\n                            btn2.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn2.innerText = \"Delete Contact\";\n                            var btn3 = document.createElement(\"button\");\n                            btn3.id = \"btn1\";\n                            btn3.className = (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_buttons);\n                            btn3.innerText = \"Mail to this Email\";\n                            adf.append(btn1);\n                            adf.append(btn2);\n                            adf.append(btn3);\n                            var composed = e.composedPath();\n                            console.log(composed[0]);\n                        }, true);\n                        box.addEventListener(\"mouseleave\", function(e) {\n                            var b = document.createElement(\"p\");\n                            b.innerText = name.innerText;\n                            e.target.innerHTML = \"\";\n                            e.target.append(b);\n                        });\n                    }\n                });\n                document.getElementById(\"submit\").addEventListener(\"click\", function() {\n                    var nameinput = document.getElementById(\"name\");\n                    var emailinput = document.getElementById(\"email\");\n                    _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(user.uid, \"/contacts\")).add({\n                        name: nameinput.value,\n                        email: emailinput.value\n                    });\n                    var asdf = document.getElementById(\"asdf\");\n                    asdf.innerHTML = \"\";\n                    nameinput.value = \"\";\n                    emailinput.value = \"\";\n                });\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"name\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_name),\n                                type: \"text\",\n                                placeholder: \"Full Name\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 78,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts_email),\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                        id: \"submit\",\n                        children: \"Create Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 76,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"asdf\",\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_4___default().contacts)\n            }, void 0, false, {\n                fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/GGUL/Documents/Genius-Hour/pages/contacts.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this));\n};\n_s(contacts, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTTtvQkFDM0MyQixJQUFJLENBQUNmLFNBQVMsR0FBRyxDQUFFO29CQUNuQlksU0FBUyxDQUFDRSxLQUFLLEdBQUcsQ0FBRTtvQkFDcEJELFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLENBQUU7Z0JBQ3pCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxNQUFNLDZFQUNERSxDQUFHO1FBQUNiLFNBQVMsRUFBRXBDLG9FQUFROzt3RkFDbkJtRCxDQUFFOzBCQUFDLENBQWM7Ozs7Ozt3RkFDYkYsQ0FBRztnQkFBQ2IsU0FBUyxFQUFFcEMsMEVBQWM7O2dHQUN6Qm9ELENBQUk7d0JBQUNoQixTQUFTLEVBQUVwQywyRUFBZTs7d0dBQzNCc0QsQ0FBSztnQ0FBQ25CLEVBQUUsRUFBQyxDQUFNO2dDQUFDQyxTQUFTLEVBQUVwQywyRUFBZTtnQ0FBRXdELElBQUksRUFBQyxDQUFNO2dDQUFDQyxXQUFXLEVBQUMsQ0FBVztnQ0FBQ0MsUUFBUTs7Ozs7O3dHQUN4RkosQ0FBSztnQ0FBQ25CLEVBQUUsRUFBQyxDQUFPO2dDQUFDQyxTQUFTLEVBQUVwQyw0RUFBZ0I7Z0NBQUV3RCxJQUFJLEVBQUMsQ0FBTztnQ0FBQ0MsV0FBVyxFQUFDLENBQU87Z0NBQUNDLFFBQVE7Ozs7Ozs7Ozs7OztnR0FFM0ZFLENBQU07d0JBQUN4QixTQUFTLEVBQUVwQyxvRUFBUTt3QkFBRW1DLEVBQUUsRUFBQyxDQUFRO2tDQUFFLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFFL0RjLENBQUc7Z0JBQUNkLEVBQUUsRUFBQyxDQUFNO2dCQUFDQyxTQUFTLEVBQUVwQyxzRUFBVTs7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7R0FoRnVCRSxRQUFROztRQUNiRCxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb250YWN0cy5qcz8yNjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhTZXJ2aWNlLCBkYlNlcnZpY2UgfSBmcm9tIFwiLi4vZmJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpIGZyb20gXCIuL2NvbnRhY3RzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RzKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXV0aFNlcnZpY2Uub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKGBVc2Vycy8ke3VzZXIudWlkfS9jb250YWN0c2ApLm9uU25hcHNob3QoKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJveGVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkb2MuZGF0YSgpLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGRvYy5kYXRhKCkuZW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYm94ZXMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNkZlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoaS5jb250YWN0c19ib3gpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUubmFtZSA9IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLmlubmVyVGV4dCA9IGJveGVzW2FdLm5hbWUgKyBcIjogXCIgKyBib3hlc1thXS5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFwcGVuZChuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChib3gpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGYgPSBlLnRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZi5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4xLmlkID0gXCJidG4xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4xLmNsYXNzTmFtZSA9IGkuY29udGFjdHNfYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjEuaW5uZXJUZXh0ID0gXCJFZGl0IENvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMi5pZCA9IFwiYnRuMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMi5jbGFzc05hbWUgPSBpLmNvbnRhY3RzX2J1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4yLmlubmVyVGV4dCA9IFwiRGVsZXRlIENvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMy5pZCA9IFwiYnRuMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuMy5jbGFzc05hbWUgPSBpLmNvbnRhY3RzX2J1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4zLmlubmVyVGV4dCA9IFwiTWFpbCB0byB0aGlzIEVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGYuYXBwZW5kKGJ0bjEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRmLmFwcGVuZChidG4yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZi5hcHBlbmQoYnRuMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wb3NlZCA9IGUuY29tcG9zZWRQYXRoKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wb3NlZFswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiLmlubmVyVGV4dCA9IG5hbWUuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmFwcGVuZChiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZWlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbWFpbGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYFVzZXJzLyR7dXNlci51aWR9L2NvbnRhY3RzYCkuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2RmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2RmXCIpXG4gICAgICAgICAgICAgICAgICAgIGFzZGYuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICBuYW1laW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsaW5wdXQudmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9PlxuICAgICAgICAgICAgPGgxPllvdXIgQ29udGFjdHM6PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5jb250YWN0c19ib3h9PlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2kuY29udGFjdHNfZm9ybX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX25hbWV9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBjbGFzc05hbWU9e2kuY29udGFjdHNfZW1haWx9IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpLnN1Ym1pdH0gaWQ9XCJzdWJtaXRcIiA+Q3JlYXRlIENvbnRhY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhc2RmXCIgY2xhc3NOYW1lPXtpLmNvbnRhY3RzfT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwiZGJTZXJ2aWNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpIiwidXNlUm91dGVyIiwiY29udGFjdHMiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29sbGVjdGlvbiIsInVpZCIsIm9uU25hcHNob3QiLCJxdWVyeVNuYXBzaG90IiwiYm94ZXMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsIm5hbWUiLCJkYXRhIiwiZW1haWwiLCJhIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJveCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWN0c19ib3giLCJpbm5lclRleHQiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImFkZiIsInRhcmdldCIsImlubmVySFRNTCIsImJ0bjEiLCJpZCIsImNsYXNzTmFtZSIsImNvbnRhY3RzX2J1dHRvbnMiLCJidG4yIiwiYnRuMyIsImNvbXBvc2VkIiwiY29tcG9zZWRQYXRoIiwiY29uc29sZSIsImxvZyIsImIiLCJuYW1laW5wdXQiLCJlbWFpbGlucHV0IiwidmFsdWUiLCJhc2RmIiwiZGl2IiwiYmlnRGl2IiwiaDEiLCJmb3JtIiwiY29udGFjdHNfZm9ybSIsImlucHV0IiwiY29udGFjdHNfbmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiY29udGFjdHNfZW1haWwiLCJidXR0b24iLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ })

});