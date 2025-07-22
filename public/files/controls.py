import serial
from openrgb import OpenRGBClient
from openrgb.utils import RGBColor, ModeData

PORT = 'COM10'
BAUD = 115200

buttons = [0] * 10
sliders = [0] * 10

def read_serial(port):
    data = port.readline().decode().strip()

    if data:
        inputs = data.split(':')

        input_type = inputs[0][0]
        index = int(inputs[0][1:])

        if input_type == 'B':
            buttons[index] = int(inputs[1])
        if input_type == 'S':
            sliders[index] = int(inputs[1])

        return True

    return False

def rgb_setup():
    client.clear()

    fans = client.get_devices_by_name("Lian Li Uni Hub - SL Infinity")
    fan = fans[0]

    return fan

def main(port, leds):
    port.write("U".encode())

    while True:
        new_data = read_serial(ser)

        if new_data:
            if buttons[0] == 1:
                fan.set_mode('Custom')
            if buttons[1] == 1:
                fan.set_mode('Breathing')
            if buttons[2] == 1:
                fan.set_mode('Spectrum Cycle')
            if buttons[3] == 1:
                fan.set_mode('Rainbow Wave')
            if buttons[4] == 1:
                fan.set_mode('Staggered')
            if buttons[5] == 1:
                fan.set_mode('Tide')
            if buttons[6] == 1:
                fan.set_mode('Runway')
            if buttons[7] == 1:
                fan.set_mode('Mixing')

            fan.set_color(RGBColor(round(sliders[0] * 2.55), round(sliders[1] * 2.55), round(sliders[2] * 2.55)))


if __name__ == '__main__':
    client = OpenRGBClient()
    client.connect()

    fan = rgb_setup()

    ser = serial.Serial(PORT, BAUD, timeout=0.1)

    try:
        main(ser, fan)
    except KeyboardInterrupt:
        ser.close()
        client.disconnect()
