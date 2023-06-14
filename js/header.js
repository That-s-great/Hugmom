
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
const headerTitle = document.querySelector(".header_title_section h1");

window.addEventListener("load", () => {
  const url = window.location.href;
  const urlElements = url.split("/").filter((value) => { return value.includes(".html") });
  const urlEl = urlElements.toString();

  if(urlEl.includes("mall")) {
    headerTitle.innerText = "SHOP";
  } else if(urlEl.includes("live")) {
    headerTitle.innerText = "LIVE";
  } else if(urlEl.includes("login")) {
    headerTitle.innerText = "로그인"
  } else if(urlEl.includes("mypage")) {
    headerTitle.innerText = "마이페이지"
  } else if(urlEl.includes("cs")) {
    headerTitle.innerText = "고객센터"
  };
});