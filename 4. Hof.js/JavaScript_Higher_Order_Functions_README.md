# JavaScript Higher-Order Functions (HOF)

## 1. What is a Higher-Order Function?

A **Higher-Order Function (HOF)** is a function that does at least one
of these:

1.  Takes another function as an argument.
2.  Returns another function.

In simple words:

> A function that works with another function is called a Higher-Order
> Function.

------------------------------------------------------------------------

## 2. Function as an Argument

Example:

``` javascript
function sayHello() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(sayHello);
```

### Flow

``` text
execute(sayHello)
      ↓
callback = sayHello
      ↓
callback()
      ↓
sayHello()
      ↓
Hello
```

Here: - `execute` = Higher-Order Function - `sayHello` = Callback
Function - `callback` = parameter that receives the function

------------------------------------------------------------------------

## 3. Callback Function

A **callback function** is a function passed to another function as an
argument.

``` javascript
function deliveryMessage(name) {
    console.log(`Delivery Completed ${name}`);
}

function deliveryComplete(callback) {
    callback("Manzar");
}

deliveryComplete(deliveryMessage);
```

Output:

``` text
Delivery Completed Manzar
```

### Important

Pass a function:

``` javascript
deliveryComplete(deliveryMessage);
```

Call a function:

``` javascript
deliveryComplete(deliveryMessage());
```

Do not confuse the two.

-   `deliveryMessage` → function itself
-   `deliveryMessage()` → executes the function

------------------------------------------------------------------------

## 4. Callback with Data

A callback can receive data.

``` javascript
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
```

Output:

``` text
15
50
```

### Flow

``` text
calculate(10, 5, add)
        ↓
a = 10
b = 5
callback = add
        ↓
callback(a, b)
        ↓
add(10, 5)
        ↓
15
```

------------------------------------------------------------------------

## 5. Returning a Function

A function can also return another function.

``` javascript
function emailNotification() {
    console.log("Email notification sent");
}

function smsNotification() {
    console.log("SMS notification sent");
}

function whatsappNotification() {
    console.log("WhatsApp notification sent");
}

function getNotification(type) {
    if (type === "Email") {
        return emailNotification;
    }

    if (type === "SMS") {
        return smsNotification;
    }

    if (type === "WA") {
        return whatsappNotification;
    }
}

let msg = getNotification("WA");
msg();
```

Output:

``` text
WhatsApp notification sent
```

### Flow

``` text
getNotification("WA")
        ↓
return whatsappNotification
        ↓
msg = whatsappNotification
        ↓
msg()
        ↓
whatsappNotification()
```

### Important

``` javascript
return whatsappNotification;
```

means **return the function**.

``` javascript
return whatsappNotification();
```

means **execute the function and return its result**.

------------------------------------------------------------------------

## 6. Function Return with Data

A returned function can later receive data.

Example: discount system.

``` javascript
function regularDiscount(amount) {
    return amount - (amount * 10 / 100);
}

function premiumDiscount(amount) {
    return amount - (amount * 20 / 100);
}

function vipDiscount(amount) {
    return amount - (amount * 30 / 100);
}

function getDiscount(customerType) {
    if (customerType === "regular") {
        return regularDiscount;
    }

    if (customerType === "premium") {
        return premiumDiscount;
    }

    if (customerType === "vip") {
        return vipDiscount;
    }
}

let discount = getDiscount("regular");

console.log(discount(5000));
```

Output:

``` text
4500
```

### Flow

``` text
getDiscount("regular")
        ↓
return regularDiscount
        ↓
discount = regularDiscount
        ↓
discount(5000)
        ↓
regularDiscount(5000)
        ↓
4500
```

------------------------------------------------------------------------

## 7. Callback vs Function Return

### Callback

Function is **passed into** another function.

``` javascript
processOrder("premium", premiumDiscount);
```

Inside:

``` javascript
callback(amount);
```

------------------------------------------------------------------------

### Function Return

Function is **returned from** another function.

``` javascript
let discount = getDiscount("premium");
```

Inside:

``` javascript
return premiumDiscount;
```

------------------------------------------------------------------------

## 8. Callback + Calculation

``` javascript
function addGST(price) {
    return price + (price * 18 / 100);
}

function applyDiscount(price) {
    return price - (price * 10 / 100);
}

function calculateFinalPrice(price, operation) {
    return operation(price);
}

console.log(calculateFinalPrice(1000, addGST));
console.log(calculateFinalPrice(1000, applyDiscount));
```

Output:

``` text
1180
900
```

Here:

``` text
operation = addGST
```

or:

``` text
operation = applyDiscount
```

depending on what function is passed.

------------------------------------------------------------------------

