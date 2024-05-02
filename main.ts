scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Me.vy == 0) {
        Me.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Portal`, function (sprite, location) {
    game.gameOver(true)
})
let Me: Sprite = null
scene.setBackgroundColor(6)
Me = sprites.create(assets.image`Plyear 1`, SpriteKind.Player)
let My_friend = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
My_friend.setPosition(30, 30)
My_friend.follow(Me, 35)
controller.moveSprite(Me, 50, 0)
tiles.setCurrentTilemap(tilemap`level1`)
Me.ay = 40
scene.cameraFollowSprite(Me)
