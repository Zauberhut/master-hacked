radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("stop")
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    blinken()
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Darkweb") {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        blinken()
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (receivedString == "stop") {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Darkweb")
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
function blinken () {
    for (let index = 0; index < 8; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(494, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P2, 0)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
}
radio.setGroup(123)
