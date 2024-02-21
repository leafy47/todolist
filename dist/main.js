/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createlists.js":
/*!****************************!*\
  !*** ./src/createlists.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLists)
/* harmony export */ });
/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newtask */ "./src/newtask.js");
/* harmony import */ var _createtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createtask */ "./src/createtask.js");
/* harmony import */ var _listtrash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listtrash */ "./src/listtrash.js");




function createLists (name) {
    const newproj = document.querySelector('#newproj');
    const def2 = document.querySelector('h1');
    const newli = document.createElement('li');
    newli.textContent = name;
    newli.setAttribute('contenteditable', 'true');
    let numofli = document.querySelectorAll('li');
    newli.id = numofli.length + 'L';
    newli.classList.add('listitems');
    newli.addEventListener('input', () => {
      // Text content updated  
      def2.textContent = newli.textContent; 
      saveLists();
    });
    newli.addEventListener('click', () => {
      // Text content updated  
      def2.textContent = newli.textContent;
      def2.id = newli.id + 'T';
      //Clear containers
      const container = document.querySelector('.container');
      container.innerHTML = ''; 
      loadTasks(def2.id);
      (0,_newtask__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });
    const parentdiv = newproj.parentNode;
    parentdiv.insertBefore(newli, newproj);
    // trash can
    const trash = document.createElement('img');
    trash.src = './icons8-trash-24.png';
    trash.classList.add('ttrash');
    trash.id = newli.id;
    (0,_listtrash__WEBPACK_IMPORTED_MODULE_2__["default"])(trash);
    newli.append(trash);
    saveLists();
}

function loadTasks(name) {

    if (sessionStorage.getItem(name)) {
      // Get data from sessionStorage
    const json = sessionStorage.getItem(name);
    const tasks = JSON.parse(json);  
  
    const currentdivs = document.querySelectorAll('.task');
    
    // Iterate each task  
    if (tasks.length === null) {
    tasks.forEach(task => {
  
      // Create elements
      (0,_createtask__WEBPACK_IMPORTED_MODULE_1__["default"])(task.title, task.desc, task.select, task.date);
    });
  }
    else if (tasks.length > currentdivs.length) {
      tasks.forEach(task => {
  
        // Create elements
        (0,_createtask__WEBPACK_IMPORTED_MODULE_1__["default"])(task.title, task.desc, task.select, task.date);
      })
    };
  }}

  function saveLists () {
    const lists = document.querySelectorAll('.listitems');
  
    const listData = [];
  
    lists.forEach(list => {
      const title = list.textContent;
      const listid = list.id;
      listData.push ({
        title,
        listid
      })
    });
  
    const data = JSON.stringify(listData);
  
    sessionStorage.setItem('lists', data);
    console.log(data);
  }

/***/ }),

/***/ "./src/createtask.js":
/*!***************************!*\
  !*** ./src/createtask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _trash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trash.js */ "./src/trash.js");
/* harmony import */ var _savetasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./savetasks.js */ "./src/savetasks.js");
/* harmony import */ var _newtask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtask.js */ "./src/newtask.js");





