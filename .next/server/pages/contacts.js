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
exports.id = "pages/contacts";
exports.ids = ["pages/contacts"];
exports.modules = {

/***/ "./pages/contacts.module.css":
/*!***********************************!*\
  !*** ./pages/contacts.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"bigDiv\": \"contacts_bigDiv__Uyo43\",\n\t\"contacts\": \"contacts_contacts__0_rlE\",\n\t\"contacts_box\": \"contacts_contacts_box__dg1Nd\",\n\t\"contacts_form\": \"contacts_contacts_form__Aw3cy\",\n\t\"contacts_name\": \"contacts_contacts_name___cauv\",\n\t\"submit\": \"contacts_submit__A5_av\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0cy5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYXBhbG1hLy4vcGFnZXMvY29udGFjdHMubW9kdWxlLmNzcz9lOWFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJpZ0RpdlwiOiBcImNvbnRhY3RzX2JpZ0Rpdl9fVXlvNDNcIixcblx0XCJjb250YWN0c1wiOiBcImNvbnRhY3RzX2NvbnRhY3RzX18wX3JsRVwiLFxuXHRcImNvbnRhY3RzX2JveFwiOiBcImNvbnRhY3RzX2NvbnRhY3RzX2JveF9fZGcxTmRcIixcblx0XCJjb250YWN0c19mb3JtXCI6IFwiY29udGFjdHNfY29udGFjdHNfZm9ybV9fQXczY3lcIixcblx0XCJjb250YWN0c19uYW1lXCI6IFwiY29udGFjdHNfY29udGFjdHNfbmFtZV9fX2NhdXZcIixcblx0XCJzdWJtaXRcIjogXCJjb250YWN0c19zdWJtaXRfX0E1X2F2XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contacts.module.css\n");

/***/ }),

/***/ "./fb.js":
/*!***************!*\
  !*** ./fb.js ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseInstance\": () => (/* binding */ firebaseInstance),\n/* harmony export */   \"authService\": () => (/* binding */ authService),\n/* harmony export */   \"dbService\": () => (/* binding */ dbService)\n/* harmony export */ });\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDkkBmaS9aMPQmu_M-okHzaubzErRIDFg8\",\n    authDomain: \"reading-424b6.firebaseapp.com\",\n    projectId: \"reading-424b6\",\n    storageBucket: \"reading-424b6.appspot.com\",\n    messagingSenderId: \"379461173023\",\n    appId: \"1:379461173023:web:47d6fa147c121728367a2a\"\n};\nif ((firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) == 0) {\n    const app = firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);\n}\nconst firebaseInstance = (firebase__WEBPACK_IMPORTED_MODULE_0___default());\nconst authService = firebase__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst dbService = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQXVEO0FBQ3hCO0FBQy9CLEVBQTREO0FBQzVELEVBQWlFO0FBRWpFLEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0MsY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQStCO0lBQzNDQyxTQUFTLEVBQUUsQ0FBZTtJQUMxQkMsYUFBYSxFQUFFLENBQTJCO0lBQzFDQyxpQkFBaUIsRUFBRSxDQUFjO0lBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7QUFDcEQsQ0FBQztBQUVELEVBQUUsRUFBRVAsNkRBQW9CLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUIsS0FBSyxDQUFDVSxHQUFHLEdBQUdWLDZEQUFzQixDQUFDQyxjQUFjO0FBQ25ELENBQUM7QUFFTSxLQUFLLENBQUNXLGdCQUFnQixHQUFHWixpREFBUTtBQUNqQyxLQUFLLENBQUNhLFdBQVcsR0FBR2Isb0RBQWE7QUFDakMsS0FBSyxDQUFDZSxTQUFTLEdBQUdmLHlEQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYXBhbG1hLy4vZmIuanM/OWJiOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEa2tCbWFTOWFNUFFtdV9NLW9rSHphdWJ6RXJSSURGZzhcIixcbiAgYXV0aERvbWFpbjogXCJyZWFkaW5nLTQyNGI2LmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwicmVhZGluZy00MjRiNlwiLCBcbiAgc3RvcmFnZUJ1Y2tldDogXCJyZWFkaW5nLTQyNGI2LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3OTQ2MTE3MzAyM1wiLFxuICBhcHBJZDogXCIxOjM3OTQ2MTE3MzAyMzp3ZWI6NDdkNmZhMTQ3YzEyMTcyODM2N2EyYVwiXG59O1xuXG5pZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT0gMCkge1xuICBjb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlSW5zdGFuY2UgPSBmaXJlYmFzZVxuZXhwb3J0IGNvbnN0IGF1dGhTZXJ2aWNlID0gZmlyZWJhc2UuYXV0aCgpXG5leHBvcnQgY29uc3QgZGJTZXJ2aWNlID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkiXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcHMiLCJsZW5ndGgiLCJhcHAiLCJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VJbnN0YW5jZSIsImF1dGhTZXJ2aWNlIiwiYXV0aCIsImRiU2VydmljZSIsImZpcmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./fb.js\n");

