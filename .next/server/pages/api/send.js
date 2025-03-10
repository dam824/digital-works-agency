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
exports.id = "pages/api/send";
exports.ids = ["pages/api/send"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/send.js":
/*!***************************!*\
  !*** ./pages/api/send.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"M\\xe9thod non authoris\\xe9e\"\n        });\n    }\n    const { name , email , message  } = req.body;\n    const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n        host: \"ssl0.ovh.net\",\n        port: 465,\n        secure: true,\n        auth: {\n            user: process.env.FROM_EMAIL,\n            pass: process.env.EMAIL_MDP\n        }\n    });\n    try {\n        await transporter.sendMail({\n            from: `\"${name}\" <${email}>`,\n            to: \"contact@digital-works.org\",\n            subject: \"Nouveau message via le formulaire de contact\",\n            text: message,\n            html: `<p><strong>Nom :</strong> ${name}</p>\n                   <p><strong>Email :</strong> ${email}</p>\n                   <p><strong>Message :</strong> ${message}</p>`\n        });\n        return res.status(200).json({\n            success: true,\n            message: \"Message envoy\\xe9 avec succ\\xe8s\"\n        });\n    } catch (error) {\n        console.error(\"Erreur d'envoi d'email :\", error);\n        return res.status(500).json({\n            error: \"Erreur lors de l'envoi du mail\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFDQyxHQUFHLEVBQUM7SUFDMUMsSUFBR0QsSUFBSUUsTUFBTSxLQUFLLFFBQU87UUFDckIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxPQUFPO1FBQXVCO0lBQy9ELENBQUM7SUFFRCxNQUFNLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUMsR0FBR1IsSUFBSVMsSUFBSTtJQUV2QyxNQUFNQyxjQUFjWixpRUFBMEIsQ0FBQztRQUMzQ2MsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFFBQVEsSUFBSTtRQUNaQyxNQUFNO1lBQ0pDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtZQUM1QkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxTQUFTO1FBQzdCO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTVgsWUFBWVksUUFBUSxDQUFDO1lBQ3ZCQyxNQUFNLENBQUMsQ0FBQyxFQUFFakIsS0FBSyxHQUFHLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCaUIsSUFBSTtZQUNKQyxTQUFTO1lBQ1RDLE1BQU1sQjtZQUNObUIsTUFBTSxDQUFDLDBCQUEwQixFQUFFckIsS0FBSzsrQ0FDTCxFQUFFQyxNQUFNO2lEQUNOLEVBQUVDLFFBQVEsSUFBSSxDQUFDO1FBQ3hEO1FBQ0EsT0FBT1AsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFd0IsU0FBUyxJQUFJO1lBQUVwQixTQUFTO1FBQTZCO0lBQ3JGLEVBQUMsT0FBTUgsT0FBTTtRQUNYd0IsUUFBUXhCLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzlDLE9BQU9KLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFpQztJQUNwRTtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpdGFsLXdvcmtzLy4vcGFnZXMvYXBpL3NlbmQuanM/ZTNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSxyZXMpe1xuICAgIGlmKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKXtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHtlcnJvciA6XCJNw6l0aG9kIG5vbiBhdXRob3Jpc8OpZVwifSk7XG4gICAgfVxuXG4gICAgY29uc3Qge25hbWUsIGVtYWlsLCBtZXNzYWdlfSA9IHJlcS5ib2R5O1xuXG4gICAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgICAgIGhvc3Q6IFwic3NsMC5vdmgubmV0XCIsXG4gICAgICAgIHBvcnQ6IDQ2NSwgLy8gUG9ydCBTTVRQIHPDqWN1cmlzw6lcbiAgICAgICAgc2VjdXJlOiB0cnVlLCAvLyBVdGlsaXNhdGlvbiBkZSBTU0xcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkZST01fRU1BSUwsICBcbiAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5FTUFJTF9NRFAsICBcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgICAgICBmcm9tOiBgXCIke25hbWV9XCIgPCR7ZW1haWx9PmAsIC8vIEwnZW1haWwgZGUgbCdleHDDqWRpdGV1clxuICAgICAgICAgICAgdG86IFwiY29udGFjdEBkaWdpdGFsLXdvcmtzLm9yZ1wiLCAvLyByZWNlcHRpb24gZW1haWxzXG4gICAgICAgICAgICBzdWJqZWN0OiBcIk5vdXZlYXUgbWVzc2FnZSB2aWEgbGUgZm9ybXVsYWlyZSBkZSBjb250YWN0XCIsXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLCAvLyBDb250ZW51IGVuIHRleHRlIGJydXRcbiAgICAgICAgICAgIGh0bWw6IGA8cD48c3Ryb25nPk5vbSA6PC9zdHJvbmc+ICR7bmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5FbWFpbCA6PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+TWVzc2FnZSA6PC9zdHJvbmc+ICR7bWVzc2FnZX08L3A+YCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiTWVzc2FnZSBlbnZvecOpIGF2ZWMgc3VjY8Ooc1wiIH0pO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBkJ2Vudm9pIGQnZW1haWwgOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyZXVyIGxvcnMgZGUgbCdlbnZvaSBkdSBtYWlsXCIgfSk7XG4gICAgICB9XG59Il0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImJvZHkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiYXV0aCIsInVzZXIiLCJwcm9jZXNzIiwiZW52IiwiRlJPTV9FTUFJTCIsInBhc3MiLCJFTUFJTF9NRFAiLCJzZW5kTWFpbCIsImZyb20iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiaHRtbCIsInN1Y2Nlc3MiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/send.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/send.js"));
module.exports = __webpack_exports__;

})();