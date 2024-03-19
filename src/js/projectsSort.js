const items = document.querySelectorAll('.sort-item');

items[0].classList.add('active');

items.forEach(item => {
  item.addEventListener('click', toggle);
});

function toggle() {
  items.forEach(item => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}
