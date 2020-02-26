## Micro:shield package
This micro:bit micro:shield package was developed by [Make&Learn](https://www.makeandlearn.cat/). It can be purchased through the [Make&Learn online shop](https://botiga.makeandlearn.cat/producto/microshield).

<p align="center">
  <img src="https://github.com/MakeAndLearn/pxt-microshield/blob/master/microshield.png">
</p>

This module, micro:shield, is specifically designed for education in order to offer a flexible board where you can connect components of many kinds, especially the ones that the educational community uses more frequently.

## Example of use

```blocks
// When the micro:bit is shaken, drive a servo to 180 degrees and 
// then 90 degrees
input.onGesture(Gesture.Shake, function () {
    microshield.Servo(microshield.Servos.S7, 180)
    basic.pause(100)
    microshield.Servo(microshield.Servos.S7, 90)
})
// On Button A pressed...TODO
input.onButtonPressed(Button.A, function () {
    microshield.StepperDegree(microshield.Steppers.STEP1, 45)
    microshield.StepperDegree(microshield.Steppers.STEP2, -45)
    microshield.MotorRun(microshield.Motors.M4, 100)
})
// On Button B pressed...TODO
input.onButtonPressed(Button.B, function () {
    microshield.StepperDegree(microshield.Steppers.STEP1, -90)
    microshield.StepperDegree(microshield.Steppers.STEP2, 90)
    microshield.MotorRun(microshield.Motors.M4, -100)
})
// Forever loop...TODO
microshield.MotorStop(microshield.Motors.M4)
microshield.Servo(microshield.Servos.S7, 90)
basic.forever(function () {
	
})
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

## Compatibility with other languages
This module can be programmed with python, as well. Make&Learn have developed a set of [python libraries for specific components like  DC motors, servos, steppers and sonar sensor](https://github.com/MakeAndLearn/python_microbit_libraries).
