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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/route */ \"(app-pages-browser)/./app/actions/route.ts\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_togglebuddy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/togglebuddy */ \"(app-pages-browser)/./components/togglebuddy.tsx\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js\");\n/* harmony import */ var _actions_transaction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions/transaction */ \"(app-pages-browser)/./app/actions/transaction.ts\");\n/* harmony import */ var next_auth_client_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/client/_utils */ \"(app-pages-browser)/./node_modules/next-auth/client/_utils.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [essay, setEssay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [textAreaData, setTextAreaData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [wordCount, setWordCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [tokenPrice, setTokenPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const prePrompt = \"Re-write the following with bare minimum changes to language structure , i need you to shorten the length and \";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const countWords = (text)=>{\n            if (text.trim().length === 0) return 0;\n            return text.trim().split(/\\s+/).length;\n        };\n        setWordCount(countWords(textAreaData));\n        if (wordCount === 0) {\n            setTokenPrice(0);\n        } else {\n            setTokenPrice(wordCount * 1.9);\n        }\n    }, [\n        textAreaData\n    ]);\n    async function handleClick() {\n        setLoading(true);\n        try {\n            next_auth_client_utils__WEBPACK_IMPORTED_MODULE_8__.fetchData; // Ensure this is awaited if it's an async function\n            (0,_actions_transaction__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(tokenPrice);\n            const generatedEssay = await (0,_actions_route__WEBPACK_IMPORTED_MODULE_2__.getEssay)(prePrompt + textAreaData);\n            setEssay(generatedEssay);\n            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Essay generated successfully!\");\n        } catch (error) {\n            console.error(\"Error generating essay:\", error);\n            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Failed to generate essay.\");\n        } finally{\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-4 max-w-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_togglebuddy__WEBPACK_IMPORTED_MODULE_5__.ModeToggle, {}, void 0, false, {\n                        fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-6 text-center\",\n                    children: \"Essay Rewriter\"\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                    className: \"mb-4\",\n                    onChange: (e)=>setTextAreaData(e.target.value),\n                    placeholder: \"Enter the text to rewrite the essay\",\n                    value: textAreaData,\n                    rows: 5\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 text-right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm light:text-white dark:text-white\",\n                        children: [\n                            \"Word Count: \",\n                            wordCount,\n                            \" - Approximate tokens required: \",\n                            tokenPrice\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    className: \"w-full mb-4\",\n                    onClick: handleClick,\n                    disabled: loading || !textAreaData.trim(),\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                className: \"mr-2 h-4 w-4 animate-spin\"\n                            }, void 0, false, {\n                                fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this),\n                            \"Generating...\"\n                        ]\n                    }, void 0, true) : \"Rewrite Essay\"\n                }, void 0, false, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                essay && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border p-4 bg-zinc-900\",\n                    children: [\n                        essay,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 19\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/smol/dev/AiPlagiarismR/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n} // Hello , this is a story about john who is stuck on an island and has no where to go , he is bored and he is barely able to survive , he has been suffering because he had no friends and family that he had to talk to , he is tired of this noman life and is willing to leave as soon as he sees a boat that can come and help him . This has to be the toughest part of this entire life he says .\n_s(Home, \"f6mfyAIyUH8qPap4QvQ1lFPcxW0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNEO0FBQ1M7QUFDSjtBQUNNO0FBQ3ZCO0FBQ1E7QUFDYTtBQUNBO0FBRXJDLFNBQVNVOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1vQixZQUFhO0lBRW5CckIsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsYUFBYSxDQUFDQztZQUNsQixJQUFJQSxLQUFLQyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHLE9BQU87WUFDckMsT0FBT0YsS0FBS0MsSUFBSSxHQUFHRSxLQUFLLENBQUMsT0FBT0QsTUFBTTtRQUN4QztRQUNBUCxhQUFhSSxXQUFXVDtRQUN4QixJQUFJSSxjQUFjLEdBQUc7WUFDbkJHLGNBQWM7UUFDaEIsT0FBTztZQUNMQSxjQUFjSCxZQUFZO1FBQzVCO0lBQ0YsR0FBRztRQUFDSjtLQUFhO0lBRWpCLGVBQWVjO1FBQ2JYLFdBQVc7UUFDWCxJQUFJO1lBQ0ZQLDZEQUFTQSxFQUFFLG1EQUFtRDtZQUM5REQsZ0VBQWVBLENBQUNXO1lBQ2hCLE1BQU1TLGlCQUFpQixNQUFNMUIsd0RBQVFBLENBQUNtQixZQUFZUjtZQUNsREQsU0FBU2dCO1lBQ1R0Qix5Q0FBS0EsQ0FBQ3VCLE9BQU8sQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7WUFDekN4Qix5Q0FBS0EsQ0FBQ3dCLEtBQUssQ0FBQztRQUNkLFNBQVU7WUFDUmQsV0FBVztRQUNiO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ2dCO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQzVCLCtEQUFVQTs7Ozs7Ozs7Ozs4QkFFYiw4REFBQzZCO29CQUFHRCxXQUFVOzhCQUFzQzs7Ozs7OzhCQUNwRCw4REFBQzlCLDZEQUFRQTtvQkFDUDhCLFdBQVU7b0JBQ1ZFLFVBQVUsQ0FBQ0MsSUFBTXRCLGdCQUFnQnNCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQkFDL0NDLGFBQVk7b0JBQ1pELE9BQU96QjtvQkFDUDJCLE1BQU07Ozs7Ozs4QkFFUiw4REFBQ1I7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNRO3dCQUFLUixXQUFVOzs0QkFBMkM7NEJBQzVDaEI7NEJBQVU7NEJBQWlDRTs7Ozs7Ozs7Ozs7OzhCQUc1RCw4REFBQ2YseURBQU1BO29CQUNMNkIsV0FBVTtvQkFDVlMsU0FBU2Y7b0JBQ1RnQixVQUFVNUIsV0FBVyxDQUFDRixhQUFhVyxJQUFJOzhCQUV0Q1Qsd0JBQ0M7OzBDQUNFLDhEQUFDUixtRkFBT0E7Z0NBQUMwQixXQUFVOzs7Ozs7NEJBQThCOzt1Q0FJbkQ7Ozs7OztnQkFHSHRCLHVCQUFTLDhEQUFDcUI7b0JBQUlDLFdBQVU7O3dCQUEwQnRCO3dCQUFNOzs7Ozs7Ozs7Ozs7OztBQUlqRSxFQUNBLHdZQUF3WTtHQTVFaFhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRFc3NheSB9IGZyb20gXCIuL2FjdGlvbnMvcm91dGVcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3RvZ2dsZWJ1ZGR5XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcbmltcG9ydCB7IExvYWRlcjIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgVXNlclRyYW5zYWN0aW9uIGZyb20gXCIuL2FjdGlvbnMvdHJhbnNhY3Rpb25cIjtcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50L191dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZXNzYXksIHNldEVzc2F5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGV4dEFyZWFEYXRhLCBzZXRUZXh0QXJlYURhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRDb3VudCwgc2V0V29yZENvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdG9rZW5QcmljZSwgc2V0VG9rZW5QcmljZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBwcmVQcm9tcHQgPSBgUmUtd3JpdGUgdGhlIGZvbGxvd2luZyB3aXRoIGJhcmUgbWluaW11bSBjaGFuZ2VzIHRvIGxhbmd1YWdlIHN0cnVjdHVyZSAsIGkgbmVlZCB5b3UgdG8gc2hvcnRlbiB0aGUgbGVuZ3RoIGFuZCBgO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY291bnRXb3JkcyA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0ZXh0LnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRleHQudHJpbSgpLnNwbGl0KC9cXHMrLykubGVuZ3RoO1xuICAgIH07XG4gICAgc2V0V29yZENvdW50KGNvdW50V29yZHModGV4dEFyZWFEYXRhKSk7XG4gICAgaWYgKHdvcmRDb3VudCA9PT0gMCkge1xuICAgICAgc2V0VG9rZW5QcmljZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9rZW5QcmljZSh3b3JkQ291bnQgKiAxLjkpO1xuICAgIH1cbiAgfSwgW3RleHRBcmVhRGF0YV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGZldGNoRGF0YTsgLy8gRW5zdXJlIHRoaXMgaXMgYXdhaXRlZCBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uXG4gICAgICBVc2VyVHJhbnNhY3Rpb24odG9rZW5QcmljZSk7XG4gICAgICBjb25zdCBnZW5lcmF0ZWRFc3NheSA9IGF3YWl0IGdldEVzc2F5KHByZVByb21wdCArIHRleHRBcmVhRGF0YSk7XG4gICAgICBzZXRFc3NheShnZW5lcmF0ZWRFc3NheSk7XG4gICAgICB0b2FzdC5zdWNjZXNzKFwiRXNzYXkgZ2VuZXJhdGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIGVzc2F5OlwiLCBlcnJvcik7XG4gICAgICB0b2FzdC5lcnJvcihcIkZhaWxlZCB0byBnZW5lcmF0ZSBlc3NheS5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00IG1heC13LTJ4bFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgbWItNFwiPlxuICAgICAgICAgIDxNb2RlVG9nZ2xlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXJcIj5Fc3NheSBSZXdyaXRlcjwvaDE+XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dEFyZWFEYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB0ZXh0IHRvIHJld3JpdGUgdGhlIGVzc2F5XCJcbiAgICAgICAgICB2YWx1ZT17dGV4dEFyZWFEYXRhfVxuICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBsaWdodDp0ZXh0LXdoaXRlIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgV29yZCBDb3VudDoge3dvcmRDb3VudH0gLSBBcHByb3hpbWF0ZSB0b2tlbnMgcmVxdWlyZWQ6IHt0b2tlblByaWNlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIXRleHRBcmVhRGF0YS50cmltKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICBHZW5lcmF0aW5nLi4uXG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJSZXdyaXRlIEVzc2F5XCJcbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge2Vzc2F5ICYmIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCBiZy16aW5jLTkwMFwiPntlc3NheX0gPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4vLyBIZWxsbyAsIHRoaXMgaXMgYSBzdG9yeSBhYm91dCBqb2huIHdobyBpcyBzdHVjayBvbiBhbiBpc2xhbmQgYW5kIGhhcyBubyB3aGVyZSB0byBnbyAsIGhlIGlzIGJvcmVkIGFuZCBoZSBpcyBiYXJlbHkgYWJsZSB0byBzdXJ2aXZlICwgaGUgaGFzIGJlZW4gc3VmZmVyaW5nIGJlY2F1c2UgaGUgaGFkIG5vIGZyaWVuZHMgYW5kIGZhbWlseSB0aGF0IGhlIGhhZCB0byB0YWxrIHRvICwgaGUgaXMgdGlyZWQgb2YgdGhpcyBub21hbiBsaWZlIGFuZCBpcyB3aWxsaW5nIHRvIGxlYXZlIGFzIHNvb24gYXMgaGUgc2VlcyBhIGJvYXQgdGhhdCBjYW4gY29tZSBhbmQgaGVscCBoaW0gLiBUaGlzIGhhcyB0byBiZSB0aGUgdG91Z2hlc3QgcGFydCBvZiB0aGlzIGVudGlyZSBsaWZlIGhlIHNheXMgLiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldEVzc2F5IiwiVGV4dGFyZWEiLCJCdXR0b24iLCJNb2RlVG9nZ2xlIiwidG9hc3QiLCJMb2FkZXIyIiwiVXNlclRyYW5zYWN0aW9uIiwiZmV0Y2hEYXRhIiwiSG9tZSIsImVzc2F5Iiwic2V0RXNzYXkiLCJ0ZXh0QXJlYURhdGEiLCJzZXRUZXh0QXJlYURhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIndvcmRDb3VudCIsInNldFdvcmRDb3VudCIsInRva2VuUHJpY2UiLCJzZXRUb2tlblByaWNlIiwicHJlUHJvbXB0IiwiY291bnRXb3JkcyIsInRleHQiLCJ0cmltIiwibGVuZ3RoIiwic3BsaXQiLCJoYW5kbGVDbGljayIsImdlbmVyYXRlZEVzc2F5Iiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJzcGFuIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});