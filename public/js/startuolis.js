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
function Rectangle(name, x, y, width, height) {
  var _this = this;

  var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "black";
  var lineWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
  var text = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
  var textColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : "white";
  var fontSize = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 1;
  var button = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  _classCallCheck(this, Rectangle);

  this.button = false;
  this.down = false; //if rectangle is pressed down

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

    if (x > _this.x - _this.width / 2 && x < _this.x + _this.width / 2 && y > _this.y - _this.height / 2 && y < _this.y + _this.height / 2) {
      _this.down = true;
    }
  };

  this.name = name;
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

  if (this.button) {
    canvas.addEventListener("mousedown", this.mouseDown, false);
  }
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
      startGame = true;
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

function mouseOver(event) {
  var x = event.x - canvas.offsetLeft + window.pageXOffset;
  var y = event.y - canvas.offsetTop + window.pageYOffset;

  for (var i = 0; i < MainShapes.length; i++) {
    var shape = MainShapes[i];

    if (x > shape.x - shape.width / 2 && x < shape.x + shape.width / 2 && y > shape.y - shape.height / 2 && y < shape.y + shape.height / 2) {
      console.log(shape.name);
      mouseOverChoice = true;
      shapeInfo = shape.name;
    }
  }
}

function beenClicked(shapeName) {
  for (var i = 0; i < MainShapes.length; i++) {
    if (MainShapes[i].name == shapeName && MainShapes[i].down) return true;
  }

  return false;
}

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();

function drawImg(src) {
  var img = new Image();
  img.src = src;
  ctx.drawImage(img, (640 - img.width / 2) * multX, (360 - img.height / 2) * multY, img.width * multX, img.height * multY);
}

function drawImg1(img) {
  ctx.drawImage(img, (640 - img.width / 2) * multX, (360 - img.height / 2) * multY, img.width * multX, img.height * multY);
}

var StartingShapes = new Array();
var MainShapes = new Array();
var GameEndShapes = new Array();
var startGame = false;
var mouseOverChoice = false;
var shapeInfo = "";
var multX;
var multY;

function gameLoop() {
  setInterval(function () {
    requestAnimationFrame(gameLoop);
  }, 2000); //requestAnimationFrame(gameLoop);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var shape;

  if (!startGame) {
    for (var i = 0; i < StartingShapes.length; i++) {
      shape = StartingShapes[i];
      shape.draw();
    }
  }

  if (startGame) {
    /*
    for(var i:number = 1; i < 5; i++)
    {
          var img = new Image();
        img.src = "/pictures-videos/testGifFrames/frame_"+ i.toString(10) + "_delay-0.1s.gif";
        console.log(img.src);
        img.onload = function (){
            ctx.drawImage(img, (640 - img.width/2) * multX, (360 - img.height/2) * multY);
        }
        var id: string = "testGif2";// + i.toString(10);
        img = <HTMLImageElement>document.getElementById("testGif1");
        img.onload = function () {
            ctx.drawImage(img, (640 - img.width/2) * multX, (360 - img.height/2) * multY);
            console.log(img.src);
        }
    }*/

    /*
    function allImages() {
        for (let index = 0; index < 4; index++) {
            let imageObj = new Image();
            imageObj.name = "display-"+index;
              imageObj.addEventListener('load', function() {
                console.log("loaded : " + imageObj.name)
                ctx.drawImage(imageObj, (640 - imageObj.width / 2) * multX, (360 - imageObj.height / 2) * multY);
            }, false);
              imageObj.src = "/pictures-videos/testGifFrames/frame_" + index.toString() + "_delay-0.1s.gif";
        }
    }
    //allImages();
      function  copyImage(){
        let imageObj = new Image();
        imageObj.src = "/pictures-videos/testGifFrames/frame_" + "1" + "_delay-0.1s.gif";
        imageObj.addEventListener('load', function() {
            ctx.drawImage(imageObj, (640 - imageObj.width / 2) * multX, (360 - imageObj.height / 2) * multY);
        }, false);
    }
      setTimeout(() => {
        copyImage();
    }, 300);*/
    //var img = new Image();
    //img.src = "/pictures-videos/testGifFrames/frame_0_delay-0.1s.gif";

    /*setTimeout(() => {
        //drawImg("/pictures-videos/testGifFrames/frame_0_delay-0.1s.gif");
        drawImg1(img2);
    }, 0);*/
    setTimeout(function () {
      //drawImg("/pictures-videos/testGifFrames/frame_1_delay-0.1s.gif");
      drawImg1(img1);
    }, 0);
    /*
                setTimeout(() => {
                    drawImg1(img2);
                    //drawImg("/pictures-videos/testGifFrames/frame_2_delay-0.1s.gif");
                }, 1000);*/

    setTimeout(function () {
      drawImg1(img3); //drawImg("/pictures-videos/testGifFrames/frame_3_delay-0.1s.gif");
    }, 1000);
    /*
            var img = new Image();
              //public draw = (): void =>{
            function drawGif () {
                for(var k:number = 0; k < 4; k++) {
                    img.src = "/pictures-videos/testGifFrames/frame_" + k.toString(10) + "_delay-0.1s.gif";
                    ctx.drawImage(img, (640 - img.width / 2) * multX, (360 - img.height / 2) * multY);
                }
            }*/
    //window.requestAnimationFrame(drawGif);
    //setTimeout(drawGif, 1000);

    canvas.addEventListener("mousemove", mouseOver, false);
    var count = 0;

    for (var i = 0; i < MainShapes.length; i++) {
      shape = MainShapes[i];
      if (shape.down) count++;
      shape.draw();

      if (mouseOverChoice && !beenClicked(shapeInfo)) {
        var rectangle = new Rectangle("", 640 * multX, 675 * multY, 1100 * multX, 60 * multY, "black", 2, shapeInfo, "black", 32);
        rectangle.draw();
      }

      if (count == 6) {
        GameEndShapes[0].draw();
        GameEndShapes[1].draw();
      }
    }

    count = 0;
  }
}

