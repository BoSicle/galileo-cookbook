// Sensor pin
int sensorPin = 0;

void setup()
{
  
  // Start Serial connection
  Serial.begin(9600);
}
 
void loop()               
{
  
 // Read data from sensor pin
 int reading = analogRead(sensorPin);  
 
 // Convert to voltage
 float voltage = reading * 5.0;
 voltage /= 1024.0; 
 
 // Print voltage
 Serial.print(voltage); Serial.println(" volts");
 
 // Print temprature
 float temperatureC = (voltage - 0.5) * 100 ;
 Serial.print(temperatureC); Serial.println(" degrees C");
 
 // Wait a second
 delay(1000);
 
} 
