## Micro:shield package
This micro:bit micro:shield package was developed by Make&Learn (https://www.makeandlearn.cat/).

<p align="center">
  <img src="https://github.com/MakeAndLearn/pxt-microshield/blob/master/microshield.png">
</p>

This module, micro:shield, is specifically designed for education in order to offer a flexible board where you can connect components of many kinds, especially the ones that the educational community uses more frequently.

It can be purchased through the Make&Learn's online shop (https://botiga.makeandlearn.cat/producto/microshield)

This module can be programmed with python, as well. Make&Learn have developed a set of libraries for specific components like  DC motors, servos, steppers and sonar sensor. They can be found at this link: https://github.com/MakeAndLearn/python_microbit_libraries

## Example of use
### Makecode
## Basic usage

```blocks
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB_RGB)
while (true) {
    let x = input.acceleration(Dimension.X) / 2;
    let y = input.acceleration(Dimension.Y) / 2;
    let z = input.acceleration(Dimension.Z) / 2;
    strip.shift(1);
    strip.setPixelColor(0, neopixel.rgb(x, y, -z));
    strip.show();
    basic.pause(100);
}
```

```blocks
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
```

### Javascript
```JavaScript
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
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)
