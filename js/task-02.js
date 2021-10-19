const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = document.querySelector('#ingredients')

   const listEl = ingredients.map((ingredient) => {

    const itemListEl = document.createElement('li')
    itemListEl.classList.add('item')
    itemListEl.textContent = ingredient
     return itemListEl
   })

itemEl.append(... listEl)
    
  console.log(itemEl)



