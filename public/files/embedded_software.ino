#define NUM_BUTTONS 10
#define NUM_SLIDERS 10

const int buttons[] = {0, 1, 2, 3, 5, 7, 10, 11, 12, 13};
const int sliders[] = {A0, A1, A2, A3, A4, A5, A7, A6, A8, A9};

int button_values[NUM_BUTTONS];
int slider_values[NUM_SLIDERS];

bool input = false;
char code;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115220); // Initialize serial communication at 9600 baud

  for (int i = 0; i < NUM_BUTTONS; i++) {
    pinMode(buttons[i], INPUT);
    button_values[i] = -1;
  }

  for (int i = 0; i < NUM_SLIDERS; i++) {
    pinMode(sliders[i], INPUT);
    slider_values[i] = -1;
  }
}

void loop() {
  if (Serial.available() > 0) {
    code = Serial.read();
    input = true;
  }

  for (int i = 0; i < NUM_SLIDERS; i++) {
    int raw = analogRead(sliders[i]);
    int value = (int)((1 - (double) raw / 1024) * 100);

    if (input && code == 'U' || value != slider_values[i]) {
      Serial.print("S");
      Serial.print(i);
      Serial.print(":");
      Serial.println(value);
    }

    slider_values[i] = value;
  }

  for (int i = 0; i < NUM_BUTTONS; i++) {
    int value;
    
    if (digitalRead(buttons[i]) == HIGH) {
      value = 1;
    } else {
      value = 0;
    }

    if (input && code == 'U' || value != button_values[i]) {
      Serial.print("B");
      Serial.print(i);
      Serial.print(":");
      Serial.println(value);
    }

    button_values[i] = value;
  }

  input = false;

  delay(10);
}
