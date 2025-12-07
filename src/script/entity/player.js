class Player extends Entity {
    constructor() {
        super()
        this.rect = new Rect2(0, 0, 2, 2)
        this.speed = 4
        this.fall = true
        this.solid = false
        this.solidLower = false
    }

    handleTick(game) {
        if (game.keyPressed['left'] === true) {
            this.rect.pos.x -= this.speed * game.delta / 1000
        }
        if (game.keyPressed['right'] === true) {
            this.rect.pos.x += this.speed * game.delta / 1000
        }
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        let cam = game.field.cam
        GLFunc.drawTexRectCam(gl, glVar, this.rect, cam, glVar.texture.player)
    }
}