// 🧠 Kahani

// Ek beta hai 👦
// Wo apne papa ki almari se cheeze le sakta hai.
// Par papa beta ki almari se nahi le sakte

// 👉 Inner function outer ko access kar sakta hai
// 👉 Outer function inner ko nahi

function outer(){
    let a = 20;

    function inner(){
        console.log(a);
        
    }
    inner()
}

outer()
