class SceneMain {
    constructor(game) {
        this.cam = new Rect2(0, 0, 32, 18)
        this.rect = new Rect2(2, 3, 2, 2)
    }

    loop(game) {
        if (game.menu === false) {
            if (game.state === '') {
                game.field.handleTick(game)
            }
        }
        this.render(game)
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        Render.initClear(game.canvas, game.ctx)
        GLFunc.renderInit(gl, glVar)
        game.field.render(game)
    }

    keyDown(game, key) {

    }

    keyUp(game, key) {

    }
}
