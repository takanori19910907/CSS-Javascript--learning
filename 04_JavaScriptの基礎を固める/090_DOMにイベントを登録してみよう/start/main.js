const btn = document.querySelector('#btn');

function changeFontColor() {
  const str = document.querySelector('.sub-title');
  str.style.color = "red"
};

btn.addEventListener('click', changeFontColor);