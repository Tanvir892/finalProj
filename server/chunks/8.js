"use strict";
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "he": () => (/* binding */ AuthConsumer),
  "Vo": () => (/* binding */ AuthContext),
  "Ho": () => (/* binding */ AuthProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/services/axios.ts
var axios = __webpack_require__(2371);
;// CONCATENATED MODULE: ./src/services/authApi.ts

const authApi = {
    register: (payload)=>{
        return axios/* default.post */.Z.post("/users/register/", {
            ...payload
        });
    },
    login: (payload)=>{
        return axios/* default.post */.Z.post("/users/login/", {
            ...payload
        });
    },
    me: ()=>{
        return axios/* default.get */.Z.get("/users/me/");
    }
};

// EXTERNAL MODULE: ./src/utils/session.ts
var session = __webpack_require__(7850);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/context/TokenAuthContext.tsx






const initialAuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};
const handlers = {
    INITIALIZE: (state, action)=>{
        const { isAuthenticated , user  } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state, action)=>{
        const { user  } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state)=>({
            ...state,
            isAuthenticated: false,
            user: null
        }),
    REGISTER: (state, action)=>{
        const { user  } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    }
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state;
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)({
    ...initialAuthState,
    method: "Token",
    login: ()=>Promise.resolve(),
    logout: ()=>Promise.resolve(),
    register: ()=>Promise.resolve()
});
const AuthProvider = (props)=>{
    const { children  } = props;
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialAuthState);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const initialize = async ()=>{
            try {
                const accessToken = (0,session/* getSession */.Gg)();
                if (accessToken) {
                    (0,session/* setSession */.KY)(accessToken);
                    const { data: user  } = await authApi.me();
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null
                        }
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        };
        initialize();
    }, []);
    const login = async (email, password)=>{
        try {
            const { data  } = await authApi.login({
                username: email,
                password
            });
            (0,session/* setSession */.KY)(data.token);
            const { data: user  } = await authApi.me();
            dispatch({
                type: "LOGIN",
                payload: {
                    user
                }
            });
        } catch (error) {
            console.error(error);
            logout();
            throw new Error("Invalid credentials");
        }
    };
    const logout = async ()=>{
        (0,session/* resetSession */.lX)();
        dispatch({
            type: "LOGOUT"
        });
        router.push("/auth/login");
    };
    const register = async (payload)=>{
        try {
            const { data: registerRes  } = await authApi.register(payload);
            (0,session/* setSession */.KY)(registerRes.token);
            const { data: user  } = await authApi.me();
            dispatch({
                type: "REGISTER",
                payload: {
                    user
                }
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: {
            ...state,
            method: "Token",
            login,
            logout,
            register
        },
        children: children
    });
};
AuthProvider.propTypes = {
    children: (external_prop_types_default()).node.isRequired
};
const AuthConsumer = AuthContext.Consumer;


/***/ }),

/***/ 2371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7850);



const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: _utils_constants__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T
});
axiosInstance.interceptors.response.use((response)=>response, (error)=>{
    if (error.response.status === 401) {
        (0,_utils_session__WEBPACK_IMPORTED_MODULE_2__/* .resetSession */ .lX)();
    }
    return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);


/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL)
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";


/***/ }),

/***/ 7850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gg": () => (/* binding */ getSession),
/* harmony export */   "KY": () => (/* binding */ setSession),
/* harmony export */   "lX": () => (/* binding */ resetSession)
/* harmony export */ });
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2371);

const TOKEN_KEY = "react-token-login";
const setSession = (accessToken)=>{
    if (accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken);
        _services_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].defaults.headers.common.Authorization */ .Z.defaults.headers.common.Authorization = `Token ${accessToken}`;
    } else {
        localStorage.removeItem(TOKEN_KEY);
        delete _services_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].defaults.headers.common.Authorization */ .Z.defaults.headers.common.Authorization;
    }
};
const getSession = ()=>{
    return localStorage.getItem(TOKEN_KEY);
};
const resetSession = ()=>{
    localStorage.removeItem(TOKEN_KEY);
    delete _services_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].defaults.headers.common.Authorization */ .Z.defaults.headers.common.Authorization;
};


/***/ })

};
;