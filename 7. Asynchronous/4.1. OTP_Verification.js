// Step 1: Verify OTP function (Promise return karta hai)
function verifyOTP(otp){
    return new Promise((resolve, reject) =>{
        
        setTimeout(() =>{
            if(otp === 1234){
                resolve("✅ Login successful");
            }else{
                reject("❌ Invalid OTP");
            }
        }, 1000)
    });
}

// Step 2: Async function
async function loginUser() {
    try{
        console.log("🔐 OTP check ho raha hai...");
        
        // await OTP verification
        let msg = await verifyOTP(1234);

        console.log(msg);
        console.log("🏠 Dashboard open");
        
    }catch(error){
        // Error handling
        console.log(error);
        
    }
}
// Function call
loginUser();