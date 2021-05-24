def on_received_number(receivedNumber):
    pins.digital_write_pin(DigitalPin.P1, 1)
    pins.digital_write_pin(DigitalPin.P2, 1)
    music.play_melody("B G B G B G B G ", 120)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    blinken()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P1, 1)
    radio.send_number(1)
    blinken()
    basic.show_icon(IconNames.YES)
    music.play_melody("B G B G B G B G ", 120)
    basic.pause(1000)
    basic.clear_screen()
    basic.pause(10000)
    pins.digital_write_pin(DigitalPin.P1, 0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.show_icon(IconNames.NO)
    basic.pause(1000)
    basic.clear_screen()
    pins.digital_write_pin(DigitalPin.P1, 0)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P2, 0)
    radio.send_string("stop")
    basic.show_icon(IconNames.NO)
    basic.pause(1000)
    basic.clear_screen()
    pins.digital_write_pin(DigitalPin.P1, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

def blinken():
    for index in range(10):
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(200)
    pins.digital_write_pin(DigitalPin.P2, 1)
radio.set_group(1)