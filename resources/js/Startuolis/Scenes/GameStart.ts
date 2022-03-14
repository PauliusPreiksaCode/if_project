import Phaser from "phaser"
var width: number = window.innerWidth * 0.8;
var heigth: number = window.innerWidth * 0.8 * 9/16;
var multX: number = width/1280;
var multY: number = heigth/720;

export default class GameStart extends Phaser.Scene
{
    constructor() {
        super('game-start');
    }

    preload()
    {
        this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
        this.load.image('PlayButton', '/pictures-videos/testGifFrames/Play.png')
    }


    create() {
        const background = this.add.image(width/2, heigth/2, 'PlayButton').setScale(multX, multY);
        var text = this.add.text(width/2, heigth/8, "Startuolis", { font: "80px Arial", color: '#000000',  align: "center"}).setOrigin(0.5, 0.5).setScale(multX, multY);
        var buttons = this.rexUI.add.buttons({
            orientation: 0,

            // Elements
            background: [background],

            buttons: [
                background
            ],
            expand: false,
            align: undefined,
            click: {
                mode: 'pointerup',
                clickInterval: 100
            },
        })

        buttons.on('button.click', (button: any, index: any, pointer: any, event: any) => {
            this.scene.start('main-game');
            console.log("buttonClick");
        })

    }
}
