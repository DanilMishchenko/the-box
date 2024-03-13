const refs = {
  selectHeader: document.querySelector('.select__header'),
  selectCurrent: document.querySelector('.select__current'),
  selectItem: document.querySelectorAll('.select__item'),
};

refs.selectHeader.addEventListener('click', selectToggle);
refs.selectItem.forEach(item => {
  item.addEventListener('click', selectChoose);
});
document.addEventListener('click', handleClickOutside);

function selectToggle() {
  refs.selectHeader.parentElement.classList.toggle('is-active');
}

function selectChoose() {
  const currentText = this.textContent;

  refs.selectCurrent.value = currentText.trim();
  if (!refs.selectCurrent.value == '') {
    const placeholder = refs.selectHeader.querySelector('.select-placeholder');
    placeholder.style.display = 'none';
  }
}

function handleClickOutside(e) {
  const isClickInside = refs.selectHeader.contains(e.target);
  if (
    !isClickInside &&
    refs.selectHeader.parentElement.classList.contains('is-active')
  ) {
    refs.selectHeader.parentElement.classList.remove('is-active');
  }
}
