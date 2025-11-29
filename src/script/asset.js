class Img {
    static player = new Image()

    static loadImage(game) {
        let gl = game.gl
        let glVar = game.glVar
        let loadPair = [[Img.player, glVar.texture.player, "image/player.png"]]
        for (let i in loadPair) {
            let img = loadPair[i][0]
            let tex = loadPair[i][1]
            img.src = loadPair[i][2]
            img.onload = () => {
                gl.bindTexture(gl.TEXTURE_2D, tex)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, img.width, img.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, img)
            }
        }
    }
}
