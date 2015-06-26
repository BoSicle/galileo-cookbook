// Sensor pin
int sensorPin = 7;

void setup()
{
  
  // Start Serial connection
  Serial.begin(9600);
}
 
void loop()               
{
  
 // Read data from sensor pin
 int reading = digitalRead(sensorPin); 
 
 // Print reading
 Serial.println(reading);
 
 // Wait a second
 delay(1000);
 
}
