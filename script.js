// The user chooses a random number between 1 and 5
// Then, we generate a random number (between 1 and 5) for the computer (using a function).
// We add two numbers, and we check if the sum of the two numbers is an even or odd number (using a function)
// Eventually, we declare the winner.
let userNumber;
// 1. The user chooses a random number between 1 and 5
// We need to check if the userNumber is a number between 1 and 5
// If the userNumber is not a number between 1 and 5, we ask the user to choose a number between 1 and 5
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber))
{
    userNumber = parseInt(prompt("Choose a number between 1 and 5"));
}

//Generate a random number (between 1 and 5) for the computer (using a function).
function generateRandomNumber()
{
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}
//Math.random() generates a random number between 0 (included) and 1 (not included)
//Multiplying by 6, makes the range go from 0 (included) to 5 (not included)
//Adding 1, makes the range go from 1 (included) to 6 (not included)
//Math.floor() rounds the number down to the nearest whole number

// 2. We generate a random number (between 1 and 5) for the computer (using a function).
const computerNumber = generateRandomNumber();
console.log("The computer number is: " + computerNumber);

// 3. We add two numbers
const summedNumbers = userNumber + computerNumber;
console.log("The sum of the two numbers is: " + summedNumbers);

// 4. We add two numbers, and we check if the sum of the two numbers is an even or odd number (using a function)
function isEven(number) 
{
    if (number % 2 === 0)
    {
        return true;
    }
    return false;
}

// 5. Eventually, we declare whether the summed numbers, give an even or odd number
if (isEven(summedNumbers)) 
{
    console.log("The sum of the two numbers is even");
    document.getElementById("result-even-or-odd").innerHTML = "The sum of the two numbers is even";
}
else 
{
    console.log("The sum of the two numbers is odd");
    document.getElementById("result-even-or-odd").innerHTML = "The sum of the two numbers is odd";
}

// 6. Eventually, we declare the winner.
if (summedNumbers === userNumbers.toLowerCase()) 
{
    console.log("The user wins");
    document.getElementById("result-winner").innerHTML = "The user wins";
}
else 
{
    console.log("The computer wins");
    document.getElementById("result-winner").innerHTML = "The computer wins";
}
