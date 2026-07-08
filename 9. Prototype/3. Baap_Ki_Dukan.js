// 📖 Kahaani: “Baap ki Dukaan”

// Ek sheher me ek dukaan hai — “Sharma Electronics”

// 👴 Sharma ji (Father) ke paas kuch special cheezein hain:

// shopName

// location

// openShop() method

// Ab unka beta Rohit apni nayi branch kholta hai.

// Beta ke paas:

// apna branchName

// apna staffCount

// Lekin beta ko:

// shopName

// location

// openShop()

// dobara likhne ki zarurat nahi hai…

// 👉 Wo apne father ki cheezein inherit kar leta hai.

// Yehi hai Prototypal Inheritance.

// 👴 Parent Object
const shop = {
    shopName: "Sharma Electronics",
    location: "Delhi",
    openSop: function (){
        console.log("Shop is now open!");
        
    }
};

// 👦 Child Object
const branch = {
    branchName: "Rohit Branch",
    staffCount: 5
};

// Prototype set kar diya
Object.setPrototypeOf(branch, shop);

// Ab branch ko shop ki properties mil gayi
console.log(branch.shopName);
console.log(branch.location);
branch.openSop()

// 🔍 Kya ho raha hai?

// JavaScript pehle branch me dekhta hai.
// Agar property nahi milti → prototype (shop) me dekhta hai.

// Isko bolte hain:

// Prototype Chain