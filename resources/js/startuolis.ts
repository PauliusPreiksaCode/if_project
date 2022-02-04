import {List} from "postcss/lib/list";
import * as Console from "console";

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

interface Shape
{
    draw(): void;
    x:number;
    y:number;
    lineWidth:number;
    color:string;
    button: boolean;
}

class Corner
{
    public x: number;
    public y: number;

    constructor(x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }
}

class Rectangle implements Shape
{
    public name: string;
    public x: number;
    public y: number;
    public height: number;
    public width: number;
    public lineWidth: number;
    public color: string;
    public text: string;
    public fontSize: number;
    public textColor: string;
    public button:boolean = false;
    // for button
    public down: boolean = false;
    //
    constructor(name:string ,x: number, y: number, width:number, height:number, color: string = "black", lineWidth: number = 1, text: string = "", textColor: string = "white", fontSize:number = 1, button: boolean = false)
    {
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
        this.button = button;
        // for button
        if(this.button){
            canvas.addEventListener("mousedown", this.mouseDown, false);
        }
    }


    public drawText = (): void => {
        ctx.save();
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.textColor;
        ctx.font = this.fontSize + "px Verdana";
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }

    public draw = (): void =>{
        this.drawText();
        ctx.save();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        if(this.button)
        {
            if (this.down) {
                ctx.fillStyle = "yellow";
                ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
                this.drawText();
            }
        }
        ctx.rect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
        ctx.stroke();
        ctx.restore();
    }

    public mouseDown = (event: MouseEvent): void => {
        var x: number = event.x - canvas.offsetLeft + window.pageXOffset;
        var y: number = event.y - canvas.offsetTop + window.pageYOffset;

        if (x > this.x - this.width / 2 && x < this.x + this.width / 2 && y > this.y - this.height / 2 && y < this.y + this.height / 2){
            this.down = true;
        }
    }

    public mouseUp = (event: MouseEvent): void => {
        this.down = false;
    }
}

class Circle implements Shape
{
    public x: number;
    public y: number;
    public radius: number;
    public lineWidth: number;
    public color: string;
    public button: boolean;
    public down: boolean = false;


    constructor(x: number, y: number, radius:number, color: string = "black", lineWidth: number = 1, button: boolean = false)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.color = color;
        this.button = button;

        if(this.button){
            canvas.addEventListener("mousedown", this.mouseDown, false);
        }

    }

    public draw = (): void =>{
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    public mouseDown = (event: MouseEvent): void => {
        var x: number = event.x - canvas.offsetLeft + window.pageXOffset;
        var y: number = event.y - canvas.offsetTop + window.pageYOffset;
        x -= this.x;
        y -= this.y;

        if(Math.pow(x,2) + Math.pow(y, 2) < Math.pow(this.radius, 2))
        {
            this.down = true;
            startGame = true;
        }
    }
}

class Triangle implements Shape
{
    public x: number;
    public y: number;
    public lineWidth: number;
    public color: string;
    public size: number;
    public corners: Array<Corner> = new Array<Corner>();
    public button: boolean;

    constructor(x: number, y: number, size:number, color: string = "black", lineWidth: number = 1, button: boolean = false)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        this.lineWidth = lineWidth;
        this.color = color;
        this.button = button;

