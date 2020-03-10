## Micro:shield package
This micro:bit micro:shield package was developed by [Make&Learn](https://www.makeandlearn.cat/). It can be purchased through the [Make&Learn online shop](https://botiga.makeandlearn.cat/producto/microshield).

<p align="center">
  <img src="https://github.com/MakeAndLearn/pxt-microshield/blob/master/microshield.png">
</p>

This module, micro:shield, is specifically designed for education in order to offer a flexible board where you can connect components of many kinds, especially the ones that the educational community uses more frequently.

## Example of use

```blocks
// On Button A pressed, turn the stepper motor 1 45 degrees and 
// run counterclockwise the motor DC 1 and 3 at maximum speed
input.onButtonPressed(Button.A, function () {
    microshield.StepperDegree(microshield.Steppers.STEP1, 45)
    microshield.MotorRun(microshield.Motors.M1, -100)
    microshield.MotorRun(microshield.Motors.M3, -100)
})
// On Button B pressed, turn the stepper motor 1 -45 degrees and 
// run clockwise the motor DC 1 and 3 at maximum speed
input.onButtonPressed(Button.B, function () {
    microshield.StepperDegree(microshield.Steppers.STEP1, -45)
    microshield.MotorRun(microshield.Motors.M1, 100)
    microshield.MotorRun(microshield.Motors.M3, 100)
})
// On Button A and B pressed, turn off the motors DC 1 and 3
input.onButtonPressed(Button.AB, function () {
    microshield.MotorStop(microshield.Motors.M1)
    microshield.MotorStop(microshield.Motors.M3)
})

// When the micro:bit is shaken, drive a servo to 180 degrees and then 90 degrees
input.onGesture(Gesture.Shake, function () {
    microshield.Servo(microshield.Servos.S3, 0)
    basic.pause(1000)
    microshield.Servo(microshield.Servos.S3, 20)
})
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

## Compatibility with other languages
This module can be programmed with python, as well. Make&Learn have developed a set of [python libraries for specific components like  DC motors, servos, steppers and sonar sensor](https://github.com/MakeAndLearn/python_microbit_libraries).
