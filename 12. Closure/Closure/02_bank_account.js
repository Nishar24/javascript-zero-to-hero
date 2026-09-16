// Bank Account
function createBankAccount(){
    let balance = 0

    function deposit(amount){
        balance += amount
        console.log(`${amount} deposited`);
        
    }

    function withdraw(amount){
        balance -= amount
        console.log(`${amount} withdrawn`);
        
    }

    function checkBalance(){
        console.log(`Balance: ${balance}`);
        
    }

    return {
        deposit,
        withdraw,
        checkBalance
    }
}

let account1 = createBankAccount()
let account2 = createBankAccount()
account1.deposit(1000)
account2.deposit(500)
// account.withdraw(300)
// account.checkBalance()
account1.checkBalance()
account2.checkBalance()


// 🔥 CLOSURE — PRIVATE BANK ACCOUNT
// "balance" createBankAccount() ke andar private variable hai.
// Bahar se directly access nahi kar sakte:
// account.balance → undefined
//
// deposit(), withdraw() aur checkBalance()
// inner functions hain jo "balance" ko access karte hain.
//
// Ye functions "balance" ko remember karte hain,
// even after createBankAccount() finish ho jaata hai.
// Isi remembering ko CLOSURE kehte hain.
//
// Example:
// balance = 0
// deposit(500)  → 500
// deposit(1000) → 1500
// withdraw(300) → 1200
//
// ⭐ Important:
// Har baar createBankAccount() call karne par
// ek NEW private balance create hota hai.
//
// account1 → apna balance
// account2 → apna balance
//
// Isliye account1 ka balance account2 ko affect nahi karta.
//
// ⭐ Main idea:
// Closure ka use private data/state ko protect karne
// aur controlled functions ke through access karne ke liye kiya ja sakta hai.