        this.corners.push(new Corner(-1 * size, -1 * size));
        this.corners.push(new Corner(-1 * size, size));
        this.corners.push(new Corner(size * 1.3, 0));
    }

    public draw = (): void =>{
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.moveTo(this.x + this.corners[this.corners.length-1].x, this.y + this.corners[this.corners.length-1].y);
        for(var i:number = 0; i < this.corners.length; i++)
        {
            ctx.lineTo(this.x + this.corners[i].x, this.y + this.corners[i].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}

function mouseOver(event: MouseEvent): void{
    var x: number = event.x - canvas.offsetLeft + window.pageXOffset;
    var y: number = event.y - canvas.offsetTop + window.pageYOffset;
    for(var i: number = 0; i < MainShapes.length; i++){
        var shape: Rectangle = (MainShapes[i] as Rectangle);
        if (x > shape.x - shape.width / 2 && x < shape.x + shape.width / 2 && y > shape.y - shape.height / 2 && y < shape.y + shape.height / 2) {
            console.log(shape.name);
            mouseOverChoice = true;
            shapeInfo = shape.name;
        }
    }
}

function beenClicked(shapeName: string): boolean{
    for(var i: number = 0; i < MainShapes.length; i++)
        if((MainShapes[i] as Rectangle).name == shapeName && (MainShapes[i] as Rectangle).down == true)
            return true;
    return false;
}



var StartingShapes: Array<Shape> = new Array<Shape>();
var MainShapes: Array<Shape> = new Array<Shape>();
var GameEndShapes: Array<Shape> = new Array<Shape>();
var startGame: boolean = false;
var mouseOverChoice: boolean = false;
var shapeInfo: string = "";
var canvasHeight: number;
var canvasWidth: number;
var multX: number;

function gameLoop()
{
    requestAnimationFrame(gameLoop);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);

    var shape: Shape;
    if(!startGame)
    {
        for (var i: number = 0; i < StartingShapes.length; i++) {
            shape = StartingShapes[i];
            shape.draw();
        }
    }

    if(startGame)
    {
        canvas.addEventListener("mousemove", mouseOver, false);
        var count: number = 0;
        for (var i: number = 0; i < MainShapes.length; i++) {
            shape = MainShapes[i];

            if((shape as Rectangle).down)
                count++;
            shape.draw();

            if(mouseOverChoice && beenClicked(shapeInfo) == false){
                var rectangle: Rectangle = new Rectangle("", 640 * multX, 675, 1100 * multX, 60, "black", 2, shapeInfo, "black", 32);
                rectangle.draw();
            }

            if(count == 6){
                GameEndShapes[0].draw();
                GameEndShapes[1].draw();
            }
        }
        count = 0;
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("game");

    console.log(canvas.width + "x" + canvas.height);
    console.log(window.innerWidth + "x" + window.innerHeight);

    console.log(window.innerWidth * 0.8 + "x" + window.innerHeight);
    canvas.width = window.innerWidth * 0.8;
    canvas.height=window.innerHeight;

    multX = canvas.width/1280;


    // @ts-ignore
    ctx = canvas.getContext("2d");

    StartingShapes.push(new Circle(640 * multX, 400, 200 * multX, "blue", 6, true));
    StartingShapes.push(new Triangle(640 * multX, 400, 100 * multX, "white", 3));
    StartingShapes.push(new Rectangle("", 640 * multX, 100, 500 * multX, 140, "white", 1, "Startuolis", "black", 100));

    MainShapes.push(new Rectangle("1", 140 * multX, 570, 100 * multX, 100 * multX, "black", 3, "", "white", 1, true));
    MainShapes.push(new Rectangle("2", 340 * multX, 570, 100 * multX, 100 * multX, "black", 3, "", "white", 1, true));
    MainShapes.push(new Rectangle("3", 540 * multX, 570, 100 * multX, 100 * multX, "black", 3, "", "white", 1, true));
    MainShapes.push(new Rectangle("4", 740 * multX, 570, 100 * multX, 100 * multX, "black", 3, "", "white", 1, true));
    MainShapes.push(new Rectangle("5", 940 * multX, 570, 100 * multX, 100 * multX, "black", 3, "", "white", 1, true));
    MainShapes.push(new Rectangle("6", 1140 * multX, 570, 100 * multX, 100 * multX, "black", 3, "", "white", 1, true));

    GameEndShapes.push(new Rectangle("", 640 * multX, 50, 1000 * multX, 150 * multX, "white", 0, "Žaidimo pabaiga", "black", 64));
    GameEndShapes.push(new Rectangle("", 640 * multX, 100, 1000 * multX, 38 * multX, "white", 1, "Jūsų surinkti taškai: XXXX", "black", 32));

    gameLoop();
}
