// 📖 Kahani (Real-Life Story)

// Socho tum online order karte ho 📦

// Company tumse promise karti hai:

// 📦 Deliver ho gaya :→ resolve(.then)

// ❌ Out of stock / cancel → reject(.catch)

// Tum:

// Order karke wait nahi karte

// Jab result aata hai, tum message dekhte ho

// 👉 Promise = “Future me kaam complete hoga ya fail, dono me se ek”

// 🧠 Promise ke 3 States

// 1️⃣ Pending – Abhi chal raha hai
// 2️⃣ Fulfilled (Resolved) – Kaam ho gaya ✅
// 3️⃣ Rejected – Error / fail ❌


// Step 1: Promise banaya (food order)
let foodOrder = new Promise((resolve, reject) =>{
    console.log("🍔 Food order kiya...");


    // Step 2: Delivery me time lagega (async kaam)
 setTimeout(() =>{
    //let restaurantOpen = true; // condition
    let restaurantOpen = false; // condition

    if(restaurantOpen){
         // Step 3A: Sab sahi → promise resolve
         resolve("✅ Food deliver ho gaya");
         
    }else{
        // Step 3B: Problem → promise reject
        reject("❌ Restaurant band hai")
    }

 }, 2000);
 
    
});


foodOrder
  .then((message) =>{
    // Jab promise resolve ho
    console.log(message);
    console.log("😋 Khana khana start");
    
  })
  .catch((error) =>{
    // Jab promise reject ho
    console.log(error);
    console.log("😢 Bhookhi neend");
    
    
  });

 
