/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const submitButton = document.querySelector(\"#submit\");\r\nconst output = document.querySelector(\"#output\");\r\nconst letters = \"abcdefghijklmnopqrstuvwxyz\";\r\nconst symbols = \"@#$&!\";\r\nconst capitalLetters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\r\nconst symbolCheck = document.querySelector(\"#symbol\");\r\nconst capitalCheck = document.querySelector(\"#capital-letter\");\r\nconst userNumberInput = document.querySelector(\"#length\");\r\n//to have more letters and numbers than anything in the password i repeated the words\r\nlet characterTypes = [\"letter\",\"number\",\"letter\",\"number\",\"letter\"];\r\n\r\n\r\nconst generateRandomLetter = ()=>letters.charAt(Math.floor(Math.random()*letters.length));\r\nconst generateRandomSymbol = ()=>symbols.charAt(Math.floor(Math.random()*symbols.length));\r\nconst generateRandomCapital =()=> capitalLetters.charAt(Math.floor(Math.random()*capitalLetters.length));\r\nconst generateRandomNumber = ()=>Math.floor(Math.random()*10);\r\n\r\n\r\n\t \r\nconst isChecked =(checkBox)=>{\r\n\treturn checkBox.checked;\r\n}\r\n\r\nconst isSymbolChecked = ()=>{\r\n\tif (isChecked(symbolCheck) === true) {characterTypes.push(\"symbol\")}\r\n}\r\nconst isCapitalChecked = ()=>{\r\n\tif (isChecked(capitalCheck) === true) {characterTypes.push(\"capitalLetter\")}\r\n}\r\nconst checkBoxes = ()=>{\r\n\tisSymbolChecked();\r\n\tisCapitalChecked();\r\n}\r\nconst deleteChecked = ()=>{\r\n\tif (isChecked(capitalCheck) === true) {characterTypes.pop()}\r\n    if (isChecked(symbolCheck) === true) {characterTypes.pop()}\t\r\n}\r\nconst generateCharacter = ()=>{\r\n\treturn characterTypes[Math.floor(Math.random()*characterTypes.length)];\r\n}\r\n \r\nconst randomCharacterType =()=>{\r\n\tcheckBoxes();\r\n\tlet character= generateCharacter();\r\n\t//delete the checked characters so they don't fill up the array\r\n    deleteChecked();\t\r\n    return character;\r\n}\r\n\r\nconst generatPassword =()=>{\r\n\tlet passwordLengthChoice = userNumberInput.value;\r\n\t//so the password will always start with a small letter\r\n\tlet password = generateRandomLetter();\r\n\twhile (password.length<passwordLengthChoice){\r\n\t\tcharacterType = randomCharacterType();\r\n\t\tif (characterType ===\"symbol\"){\r\n\t\t\tpassword+= generateRandomSymbol();\r\n\t\t}else if (characterType===\"capitalLetter\"){\r\n\t\t\tpassword+= generateRandomCapital();\r\n\t\t\t}\r\n\t\t\telse if(characterType===\"number\"){\r\n\t\t\t\tpassword+= generateRandomNumber();\r\n\t\t\t}else{password+= generateRandomLetter();}\r\n\t}\r\n\treturn password;\r\n}\r\n\r\nconst displayPassword = ()=>{\r\n\tif (document.querySelector(\"#length\").value<=16 && document.querySelector(\"#length\").value>=6) {\r\n\t\toutput.textContent = generatPassword();\r\n\t}else{\r\n\t\toutput.textContent = \"invalid length 6-16 only\";\r\n\t}\r\n\t\r\n}\r\n\r\nsubmitButton.addEventListener(\"click\",displayPassword);\r\nsubmitButton.addEventListener(\"click\",function(event){event.preventDefault()});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });