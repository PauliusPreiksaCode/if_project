<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IF-project</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="/css/Main.css">
    <link rel="stylesheet" href="/css/gamePage.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <scripp src="/js/kel.js"></scripp>

</head>
<body>
<div class="menu">
    <div class="w3-show-inline-block" style="padding-top: 30px">
        <a href="http://127.0.0.1:8000/" class = "btn btn-info" role = "button">Pagrindinis</a>
    </div>
    <div class="w3-show-inline-block" style="padding-top: 30px">
        <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Startuolis</a>
    </div>
    <div class="w3-show-inline-block" style="padding-top: 30px">
        <a href="http://127.0.0.1:8000/kel" class = "btn btn-info" role = "button">Keliautojas</a>
    </div>
    <div class="w3-show-inline-block" style="padding-top: 30px">
        <a href="http://127.0.0.1:8000/game" class = "btn btn-info" role = "button">Zaidimas 3</a>
    </div>
    <div class="w3-show-inline-block" style="padding-top: 30px">
        <a href="http://127.0.0.1:8000/apie" class = "btn btn-info" role = "button">Apie</a>
    </div>
    <div class="w3-show-inline-block" style="padding-top: 30px">
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" style="background-color: #5bc0de;" type="button" data-toggle="dropdown" >Komanda
                <span class="caret"></span></button>
            <ul class="dropdown-menu">
                <li><a href="http://127.0.0.1:8000/p">Paulius Preikša</a></li>
                <li><a href="http://127.0.0.1:8000/a">Arenijus Juraška</a></li>
                <li><a href="http://127.0.0.1:8000/n">Neda Ramanauskaitė</a></li>
            </ul>
        </div>
    </div>
    <div class="w3-show-inline-block">
        <img src="data:image/png;base64,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" width="100" height="100" class="img-circle" alt="User">
    </div>
</div>
<div class="background-video">
    <video autoplay muted loop>
        <source src="/pictures-videos/BinaryCode.mp4" type="video/mp4">
    </video>
    <div class="overlay">
        <h1>Keliautojas</h1>
    </div>
