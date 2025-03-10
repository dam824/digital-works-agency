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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_lib_sendMail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/src/lib/sendMail */ \"(api)/./src/lib/sendMail.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"M\\xe9thode non autoris\\xe9e\"\n        });\n    }\n    const { name , phone_number , email , message  } = req.body;\n    const result = await (0,_src_lib_sendMail__WEBPACK_IMPORTED_MODULE_0__.sendMail)(name, phone_number, email, message);\n    if (result.success) {\n        return res.status(200).json({\n            success: true,\n            message: \"Message envoy\\xe9 avec succ\\xe8s\"\n        });\n    } else {\n        return res.status(500).json({\n            error: \"Erreur lors de l'envoi du mail\",\n            details: result.error\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUUvQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0I7SUFDL0QsQ0FBQztJQUVELE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxhQUFZLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdULElBQUlVLElBQUk7SUFFdkQsTUFBTUMsU0FBUyxNQUFNYiwyREFBUUEsQ0FBQ1EsTUFBTUMsY0FBY0MsT0FBT0M7SUFFekQsSUFBSUUsT0FBT0MsT0FBTyxFQUFFO1FBQ2xCLE9BQU9YLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVEsU0FBUyxJQUFJO1lBQUVILFNBQVM7UUFBNkI7SUFDckYsT0FBTztRQUNMLE9BQU9SLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztZQUFrQ1EsU0FBU0YsT0FBT04sS0FBSztRQUFDO0lBQy9GLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaXRhbC13b3Jrcy8uL3BhZ2VzL2FwaS9zZW5kLmpzP2UzYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VuZE1haWwgfSBmcm9tIFwiQC9zcmMvbGliL3NlbmRNYWlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTcOpdGhvZGUgbm9uIGF1dG9yaXPDqWVcIiB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgbmFtZSwgcGhvbmVfbnVtYmVyLCBlbWFpbCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VuZE1haWwobmFtZSwgcGhvbmVfbnVtYmVyLCBlbWFpbCwgbWVzc2FnZSk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJNZXNzYWdlIGVudm95w6kgYXZlYyBzdWNjw6hzXCIgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyZXVyIGxvcnMgZGUgbCdlbnZvaSBkdSBtYWlsXCIsIGRldGFpbHM6IHJlc3VsdC5lcnJvciB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJzZW5kTWFpbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJuYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWwiLCJtZXNzYWdlIiwiYm9keSIsInJlc3VsdCIsInN1Y2Nlc3MiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/send.js\n");

/***/ }),

