input.onButtonPressed(Button.A, function () {
    Counter += 1
})
input.onButtonPressed(Button.B, function () {
    CountingDown = true
})
let CountingDown = false
let Counter = 3
CountingDown = false
basic.forever(function () {
    basic.showNumber(Counter)
    if (CountingDown == true) {
        basic.pause(1000)
        Counter += -1
        if (Counter <= 0) {
            CountingDown = false
        }
    }
})
