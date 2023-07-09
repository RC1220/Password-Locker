input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    // Verify password
    if (Password == Entry) {
        basic.showIcon(IconNames.Yes)
        rekabit.setAllRgbPixelsColor(0x00ffff)
        rekabit.setServoPosition(ServoChannel.S1, 30)
    } else {
        basic.showIcon(IconNames.No)
        rekabit.setAllRgbPixelsColor(0xff0000)
    }
    basic.pause(500)
    basic.clearScreen()
    rekabit.clearAllRgbPixels()
    // Reset "Entry"
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    Entry = "" + Entry + "B"
    basic.showString("B")
})
// On logo touched Door lock
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    rekabit.setServoPosition(ServoChannel.S1, 160)
})
let Entry = ""
let Password = ""
// Set your password here
Password = "AABA"
Entry = ""
rekabit.setServoPosition(ServoChannel.S1, 160)
