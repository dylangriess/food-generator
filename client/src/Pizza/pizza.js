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

function Pizza() {
  return <div>pizza</div>;
}

export default Pizza;
