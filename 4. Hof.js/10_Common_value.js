// 🏢 Kahani:- Office Attendance Checker

// Socho tum ek office manager ho 👨‍💼

// Tumhare paas employees ka record hai (array of objects).
// Boss bolta hai:

// “Mujhe check karna hai ki
// har employee ke paas ek particular cheez properly hai ya nahi”

// 📋 Employees ka data (array of objects)
// [
//   { name: "Quincy", role: "Founder", isBot: false },
//   { name: "Naomi", role: "", isBot: false },
//   { name: "Camperbot", role: "Bot", isBot: true }
// ]

// ❓ Boss kya pooch sakta hai?

// “Kya sab ke paas name hai?” ✅

// “Kya sab ke paas role hai?” ❌ (Naomi ka role empty hai)

// “Kya sab isBot true hain?” ❌ (false bhi hai)

// 👉 Tumhara kaam:

// Har object me ek property check karo
// agar ek bhi jagah value falsy hui → return false

// 🧠 Truthy / Falsy (VERY IMPORTANT)

// Falsy values ❌:

// false
// 0
// ""
// null
// undefined
// NaN


// Baaki sab truthy ✅

function truthCheck(collection, pre) {

  // 🟢 Manager ek-ek employee ka record check karega.
  return collection.every(obj => {

    // 🟢 Check karo:
    // 1. property exist karti hai ya nahi
    // 2. uski value truthy hai ya nahi
    return obj.hasOwnProperty(pre) && Boolean(obj[pre]);

  });
}


// Test 1
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "isBot"
  )
); // false

// Test 2
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "name"
  )
); // true

// 🧠 One-line yaad rakhne ka MANTRA

// Har object me property ho
// aur uski value falsy na ho
// tabhi TRUE warna FALSE


// Q2🛂 Real-Life Kahani: Office Entry Gate Security

// Socho tum office ke main gate par security guard ho 👮‍♂️

// Office rule hai:

// “Kisi bhi employee ko andar aane ke liye
// ID card valid (truthy) hona chahiye”

// Tumhare paas employees ka data hai (array of objects).
// Boss bolta hai:

// “Check karo ki sabke paas valid ID hai ya nahi
// Agar ek bhi ka ID invalid ho → entry band ❌”

// 📋 Employees Data (Input)
// [
//   { name: "Rahul", idCard: true },
//   { name: "Aman", idCard: true },
//   { name: "Rohit", idCard: false }
// ]


// 👉 Rohit ka ID valid nahi ❌
// 👉 Isliye sabko entry nahi milegi

// 🧠 Guard ka simple rule

// Agar ek bhi employee ka required property:

// missing ho ❌

// ya falsy ho (false, 0, "", null, NaN) ❌
// → return false

// Agar sabke paas valid ho → return true ✅

// 🛂 Security Guard ka function
// Ye check karega ki sab employees ke paas
// given property (jaise idCard) truthy hai ya nahi

function truthCheck(collection, property) {

  // 👮‍♂️ Guard ek-ek employee ko check karta hai
  return collection.every(employee => {

    // Condition:
    // 1️⃣ employee ke paas wo property honi chahiye
    // 2️⃣ us property ki value truthy honi chahiye
    return employee.hasOwnProperty(property) && Boolean(employee[property]);

  });
}


// Case 1: Ek employee ka ID invalid hai
console.log(
  truthCheck(
    [
      { name: "Rahul", idCard: true },
      { name: "Aman", idCard: true },
      { name: "Rohit", idCard: false }
    ],
    "idCard"
  )
); 
// ❌ Output: false (Rohit ki wajah se)

// Case 2: Sabke paas valid ID hai
console.log(
  truthCheck(
    [
      { name: "Rahul", idCard: true },
      { name: "Aman", idCard: true },
      { name: "Rohit", idCard: true }
    ],
    "idCard"
  )
);

// ✅ Output: true
