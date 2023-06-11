const hedaerMenuList = document.querySelector(".header_menu_list");

function menuOpen() {
  hedaerMenuList.style.left = "0px";
}

const menuCloseBtn = document.querySelector(".mobile_close_menu_btn");

function menuClose() {
  hedaerMenuList.style.left = "-300px"
}