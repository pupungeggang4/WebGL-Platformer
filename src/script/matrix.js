class Mat4 {
    static getMatTranslate(translate) {
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            translate.x, translate.y, 0.0, 1.0
        ]
    }

    static getMatScale(scale) {
        return [
            scale.x, 0.0, 0.0, 0.0,
            0.0, scale.y, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ]
    }

    static getMatScreen(rect) {
        return [
            rect.size.x / 16.0, 0.0, 0.0, 0.0,
            0.0, rect.size.y / 9.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            rect.pos.x / 16.0, rect.pos.y / 9.0, 0.0, 1.0
        ]
    }

    static getMatScreenCam(rect, cam) {
        return [
            rect.size.x / (cam.size.x / 2), 0.0, 0.0, 0.0,
            0.0, rect.size.y / (cam.size.y / 2), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            (rect.pos.x - cam.pos.x) / (cam.size.x / 2), (rect.pos.y - cam.pos.y) / (cam.size.y / 2), 0.0, 1.0
        ]
    }
}
