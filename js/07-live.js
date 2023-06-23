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

  btn.forEach(function (e) {
    e.classList.remove("on");
  });
  change.add("on");
}

const livePrevBtn = document.querySelector(".live_slide_prev_btn");
const liveNextBtn = document.querySelector(".live_slide_next_btn");
const liveSlideWrapper = document.querySelector(".live_broadcast_items");
const liveSlides = document.querySelectorAll(".live_item");

let liveCurrentIdx = 0;
const liveSlideCount = liveSlides.length;
const liveSlideWidth = liveSlides[0].offsetWidth;
const liveSlideMargin = 20;

livePrevBtn.addEventListener("click", () => {
  if (liveCurrentIdx > 0) {
    liveCurrentIdx--;
    moveLiveSlide();
  }
});

liveNextBtn.addEventListener("click", () => {
  if (liveCurrentIdx < liveSlideCount - 1) {
    liveCurrentIdx++;
    moveLiveSlide();
  }
});

function moveLiveSlide() {
  const translateX = -liveCurrentIdx * (liveSlideWidth + liveSlideMargin);
  liveSlides.forEach((liveSlide) => {
    liveSlide.style.transform = `translateX(${translateX}px)`;
  });
}
