"use strict";
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 5088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8470);




const AuthRoute = ({ children  })=>{
    const auth = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: isVerified , 1: setIsVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (auth.isAuthenticated) {
            router.push("/");
        } else {
            setIsVerified(true);
        }
    }, [
        auth.isAuthenticated,
        router
    ]);
    if (!isVerified) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthRoute);


/***/ }),

/***/ 8470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_TokenAuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3008);


const useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_TokenAuthContext__WEBPACK_IMPORTED_MODULE_1__/* .AuthContext */ .Vo);


/***/ })

};
;