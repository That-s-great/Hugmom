/* Mobile ver. header Open & close */
const hedaerMenuList = document.querySelector(".header_menu_list");
const menuToggleBtn = document.querySelector(".menu_toggle_btn");
// 메뉴 토글버튼 클릭 열기, 닫기
menuToggleBtn.addEventListener("click", () => {
  if (hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.add("menuopen");
  }
});
// 메뉴 닫기 X버튼 클릭시 닫기
const menuCloseBtn = document.querySelector(".mobile_close_menu_btn");

menuCloseBtn.addEventListener("click", () => {
  if (hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.add("menuopen");
  }
});
//메인영역 클릭해도 메뉴 닫기
document.querySelector("main").addEventListener("click", () => {
  if (hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  }
});

/* Mobile ver. Header Tiltle-Text 변경 */
const headerTitle = document.querySelector(".header_title_section h1");

window.addEventListener("load", () => {
  const url = window.location.href;
  const urlElements = url.split("/").filter((value) => {
    return value.includes(".html");
  });
  const urlEl = urlElements.toString();

  if (urlEl.includes("mall")) {
    headerTitle.innerText = "SHOP";
  } else if (urlEl.includes("live")) {
    headerTitle.innerText = "LIVE";
  } else if (urlEl.includes("login")) {
    headerTitle.innerText = "로그인";
  } else if (urlEl.includes("mypage")) {
    headerTitle.innerText = "마이페이지";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  } else if (urlEl.includes("cs")) {
    headerTitle.innerText = "고객센터";
    headerTitle.style.fontSize = "21px";
    headerTitle.style.fontFamily = "var(--kor)";
  }
});
