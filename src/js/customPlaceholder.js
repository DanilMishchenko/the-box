const refs = {
  placeholders: document.querySelectorAll('.form-placeholder'),
  inputs: document.querySelectorAll('.form-input'),
};

refs.placeholders.forEach(item => {
  item.addEventListener('click', inputFocus);
});
refs.inputs.forEach(item => {
  item.addEventListener('blur', inputBlur);
});

function inputFocus(e) {
  e.target.style.display = 'none';
  const input = this.closest('.input-wrapper').querySelector('.form-input');
  if (input) {
    input.focus();
  }
}

function inputBlur(e) {
  const input = e.target;
  const placeholder = input.parentElement.querySelector('.form-placeholder');
  if (input.value == '') {
    placeholder.style.display = 'flex';
  }
}
