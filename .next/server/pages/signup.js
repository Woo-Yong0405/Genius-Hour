/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup.module.css":
/*!*********************************!*\
  !*** ./pages/signup.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"bigDiv\": \"signup_bigDiv__bRm1i\",\n\t\"btn\": \"signup_btn__tnU2f\",\n\t\"input\": \"signup_input__uhAol\",\n\t\"button\": \"signup_button__W93Mi\",\n\t\"form\": \"signup_form__bqooH\",\n\t\"login\": \"signup_login__v6EZ2\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qamFwYWxtYS8uL3BhZ2VzL3NpZ251cC5tb2R1bGUuY3NzP2JkNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmlnRGl2XCI6IFwic2lnbnVwX2JpZ0Rpdl9fYlJtMWlcIixcblx0XCJidG5cIjogXCJzaWdudXBfYnRuX190blUyZlwiLFxuXHRcImlucHV0XCI6IFwic2lnbnVwX2lucHV0X191aEFvbFwiLFxuXHRcImJ1dHRvblwiOiBcInNpZ251cF9idXR0b25fX1c5M01pXCIsXG5cdFwiZm9ybVwiOiBcInNpZ251cF9mb3JtX19icW9vSFwiLFxuXHRcImxvZ2luXCI6IFwic2lnbnVwX2xvZ2luX192NkVaMlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.module.css\n");

/***/ }),

