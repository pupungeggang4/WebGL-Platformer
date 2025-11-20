class Game {
    constructor() {
        this.state = ''
        this.menu = false

        this.canvas = document.getElemenyById('screen')
        this.gl = this.canvas.getContext('webgl2')
        this.canvasUI = document.createElement('canvas')
        this.ctx = this.canvasUI.getContext('2d')
    }

    run() {

    }

    loop() {

    }

    keyDown(event) {
        
    }

    keyUp(event) {

    }
}
