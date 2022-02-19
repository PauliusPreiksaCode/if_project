import Phaser from "phaser";

import TitleScreen from "./scenes/TitleScreen";
import Game from "./scenes/Game";

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.8,
    height: window.innerWidth * 0.8 * 9/16,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    /*
    scene: {
        preload: preload,
        create: create,
        update: update
    }*/
};
const game = new Phaser.Game(config);

var multX: number = config.width/1280;
var multY: number = config.height/720;




game.scene.add('titlescreen', TitleScreen);
game.scene.add('game', Game);

game.scene.start('titlescreen');
game.scene.start('game');
