# ANDELA BOOTCAMP PROJECTS
## BOOTCAMP PROJECT DAY 2
### WEATHER API

This application implements a logic that gives the weather information of a place by making use of the darksky public weather api. This api takes two parameters which are the **latitude and longitude** of the place.
The application takes in command line arguments using a flag.
####Example
**node api.js -a address**

####HOW IT WORKS
The application first makes a call to Google Map services using google map API to retrieve the latitude and longitude coordinates of the address, than it makes a second call to the darksky services using their API and the latitude and longitude of the address to retrieve weather information for the address. Information such as:
 + Temperature
 + Apparent Temperature
 + Wind Speed
 + Pressure
 + Visibility

##BOOTCAMP PROJECT DAY 1
###OBJECT ORIENTED PROGRAMMING ###

 This implements the object oriented paradigm. In this project Animal was used to model a class for different types of animal.
 Any type of animal can inherit from the Animal class and call methods defined in that class. For example in this project, a fish and a dog class was sub-classed from the Animal class, which gives them access to call methods defined in the animal class.
 
####Methods
  These are some methods from the animal class that can be called and over-ridden by subclasses
  + getName()
  + setName(newName)
  + move(speed)
  + eat()
  + setAge(newAge)
  + getColor()
  + getAge()
  
####Example
  **var dog1 = new Dog("Bingo", 25, "Black");** <br/>
  From the above instantiation, **dog1** is an instance of the **Dog class** which is a subclass of the **Animal class**. Therefore **dog1** can access the methods and properties of the **Animal class** because it is also an instance of the **Animal class**
  
  **dog1.getName() = "Bingo"** <br/>
  **dog1.getAge() = 25** <br/>
  **dog1.getColor() = "Black"**
 

###DATA TYPE PROGRAMMING TASK
This implements a programming logic that checks the data type of the passed input and return appropriate message. The function is called like this **dataTypes(parameter);**.

####Predefined Output Messages
If input is of type:
+ string => **the length will be returned**
+ number => **returns either the number is greater than, or less than, or equal to 100**
+ boolean => **return the boolean passed in as argument**
+ object => **if object is an array, it returns 'the third element in the array' if it exist, if not it returns 'undefined'. if the object is not an array, it returns 'undefined'**
+ function => **returns 'called callback' by calling the function and passing 'true' as argument**

####Example
**dataType(32) => "less than 100"**<br/>
**dataType("hello") => 5**<br />
**dataType(true) => true**<br />
**dataType(undefined) => undefined**<br />
**dataType([2,3,4]) => 4**<br />
**dataType(function(param)) => called callback**<br />



###FINDING THE PRIME NUMBERS IN A SEQUENCE 
 This is a programming logic that filters out the prime numbers within a sequence of numbers based on the passed in limit of the sequence. This logic tries to uphold asymptotic analysis by reducing its time and memory complexity to the lowest regardless of the input size. <br/>
 The function is called like this **getPrime(parameter)**<br /> 
####Example
 **getPrime(10)**  => **[2,3,5,7]** <br />
 **getPrime(20)**  => **[2,3,5,7,11,13,17,19]**
 
 

