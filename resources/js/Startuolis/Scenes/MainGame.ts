import Phaser from 'phaser'
var width: number = window.innerWidth * 0.8;
var heigth: number = window.innerWidth * 0.8 * 9/16;
var multX: number = width/1280;
var multY: number = heigth/720;
var clicked: number = 0;

export default class MainGame extends Phaser.Scene
{
    constructor() {
        super('main-game');
    }

    preload()
    {
        this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');
        this.load.image('button1', '/pictures-videos/testGifFrames/Button1.jpg');
        this.load.image('button2', '/pictures-videos/testGifFrames/Button2.jpg');
        this.load.atlas("dude", "/pictures-videos/testGifFrames/spritesWave.png", "/pictures-videos/testGifFrames/spritesWave.json");
    }

    create() {
        const button1D = this.add.image(140 * multX, 570 * multY, 'button2').setScale(0.5*multX, 0.5*multY);
        const button2D = this.add.image(340 * multX, 570 * multY, 'button2').setScale(0.5*multX, 0.5*multY);
        const button3D = this.add.image(540 * multX, 570 * multY, 'button2').setScale(0.5*multX, 0.5*multY);
        const button4D = this.add.image(740 * multX, 570 * multY, 'button2').setScale(0.5*multX, 0.5*multY);
        const button5D = this.add.image(940 * multX, 570 * multY, 'button2').setScale(0.5*multX, 0.5*multY);
        const button6D = this.add.image(1140 * multX, 570 * multY, 'button2').setScale(0.5*multX, 0.5*multY);

        const button1 = this.add.image(140 * multX, 570 * multY, 'button1').setScale(0.5*multX, 0.5*multY);
        const button2 = this.add.image(340 * multX, 570 * multY, 'button1').setScale(0.5*multX, 0.5*multY);
        const button3 = this.add.image(540 * multX, 570 * multY, 'button1').setScale(0.5*multX, 0.5*multY);
        const button4 = this.add.image(740 * multX, 570 * multY, 'button1').setScale(0.5*multX, 0.5*multY);
        const button5 = this.add.image(940 * multX, 570 * multY, 'button1').setScale(0.5*multX, 0.5*multY);
        const button6 = this.add.image(1140 * multX, 570 * multY, 'button1').setScale(0.5*multX, 0.5*multY);

        this.setButtonInfo(button1, "1", "1 info", 0);
        this.setButtonInfo(button2, "2", "2 info", 0);
        this.setButtonInfo(button3, "3", "3 info", 0);
        this.setButtonInfo(button4, "4", "4 info", 0);
        this.setButtonInfo(button5, "5", "5 info", 0);
        this.setButtonInfo(button6, "6", "6 info", 0);

        var text = this.add.text(width/2, heigth * 0.95, "text", { font: "40px Arial", color: '#000000',  align: "center"}).setOrigin(0.5, 0.5).setScale(multX, multY);
        text.setVisible(false);

        var buttons = this.rexUI.add.buttons({
            // x: 0,
            // y: 0,
            // anchor: undefined,
            // width: undefined,
            // height: undefined,

            orientation: 0,

            // Elements
            background: [button1, button2, button3, button4, button5, button6],

            buttons: [
                button1,
                button2,
                button3,
                button4,
                button5,
                button6,
            ],
            expand: false,
            align: undefined,
            click: {
                mode: 'pointerup',
                clickInterval: 100
            },

            // space: 0,
            // space: { left: 0, right:0, top:0, bottom:0, item:0 },

             name: '',
            description: '',
            // draggable: false,
            // sizerEvents: false,
            // eventEmitter: this,
            // groupName: undefined,

            // type: undefined,
            // setValueCallback: undefined,  // or setButtonStateCallback: undefined
            // setValueCallbackScope: undefined  // or setButtonStateCallbackScope: undefined
        })


        buttons.on('button.click', (button: any, index: any, pointer: any, event: any) => {
            console.log("buttonClick" + button);
            //buttons.hideButton(button);
            button.visible = false;
            clicked++;
            if(clicked == 6) {
                var text = this.add.text(width / 2, heigth / 8, "Zaidimo pabaiga", {
                    font: "60px Arial",
                    color: '#000000',
                    align: "center"
                }).setOrigin(0.5, 0.5).setScale(multX, multY);
            }

            if(clicked == 3)
                this.drawDude();
        })


        buttons.on('button.over', (button: any, index: any, pointer: any, event: any) => {
            console.log("over");
            text.text = button.name + " laukelis ir " + button.description;
            text.setVisible(true);

        })

        buttons.on('button.out', (button: any, index: any, pointer: any, event: any) => {
            console.log("out");
            text.setVisible(false);
        })
    }


    setButtonInfo(button: any, name: string, description: string, intel: number)
    {
        button.name = name;
        button.description = description;
    }


    drawDude() {
        var person = this.add.sprite(640 * multX, 360 * multY, "dude").setScale(multX, multY);
        var frameNames = this.textures.get('dude').getFrameNames();
        this.anims.create({
            key: 'wave',
            frames: [{
                key: 'dude',
                frame: 'frame_0_delay-0.1s.jpg'
            }, {
                key: 'dude',
                frame: 'frame_1_delay-0.1s.jpg'
            }, {
                key: 'dude',
                frame: 'frame_2_delay-0.1s.jpg'
            }, {
                key: 'dude',
                frame: 'frame_3_delay-0.1s.jpg'
            }],
            frameRate: 5,
            repeat: -1
        });

        person.anims.play('wave');
    }
}



