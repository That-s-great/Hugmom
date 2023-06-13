// 08-2-mypage-edit(1)
const inputPw = document.querySelector('.mypage_userInfo_identification .inputPw');
const inputCode = document.querySelector('.mypage_userInfo_identification .inputCode');
const errorPw = document.querySelector('.mypage_userInfo_identification .errorM_pw');
const errorCode = document.querySelector('.mypage_userInfo_identification .errorM_code');
const identificationBtn = document.querySelector('.mypage_userInfo_identification .identification_btn');

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
const resetPw = document.querySelector('.mypage_userInfo_edit .resetPw');
const resetPwChk = document.querySelector('.mypage_userInfo_edit .resetPw_chk');
const errorResetPw = document.querySelector('.mypage_userInfo_edit .errorPw');

const birth = document.querySelectorAll('.mypage_userInfo_edit .birth');
const errorBirth = document.querySelector('.mypage_userInfo_edit .errorBirth');

const email = document.querySelectorAll('.mypage_userInfo_edit .email');
const errorEmail = document.querySelector('.mypage_userInfo_edit .errorEmail');

const addressHome = document.querySelectorAll('.mypage_userInfo_edit .addressHome');
const errorAddHome = document.querySelector('.mypage_userInfo_edit .errorAddHome');

const addressCenter = document.querySelectorAll('.mypage_userInfo_edit .addressCenter');
const errorAddCenter = document.querySelector('.mypage_userInfo_edit .errorCenter');

const p1 = document.querySelector('.mypage_userInfo_edit #p1');
const p2 = document.querySelector('.mypage_userInfo_edit #p2');
const p3 = document.querySelector('.mypage_userInfo_edit #p3');

const editBtn = document.querySelector('.edit_btn.editBtn');

editBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(resetPw.value !== '' && resetPwChk.value !== '' && birth !== '' && birth !== '선택' && email.value !== '' 
  && addressHome.value !== '' && addressCenter.value !== '' && p1 !== '' && p2 !== '' && p3 !== '') {
    alert('회원정보가 수정되었습니다.');
    window.location.href = '08-1-mypage.html';
  } else {
    alert('입력란이 비어있습니다.');
  }
});