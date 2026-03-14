// 📖 Kahani

// Tum ATM pe gaye 🏧

// Machine server se balance mangwati hai

// Tum khade ho, line block nahi hoti

// Balance aate hi screen pe dikh jata hai

// 👉 Ye hi async/await hai

function getBalance(){
    return new Promise((resolve) =>{

        setTimeout(() =>{
            resolve("💰 Balance: ₹25,000")
        }, 2000)
    });
}

async function checkBalance(){
    console.log("🏧 Checking balance...");
    
    // await → balance aane tak wait
    let balance = await getBalance();

    console.log(balance);
    console.log("✅ Transaction done");
    
}

checkBalance();