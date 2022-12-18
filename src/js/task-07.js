const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};
refs.inputEl.addEventListener('input', fontValue => {
  refs.textEl.style.fontSize = `${fontValue.target.value}px`;
});
