class SceneMain {
    constructor(game) {

    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        Render.initClear(game.canvas, game.ctx)
        GLFunc.renderInit(gl)
        GLFunc.drawProtoRect(gl, glVar, {pos: {x: 2.0, y: 3.0}, size: {x: 2.0, y: 2.0}}, [1.0, 0.0, 1.0, 1.0])
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}