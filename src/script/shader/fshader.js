class FShader {static source = `#version 300 es
    precision highp float;
    in vec2 v_texcoord;
    uniform sampler2D u_texture;
    out vec4 color;

    uniform int u_draw;
    uniform vec4 u_color;

    void main() {
        if (u_draw == 0) {
            color = texture(u_texture, v_texcoord);
        } else {
            color = u_color;
        }
    }
`}
