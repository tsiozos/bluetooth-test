bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    uartdata = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    basic.showIcon(IconNames.Yes)
    basic.showString(uartdata)
    basic.showString("+")
})
let uartdata = ""
basic.showIcon(IconNames.Square)
basic.forever(function () {
	
})
