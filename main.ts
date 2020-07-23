input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
    if (x < 0) {
        x = 4
    }
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
    if (x > 4) {
        x = 0
    }
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
let direction = 1
led.plot(x, y)
basic.forever(function () {
    led.unplot(x, y)
    y += direction
    led.plot(x, y)
    if (y >= 4) {
        direction = -1
    } else if (y <= 0) {
        direction = 1
    }
    basic.pause(1000)
})
