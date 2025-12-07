class Game {
    constructor() {
        this.state = ''
        this.menu = false

        this.canvas = document.getElementById('screen')
        this.gl = this.canvas.getContext('webgl2')
        this.glVar = new GLVar(this.gl)
        this.canvasUI = document.createElement('canvas')
        this.canvasUI.width = 1280
        this.canvasUI.height = 720
        this.ctx = this.canvasUI.getContext('2d')
        GLFunc.glInit(this.gl, this.glVar)

        this.keyPressed = {'left': false, 'right': false, 'jump': false}
        this.keyMapping = {'left': 'ArrowLeft', 'right': 'ArrowRight', 'jump': 'ArrowUp', 'interact': 'e'}
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        this.frameCurrent = 0
        this.framePrevious = 0
        this.delta = 0
    }

    run() {
        this.scene = new SceneTitle(game)
        this.field = new Field(game)
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious
        this.framePrevious = performance.now()

        this.scene.loop(this)

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key
        for (const k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = true
            }
        }
        this.scene.keyDown(this, key)
    }

    keyUp(event) {
        let key = event.key
        for (const k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = false
            }
        }
        this.scene.keyUp(this, key)
    }
}
