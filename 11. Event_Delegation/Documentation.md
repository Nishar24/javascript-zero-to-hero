🔁 Event Delegation (JavaScript)

Event Delegation ek technique hai jisme hum multiple child elements par alag-alag event listener lagane ke bajaye, unke parent element par ek hi event listener lagate hain — aur event bubbling ka use karke child ko handle karte hain.

Ye method efficient hota hai, especially jab bahut saare dynamic elements ho.

📌 Event Bubbling Kya Hota Hai?

Jab kisi child element par event trigger hota hai (jaise click), to wo event:

➡️ Child se start hota hai
⬆️ Phir parent
⬆️ Phir grandparent
⬆️ Aur aise hi document tak bubble karta hai

Is process ko event bubbling kehte hain.

🧠 Without Event Delegation (Inefficient Way)
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
const items = document.querySelectorAll("li");

items.forEach(item => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});

❌ Problem:

Har li par alag listener.

Agar new li dynamically add kiya to us par event kaam nahi karega.

🚀 With Event Delegation (Efficient Way)
const list = document.getElementById("list");

list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

✅ Yaha:

Sirf parent (ul) par event listener laga.

event.target se pata chalta hai kis li par click hua.

Dynamically add hone wale li par bhi automatically kaam karega.

🔍 Key Concepts
Concept	Meaning
event.target	Jis element par actual event hua
event.currentTarget	Jis element par listener laga hai
Event Bubbling	Event child se parent tak propagate hota hai
⚡ Real-Life Example (Dynamic Button List)
document.getElementById("container").addEventListener("click", function(e) {
  if (e.target.classList.contains("btn")) {
    alert("Button clicked!");
  }
});

Yaha chahe 100 buttons ho ya dynamically add ho — sirf ek listener kaafi hai.

🎯 Advantages

✅ Memory efficient

✅ Dynamic elements support

✅ Cleaner code

✅ Performance better

❗ Important Note

Agar event bubbling rokna ho to:

event.stopPropagation();

🧑‍💻 Interview Me Kaise Explain Kare?

Event Delegation is a pattern in JavaScript where we attach a single event listener to a parent element and use event bubbling to handle events on its child elements. It improves performance and works well with dynamically added elements.