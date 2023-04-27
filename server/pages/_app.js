"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/context/TokenAuthContext.tsx + 1 modules
var TokenAuthContext = __webpack_require__(3008);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "@tanstack/react-query"
const react_query_namespaceObject = require("@tanstack/react-query");
;// CONCATENATED MODULE: ./node_modules/@tanstack/react-query-devtools/build/esm/noop.js
/**
 * react-query-devtools-noop
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ReactQueryDevtools() {
  return null;
}
function ReactQueryDevtoolsPanel() {
  return null;
}


//# sourceMappingURL=noop.js.map

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx







const client = new react_query_namespaceObject.QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 300
        }
    }
});
function MyApp(props) {
    const { Component , pageProps  } = props;
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Next Token Auth"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_query_namespaceObject.QueryClientProvider, {
                    client: client,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TokenAuthContext/* AuthProvider */.Ho, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(TokenAuthContext/* AuthConsumer */.he, {
                                children: (auth)=>!auth.isInitialized ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        h: "100vh",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AbsoluteCenter, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {})
                                        })
                                    }) : getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                        ...pageProps
                                    }))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ReactQueryDevtools, {
                            position: "bottom-right",
                            initialIsOpen: false
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8], () => (__webpack_exec__(5001)));
module.exports = __webpack_exports__;

})();