/***/ "(api)/./src/lib/sendMail.js":
/*!*****************************!*\
  !*** ./src/lib/sendMail.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendMail\": () => (/* binding */ sendMail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n// Configuration du transporteur\nconst transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n    host: \"ssl0.ovh.net\",\n    port: 465,\n    secure: true,\n    auth: {\n        user: process.env.FROM_EMAIL,\n        pass: process.env.EMAIL_MDP\n    }\n});\nasync function sendMail(name, phone_number, email, message, sentTo) {\n    try {\n        // Vérifiez que le transporteur est opérationnel\n        await transporter.verify();\n        // Problème potentiel: OVH pourrait ne pas accepter qu'une adresse différente soit dans le champ \"from\"\n        const info = await transporter.sendMail({\n            from: process.env.FROM_EMAIL,\n            replyTo: email,\n            to: sentTo || process.env.FROM_EMAIL,\n            subject: `Nouveau message de ${name} via le formulaire de contact`,\n            text: `Message de: ${name} (${email})\n      \n${message}`,\n            html: `<p><strong>Nom :</strong> ${name}</p>\n             <p><strong>Email :</strong> ${email}</p>\n             <p><strong>Message :</strong> ${message}</p>`\n        });\n        console.log(\"Email envoy\\xe9 ! ID :\", info.messageId);\n        return {\n            success: true,\n            messageId: info.messageId\n        };\n    } catch (error) {\n        console.error(\"Erreur d'envoi d'email :\", error);\n        return {\n            success: false,\n            error: error.message\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL3NlbmRNYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUdwQyxnQ0FBZ0M7QUFDaEMsTUFBTUMsY0FBY0QsaUVBQTBCLENBQUM7SUFDN0NHLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxRQUFRLElBQUk7SUFDWkMsTUFBTTtRQUNKQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDNUJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csU0FBUztJQUM3QjtBQUNGO0FBRU8sZUFBZUMsU0FBU0MsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7SUFDekUsSUFBSTtRQUNGLGdEQUFnRDtRQUNoRCxNQUFNakIsWUFBWWtCLE1BQU07UUFFeEIsdUdBQXVHO1FBQ3ZHLE1BQU1DLE9BQU8sTUFBTW5CLFlBQVlZLFFBQVEsQ0FBQztZQUN0Q1EsTUFBTWIsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1lBQzVCWSxTQUFTTjtZQUNUTyxJQUFJTCxVQUFVVixRQUFRQyxHQUFHLENBQUNDLFVBQVU7WUFDcENjLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRVYsS0FBSyw2QkFBNkIsQ0FBQztZQUNsRVcsTUFBTSxDQUFDLFlBQVksRUFBRVgsS0FBSyxFQUFFLEVBQUVFLE1BQU07O0FBRTFDLEVBQUVDLFFBQVEsQ0FBQztZQUNMUyxNQUFNLENBQUMsMEJBQTBCLEVBQUVaLEtBQUs7eUNBQ0wsRUFBRUUsTUFBTTsyQ0FDTixFQUFFQyxRQUFRLElBQUksQ0FBQztRQUN0RDtRQUVBVSxRQUFRQyxHQUFHLENBQUMsMEJBQXVCUixLQUFLUyxTQUFTO1FBQ2pELE9BQU87WUFBRUMsU0FBUyxJQUFJO1lBQUVELFdBQVdULEtBQUtTLFNBQVM7UUFBQztJQUNwRCxFQUFFLE9BQU9FLE9BQU87UUFDZEosUUFBUUksS0FBSyxDQUFDLDRCQUE0QkE7UUFDMUMsT0FBTztZQUFFRCxTQUFTLEtBQUs7WUFBRUMsT0FBT0EsTUFBTWQsT0FBTztRQUFDO0lBQ2hEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2l0YWwtd29ya3MvLi9zcmMvbGliL3NlbmRNYWlsLmpzPzhjOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuXG4vLyBDb25maWd1cmF0aW9uIGR1IHRyYW5zcG9ydGV1clxuY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gIGhvc3Q6IFwic3NsMC5vdmgubmV0XCIsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuRlJPTV9FTUFJTCAsIFxuICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX01EUCAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNYWlsKG5hbWUsIHBob25lX251bWJlciwgZW1haWwsIG1lc3NhZ2UsIHNlbnRUbykge1xuICB0cnkge1xuICAgIC8vIFbDqXJpZmlleiBxdWUgbGUgdHJhbnNwb3J0ZXVyIGVzdCBvcMOpcmF0aW9ubmVsXG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIudmVyaWZ5KCk7XG4gICAgXG4gICAgLy8gUHJvYmzDqG1lIHBvdGVudGllbDogT1ZIIHBvdXJyYWl0IG5lIHBhcyBhY2NlcHRlciBxdSd1bmUgYWRyZXNzZSBkaWZmw6lyZW50ZSBzb2l0IGRhbnMgbGUgY2hhbXAgXCJmcm9tXCJcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRlJPTV9FTUFJTCAsIC8vIFV0aWxpc2V6IGwnYWRyZXNzZSBhdXRoZW50aWZpw6llIHBvdXIgbGUgXCJmcm9tXCJcbiAgICAgIHJlcGx5VG86IGVtYWlsLCAvLyBVdGlsaXNleiBsJ2VtYWlsIGR1IGZvcm11bGFpcmUgY29tbWUgXCJyZXBseS10b1wiIMOgIGxhIHBsYWNlXG4gICAgICB0bzogc2VudFRvIHx8IHByb2Nlc3MuZW52LkZST01fRU1BSUwgLFxuICAgICAgc3ViamVjdDogYE5vdXZlYXUgbWVzc2FnZSBkZSAke25hbWV9IHZpYSBsZSBmb3JtdWxhaXJlIGRlIGNvbnRhY3RgLFxuICAgICAgdGV4dDogYE1lc3NhZ2UgZGU6ICR7bmFtZX0gKCR7ZW1haWx9KVxuICAgICAgXG4ke21lc3NhZ2V9YCxcbiAgICAgIGh0bWw6IGA8cD48c3Ryb25nPk5vbSA6PC9zdHJvbmc+ICR7bmFtZX08L3A+XG4gICAgICAgICAgICAgPHA+PHN0cm9uZz5FbWFpbCA6PC9zdHJvbmc+ICR7ZW1haWx9PC9wPlxuICAgICAgICAgICAgIDxwPjxzdHJvbmc+TWVzc2FnZSA6PC9zdHJvbmc+ICR7bWVzc2FnZX08L3A+YCxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiRW1haWwgZW52b3nDqSAhIElEIDpcIiwgaW5mby5tZXNzYWdlSWQpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2VJZDogaW5mby5tZXNzYWdlSWQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGQnZW52b2kgZCdlbWFpbCA6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxufSJdLCJuYW1lcyI6WyJub2RlbWFpbGVyIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIkZST01fRU1BSUwiLCJwYXNzIiwiRU1BSUxfTURQIiwic2VuZE1haWwiLCJuYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWwiLCJtZXNzYWdlIiwic2VudFRvIiwidmVyaWZ5IiwiaW5mbyIsImZyb20iLCJyZXBseVRvIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsImh0bWwiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZUlkIiwic3VjY2VzcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/sendMail.js\n");

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