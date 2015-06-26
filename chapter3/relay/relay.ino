// Pin
int relayPin = 7;

void setup() {
  
  // Start Serial
  Serial.begin(115200);

  // Pins mode
  pinMode(relayPin, OUTPUT); 
  
}

void loop() {
  
  // Set the relay active
  digitalWrite(relayPin, HIGH);
  
  // Wait 5 seconds
  delay(5000);
  
  // Set the relay active
  digitalWrite(relayPin, LOW);
  
  // Wait 5 seconds
  delay(5000);
  
}
