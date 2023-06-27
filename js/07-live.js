const slideItems = document.querySelectorAll(".live_items .live_item_");
let currentIndex = 0;
let slidePosition = 0;
let slideInterval;

function showSlide() {
  slideItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add("mainslider");
      item.style.display = "flex";
    } else {
      item.classList.remove("mainslider");
      item.style.display = "none";
    }
  });
}

function nextSlide() {
  currentIndex++;

  if (currentIndex >= slideItems.length) {
    currentIndex = 0;
  }

  slidePosition = currentIndex * 50;
  showSlide();
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

startSlideShow();

document
  .querySelector(".lives_container")
  .addEventListener("mouseover", stopSlideShow);

document
  .querySelector(".lives_container")
  .addEventListener("mouseleave", startSlideShow);

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

// const prevBtn = document.querySelector(".fa-chevron-left");
// const nextBtn = document.querySelector(".fa-chevron-right");
// const live_video = document.querySelectorAll(".hot_live_v");

// let liveCurrentIdx = 0;
// const liveSlideCount = live_video.length;
// const liveSlideWidth = live_video[0].offsetWidth;
// const liveSlideMargin = 10;
// const liveSlideMarginM = 15;

// prevBtn.addEventListener("click", () => {
//   if (liveCurrentIdx > 0) {
//     liveCurrentIdx--;
//     moveLiveSlide();
//     console.log(liveCurrentIdx);
//   }
// });

// nextBtn.addEventListener("click", () => {
//   if (window.innerWidth <= 768) {
//     if (liveCurrentIdx < liveSlideCount - 2) {
//       liveCurrentIdx++;
//       updateButtonState();
//       moveLiveSlideM();
//       console.log(liveCurrentIdx);
//     }
//   } else {
//     if (liveCurrentIdx < liveSlideCount - 4) {
//       liveCurrentIdx++;
//       updateButtonState();
//       moveLiveSlide();
//       console.log(liveCurrentIdx);
//     }
//   }
// });

// function moveLiveSlideM() {
//   const translateX = -(
//     liveCurrentIdx * (liveSlideWidth + liveSlideMarginM) +
//     liveSlideMarginM
//   );

//   live_video.forEach((e) => {
//     e.style.transform = `translateX(${translateX}px)`;
//   });
// }

// function moveLiveSlide() {
//   const translateX = -(
//     liveCurrentIdx * (liveSlideWidth + liveSlideMargin) +
//     liveSlideMargin
//   );

//   live_video.forEach((e) => {
//     e.style.transform = `translateX(${translateX}px)`;
//   });
// }

// function updateButtonState() {
//   if (liveCurrentIdx === liveSlideCount - 1) {
//     nextBtn.disabled = true;
//   } else {
//     nextBtn.disabled = false;
//   }
// }
