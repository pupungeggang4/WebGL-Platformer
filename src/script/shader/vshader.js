class VShader {static source = `#version 300 es
    in vec2 a_pos;
    in vec2 a_texcoord;
    out vec2 v_texcoord;
    uniform int u_ui;
    uniform mat4 u_mat_transform;

    void main() {
        if (u_ui == 1) {
            gl_Position = vec4(a_pos, 0.0, 1.0);
        } else {
            gl_Position = u_mat_transform * vec4(a_pos.x, a_pos.y, 0.0, 1.0);
        }
        v_texcoord = a_texcoord;
    }
`}
