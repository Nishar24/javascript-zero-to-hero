function smallestCommons(arr){
    // STEP 1:- array ko chhote se bade order me sort karo
    arr.sort((a, b) => a - b);

    let min = arr[0];//Range-sabse chhota
    let max = arr[1];//Range-sabse bda

    // STEP 2: GCD function (Euclidean Algorithm)
    function gcd(a, b){
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // STEP 3: LCM function
    function lcm(a, b){
    return a * b /gcd(a, b);
}

    // STEP 4: range ke sab numbers ka LCM nikaalo
    let result = min;

    for(let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
   }

   return result;
}


console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([1, 13]));  // 360360
console.log(smallestCommons([23, 18])); // 6056820

// 🚌 Real-Life Kahani: Bus Stand wala Scene

// Socho ek bus stand hai 🚌

// Ek bus 18 minute me aati hai

// Dusri bus 19 minute me

// Teesri bus 20 minute me

// …

// Aakhri bus 23 minute me

// Manager bolta hai 👨‍💼:

// “Mujhe batao 18 se 23 minute ke beech
// sab buses kab ek saath aayengi?”

// 👉 Yehi LCM of range [18, 23] hai.

// 💡 Programming me iska matlab

// Input: [23, 18] (order ulta bhi ho sakta hai)

// Pehle decide karo:

// kab start karna hai → min

// kab rukna hai → max

// Phir:

// 18, 19, 20, 21, 22, 23

// sabka LCM nikaalo


function smallestCommons(arr) {

  // 🟢 STEP 1:
  // Bus stand ka START aur END decide kar rahe hain
  // Chahe input [23,18] ho ya [18,23]
  let min = Math.min(arr[0], arr[1]); // 18
  let max = Math.max(arr[0], arr[1]); // 23

  // 🟢 STEP 2:
  // Ye function batata hai:
  // do buses ka common gap (GCD / HCF)
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 🟢 STEP 3:
  // Ye function batata hai:
  // do buses kab ek saath aayengi (LCM)
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // 🟢 STEP 4:
  // Pehli bus ke time se shuru kar rahe hain
  let result = min;

  // 🟢 STEP 5:
  // Har next bus ko include karte ja rahe hain
  // jaise:
  // LCM(18,19)
  // LCM(result,20)
  // LCM(result,21) ...
  for (let i = min + 1; i <= max; i++) {
    result = lcm(result, i);
  }

  // 🟢 STEP 6:
  // Final time jab sab buses ek saath aayengi
  return result;
}

// 🧪 Test (Bus stand ke examples)
console.log(smallestCommons([1, 5]));    // 60
console.log(smallestCommons([5, 1]));    // 60
console.log(smallestCommons([18, 23]));  // 6056820


// 🧠 Ek line me poori kahani

// Range = bus timings
// LCM = sab buses ka ek saath aana

// min–max = start aur end time
