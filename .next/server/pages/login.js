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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.module.css":
/*!********************************!*\
  !*** ./pages/login.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"bigDiv\": \"login_bigDiv__T0rR0\",\n\t\"btn\": \"login_btn__HN6zr\",\n\t\"input\": \"login_input__lsj3C\",\n\t\"button\": \"login_button__VF_3Q\",\n\t\"form\": \"login_form__bMXal\",\n\t\"login\": \"login_login__tJI_v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYXBhbG1hLy4vcGFnZXMvbG9naW4ubW9kdWxlLmNzcz82OTFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJpZ0RpdlwiOiBcImxvZ2luX2JpZ0Rpdl9fVDByUjBcIixcblx0XCJidG5cIjogXCJsb2dpbl9idG5fX0hONnpyXCIsXG5cdFwiaW5wdXRcIjogXCJsb2dpbl9pbnB1dF9fbHNqM0NcIixcblx0XCJidXR0b25cIjogXCJsb2dpbl9idXR0b25fX1ZGXzNRXCIsXG5cdFwiZm9ybVwiOiBcImxvZ2luX2Zvcm1fX2JNWGFsXCIsXG5cdFwibG9naW5cIjogXCJsb2dpbl9sb2dpbl9fdEpJX3ZcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.module.css\n");

/***/ }),

