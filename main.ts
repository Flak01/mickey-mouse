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
basic.showString("Lucky Number")
basic.showNumber(7)
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
