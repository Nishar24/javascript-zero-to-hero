// Step 1: Ek function jo chai banata hai
function makeChai(callback) {

  console.log("☕ Chai banana start ho chuka ...");

  // Step 2: Chai banne me time lagega (async kaam)
  setTimeout(() => {

    console.log("✅ Chai ready hai");

    // Step 3: Chai ready hone ke baad callback call
    callback();

  }, 2000); // 2 second lag rahe hain
}

// Step 4: Callback function (jab chai ready ho tb call krega)
function drinkChai() {
  console.log("😋 Chai peena start");
}

// Step 5: Function call with callback
makeChai(drinkChai);

// 🔍 Samjho Simple Words Me

// makeChai → main kaam

// setTimeout → time lagne wala kaam

// callback() → “Ab agla kaam chalao”

// drinkChai → callback function






