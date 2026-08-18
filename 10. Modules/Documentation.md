## 📦 Modules: ES6 Modules vs CommonJS (Simple + Clear Explanation)

JavaScript me **modules** ka matlab hota hai code ko alag-alag files me divide karna taaki reuse aur maintain karna easy ho.
Modules allow JavaScript code to be split into separate reusable files.
Do main module systems hote hain:

1. **ES6 Modules (ESM)**
2. **CommonJS (CJS)**

---

# 1️⃣ ES6 Modules (Modern JavaScript)

👉 Mostly use hota hai **React, frontend, modern Node.js** me.

### ✅ Export kaise karte hain?

### 🔹 Named Export

```js
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

### 🔹 Import kaise karte hain?

```js
// app.js
import { add, sub } from "./math.js";

console.log(add(2, 3)); // 5
```

---

### 🔹 Default Export

```js
// greet.js
export default function greet() {
  console.log("Hello Nishar!");
}
```

Import:

```js
import greet from "./greet.js";
greet();
```

---

### 🔥 Important Points (ES6)

* `import` & `export` use hota hai
* Browser me directly support karta hai (type="module")
* Static loading hota hai (compile time pe)
* Tree shaking possible hai (unused code remove ho jata hai)

---

# 2️⃣ CommonJS (Node.js ka purana system)

👉 Mostly old Node.js projects me use hota hai.

### ✅ Export kaise karte hain?

```js
// math.js
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = { add, sub };
```

### 🔹 Import kaise karte hain?

```js
// app.js
const math = require("./math");

console.log(math.add(5, 3));
```

---

### 🔥 Important Points (CommonJS)

* `require()` use hota hai
* `module.exports` se export hota hai
* Runtime pe load hota hai
* Browser me directly support nahi karta

---

# 🆚 ES6 vs CommonJS Difference

| Feature         | ES6 Modules         | CommonJS               |
| --------------- | ------------------- | ---------------------- |
| Syntax          | import/export       | require/module.exports |
| Loading         | Static              | Dynamic                |
| Browser Support | Yes                 | No                     |
| Node.js         | Modern Node support | Default old Node       |
| Tree Shaking    | Yes                 | No                     |

---

# 🎯 Real Life Example (Simple Story)

Socho tum ek **restaurant** chala rahe ho:

* ES6 Module = Har chef apna dish properly label karke deta hai (named export)
* CommonJS = Ek bada dabba milta hai jisme sab kuch ek saath hota hai

---

# 💻 Node.js me ES6 kaise enable kare?

`package.json` me add karo:

```json
{
  "type": "module"
}
```

---

# 🔥 Interview Important Questions

1. Default export aur named export difference?
2. Kya ek file me multiple default export ho sakta hai? ❌ (No)
3. Kya ES6 browser me chalta hai? ✅
4. Kya require ES6 me use kar sakte hain? ❌

---

Agar tum chaho to mai:

* 👉 ES6 + CommonJS conversion practice karwa du
* 👉 Interview questions karwa du
* 👉 Ya React project me kaise use hota hai wo samjha du

