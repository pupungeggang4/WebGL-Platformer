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

        glVar.location.uUI = gl.getUniformLocation(glVar.program, 'u_ui')
        glVar.location.uDraw = gl.getUniformLocation(glVar.program, 'u_draw')
        glVar.location.uColor = gl.getUniformLocation(glVar.program, 'u_color')
        glVar.location.uMatTransform = gl.getUniformLocation(glVar.program, 'u_mat_transform')
        glVar.location.aPos = gl.getAttribLocation(glVar.program, 'a_pos')
        glVar.location.aTexcoord = gl.getAttribLocation(glVar.program, 'a_texcoord')

        glVar.buffer.ui = gl.createBuffer(gl.ARRAY_BUFFER)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.ui)
        gl.bufferData(gl.ARRAY_BUFFER, GLConst.bufferUIData, gl.STATIC_DRAW)
        glVar.buffer.rect = gl.createBuffer(gl.ARRAY_BUFFER)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.rect)
        gl.bufferData(gl.ARRAY_BUFFER, GLConst.bufferRectData, gl.STATIC_DRAW)

        glVar.texture.ui = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, glVar.texture.ui)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

        glVar.texture.player = gl.createTexture()
        GLFunc.initTexture(gl, glVar.texture.player)
    }
    
    static initTexture(gl, tex) {
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]))
    }

    static renderInit(gl, glVar) {
        gl.useProgram(glVar.program)
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.bindVertexArray(glVar.vao)
    }

    static drawProtoRect(gl, glVar, rect, color) {
        gl.uniform1i(glVar.location.uUI, 0)
        gl.uniform1i(glVar.location.uDraw, 1)
        gl.uniform4f(glVar.location.uColor, color[0], color[1], color[2], color[3])
        gl.uniformMatrix4fv(glVar.location.uMatTransform, false, Mat4.getMatScreen(rect))
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.rect)
        gl.vertexAttribPointer(glVar.location.aPos, 2, gl.FLOAT, gl.FALSE, 4 * 4, 0)
        gl.enableVertexAttribArray(glVar.location.aPos)
        gl.disableVertexAttribArray(glVar.location.aTexcoord)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    static drawProtoRectCam(gl, glVar, rect, cam, color) {
        gl.uniform1i(glVar.location.uUI, 0)
        gl.uniform1i(glVar.location.uDraw, 1)
        gl.uniform4f(glVar.location.uColor, color[0], color[1], color[2], color[3])
        gl.uniformMatrix4fv(glVar.location.uMatTransform, false, Mat4.getMatScreenCam(rect, cam))
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.rect)
        gl.vertexAttribPointer(glVar.location.aPos, 2, gl.FLOAT, gl.FALSE, 4 * 4, 0)
        gl.enableVertexAttribArray(glVar.location.aPos)
        gl.disableVertexAttribArray(glVar.location.aTexcoord)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    static drawTexRectCam(gl, glVar, rect, cam, tex) {
        gl.uniform1i(glVar.location.uUI, 0)
        gl.uniform1i(glVar.location.uDraw, 0)
        gl.bindTexture(gl.TEXTURE_2D, tex)
        gl.uniformMatrix4fv(glVar.location.uMatTransform, false, Mat4.getMatScreenCam(rect, cam))
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.buffer.rect)
        gl.vertexAttribPointer(glVar.location.aPos, 2, gl.FLOAT, gl.FALSE, 4 * 4, 0)
        gl.vertexAttribPointer(glVar.location.aTexcoord, 2, gl.FLOAT, gl.FALSE, 4 * 4, 2 * 4)
        gl.enableVertexAttribArray(glVar.location.aPos)
        gl.enableVertexAttribArray(glVar.location.aTexcoord)
        gl.drawArrays(gl.TRIANGLES, 0, 6)

    }
}
