const minus = document.querySelector(".fa-minus");
const plus = document.querySelector(".fa-plus");
const price = document.querySelector(".price");
const num = document.querySelector(".num");
const total = document.querySelector(".total");
const comment = document.querySelectorAll(".comment");

const pricecal = price.innerText.split(",").join("");
let i = 1;
minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    num.innerText = i;
    total.innerText = (parseInt(pricecal) * i).toLocaleString();
  } else {
    minus.setAttribute("disabled", "disabled");
  }
});
plus.addEventListener("click", () => {
  i++;
  num.innerText = i;
  total.innerText = (parseInt(pricecal) * i).toLocaleString();
});

comment.forEach(function (e) {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  let comment_content = e.currentTarget.classList;

  if (comment_content.contains("open")) {
    comment_content.remove("open");
  } else {
    comment.forEach(function (e) {
      e.classList.remove("open");
    });
    comment_content.add("open");
  }
}

const title_sub = document.querySelectorAll(".title_sub");
const qcount = document.querySelector(".qcount");
qcount.innerText = title_sub.length;

const view = document.querySelectorAll(".view");

view.forEach((e) => {
  e.addEventListener("click", () => {
    view.innerHTML = `<h1>안녕</h1>`;
  });
});
