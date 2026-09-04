# JavaScript Closures — README

## 📌 What is a Closure?

**Closure** ka simple meaning hai:

> Inner function apne outer function ke variables ko remember/access karta hai, even after outer function finish ho jaata hai.

```javascript
function outer() {
    let name = "Nishar";

    function inner() {
        console.log(name);
    }

    return inner;
}

let result = outer();

result(); // Nishar
```

### Flow

```text
outer()
  ↓
name = "Nishar"
  ↓
inner() remembers name
  ↓
return inner
  ↓
outer() finishes
  ↓
result()
  ↓
Nishar
```

---

# 1. 🔥 Closure ka Core Concept

Closure tab banta hai jab:

1. Ek outer function ho.
2. Uske andar koi variable ho.
3. Uske andar inner function ho.
4. Inner function outer variable ko use kare.
5. Inner function ko bahar return/pass kiya jaaye.

```javascript
function outer() {
    let value = 10;

    function inner() {
        return value;
    }

    return inner;
}
```

Yahan `inner()` ko `value` yaad rehta hai.

---

# 2. 🔢 Normal Function vs Closure

## Normal Function

```javascript
function counter() {
    let count = 0;

    count++;
    console.log(count);
}

counter(); // 1
counter(); // 1
counter(); // 1
```

Har function call par `count` dobara `0` se start hota hai.

## Closure Counter

```javascript
function counter() {
    let count = 0;

    function increase() {
        count++;
        console.log(count);
    }

    return increase;
}

let increase = counter();

increase(); // 1
increase(); // 2
increase(); // 3
```

Yahan same `count` remember ho raha hai.

### ⭐ Main Difference

```text
Normal function:
Har call → new variable/state

Closure:
Returned inner function → same remembered state
```

---

# 3. 🔒 Closure for Private Variables

Closure ka ek important use hai **private data** banana.

```javascript
function bankAccount() {
    let balance = 1000;

    return {
        getBalance() {
            return balance;
        },

        deposit(amount) {
            balance += amount;
        }
    };
}

let account = bankAccount();

account.deposit(500);

console.log(account.getBalance()); // 1500
console.log(account.balance);      // undefined
```

`balance` object ka property nahi hai. Ye `bankAccount()` ke andar private variable hai.

---

# 4. 🏦 Bank Account Closure

```javascript
function createBankAccount() {
    let balance = 0;

    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        balance -= amount;
    }

    function checkBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        checkBalance
    };
}
```

Usage:

```javascript
let account = createBankAccount();

account.deposit(500);
account.deposit(1000);
account.withdraw(300);

console.log(account.checkBalance()); // 1200
```

### ⭐ Important

```javascript
console.log(account.balance); // undefined
```

Closure controlled access provide karta hai.

---

# 5. 🔢 Multiple Closure Instances

Har baar outer function call hone par **new private state** create hota hai.

```javascript
let account1 = createBankAccount();
let account2 = createBankAccount();

account1.deposit(1000);
account1.deposit(500);

console.log(account1.checkBalance()); // 1500
console.log(account2.checkBalance()); // 0
```

```text
account1 → apna private balance
account2 → apna private balance
```

Dono ka state alag hai.

---

# 6. 🧮 Function Factory + Closure

Closure ka ek powerful use hai **function factory**.

```javascript
function multiplyBy(number) {
    function operation(value) {
        return value * number;
    }

    return operation;
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30
```

### What happened?

```text
multiplyBy(2)
    ↓
number = 2
    ↓
double remembers 2

multiplyBy(3)
    ↓
number = 3
    ↓
triple remembers 3
```

`double(10)` → `10 × remembered 2` → `20`

`triple(10)` → `10 × remembered 3` → `30`

---

# 7. 👤 Private User Profile

```javascript
function createUser(name) {
    function getName() {
        return name;
    }

    function changeName(newName) {
        name = newName;
    }

    return {
        getName,
        changeName
    };
}

let user = createUser("Nishar");

console.log(user.getName()); // Nishar

user.changeName("Rahul");

console.log(user.getName()); // Rahul

console.log(user.name); // undefined
```

### Important Assignment Rule

```javascript
name = newName;
```

Meaning:

> Right side ki value left side mein daal do.

Example:

```javascript
let name = "Nishar";

function changeName(newName) {
    name = newName;
}

changeName("Rahul");
```

After:

```text
name    → "Rahul"
newName → "Rahul"
```

### Golden Rule

```text
A = B
↓
B ki value A mein daal do
```

---

# 8. 🎯 Counter Closure

```javascript
function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}
```

Usage:

```javascript
let counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount()); // 3

counter.decrement();

console.log(counter.getCount()); // 2
```

`increment()`, `decrement()` aur `getCount()` same private `count` ko remember karte hain.

---

# 9. 🛒 Shopping Cart Closure

```javascript
function createCart() {
    let items = [];

    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        let index = items.indexOf(item);
        items.splice(index, 1);
    }

    function getItems() {
        return items;
    }

    function getTotalItems() {
        return items.length;
    }

    return {
        addItem,
        removeItem,
        getItems,
        getTotalItems
    };
}
```

Usage:

```javascript
let cart = createCart();

cart.addItem("Laptop");
cart.addItem("Mouse");
cart.addItem("Keyboard");

console.log(cart.getItems());
// ["Laptop", "Mouse", "Keyboard"]

cart.removeItem("Mouse");

console.log(cart.getItems());
// ["Laptop", "Keyboard"]

console.log(cart.getTotalItems());
// 2

console.log(cart.items);
// undefined
```

