import { faker } from "@faker-js/faker";

let products = "";

for (let i = 0; i < 8; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

console.log(1);
const productContainer = document.querySelector(".dev-product");
if (productContainer !== null) {
  productContainer.innerHTML = products;
}
