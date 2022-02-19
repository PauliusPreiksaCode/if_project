import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene
{
    preload()
    {

    }

    create()
    {
        // @ts-ignore
        const  circle = this.add.circle(0, 0, 250,0x0000FF, 1)
        circle.setOrigin(0.5, 0.5);

        this.input.mouse.onMouseUp()
    }
}
