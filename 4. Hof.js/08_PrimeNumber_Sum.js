function sumPrimes(num) {

  // 🟢 STEP 0:
  // Agar number 2 se chhota hai,
  // to koi prime exist hi nahi karta
  if (num < 2) {
    return 0;
  }

  // 🟢 STEP 1:
  // Ye function check karega:
  // kya diya gaya number PRIME hai?
  function isPrime(n) {

    // 1 prime nahi hota
    if (n < 2) return false;

    // 2 se leke sqrt(n) tak check karte hain
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // Agar kisi se divide ho gaya
      // matlab prime nahi hai
      if (n % i === 0) {
        return false;
      }
    }

    // Agar kisi se divide nahi hua
    // to number prime hai
    return true;
  }

  // 🟢 STEP 2:
  // Prime numbers ka sum yahan store hoga
  let sum = 0;

  // 🟢 STEP 3:
  // 2 se leke num tak loop chalao
  for (let i = 2; i <= num; i++) {

    // Agar number prime hai
    if (isPrime(i)) {
      // to sum me add karo
      sum += i;
    }
  }

  // 🟢 STEP 4:
  // Final sum return karo
  return sum;
}


console.log(sumPrimes(10));  // 17
console.log(sumPrimes(5));   // 10
console.log(sumPrimes(2));   // 2
console.log(sumPrimes(0));   // 0
console.log(sumPrimes(977)); // 73156


// 🪙 Kahani: Gold Coin Collector

// Socho tum Gold Coin Collector ho 🪙

// Coins pe numbers likhe hain: 1 se N tak

// Boss bolta hai 👑:

// “Mujhe sirf SPECIAL coins chahiye
// jo sirf 1 aur khud se divide hote ho (Prime)
// aur un sab ka TOTAL weight (sum) batao”

function sumPrimes(num) {

  // 🟢 STEP 0: 
  // Agar coins 2 se kam hain,
  // to koi SPECIAL (prime) coin milega hi nahi
  if (num < 2) {
    return 0;
  }

  // 🟢 STEP 1:
  // Ye helper function check karega:
  // kya ye coin SPECIAL (prime) hai?
  function isPrime(n) {

    // Coin number 1 special nahi hota
    if (n < 2) return false;

    // Check karo: kya coin kisi aur se divide hota hai?
    for (let i = 2; i <= Math.sqrt(n); i++) {
      // Agar divide ho gaya → special nahi
      if (n % i === 0) {
        return false;
      }
    }

    // Agar kisi se divide nahi hua
    // to ye SPECIAL (prime) coin hai
    return true;
  }

  // 🟢 STEP 2:
  // Yahan hum special coins ka total weight rakhenge
  let sum = 0;

  // 🟢 STEP 3:
  // 2 se leke num tak har coin check karo
  for (let coin = 2; coin <= num; coin++) {

    // Agar coin special (prime) hai
    if (isPrime(coin)) {
      // to uska weight bag me daal do
      sum += coin;
    }
  }

  // 🟢 STEP 4:
  // Boss ko final total de do
  return sum;
}


console.log(sumPrimes(10));  // 17  → 2+3+5+7
console.log(sumPrimes(5));   // 10  → 2+3+5
console.log(sumPrimes(2));   // 2
console.log(sumPrimes(0));   // 0
console.log(sumPrimes(977)); // 73156


// 🧠 Ek line me poori kahani

// Coins dekho → special (prime) chuno → unka total jod do