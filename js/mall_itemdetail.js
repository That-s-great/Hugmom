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
  console.log(comment_content);

  if (comment_content.contains("open")) {
    comment_content.remove("open");
  } else {
    comment.forEach(function (e) {
      e.classList.remove("open");
    });
    comment_content.add("open");
  }
}
