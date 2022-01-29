import {List} from "postcss/lib/list";

var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

interface Shape
{
    draw(): void;
    x:number;
    y:number;
    lineWidth:number;
    color:string;
}

class Rectangle implements Shape
{
    public x: number;
    public y: number;
    public height: number;
    public width: number;
    public lineWidth: number;
    public color: string;

    constructor(x: number, y: number, width:number, height:number, color: string = "black", lineWidth: number = 1)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.lineWidth = lineWidth;
        this.color = color;
    }

    public draw = (): void =>{
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.restore();
    }
}

class Circle implements Shape
{
    public x: number;
    public y: number;
    public radius: number;
    public lineWidth: number;
    public color: string;

    constructor(x: number, y: number, radius:number, color: string = "black", lineWidth: number = 1)
    {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.color = color;
    }

    public draw = (): void =>{
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.restore();
    }
}

var shapes: Array<Shape> = new Array<Shape>();

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);
    var shape: Shape;
    for(var i: number = 0; i < shapes.length; i++)
    {
        shape = shapes[i];
        shape.draw();
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("game");
    // @ts-ignore
    ctx = canvas.getContext("2d");
    shapes.push(new Rectangle(100, 100, 100, 100, "black", 5));
    gameLoop();
}
