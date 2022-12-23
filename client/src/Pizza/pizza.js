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
  const numToppings = Math.floor(
    Math.random() * (availableToppings.length + 1)
  );
  const sauce = getRandomSauce();
  const toppings = getRandomToppings(numToppings);
  const pizzaName = generatePizzaName(sauce, toppings);
  console.log(
    `Your pizza, "${pizzaName}", has ${sauce} sauce and the following toppings: ${toppings.join(
      ", "
    )}.`
  );
}

function generatePizzaName(sauce, toppings) {
  let pizzaName = "";
  if (sauce === "marinara") {
    pizzaName += "Marinara";
  } else if (sauce === "alfredo") {
    pizzaName += "Alfredo";
  } else if (sauce === "pesto") {
    pizzaName += "Pesto";
  } else if (sauce === "bbq") {
    pizzaName += "BBQ";
  } else if (sauce === "garlic oil") {
    pizzaName += "Garlic Oil";
  }
  if (toppings.includes("pepperoni")) {
    pizzaName += " Pepperoni";
  }
  if (toppings.includes("sausage")) {
    pizzaName += " Sausage";
  }
  if (toppings.includes("mushrooms")) {
    pizzaName += " Mushroom";
  }
  if (toppings.includes("onions")) {
    pizzaName += " Onion";
  }
  if (toppings.includes("bell peppers")) {
    pizzaName += " Bell Pepper";
  }
  if (toppings.includes("olives")) {
    pizzaName += " Olive";
  }
  if (toppings.includes("pineapple")) {
    pizzaName += " Pineapple";
  }
  if (toppings.includes("spinach")) {
    pizzaName += " Spinach";
  }
  if (toppings.includes("tomatoes")) {
    pizzaName += " Tomato";
  }
  return pizzaName;
}

generatePizza();

// Create checkboxes for each topping
const toppingsContainer = document.createElement("div");
toppings.forEach((topping) => {
  const toppingCheckbox = document.createElement("input");
  toppingCheckbox.type = "checkbox";
  toppingCheckbox.value = topping;
  toppingCheckbox.addEventListener("change", () => {
    if (toppingCheckbox.checked) {
      availableToppings.push(topping);
    } else {
      availableToppings = availableToppings.filter((t) => t !== topping);
    }
  });
  toppingsContainer.appendChild(toppingCheckbox);

  const toppingLabel = document.createElement("label");
  toppingLabel.textContent = topping;
  toppingsContainer.appendChild(toppingLabel);

  toppingsContainer.appendChild(document.createElement("br"));
});
document.body.appendChild(toppingsContainer);

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
