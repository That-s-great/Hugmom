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
const close = document.querySelector(".fa-xmark");

schedulebtn.addEventListener("click", () => {
  popup.style.display = "block";
});
close.addEventListener("click", (e) => {
  popup.style.display = "none";
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

const slideWrap = document.querySelector(".hot_live_videos");
// let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");

const slide = document.querySelectorAll(".hot_live_v");
// const maxSlide = slideItems.length;
// console.log(maxSlide);

// let currSlide = 1;

// function nextMove() {
//   currSlide++;

//   if (currSlide <= maxSlide) {
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//   } else {
//     maxcurrSlide--;
//   }
// }
// function prevMove() {
//   currSlide--;
//   // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
//   if (currSlide > 0) {
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//     // 슬라이드 이동 시 현재 활성화된 pagination 변경
//   } else {
//     currSlide++;
//   }
// }
// function nextMove() {
//   currSlide++;
//   // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
//   if (currSlide <= maxSlide) {
//     // 슬라이드를 이동시키기 위한 offset 계산
//     const offset = slideWidth * (currSlide - 1);
//     // 각 슬라이드 아이템의 left에 offset 적용
//     slideItems.forEach((i) => {
//       i.setAttribute("style", `left: ${-offset}px`);
//     });
//   } else {
//     currSlide--;
//   }
// }
// prevBtn.addEventListener("click", () => {
//   // 이전 버튼 누를 경우 현재 슬라이드를 변경
//   prevMove();
// });
// // 버튼 엘리먼트에 클릭 이벤트 추가하기
// nextBtn.addEventListener("click", () => {
//   // 이후 버튼 누를 경우 현재 슬라이드를 변경
//   nextMove();
// });

// const firstEl = slideWrap.firstElementChild;
// console.log(firstEl);
// const lastEl = slideWrap.lastElementChild;
// console.log(lastEl);
// let cloneFirst = firstEl.cloneNode(true);
// let cloneLast = lastEl.cloneNode(true);

// slideWrap.appendChild(cloneFirst);
// slideWrap.insertBefore(cloneLast, slideWrap.firstElementChild);

// slideWrap.style.width = `${slide.length * 100}%`;
// // slideWrap.style.left = "-100%";

// let current = 0;
// nextBtn.addEventListener("click", function () {
//   if (current < slide.length - 1) {
//     current++;
//     console.log(current);
//     slideWrap.style.left = `-${100 * current + 1}%`;
//   } else {
//     current++;
//     slideWrap.style.left = `-${100 * current}%`;
//     current = 0;
//     console.log(current);
//   }
// });
// prevBtn.addEventListener("click", function () {
//   if (current > 0) {
//     current--;
//     slideWrap.style.left = `-${100 * (current + 1)}%`;
//     console.log(current);
//   } else {
//     slideWrap.style.left = "0%";
//     current = slide.length - 1;
//     console.log(current);
//   }
// });
