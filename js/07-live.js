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
  foodbtn.style.color = "#72981e";
});
babybtn.addEventListener("click", (e) => {
  e.preventDefault();
  live_food.style.display = "none";
  live_baby.style.display = "block";
  live_mom.style.display = "none";
  foodbtn.style.color = "#72981e";
});
mombtn.addEventListener("click", (e) => {
  e.preventDefault();
  live_food.style.display = "none";
  live_baby.style.display = "none";
  live_mom.style.display = "block";
  foodbtn.style.color = "#72981e";
});
