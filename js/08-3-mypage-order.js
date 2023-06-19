// 08-3-mypage-order
// 주문종류 & 조회기간 버튼
const ordertypeSpans = document.querySelectorAll('.order_type .btn span');
const periodSpans = document.querySelectorAll('.period span');
// 조회 버튼
const orderChkBtn = document.querySelector('.orderChk_btn');
// 조회 시 뜨는 주문내역 리스트
const historyBox = document.querySelector('.mypage_shoppingInfo_order_history');


ordertypeSpans.forEach(span => {
  span.addEventListener('click', () => {
    ordertypeSpans.forEach(span => {
      span.classList.remove('selected_btn');
    });
    span.classList.add('selected_btn');
  });
});

periodSpans.forEach(span => {
  span.addEventListener('click', () => {
    periodSpans.forEach(span => {
      span.classList.remove('selected_btn');
    });
    span.classList.add('selected_btn');
  });
});