window.onload = function () {
  canvas = document.getElementById("game");
  canvas.width = window.innerWidth * 0.8; // 80% of the window

  canvas.height = canvas.width * 9 / 16; // 16:9 aspect ratio

  multX = canvas.width / 1280;
  multY = canvas.height / 720; // @ts-ignore

  ctx = canvas.getContext("2d");
  StartingShapes.push(new Circle(640 * multX, 400 * multY, 200 * multX, "blue", 6, true));
  StartingShapes.push(new Triangle(640 * multX, 400 * multY, 100 * multX, "white", 3));
  StartingShapes.push(new Rectangle("", 640 * multX, 100 * multY, 0, 0, "white", 1, "Startuolis", "black", 100));
  MainShapes.push(new Rectangle("1", 140 * multX, 570 * multY, 100 * multX, 100 * multY, "black", 3, "", "white", 1, true));
  MainShapes.push(new Rectangle("2", 340 * multX, 570 * multY, 100 * multX, 100 * multY, "black", 3, "", "white", 1, true));
  MainShapes.push(new Rectangle("3", 540 * multX, 570 * multY, 100 * multX, 100 * multY, "black", 3, "", "white", 1, true));
  MainShapes.push(new Rectangle("4", 740 * multX, 570 * multY, 100 * multX, 100 * multY, "black", 3, "", "white", 1, true));
  MainShapes.push(new Rectangle("5", 940 * multX, 570 * multY, 100 * multX, 100 * multY, "black", 3, "", "white", 1, true));
  MainShapes.push(new Rectangle("6", 1140 * multX, 570 * multY, 100 * multX, 100 * multY, "black", 3, "", "white", 1, true));
  GameEndShapes.push(new Rectangle("", 640 * multX, 50 * multY, 0, 0, "white", 0, "Žaidimo pabaiga", "black", 64));
  GameEndShapes.push(new Rectangle("", 640 * multX, 100 * multY, 0, 0, "white", 0, "Jūsų surinkti taškai: XXXX", "black", 32));
  img1.src = "/pictures-videos/testGifFrames/frame_1_delay-0.1s.jpg";
  img2.src = "/pictures-videos/testGifFrames/frame_2_delay-0.1s.jpg";
  img3.src = "/pictures-videos/testGifFrames/frame_3_delay-0.1s.jpg";
  gameLoop();
};
})();

/******/ })()
;