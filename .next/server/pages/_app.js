(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1375:
/***/ ((module) => {

// Exports
module.exports = {
	"bar": "NavBar_bar__M3JFi",
	"logo": "NavBar_logo__C2v21",
	"active": "NavBar_active__tG_1I"
};


/***/ }),

/***/ 6694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/NavBar.module.css
var NavBar_module = __webpack_require__(1375);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
;// CONCATENATED MODULE: ./components/NavBar.js




function NavBar(prop) {
    const router = (0,router_.useRouter)();
    console.log(prop.isLoggedIn);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (NavBar_module_default()).bar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (NavBar_module_default()).logo,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: "MCA"
                })
            }),
            prop.isLoggedIn ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: router.pathname === "/" ? (NavBar_module_default()).active : "",
                                children: "Home"
                            })
                        })
                    }),
                    "|",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/assignments",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: router.pathname === "/assignments" ? (NavBar_module_default()).active : "",
                                children: "Assignments"
                            })
                        })
                    }),
                    "|",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/contacts",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: router.pathname === "/contacts" ? (NavBar_module_default()).active : "",
                                children: "Contacts"
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: router.pathname === "/" ? (NavBar_module_default()).active : "",
                                children: "Home"
                            })
                        })
                    }),
                    "|",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: router.pathname === "/login" ? (NavBar_module_default()).active : "",
                                children: "Log In"
                            })
                        })
                    }),
                    "|",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/signup",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: router.pathname === "/signup" ? (NavBar_module_default()).active : "",
                                children: "Sign Up"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./fb.js
var fb = __webpack_require__(3817);
;// CONCATENATED MODULE: ./pages/_app.js





function Home({ Component , pageProps  }) {
    const { 0: asdf , 1: setAsdf  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        fb/* authService.onAuthStateChanged */.ON.onAuthStateChanged((user)=>{
            if (user) {
                setAsdf(true);
            }
        });
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {
                isLoggedIn: asdf
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "as",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    isLoggedIn: asdf,
                    ...pageProps
                })
            })
        ]
    }));
};


/***/ }),

/***/ 3860:
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),

/***/ 4610:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ 6058:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,817], () => (__webpack_exec__(6694)));
module.exports = __webpack_exports__;

})();