// 📖 Kahani

// Speed test start

// Background me calculation

// Result aate hi display

function checkSpeed(){
    return new Promise((resolve) =>{

        setTimeout(() =>{
           resolve("📶 Speed: 50 Mbps")
        }, 1200)
    });
}

async function showSpeed(){
    console.log("⏳ Checking internet speed...");
    
    let speed = await checkSpeed();

    console.log(speed);
}

showSpeed();