const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul");

const makeListEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");

    return itemEl;
  });
};

const elements = makeListEl(ingredients);
listEl.append(...elements);

// const makeUlList = ingredients.forEach((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   listEl.append(itemEl);
// });

// listEl();

// for (let i = 0; i < ingredients.length; i++) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredients[i];
//   itemEl.classList.add("item");
//   listEl.append(itemEl);
// }
