
/* Mobile ver. header Open & close */
const hedaerMenuList = document.querySelector(".header_menu_list");
const menuToggleBtn = document.querySelector(".menu_toggle_btn");

menuToggleBtn.addEventListener("click", () => {
  if(hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.add("menuopen");
  }
});

const menuCloseBtn = document.querySelector(".mobile_close_menu_btn");

menuCloseBtn.addEventListener("click", () => {
  if(hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.add("menuopen");
  }
})

/* Mobile ver. Header Tiltle-Text 변경 */
const headerTitle = document.querySelector(".header_title_section");
const url = window.location.href;
const urlEl = url.split("/").filter((value) => { return value.includes("-") });

console.log(urlEl)
// parameters.forEach((parameter) => {
//   const parameterList = parameter.split("=");
//   const key = parameterList[0];
//   const value = decodeURIComponent(parameterList[1]); //디코딩메서드
//   hashes[key] = value;
// });