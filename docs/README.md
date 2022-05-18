# SoloLearn JavaScript Projects

These 5 projects are required to complete the JavaScript certificate on SoloLearn.

---

## Project #1

The function `planTrip()` takes in a distance, and returns the estimated time off arrival. I utilize default parameters, guard clauses, and ES6 to complete.

From SoloLearn:
> You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
> Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.
>
> Sample Input:
> 150
>
> Sample Output:
> 225
>
> Explanation: It will take 150/40 = 3.75 hours to cover the distance, which is equivalent to 3.75*60 = 225 minutes.

---

## Project #2: The Snail in the Well

The function `snailInTheWell()` will wrap my other functions. These are called in a specific recursive order, so that if the snail escapes before nightfall, the function call will cease. I utilized while loops, default parameters, guard clauses, conditional statements, and the const variable to complete.

From SoloLearn:
> The snail climbs up 7 feet each day and slips back 2 feet each night.
> How many days will it take the snail to get out of a well with the given depth?
>
> Sample Input:
> 31
>
> Sample Output:
> 6
>
> Explanation: Let's break down the distance the snail covers each day:
> Day 1: 7-2=5
> Day 2: 5+7-2=10
> Day 3: 10+7-2=15
> Day 4: 15+7-2=20
> Day 5: 20+7-2=25
> Day 6: 25+7=32
> So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.
>
> Hint: You can use a loop to calculate the distance the snail covers each day, and break the loop when it reaches the desired distance.

---

## Project #3: Currency Converter

This project required that I write a function to take in an amount to convert and the exchange rate. It should return the product of those two inputs.

From SoloLearn:
> You are making a currency converter app.
> Create a function called convert, which takes two parameters: the amount to convert, and the rate, and returns the resulting amount.
> The code to take the parameters as input and call the function is already present in the Playground.
> Create the function to make the code work.
>
> Sample Input:
> 100
> 1.1
>
> Sample Output:
> 110
>
>Converting 100 at the rate of 1.1 is equal to 100*1.1 = 110.

---

## Project #4: Contact Manager

The goal of the funciton `contact()` is to take in a name an number input, and output them in this format: `${this.name}: ${this.number}`. I utilize default values, template literals, custom methods, and ES6.

From SoloLearn:
> You are working on a Contact Manager app.
> You have created the contact object constructor, which has two arguments, name and number.
> You need to add a print() method to the object, which will output the contact data to the console in the following format: name: number
> The given code declares two objects and calls their print() methods. Complete the code by defining the print() method for the objects.

---

## Project #5: Store Manager

The goal of this function is to recursively mutate an array of numbers, based on an input. Currently is themed around a store's prices, and appyling a given increase. For this project, I utilized default values, arrow functions, higher-order funcitons and ES6.

From SoloLearn:
> You are working on a Store Manager program, which stores the prices in an array.
> You need to add functionality to increase the prices by the given amount.
> The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.
> Use a loop to iterate through the array and increase all items.

---

## Project #6: Words

The goal of this script is to concatenate any words given with a dollar sign in front and back of it. This is often formatting used for encryptions. Techniques I utilize here: class constructors, method creation, and other ES6 features like the spread operator.

From SoloLearn:
> You are making a text encryptor. It should take multiple words and output a combined version, where each word is separated by a dollar sign $.
> For example, for the words "hello", "how", "are", "you", the output should be "$hello$how$are$you$".
> The given code declares a class named Add, with a constructor that takes one rest parameter.
> Complete the code by adding a print() method to the class, which should generate the requested output.
> Note, that the dollar sign is placed at the beginning and at the end of the output.

---
