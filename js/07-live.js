const foodbtn = document.querySelector(".foodbtn");
const babybtn = document.querySelector(".babybtn");
const mombtn = document.querySelector(".mombtn");

const live_food = document.querySelector(".live_wrap_food");
const live_baby = document.querySelector(".live_wrap_baby");
const live_mom = document.querySelector(".live_wrap_mom");

foodbtn.addEventListener("click", (e) => {
  e.preventDefault();
  live_food.style.display = "block";
  live_baby.style.display = "none";
  live_mom.style.display = "none";
});
babybtn.addEventListener("click", (e) => {
  e.preventDefault();
  live_food.style.display = "none";
  live_baby.style.display = "block";
  live_mom.style.display = "none";
});
mombtn.addEventListener("click", (e) => {
  e.preventDefault();
  live_food.style.display = "none";
  live_baby.style.display = "none";
  live_mom.style.display = "block";
});

const body = document.querySelector("body");
const popup = document.querySelector(".popup");
const schedulebtn = document.querySelector(".schedulebtn");
const popup_bg = document.querySelector(".popup-bg");
const closebtn = document.querySelector(".closebtn");

schedulebtn.addEventListener("click", () => {
  popup_bg.style.display = "block";
  popup.style.display = "block";
});
closebtn.addEventListener("click", () => {
  popup.style.display = "none";
  popup_bg.style.display = "none";
});

const btn = document.querySelectorAll(".btn");

btn.forEach((e) => {
  e.addEventListener("click", colorchange);
});

function colorchange(e) {
  let change = e.currentTarget.classList;

  if (change.contains("on")) {
    change.remove("on");
  } else {
    btn.forEach(function (e) {
      e.classList.remove("on");
    });
    change.add("on");
  }
}
// 슬라이더 설정

let container = document.querySelector(".hot_live_video_container");
let slideWrapper = document.querySelector(".hot_live_video_wrap");
let slides = document.querySelectorAll(".hot_live_video");
let slideWidth = slides[0].offsetWidth;
let slideCount = slides.length;
let currentIndex = 0;

let prevButton = document.querySelector(".fa-chevron-left");
let nextButton = document.querySelector(".fa-chevron-right");

let slidePerView = 4; // 한 번에 보여질 슬라이드 개수
let slidePerPage = Math.ceil(slideCount / slidePerView); // 페이지 수

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    slideWrapper.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < slideCount - slidePerView) {
    currentIndex++;
    slideWrapper.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }
});
