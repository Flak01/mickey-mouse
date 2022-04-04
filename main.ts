input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
})
basic.showLeds(`
    # . . . .
    . # . . .
    # # # . .
    . # . . .
    # . . . .
    `)
basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . # . .
        . # . # .
        . . # . .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        # . . . #
        . . . . .
        . . # . .
        `)
})
