class Animal {
    speak(){
        console.log("Animal speaks");
        
    }
}


const dog = new Animal();

console.log(dog.__proto__ === Animal.prototype);


// 🧠 Ek Line Me Final Samajh Lo

// prototype is a property of a function that is used to build inheritance.

// __proto__ is a property of an object that points to its prototype.