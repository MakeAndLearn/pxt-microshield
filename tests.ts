input.onGesture(Gesture.Shake, function () {
    microshield.Servo(microshield.Servos.S7, 180)
    basic.pause(100)
    microshield.Servo(microshield.Servos.S7, 90)
})
input.onButtonPressed(Button.A, function () {
    microshield.Stepper(microshield.Steppers.STEP1, microshield.stepUnit.Degrees,45)
    microshield.Stepper(microshield.Steppers.STEP2, microshield.stepUnit.Degrees, -45)
    microshield.MotorRun(microshield.Motors.M4, 100)
})
input.onButtonPressed(Button.B, function () {
    microshield.Stepper(microshield.Steppers.STEP1, microshield.stepUnit.Degrees, 90)
    microshield.Stepper(microshield.Steppers.STEP2, microshield.stepUnit.Degrees, -90)
    microshield.MotorRun(microshield.Motors.M4, -100)
})
microshield.MotorStop(microshield.Motors.M4)
microshield.Servo(microshield.Servos.S7, 90)
basic.forever(function () {
	
})
