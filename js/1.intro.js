// Banner Slides
const slideWrapper = document.querySelector(
  ".intro_page_banner_section_slide_wrapper"
);
const slides = document.querySelectorAll(".intro_page_banner_section_slide");
const prevBtn = document.querySelector(".banner_slide_prev_btn");
const nextBtn = document.querySelector(".banner_slide_next_btn");
const indexNumber = document.querySelector(".index_number");
const indexLength = document.querySelector(".index_length");

let currentIdx = 0;
let slideCount = slides.length;
let slideWidth = slides[0].offsetWidth;
let slideInterval;

indexLength.innerText = slides.length;
+1;

function startSlideInterval() {
  slideInterval = setInterval(() => {
    moveSlides(1);
  }, 3000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

prevBtn.addEventListener("click", () => {
  moveSlides(-1);
  stopSlideInterval();
});

nextBtn.addEventListener("click", () => {
  moveSlides(1);
  stopSlideInterval();
});

function moveSlides(direction) {
  currentIdx += direction;

  if (currentIdx < 0) {
    currentIdx = slideCount - 1;
  } else if (currentIdx >= slideCount) {
    currentIdx = 0;
  }

  const offset = -currentIdx * slideWidth;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}px)`;
  });

  indexNumber.innerText = currentIdx + 1;

  stopSlideInterval();
  startSlideInterval();
}

function handleMouseOver() {
  stopSlideInterval();
}

function handleMouseOut() {
  startSlideInterval();
}

slideWrapper.addEventListener("mouseover", handleMouseOver);
slideWrapper.addEventListener("mouseout", handleMouseOut);

startSlideInterval();

// 스크롤 이벤트를 감지하는 함수
function scrollHandler() {
  // 보여질 요소를 선택합니다
  let elementsToShow = document.querySelectorAll(
    ".intro_page_introduce_article"
  );

  // 각 요소에 대해 확인합니다
  for (let i = 0; i < elementsToShow.length; i++) {
    let element = elementsToShow[i];
    // 요소가 보이는지 확인합니다
    if (isElementInViewport(element)) {
      // 보이는 요소에 클래스를 추가하여 나타나도록 설정합니다
      element.classList.add("show");
      element.style.opacity = 1; // 불투명도를 1로 변경하여 보이게 설정합니다
    } else {
      element.style.opacity = 0; // 불투명도를 0으로 변경하여 숨깁니다
    }
  }
}

// 요소가 보이는지 확인하는 함수
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 스크롤 이벤트에 scrollHandler 함수를 연결합니다
window.addEventListener("scroll", scrollHandler);

// 초기에 한 번 호출하여 현재 보이는 요소를 확인합니다
scrollHandler();

// Live Slides

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
