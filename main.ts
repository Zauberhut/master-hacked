radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    music.playMelody("B G B G B G B G ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(10000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    radio.sendNumber(1)
    music.playMelody("B G B G B G B G ", 120)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedString(function (receivedString) {
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
music.setBuiltInSpeakerEnabled(true)
