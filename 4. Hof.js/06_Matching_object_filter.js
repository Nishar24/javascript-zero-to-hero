function whatIsInAName(collection, source) {

  // source object ki saari keys ko array me nikaal liya
  // example: { apple: 1, bat: 2 } → ["apple", "bat"]
  const sourceKeys = Object.keys(source);

  // collection array par filter lagaya.
  // filter sirf wahi objects ko rakhega jo condition pass kare.
  return collection.filter(obj => {

    // every() check karega ki
    // sourceKeys ki HAR key is object me exist karti ho
    // aur value bhi same ho
    return sourceKeys.every(key => {

      // obj ke paas wo key honi chahiye
      // aur us key ka value source ke value ke equal hona chahiye
      return obj.hasOwnProperty(key) && obj[key] === source[key];

    });
  });
}


// 👇 Test data:-
const data = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
];

const source = { last: "Capulet" };

// 👇 function call + console print
const result = whatIsInAName(data, source);
//console.log(result);


// Object.keys(source) → source ki keys nikalta hai

// filter() → array me se matching objects rakhta hai

// every() → ALL conditions true honi chahiye

// hasOwnProperty() → key exist karti hai ya nahi

// === → value bilkul same honi chahiye


//Real life example

// Socho:

// Tum HR ho 👨‍💼
// Tumhare paas candidates ki list hai (collection)
// Aur boss ne bola:

// “Mujhe sirf JavaScript aane wale aur 2 saal experience wale candidates chahiye”

// Function (whatIsInAName logic)
function whatIsInAName(collection, source) {
    const keys = Object.keys(source);

    return collection.filter(person =>
        keys.every(key =>
            person.hasOwnProperty(key) && person[key] === source[key]
        )
    );
}

// Data collection
const candidates = [
    { name: "Nishar", skill: "JavaScript", experience: 2 },
    { name: "Mudassir", skill: "JavaScript", experience: 3 },
    { name: "Ejaj", skill: "JavaScript", experience: 1 },
    { name: "Saddam", skill: "JavaScript", experience: 1 }
];

// Requirement (source)
const requirement = {
    skill: "JavaScript",
    experience: 2
};

// Function call + console output
console.log(whatIsInAName(candidates, requirement));



// 🧩 Simple Hindi me samjho

// collection = sab candidates

// source = boss ki condition

// filter = shortlist karna

// every() = saari conditions match honi chahiye

// 👉 Ek bhi condition fail = reject ❌ 



