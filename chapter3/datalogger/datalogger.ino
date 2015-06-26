// Libraries
#include <SPI.h>
#include <SD.h>

// Sensor pin
int sensorPin = 0;

// For SD card
const int chipSelect = 4;

void setup()
{
  
  // Start Serial connection
  Serial.begin(9600);
  
  // Init SD card
  Serial.print("Initializing SD card...");
  pinMode(10, OUTPUT);
  
  // See if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("Card initialized.");
  
}
 
void loop()               
{
  
 // Make a string for assembling the data to log:
 String dataString = "";
  
 // Read data from sensor pin
 int reading = analogRead(sensorPin);  
 
 // Convert to voltage
 float voltage = reading * 5.0;
 voltage /= 1024.0; 

 // Print temprature
 int temperatureC = (voltage - 0.5) * 100;
 dataString += String(temperatureC);
 
 // Open file on SD card
 File dataFile = SD.open("datalog.txt", FILE_WRITE);
 
 // If the file is available, write to it:
  if (dataFile) {
    dataFile.println(dataString);
    dataFile.close();
    // print to the serial port too:
    Serial.println(dataString);
  }  
  // if the file isn't open, pop up an error:
  else {
    Serial.println("Error opening datalog.txt");
  }
 
 // Wait 10 seconds
 delay(1000);
 
} 
