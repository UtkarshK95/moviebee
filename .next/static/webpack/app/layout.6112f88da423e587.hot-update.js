"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f9e21442b19a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDMxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY5ZTIxNDQyYjE5YVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/DarkModeSwitch.jsx":
/*!*******************************************!*\
  !*** ./src/components/DarkModeSwitch.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkModeSwitch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_MdLightMode_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdLightMode!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_BsFillMoonFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BsFillMoonFill!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.mjs\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"(app-pages-browser)/./node_modules/next-themes/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction DarkModeSwitch() {\n    _s();\n    const { systemTheme, theme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setMounted(true);\n        // Check for the saved theme in local storage\n        const savedTheme = localStorage.getItem(\"theme\");\n        if (savedTheme) {\n            setTheme(savedTheme);\n        }\n    }, []);\n    const currentTheme = theme === \"system\" ? systemTheme : theme;\n    const toggleTheme = ()=>{\n        if (currentTheme === \"dark\") {\n            setTheme(\"light\");\n            localStorage.setItem(\"theme\", \"light\"); // Save the theme in local storage\n        } else {\n            setTheme(\"dark\");\n            localStorage.setItem(\"theme\", \"dark\"); // Save the theme in local storage\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdLightMode_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdLightMode, {}, void 0, false, {\n                fileName: \"/Users/utkarshkatiyar/Documents/Github/moviebee/src/components/DarkModeSwitch.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"relative inline-flex items-center cursor-pointer\",\n                children: [\n                    mounted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        value: \"\",\n                        className: \"sr-only peer\",\n                        onClick: toggleTheme,\n                        checked: currentTheme === \"dark\"\n                    }, void 0, false, {\n                        fileName: \"/Users/utkarshkatiyar/Documents/Github/moviebee/src/components/DarkModeSwitch.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600\"\n                    }, void 0, false, {\n                        fileName: \"/Users/utkarshkatiyar/Documents/Github/moviebee/src/components/DarkModeSwitch.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/utkarshkatiyar/Documents/Github/moviebee/src/components/DarkModeSwitch.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillMoonFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillMoonFill, {}, void 0, false, {\n                fileName: \"/Users/utkarshkatiyar/Documents/Github/moviebee/src/components/DarkModeSwitch.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/utkarshkatiyar/Documents/Github/moviebee/src/components/DarkModeSwitch.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(DarkModeSwitch, \"cOKLkRcZNbCdMKEM8Lp+dLN5ZYU=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme\n    ];\n});\n_c = DarkModeSwitch;\nvar _c;\n$RefreshReg$(_c, \"DarkModeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNkM7QUFDRztBQUNUO0FBQ0s7QUFFN0IsU0FBU0s7O0lBQ3RCLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTixxREFBUUE7SUFDakQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSTyxXQUFXO1FBRVgsNkNBQTZDO1FBQzdDLE1BQU1DLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJRixZQUFZO1lBQ2RILFNBQVNHO1FBQ1g7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRyxlQUFlUCxVQUFVLFdBQVdELGNBQWNDO0lBRXhELE1BQU1RLGNBQWM7UUFDbEIsSUFBSUQsaUJBQWlCLFFBQVE7WUFDM0JOLFNBQVM7WUFDVEksYUFBYUksT0FBTyxDQUFDLFNBQVMsVUFBVSxrQ0FBa0M7UUFDNUUsT0FBTztZQUNMUixTQUFTO1lBQ1RJLGFBQWFJLE9BQU8sQ0FBQyxTQUFTLFNBQVMsa0NBQWtDO1FBQzNFO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNsQiwwRkFBV0E7Ozs7OzBCQUNaLDhEQUFDbUI7Z0JBQU1ELFdBQVU7O29CQUNkVCx5QkFDQyw4REFBQ1c7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU07d0JBQ05KLFdBQVU7d0JBQ1ZLLFNBQVNSO3dCQUNUUyxTQUFTVixpQkFBaUI7Ozs7OztrQ0FHOUIsOERBQUNHO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRWpCLDhEQUFDakIsZ0dBQWNBOzs7Ozs7Ozs7OztBQUdyQjtHQTVDd0JJOztRQUNtQkgsaURBQVFBOzs7S0FEM0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoLmpzeD83YzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBNZExpZ2h0TW9kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHsgQnNGaWxsTW9vbkZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtNb2RlU3dpdGNoKCkge1xuICBjb25zdCB7IHN5c3RlbVRoZW1lLCB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG5cbiAgICAvLyBDaGVjayBmb3IgdGhlIHNhdmVkIHRoZW1lIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCBzYXZlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICBpZiAoc2F2ZWRUaGVtZSkge1xuICAgICAgc2V0VGhlbWUoc2F2ZWRUaGVtZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgY3VycmVudFRoZW1lID0gdGhlbWUgPT09IFwic3lzdGVtXCIgPyBzeXN0ZW1UaGVtZSA6IHRoZW1lO1xuXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICBzZXRUaGVtZShcImxpZ2h0XCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpOyAvLyBTYXZlIHRoZSB0aGVtZSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRoZW1lKFwiZGFya1wiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpOyAvLyBTYXZlIHRoZSB0aGVtZSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE1kTGlnaHRNb2RlIC8+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIHttb3VudGVkICYmIChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzci1vbmx5IHBlZXJcIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGhlbWV9XG4gICAgICAgICAgICBjaGVja2VkPXtjdXJyZW50VGhlbWUgPT09IFwiZGFya1wifVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMSBoLTYgYmctZ3JheS0yMDAgcGVlci1mb2N1czpvdXRsaW5lLW5vbmUgcGVlci1mb2N1czpyaW5nLTQgcGVlci1mb2N1czpyaW5nLWFtYmVyLTMwMCBkYXJrOnBlZXItZm9jdXM6cmluZy1hbWJlci04MDAgcm91bmRlZC1mdWxsIHBlZXIgZGFyazpiZy1ncmF5LTcwMCBwZWVyLWNoZWNrZWQ6YWZ0ZXI6dHJhbnNsYXRlLXgtZnVsbCBwZWVyLWNoZWNrZWQ6YWZ0ZXI6Ym9yZGVyLXdoaXRlIGFmdGVyOmNvbnRlbnQtWycnXSBhZnRlcjphYnNvbHV0ZSBhZnRlcjp0b3AtWzJweF0gYWZ0ZXI6bGVmdC1bMnB4XSBhZnRlcjpiZy13aGl0ZSBhZnRlcjpib3JkZXItZ3JheS0zMDAgYWZ0ZXI6Ym9yZGVyIGFmdGVyOnJvdW5kZWQtZnVsbCBhZnRlcjpoLTUgYWZ0ZXI6dy01IGFmdGVyOnRyYW5zaXRpb24tYWxsIGRhcms6Ym9yZGVyLWdyYXktNjAwIHBlZXItY2hlY2tlZDpiZy1hbWJlci02MDBcIj48L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8QnNGaWxsTW9vbkZpbGwgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNZExpZ2h0TW9kZSIsIkJzRmlsbE1vb25GaWxsIiwidXNlVGhlbWUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRhcmtNb2RlU3dpdGNoIiwic3lzdGVtVGhlbWUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJzYXZlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImN1cnJlbnRUaGVtZSIsInRvZ2dsZVRoZW1lIiwic2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNsaWNrIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DarkModeSwitch.jsx\n"));

/***/ })

});