const comment = document.querySelectorAll(".comment");

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

const lock = document.querySelectorAll(".lock");

lock.forEach((e) => {
  e.addEventListener("click", () => {
    alert("비밀글입니다.");
  });
});
