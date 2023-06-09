const addCartIconBtn = document.querySelectorAll(".add_cart_icon_btn");

addCartIconBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("선택하신 상품이 장바구니에 담겼습니다");
  });
});

const recommendBtn = document.querySelector("#recommend_btn");
const newProductBtn = document.querySelector("#newProdut_btn");
const salesBtn = document.querySelector("#sales_btn");

recommendBtn.addEventListener("click", () => {
  recommendBtn.classList.add("order_checked");
  newProductBtn.classList.remove("order_checked");
  salesBtn.classList.remove("order_checked");
});
newProductBtn.addEventListener("click", () => {
  newProductBtn.classList.add("order_checked");
  recommendBtn.classList.remove("order_checked");
  salesBtn.classList.remove("order_checked");
});
salesBtn.addEventListener("click", () => {
  salesBtn.classList.add("order_checked");
  newProductBtn.classList.remove("order_checked");
  recommendBtn.classList.remove("order_checked");
});