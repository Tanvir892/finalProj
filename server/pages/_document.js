"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: ./src/theme/theme.ts

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
};
const theme = (0,react_.extendTheme)({
    config
});

;// CONCATENATED MODULE: ./src/pages/_document.tsx




class Document extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.ColorModeScript, {
                            initialColorMode: theme.config.initialColorMode
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
};


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,859], () => (__webpack_exec__(4203)));
module.exports = __webpack_exports__;

})();