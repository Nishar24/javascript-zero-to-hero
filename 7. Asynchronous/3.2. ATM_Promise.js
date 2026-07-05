// 💰 Real Life Example 2:- ATM Se Paise Nikalna...
// 📖 Kahani

// ATM machine promise karti hai:

// Balance hai → Cash milega (resolve)

// Balance nahi → Transaction fail (reject)

function cash(){
//    return new Promise((resolve, reject) =>{
//     console.log("Cash h ATM Machine me");

//     setTimeout(() =>{
//         let cashAvailable = true; // condition

//         if(cashAvailable){
//             resolve("Cash nikal rha h");
//         }else{
//             reject("Sorry! Cash nhi h");
//         }
//     }, 2000)
    
//    });
// }

// cash()
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))


/**Example 2 */

function withdrawMoney(balance){
    return new Promise((resolve, reject) =>{

        console.log("🏧 Processing ATM request...");

        setTimeout(() =>{

            if(balance >= 1000){
                resolve("💸 Cash mil gaya")
            }else{
                reject("❌ Insufficient balance")
            }

        }, 1500)
        
    });
}

withdrawMoney(500)
  .then((msg) => console.log(msg))

  .catch((err) => console.log(err))