function createTask(title1, descr1, select1, date1) {
const container = document.querySelector('.container');
  
// Create div 
const task = document.createElement('div');
task.classList.add('task');

// Title 
const title = document.createElement('p');
title.classList.add('title'); 
title.textContent = title1;
title.setAttribute('contenteditable', 'true');
let def2 = document.querySelector('h1');
title.addEventListener('input',() => {
     (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(def2.id);
   });

// Description
const description = document.createElement('p');
description.classList.add('description');
description.textContent = descr1;
description.setAttribute('contenteditable', 'true');
description.addEventListener('input',() => {
     (0,_savetasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(def2.id);
   });

// Priority  
const priority = document.createElement('div');
priority.classList.add('priority');

// Select and options
const label = document.createElement('label');
label.textContent = 'Priority ';
const select = document.createElement('select'); 
select.classList.add('score');

[1, 2, 3, 4, 5].forEach(num => {
   const option = document.createElement('option');
   option.value = num;
   option.textContent = num;
   select.appendChild(option);
});

select.value = select1;
 
// Rest of elements
const duedate = document.createElement('div');
duedate.classList.add('duedate');
duedate.textContent = 'Date: ';
const trashcan = document.createElement('img');
trashcan.src = './recycle-bin (1).png';
trashcan.classList.add('trashcan');
const numoftasks = document.querySelectorAll('.task');
trashcan.id = numoftasks.length + 1;
(0,_trash_js__WEBPACK_IMPORTED_MODULE_0__["default"])(trashcan);


const input = document.createElement('input');
input.type = 'date';
input.value = date1;

// Append elements
duedate.appendChild(input);
duedate.appendChild(trashcan);


// Append elements  
task.appendChild(title);
task.appendChild(description);

priority.appendChild(label);
priority.appendChild(select);
task.appendChild(priority);
task.appendChild(duedate);

(0,_newtask_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
let newtask = document.querySelector('#newtask');
container.insertBefore(task, newtask);
};

/***/ }),

/***/ "./src/listtrash.js":
/*!**************************!*\
  !*** ./src/listtrash.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listTrasher)
/* harmony export */ });
function listTrasher (trash) {
    trash.addEventListener('click', function(event) {

        // Or can directly access trigger element 
        const button = event.currentTarget;  
      
        // Get parent 
        button.remove();
        const li = document.getElementById(button.id);
        li.remove();
        const json = sessionStorage.getItem('lists');
        let tasks = JSON.parse(json);  
      
        tasks = tasks.filter(div => button.id !== div.listid)
      
        const data = JSON.stringify(tasks);  
      
        sessionStorage.setItem('lists', data);
      });
}

/***/ }),

/***/ "./src/newtask.js":
/*!************************!*\
  !*** ./src/newtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _createtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask */ "./src/createtask.js");


function newTask () {

const newtask = document.createElement('h3');
newtask.id = 'newtask';
newtask.textContent = '+ New Task';
newtask.addEventListener('click', () => {
  (0,_createtask__WEBPACK_IMPORTED_MODULE_0__["default"])('Laura B', 'Prime Pussy', 5, '2025-06-06');
});
const container = document.querySelector('.container');
let newtaskcount = document.querySelector('#newtask');
if (newtaskcount) {}
else {
  container.appendChild(newtask);
}};

/***/ }),

/***/ "./src/savetasks.js":
/*!**************************!*\
  !*** ./src/savetasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveTasks)
/* harmony export */ });
function saveTasks(name) {
    // Get task elements
    const tasks = document.querySelectorAll('.task'); 
    // Array to store data
    const taskData = [];
  
    // Loop through each  
    tasks.forEach(task => {
  
      // Get data per task as before
      const title = task.querySelector('.title').textContent;
      const desc = task.querySelector('.description').textContent;
      const select = task.querySelector('.score').value;
      const date = task.querySelector('input[type="date"').value;
      const trash = task.querySelector('.trashcan').id;
      
      // Add to array 
      taskData.push({
        title, 
        desc,
        select,
        date,
        trash,
      });
  
    });
  
    // Stringify array
    const data = JSON.stringify(taskData);  
  
    sessionStorage.setItem(name, data);
    console.log(data);
  }

/***/ }),

/***/ "./src/trash.js":
/*!**********************!*\
  !*** ./src/trash.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ trasher)
/* harmony export */ });
function trasher (trash) {
    trash.addEventListener('click', function(event) {

        // Or can directly access trigger element 
        const button = event.currentTarget;  
      
        // Get parent 
        const parentDiv = button.parentElement.parentElement;
        parentDiv.remove();
        let def2 = document.querySelector('h1');
        const json = sessionStorage.getItem(def2.id);
        let tasks = JSON.parse(json);  
      
        tasks = tasks.filter(div => button.id !== div.trash)
      
        const data = JSON.stringify(tasks);  
      
        sessionStorage.setItem(def2.id, data);
        console.log(tasks);
      });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createtask.js */ "./src/createtask.js");
/* harmony import */ var _newtask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newtask.js */ "./src/newtask.js");
/* harmony import */ var _createlists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createlists.js */ "./src/createlists.js");




const newproj = document.querySelector('#newproj');
// Get li elements 
const liElements = document.querySelectorAll('li');




newproj.addEventListener('click', () => {
  (0,_createlists_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Test');
});


let logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
  sessionStorage.clear();
});


function loadLists() {

  if (sessionStorage.getItem('lists')) {
    // Get data from sessionStorage
  const json = sessionStorage.getItem('lists');
  const tasks = JSON.parse(json);  

  const currentdivs = document.querySelectorAll('.task');
  
  // Iterate each task  
  if (tasks.length === null) {
}
  else if (tasks.length > currentdivs.length) {
    tasks.forEach(task => {

      // Create elements
      (0,_createlists_js__WEBPACK_IMPORTED_MODULE_2__["default"])(task.title);
    })
  };
}}

