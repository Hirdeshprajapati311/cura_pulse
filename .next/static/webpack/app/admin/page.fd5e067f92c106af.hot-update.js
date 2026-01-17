"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/page",{

/***/ "(app-pages-browser)/./lib/actions/appointment.actions.ts":
/*!********************************************!*\
  !*** ./lib/actions/appointment.actions.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAppointment: function() { return /* binding */ createAppointment; },
/* harmony export */   getAppointment: function() { return /* binding */ getAppointment; },
/* harmony export */   getAppointmentsByIdentifier: function() { return /* binding */ getAppointmentsByIdentifier; },
/* harmony export */   getRecentAppointmentList: function() { return /* binding */ getRecentAppointmentList; },
/* harmony export */   sendSMSNotification: function() { return /* binding */ sendSMSNotification; },
/* harmony export */   updateAppointment: function() { return /* binding */ updateAppointment; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"14022cf84f93a82a9c1a4252d899f0a3883dee96":"$$ACTION_5","337bdba163b0802110327177f8b6fa88f6ec39f1":"$$ACTION_4","41800d581626f69dbe62e2977e367f72fda7f1a1":"updateAppointment","46e6b6b3bf90488d61f53ebcf8bf081d072661c2":"$$ACTION_1","70a18eb2f35585d0d6f5e6e8b0b5390c5481a83e":"getAppointment","71b725124c007526c603c34581ad4b80a4d73cd4":"createAppointment","843dd128afbcc4bdaf08439eae6ad23b47f6ff30":"$$ACTION_3","8c3ce189397cc0dfc9a1236a905a24d653bd633d":"getAppointmentsByIdentifier","a8f7a263536b7147d4fa7c34ee4881693d40aea9":"sendSMSNotification","b37466eb9fe95832be605f6e1d5c2bf7b6b8ee8e":"$$ACTION_2","d200bf258e7bcc51bafda03eafb8047e724b0747":"$$ACTION_0","d504a11860f8e12fbf3b6c6919fc90b6a4aa4e2a":"getRecentAppointmentList"} */ var getAppointmentsByIdentifier = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("8c3ce189397cc0dfc9a1236a905a24d653bd633d");

var createAppointment = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("71b725124c007526c603c34581ad4b80a4d73cd4");
var getRecentAppointmentList = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("d504a11860f8e12fbf3b6c6919fc90b6a4aa4e2a");
var sendSMSNotification = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("a8f7a263536b7147d4fa7c34ee4881693d40aea9");
var updateAppointment = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("41800d581626f69dbe62e2977e367f72fda7f1a1");
var getAppointment = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("70a18eb2f35585d0d6f5e6e8b0b5390c5481a83e");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});