## 9. HOF with Array and map()

`map()` itself is a Higher-Order Function because it receives a
function.

Example:

``` javascript
let numbers = [10, 20, 30, 40, 50];

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

function processNumbers(numbers, callback) {
    return numbers.map((num) => callback(num));
}

console.log(processNumbers(numbers, double));
console.log(processNumbers(numbers, square));
```

Output:

``` text
[20, 40, 60, 80, 100]
[100, 400, 900, 1600, 2500]
```

### Flow

``` text
processNumbers(numbers, double)
        ↓
callback = double
        ↓
map() takes each number
        ↓
10 → double(10) → 20
20 → double(20) → 40
30 → double(30) → 60
...
        ↓
[20, 40, 60, 80, 100]
```

### Important concept

In the proper design:

``` text
processNumbers → handles the array
double         → handles one number
square         → handles one number
```

------------------------------------------------------------------------

# 10. Real-Life Understanding

Think of a manager.

The manager has a task:

``` text
processOrder()
```

The manager doesn't know exactly how the task should be performed.

You give the manager a worker:

``` text
premiumDiscount
```

The manager stores that worker as:

``` text
callback
```

Then the manager says:

``` text
callback(5000)
```

Which means:

``` text
premiumDiscount(5000)
```

So:

``` text
HOF = Manager
Callback = Worker
Data = Task information
```

This is why callbacks make functions flexible.

------------------------------------------------------------------------

# 11. Common Mistakes

## Mistake 1: Calling the function instead of passing it

Wrong:

``` javascript
calculate(10, 5, add());
```

Correct:

``` javascript
calculate(10, 5, add);
```

------------------------------------------------------------------------

## Mistake 2: Forgetting to call the callback

Wrong:

``` javascript
function calculate(a, b, callback) {
    return callback;
}
```

Correct:

``` javascript
function calculate(a, b, callback) {
    return callback(a, b);
}
```

------------------------------------------------------------------------

## Mistake 3: Returning instead of executing

Wrong when a callback is required:

``` javascript
function processOrder(customerType, callback) {
    return premiumDiscount;
}
```

Correct:

``` javascript
function processOrder(customerType, callback) {
    return callback(amount);
}
```

------------------------------------------------------------------------

## Mistake 4: Forgetting parameters

Wrong:

``` javascript
function premiumDiscount() {
    return amount - (amount * 20 / 100);
}
```

Better:

``` javascript
function premiumDiscount(amount) {
    return amount - (amount * 20 / 100);
}
```

Using parameters makes the function reusable.

------------------------------------------------------------------------

# 12. Quick Rules to Remember

### Rule 1

``` javascript
functionName
```

→ function itself / reference

### Rule 2

``` javascript
functionName()
```

→ execute function

### Rule 3

``` javascript
function test(callback) {
    callback();
}
```

→ `callback` can receive a function

### Rule 4

``` javascript
return anotherFunction;
```

→ return a function

### Rule 5

``` javascript
array.map(callback)
```

→ `map()` receives a callback, so `map()` is also a HOF.

------------------------------------------------------------------------

# 13. HOF Practice Questions Completed

## Q1 --- Basic Callback

Create `sayHello()` and pass it to `execute()`.

## Q2 --- Delivery Notification

Create `deliveryMessage(name)` and call it through
`deliveryComplete(callback)`.

## Q3 --- Calculator

Create `add()` and `multiply()` and execute them through
`calculate(a, b, callback)`.

## Q4 --- Notification System

Return `emailNotification`, `smsNotification`, or `whatsappNotification`
based on a type.

## Q5 --- Discount System

Return a regular, premium, or VIP discount function.

## Q6 --- Order Processing

Use a discount function as a callback inside `processOrder()`.

## Q7 --- Delivery Callback

Pass `deliveryMessage` to `deliveryComplete()` and send a name through
the callback.

## Q8 --- Calculator Callback

Use `add` and `multiply` as callbacks.

## Q9 --- Shopping Price

Use `addGST` and `applyDiscount` as callbacks.

## Q10 --- Array Processing

Use a callback with `map()` to double or square every number.

------------------------------------------------------------------------

# 14. Final Summary

A Higher-Order Function can:

``` text
1. Take a function as an argument
              OR
2. Return a function
```

The most important pattern:

``` javascript
function calculate(a, b, callback) {
    return callback(a, b);
}

calculate(10, 5, add);
```

Remember:

``` text
Function passed     → Callback
Function receiving it → Higher-Order Function
Function returned   → Higher-Order Function
```

And always remember:

``` javascript
add       // pass/reference the function
add()     // execute the function
```

## Next Topic

After Higher-Order Functions, the next topic is:

**Closures**
