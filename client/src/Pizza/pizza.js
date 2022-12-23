import React from "react";

const sauces = ["marinara", "alfredo", "pesto", "bbq", "garlic oil"];
const toppings = [
  "pepperoni",
  "sausage",
  "mushrooms",
  "onions",
  "bell peppers",
  "olives",
  "pineapple",
  "spinach",
  "tomatoes",
];

function getRandomSauce() {
  return sauces[Math.floor(Math.random() * sauces.length)];
}

function getRandomToppings(numToppings) {
  const toppingsArray = [];
  for (let i = 0; i < numToppings; i++) {
    toppingsArray.push(toppings[Math.floor(Math.random() * toppings.length)]);
  }
  return toppingsArray;
}

function generatePizza() {
  const numToppings = Math.floor(Math.random() * (toppings.length + 1));
  const sauce = getRandomSauce();
  const toppings = getRandomToppings(numToppings);
  console.log(
    `Your pizza has ${sauce} sauce and the following toppings: ${toppings.join(
      ", "
    )}.`
  );
}

generatePizza();

const sauceButton = document.createElement("button");
sauceButton.textContent = "Generate random sauce";
sauceButton.addEventListener("click", () => {
  console.log(`Your sauce is: ${getRandomSauce()}`);
});
document.body.appendChild(sauceButton);

const toppingsButton = document.createElement("button");
toppingsButton.textContent = "Generate random toppings";
toppingsButton.addEventListener("click", () => {
  console.log(`Your toppings are: ${getRandomToppings(3).join(", ")}`);
});
document.body.appendChild(toppingsButton);

function Pizza() {
  return <div>pizza</div>;
}

export default Pizza;
