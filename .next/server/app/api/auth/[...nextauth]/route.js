"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_smol_dev_AiPlagiarismR_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/smol/dev/AiPlagiarismR/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_smol_dev_AiPlagiarismR_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc21vbCUyRmRldiUyRkFpUGxhZ2lhcmlzbVIlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZzbW9sJTJGZGV2JTJGQWlQbGFnaWFyaXNtUiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDZ0I7QUFDN0Y7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXp5LWNybS8/YmMyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zbW9sL2Rldi9BaVBsYWdpYXJpc21SL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL3Ntb2wvZGV2L0FpUGxhZ2lhcmlzbVIvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_auth_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/auth/auth */ \"(rsc)/./app/auth/auth.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_app_auth_auth__WEBPACK_IMPORTED_MODULE_0__.NEXT_AUTH);\nconst GET = handler;\nconst POST = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBQ047QUFHdEMsTUFBTUUsVUFBVUQsMERBQVFBLENBQUNELHFEQUFTQTtBQUUzQixNQUFNRyxNQUFNRCxRQUFRO0FBQ3BCLE1BQU1FLE9BQU9GLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXp5LWNybS8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkVYVF9BVVRIIH0gZnJvbSBcIkAvYXBwL2F1dGgvYXV0aFwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChORVhUX0FVVEgpO1xuXG5leHBvcnQgY29uc3QgR0VUID0gaGFuZGxlcjtcbmV4cG9ydCBjb25zdCBQT1NUID0gaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJORVhUX0FVVEgiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/auth/auth.ts":
/*!**************************!*\
  !*** ./app/auth/auth.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NEXT_AUTH: () => (/* binding */ NEXT_AUTH)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst NEXT_AUTH = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        // Managing the sign-in process\n        async signIn ({ user, account, profile }) {\n            // Check if the user already exists in the database\n            const existingUser = await prisma.user.findUnique({\n                where: {\n                    email: user.email\n                }\n            });\n            if (!existingUser) {\n                // If user does not exist, create a new user in the database\n                await prisma.user.create({\n                    data: {\n                        email: user.email,\n                        name: user.name,\n                        userTokens: 0\n                    }\n                });\n            }\n            return true; // Continue with the sign-in\n        },\n        // Handling JWT tokens\n        jwt: async ({ token, user })=>{\n            if (user) {\n                token.uid = user.id; // Store user ID in the token\n            }\n            return token;\n        },\n        // Handling session object\n        session: async ({ session, token })=>{\n            if (session.user) {\n                session.user.id = token.uid; // Add user ID to the session\n            }\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXV0aC9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDVjtBQUU5QyxNQUFNRSxTQUFTLElBQUlELHdEQUFZQTtBQUV4QixNQUFNRSxZQUFZO0lBQ3ZCQyxXQUFXO1FBQ1RKLHNFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCLElBQUk7WUFDMUNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CLElBQUk7UUFDcEQ7S0FDRDtJQUNEQyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLGVBQWU7SUFFbkNDLFdBQVc7UUFDVCwrQkFBK0I7UUFDL0IsTUFBTUMsUUFBTyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFPO1lBQzFDLG1EQUFtRDtZQUNuRCxNQUFNQyxlQUFlLE1BQU1oQixPQUFPYSxJQUFJLENBQUNJLFVBQVUsQ0FBQztnQkFDaERDLE9BQU87b0JBQUVDLE9BQU9OLEtBQUtNLEtBQUs7Z0JBQUM7WUFDN0I7WUFFQSxJQUFJLENBQUNILGNBQWM7Z0JBQ2pCLDREQUE0RDtnQkFDNUQsTUFBTWhCLE9BQU9hLElBQUksQ0FBQ08sTUFBTSxDQUFDO29CQUN2QkMsTUFBTTt3QkFDSkYsT0FBT04sS0FBS00sS0FBSzt3QkFDakJHLE1BQU1ULEtBQUtTLElBQUk7d0JBQ2ZDLFlBQVk7b0JBQ2Q7Z0JBQ0Y7WUFDRjtZQUNBLE9BQU8sTUFBTSw0QkFBNEI7UUFDM0M7UUFFQSxzQkFBc0I7UUFDdEJDLEtBQUssT0FBTyxFQUFFQyxLQUFLLEVBQUVaLElBQUksRUFBTztZQUM5QixJQUFJQSxNQUFNO2dCQUNSWSxNQUFNQyxHQUFHLEdBQUdiLEtBQUtjLEVBQUUsRUFBRSw2QkFBNkI7WUFDcEQ7WUFDQSxPQUFPRjtRQUNUO1FBRUEsMEJBQTBCO1FBQzFCRyxTQUFTLE9BQU8sRUFBRUEsT0FBTyxFQUFFSCxLQUFLLEVBQU87WUFDckMsSUFBSUcsUUFBUWYsSUFBSSxFQUFFO2dCQUNoQmUsUUFBUWYsSUFBSSxDQUFDYyxFQUFFLEdBQUdGLE1BQU1DLEdBQUcsRUFBRSw2QkFBNkI7WUFDNUQ7WUFDQSxPQUFPRTtRQUNUO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF6eS1jcm0vLi9hcHAvYXV0aC9hdXRoLnRzP2Q5YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IE5FWFRfQVVUSCA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgfHwgXCJcIixcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgfHwgXCJcIixcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgLy8gTWFuYWdpbmcgdGhlIHNpZ24taW4gcHJvY2Vzc1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfTogYW55KSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgZGF0YWJhc2VcbiAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBlbWFpbDogdXNlci5lbWFpbCB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgIC8vIElmIHVzZXIgZG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyB1c2VyIGluIHRoZSBkYXRhYmFzZVxuICAgICAgICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgdXNlclRva2VuczogMCwgLy8gSW5pdGlhbGl6ZSB0b2tlbnMgdG8gMFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7IC8vIENvbnRpbnVlIHdpdGggdGhlIHNpZ24taW5cbiAgICB9LFxuXG4gICAgLy8gSGFuZGxpbmcgSldUIHRva2Vuc1xuICAgIGp3dDogYXN5bmMgKHsgdG9rZW4sIHVzZXIgfTogYW55KSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi51aWQgPSB1c2VyLmlkOyAvLyBTdG9yZSB1c2VyIElEIGluIHRoZSB0b2tlblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG5cbiAgICAvLyBIYW5kbGluZyBzZXNzaW9uIG9iamVjdFxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH06IGFueSkgPT4ge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi51aWQ7IC8vIEFkZCB1c2VyIElEIHRvIHRoZSBzZXNzaW9uXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsIk5FWFRfQVVUSCIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImV4aXN0aW5nVXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVtYWlsIiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJ1c2VyVG9rZW5zIiwiand0IiwidG9rZW4iLCJ1aWQiLCJpZCIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/auth/auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@babel","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsmol%2Fdev%2FAiPlagiarismR&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();