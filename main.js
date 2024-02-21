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
  (0,_createtask__WEBPACK_IMPORTED_MODULE_0__["default"])('Slay a Dragon', 'Become the saviour of the land!', 1, '2025-06-06');
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
  (0,_createlists_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Project Alpha');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEVBQUUsMkRBQVc7QUFDYixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sMkRBQVc7QUFDakIsS0FBSztBQUNMO0FBQ0E7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZWxpc3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdHRyYXNoLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25ld3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2F2ZXRhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RyYXNoLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Rhc2tGIGZyb20gXCIuL25ld3Rhc2tcIjtcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2NyZWF0ZXRhc2tcIjtcbmltcG9ydCBsaXN0VHJhc2hlciBmcm9tIFwiLi9saXN0dHJhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdHMgKG5hbWUpIHtcbiAgICBjb25zdCBuZXdwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Byb2onKTtcbiAgICBjb25zdCBkZWYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICBjb25zdCBuZXdsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3bGkudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5ld2xpLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbiAgICBsZXQgbnVtb2ZsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbmV3bGkuaWQgPSBudW1vZmxpLmxlbmd0aCArICdMJztcbiAgICBuZXdsaS5jbGFzc0xpc3QuYWRkKCdsaXN0aXRlbXMnKTtcbiAgICBuZXdsaS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIC8vIFRleHQgY29udGVudCB1cGRhdGVkICBcbiAgICAgIGRlZjIudGV4dENvbnRlbnQgPSBuZXdsaS50ZXh0Q29udGVudDsgXG4gICAgICBzYXZlTGlzdHMoKTtcbiAgICB9KTtcbiAgICBuZXdsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIFRleHQgY29udGVudCB1cGRhdGVkICBcbiAgICAgIGRlZjIudGV4dENvbnRlbnQgPSBuZXdsaS50ZXh0Q29udGVudDtcbiAgICAgIGRlZjIuaWQgPSBuZXdsaS5pZCArICdUJztcbiAgICAgIC8vQ2xlYXIgY29udGFpbmVyc1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyBcbiAgICAgIGxvYWRUYXNrcyhkZWYyLmlkKTtcbiAgICAgIG5ld1Rhc2tGKCk7XG4gICAgfSk7XG4gICAgY29uc3QgcGFyZW50ZGl2ID0gbmV3cHJvai5wYXJlbnROb2RlO1xuICAgIHBhcmVudGRpdi5pbnNlcnRCZWZvcmUobmV3bGksIG5ld3Byb2opO1xuICAgIC8vIHRyYXNoIGNhblxuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHJhc2guc3JjID0gJy4vaWNvbnM4LXRyYXNoLTI0LnBuZyc7XG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZCgndHRyYXNoJyk7XG4gICAgdHJhc2guaWQgPSBuZXdsaS5pZDtcbiAgICBsaXN0VHJhc2hlcih0cmFzaCk7XG4gICAgbmV3bGkuYXBwZW5kKHRyYXNoKTtcbiAgICBzYXZlTGlzdHMoKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKG5hbWUpIHtcblxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKG5hbWUpKSB7XG4gICAgICAvLyBHZXQgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlXG4gICAgY29uc3QganNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGpzb24pOyAgXG4gIFxuICAgIGNvbnN0IGN1cnJlbnRkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBcbiAgICAvLyBJdGVyYXRlIGVhY2ggdGFzayAgXG4gICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gbnVsbCkge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gIFxuICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgICBjcmVhdGVUYXNrKHRhc2sudGl0bGUsIHRhc2suZGVzYywgdGFzay5zZWxlY3QsIHRhc2suZGF0ZSk7XG4gICAgfSk7XG4gIH1cbiAgICBlbHNlIGlmICh0YXNrcy5sZW5ndGggPiBjdXJyZW50ZGl2cy5sZW5ndGgpIHtcbiAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gIFxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICAgICAgY3JlYXRlVGFzayh0YXNrLnRpdGxlLCB0YXNrLmRlc2MsIHRhc2suc2VsZWN0LCB0YXNrLmRhdGUpO1xuICAgICAgfSlcbiAgICB9O1xuICB9fVxuXG4gIGZ1bmN0aW9uIHNhdmVMaXN0cyAoKSB7XG4gICAgY29uc3QgbGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdGl0ZW1zJyk7XG4gIFxuICAgIGNvbnN0IGxpc3REYXRhID0gW107XG4gIFxuICAgIGxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGxpc3QudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBsaXN0aWQgPSBsaXN0LmlkO1xuICAgICAgbGlzdERhdGEucHVzaCAoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgbGlzdGlkXG4gICAgICB9KVxuICAgIH0pO1xuICBcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkobGlzdERhdGEpO1xuICBcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsaXN0cycsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9IiwiaW1wb3J0IHB1dFRyYXNoIGZyb20gXCIuL3RyYXNoLmpzXCJcbmltcG9ydCBzYXZlVGFza3MgZnJvbSBcIi4vc2F2ZXRhc2tzLmpzXCI7XG5pbXBvcnQgbmV3VGFza0YgZnJvbSBcIi4vbmV3dGFzay5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUxLCBkZXNjcjEsIHNlbGVjdDEsIGRhdGUxKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIFxuLy8gQ3JlYXRlIGRpdiBcbmNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4vLyBUaXRsZSBcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xudGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTsgXG50aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlMTtcbnRpdGxlLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgJ3RydWUnKTtcbmxldCBkZWYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoKSA9PiB7XG4gICAgIHNhdmVUYXNrcyhkZWYyLmlkKTtcbiAgIH0pO1xuXG4vLyBEZXNjcmlwdGlvblxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcjE7XG5kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XG5kZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKCkgPT4ge1xuICAgICBzYXZlVGFza3MoZGVmMi5pZCk7XG4gICB9KTtcblxuLy8gUHJpb3JpdHkgIFxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG5cbi8vIFNlbGVjdCBhbmQgb3B0aW9uc1xuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xubGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgJztcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpOyBcbnNlbGVjdC5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xuXG5bMSwgMiwgMywgNCwgNV0uZm9yRWFjaChudW0gPT4ge1xuICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICBvcHRpb24udmFsdWUgPSBudW07XG4gICBvcHRpb24udGV4dENvbnRlbnQgPSBudW07XG4gICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn0pO1xuXG5zZWxlY3QudmFsdWUgPSBzZWxlY3QxO1xuIFxuLy8gUmVzdCBvZiBlbGVtZW50c1xuY29uc3QgZHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVkYXRlJyk7XG5kdWVkYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICc7XG5jb25zdCB0cmFzaGNhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xudHJhc2hjYW4uc3JjID0gJy4vcmVjeWNsZS1iaW4gKDEpLnBuZyc7XG50cmFzaGNhbi5jbGFzc0xpc3QuYWRkKCd0cmFzaGNhbicpO1xuY29uc3QgbnVtb2Z0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG50cmFzaGNhbi5pZCA9IG51bW9mdGFza3MubGVuZ3RoICsgMTtcbnB1dFRyYXNoKHRyYXNoY2FuKTtcblxuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5pbnB1dC50eXBlID0gJ2RhdGUnO1xuaW5wdXQudmFsdWUgPSBkYXRlMTtcblxuLy8gQXBwZW5kIGVsZW1lbnRzXG5kdWVkYXRlLmFwcGVuZENoaWxkKGlucHV0KTtcbmR1ZWRhdGUuYXBwZW5kQ2hpbGQodHJhc2hjYW4pO1xuXG5cbi8vIEFwcGVuZCBlbGVtZW50cyAgXG50YXNrLmFwcGVuZENoaWxkKHRpdGxlKTtcbnRhc2suYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG5wcmlvcml0eS5hcHBlbmRDaGlsZChsYWJlbCk7XG5wcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3QpO1xudGFzay5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG50YXNrLmFwcGVuZENoaWxkKGR1ZWRhdGUpO1xuXG5uZXdUYXNrRigpO1xubGV0IG5ld3Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3dGFzaycpO1xuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrLCBuZXd0YXNrKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRyYXNoZXIgKHRyYXNoKSB7XG4gICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIC8vIE9yIGNhbiBkaXJlY3RseSBhY2Nlc3MgdHJpZ2dlciBlbGVtZW50IFxuICAgICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0OyAgXG4gICAgICBcbiAgICAgICAgLy8gR2V0IHBhcmVudCBcbiAgICAgICAgYnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbi5pZCk7XG4gICAgICAgIGxpLnJlbW92ZSgpO1xuICAgICAgICBjb25zdCBqc29uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMnKTtcbiAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShqc29uKTsgIFxuICAgICAgXG4gICAgICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKGRpdiA9PiBidXR0b24uaWQgIT09IGRpdi5saXN0aWQpXG4gICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTsgIFxuICAgICAgXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgZGF0YSk7XG4gICAgICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGV0YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2sgKCkge1xuXG5jb25zdCBuZXd0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbm5ld3Rhc2suaWQgPSAnbmV3dGFzayc7XG5uZXd0YXNrLnRleHRDb250ZW50ID0gJysgTmV3IFRhc2snO1xubmV3dGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3JlYXRlVGFzaygnU2xheSBhIERyYWdvbicsICdCZWNvbWUgdGhlIHNhdmlvdXIgb2YgdGhlIGxhbmQhJywgMSwgJzIwMjUtMDYtMDYnKTtcbn0pO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xubGV0IG5ld3Rhc2tjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXd0YXNrJyk7XG5pZiAobmV3dGFza2NvdW50KSB7fVxuZWxzZSB7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXd0YXNrKTtcbn19OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmVUYXNrcyhuYW1lKSB7XG4gICAgLy8gR2V0IHRhc2sgZWxlbWVudHNcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7IFxuICAgIC8vIEFycmF5IHRvIHN0b3JlIGRhdGFcbiAgICBjb25zdCB0YXNrRGF0YSA9IFtdO1xuICBcbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCAgXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgXG4gICAgICAvLyBHZXQgZGF0YSBwZXIgdGFzayBhcyBiZWZvcmVcbiAgICAgIGNvbnN0IHRpdGxlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IGRlc2MgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnRleHRDb250ZW50O1xuICAgICAgY29uc3Qgc2VsZWN0ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGRhdGUgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCInKS52YWx1ZTtcbiAgICAgIGNvbnN0IHRyYXNoID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudHJhc2hjYW4nKS5pZDtcbiAgICAgIFxuICAgICAgLy8gQWRkIHRvIGFycmF5IFxuICAgICAgdGFza0RhdGEucHVzaCh7XG4gICAgICAgIHRpdGxlLCBcbiAgICAgICAgZGVzYyxcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICBkYXRlLFxuICAgICAgICB0cmFzaCxcbiAgICAgIH0pO1xuICBcbiAgICB9KTtcbiAgXG4gICAgLy8gU3RyaW5naWZ5IGFycmF5XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tEYXRhKTsgIFxuICBcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhc2hlciAodHJhc2gpIHtcbiAgICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgLy8gT3IgY2FuIGRpcmVjdGx5IGFjY2VzcyB0cmlnZ2VyIGVsZW1lbnQgXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7ICBcbiAgICAgIFxuICAgICAgICAvLyBHZXQgcGFyZW50IFxuICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBidXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBwYXJlbnREaXYucmVtb3ZlKCk7XG4gICAgICAgIGxldCBkZWYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICAgICAgY29uc3QganNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oZGVmMi5pZCk7XG4gICAgICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UoanNvbik7ICBcbiAgICAgIFxuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcihkaXYgPT4gYnV0dG9uLmlkICE9PSBkaXYudHJhc2gpXG4gICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTsgIFxuICAgICAgXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oZGVmMi5pZCwgZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICAgIH0pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRldGFzay5qc1wiO1xuaW1wb3J0IG5ld1Rhc2tGIGZyb20gXCIuL25ld3Rhc2suanNcIjtcbmltcG9ydCBjcmVhdGVMaXN0cyBmcm9tIFwiLi9jcmVhdGVsaXN0cy5qc1wiO1xuXG5jb25zdCBuZXdwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Byb2onKTtcbi8vIEdldCBsaSBlbGVtZW50cyBcbmNvbnN0IGxpRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXG5cblxuXG5uZXdwcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjcmVhdGVMaXN0cygnUHJvamVjdCBBbHBoYScpO1xufSk7XG5cblxubGV0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xubG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGxvYWRMaXN0cygpIHtcblxuICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMnKSkge1xuICAgIC8vIEdldCBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcbiAgY29uc3QganNvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xpc3RzJyk7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShqc29uKTsgIFxuXG4gIGNvbnN0IGN1cnJlbnRkaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgXG4gIC8vIEl0ZXJhdGUgZWFjaCB0YXNrICBcbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gbnVsbCkge1xufVxuICBlbHNlIGlmICh0YXNrcy5sZW5ndGggPiBjdXJyZW50ZGl2cy5sZW5ndGgpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuXG4gICAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICAgIGNyZWF0ZUxpc3RzKHRhc2sudGl0bGUpO1xuICAgIH0pXG4gIH07XG59fVxuXG5sb2FkTGlzdHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=