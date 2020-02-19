input.onGesture(Gesture.Shake, function () {
    microshield.Servo(microshield.Servos.S7, 180)
    basic.pause(100)
    microshield.Servo(microshield.Servos.S7, 90)
})
input.onButtonPressed(Button.A, function () {
    microshield.StepperDegree(microshield.Steppers.STEP1, 45)
    microshield.StepperDegree(microshield.Steppers.STEP2, -45)
    microshield.MotorRun(microshield.Motors.M4, 100)
})
input.onButtonPressed(Button.B, function () {
    microshield.StepperDegree(microshield.Steppers.STEP1, -90)
    microshield.StepperDegree(microshield.Steppers.STEP2, 90)
    microshield.MotorRun(microshield.Motors.M4, -100)
})
microshield.MotorStop(microshield.Motors.M4)
microshield.Servo(microshield.Servos.S7, 90)
basic.forever(function () {
	
})
