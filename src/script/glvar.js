class GLVar {
    constructor(gl) {
        this.location = {}
        this.vao = gl.createVertexArray()
        this.buffer = {}
        this.texture = {}
        this.vShader = null
        this.fShader = null
        this.program = null
    }
}
