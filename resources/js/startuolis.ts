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
    constructor(x: number, y: number, width:number, height:number, color: string = "black", lineWidth: number = 1, text: string = "", textColor: string = "white", fontSize:number = 1, button: boolean = false)
    {
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
        if(this.button)
            canvas.addEventListener("mousedown", this.mouseDown, false);
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

        if (x > this.x - this.width / 2 && x < this.x + this.width / 2 && y > this.y - this.height / 2 && y < this.y + this.height / 2)
            this.down = true;
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

        if(this.button)
            canvas.addEventListener("mousedown", this.mouseDown, false);
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
            clear = true;
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




var shapes: Array<Shape> = new Array<Shape>();
var clear: boolean = false;

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1280, 720);

    var shape: Shape;
    if(!clear)
    {
        for (var i: number = 0; i < shapes.length; i++) {
            shape = shapes[i];
            shape.draw();
        }
    }
}

window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById("game");

    // @ts-ignore
    ctx = canvas.getContext("2d");
    shapes.push(new Circle(640, 400, 200, "blue", 6, true));
    shapes.push(new Triangle(640, 400, 100, "white", 3));
    shapes.push(new Rectangle(640, 100, 500, 140, "white", 1, "Startuolis", "black", 100));
    gameLoop();
}
