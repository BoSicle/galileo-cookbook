void setup() {                
  
  // Start serial1 & Serial
  Serial.begin(9600);
  Serial1.begin(9600);
  
}

void loop() {

  // Check for Serial data
  if (Serial1.available()) {
    
    // Read one byte
    char c = Serial1.read();
    
    // Echo the value that was read
    Serial.print(c);
    Serial1.print(c);
  
  }
}
