/**
 * Unit 2.4 Arrays Period 2 Classwork
 * Use the following arrays to complete the exercises. Each problem builds on the ones before it.
 * Make sure to double check your work after each problem by printing the result to the console.
 **/

let animals = ["cat", "dog", "bird", "turtle", "lizard"];
let sports = ["basketball", "football", "tennis", "soccer", "hockey"];
let numbers = [5, 10, 15, 20, 25, 30, 35];

let counter = 1;
/**
 * 1
 * Add "lion" to the end of the animals array
 */
animals.push("lion");
console.log("#", counter++, animals);


/**
 * 2
 * Remove "cat" from the beginning of the animals array
 */

let strayCat = animals.shift();
console.log("#", counter++, strayCat, animals);

/**
 * 3
 * How many elements are in the animals array now? Print to the console
 */
console.log("#", counter++, animals.length); //5


/**
 * 4
 * Print to the console the element at the 2nd index of the animals array
 */
console.log("#", counter++, animals[1]);

/**
 * 5
 * Add "volleyball" and "gymnastics" to the beginning of the sports array
 */
sports.unshift("volleyball", "gymnastics");
console.log("#", counter++, sports)


/**
 * 6
 * What is the index of "soccer" in the sports array? Print to the console.
 */
console.log("#", counter++, sports.indexOf("soccer"));

/**
 * 7
 * Combine the numbers array and sports array into a new array called `combinedArray`. 
 * Print the `combinedArray` to the console
 */
let combinedArray = numbers.concat(sports);
console.log("#", counter++, combinedArray);

/**
 * 8
 * Reverse the elements in `combinedArray` you created in step 7. Print the reversed array to the console.
 */
combinedArray.reverse();
console.log("#", counter++, combinedArray);


//console.log(combinedArray);
/**
 * 9
 * How many elements are in `combinedArray`? Print to the console
 */
console.log("#", counter++, combinedArray.length); //14

/**
 * 10
 * Remove the last element of the `combinedArray` and store the result in a new variable called `lastElement`.
 * Print `lastElement` to the console. What is this value?
 */
let lastElement = combinedArray.pop();
console.log("#", counter++, lastElement); //5

/**
 * 11
 * Check to see if the animals array contains "lizard" and print the result to the console
 */
    console.log("#", counter++, animals.includes("lizard")); //true

/**
 * 12
 * Check to see if the sports array contains "water polo" and print the result to the console
 */
 console.log("#", counter++, sports.includes("water polo")); //false

/**
 * 13
 * Check to see if the numbers array is empty. Print to the console true if the 
 * array is empty, otherwise print false
 */
if (numbers.length < 1) {
    console.log("#", counter++, true);
} else {
    console.log("#", counter++, false);
};



/**
 * 14
 * Using array literal syntax, create a new array called myFavoriteFoods with 5 of your favorite foods
 * Print to the console your myFavoriteFoods array
 */
let myFavoriteFoods = ["tomato", "pizza", "ramen", "sourdough", "tofu"];
console.log("#", counter++, myFavoriteFoods);

/**
 * 15
 * Write a function curryCheck that checks if myFavoriteFoods array contains "curry". If yes, print in the console “I love curry”. If not, add curry to the end of the array. 
 * Call the function and print myFavoriteFoods in the console.
 */
 const curryCheck = (array) => {
     if (array.includes("curry") == true) {
         console.log("#", counter++, "I love curry.");
     } else {
         array.push("curry");
         console.log("#", counter++, array, "I actually do love curry.");
     };
 };

 curryCheck(myFavoriteFoods);

/**
 * 16
 * What is the index of your ultimate favorite food from myFavoriteFoods? 
 * Print to the console
 */
console.log("#", counter++, myFavoriteFoods.indexOf("tomato"));


/**
 * 17
 * Replace your favorite food from question 16 for your favorite drink inside of myFavoriteFoods
 * Print myFavoriteFoods in the console.
 */
myFavoriteFoods[0] = "beer"; //but actually water ;)
console.log("#", counter++, myFavoriteFoods);


 /**
 * 18
 * Write a function called moreDrinks. The function will take two parameters (drink1, drink2) and add the one parameter to the beginning of myFavoriteFoods and the other parameter to the end.
 * Call the function and use two of your favorite drinks as parameters.
 */
const moreDrinks = (drink1, drink2) => {
    myFavoriteFoods.unshift(drink1);
    myFavoriteFoods.push(drink2);
};

moreDrinks("water", "coffee");
console.log("#", counter++, myFavoriteFoods);

/***************************************************BONUS***************************************************/


/**
 * 19 - CHALLENGE - Write your own exercise. Create a function using the various array methods we have learned so far. 
 
 */

const randomMeal = (array) => {
    while (array.length < 10) {
        let addOption = prompt("Please, enter another food or beverage option so we may prepare the best possible meal for you.")
        myFavoriteFoods.push(addOption);
    };

    let firstCourse = array[Math.floor(Math.random() * array.length)];
    let secondCourse = array[Math.floor(Math.random() * array.length)];
    let thirdCourse = array[Math.floor(Math.random() * array.length)];
    return `Tonight, you'll enjoy a preparation of ${firstCourse}, followed by deconstructed ${secondCourse}, and ${thirdCourse} a la mode for dessert. Bon appetit!`;
};

console.log(randomMeal(myFavoriteFoods));