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

// const container = document.querySelector(".hot_live_video_container");
// const hot_live_videos = document.querySelector(".hot_live_videos");
// const slides = document.querySelectorAll(".hot_live_v");
// const slideWidth = slides[0].offsetWidth;
// const slideCount = slides.length;
// let currentIndex = 0;
// const prevButton = document.querySelector(".fa-chevron-left");
// const nextButton = document.querySelector(".fa-chevron-right");

// const slidePerView = 4; // 한 번에 보여질 슬라이드 개수
// const slidePerPage = Math.ceil(slideCount / slidePerView); // 페이지 수

// nextButton.addEventListener("click", function () {
//   if (currentIndex === 0) {
//     currentIndex++;
//     hot_live_videos.style.transform = `translateX(-${
//       currentIndex * slideWidth * slidePerView + 60
//     }px)`;
//   }
// });
// prevButton.addEventListener("click", function () {
//   if (currentIndex === 1) {
//     currentIndex--;
//     hot_live_videos.style.transform = `translateX(+${
//       currentIndex * slideWidth * slidePerView
//     }px)`;
//   }
// });

function slideLayout() {
  const newSlide = document.querySelector(".hot_live_v");
  newSlide.forEach((item, index) => {
    item.style.left = moveAmt * index + "px";
  });
}
slideLayout();

function setSlide() {
  const ulMoveAmt = -slideCount * moveAmt + "px";
  slides.style.transform = `translateX('+ulMoveAmt +';
  slides.classList.add('animated))`;
}
setSlide();
