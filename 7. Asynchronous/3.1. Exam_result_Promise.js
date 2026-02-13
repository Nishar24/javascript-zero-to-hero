// 📖 Kahani

// Tumne exam diya 📝
// College bolta hai:

// Result pass hua → certificate milega (resolve)

// Fail hue → sorry message (reject)

// Tum roz office jaake wait nahi karte,
// jab result aata hai tab message milta hai 👉 Promise

function checkResult(){
    return new Promise((resolve, reject) => {
        console.log("Result check ho rha h");

        setTimeout(() =>{
            let passed = true; // result condition

            if(passed){
                resolve("🎉 Pass ho gaye! Certificate mil gaya");
            }else{
                reject("❌ Fail ho gaye! Next attempt");
            }
        }, 2000);
        
    })
}

// Promise handle karna
checkResult()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err))