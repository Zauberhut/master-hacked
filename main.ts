radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playMelody("B G B G B G B G ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    blinken()
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
})
function blinken () {
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(494, music.beat(BeatFraction.Quarter))
        pins.digitalWritePin(DigitalPin.P2, 0)
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
}
radio.setGroup(1)
