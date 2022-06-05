// brojevi da se upisu od 0 do 255 u rgb(broj,broj,broj)

let generateColor = document.getElementById("generate-color");
let bgColor = document.getElementById("bg-color");
let span = document.getElementById("color");

generateColor.addEventListener("click", () => {
  let a = Math.round(Math.random() *256) // Od math.floor pravi INTEGER
  let b = Math.round(Math.random() *256)
  let c = Math.round(Math.random() *256)
  bgColor.style.background = `rgb(${a},${b},${c})`;
  span.innerHTML = `rgb(${a},${b},${c})`;
});