### Array methods

```text
push()   → last mein add
pop()    → last item remove
splice() → specific position par add/remove
indexOf() → item ka index find
```

---

# 10. 🔐 Authentication Closure

```javascript
function createAuth(username) {
    let isLoggedIn = false;

    function login() {
        isLoggedIn = true;
    }

    function logout() {
        isLoggedIn = false;
    }

    function getStatus() {
        if (isLoggedIn === true) {
            return "Logged In";
        } else {
            return "Logged Out";
        }
    }

    function getUsername() {
        return username;
    }

    return {
        login,
        logout,
        getStatus,
        getUsername
    };
}
```

Usage:

```javascript
let user = createAuth("Nishar");

console.log(user.getUsername());
// Nishar

console.log(user.getStatus());
// Logged Out

user.login();

console.log(user.getStatus());
// Logged In

user.logout();

console.log(user.getStatus());
// Logged Out

console.log(user.username);
// undefined
```

---

# 11. 🧠 Parameter Kaise Decide Karein?

Important rule:

> **Jo value function ke bahar se andar laani hai → parameter.**

Example:

```javascript
function createAuth(username) {
}
```

Yahan `username` parameter hai because value bahar se aa rahi hai:

```javascript
createAuth("Nishar");
```

```text
"Nishar" → argument
username → parameter
```

But:

```javascript
let isLoggedIn = false;
```

Ye parameter nahi hai because initial value function ke andar decide ho rahi hai.

### Quick Rule

```text
Bahar se value chahiye?
        ↓
     Parameter

Andar fixed/default state chahiye?
        ↓
     Local variable
```

---

# 12. 🔥 Closure ke Real-World Uses

Closures commonly use hote hain:

- Private variables
- Counters
- Function factories
- Configuration-based functions
- Data/state protection
- Event handlers
- Callbacks
- `setTimeout()` / asynchronous callbacks
- React event handlers
- React `useEffect()`
- Stale closures in React

---

# 13. ⚠️ Common Mistakes

## Mistake 1: Function ko call kar dena

Wrong:

```javascript
paymentSuccess(sendEmail());
```

Correct:

```javascript
paymentSuccess(sendEmail);
```

```text
sendEmail  → function pass
sendEmail() → function execute
```

## Mistake 2: Variable update na karna

Wrong:

```javascript
function changeName(newName) {
    return newName;
}
```

Correct:

```javascript
function changeName(newName) {
    name = newName;
}
```

## Mistake 3: `pop()` ko argument dena

Wrong:

```javascript
items.pop("Mouse");
```

Specific item remove karne ke liye:

```javascript
let index = items.indexOf("Mouse");
items.splice(index, 1);
```

## Mistake 4: Private variable ko object property samajhna

```javascript
user.name
```

`undefined` ho sakta hai jab `name` closure ke andar private variable ho.

---

# 14. ⭐ Closure ko Ek Kahani Se Samjho

Imagine karo ek **locker room** hai.

```text
Outer Function = Locker Room
Variable       = Locker ke andar saman
Inner Function = Locker ki key
```

Outer function finish ho gaya, locker room band ho gaya.

Lekin inner function ke paas **key** hai.

Isliye inner function ab bhi private variable ko access kar sakta hai.

```text
Outer Function
     ↓
Private Variable
     ↓
Inner Function
     ↓
Returned outside
     ↓
Still remembers private variable
```

**Ye remembering = Closure**

---

# 15. 📝 One-Line Definition

### Interview English

> A closure is created when an inner function remembers and accesses variables from its outer lexical scope even after the outer function has finished executing.

### Simple Hinglish

> Closure mein inner function apne outer function ke variables ko yaad rakhta hai, even after outer function complete ho jaata hai.

---

# 16. 🧩 Closure Identify Karne Ka Formula

Code dekhte hi ye questions poochho:

```text
1. Kya outer function hai?
        ↓
2. Kya uske andar variable hai?
        ↓
3. Kya inner function us variable ko use kar raha hai?
        ↓
4. Kya inner function bahar return/pass ho raha hai?
        ↓
       CLOSURE
```

Example:

```javascript
function outer() {
    let name = "Nishar";

    function inner() {
        console.log(name);
    }

    return inner;
}
```

✅ Outer function  
✅ Outer variable  
✅ Inner function uses variable  
✅ Inner function returned  

➡️ **Closure**

---

# 🚀 Final Revision

### Closure =

```text
Inner Function
      +
Outer Variable
      +
Remembering
      =
Closure
```

### Most important points

1. Closure inner function + outer scope ka relationship hai.
2. Inner function outer variables ko remember kar sakta hai.
3. Outer function finish hone ke baad bhi variables accessible reh sakte hain.
4. Closure private variables create karne mein useful hai.
5. Har outer function call apna separate closure/state bana sakta hai.
6. Function factories closures ka common use hain.
7. Parameter tab use karo jab value bahar se function mein deni ho.
8. `A = B` ka matlab hai B ki value A mein assign karna.
9. `function` aur `function()` mein difference yaad rakho.
10. Closure JavaScript ke important advanced-function concepts mein se ek hai.

---

## 🎯 Practice Checklist

- [ ] Basic closure
- [ ] Counter
- [ ] Bank account
- [ ] Multiple instances
- [ ] Function factory
- [ ] Private user profile
- [ ] Shopping cart
- [ ] Authentication system

**Next Topic → IIFE (Immediately Invoked Function Expression)**
