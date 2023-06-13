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
  // 추천순, 신상품순, 판매순 클릭시 순서 바꾸기
  const itemDiv = document.querySelectorAll(".user_mall_item")[0];
  const itemDiv2 = document.querySelectorAll(".user_mall_item")[1];
  const items = itemDiv.parentNode;
  items.insertBefore(itemDiv, items.childNodes[8]);
  items.insertBefore(itemDiv2, items.firstChild);
  console.log(itemDiv);
  console.log(itemDiv2);
  console.log(items);
});

newProductBtn.addEventListener("click", () => {
    // 추천순, 신상품순, 판매순 클릭시 순서 바꾸기
    const itemDiv = document.querySelectorAll(".user_mall_item")[3];
    const itemDiv2 = document.querySelectorAll(".user_mall_item")[0];
    const items = itemDiv.parentNode;
    items.insertBefore(itemDiv, items.firstChild);
    items.insertBefore(itemDiv2, items.childNodes[5]);
});

salesBtn.addEventListener("click", () => {
  salesBtn.classList.add("order_checked");
  newProductBtn.classList.remove("order_checked");
  recommendBtn.classList.remove("order_checked");
});




  function newItemOrder() {
    newProductBtn.classList.add("order_checked");
    recommendBtn.classList.remove("order_checked");
    salesBtn.classList.remove("order_checked");
  }
  function recommendItemOrder() {
    recommendBtn.classList.add("order_checked");
    newProductBtn.classList.remove("order_checked");
    salesBtn.classList.remove("order_checked");
  }