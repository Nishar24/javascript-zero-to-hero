// 📖 Kahani

// Ticket book ki

// Server seat availability check karta hai

// Confirm hua to ticket milta hai

function bookTicket(){
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
            let seatAvailable = true;

            if(seatAvailable){
               resolve("🎫 Ticket confirmed")
            }else{
                reject("❌ No seats available")
            }
        }, 1500)
    });
}

async function travel(){
    try{
        console.log("🚆 Booking ticket...");
        
        let ticket = await bookTicket();

        console.log(ticket);
        console.log("🧳 Journey start");
        
    }catch(err){
        console.log(err);
        
    }
}
// Hamesha Async function call hoga 
travel();