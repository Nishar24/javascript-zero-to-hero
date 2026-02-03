// 🧺 Kahani: Kapde Fold Karne wali Machine (Steamroller)

// Socho ek steamroller machine hai 🧺
// Uska kaam simple hai:

// “Kapdon ki basket me chahe
// kapde ke andar kapde ho
// bag ke andar bag ho
// box ke andar box ho

// 👉 mujhe bas saare kapde ek seedhi line me chahiye”

// 🎒 Basket (Input array)
// [1, [2], [3, [[4]]]]


// Machine bolegi:

// “Mujhe nesting se koi lena-dena nahi
// jo bhi kapda mile, bahar nikaal do”

// 👕 Final result (Flattened array)
// [1, 2, 3, 4]

// 🧠 Rule (machine ka dimaag)

// Agar item array hai → usko khol do 🔓

// Agar item array nahi hai → seedha rakh do ✅

// Ye kaam jitni depth ho utni baar repeat karo

// 👉 Isko bolte hain recursion
// (matlab: function khud ko dubara call karta hai)

function steamrollArray(arr) {

  // 🟢 Ye hamara final basket hai.
  // jisme saare kapde seedhe aa jayenge
  let result = [];

  // 🟢 Har item ko ek-ek karke dekhte hain
  for (let item of arr) {

    // 🟢 Agar item khud ek basket (array) hai
    if (Array.isArray(item)) {

      // 👉 To machine us basket ko bhi steamroll karegi
      // aur jo kapde niklenge unko result me daal degi
      result.push(...steamrollArray(item));

    } else {
      // 🟢 Agar item normal kapda / object / number / string hai
      // to seedha result me daal do
      result.push(item);
    }
  }

  // 🟢 Saare kapde ek line me mil gaye
  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
// ["a", "b"]

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [1, 2, 3, 4]

console.log(steamrollArray([1, [], [3, [[4]]]]));
// [1, 3, 4]

console.log(steamrollArray([1, {}, [3, [[4]]]]));
// [1, {}, 3, 4]

console.log(steamrollArray(["baz", [1, 2], {}]));
// ["baz", 1, 2, {}]


// 🏢 Kahani: Office Clerk aur Files

// Socho tum ek office clerk ho 📂

// Tumhare paas files aati hain:

// kabhi folder ke andar folder

// kabhi folder ke andar loose papers

// kabhi normal file / object

// Boss bolta hai 👨‍💼:

// “Mujhe folder ka structure nahi chahiye
// bas saare papers ek hi pile me chahiye”

// 👉 Tumhara kaam:

// Folder mile → khol do

// Paper / object mile → seedha pile me rakh do

// Ye kaam jitni depth ho utni baar repeat karo

// Isi process ko bolte hain Deep Flattening
// aur function ka naam hai steamrollArray 🚜

function steamrollArray(arr) {

  // 🟢 Ye final pile hai
  // jisme boss ko saare papers chahiye
  let result = [];

  // 🟢 Clerk ek-ek item check karta hai
  for (let item of arr) {

    // 🟢 Agar item ek folder hai (array)
    if (Array.isArray(item)) {

      // 👉 Folder ke andar aur cheezein ho sakti hain
      // Isliye clerk folder ko bhi khol deta hai
      // aur jo papers milte hain unko pile me daal deta hai
      result.push(...steamrollArray(item));

    } else {
      // 🟢 Agar item folder nahi hai
      // (file / object / number / string)
      // to seedha pile me rakh do
      result.push(item);
    }
  }

  // 🟢 Saare folders khul gaye
  // aur boss ko ek hi pile mil gayi
  return result;
}
console.log(steamrollArray([[["a"]], [["b"]]]));
// ["a", "b"]

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [1, 2, 3, 4]

console.log(steamrollArray([1, [], [3, [[4]]]]));
// [1, 3, 4]

console.log(steamrollArray([1, {}, [3, [[4]]]]));
// [1, {}, 3, 4]

console.log(steamrollArray(["baz", [1, 2], {}]));
// ["baz", 1, 2, {}]


// 🧠 Chhota dry run (samajhne ke liye)

// Input:

// ["Report", ["Bills", ["Jan", "Feb"]], {}]


// Process:

// "Report" → rakh do
// ["Bills", [...]] → khol do
// "Bills" → rakh do
// ["Jan","Feb"] → khol do
// "Jan" → rakh do
// "Feb" → rakh do
// {} → rakh do


// Final:

// ["Report", "Bills", "Jan", "Feb", {}]

// 🔑 Yaad rakhne ka MANTRA

// Folder mile → khol do
// Folder na mile → rakh do

// Ye kaam tab tak repeat karo jab tak folder milta rahe
