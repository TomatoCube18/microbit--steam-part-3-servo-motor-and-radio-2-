input.onButtonPressed(Button.A, function () {
    ServoAngle = (ServoAngle >= 180) ? 180 : ServoAngle + 10;
radio.sendNumber(ServoAngle)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(ServoAngle)
})
input.onButtonPressed(Button.B, function () {
    ServoAngle = (ServoAngle <= 0) ? 0 : ServoAngle - 10;
radio.sendNumber(ServoAngle)
})
let ServoAngle = 0
let current_channel = 57
basic.showIcon(IconNames.Happy)
basic.clearScreen()
radio.setGroup(current_channel)
ServoAngle = 90
basic.forever(function () {
	
})
