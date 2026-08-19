/**Counter Example*/
function counter (){
    let count = 0;

    return function(){
        count++;
        console.log(count);
        
    }
}

let c = counter();

c();
c();
c();

// 🧠 Memory Me Kya Ho Raha?

// counter() execute

// count = 0

// Inner function returned

// count memory me lock ho gaya 🔐

// Har call pe same variable use ho raha

// 👉 Isliye increment ho raha