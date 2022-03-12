"use strict";
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 3817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lG": () => (/* binding */ firebaseInstance),
/* harmony export */   "ON": () => (/* binding */ authService),
/* harmony export */   "wO": () => (/* binding */ dbService)
/* harmony export */ });
/* unused harmony export storageService */
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3860);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4610);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6058);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
// Import the functions you need from the SDKs you need



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkkBmaS9aMPQmu_M-okHzaubzErRIDFg8",
    authDomain: "reading-424b6.firebaseapp.com",
    projectId: "reading-424b6",
    storageBucket: "reading-424b6.appspot.com",
    messagingSenderId: "379461173023",
    appId: "1:379461173023:web:47d6fa147c121728367a2a"
};
if ((firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) == 0) {
    const app = firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);
}
const firebaseInstance = (firebase__WEBPACK_IMPORTED_MODULE_0___default());
const authService = firebase__WEBPACK_IMPORTED_MODULE_0___default().auth();
const dbService = firebase__WEBPACK_IMPORTED_MODULE_0___default().firestore();
const storageService = firebase__WEBPACK_IMPORTED_MODULE_0___default().storage();


/***/ })

};
;