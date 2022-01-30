/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!************************************!*\
  !*** ./resources/js/startuolis.ts ***!
  \************************************/


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var canvas;
var ctx;

var Corner = /*#__PURE__*/_createClass(function Corner(x, y) {
  _classCallCheck(this, Corner);

  this.x = x;
  this.y = y;
});

var Rectangle = /*#__PURE__*/_createClass( //
function Rectangle(x, y, width, height) {
  var _this = this;

  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var text = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
  var textColor = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "white";
  var fontSize = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;
  var button = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : false;

  _classCallCheck(this, Rectangle);

  this.button = false; // for button

  this.down = false;

  this.drawText = function () {
    ctx.save();
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = _this.textColor;
    ctx.font = _this.fontSize + "px Verdana";
    ctx.fillText(_this.text, _this.x, _this.y);
    ctx.restore();
  };

  this.draw = function () {
    _this.drawText();

    ctx.save();
    ctx.strokeStyle = _this.color;
    ctx.lineWidth = _this.lineWidth;

    if (_this.button) {
      if (_this.down) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(_this.x - _this.width / 2, _this.y - _this.height / 2, _this.width, _this.height);

        _this.drawText();
      }
    }

    ctx.rect(_this.x - _this.width / 2, _this.y - _this.height / 2, _this.width, _this.height);
    ctx.stroke();
    ctx.restore();
  };

  this.mouseDown = function (event) {
    var x = event.x - canvas.offsetLeft + window.pageXOffset;
    var y = event.y - canvas.offsetTop + window.pageYOffset;
    if (x > _this.x - _this.width / 2 && x < _this.x + _this.width / 2 && y > _this.y - _this.height / 2 && y < _this.y + _this.height / 2) _this.down = true;
  };

  this.mouseUp = function (event) {
    _this.down = false;
  };

  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.lineWidth = lineWidth;
  this.color = color;
  this.text = text;
  this.textColor = textColor;
  this.fontSize = fontSize;
  this.button = button; // for button

  if (this.button) canvas.addEventListener("mousedown", this.mouseDown, false);
});

var Circle = /*#__PURE__*/_createClass(function Circle(x, y, radius) {
  var _this2 = this;

  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var button = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  _classCallCheck(this, Circle);

  this.down = false;

  this.draw = function () {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = _this2.color;
    ctx.lineWidth = _this2.lineWidth;
    ctx.fillStyle = _this2.color;
    ctx.arc(_this2.x, _this2.y, _this2.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };

  this.mouseDown = function (event) {
    var x = event.x - canvas.offsetLeft + window.pageXOffset;
    var y = event.y - canvas.offsetTop + window.pageYOffset;
    x -= _this2.x;
    y -= _this2.y;

    if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(_this2.radius, 2)) {
      _this2.down = true;
      clear = true;
    }
  };

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.lineWidth = lineWidth;
  this.color = color;
  this.button = button;
  if (this.button) canvas.addEventListener("mousedown", this.mouseDown, false);
});

var Triangle = /*#__PURE__*/_createClass(function Triangle(x, y, size) {
  var _this3 = this;

  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var button = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  _classCallCheck(this, Triangle);

  this.corners = new Array();

  this.draw = function () {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = _this3.color;
    ctx.fillStyle = _this3.color;
    ctx.lineWidth = _this3.lineWidth;
    ctx.moveTo(_this3.x + _this3.corners[_this3.corners.length - 1].x, _this3.y + _this3.corners[_this3.corners.length - 1].y);

    for (var i = 0; i < _this3.corners.length; i++) {
      ctx.lineTo(_this3.x + _this3.corners[i].x, _this3.y + _this3.corners[i].y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };

  this.x = x;
  this.y = y;
  this.size = size;
  this.lineWidth = lineWidth;
  this.color = color;
  this.button = button;
  this.corners.push(new Corner(-1 * size, -1 * size));
  this.corners.push(new Corner(-1 * size, size));
  this.corners.push(new Corner(size * 1.3, 0));
});

var shapes = new Array();
var clear = false;

function gameLoop() {
  requestAnimationFrame(gameLoop);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 1280, 720);
  var shape;

  if (!clear) {
    for (var i = 0; i < shapes.length; i++) {
      shape = shapes[i];
      shape.draw();
    }
  }
}

window.onload = function () {
  canvas = document.getElementById("game"); // @ts-ignore

  ctx = canvas.getContext("2d");
  shapes.push(new Circle(640, 400, 200, "blue", 6, true));
  shapes.push(new Triangle(640, 400, 100, "white", 3));
  shapes.push(new Rectangle(640, 100, 500, 140, "white", 1, "Startuolis", "black", 100));
  gameLoop();
};
})();

/******/ })()
;