/***/ }),

/***/ "./pages/contacts.js":
/*!***************************!*\
  !*** ./pages/contacts.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contacts)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fb */ \"./fb.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts.module.css */ \"./pages/contacts.module.css\");\n/* harmony import */ var _contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contacts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction contacts() {\n    const { 0: contacts1 , 1: setContacts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    function getContacts() {\n        _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(`Users/${_fb__WEBPACK_IMPORTED_MODULE_1__.authService.currentUser.uid}/contacts`).get().then((querySnapshot)=>{\n            querySnapshot.docs.map((doc)=>{\n                setContacts(contacts1, {\n                    name: doc.data().name,\n                    email: doc.data().email\n                });\n            });\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        document.getElementById(\"submit\").addEventListener(\"click\", ()=>{\n            const name = document.getElementById(\"name\").value;\n            const email = document.getElementById(\"email\").value;\n            _fb__WEBPACK_IMPORTED_MODULE_1__.dbService.collection(`Users/${_fb__WEBPACK_IMPORTED_MODULE_1__.authService.currentUser.uid}/contacts`).add({\n                name: name,\n                email: email\n            });\n        });\n        setTimeout(getContacts(), 20);\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().bigDiv),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Contacts:\"\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_form),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"name\",\n                                    className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_name),\n                                    type: \"text\",\n                                    placeholder: \"Full Name\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"email\",\n                                    className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().contacts_email),\n                                    type: \"email\",\n                                    placeholder: \"Email\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_contacts_module_css__WEBPACK_IMPORTED_MODULE_3___default().submit),\n                            id: \"submit\",\n                            children: \"Create Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wooyong/jjapalma/pages/contacts.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSDtBQUNOO0FBR3RCLFFBQVEsQ0FBQ0ssUUFBUSxHQUFHLENBQUM7SUFDaEMsS0FBSyxNQUFFQSxTQUFRLE1BQUVDLFdBQVcsTUFBSUgsK0NBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbENJLFdBQVcsR0FBSSxDQUFDO1FBQ3JCTixxREFBb0IsRUFBRSxNQUFNLEVBQUVELDREQUEyQixDQUFDLFNBQVMsR0FBR1csR0FBRyxHQUFHQyxJQUFJLEVBQUNDLGFBQWEsR0FBSSxDQUFDO1lBQy9GQSxhQUFhLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxFQUFDQyxHQUFHLEdBQUksQ0FBQztnQkFDM0JWLFdBQVcsQ0FBQ0QsU0FBUSxFQUFFLENBQUM7b0JBQ25CWSxJQUFJLEVBQUVELEdBQUcsQ0FBQ0UsSUFBSSxHQUFHRCxJQUFJO29CQUNyQkUsS0FBSyxFQUFFSCxHQUFHLENBQUNFLElBQUksR0FBR0MsS0FBSztnQkFDM0IsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNEakIsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JrQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFRLFNBQUVDLGdCQUFnQixDQUFDLENBQU8sWUFBUSxDQUFDO1lBQy9ELEtBQUssQ0FBQ0wsSUFBSSxHQUFHRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFNLE9BQUVFLEtBQUs7WUFDbEQsS0FBSyxDQUFDSixLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQU8sUUFBRUUsS0FBSztZQUNwRHRCLHFEQUFvQixFQUFFLE1BQU0sRUFBRUQsNERBQTJCLENBQUMsU0FBUyxHQUFHd0IsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZFUCxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZFLEtBQUssRUFBRUEsS0FBSztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNETSxVQUFVLENBQUNsQixXQUFXLElBQUksRUFBRTtJQUNoQyxDQUFDO0lBQ0QsTUFBTSw2RUFDRG1CLENBQUc7UUFBQ0MsU0FBUyxFQUFFdkIsb0VBQVE7O3dGQUNuQnlCLENBQUU7MEJBQUMsQ0FBYzs7Ozs7O3dGQUNqQkgsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFdkIsc0VBQVU7c0dBQ3JCc0IsQ0FBRztvQkFBQ0MsU0FBUyxFQUFFdkIsMEVBQWM7O29HQUN6QjJCLENBQUk7NEJBQUNKLFNBQVMsRUFBRXZCLDJFQUFlOzs0R0FDM0I2QixDQUFLO29DQUFDQyxFQUFFLEVBQUMsQ0FBTTtvQ0FBQ1AsU0FBUyxFQUFFdkIsMkVBQWU7b0NBQUVnQyxJQUFJLEVBQUMsQ0FBTTtvQ0FBQ0MsV0FBVyxFQUFDLENBQVc7b0NBQUNDLFFBQVE7Ozs7Ozs0R0FDeEZMLENBQUs7b0NBQUNDLEVBQUUsRUFBQyxDQUFPO29DQUFDUCxTQUFTLEVBQUV2Qiw0RUFBZ0I7b0NBQUVnQyxJQUFJLEVBQUMsQ0FBTztvQ0FBQ0MsV0FBVyxFQUFDLENBQU87b0NBQUNDLFFBQVE7Ozs7Ozs7Ozs7OztvR0FFM0ZFLENBQU07NEJBQUNiLFNBQVMsRUFBRXZCLG9FQUFROzRCQUFFOEIsRUFBRSxFQUFDLENBQVE7c0NBQUUsQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYXBhbG1hLy4vcGFnZXMvY29udGFjdHMuanM/MjY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoU2VydmljZSwgZGJTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZiXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaSBmcm9tIFwiLi9jb250YWN0cy5tb2R1bGUuY3NzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdHMoKSB7XG4gICAgY29uc3QgW2NvbnRhY3RzLCBzZXRDb250YWN0c10gPSB1c2VTdGF0ZShbXSlcbiAgICBmdW5jdGlvbiBnZXRDb250YWN0cygpICB7XG4gICAgICAgIGRiU2VydmljZS5jb2xsZWN0aW9uKGBVc2Vycy8ke2F1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLnVpZH0vY29udGFjdHNgKS5nZXQoKS50aGVuKHF1ZXJ5U25hcHNob3QgPT4ge1xuICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICAgICAgICAgIHNldENvbnRhY3RzKGNvbnRhY3RzLCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGRvYy5kYXRhKCkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGRvYy5kYXRhKCkuZW1haWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWU7XG4gICAgICAgICAgICBkYlNlcnZpY2UuY29sbGVjdGlvbihgVXNlcnMvJHthdXRoU2VydmljZS5jdXJyZW50VXNlci51aWR9L2NvbnRhY3RzYCkuYWRkKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgc2V0VGltZW91dChnZXRDb250YWN0cygpLCAyMClcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmJpZ0Rpdn0+XG4gICAgICAgICAgICA8aDE+WW91ciBDb250YWN0czo8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2kuY29udGFjdHN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpLmNvbnRhY3RzX2JveH0+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17aS5jb250YWN0c19mb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBjbGFzc05hbWU9e2kuY29udGFjdHNfbmFtZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgTmFtZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGNsYXNzTmFtZT17aS5jb250YWN0c19lbWFpbH0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2kuc3VibWl0fSBpZD1cInN1Ym1pdFwiID5DcmVhdGUgQ29udGFjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiYXV0aFNlcnZpY2UiLCJkYlNlcnZpY2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImkiLCJjb250YWN0cyIsInNldENvbnRhY3RzIiwiZ2V0Q29udGFjdHMiLCJjb2xsZWN0aW9uIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJuYW1lIiwiZGF0YSIsImVtYWlsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImFkZCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJiaWdEaXYiLCJoMSIsImNvbnRhY3RzX2JveCIsImZvcm0iLCJjb250YWN0c19mb3JtIiwiaW5wdXQiLCJpZCIsImNvbnRhY3RzX25hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImNvbnRhY3RzX2VtYWlsIiwiYnV0dG9uIiwic3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/contacts.js\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

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
var __webpack_exports__ = (__webpack_exec__("./pages/contacts.js"));
module.exports = __webpack_exports__;

})();