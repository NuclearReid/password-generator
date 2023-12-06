# Password Generator

[My password generator](https://nuclearreid.github.io/password-generator/)


Using the pre-given code/pre-built website, I have created a simple password generator in JavaScript.
The user is asked what password length they want and if it's within the correct parameters (can be 8-128 characters in length) they are then asked if they want to use, Upper/lower case letters, numbers, or special characters.

Whichever options the user chooses, the generator will guarantee that all of those options are used in creating the password.

If no options are selected or the password length isn’t within the specified criteria, the website will inform the user what the criteria are not met for a password.

I have put in a bunch of special characters and more can be added to the array at any time and it won’t require changing any other section of code.

I have two methods in the JavaScript file. The one that is being used at the top and the one that is commented out at the bottom of the file. 

I decided to use the longer chunk of code because it will guarantee all the options were used.

## Basically how this code generates a random password:
1) it will look at the user options/arrays (upper case, lower case, numbers, special characters)
2) it’ll then randomly pick one of those arrays
3) Next, it picks a random spot from within the array it chose
4) It’ll put that chosen spot from the array into the password
5) It makes sure all the user options have been used in the password
6) If not all the options are used, 
7) It resets the password
8) Runs through the generation process again till all options are chosen


Although the structure is for each block of my code very similar I couldn’t find a way to simplify it. In class Tom showed an easier way that is very similar to my second other method. However, I didn’t like that it creates a guarantee array of the user options than adds another array to the end of it. I like that mine is more random but with the drawback of being needing more processing to run. But it’s a small program and still does the task required of it quickly and effectively. 


### A screenshot of my working password generator
I used an 8 character password utilizing all the user options for this example
![A screenshot of my working password generator](./Assets/password%20generator%20screenshot.png)