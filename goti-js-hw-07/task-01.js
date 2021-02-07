  
"use strict";

const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категория: ${categories.textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join(' ')
console.log(categoriesArray);