/***/ "./fb.js":
/*!***************!*\
  !*** ./fb.js ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseInstance\": () => (/* binding */ firebaseInstance),\n/* harmony export */   \"authService\": () => (/* binding */ authService),\n/* harmony export */   \"dbService\": () => (/* binding */ dbService)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDkkBmaS9aMPQmu_M-okHzaubzErRIDFg8\",\n    authDomain: \"reading-424b6.firebaseapp.com\",\n    projectId: \"reading-424b6\",\n    storageBucket: \"reading-424b6.appspot.com\",\n    messagingSenderId: \"379461173023\",\n    appId: \"1:379461173023:web:47d6fa147c121728367a2a\"\n};\nif ((firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) == 0) {\n    const app = firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\nconst firebaseInstance = (firebase__WEBPACK_IMPORTED_MODULE_0___default());\nconst authService = firebase__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst dbService = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQXVEO0FBQ3hCO0FBQy9CLEVBQTREO0FBQzVELEVBQWlFO0FBRWpFLEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQStCO0lBQzNDQyxTQUFTLEVBQUUsQ0FBZTtJQUMxQkMsYUFBYSxFQUFFLENBQTJCO0lBQzFDQyxpQkFBaUIsRUFBRSxDQUFjO0lBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7QUFDcEQsQ0FBQztBQUVELEVBQUUsRUFBRVAsNkRBQW9CLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUIsS0FBSyxDQUFDVSxHQUFHLEdBQUdWLDZEQUFzQixDQUFDQyxjQUFjO0FBQ25ELENBQUM7QUFFTSxLQUFLLENBQUNXLGdCQUFnQixHQUFHWixpREFBUTtBQUNqQyxLQUFLLENBQUNhLFdBQVcsR0FBR2Isb0RBQWE7QUFDakMsS0FBSyxDQUFDZSxTQUFTLEdBQUdmLHlEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYXBhbG1hLy4vZmIuanM/OWJiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEa2tCbWFTOWFNUFFtdV9NLW9rSHphdWJ6RXJSSURGZzhcIixcbiAgYXV0aERvbWFpbjogXCJyZWFkaW5nLTQyNGI2LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwicmVhZGluZy00MjRiNlwiLCBcbiAgc3RvcmFnZUJ1Y2tldDogXCJyZWFkaW5nLTQyNGI2LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3OTQ2MTE3MzAyM1wiLFxuICBhcHBJZDogXCIxOjM3OTQ2MTE3MzAyMzp3ZWI6NDdkNmZhMTQ3YzEyMTcyODM2N2EyYVwiXG59O1xuXG5pZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT0gMCkge1xuICBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlSW5zdGFuY2UgPSBmaXJlYmFzZVxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gZmlyZWJhc2UuYXV0aCgpXG5leHBvcnQgY29uc3QgZGJTZXJ2aWNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcHMiLCJsZW5ndGgiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VJbnN0YW5jZSIsImF1dGhTZXJ2aWNlIiwiYXV0aCIsImRiU2VydmljZSIsImZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./fb.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.module.css */ \"./pages/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n\n\n\n\n\nfunction login() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: pw , 1: setPw  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleGoogleClick = async ()=>{\n        try {\n            const provider = new _fb__WEBPACK_IMPORTED_MODULE_3__.firebaseInstance.auth.GoogleAuthProvider();\n            _fb__WEBPACK_IMPORTED_MODULE_3__.authService.signInWithPopup(provider);\n            await router.push(\"/\");\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().login),\n                children: \"Log In\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                onClick: handleGoogleClick,\n                children: \"Log In Using Google\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    error1,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        type: \"text\",\n                        required: true,\n                        placeholder: \"E-mail\",\n                        name: \"email\",\n                        id: \"email\",\n                        onChange: ()=>{\n                            setEmail(document.getElementById(\"email\").value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        type: \"password\",\n                        required: true,\n                        placeholder: \"Password\",\n                        name: \"pw\",\n                        id: \"pw\",\n                        onChange: ()=>{\n                            setPw(document.getElementById(\"pw\").value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_login_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                onClick: async ()=>{\n                    try {\n                        await _fb__WEBPACK_IMPORTED_MODULE_3__.authService.signInWithEmailAndPassword(email, pw);\n                        router.push(\"/\");\n                    } catch (error) {\n                        setError(error.message);\n                    }\n                },\n                children: \"Log In\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wooyong/jjapalma/pages/login.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNQO0FBQ0U7QUFDaUI7QUFFcEMsUUFBUSxDQUFDSyxLQUFLLEdBQUcsQ0FBQztJQUM3QixLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLENBQUU7SUFDckMsS0FBSyxNQUFFTyxFQUFFLE1BQUVDLEtBQUssTUFBSVIsK0NBQVEsQ0FBQyxDQUFFO0lBQy9CLEtBQUssTUFBRVMsTUFBSyxNQUFFQyxRQUFRLE1BQUlWLCtDQUFRLENBQUMsQ0FBRTtJQUNyQyxLQUFLLENBQUNXLE1BQU0sR0FBR1osc0RBQVM7SUFDeEIsS0FBSyxDQUFDYSxpQkFBaUIsYUFBZSxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFDO1lBQ0QsS0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDVix5RUFBd0M7WUFDN0RELDREQUEyQixDQUFDVyxRQUFRO1lBQ3BDLEtBQUssQ0FBQ0YsTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBRztRQUN6QixDQUFDLENBQUMsS0FBSyxFQUFFUixLQUFLLEVBQUUsQ0FBQztZQUNiQyxRQUFRLENBQUNELEtBQUssQ0FBQ1MsT0FBTztRQUMxQixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sNkVBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFFbkIsaUVBQVE7O3dGQUNuQnFCLENBQUU7Z0JBQUNGLFNBQVMsRUFBRW5CLGdFQUFPOzBCQUFFLENBQU07Ozs7Ozt3RkFDN0JzQixDQUFNO2dCQUFDSCxTQUFTLEVBQUVuQiw4REFBSztnQkFBRXdCLE9BQU8sRUFBRWIsaUJBQWlCOzBCQUFFLENBQW1COzs7Ozs7d0ZBQ3hFYyxDQUFJO2dCQUFDTixTQUFTLEVBQUVuQiwrREFBTTs7b0JBQ2xCUSxNQUFLO2dHQUNMa0IsQ0FBSzt3QkFBQ1AsU0FBUyxFQUFFbkIsZ0VBQU87d0JBQUUyQixJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsUUFBUTt3QkFBQ0MsV0FBVyxFQUFDLENBQVE7d0JBQUNDLElBQUksRUFBQyxDQUFPO3dCQUFDQyxFQUFFLEVBQUMsQ0FBTzt3QkFBQ0MsUUFBUSxNQUFRLENBQUM7NEJBQzFHM0IsUUFBUSxDQUFDNEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBTyxRQUFFQyxLQUFLO3dCQUNuRCxDQUFDOzs7Ozs7Z0dBQ0FULENBQUs7d0JBQUNQLFNBQVMsRUFBRW5CLGdFQUFPO3dCQUFFMkIsSUFBSSxFQUFDLENBQVU7d0JBQUNDLFFBQVE7d0JBQUNDLFdBQVcsRUFBQyxDQUFVO3dCQUFDQyxJQUFJLEVBQUMsQ0FBSTt3QkFBQ0MsRUFBRSxFQUFDLENBQUk7d0JBQUNDLFFBQVEsTUFBUSxDQUFDOzRCQUMxR3pCLEtBQUssQ0FBQzBCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQUksS0FBRUMsS0FBSzt3QkFDN0MsQ0FBQzs7Ozs7Ozs7Ozs7O3dGQUVKYixDQUFNO2dCQUFDSCxTQUFTLEVBQUVuQixpRUFBUTtnQkFBRXdCLE9BQU8sWUFBYyxDQUFDO29CQUMzQyxHQUFHLENBQUMsQ0FBQzt3QkFDRCxLQUFLLENBQUN2Qix1RUFBc0MsQ0FBQ0csS0FBSyxFQUFFRSxFQUFFO3dCQUN0REksTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBRztvQkFDbkIsQ0FBQyxDQUFDLEtBQUssRUFBRVIsS0FBSyxFQUFFLENBQUM7d0JBQ2JDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDUyxPQUFPO29CQUMxQixDQUFDO2dCQUNMLENBQUM7MEJBQUUsQ0FBTTs7Ozs7Ozs7Ozs7O0FBR3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qamFwYWxtYS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGkgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHthdXRoU2VydmljZSwgZmlyZWJhc2VJbnN0YW5jZX0gZnJvbSBcIi4uL2ZiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcHcsIHNldFB3XSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGhhbmRsZUdvb2dsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2VJbnN0YW5jZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgICAgICAgICAgYXV0aFNlcnZpY2Uuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxuICAgICAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goXCIvXCIpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtpLmxvZ2lufT5Mb2cgSW48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2kuYnRufSBvbkNsaWNrPXtoYW5kbGVHb29nbGVDbGlja30+TG9nIEluIFVzaW5nIEdvb2dsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtpLmZvcm19PlxuICAgICAgICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmlucHV0fSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWUpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtpLmlucHV0fSB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgbmFtZT1cInB3XCIgaWQ9XCJwd1wiIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFB3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHdcIikudmFsdWUpXG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpLmJ1dHRvbn0gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXV0aFNlcnZpY2Uuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHB3KVxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX0+TG9nIEluPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpIiwiYXV0aFNlcnZpY2UiLCJmaXJlYmFzZUluc3RhbmNlIiwibG9naW4iLCJlbWFpbCIsInNldEVtYWlsIiwicHciLCJzZXRQdyIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJoYW5kbGVHb29nbGVDbGljayIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInB1c2giLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmlnRGl2IiwiaDEiLCJidXR0b24iLCJidG4iLCJvbkNsaWNrIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();