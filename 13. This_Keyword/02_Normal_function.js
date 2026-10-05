// "use strict"
// function show(){
//     console.log(this);
    
// }

// show()

// const user = {
//     name: "Nishar",
    
//     // greet: function(){
     
//      greet: ()=>{


//         const inner = () =>{
//             console.log(this.name);
            
//         }
//         inner()
//     }
// }

// user.greet()

// // Normal function → apna this ho sakta hai
// // Arrow function  → apna this nahi hota
// //                   outer lexical scope se this leta hai


// For Single Users

// const account = {
//     holderName: "Nishar",
//     balance: 50000,

//     showBalance: function(){
//         console.log(`Name:-${this.holderName} balance is ${this.balance}`);
        
//     }
// }

// account.showBalance()



// For Multiple Users

function User(name, age){
    this.name = name;
    this.age = age;

    this.introduce = function(){
        console.log(`My name is ${this.name}, age ${this.age}`);
        
    }
}

const user1 = new User("Nishar", 26)
const user2 = new User("Manzar", 27)

user1.introduce()
user2.introduce()