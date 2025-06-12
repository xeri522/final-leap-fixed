namespace SpriteKind {
    export const door = SpriteKind.create()
}
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeWallU`, function (sprite, location) {
    startlevel()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = true
        mySprite.sayText(":)")
        canDash = true
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`wallIce`)) {
            mySprite.fy = 0
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        if (!(mySprite.tileKindAt(TileDirection.Left, assets.tile`wallPlant`))) {
            walljump = true
            timer.debounce("action", 500, function () {
                walljump = false
            })
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Right)) {
        if (!(mySprite.tileKindAt(TileDirection.Right, assets.tile`wallPlant`))) {
            walljump = true
            timer.debounce("action", 500, function () {
                walljump = false
            })
        }
    } else {
        walljump = false
    }
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(location.column, location.row), assets.tile`myTile7`)
    tileUtil.coverAllTiles(assets.tile`myTile1`, sprites.dungeon.doorOpenNorth)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lookingLeft == false && canDash == true) {
        mySprite.sayText(":/")
        dashingR = true
    } else if (lookingLeft == true && canDash == true) {
        mySprite.sayText(":>")
        dashingL = true
    }
    if (dashingL && true) {
        mySprite.setVelocity(-150, 1)
        dashingL = false
    } else if (dashingR && true) {
        dashingR = false
        mySprite.setVelocity(150, 1)
    }
    pause(500)
    mySprite.vx = 0
    mySprite.vy = 0
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`skyNormal`, function (sprite, location) {
    controller.moveSprite(sprite, 70, 0)
    mySprite.ay = 50
    mySprite.fx = -5
    moving = false
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(mySprite, 50, 50)
    mySprite.ay = 0
    moving = true
})
// Is hot can't stay of it for a while
scene.onOverlapTile(SpriteKind.Player, assets.tile`skyHot`, function (sprite, location) {
    controller.moveSprite(mySprite, 50, 50)
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeCournerDL`, function (sprite, location) {
    startlevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == true) {
        randomNumber = randint(0, 100)
        if (randomNumber < 25) {
            mySprite.vy = -100
        } else if (randomNumber > 25) {
            mySprite.vy = -90
        }
        mySprite.sayText(";(")
        jump = false
    }
    if (mySprite.isHittingTile(CollisionDirection.Left) && walljump == true) {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.vx = 100
        mySprite.vy = -100
        walljump = false
        timer.after(200, function () {
            controller.moveSprite(mySprite, 70, 0)
        })
    } else if (mySprite.isHittingTile(CollisionDirection.Right) && walljump == true) {
        controller.moveSprite(mySprite, 0, 0)
        mySprite.vx = -100
        mySprite.vy = -100
        walljump = false
        timer.after(200, function () {
            controller.moveSprite(mySprite, 70, 0)
        })
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lookingLeft = true
    moving = true
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    lookingLeft = false
    moving = false
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeWalld`, function (sprite, location) {
    startlevel()
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeCournerDR`, function (sprite, location) {
    startlevel()
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeCournerUR`, function (sprite, location) {
    startlevel()
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.A.isPressed()) {
        setCurentLevel = game.askForNumber("Level change 0-8", 1)
        startlevel()
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    startlevel()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lookingLeft = false
    moving = true
})
function startlevel () {
    tiles.setCurrentTilemap(levels[setCurentLevel])
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    setCurentLevel += 1
    setCurentLevel += 1
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeWallR`, function (sprite, location) {
    startlevel()
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeWallL`, function (sprite, location) {
    startlevel()
})
// slippery
scene.onOverlapTile(SpriteKind.Player, assets.tile`skyCold`, function (sprite, location) {
    mySprite.fx = 10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    setCurentLevel += 1
    startlevel()
})
// grab
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikeCournerUL`, function (sprite, location) {
    startlevel()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    lookingLeft = true
    moving = false
})
let randomNumber = 0
let dashingR = false
let dashingL = false
let canDash = false
let lookingLeft = false
let levels: tiles.TileMapData[] = []
let jump = false
let walljump = false
let moving = false
let setCurentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `,img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e d d 4 . . . . 
    . . . f 2 2 2 2 e d d e . . . . 
    . . f f 5 5 4 4 f e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
500,
characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `,img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
)
scene.setBackgroundImage(assets.image`back`)
scene.cameraFollowSprite(mySprite)
setCurentLevel = 0
controller.moveSprite(mySprite, 70, 0)
mySprite.fx = 200
mySprite.ay = 50
let vine = false
moving = false
walljump = false
jump = true
levels = [
tilemap`level1`,
tilemap`level13`,
tilemap`level5`,
tilemap`level7`,
tilemap`level9`,
tilemap`level12`,
tilemap`level15`,
tilemap`level7`
]
tiles.createSpritesOnTiles(assets.tile`spikeWallU`, SpriteKind.Enemy)
tiles.createSpritesOnTiles(assets.tile`spikeWallL`, SpriteKind.Enemy)
tiles.createSpritesOnTiles(assets.tile`spikeWallR`, SpriteKind.Enemy)
startlevel()
lookingLeft = false
canDash = false
dashingL = false
mySprite.fx = 5
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.max = 100
statusbar.attachToSprite(mySprite)
statusbar.setColor(7, 4)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Bottom)
mySprite.setKind(SpriteKind.door)
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`wallFire`) && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        statusbar.value += -1
    } else {
        statusbar.value += 0.4
    }
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`wallFire`) && mySprite.isHittingTile(CollisionDirection.Right)) {
        statusbar.value += -1
    } else {
        statusbar.value += 0.3
    }
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`wallFire`) && mySprite.isHittingTile(CollisionDirection.Left)) {
        statusbar.value += -1
    } else {
        statusbar.value += 0.3
    }
    if (dashingR == true) {
        mySprite.startEffect(effects.trail, 500)
    } else if (dashingL == true) {
        mySprite.startEffect(effects.trail, 500)
    }
})
