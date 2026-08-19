for(var i = 1; i <= 3; i++){
    setTimeout(() =>{
      console.log(i);
      
    }, 1000)
}

// Kyun?

// var block scope nahi banata

// Ek hi variable memory me hai

// Loop khatam hone ke baad i = 4

// Sab same i print kar rahe



/**Solution 1 (let use karo)*/
for(let i = 1; i <= 3; i++){
    setTimeout(() =>{
        console.log(i);
        
    }, 1000)
}


/**Solution 2 (IIFE Closure Trick)*/
for(let i = 1; i <= 3; i++){
    (function(i){
        setTimeout(() =>{
        console.log(i)
        }, 1000)
    })(i);
    
}