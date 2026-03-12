function getLabReport(){
    return new Promise((resolve, reject) =>{

        setTimeout(() =>{
            let reportReady = true;

            if(reportReady){
                resolve("📊 Lab report ready hai")
            }else{
                reject("⏳ Report delayed")
            }
        }, 3000)
    });
}

// Async function

async function checkReport(){
    try{
        console.log("🧪 Test chal raha hai...");
        
        // await = patiently wai
        let report = await getLabReport();

        console.log(report);
        console.log("👨‍⚕️ Doctor ko notify karo");
        
    }catch{
        console.log(err);
        
    }
}
// Function call
checkReport();

// 🧠 Ekdum Simple Samajh Lo

// Promise → Lab ka wada

// resolve() → Report mil gayi

// reject() → Delay / problem

// async → Doctor smart tareeke se wait karta hai

// await → Doctor patiently report ka intezar karta hai

// try/catch → Agar kuch gadbad ho jaaye to handle
