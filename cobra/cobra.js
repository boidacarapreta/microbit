let direção = 0
let meliante: game.LedSprite = null
let cobra: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    cobra.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.B, () => {
    cobra.turn(Direction.Right, 90)
})
cobra = game.createSprite(0, 0)
cobra.set(LedSpriteProperty.Blink, 1)
meliante = game.createSprite(4, 4)
basic.forever(() => {
    cobra.ifOnEdgeBounce()
    meliante.ifOnEdgeBounce()
    cobra.move(1)
    direção = Math.random(3)
    if (direção == 0) {
        meliante.turn(Direction.Left, 90)
    } else {
        if (direção == 2) {
            meliante.turn(Direction.Right, 90)
        }
    }
    meliante.move(1)
    game.addScore(1)
    if (cobra.isTouching(meliante)) {
        game.gameOver()
    }
    basic.pause(1000)
})
