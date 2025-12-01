class Img {
    static loadPair = [['player', 'image/player.png', '']]
}

class Aud {
    static loadPair = []
}

class AssetManager {
    static numLoaded = 0
    static numAssets = 0
    static loadAsset(callback) {
        AssetManager.numLoaded = 0
        AssetManager.numAssets = Img.loadPair.length + Aud.loadPair.length
        for (const i in Img.loadPair) {
            let pair = Img.loadPair[i]
            let img = new Image()
            img.src = pair[1]
            Img[pair[0]] = img
            img.onload = () => {
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= AssetManager.numAssets) {
                    callback()
                }
            }
            img.onerror = () => {
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= AssetManager.numAssets) {
                    callback()
                }
            }
        }
        for (const i in Aud.loadPair) {
            let pair = Aud.loadPair[i]
            let aud = new Audio()
            aud.src = pair[1]
            Aud[pair[0]] = aud
            aud.addEventListener('canplaythrough', () => {
                AssetManager.numLoaded++
                if (AssetManager.numLoaded >= AssetManager.numAssets) {
                    callback()
                }
            }, false)
            aud.addEventListener('error', () => {
                AssetManager.numLoaded++
               if (AssetManager.numLoaded >= AssetManager.numAssets) {
                    callback()
                }
            }, false)
        }
    }
}
