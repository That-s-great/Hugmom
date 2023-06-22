const heart = document.querySelector(".fa-heart");
const comment = document.querySelector(".fa-comment-dots");
const live_comments = document.querySelector(".live_comments");
const benefitbtn = document.querySelector(".fa-gift");
const buyboxclose = document.querySelector(".closeline");
const benefit = document.querySelector(".benefit");
heart.addEventListener("click", () => {
  heart.classList.toggle("like");
});
comment.addEventListener("click", () => {
  live_comments.classList.toggle("comment_show");
});

benefitbtn.addEventListener("click", () => {
  benefit.classList.add("benefit_open");
});

buyboxclose.addEventListener("click", () => {
  benefit.classList.remove("benefit_open");
});

const chat = document.querySelector("#comment_chat");
const send = document.querySelector(".fa-paper-plane");

send.addEventListener("click", () => {
  const commentdiv = document.createElement("div");
  commentdiv.className = "live_comment";
  const idp = document.createElement("p");
  idp.className = "id";
  idp.textContent = "허그맘 회원";
  const qid = document.createElement("p");
  qid.className = "live_q";
  qid.textContent = chat.value;

  commentdiv.appendChild(idp);
  commentdiv.appendChild(qid);
  live_comments.appendChild(commentdiv);
});
