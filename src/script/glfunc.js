class GLFunc {
    static glInit(gl, glVar) {
        glVar.vShader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(glVar.vShader, VShader.source)
        gl.compileShader(glVar.vShader)
        glVar.fShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(glVar.fShader, FShader.source)
        gl.compileShader(glVar.fShader)

        if (!gl.getShaderParameter(glVar.vShader, gl.COMPILE_STATUS)) {
            console.log(gl.getShaderInfoLog(glVar.vShader))
        }
        if (!gl.getShaderParameter(glVar.fShader, gl.COMPILE_STATUS)) {
            console.log(gl.getShaderInfoLog(glVar.fShader))
        }

        glVar.program = gl.createProgram()
        gl.attachShader(glVar.program, glVar.vShader)
        gl.attachShader(glVar.program, glVar.fShader)
        gl.linkProgram(glVar.program)

        glVar.location.pos = gl.getAttribLocation(glVar.program, 'pos')
        glVar.location.aTexture = gl.getAttribLocation(glVar.program, 'a_texcoord')

        glVar.buffer.triangle = gl.createBuffer(gl.ARRAY_BUFFER)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.triangle)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 0.0, 1.0, 1.0, 0.0]), gl.STATIC_DRAW)
        glVar.buffer.ui = gl.createBuffer(gl.ARRAY_BUFFER)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.ui)
        gl.bufferData(gl.ARRAY_BUFFER, GLConst.bufferUIData, gl.STATIC_DRAW)

        glVar.texture.ui = gl.createTexture()
        GLFunc.initTexture(gl, glVar.texture.ui)
    }

    static initTexture(gl, texture) {
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    }

    static renderInit(gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)
    }
}
