function counter(){
    let count = 0

    function createCounter(){
        console.log(count);
        count ++

    }
    return createCounter
}

let increase = counter()
increase()
increase()
increase()





function outer() {
    let name = "Nishar";

    function inner() {
        console.log(name);
    }

    return inner;
}

let result = outer();

result(); // Nishar


// 🔥 CLOSURE — BASIC
// outer() ke andar "name" variable hai.
// inner() ek inner function hai jo "name" ko access karta hai.
//
// outer() inner function ko return karta hai.
// Jab outer() finish ho jaata hai, tab bhi inner()
// apne outer scope ke "name" variable ko remember karta hai.
//
// result = outer()
// → result ke andar inner function aa gaya.
//
// result()
// → inner() execute hoga
// → inner() ko "name" yaad hai
// → Output: Nishar
//
// ⭐ Closure = Inner function apne outer function ke
// variables ko remember/access karta hai,
// even after outer function finish ho jaata hai.
//
// Simple flow:
// outer()
//   ↓
// name = "Nishar"
//   ↓
// inner() → remembers name
//   ↓
// return inner
//   ↓
// result()
//   ↓
// Nishar
