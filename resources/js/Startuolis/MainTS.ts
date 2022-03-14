import Phaser from "phaser";

import UIPlugins from "phaser3-rex-plugins/templates/ui/ui-plugin";
import MainGame from "./Scenes/MainGame";
import GameStart from "./Scenes/GameStart";
import {unorderedRemoveItem} from "ts-loader/dist/utils";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth * 0.8,
    height: window.innerWidth * 0.8 * 9/16,
    backgroundColor: '#FFFFFF',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    scene: [GameStart,MainGame]
}

export default new Phaser.Game(config)
