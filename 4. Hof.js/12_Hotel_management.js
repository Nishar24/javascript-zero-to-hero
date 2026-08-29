// Maan lo tum ek restaurant ke owner ho.

// Tumhare paas alag-alag type ke chefs hain:

// Pizza Chef 🍕
// Burger Chef 🍔
// Biryani Chef 🍚

// Tum ek manager rakhte ho jo decide karta hai ki customer ke order ke according kaunsa chef dena hai.

function pizzaChef() {
    console.log("Pizza is ready 🍕");
}

function burgerChef() {
    console.log("Burger is ready 🍔");
}

function getChef(order) {

    if (order === "pizza") {
        return pizzaChef;
    }

    if (order === "burger") {
        return burgerChef;
    }
}

let chef = getChef("burger");

chef()