// Do not change the code below.
const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}

// You may write your code here!
const currentColor = document.querySelector('#current-color');
const palette = document.querySelector('#palette');
const color = document.querySelectorAll('.color');
console.log(palette);
// console.log(currentColor);
// console.log(color);

palette.addEventListener('click', (event) => {
  currentColor.style.backgroundColor = event.target.style.backgroundColor;
});

const cell = document.querySelectorAll('.cell');
// console.log(cell);

cell.forEach((el) => {
  el.addEventListener('click', (cells) => {
    cells.target.style.backgroundColor = `${currentColor.style.backgroundColor}`;
  });
})

// cell.forEach(element=>{
//   element.setAttribute('style','width:'
// })
