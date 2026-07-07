// Each and everything in JavaScript is "Object"

const p1 = {
    xp1: "I am inside P1"
}

const p2 = {
    xp2: "I am inside P2",
    __proto__: p1
}

const p3 = {
    xp3: "I am inside P3",
    __proto__: p2
}


// samajhne k liye k prototype kaise kaam krta h 

// let s =""

// s.__proto__ = String.__proto__ = Object.__proto__ = null
// x.__proto__ = Number.__proto__ = Object.__proto__ = null
// v.__proto__ = Boolean.__proto__ = Object.__proto__ = null


class Student {
    constructor(){
        this.fname = "Nishar"
    }

    getName(){
        return "I am inside get name";
    }
}

const s1 = new Student();

s1.__proto__ = null  // It will break the chain between s1 and s2 and after this no one will instanceof each other

const s2 = { __proto__: Student.prototype}

// __proto__ => ye object pe lgta h aur Prototype => base class pe