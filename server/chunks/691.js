"use strict";
exports.id = 691;
exports.ids = [691,88];
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

/***/ 5519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* reexport */ Authenticated)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/hooks/useAuth.ts
var useAuth = __webpack_require__(8470);
;// CONCATENATED MODULE: ./src/components/Authenticated/Authenticated.tsx




const Authenticated = ({ children  })=>{
    const auth = (0,useAuth/* useAuth */.a)();
    const router = (0,router_.useRouter)();
    const { 0: verified , 1: setVerified  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!router.isReady) {
            return;
        }
        if (!auth.isAuthenticated) {
            router.push({
                pathname: "/auth/login",
                query: {
                    backTo: router.asPath
                }
            });
        } else {
            setVerified(true);
        }
    }, [
        router.isReady,
        auth.isAuthenticated,
        router
    ]);
    if (!verified) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};

// EXTERNAL MODULE: ./src/components/Authenticated/AuthRoute.tsx
var AuthRoute = __webpack_require__(5088);
;// CONCATENATED MODULE: ./src/components/Authenticated/index.ts




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


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ DefaultLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/shared/Containers/wrappers.ts


const PageBodyContainer = (0,react_.chakra)(react_.Container, {
    baseStyle: {
        maxWidth: {
            base: "100%",
            md: "75%",
            lg: "55%"
        },
        height: "calc(100vh - 90px)"
    }
});

;// CONCATENATED MODULE: ./src/components/shared/Containers/index.ts


;// CONCATENATED MODULE: ./src/components/ThemeToggler/ThemeToggler.tsx


const ThemeToggler = ({ showLabel =false , ...rest })=>{
    const { toggleColorMode , colorMode  } = (0,react_.useColorMode)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            showLabel && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                htmlFor: "theme-toggler",
                mb: 0,
                children: "Enable Dark Theme"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
                id: "theme-toggler",
                size: "lg",
                isChecked: colorMode === "dark",
                isDisabled: false,
                value: colorMode,
                colorScheme: "purple",
                mr: 2,
                onChange: toggleColorMode,
                ...rest
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/ThemeToggler/index.ts


// EXTERNAL MODULE: ./src/hooks/useAuth.ts
var useAuth = __webpack_require__(8470);
;// CONCATENATED MODULE: ./src/layout/DefaultLayout/Nav.tsx





const Nav = ({})=>{
    const { user , logout  } = (0,useAuth/* useAuth */.a)();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        as: "nav",
        px: 10,
        h: "90px",
        gap: 10,
        alignItems: "center",
        justifyContent: {
            base: "flex-end",
            sm: "space-between",
            md: "flex-end",
            lg: "flex-end"
        },
        position: "sticky",
        top: 0,
        zIndex: 100,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontSize: "large",
                    children: user?.user.username
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                            bg: "transparent",
                            _hover: {
                                bg: "transparent"
                            },
                            _active: {
                                bg: "transparent"
                            },
                            as: react_.Button,
                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                size: "md",
                                name: user && user.user.first_name ? `${user?.user.first_name} ${user?.user.last_name}` : user?.user.username || "DJ"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                    onClick: ()=>logout(),
                                    children: "Logout"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                        justifyContent: "space-between",
                                        w: "100%",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                as: "span",
                                                children: "Switch Theme"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggler, {})
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const DefaultLayout_Nav = (Nav);

;// CONCATENATED MODULE: ./src/layout/DefaultLayout/DefaultLayout.tsx





const DefaultLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DefaultLayout_Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PageBodyContainer, {
                children: children
            })
        ]
    });
};


/***/ })

};
;