/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../\u0000#warplayCloud/src/js/main.js":
/*!****************************************!*\
  !*** ../ #warplayCloud/src/js/main.js ***!
  \****************************************/
/***/ (function() {

eval("// Вкладка контакты\r\nconst body = document.querySelector('body');\r\n\r\nconst contactBtn = document.getElementById('contact');\r\nconst contactClose = document.getElementById('contact__close');\r\nconst contact = document.querySelector('.modal-contact');\r\ncontactBtn.addEventListener('click', function(){\r\n    contact.classList.add('active')\r\n    body.classList.add('active')\r\n})\r\ncontactClose.addEventListener('click', function(){\r\n    contact.classList.remove('active')\r\n    body.classList.remove('active')\r\n    header.classList.remove('active')\r\n    headerInner.classList.remove('active')\r\n    burger.classList.remove('active')\r\n})\r\n\r\n// Вкладка скачать\r\nconst systemtBtn = document.getElementById('system');\r\nconst systemClose = document.getElementById('system__close');\r\nconst system = document.querySelector('.modal-system');\r\nsystemtBtn.addEventListener('click', function(){\r\n    system.classList.add('active')\r\n    body.classList.add('active')\r\n})\r\nsystemClose.addEventListener('click', function(){\r\n    system.classList.remove('active')\r\n    body.classList.remove('active')\r\n    header.classList.remove('active')\r\n    headerInner.classList.remove('active')\r\n    burger.classList.remove('active')\r\n})\r\n\r\n// Вкладка скачать\r\nconst registrBtn = document.getElementById('registr');\r\nconst registrClose = document.getElementById('registr__close');\r\nconst registr = document.querySelector('.modal-registr');\r\nregistrBtn.addEventListener('click', function(){\r\n    registr.classList.add('active')\r\n    body.classList.add('active')\r\n})\r\nregistrClose.addEventListener('click', function(){\r\n    registr.classList.remove('active')\r\n    body.classList.remove('active')\r\n    header.classList.remove('active')\r\n    headerInner.classList.remove('active')\r\n    burger.classList.remove('active')\r\n})\r\n\r\n// Вкладка скачать\r\nconst entranceBtn = document.getElementById('entrance');\r\nconst entranceClose = document.getElementById('entrance__close');\r\nconst entrance = document.querySelector('.modal-entrance');\r\nentranceBtn.addEventListener('click', function(){\r\n    entrance.classList.add('active')\r\n    body.classList.add('active')\r\n})\r\nentranceClose.addEventListener('click', function(){\r\n    entrance.classList.remove('active')\r\n    registr.classList.remove('active')\r\n    burger.classList.remove('active')\r\n    body.classList.remove('active')\r\n})\r\n\r\nconst entranceClosest = document.getElementById('entranceClose')\r\nentranceClosest.addEventListener('click', function(){\r\n    entrance.classList.remove('active')\r\n    header.classList.remove('active')\r\n    headerInner.classList.remove('active')\r\n    burger.classList.remove('active')\r\n})\r\n\r\n//Burger\r\nconst burger = document.querySelector('.burger')\r\nconst header = document.querySelector('.header__nav')\r\nconst headerInner = document.querySelector('.header__inner')\r\n\r\nburger.addEventListener('click', function(){\r\n    if(burger.className == 'burger'){\r\n        burger.classList.add('active')\r\n        body.classList.add('active')\r\n        header.classList.add('active')\r\n        headerInner.classList.add('active')\r\n    }else{\r\n        burger.classList.remove('active')\r\n        body.classList.remove('active')\r\n        header.classList.remove('active')\r\n        headerInner.classList.remove('active')\r\n    }\r\n})\r\n\r\nconst map = document.querySelector('.map__img')\r\n\r\nmap.addEventListener('click', function(){\r\n    if(map.className == 'map__img active'){\r\n        map.src = 'img/map/map-1.svg';\r\n        map.classList.remove('active')\r\n    }else{\r\n        map.src = 'img/map/map-2.svg';\r\n        map.classList.add('active')\r\n    }\r\n})\r\n\r\n// Show Scroll\r\nconst anchors = document.querySelectorAll('.header__link[href*=\"#\"]')\r\n\r\nfor (let anchor of anchors) {\r\n    anchor.addEventListener(\"click\", function(event) {\r\n        event.preventDefault();\r\n        const blockId = anchor.getAttribute('href')\r\n        document.querySelector('' + blockId).scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: 'center'\r\n        })\r\n    });\r\n}\n\n//# sourceURL=webpack://assembl-gulp/../%00#warplayCloud/src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../\u0000#warplayCloud/src/js/main.js"]();
/******/ 	
/******/ })()
;