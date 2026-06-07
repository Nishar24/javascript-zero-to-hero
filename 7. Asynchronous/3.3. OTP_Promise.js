// 📱 Real Life Example 3: OTP Verification
// 📖 Kahani.

// OTP bheja gaya 📩

// OTP sahi → Login success (resolve)

// OTP galat → Access denied (reject)

function verifyOTP(otp){
    return new Promise((resolve, reject) =>{
        console.log("🔐 OTP verify ho raha hai...");

        setTimeout(() =>{

            if(otp === 1234){
                resolve("✅ Login successful")
            }else{
                reject("❌ Invalid OTP");
            }
        }, 1000)
        
    });
}

verifyOTP(1234)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))
