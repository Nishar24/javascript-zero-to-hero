// Socho ek ATM machine hai 💳

// ATM machine band ho jaati hai

// Par PIN yaad rehta hai

// Ye hi closure hai 😄

function bankAccount(){
    let balance = 1000;  //Private variable

    function checkBalance(){
        console.log(balance)
    }

    return checkBalance;
}

let myAccount = bankAccount();
myAccount();    


// Yahan kya hua?

// bankAccount() execute ho gaya

// Normally balance khatam ho jana chahiye ❌

// Par checkBalance() ne usko yaad rakha ✅
// ➡️ Closure formed

// 🔹 Closure ka Rule (Yaad rakhna)

// ✔️ Function ke andar function
// ✔️ Inner function outer ke variable ko use kare
// ✔️ Outer function execute hone ke baad bhi variable alive rahe

