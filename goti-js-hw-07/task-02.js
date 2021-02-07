'use strict'
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
let ulList = document.getElementById("ingredients");
const liIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement('li')
  items.innerHTML = ingredient
  console.log(items)
})
  

