// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"D4RJ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var numbers = {
  "Johnny": 23,
  "James": 25,
  "Years": 2
};
var _default = numbers;
exports.default = _default;
},{}],"xdyW":[function(require,module,exports) {
// export default math.js
},{}],"fx60":[function(require,module,exports) {

},{"./../img/night-time-landscape.jpg":[["night-time-landscape.12a76648.jpg","oEuU"],"oEuU"]}],"QdeU":[function(require,module,exports) {
"use strict";

var _numbers = _interopRequireDefault(require("./numbers.js"));

var _math = _interopRequireDefault(require("./math.js"));

require("../scss/main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('project-column');
  if (c == 'all') c = ''; // Add the "show class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected

  for (i = 0; i < x.length; i++) {
    projectOCRemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) ozzyAddClass(x[i], 'show');
  }
} // show filtered elements


function ozzyAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
} // hide elements that are not selected


function projectOCRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');

  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }

  element.className = arr1.join(' ');
}

filterSelection('all'); // Execute the function and show all columns
// Add active class to the current button (highlight it)

var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('btn');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

document.getElementById('filter-all').addEventListener('click', function () {
  filterSelection('all');
}, false);
document.getElementById('filter-newsletter').addEventListener('click', function () {
  filterSelection('newsletter');
}, false);
document.getElementById('filter-promotional').addEventListener('click', function () {
  filterSelection('promotional');
}, false);
document.getElementById('filter-receipts').addEventListener('click', function () {
  filterSelection('receipts');
}, false);
document.getElementById('filter-landingpage').addEventListener('click', function () {
  filterSelection('landingpage');
}, false);
},{"./numbers.js":"D4RJ","./math.js":"xdyW","../scss/main.scss":"fx60"}]},{},["QdeU"], null)
//# sourceMappingURL=app.4774e25d.js.map