// 🏭 Real Life Scenario

// Socho:

// Constructor = Mobile banane ki machine

// new = Machine start karna

// this = Jo naya mobile ban raha hai

// prototype method = Feature jo sab mobiles me same hota hai

/**ES5 Constructor – Real Life Example */ 

// Constructor function = Mobile phone factory

function Mobile(brand, model, price){
     // 'this' refers to the new mobile object being created

     this.brand = brand;  // mobile ka brand set ho raha hai
     this.model = model;  // mobile ka model
     this.price = price;  // mobile ki price
}

// Prototype method = common feature for all mobiles

Mobile.prototype.showDetails = function (){
   // 'this' yahan us mobile ko refer karega jo call karega 
   console.log(
    "Brand: " + this.brand +
    ", Model: " + this.model +
    ", Price: Rs- " + this.price
   );
   
}

// Creating first mobile (using factory)
var mobile1 = new Mobile("Samsung", "S23", 70000);

// Creating second mobile (using factory)
var mobile2 = new Mobile("Apple", "iPhone 15", 80000);

// Calling common method
mobile1.showDetails();
mobile2.showDetails();




/** Same Example in ES6 */

class Mobile {
    constructor(brand, model, price){
        this.brand = brand;  // current mobile
        this.model = model;
        this.price = price;
    }

    showDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: Rs-${this.price}`);
        
    }
}

const mobile1 = new Mobile("Samsung", "S23", 70000)
mobile1.showDetails();
