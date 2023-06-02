const minus = document.querySelector(".fa-minus");
const plus = document.querySelector(".fa-plus");
const price = document.querySelector(".price");
let i = 1;
minus.addEventListener("click", () => {
  const num = document.querySelector(".num");
  i--;
  num.innerText = i;
});
plus.addEventListener("click", () => {
  const num = document.querySelector(".num");
  const total = document.querySelector(".total");

  i++;
  num.innerText = i;
  total.innerText = parseInt(price.innerText) * i;
});
