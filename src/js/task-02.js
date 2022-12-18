const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elements = document.querySelector('#ingredients');

const elementsList = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;

  return item;
});

elements.append(...elementsList);