loadLists();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNLO0FBQ0E7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFRO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVztBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFVO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVTtBQUNsQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZpQztBQUNNO0FBQ0g7OztBQUdyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlEQUFTO0FBQ2QsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlEQUFTO0FBQ2QsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQVE7OztBQUdSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1REFBUTtBQUNSO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuRmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0M7O0FBRXZCOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBVTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNMO0FBQ087O0FBRTNDO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBLEVBQUUsMkRBQVc7QUFDYixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkRBQVc7QUFDakIsS0FBSztBQUNMO0FBQ0E7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZWxpc3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdHRyYXNoLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2F2ZXRhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RyYXNoLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Rhc2tGIGZyb20gXCIuL25ld3Rhc2tcIjtcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZXRhc2tcIjtcbmltcG9ydCBsaXN0VHJhc2hlciBmcm9tIFwiLi9saXN0dHJhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdHMgKG5hbWUpIHtcbiAgICBjb25zdCBuZXdwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Byb2onKTtcbiAgICBjb25zdCBkZWYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICBjb25zdCBuZXdsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3bGkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5ld2xpLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICBsZXQgbnVtb2ZsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbmV3bGkuaWQgPSBudW1vZmxpLmxlbmd0aCArICdMJztcbiAgICBuZXdsaS5jbGFzc0xpc3QuYWRkKCdsaXN0aXRlbXMnKTtcbiAgICBuZXdsaS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIC8vIFRleHQgY29udGVudCB1cGRhdGVkICBcbiAgICAgIGRlZjIudGV4dENvbnRlbnQgPSBuZXdsaS50ZXh0Q29udGVudDsgXG4gICAgICBzYXZlTGlzdHMoKTtcbiAgICB9KTtcbiAgICBuZXdsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIFRleHQgY29udGVudCB1cGRhdGVkICBcbiAgICAgIGRlZjIudGV4dENvbnRlbnQgPSBuZXdsaS50ZXh0Q29udGVudDtcbiAgICAgIGRlZjIuaWQgPSBuZXdsaS5pZCArICdUJztcbiAgICAgIC8vQ2xlYXIgY29udGFpbmVyc1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyBcbiAgICAgIGxvYWRUYXNrcyhkZWYyLmlkKTtcbiAgICAgIG5ld1Rhc2tGKCk7XG4gICAgfSk7XG4gICAgY29uc3QgcGFyZW50ZGl2ID0gbmV3cHJvai5wYXJlbnROb2RlO1xuICAgIHBhcmVudGRpdi5pbnNlcnRCZWZvcmUobmV3bGksIG5ld3Byb2opO1xuICAgIC8vIHRyYXNoIGNhblxuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHJhc2guc3JjID0gJy4vaWNvbnM4LXRyYXNoLTI0LnBuZyc7XG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgndHRyYXNoJyk7XG4gICAgdHJhc2guaWQgPSBuZXdsaS5pZDtcbiAgICBsaXN0VHJhc2hlcih0cmFzaCk7XG4gICAgbmV3bGkuYXBwZW5kKHRyYXNoKTtcbiAgICBzYXZlTGlzdHMoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKG5hbWUpIHtcblxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKG5hbWUpKSB7XG4gICAgICAvLyBHZXQgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlXG4gICAgY29uc3QganNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGpzb24pOyAgXG4gIFxuICAgIGNvbnN0IGN1cnJlbnRkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBcbiAgICAvLyBJdGVyYXRlIGVhY2ggdGFzayAgXG4gICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gbnVsbCkge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gIFxuICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgICBjcmVhdGVUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzYywgdGFzay5zZWxlY3QsIHRhc2suZGF0ZSk7XG4gICAgfSk7XG4gIH1cbiAgICBlbHNlIGlmICh0YXNrcy5sZW5ndGggPiBjdXJyZW50ZGl2cy5sZW5ndGgpIHtcbiAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gIFxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICAgICAgY3JlYXRlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suc2VsZWN0LCB0YXNrLmRhdGUpO1xuICAgICAgfSlcbiAgICB9O1xuICB9fVxuXG4gIGZ1bmN0aW9uIHNhdmVMaXN0cyAoKSB7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdGl0ZW1zJyk7XG4gIFxuICAgIGNvbnN0IGxpc3REYXRhID0gW107XG4gIFxuICAgIGxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGxpc3QudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBsaXN0aWQgPSBsaXN0LmlkO1xuICAgICAgbGlzdERhdGEucHVzaCAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgbGlzdGlkXG4gICAgICB9KVxuICAgIH0pO1xuICBcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkobGlzdERhdGEpO1xuICBcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXN0cycsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9IiwiaW1wb3J0IHB1dFRyYXNoIGZyb20gXCIuL3RyYXNoLmpzXCJcbmltcG9ydCBzYXZlVGFza3MgZnJvbSBcIi4vc2F2ZXRhc2tzLmpzXCI7XG5pbXBvcnQgbmV3VGFza0YgZnJvbSBcIi4vbmV3dGFzay5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUxLCBkZXNjcjEsIHNlbGVjdDEsIGRhdGUxKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIFxuLy8gQ3JlYXRlIGRpdiBcbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4vLyBUaXRsZSBcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xudGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTsgXG50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlMTtcbnRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbmxldCBkZWYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoKSA9PiB7XG4gICAgIHNhdmVUYXNrcyhkZWYyLmlkKTtcbiAgIH0pO1xuXG4vLyBEZXNjcmlwdGlvblxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcjE7XG5kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG5kZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKCkgPT4ge1xuICAgICBzYXZlVGFza3MoZGVmMi5pZCk7XG4gICB9KTtcblxuLy8gUHJpb3JpdHkgIFxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbi8vIFNlbGVjdCBhbmQgb3B0aW9uc1xuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgJztcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpOyBcbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xuXG5bMSwgMiwgMywgNCwgNV0uZm9yRWFjaChudW0gPT4ge1xuICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICBvcHRpb24udmFsdWUgPSBudW07XG4gICBvcHRpb24udGV4dENvbnRlbnQgPSBudW07XG4gICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn0pO1xuXG5zZWxlY3QudmFsdWUgPSBzZWxlY3QxO1xuIFxuLy8gUmVzdCBvZiBlbGVtZW50c1xuY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVkYXRlJyk7XG5kdWVkYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICc7XG5jb25zdCB0cmFzaGNhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xudHJhc2hjYW4uc3JjID0gJy4vcmVjeWNsZS1iaW4gKDEpLnBuZyc7XG50cmFzaGNhbi5jbGFzc0xpc3QuYWRkKCd0cmFzaGNhbicpO1xuY29uc3QgbnVtb2Z0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG50cmFzaGNhbi5pZCA9IG51bW9mdGFza3MubGVuZ3RoICsgMTtcbnB1dFRyYXNoKHRyYXNoY2FuKTtcblxuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dC50eXBlID0gJ2RhdGUnO1xuaW5wdXQudmFsdWUgPSBkYXRlMTtcblxuLy8gQXBwZW5kIGVsZW1lbnRzXG5kdWVkYXRlLmFwcGVuZENoaWxkKGlucHV0KTtcbmR1ZWRhdGUuYXBwZW5kQ2hpbGQodHJhc2hjYW4pO1xuXG5cbi8vIEFwcGVuZCBlbGVtZW50cyAgXG50YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbnRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG5wcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbCk7XG5wcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3QpO1xudGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG50YXNrLmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuXG5uZXdUYXNrRigpO1xubGV0IG5ld3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3dGFzaycpO1xuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCBuZXd0YXNrKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRyYXNoZXIgKHRyYXNoKSB7XG4gICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIC8vIE9yIGNhbiBkaXJlY3RseSBhY2Nlc3MgdHJpZ2dlciBlbGVtZW50IFxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0OyAgXG4gICAgICBcbiAgICAgICAgLy8gR2V0IHBhcmVudCBcbiAgICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbi5pZCk7XG4gICAgICAgIGxpLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBqc29uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMnKTtcbiAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShqc29uKTsgIFxuICAgICAgXG4gICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGRpdiA9PiBidXR0b24uaWQgIT09IGRpdi5saXN0aWQpXG4gICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTsgIFxuICAgICAgXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgZGF0YSk7XG4gICAgICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGV0YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2sgKCkge1xuXG5jb25zdCBuZXd0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbm5ld3Rhc2suaWQgPSAnbmV3dGFzayc7XG5uZXd0YXNrLnRleHRDb250ZW50ID0gJysgTmV3IFRhc2snO1xubmV3dGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3JlYXRlVGFzaygnTGF1cmEgQicsICdQcmltZSBQdXNzeScsIDUsICcyMDI1LTA2LTA2Jyk7XG59KTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmxldCBuZXd0YXNrY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3dGFzaycpO1xuaWYgKG5ld3Rhc2tjb3VudCkge31cbmVsc2Uge1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3dGFzayk7XG59fTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYXZlVGFza3MobmFtZSkge1xuICAgIC8vIEdldCB0YXNrIGVsZW1lbnRzXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpOyBcbiAgICAvLyBBcnJheSB0byBzdG9yZSBkYXRhXG4gICAgY29uc3QgdGFza0RhdGEgPSBbXTtcbiAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggIFxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gIFxuICAgICAgLy8gR2V0IGRhdGEgcGVyIHRhc2sgYXMgYmVmb3JlXG4gICAgICBjb25zdCB0aXRsZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRpdGxlJykudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBkZXNjID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IHRhc2sucXVlcnlTZWxlY3RvcignLnNjb3JlJykudmFsdWU7XG4gICAgICBjb25zdCBkYXRlID0gdGFzay5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZGF0ZVwiJykudmFsdWU7XG4gICAgICBjb25zdCB0cmFzaCA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRyYXNoY2FuJykuaWQ7XG4gICAgICBcbiAgICAgIC8vIEFkZCB0byBhcnJheSBcbiAgICAgIHRhc2tEYXRhLnB1c2goe1xuICAgICAgICB0aXRsZSwgXG4gICAgICAgIGRlc2MsXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgdHJhc2gsXG4gICAgICB9KTtcbiAgXG4gICAgfSk7XG4gIFxuICAgIC8vIFN0cmluZ2lmeSBhcnJheVxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0YXNrRGF0YSk7ICBcbiAgXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYXNoZXIgKHRyYXNoKSB7XG4gICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIC8vIE9yIGNhbiBkaXJlY3RseSBhY2Nlc3MgdHJpZ2dlciBlbGVtZW50IFxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0OyAgXG4gICAgICBcbiAgICAgICAgLy8gR2V0IHBhcmVudCBcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50RGl2LnJlbW92ZSgpO1xuICAgICAgICBsZXQgZGVmMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgICAgIGNvbnN0IGpzb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGRlZjIuaWQpO1xuICAgICAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGpzb24pOyAgXG4gICAgICBcbiAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoZGl2ID0+IGJ1dHRvbi5pZCAhPT0gZGl2LnRyYXNoKVxuICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0YXNrcyk7ICBcbiAgICAgIFxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGRlZjIuaWQsIGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgICB9KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZXRhc2suanNcIjtcbmltcG9ydCBuZXdUYXNrRiBmcm9tIFwiLi9uZXd0YXNrLmpzXCI7XG5pbXBvcnQgY3JlYXRlTGlzdHMgZnJvbSBcIi4vY3JlYXRlbGlzdHMuanNcIjtcblxuY29uc3QgbmV3cHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdwcm9qJyk7XG4vLyBHZXQgbGkgZWxlbWVudHMgXG5jb25zdCBsaUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblxuXG5cblxubmV3cHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3JlYXRlTGlzdHMoJ1Rlc3QnKTtcbn0pO1xuXG5cbmxldCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ28nKTtcbmxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG59KTtcblxuXG5mdW5jdGlvbiBsb2FkTGlzdHMoKSB7XG5cbiAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpc3RzJykpIHtcbiAgICAvLyBHZXQgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlXG4gIGNvbnN0IGpzb24gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsaXN0cycpO1xuICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UoanNvbik7ICBcblxuICBjb25zdCBjdXJyZW50ZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gIFxuICAvLyBJdGVyYXRlIGVhY2ggdGFzayAgXG4gIGlmICh0YXNrcy5sZW5ndGggPT09IG51bGwpIHtcbn1cbiAgZWxzZSBpZiAodGFza3MubGVuZ3RoID4gY3VycmVudGRpdnMubGVuZ3RoKSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcblxuICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgICBjcmVhdGVMaXN0cyh0YXNrLnRpdGxlKTtcbiAgICB9KVxuICB9O1xufX1cblxubG9hZExpc3RzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9