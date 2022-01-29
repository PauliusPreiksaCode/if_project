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

var Rectangle = /*#__PURE__*/_createClass(function Rectangle(x, y, width, height) {
  var _this = this;

  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var lineWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

  _classCallCheck(this, Rectangle);

  this.draw = function () {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = _this.color;
    ctx.lineWidth = _this.lineWidth;
    ctx.rect(_this.x, _this.y, _this.width, _this.height);
    ctx.stroke();
    ctx.restore();
  };

  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
  this.lineWidth = lineWidth;
  this.color = color;
});

var Circle = /*#__PURE__*/_createClass(function Circle(x, y, radius) {
  var _this2 = this;

  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  var lineWidth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

  _classCallCheck(this, Circle);

  this.draw = function () {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = _this2.color;
    ctx.lineWidth = _this2.lineWidth;
    ctx.arc(_this2.x, _this2.y, _this2.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.restore();
  };

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.lineWidth = lineWidth;
  this.color = color;
});

var shapes = new Array();

function gameLoop() {
  requestAnimationFrame(gameLoop);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 1280, 720);
  var shape;

  for (var i = 0; i < shapes.length; i++) {
    shape = shapes[i];
    shape.draw();
  }
}

window.onload = function () {
  canvas = document.getElementById("game"); // @ts-ignore

  ctx = canvas.getContext("2d");
  shapes.push(new Rectangle(100, 100, 100, 100, "black", 5));
  gameLoop();
};
})();

/******/ })()
;