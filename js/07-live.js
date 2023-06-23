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

const container = document.querySelector(".hot_live_video_container");
const slides = document.querySelector(".hot_live_videos");
const slide = document.querySelectorAll(".hot_live_v");
const slideWidth = slide[0].offsetWidth;
const slidegap = 20;
const slideCount = slide.length;
let currentIndex = 0;
const prevButton = document.querySelector(".fa-chevron-left");
const nextButton = document.querySelector(".fa-chevron-right");

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
}
makeClone();

function updateWidth() {
  let currentSlides = document.querySelectorAll(".hot_live_v");
  let newSlideCount = currentSlides.length;
  let newWidth = (slideWidth + slidegap) * newSlideCount + "px";
  slides.style.width = newWidth;
}
function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slidegap) * slideCount;
  slides.style.transform = `translateX( ${initialTranslateValue}px)`;
}

nextButton.addEventListener("click", function () {
  if (currentIndex === 0) {
    currentIndex++;
    hot_live_videos.style.transform = `translateX(-${
      currentIndex * slideWidth * newSlideCount + 60
    }px)`;
  }
});
prevButton.addEventListener("click", function () {
  if (currentIndex === 1) {
    currentIndex--;
    hot_live_videos.style.transform = `translateX(+${
      currentIndex * slideWidth * newSlideCount
    }px)`;
  }
});

// function slideLayout() {
//   const newSlide = document.querySelector(".hot_live_v");
//   newSlide.forEach((item, index) => {
//     item.style.left = moveAmt * index + "px";
//   });
// }
// slideLayout();

// function setSlide() {
//   const ulMoveAmt = -slideCount * moveAmt + "px";
//   slides.style.transform = `translateX('+ulMoveAmt +';
//   slides.classList.add('animated))`;
// }
// setSlide();
