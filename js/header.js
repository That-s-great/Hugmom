const shop = document.querySelector(".header_menu.shop");
const shopMalls = document.querySelector(".shop_malls");

shop.addEventListener("mouseenter", () => {
  shopMalls.classList.add("active");
});
shop.addEventListener("mouseleave", () => {
  shopMalls.classList.remove("active");
});


/* Mobile ver. header */
const hedaerMenuList = document.querySelector(".header_menu_list");
const menuToggleBtn = document.querySelector(".menu_toggle_btn");

menuToggleBtn.addEventListener("click", () => {
  if(hedaerMenuList.classList.contains("menuopen") === true) {
    hedaerMenuList.classList.remove("menuopen");
  } else {
    hedaerMenuList.classList.remove("menuopen");
  }
});

function menuOpen() {
  hedaerMenuList.style.left = "0px";
}
const menuCloseBtn = document.querySelector(".mobile_close_menu_btn");

function menuClose() {
  hedaerMenuList.style.left = "-300px"
}