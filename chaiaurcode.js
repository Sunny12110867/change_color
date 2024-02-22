const sel = document.querySelectorAll('.button');
const bdy = document.querySelector('body');

sel.forEach((element) => {
  element.addEventListener('click', (x) => {
    bdy.style.backgroundColor = `${x.target.id}`;
  });
});
