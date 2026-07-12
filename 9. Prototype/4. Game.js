const character = {
    health: 100,
    attack: function(){
        console.log("Attacking");
        
    }
};

const player ={
    username: "Nishar"
};


Object.setPrototypeOf(player, character);

console.log(player.health);
player.attack();


// Yaha:

// character = base template

// player = specific object

// reuse ho raha hai code