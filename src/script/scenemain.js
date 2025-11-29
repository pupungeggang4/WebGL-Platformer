class SceneMain {
    constructor(game) {
        this.cam = new Rect2(0, 0, 32, 18)
        this.rect = new Rect2(2, 3, 2, 2)
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        Render.initClear(game.canvas, game.ctx)
        GLFunc.renderInit(gl, glVar)
        GLFunc.drawTexRectCam(gl, glVar, this.rect, this.cam, glVar.texture.player)
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}
