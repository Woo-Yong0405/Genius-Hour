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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ contacts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction contacts() {\n    var getContacts = function getContacts() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(_fb__WEBPACK_IMPORTED_MODULE_1__.authService.currentUser.uid, \"/contacts\")).get().then(function(querySnapshot) {\n            querySnapshot.docs.map(function(doc) {\n                setContacts(contacts1, {\n                    name: doc.data().name,\n                    email: doc.data().email\n                });\n            });\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), contacts1 = ref[0], setContacts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.getElementById(\"submit\").addEventListener(\"click\", function() {\n            var name = document.getElementById(\"name\").value;\n            var email = document.getElementById(\"email\").value;\n            _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(\"Users/\".concat(_fb__WEBPACK_IMPORTED_MODULE_1__.authService.currentUser.uid, \"/contacts\")).add({\n                name: name,\n                email: email\n            });\n        });\n    });\n    if (_fb__WEBPACK_IMPORTED_MODULE_1__.authService) {\n        getContacts();\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_form),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"name\",\n                                    className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_name),\n                                    type: \"text\",\n                                    placeholder: \"Full Name\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"email\",\n                                    className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_email),\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                            id: \"submit\",\n                            children: \"Create Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this));\n};\n_s(contacts, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0g7QUFDTjs7QUFHdEIsUUFBUSxDQUFDSyxRQUFRLEdBQUcsQ0FBQztRQUV2QkMsV0FBVyxHQUFwQixRQUFRLENBQUNBLFdBQVcsR0FBRyxDQUFDO1FBQ3BCTCxxREFBb0IsQ0FBRSxDQUFNLFFBQThCLE1BQVMsQ0FBckNELDREQUEyQixFQUFDLENBQVMsYUFBR1UsR0FBRyxHQUFHQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsYUFBYSxFQUFJLENBQUM7WUFDL0ZBLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsR0FBRyxFQUFJLENBQUM7Z0JBQzNCQyxXQUFXLENBQUNYLFNBQVEsRUFBRSxDQUFDO29CQUNuQlksSUFBSSxFQUFFRixHQUFHLENBQUNHLElBQUksR0FBR0QsSUFBSTtvQkFDckJFLEtBQUssRUFBRUosR0FBRyxDQUFDRyxJQUFJLEdBQUdDLEtBQUs7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7O0lBVkQsR0FBSyxDQUEyQmhCLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBcENFLFNBQVEsR0FBaUJGLEdBQVksS0FBM0JhLFdBQVcsR0FBSWIsR0FBWTtJQVc1Q0QsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYmtCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVEsU0FBRUMsZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQ3BFLEdBRDBFLENBQUM7WUFDL0QsR0FBSyxDQUFDTCxJQUFJLEdBQUdHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU0sT0FBRUUsS0FBSztZQUNsRCxHQUFLLENBQUNKLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBTyxRQUFFRSxLQUFLO1lBQ3BEdEIscURBQW9CLENBQUUsQ0FBTSxRQUE4QixNQUFTLENBQXJDRCw0REFBMkIsRUFBQyxDQUFTLGFBQUd3QixHQUFHLENBQUMsQ0FBQztnQkFDdkVQLElBQUksRUFBRUEsSUFBSTtnQkFDVkUsS0FBSyxFQUFFQSxLQUFLO1lBQ2hCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELEVBQUUsRUFBRW5CLDRDQUFXLEVBQUUsQ0FBQztRQUVsQk0sV0FBVztJQUNYLENBQUM7SUFDRCxNQUFNLDZFQUNEbUIsQ0FBRztRQUFDQyxTQUFTLEVBQUV0QixvRUFBUTs7d0ZBQ25Cd0IsQ0FBRTswQkFBQyxDQUFjOzs7Ozs7d0ZBQ2pCSCxDQUFHO2dCQUFDQyxTQUFTLEVBQUV0QixzRUFBVTtzR0FDckJxQixDQUFHO29CQUFDQyxTQUFTLEVBQUV0QiwwRUFBYzs7b0dBQ3pCMEIsQ0FBSTs0QkFBQ0osU0FBUyxFQUFFdEIsMkVBQWU7OzRHQUMzQjRCLENBQUs7b0NBQUNDLEVBQUUsRUFBQyxDQUFNO29DQUFDUCxTQUFTLEVBQUV0QiwyRUFBZTtvQ0FBRStCLElBQUksRUFBQyxDQUFNO29DQUFDQyxXQUFXLEVBQUMsQ0FBVztvQ0FBQ0MsUUFBUTs7Ozs7OzRHQUN4RkwsQ0FBSztvQ0FBQ0MsRUFBRSxFQUFDLENBQU87b0NBQUNQLFNBQVMsRUFBRXRCLDRFQUFnQjtvQ0FBRStCLElBQUksRUFBQyxDQUFPO29DQUFDQyxXQUFXLEVBQUMsQ0FBTztvQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7O29HQUUzRkUsQ0FBTTs0QkFBQ2IsU0FBUyxFQUFFdEIsb0VBQVE7NEJBQUU2QixFQUFFLEVBQUMsQ0FBUTtzQ0FBRSxDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RSxDQUFDO0dBeEN1QjVCLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdHMuanM/MjY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoU2VydmljZSwgZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaSBmcm9tIFwiLi9jb250YWN0cy5tb2R1bGUuY3NzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdHMoKSB7XG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSlcbiAgICBmdW5jdGlvbiBnZXRDb250YWN0cygpIHtcbiAgICAgICAgZGJTZXJ2aWNlLmNvbGxlY3Rpb24oYFVzZXJzLyR7YXV0aFNlcnZpY2UuY3VycmVudFVzZXIudWlkfS9jb250YWN0c2ApLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XG4gICAgICAgICAgICBxdWVyeVNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q29udGFjdHMoY29udGFjdHMsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZG9jLmRhdGEoKS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZG9jLmRhdGEoKS5lbWFpbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKGBVc2Vycy8ke2F1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLnVpZH0vY29udGFjdHNgKS5hZGQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgaWYgKGF1dGhTZXJ2aWNlKSB7XG5cbiAgICBnZXRDb250YWN0cygpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8aDE+WW91ciBDb250YWN0czo8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuY29udGFjdHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX2JveH0+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17aS5jb250YWN0c19mb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzc05hbWU9e2kuY29udGFjdHNfbmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT17aS5jb250YWN0c19lbWFpbH0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2kuc3VibWl0fSBpZD1cInN1Ym1pdFwiID5DcmVhdGUgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJjb250YWN0cyIsImdldENvbnRhY3RzIiwiY29sbGVjdGlvbiIsImN1cnJlbnRVc2VyIiwidWlkIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJkb2NzIiwibWFwIiwiZG9jIiwic2V0Q29udGFjdHMiLCJuYW1lIiwiZGF0YSIsImVtYWlsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImFkZCIsImRpdiIsImNsYXNzTmFtZSIsImJpZ0RpdiIsImgxIiwiY29udGFjdHNfYm94IiwiZm9ybSIsImNvbnRhY3RzX2Zvcm0iLCJpbnB1dCIsImlkIiwiY29udGFjdHNfbmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiY29udGFjdHNfZW1haWwiLCJidXR0b24iLCJzdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ })

});