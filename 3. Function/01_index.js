const recipes = [];

 const recipe1 = {
   name: "Spaghetti Carbonara",
   ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"], 
   cookingTime: 22,
   totalIngredients: null,
   difficultyLevel: ""
 };

const recipe2 = {
  name: "Chicken Curry",
   ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
//   cookingTime: 42,
//   totalIngredients: null,
//   difficultyLevel: ""
// };

// const recipe3 = {
//   name: "Vegetable Stir Fry",
//   ingredients: ["broccoli", "carrot", "bell pepper"],
//   cookingTime: 15,
//   totalIngredients: null,
//   difficultyLevel: ""
// };

// recipes.push(recipe1, recipe2, recipe3);

// function getTotalIngredients(ingredients) {
//   return ingredients.length;
// }

// function getDifficultyLevel(cookingTime) {
//   if (cookingTime <= 30) {
//     return "easy";
//   } else if (cookingTime <= 60) {
//     return "medium";
//   } else {
//     return "hard";
//   }
// }

// const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
// console.log(recipe1TotalIngredients);

// const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
// console.log(recipe1DifficultyLevel);

// recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
// recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
// recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
// recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// console.log(recipes);


// // 1. Create an array named questions
// const questions = [
//   {
//     category: "Science",
//     question: "What planet is known as the Red Planet?",
//     choices: ["Mars", "Venus", "Jupiter"],
//     answer: "Mars"
//   },
//   {
//     category: "Geography",
//     question: "What is the capital of India?",
//     choices: ["Mumbai", "Delhi", "Kolkata"],
//     answer: "Delhi"
//   },
//   {
//     category: "Math",
//     question: "What is 5 + 7?",
//     choices: ["10", "12", "14"],
//     answer: "12"
//   },
//   {
//     category: "History",
//     question: "Who was the first President of the United States?",
//     choices: ["George Washington", "Abraham Lincoln", "John Adams"],
//     answer: "George Washington"
//   },
//   {
//     category: "Programming",
//     question: "Which language runs in a web browser?",
//     choices: ["Java", "C", "JavaScript"],
//     answer: "JavaScript"
//   }
// ];

// // 2. Function to get a random question
// function getRandomQuestion(questionsArray) {
//   const randomIndex = Math.floor(Math.random() * questionsArray.length);
//   return questionsArray[randomIndex];
// }

// // 3. Function to get a random computer choice
// function getRandomComputerChoice(choicesArray) {
//   const randomIndex = Math.floor(Math.random() * choicesArray.length);
//   return choicesArray[randomIndex];
// }

// // 4. Function to get results
// function getResults(questionObject, computerChoice) {
//   if (computerChoice === questionObject.answer) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
//   }
// }


// let count = 0;

// function cardCounter(card) {
//   // Increase count for low cards
//   if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
//     count++;
//   }
//   // Decrease count for high cards
//   else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
//     count--;
//   }
//   // Cards 7, 8, 9 do nothing

//   // Decide Bet or Hold
//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// }

// const calculateTotal = (amount, taxRate = 0.05) =>{
//     return amount + (amount * taxRate);
// } 
// console.log(calculateTotal(100));
//  function greet(){
//     const developer = "nishar";
//     console.log("anamika");
    
//  }
//  console.log(developer);

// function exampleFunction (){
//     return "Nishar";
//     return "Anamika";
// }

// const developer = "Nishar";
// function greet(){
//     console.log("hello " + developer);
    
// }
// greet();
 
// const sum = (num1, num2) => num1 + num2 
// console.log(sum(0, 0) + 10);

// const exampleFunction =(param1, param2) => param1 + param2
// console.log(exampleFunction(3, "Something"));

// const sum = (num1, num2) => num1 + num2
// console.log(sum(0, 0) + num2);

// const divideTwoNumber = (num1, num2) => num1 / num2
// console.log(divideTwoNumber(3, 0));

// let numbers = [3, 4, 5, 6, 7, 8];
// numbers.forEach(function(number){
//     console.log(number * 2);
    
// })

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) =>{
//     console.log(`Element ${number} is at index ${index} in array ${array}`);
    
// })

//higher order function
// function multiplyBy(factor){
//     return function(number){
//         return number * factor;
//     }
// }

// let double = multiplyBy(2);
// let triple = multiplyBy(3);

// console.log(double(5));
// console.log(triple(10));

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num) => num * 2);

// console.log(numbers);
// console.log(doubled);

// const numbers = [3, 4, 5, 6, 7].map((element) =>{
//     console.log("Element:", element);
//     return element * 2;
// })
// const numbers = [3, 4, 5, 6, 7].map((element, index, array) =>{
//     console.log("Element:", element);
//     console.log("Index:", index);
//     console.log("Array", array);

// }
// )

// const numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
// const evenNumber = numbers.filter((num) => num % 2 !== 0);
// console.log(evenNumber);


// const developer = [
//     {name: "Nishar", age: 25},
//     {name: "Manzar", age: 27},
//     {name: "Shadab", age: 20},
//     {name: "Gabbar", age: 12}
// ]

// const youngPeople = developer.filter((person) => person.age < 25);
// console.log(youngPeople);

// const numbers =[1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// const expenses = [120, 50, 30 ,200];
// const totalExpenses = expenses.reduce((sum, amount) => sum + amount, 0);
// console.log(totalExpenses);

// const marks = [65, 70, 80, 75];
// const total = marks.reduce((sum, number) => sum + number, 0);
// console.log(total);

// const cart = [
//     {item: "Pen", price: 10},
//     {item: "NoteBook", price: 50},
//     {item: "Bag", price: 500}
// ];
// const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(totalPrice);


// const results = "  Hello, World!  "
//    .trim()
//    .toLowerCase()
//    .replace("World", "JavaScript");//isme w capital me h

// console.log(results);

// const result = "  Hello, World!  "
//   .trim()
//   .toLowerCase()
//   .replace("world", "JavaScript");

// console.log(result); // "hello, JavaScript!"

// const transaction = [
//     {amount: 100, type: "credit"},
//     {amount: 20, type: "cash"},
//     {amount: 150, type: "credit"},
//     {amount: 50, type: "cash"},
//     {amount: 75, type: "credit"}
// ]

// const totalCreditWithBonus = transaction
//    .filter((transaction) => transaction.type === "credit")
//    .map((transaction) => transaction.amount * 1.1)
//    .reduce((sum, amount) => sum + amount, 0)

//    console.log(totalCreditWithBonus);
   

// let str = "  HELLO world  ";
// let result = str
//   .trim()
//   .toLowerCase()
//   .split(" ")

// console.log(result);

let obj = {
    value: 1,
    increment: function() {
        this.value++;
        return this;
    },
    double: function() {
        this.value *= 2;
        return this;
    },
    getValue: function() {
        return this.value;
    }
};

let result = obj.increment().double().increment().getValue();
console.log(result);











