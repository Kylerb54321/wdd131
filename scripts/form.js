const products = ["Tablet", "Phone", "Laptop", "Monitor"];
const select = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product;
  option.textContent = product;
  select.appendChild(option);
});

document.getElementById("lastModified").textContent = document.lastModified;
