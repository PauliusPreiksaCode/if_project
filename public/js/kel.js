"use strict";
exports.__esModule = true;
var canvas;
var ctx;
var draw_array = new Array();
var menuButtons = new Array();
var xb = new Array();
var player = new Array();
var tr = new Array();
var mapEl = new Array();
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
var romb = /** @class */ (function () {
    function romb(x, y, color) {
        var _this = this;
        if (color === void 0) { color = "black"; }
        this.width = canvas.height / 20;
        this.height = canvas.height / 20;
        this.drav = function () {
            ctx.save();
            ctx.rotate(45 * Math.PI / 180);
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.x, _this.y, _this.width, _this.height);
            ctx.resetTransform();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.color = color;
    }
    return romb;
}());
var line = /** @class */ (function () {
    function line(x, y, x2, y2, color, lineWidth) {
        var _this = this;
        if (color === void 0) { color = "green"; }
        if (lineWidth === void 0) { lineWidth = 5; }
        this.drav = function () {
            ctx.save();
            ctx.fillStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.beginPath();
            ctx.moveTo(_this.x, _this.y);
            ctx.lineTo(_this.x2, _this.y2);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    return line;
}());
var transition = /** @class */ (function () {
    function transition(x, y, width, height, color) {
        var _this = this;
        this.draw = function () {
            ctx.save();
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.x, _this.y, _this.width, _this.height);
            ctx.restore();
        };
        this.transition = function (x, y, x2, y2) {
            if ((x >= _this.x && x <= _this.x + _this.width || x2 >= _this.x && x2 <= _this.x + _this.width) && (y >= _this.y && y <= _this.y + _this.height || y2 >= _this.y && y2 <= _this.y + _this.height)) {
                _this.isT = true;
            }
            return _this.isT;
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.isT = false;
    }
    return transition;
}());
var Player = /** @class */ (function () {
    function Player(x, y, width, height, color) {
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.speed = canvas.height / 40;
        this.draw = function () {
            ctx.save();
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.x, _this.y, _this.width, _this.height);
            ctx.restore();
        };
        this.left = function () {
            _this.x -= _this.speed;
        };
        this.right = function () {
            _this.x += _this.speed;
        };
        this.up = function () {
            _this.y -= _this.speed;
        };
        this.down = function () {
            _this.y += _this.speed;
        };
        this.start = function () {
            _this.x = canvas.width / 2 * 0.9;
            _this.y = canvas.height * 0.8;
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    return Player;
}());
var Button = /** @class */ (function () {
    function Button(x, y, width, height, text, fontSize, color, textColor) {
        var _this = this;
        if (fontSize === void 0) { fontSize = 15; }
        this.pressed = false;
        this.draw = function () {
            ctx.save();
            ctx.fillStyle = _this.color;
            if (_this.pressed == true) {
                ctx.globalAlpha = 0.5;
                ctx.fillRect(_this.x - _this.midx - 2, _this.y - _this.midy + 2, _this.width, _this.height);
            }
            else {
                ctx.fillRect(_this.x - _this.midx, _this.y - _this.midy, _this.width, _this.height);
            }
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = _this.textColor;
            ctx.font = _this.fontSize + "px Verdana";
            if (_this.pressed == true) {
                ctx.globalAlpha = 0.5;
                ctx.fillText(_this.text, _this.x - 2, _this.y + 2);
            }
            else {
                ctx.fillText(_this.text, _this.x, _this.y);
            }
            ctx.restore();
        };
        this.clicked = function (event) {
            var x = event.x - canvas.offsetLeft;
            var y = event.y - canvas.offsetTop + window.pageYOffset;
            if (x > _this.x - _this.midx && y > _this.y - _this.midy && x < _this.x + _this.midx && y < _this.y + _this.midy) {
                _this.pressed = true;
            }
        };
        this.not = function (event) {
            _this.pressed = false;
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.midx = width / 2;
        this.midy = height / 2;
        this.text = text;
        this.fontSize = fontSize;
        this.textColor = textColor;
        canvas.addEventListener("mousedown", this.clicked, false);
        canvas.addEventListener("mouseup", this.not, false);
    }
    return Button;
}());
function gameLoop() {
    var s = requestAnimationFrame(gameLoop);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < draw_array.length; i++) {
        var d = draw_array[i];
        d.draw();
    }
    if (draw_array[0].pressed == true) {
        cancelAnimationFrame(s);
        player[0].start();
        for (var i = 2; i < mapEl.length; i++) {
            mapEl[i].color = "green";
        }
        screen0();
    }
    /*if (draw_array[1].pressed == true) {
        cancelAnimationFrame(s);
        screen0();
    }*/
}
function playerSpawn() {
    if (tr[0].isT == true) {
        tr[0].isT = false;
        player[0].y = canvas.height * 0.8;
        var p = player[0];
        p.draw();
    }
    if (tr[1].isT == true) {
        player[0].x = canvas.width * 0.88;
        var p = player[0];
        p.draw();
        tr[1].isT = false;
    }
    if (tr[2].isT == true) {
        player[0].y = 6;
        var p = player[0];
        p.draw();
        tr[2].isT = false;
    }
    if (tr[3].isT == true) {
        player[0].x = 6;
        var p = player[0];
        p.draw();
        tr[3].isT = false;
    }
    else {
        var p = player[0];
        p.draw();
    }
    return;
}
function playing() {
    playerSpawn();
    document.addEventListener('keydown', keyboardInput);
    for (var i = 0; i < menuButtons.length; i++) {
        var d = menuButtons[i];
        d.draw();
    }
    if (menuButtons[2].pressed == true) {
        map();
    }
    if (menuButtons[3].pressed == true) {
        gameLoop();
        document.removeEventListener('keydown', keyboardInput);
    }
}
function screen0() {
    var s0 = requestAnimationFrame(screen0);
    var pl = requestAnimationFrame(playing);
    mapEl[2].color = "yellow";
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (menuButtons[3].pressed == true) {
        cancelAnimationFrame(s0);
        cancelAnimationFrame(pl);
    }
    if (tr[0].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
        cancelAnimationFrame(s0);
        cancelAnimationFrame(pl);
        mapEl[2].color = "grey";
        screen1();
    }
    if (tr[3].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
        cancelAnimationFrame(s0);
        cancelAnimationFrame(pl);
        mapEl[2].color = "grey";
        screen2();
    }
}
function screen1() {
    var s1 = requestAnimationFrame(screen1);
    var pl = requestAnimationFrame(playing);
    mapEl[3].color = "yellow";
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (menuButtons[3].pressed == true) {
        cancelAnimationFrame(s1);
        cancelAnimationFrame(pl);
    }
    if (tr[2].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
        cancelAnimationFrame(s1);
        cancelAnimationFrame(pl);
        mapEl[3].color = "grey";
        screen0();
    }
}
function screen2() {
    var s2 = requestAnimationFrame(screen2);
    var pl = requestAnimationFrame(playing);
    mapEl[4].color = "yellow";
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (menuButtons[3].pressed == true) {
        cancelAnimationFrame(s2);
        cancelAnimationFrame(pl);
    }
    if (tr[0].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
        cancelAnimationFrame(s2);
        cancelAnimationFrame(pl);
        win();
    }
    if (tr[1].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
        cancelAnimationFrame(s2);
        cancelAnimationFrame(pl);
        mapEl[4].color = "grey";
        screen0();
    }
}
function map() {
    var m = requestAnimationFrame(map);
    ctx.fillStyle = "#33FFE2";
    ctx.fillRect(canvas.width / 70 * 0.5, canvas.height / 70, canvas.width / 4 * 3.5, canvas.height * 0.9);
    xb[0].draw();
    for (var i = 0; i < mapEl.length; i++) {
        var d = mapEl[i];
        d.drav();
    }
    if (menuButtons[3].pressed == true) {
        cancelAnimationFrame(m);
    }
    if (xb[0].pressed == true) {
        cancelAnimationFrame(m);
    }
}
function keyboardInput(event) {
    if (event.keyCode == 37 || event.keyCode == 65) {
        player[0].left();
    }
    if (event.keyCode == 39 || event.keyCode == 68) {
        player[0].right();
    }
    if (event.keyCode == 38 || event.keyCode == 87) {
        player[0].up();
    }
    if (event.keyCode == 83 || event.keyCode == 40) {
        player[0].down();
    }
}
function win() {
    tr[0].isT = false;
    requestAnimationFrame(win);
    ctx.save();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "yellow";
    ctx.font = "70px Verdana";
    ctx.fillText("Laimėjote!!!", canvas.width / 2, canvas.height / 2);
    ctx.restore();
    xb[0].pressed = true;
}
window.onload = function () {
    canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.8;
    canvas.height = canvas.width * 9 / 16;
    // @ts-ignore
    ctx = canvas.getContext("2d");
    draw_array.push(new Button(canvas.width / 2, canvas.height / 4, canvas.width / 5 * 3, canvas.height / 7 * 2, "Naujas žaidimas", 45, "red", "white"));
    draw_array.push(new Button(canvas.width / 2, canvas.height / 4 * 3, canvas.width / 5 * 3, canvas.height / 7 * 2, "Tęsti", 50, "blue", "white"));
    menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 14, canvas.width / 12, canvas.height / 14, "Užrašai", canvas.height / 30, "blue", "black"));
    menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 6.2, canvas.width / 12, canvas.height / 14, "Daiktai", canvas.height / 30, "blue", "black"));
    menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 4, canvas.width / 12, canvas.height / 14, "Žemėlapis", canvas.height / 40, "blue", "black"));
    menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 2.98, canvas.width / 12, canvas.height / 14, "Išeiti", canvas.height / 30, "blue", "black"));
    xb.push(new Button(canvas.width / 4 * 3.45, canvas.height / 20, canvas.height / 14, canvas.height / 14, "x", canvas.height / 10, "red", "white"));
    player.push(new Player(canvas.width / 2 * 0.9, canvas.height * 0.8, canvas.width / 9, canvas.width / 9, "black"));
    tr.push(new transition(0, -20, canvas.width, 20, "black"));
    tr.push(new transition(-20, 0, 20, canvas.height, "black"));
    tr.push(new transition(0, canvas.height, canvas.width, 20, "black"));
    tr.push(new transition(canvas.width, 0, 20, canvas.height, "black"));
    mapEl.push(new line(canvas.width / 2 * 0.68, canvas.height * 0.85, canvas.width / 2 * 0.685, canvas.height * 0.85 - canvas.height / 7));
    mapEl.push(new line(canvas.width / 2 * 0.685, canvas.height * 0.845, canvas.width / 2 * 0.685 + canvas.height / 7, canvas.height * 0.845));
    mapEl.push(new romb(canvas.height, canvas.height / 7));
    mapEl.push(new romb(canvas.height * 0.9, canvas.height / 25));
    mapEl.push(new romb(canvas.height * 1.105, canvas.height / 25));
    gameLoop();
};
