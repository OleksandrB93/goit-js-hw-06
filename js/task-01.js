// 'Завдання' 1

const itemAllEl = document.querySelectorAll(".item");
const findH2El = document.querySelectorAll("h2");
const findLiItem = document.querySelectorAll("ul ul");

function findCategories() {
  // I. Порахує і виведе в консоль кількість категорій в
  // ul#categories, тобто елементів li.item.
  console.log("Number of categories:", itemAllEl.length);
  console.log("\n");

  // II. Для кожного элемента li.item у спику ul#categories,
  // знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

  for (let i = 0; i < findH2El.length; i++) {
    console.log("Category: ", findH2El[i].textContent);
    console.log("Element:", findLiItem[i].children.length);
    console.log("\n");
  }
}

findCategories();
