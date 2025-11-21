class SceneTitle {
    constructor(game) {
    }

    loop(game) {
        this.render(game)
    }

    render(game) {
        Render.initClear(game.canvasUI, game.ctx)
        Render.fillWhite(game.canvasUI, game.ctx)
        Render.fillTextUI(game.ctx, "Platformer Game", UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, "Start Game", UI.title.textStart)

        GLFunc.renderInit(game.gl)

        let gl = game.gl
        let glVar = game.glVar
        gl.bindTexture(gl.TEXTURE_2D, glVar.texture.ui)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, game.canvas.width, game.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, game.canvasUI)
        gl.useProgram(glVar.program)
        gl.bindVertexArray(glVar.vao)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.ui)
        gl.vertexAttribPointer(glVar.location.pos, 2, gl.FLOAT, gl.FALSE, 4 * 4, 0)
        gl.vertexAttribPointer(glVar.location.aTexture, 2, gl.FLOAT, gl.FALSE, 4 * 4, 2 * 4)
        gl.enableVertexAttribArray(glVar.location.pos)
        gl.enableVertexAttribArray(glVar.location.aTexture)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    keyDown(game) {

    }

    keyUp(game) {

    }
}
