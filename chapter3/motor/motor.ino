// Motor pins
int speed_motor_pin = 6;  
int direction_motor_pin = 7;

void setup(void)
{  
  // Start Serial
  Serial.begin(115200);

}

void loop() {  
  
  // Full speed forward
  send_motor_command(speed_motor_pin,direction_motor_pin,255,1);
  
  // Wait 5 seconds
  delay(5000);
  
  // Full speed backward
  send_motor_command(speed_motor_pin,direction_motor_pin,255,0);
  
  // Wait 5 seconds
  delay(5000);
  
}

// Function to command a given motor of the robot
void send_motor_command(int speed_pin, int direction_pin, int pwm, boolean dir)
{
  analogWrite(speed_pin,pwm); // Set PWM control, 0 for stop, and 255 for maximum speed
  digitalWrite(direction_pin,dir);
}
