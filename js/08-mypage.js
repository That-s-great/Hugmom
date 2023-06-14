// 08-2-mypage-edit(1)
const inputPw = document.querySelector('.mypage_userInfo_identification .inputPw');
const inputCode = document.querySelector('.mypage_userInfo_identification .inputCode');
const errorPw = document.querySelector('.mypage_userInfo_identification .errorM_pw');
const errorCode = document.querySelector('.mypage_userInfo_identification .errorM_code');
const identificationBtn = document.querySelector('.mypage_userInfo_identification .identification_btn');


// 만약 비밀번호와 임산부코드가 정해져있다면 정의하기
// let userPw = hugmom123;
// let userCode = AAAAAA;

inputPw.addEventListener('input', () => {
  if(inputPw.value === '') {
    errorPw.style.display = 'inline-block';
  } else {
    errorPw.style.display = 'none';
  }
});

inputCode.addEventListener('input', () => {
  if(inputCode.value === '') {
    errorCode.style.display = 'inline-block';
  } else {
    errorCode.style.display = 'none';
  }
});

identificationBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(inputPw.value !== '' && inputCode.value !== '') {
    alert('본인인증이 완료되었습니다.');
    window.location.href = '08-2-mypage-edit(2).html';
  } else {
    alert('입력란이 비어있습니다.');
    errorPw.style.display = 'inline-block';
    errorCode.style.display = 'inline-block';
  }
  inputPw.value = '';
  inputCode.value = '';
});




// 08-2-mypage-edit(2)
// const resetPw = document.querySelector('.resetPw');
// const resetPwChk = document.querySelector('.resetPw_chk');
// const errorResetPw = document.querySelector('.errorPw');

// const birth = document.querySelectorAll('.mypage_userInfo_edit .birth');
// const errorBirth = document.querySelector('.mypage_userInfo_edit .errorBirth');

// const email = document.querySelectorAll('.mypage_userInfo_edit .email');
// const errorEmail = document.querySelector('.mypage_userInfo_edit .errorEmail');

// const addressHome = document.querySelectorAll('.mypage_userInfo_edit .addressHome');
// const errorAddHome = document.querySelector('.mypage_userInfo_edit .errorAddHome');

// const addressCenter = document.querySelectorAll('.mypage_userInfo_edit .addressCenter');
// const errorAddCenter = document.querySelector('.mypage_userInfo_edit .errorCenter');

// const p1 = document.querySelector('.mypage_userInfo_edit #p1');
// const p2 = document.querySelector('.mypage_userInfo_edit #p2');
// const p3 = document.querySelector('.mypage_userInfo_edit #p3');

// const editBtn = document.querySelector('.edit_btn #editBtn');


// resetPwChk.addEventListener('input', () => {
//   if(resetPw !== resetPwChk) {
//   errorResetPw.style.display = 'inline-block';
//   } else {
//     errorResetPw.style.display = 'none';
//   }
// });



// editBtn.addEventListener('click', () => {
//   // el.preventDefault();

//   window.location.href = '/html/08-1-mypage.html';
// });




// 08-3-mypage-order
const allProduct = document.querySelector('.allProduct');
const reservedProduct = document.querySelector('.reservedProduct');
const orderChkBtn = document.querySelector('.orderChk_btn');
const historyBox = document.querySelector('.mypage_shoppingInfo_order_history');

orderChkBtn.addEventListener('click', () => {
  if(reservedProduct.contains('#selected_btn')) {
    historyBox.style.display = "none";
  } else {
    historyBox.style.display = "block";
  }
})

allProduct.addEventListener('click', () => {
  allProduct.style.display = 'inline-block';
  allProduct.style.border = '1px solid var(--main-green)';
  allProduct.style.color = 'var(--main-green)';
});