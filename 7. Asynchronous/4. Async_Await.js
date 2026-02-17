// 📖 Kahani (Real-Life Story)

// Socho tum restaurant me ho 🍽️

// Tum order dete ho

// Tum wait karte ho, lekin line block nahi hoti

// Khana aate hi tum next kaam karte ho

// 👉 Async/Await = wait karo, but system ko block mat karo

// Promise ke upar hi kaam karta hai,
// bas likhne ka style simple & readable hota hai 😌

// 🧠 Async / Await ka Golden Rule

// async → function ko asynchronous banata hai

// await → promise ka result aane tak wait karta hai

// ⚠️ await sirf async function ke andar kaam karta hai


// Step 1: Food order function (Promise return karta hai)
function orderFood(){
    return new Promise((resolve) =>{

        console.log("🍔 Food order kiya");

        setTimeout(() =>{
            resolve("✅ Food mil gaya");

        }, 2000)
        
    });
}

// Step 2: Async function
async function eatFood(){
    console.log("⏳ Waiting for food...");

    // await → yahan rukega jab tak food na aa jaaye
    let result = await orderFood();

    console.log(result);
    console.log("😋 Khana khana start");
     
}

// Step 3: Function call
eatFood();