"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/route */ \"(app-pages-browser)/./app/actions/route.ts\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_togglebuddy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/togglebuddy */ \"(app-pages-browser)/./components/togglebuddy.tsx\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js\");\n/* harmony import */ var _actions_transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/transaction */ \"(app-pages-browser)/./app/actions/transaction.ts\");\n/* harmony import */ var next_auth_client_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client/_utils */ \"(app-pages-browser)/./node_modules/next-auth/client/_utils.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [essay, setEssay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [textAreaData, setTextAreaData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [wordCount, setWordCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [tokenPrice, setTokenPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const prePrompt = \"Repeat after me but add \";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const countWords = (text)=>{\n            if (text.trim().length === 0) return 0;\n            return text.trim().split(/\\s+/).length;\n        };\n        setWordCount(countWords(textAreaData));\n        if (wordCount === 0) {\n            setTokenPrice(0);\n        } else {\n            setTokenPrice(wordCount * 1.9);\n        }\n    }, [\n        textAreaData\n    ]);\n    async function handleClick() {\n        setLoading(true);\n        try {\n            next_auth_client_utils__WEBPACK_IMPORTED_MODULE_8__.fetchData; // Ensure this is awaited if it's an async function\n            (0,_actions_transaction__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(tokenPrice);\n            const generatedEssay = await (0,_actions_route__WEBPACK_IMPORTED_MODULE_2__.getEssay)(prePrompt + textAreaData);\n            setEssay(generatedEssay);\n            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Essay generated successfully!\");\n        } catch (error) {\n            console.error(\"Error generating essay:\", error);\n            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Failed to generate essay.\");\n        } finally{\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-4 max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuddy__WEBPACK_IMPORTED_MODULE_5__.ModeToggle, {}, void 0, false, {\n                        fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-6 text-center\",\n                    children: \"Essay Rewriter\"\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                    className: \"mb-4\",\n                    onChange: (e)=>setTextAreaData(e.target.value),\n                    placeholder: \"Enter the text to rewrite the essay\",\n                    value: textAreaData,\n                    rows: 5\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 text-right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm light:text-white dark:text-white\",\n                        children: [\n                            \"Word Count: \",\n                            wordCount,\n                            \" - Approximate tokens required: \",\n                            tokenPrice\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    className: \"w-full mb-4\",\n                    onClick: handleClick,\n                    disabled: loading || !textAreaData.trim(),\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                className: \"mr-2 h-4 w-4 animate-spin\"\n                            }, void 0, false, {\n                                fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this),\n                            \"Generating...\"\n                        ]\n                    }, void 0, true) : \"Rewrite Essay\"\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                essay && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border p-4 bg-zinc-900\",\n                    children: [\n                        essay,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 19\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n} // Hello , this is a story about john who is stuck on an island and has no where to go , he is bored and he is barely able to survive , he has been suffering because he had no friends and family that he had to talk to , he is tired of this noman life and is willing to leave as soon as he sees a boat that can come and help him . This has to be the toughest part of this entire life he says .\n_s(Home, \"f6mfyAIyUH8qPap4QvQ1lFPcxW0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNEO0FBQ1M7QUFDSjtBQUNNO0FBQ3ZCO0FBQ1E7QUFDYTtBQUNBO0FBRXJDLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1vQixZQUFhO0lBRW5CckIsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsYUFBYSxDQUFDQztZQUNsQixJQUFJQSxLQUFLQyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHLE9BQU87WUFDckMsT0FBT0YsS0FBS0MsSUFBSSxHQUFHRSxLQUFLLENBQUMsT0FBT0QsTUFBTTtRQUN4QztRQUNBUCxhQUFhSSxXQUFXVDtRQUN4QixJQUFJSSxjQUFjLEdBQUc7WUFDbkJHLGNBQWM7UUFDaEIsT0FBTztZQUNMQSxjQUFjSCxZQUFZO1FBQzVCO0lBQ0YsR0FBRztRQUFDSjtLQUFhO0lBRWpCLGVBQWVjO1FBQ2JYLFdBQVc7UUFDWCxJQUFJO1lBQ0ZQLDZEQUFTQSxFQUFFLG1EQUFtRDtZQUM5REQsZ0VBQWVBLENBQUNXO1lBQ2hCLE1BQU1TLGlCQUFpQixNQUFNMUIsd0RBQVFBLENBQUNtQixZQUFZUjtZQUNsREQsU0FBU2dCO1lBQ1R0Qix5Q0FBS0EsQ0FBQ3VCLE9BQU8sQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7WUFDekN4Qix5Q0FBS0EsQ0FBQ3dCLEtBQUssQ0FBQztRQUNkLFNBQVU7WUFDUmQsV0FBVztRQUNiO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ2dCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQzVCLCtEQUFVQTs7Ozs7Ozs7Ozs4QkFFYiw4REFBQzZCO29CQUFHRCxXQUFVOzhCQUFzQzs7Ozs7OzhCQUNwRCw4REFBQzlCLDZEQUFRQTtvQkFDUDhCLFdBQVU7b0JBQ1ZFLFVBQVUsQ0FBQ0MsSUFBTXRCLGdCQUFnQnNCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQkFDL0NDLGFBQVk7b0JBQ1pELE9BQU96QjtvQkFDUDJCLE1BQU07Ozs7Ozs4QkFFUiw4REFBQ1I7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNRO3dCQUFLUixXQUFVOzs0QkFBMkM7NEJBQzVDaEI7NEJBQVU7NEJBQWlDRTs7Ozs7Ozs7Ozs7OzhCQUc1RCw4REFBQ2YseURBQU1BO29CQUNMNkIsV0FBVTtvQkFDVlMsU0FBU2Y7b0JBQ1RnQixVQUFVNUIsV0FBVyxDQUFDRixhQUFhVyxJQUFJOzhCQUV0Q1Qsd0JBQ0M7OzBDQUNFLDhEQUFDUixtRkFBT0E7Z0NBQUMwQixXQUFVOzs7Ozs7NEJBQThCOzt1Q0FJbkQ7Ozs7OztnQkFHSHRCLHVCQUFTLDhEQUFDcUI7b0JBQUlDLFdBQVU7O3dCQUEwQnRCO3dCQUFNOzs7Ozs7Ozs7Ozs7OztBQUlqRSxFQUNBLHdZQUF3WTtHQTVFaFhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRFc3NheSB9IGZyb20gXCIuL2FjdGlvbnMvcm91dGVcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3RvZ2dsZWJ1ZGR5XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcbmltcG9ydCB7IExvYWRlcjIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgVXNlclRyYW5zYWN0aW9uIGZyb20gXCIuL2FjdGlvbnMvdHJhbnNhY3Rpb25cIjtcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50L191dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXNzYXksIHNldEVzc2F5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGV4dEFyZWFEYXRhLCBzZXRUZXh0QXJlYURhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRDb3VudCwgc2V0V29yZENvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9rZW5QcmljZSwgc2V0VG9rZW5QcmljZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBwcmVQcm9tcHQgPSBgUmVwZWF0IGFmdGVyIG1lIGJ1dCBhZGQgYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50V29yZHMgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGV4dC50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0ZXh0LnRyaW0oKS5zcGxpdCgvXFxzKy8pLmxlbmd0aDtcbiAgICB9O1xuICAgIHNldFdvcmRDb3VudChjb3VudFdvcmRzKHRleHRBcmVhRGF0YSkpO1xuICAgIGlmICh3b3JkQ291bnQgPT09IDApIHtcbiAgICAgIHNldFRva2VuUHJpY2UoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRva2VuUHJpY2Uod29yZENvdW50ICogMS45KTtcbiAgICB9XG4gIH0sIFt0ZXh0QXJlYURhdGFdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBmZXRjaERhdGE7IC8vIEVuc3VyZSB0aGlzIGlzIGF3YWl0ZWQgaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvblxuICAgICAgVXNlclRyYW5zYWN0aW9uKHRva2VuUHJpY2UpO1xuICAgICAgY29uc3QgZ2VuZXJhdGVkRXNzYXkgPSBhd2FpdCBnZXRFc3NheShwcmVQcm9tcHQgKyB0ZXh0QXJlYURhdGEpO1xuICAgICAgc2V0RXNzYXkoZ2VuZXJhdGVkRXNzYXkpO1xuICAgICAgdG9hc3Quc3VjY2VzcyhcIkVzc2F5IGdlbmVyYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyBlc3NheTpcIiwgZXJyb3IpO1xuICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZXNzYXkuXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNCBtYXgtdy0yeGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG1iLTRcIj5cbiAgICAgICAgICA8TW9kZVRvZ2dsZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02IHRleHQtY2VudGVyXCI+RXNzYXkgUmV3cml0ZXI8L2gxPlxuICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHRBcmVhRGF0YShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgdGV4dCB0byByZXdyaXRlIHRoZSBlc3NheVwiXG4gICAgICAgICAgdmFsdWU9e3RleHRBcmVhRGF0YX1cbiAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gbGlnaHQ6dGV4dC13aGl0ZSBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIFdvcmQgQ291bnQ6IHt3b3JkQ291bnR9IC0gQXBwcm94aW1hdGUgdG9rZW5zIHJlcXVpcmVkOiB7dG9rZW5QcmljZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nIHx8ICF0ZXh0QXJlYURhdGEudHJpbSgpfVxuICAgICAgICA+XG4gICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgR2VuZXJhdGluZy4uLlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiUmV3cml0ZSBFc3NheVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtlc3NheSAmJiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgYmctemluYy05MDBcIj57ZXNzYXl9IDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuLy8gSGVsbG8gLCB0aGlzIGlzIGEgc3RvcnkgYWJvdXQgam9obiB3aG8gaXMgc3R1Y2sgb24gYW4gaXNsYW5kIGFuZCBoYXMgbm8gd2hlcmUgdG8gZ28gLCBoZSBpcyBib3JlZCBhbmQgaGUgaXMgYmFyZWx5IGFibGUgdG8gc3Vydml2ZSAsIGhlIGhhcyBiZWVuIHN1ZmZlcmluZyBiZWNhdXNlIGhlIGhhZCBubyBmcmllbmRzIGFuZCBmYW1pbHkgdGhhdCBoZSBoYWQgdG8gdGFsayB0byAsIGhlIGlzIHRpcmVkIG9mIHRoaXMgbm9tYW4gbGlmZSBhbmQgaXMgd2lsbGluZyB0byBsZWF2ZSBhcyBzb29uIGFzIGhlIHNlZXMgYSBib2F0IHRoYXQgY2FuIGNvbWUgYW5kIGhlbHAgaGltIC4gVGhpcyBoYXMgdG8gYmUgdGhlIHRvdWdoZXN0IHBhcnQgb2YgdGhpcyBlbnRpcmUgbGlmZSBoZSBzYXlzIC4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRFc3NheSIsIlRleHRhcmVhIiwiQnV0dG9uIiwiTW9kZVRvZ2dsZSIsInRvYXN0IiwiTG9hZGVyMiIsIlVzZXJUcmFuc2FjdGlvbiIsImZldGNoRGF0YSIsIkhvbWUiLCJlc3NheSIsInNldEVzc2F5IiwidGV4dEFyZWFEYXRhIiwic2V0VGV4dEFyZWFEYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ3b3JkQ291bnQiLCJzZXRXb3JkQ291bnQiLCJ0b2tlblByaWNlIiwic2V0VG9rZW5QcmljZSIsInByZVByb21wdCIsImNvdW50V29yZHMiLCJ0ZXh0IiwidHJpbSIsImxlbmd0aCIsInNwbGl0IiwiaGFuZGxlQ2xpY2siLCJnZW5lcmF0ZWRFc3NheSIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwic3BhbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});