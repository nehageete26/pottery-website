// Dynamic product data
const products = [
  { name: "Clay Vase", price: "₹999", image: "clay vase.jpg" },
  { name: "Tea Cup Set", price: "₹599", image: "tea_set.jpg" },
  { name: "Decor Bowl", price: "₹799", image: "bowl_decor.jpg" },
  { name: "Handmade vase", price: "₹699", image: "third.jpg" },
  { name: "Rustic Plate", price: "₹499", image: "bowl.jpg" }
];

// Render products dynamically
const productList = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.price}</p>
  `;
  productList.appendChild(card);
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("response").textContent = "✅ Thank you! We'll get back to you soon.";
    this.reset();
  } else {
    document.getElementById("response").textContent = "⚠ Please fill all fields.";
  }
});