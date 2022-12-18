function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};

let boxSize = 30;

function createBoxes(amount) {
  let boxes = '';

  for (let i = 0; i < amount; i += 1) {
    boxes += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}; "></div>`;
    boxSize += 10;
  }
  refs.boxesEl.insertAdjacentHTML('afterbegin', boxes);
}

refs.btnCreate.addEventListener('click', () => createBoxes(refs.inputEl.value));

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}
refs.btnDestroy.addEventListener('click', () => destroyBoxes());