/***/ "./fb.js":
/*!***************!*\
  !*** ./fb.js ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseInstance\": () => (/* binding */ firebaseInstance),\n/* harmony export */   \"authService\": () => (/* binding */ authService),\n/* harmony export */   \"dbService\": () => (/* binding */ dbService)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDkkBmaS9aMPQmu_M-okHzaubzErRIDFg8\",\n    authDomain: \"reading-424b6.firebaseapp.com\",\n    projectId: \"reading-424b6\",\n    storageBucket: \"reading-424b6.appspot.com\",\n    messagingSenderId: \"379461173023\",\n    appId: \"1:379461173023:web:47d6fa147c121728367a2a\"\n};\nif ((firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) == 0) {\n    const app = firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\nconst firebaseInstance = (firebase__WEBPACK_IMPORTED_MODULE_0___default());\nconst authService = firebase__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst dbService = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQXVEO0FBQ3hCO0FBQy9CLEVBQTREO0FBQzVELEVBQWlFO0FBRWpFLEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQStCO0lBQzNDQyxTQUFTLEVBQUUsQ0FBZTtJQUMxQkMsYUFBYSxFQUFFLENBQTJCO0lBQzFDQyxpQkFBaUIsRUFBRSxDQUFjO0lBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7QUFDcEQsQ0FBQztBQUVELEVBQUUsRUFBRVAsNkRBQW9CLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUIsS0FBSyxDQUFDVSxHQUFHLEdBQUdWLDZEQUFzQixDQUFDQyxjQUFjO0FBQ25ELENBQUM7QUFFTSxLQUFLLENBQUNXLGdCQUFnQixHQUFHWixpREFBUTtBQUNqQyxLQUFLLENBQUNhLFdBQVcsR0FBR2Isb0RBQWE7QUFDakMsS0FBSyxDQUFDZSxTQUFTLEdBQUdmLHlEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYXBhbG1hLy4vZmIuanM/OWJiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEa2tCbWFTOWFNUFFtdV9NLW9rSHphdWJ6RXJSSURGZzhcIixcbiAgYXV0aERvbWFpbjogXCJyZWFkaW5nLTQyNGI2LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwicmVhZGluZy00MjRiNlwiLCBcbiAgc3RvcmFnZUJ1Y2tldDogXCJyZWFkaW5nLTQyNGI2LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3OTQ2MTE3MzAyM1wiLFxuICBhcHBJZDogXCIxOjM3OTQ2MTE3MzAyMzp3ZWI6NDdkNmZhMTQ3YzEyMTcyODM2N2EyYVwiXG59O1xuXG5pZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT0gMCkge1xuICBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlSW5zdGFuY2UgPSBmaXJlYmFzZVxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gZmlyZWJhc2UuYXV0aCgpXG5leHBvcnQgY29uc3QgZGJTZXJ2aWNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcHMiLCJsZW5ndGgiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VJbnN0YW5jZSIsImF1dGhTZXJ2aWNlIiwiYXV0aCIsImRiU2VydmljZSIsImZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./fb.js\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var _signup_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.module.css */ \"./pages/signup.module.css\");\n/* harmony import */ var _signup_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_signup_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction home() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: pw , 1: setPw  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleGoogleClick = async ()=>{\n        const provider = new firebaseInstance.auth.GoogleAuthProvider();\n        _fb__WEBPACK_IMPORTED_MODULE_3__.authService.signInWithPopup(provider);\n        await router.push(\"/\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                onClick: handleGoogleClick,\n                children: \"Sign Up Using Google\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    error1,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        type: \"text\",\n                        required: true,\n                        placeholder: \"E-mail\",\n                        name: \"email\",\n                        id: \"email\",\n                        onChange: ()=>{\n                            setEmail(document.getElementById(\"email\").value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        type: \"password\",\n                        required: true,\n                        placeholder: \"Password\",\n                        name: \"pw\",\n                        id: \"pw\",\n                        onChange: ()=>{\n                            setPw(document.getElementById(\"pw\").value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_signup_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                onClick: async ()=>{\n                    try {\n                        await _fb__WEBPACK_IMPORTED_MODULE_3__.authService.createUserWithEmailAndPassword(email, pw);\n                        router.push(\"/\");\n                    } catch (error) {\n                        setError(error.message);\n                    }\n                },\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wooyong/jjapalma/pages/signup.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUDtBQUNHO0FBQ0E7QUFFcEIsUUFBUSxDQUFDSSxJQUFJLEdBQUcsQ0FBQztJQUM1QixLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLENBQUU7SUFDckMsS0FBSyxNQUFFTSxFQUFFLE1BQUVDLEtBQUssTUFBSVAsK0NBQVEsQ0FBQyxDQUFFO0lBQy9CLEtBQUssTUFBRVEsTUFBSyxNQUFFQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsQ0FBRTtJQUNyQyxLQUFLLENBQUNVLE1BQU0sR0FBR1gsc0RBQVM7SUFDeEIsS0FBSyxDQUFDWSxpQkFBaUIsYUFBZSxDQUFDO1FBQ25DLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUNDLElBQUksQ0FBQ0Msa0JBQWtCO1FBQzdEZCw0REFBMkIsQ0FBQ1csUUFBUTtRQUNwQyxLQUFLLENBQUNGLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLENBQUc7SUFDekIsQ0FBQztJQUNELE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFFakIsa0VBQVE7O3dGQUNuQm1CLENBQUU7Z0JBQUNGLFNBQVMsRUFBRWpCLGlFQUFPOzBCQUFFLENBQU87Ozs7Ozt3RkFDOUJxQixDQUFNO2dCQUFDSixTQUFTLEVBQUVqQiwrREFBSztnQkFBRXVCLE9BQU8sRUFBRWQsaUJBQWlCOzBCQUFFLENBQW9COzs7Ozs7d0ZBQ3pFZSxDQUFJO2dCQUFDUCxTQUFTLEVBQUVqQixnRUFBTTs7b0JBQ2xCTSxNQUFLO2dHQUNMbUIsQ0FBSzt3QkFBQ1IsU0FBUyxFQUFFakIsaUVBQU87d0JBQUUwQixJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsUUFBUTt3QkFBQ0MsV0FBVyxFQUFDLENBQVE7d0JBQUNDLElBQUksRUFBQyxDQUFPO3dCQUFDQyxFQUFFLEVBQUMsQ0FBTzt3QkFBQ0MsUUFBUSxNQUFRLENBQUM7NEJBQzFHNUIsUUFBUSxDQUFDNkIsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBTyxRQUFFQyxLQUFLO3dCQUNuRCxDQUFDOzs7Ozs7Z0dBQ0FULENBQUs7d0JBQUNSLFNBQVMsRUFBRWpCLGlFQUFPO3dCQUFFMEIsSUFBSSxFQUFDLENBQVU7d0JBQUNDLFFBQVE7d0JBQUNDLFdBQVcsRUFBQyxDQUFVO3dCQUFDQyxJQUFJLEVBQUMsQ0FBSTt3QkFBQ0MsRUFBRSxFQUFDLENBQUk7d0JBQUNDLFFBQVEsTUFBUSxDQUFDOzRCQUMxRzFCLEtBQUssQ0FBQzJCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQUksS0FBRUMsS0FBSzt3QkFDN0MsQ0FBQzs7Ozs7Ozs7Ozs7O3dGQUVKYixDQUFNO2dCQUFDSixTQUFTLEVBQUVqQixrRUFBUTtnQkFBRXVCLE9BQU8sWUFBYyxDQUFDO29CQUMzQyxHQUFHLENBQUMsQ0FBQzt3QkFDRCxLQUFLLENBQUN4QiwyRUFBMEMsQ0FBQ0csS0FBSyxFQUFFRSxFQUFFO3dCQUMxREksTUFBTSxDQUFDTyxJQUFJLENBQUMsQ0FBRztvQkFDbkIsQ0FBQyxDQUFDLEtBQUssRUFBRVQsS0FBSyxFQUFFLENBQUM7d0JBQ2JDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDOEIsT0FBTztvQkFDMUIsQ0FBQztnQkFDTCxDQUFDOzBCQUFFLENBQU87Ozs7Ozs7Ozs7OztBQUcxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamphcGFsbWEvLi9wYWdlcy9zaWdudXAuanM/Y2E4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gXCIuLi9mYlwiO1xuaW1wb3J0IGkgZnJvbSBcIi4vc2lnbnVwLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW3B3LCBzZXRQd10gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBoYW5kbGVHb29nbGVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2VJbnN0YW5jZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgICAgICBhdXRoU2VydmljZS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpXG4gICAgICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aS5iaWdEaXZ9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17aS5sb2dpbn0+U2lnbiBVcDwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17aS5idG59IG9uQ2xpY2s9e2hhbmRsZUdvb2dsZUNsaWNrfT5TaWduIFVwIFVzaW5nIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtpLmZvcm19PlxuICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmlucHV0fSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWUpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmlucHV0fSB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgbmFtZT1cInB3XCIgaWQ9XCJwd1wiIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFB3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHdcIikudmFsdWUpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpLmJ1dHRvbn0gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXV0aFNlcnZpY2UuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwdylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19PlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImF1dGhTZXJ2aWNlIiwiaSIsImhvbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicHciLCJzZXRQdyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVHb29nbGVDbGljayIsInByb3ZpZGVyIiwiZmlyZWJhc2VJbnN0YW5jZSIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmlnRGl2IiwiaDEiLCJsb2dpbiIsImJ1dHRvbiIsImJ0biIsIm9uQ2xpY2siLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJpZCIsIm9uQ2hhbmdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup.js"));
module.exports = __webpack_exports__;

})();