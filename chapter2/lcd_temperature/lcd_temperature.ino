// Libraries
#include <LiquidCrystal_I2C.h>
#include <Wire.h>

// Sensor pin
int sensorPin = 0;

// LCD Screen
LiquidCrystal_I2C lcd(0x27,20,4);

void setup()
{
  
  // Start Serial connection
  Serial.begin(9600);
  
  // Init LCD
  initDisplay(); 

}
 
void loop()
{
  
  // Read data from sensor pin
 int reading = analogRead(sensorPin);  
 
 // Convert to voltage
 float voltage = reading * 5.0;
 voltage /= 1024.0; 
 
 // Print temprature
 float temperatureC = (voltage - 0.5) * 100 ;
 lcd.clear();
 lcd.print("The temperature is: ");
 lcd.print(temperatureC);
 
 // Wait a second
 delay(1000);
 
}

// Init LCD display
void initDisplay()
{
  lcd.init();      
  lcd.backlight();
  lcd.clear();
}
