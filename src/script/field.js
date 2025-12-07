class Field {
    constructor() {
        this.cam = new Rect2(0, 0, 32, 18)
        this.player = new Player()
    }

    handleTick(game) {
        this.player.handleTick(game)
    }

    render(game) {
        this.player.render(game)
    }
}