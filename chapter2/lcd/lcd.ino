// Libraries
#include <LiquidCrystal_I2C.h>
#include <Wire.h>

// LCD Screen
LiquidCrystal_I2C lcd(0x27,20,4);

void setup()
{
  
  // Start Serial connection
  Serial.begin(9600);
  
  // Init LCD
  initDisplay(); 
  
  // Display text
  lcd.print("This is a simple test.");

}
 
void loop()               
{
 
}

// Init LCD display
void initDisplay()
{
  lcd.init();      
  lcd.backlight();
  lcd.clear();
}
