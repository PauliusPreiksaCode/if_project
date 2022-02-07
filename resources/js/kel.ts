import {List} from "postcss/lib/list";
import * as Console from "console";
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var draw_array: Array<buttonDraw> = new Array<buttonDraw>();
var menuButtons: Array<buttonDraw> = new Array<buttonDraw>();
var xb: Array<buttonDraw> = new Array<buttonDraw>();
var player: Array<play> = new Array<play>();
var tr: Array<trans> = new Array<trans>();
var mapEl: Array<drav> = new Array<drav>();

window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

interface drav {
    x: number;
    y: number;
    drav(): void;
    color: string;
}

interface buttonDraw {
    x: number;
    y: number;
    draw(): void;
    pressed: boolean;
}
interface play {
    x: number;
    y: number;
    width: number;
    height: number;
    draw(): void;
    left(): void;
    right(): void;
    up(): void;
    down(): void;
    start(): void;
}
interface trans {
    x: number;
    y: number;
    isT: boolean;
    draw(): void;
    transition(x: number, y: number, x2: number, y2: number): boolean;

}

class romb implements drav {
    public x: number;
    public y: number;
    public color: string;
    private width: number = canvas.height / 20;
    private height: number = canvas.height / 20;
    constructor(x: number, y: number, color: string = "black") {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    drav = (): void => {
        ctx.save();
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.resetTransform();
        ctx.restore();
    }
}

class line implements drav {
    public x: number;
    public y: number;
    public x2: number;
    public y2: number;
    public color: string;
    public lineWidth: number;
    constructor(x: number, y: number, x2: number, y2: number, color: string = "green", lineWidth: number = 5) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    public drav = (): void => {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.restore();
    }
}

class transition implements trans {
    public x: number;
    public y: number;
    public color: string;
    public width: number;
    public height: number;
    public isT: boolean;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.isT = false;
    }

    public draw = (): void => {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }

    public transition = (x: number, y: number, x2: number, y2: number): boolean => {
        if ((x >= this.x && x <= this.x + this.width || x2 >= this.x && x2 <= this.x + this.width) && (y >= this.y && y <= this.y + this.height || y2 >= this.y && y2 <= this.y + this.height)) {
            this.isT = true;
        }
        return this.isT;
    }
}

class Player implements play {
    public x: number = 0;
    public y: number = 0;
    private speed: number = canvas.height / 40;
    public width: number;
    public height: number;
    public color: string;
    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

    }
    public draw = (): void => {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.restore();
    }
    public left = (): void => {
        this.x -= this.speed;
    }
    public right = (): void => {
        this.x += this.speed;
    }
    public up = (): void => {
        this.y -= this.speed;
    }
    public down = (): void => {
        this.y += this.speed;
    }
    public start = (): void => {
        this.x = canvas.width / 2 * 0.9;
        this.y = canvas.height * 0.8;
    }
}
class Button implements buttonDraw {

    public pressed: boolean = false;

    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public color: string;

    private midx: number;
    private midy: number;

    public text: string;
    public fontSize: number;
    public textColor: string;

    constructor(x: number, y: number, width: number, height: number, text: string, fontSize: number = 15, color: string, textColor: string){
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
    public draw = (): void => {

        ctx.save();
        ctx.fillStyle = this.color;

        if (this.pressed == true) {
            ctx.globalAlpha = 0.5;
            ctx.fillRect(this.x - this.midx - 2, this.y - this.midy + 2, this.width, this.height);
        }
        else {
            ctx.fillRect(this.x - this.midx, this.y - this.midy, this.width, this.height);
        }
        ctx.restore();


        ctx.save();
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.textColor;
        ctx.font = this.fontSize + "px Verdana";

        if (this.pressed == true) {
            ctx.globalAlpha = 0.5;
            ctx.fillText(this.text, this.x - 2, this.y + 2);
        }
        else {
            ctx.fillText(this.text, this.x, this.y);
        }
        ctx.restore();
    }
    public clicked = (event: MouseEvent): void => {
        var x: number = event.x - canvas.offsetLeft;
        var y: number = event.y - canvas.offsetTop + window.pageYOffset;
        if (x > this.x - this.midx && y > this.y - this.midy && x < this.x + this.midx && y < this.y + this.midy) {
            this.pressed = true;

        }
    }
    public not = (event: MouseEvent): void => {
        this.pressed = false;
    }
}
function gameLoop() {
    var s = requestAnimationFrame(gameLoop);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i: number = 0; i < draw_array.length; i++) {
        var d: buttonDraw = draw_array[i];
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
function playerSpawn(){
    if (tr[0].isT == true) {
        tr[0].isT = false;
        player[0].y = canvas.height * 0.8;
        var p: play = player[0];
        p.draw();
    }
    if (tr[1].isT == true) {
        player[0].x = canvas.width * 0.88;
        var p: play = player[0];
        p.draw();
        tr[1].isT = false;
    }
    if (tr[2].isT == true) {
        player[0].y = 6;
        var p: play = player[0];
        p.draw();
        tr[2].isT = false;
    }
    if (tr[3].isT == true) {
        player[0].x = 6;
        var p: play = player[0];
        p.draw();
        tr[3].isT = false;
    }
    else {
        var p: play = player[0];
        p.draw();
    }
    return;
}
function playing() {
    playerSpawn();
    document.addEventListener('keydown', keyboardInput);
    for (var i: number = 0; i < menuButtons.length; i++) {
        var d: buttonDraw = menuButtons[i];
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
    for (var i: number = 0; i < mapEl.length; i++) {
        var d: drav = mapEl[i];
        d.drav();
    }
    if (menuButtons[3].pressed == true) {
        cancelAnimationFrame(m);
    }
    if (xb[0].pressed == true) {
        cancelAnimationFrame(m);
    }


}



function keyboardInput(event: KeyboardEvent) {
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
    ctx.font = "70px Verdana"
    ctx.fillText("Laimėjote!!!", canvas.width / 2, canvas.height / 2);
    ctx.restore();
    xb[0].pressed = true;
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    canvas.width = window.innerWidth * 0.8;
    canvas.height = canvas.width * 9/16;

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
}