</div>
<div class="page">
    <div class="gameInfo">
        <p>RPG žaidimas, kur keliauji po dirbtinį pasaulį ieškodamas žinių.</p>
    </div>
    <canvas id="canvas" width="1280px" height="720px"></canvas>
    <script>
        var canvas;
        var ctx;
        var draw_array = new Array();
        var menuButtons = new Array();
        var xb = new Array();
        var player = new Array();
        var tr = new Array();
        var mapEl = new Array();
        var inv = new Array();
        var img = new Image();
        window.addEventListener("keydown", function (e) {
            if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);
        var info = /** @class */ (function () {
            function info(x, y, width, height, text, fontSize, color, textColor) {
                var _this = this;
                if (fontSize === void 0) { fontSize = 15; }
                this.pressed = false;
                this.gotten = false;
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
                    if (_this.gotten) {
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
                    }
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
                this.reset = function () {
                    _this.gotten = false;
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
            return info;
        }());
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
                    if (((x >= _this.x && x <= _this.x + _this.width) || (x2 >= _this.x && x2 <= _this.x + _this.width) || (x <= _this.x && x2 >= _this.x + _this.width)) && ((y >= _this.y && y <= _this.y + _this.height) || (y2 >= _this.y && y2 <= _this.y + _this.height) || (y <= _this.y && y2 >= _this.y + _this.height))) {
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
                for (var i = 0; i < inv.length; i++) {
                    inv[i].reset();
                    tr[4 + i].color = "black";
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
            if (menuButtons[0].pressed == true) {
                notes();
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
            tr[4].draw();
            if (tr[4].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
                inv[1].gotten = true;
                tr[4].color = "grey";
                tr[4].isT = false;
            }
            tr[6].draw();
            if (tr[6].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
                inv[2].gotten = true;
                tr[6].color = "grey";
                tr[6].isT = false;
            }
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
            tr[5].draw();
            if (tr[5].transition(player[0].x, player[0].y, player[0].x + player[0].width, player[0].y + player[0].height)) {
                inv[0].gotten = true;
                tr[5].color = "grey";
                tr[5].isT = false;
            }
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
            if (menuButtons[0].pressed == true) {
                cancelAnimationFrame(m);
            }
            if (menuButtons[3].pressed == true) {
                cancelAnimationFrame(m);
            }
            if (xb[0].pressed == true) {
                cancelAnimationFrame(m);
            }
        }
        function notes() {
            var n = requestAnimationFrame(notes);
            ctx.fillStyle = "#33FFE2";
            ctx.fillRect(canvas.width / 70 * 0.5, canvas.height / 70, canvas.width / 4 * 3.5, canvas.height * 0.9);
            xb[0].draw();
            for (var i = 0; i < inv.length; i++) {
                var d = inv[i];
                d.draw();
            }
            if (menuButtons[2].pressed == true) {
                cancelAnimationFrame(n);
            }
            if (menuButtons[3].pressed == true) {
                cancelAnimationFrame(n);
            }
            if (xb[0].pressed == true) {
                cancelAnimationFrame(n);
            }
            if (inv[0].pressed && inv[0].gotten) {
                var pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Public_Domain_Mark_button.svg/1920px-Public_Domain_Mark_button.svg.png";
                displayImg(pic, canvas.width / 6 * 2.5, canvas.height / 2, canvas.width / 4 * 3.2, canvas.height * 0.8);
            }
        }
        function displayImg(pic, x, y, width, height) {
            img.src = pic;
            x = x - width / 2;
            y = y - height / 2;
            ctx.drawImage(img, x, y, width, height);
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
            draw_array.push(new Button(canvas.width / 2, canvas.height / 4 * 3, canvas.width / 5 * 3, canvas.height / 7 * 2, "Testi", 50, "blue", "white"));
            menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 14, canvas.width / 12, canvas.height / 14, "Užrašai", canvas.height / 30, "blue", "black"));
            menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 6.2, canvas.width / 12, canvas.height / 14, "Daiktai", canvas.height / 30, "blue", "black"));
            menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 4, canvas.width / 12, canvas.height / 14, "Žemėlapis", canvas.height / 40, "blue", "black"));
            menuButtons.push(new Button(canvas.width / 16 * 15, canvas.height / 2.98, canvas.width / 12, canvas.height / 14, "Išeiti", canvas.height / 30, "blue", "black"));
            xb.push(new Button(canvas.width / 4 * 3.45, canvas.height / 20, canvas.height / 14, canvas.height / 14, "x", canvas.height / 10, "red", "white"));
            xb.push(new Button(canvas.width / 4 * 3.45, canvas.height / 20, canvas.height / 14, canvas.height / 14, "x", 50, "red", "white"));
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
            tr.push(new transition(canvas.width / 2, canvas.height / 2, canvas.height / 7, canvas.height / 7, "black"));
            tr.push(new transition(canvas.width / 5, canvas.height / 5, canvas.height / 7, canvas.height / 7, "black"));
            tr.push(new transition(canvas.width / 3, canvas.height / 5, canvas.height / 7, canvas.height / 7, "black"));
            inv.push(new info(canvas.width / 6 * 2.5, canvas.height / 7.5, canvas.width / 4 * 3.2, canvas.height * 0.18, "thfhdrv  vrt drt y yr  rtbftfy fr td rtd brtdbrty b ytr ty", canvas.height / 28, "blue", "white"));
            inv.push(new info(canvas.width / 6 * 2.5, canvas.height / 7.5 + canvas.height * 0.2, canvas.width / 4 * 3.2, canvas.height * 0.18, "thfhdrv  vrt drt y yr  rtbftfy fr td rtd brtdbrty b ytr ty", canvas.height / 28, "blue", "white"));
            inv.push(new info(canvas.width / 6 * 2.5, canvas.height / 7.5 + canvas.height * 0.4, canvas.width / 4 * 3.2, canvas.height * 0.18, "thfhdrv  vrt drt y yr  rtbftfy fr td rtd brtdbrty b ytr ty", canvas.height / 28, "blue", "white"));
            gameLoop();
        };
        //# sourceMappingURL=app.js.map

    </script>
</div>
<div class="footer"></div>

</body>
</html>
