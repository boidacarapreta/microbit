let velocidade = 0
let fruta: game.LedSprite = null
let cobra: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    cobra.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, () => {
    cobra.turn(Direction.Right, 90)
})
function novaFruta() {
    fruta = game.createSprite(Math.random(5), Math.random(5))
    fruta.set(LedSpriteProperty.Blink, Math.random(11))
}
input.onButtonPressed(Button.AB, () => {
    game.gameOver()
})
cobra = game.createSprite(0, 0)
velocidade = 1000
novaFruta()
game.setScore(0)
basic.forever(() => {
    cobra.ifOnEdgeBounce()
    cobra.move(1)
    if (cobra.isTouching(fruta)) {
        fruta.delete()
        novaFruta()
        game.addScore(1)
        if (velocidade > 100) {
            velocidade = velocidade - 100
        } else {
            game.gameOver()
        }
    }
    basic.pause(velocidade)
})
