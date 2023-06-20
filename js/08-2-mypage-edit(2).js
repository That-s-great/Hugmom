const resetPw = document.querySelector('.mypage_userInfo_edit .resetPw');
const resetPwChk = document.querySelector('.mypage_userInfo_edit .resetPw_chk');
const errorPw = document.querySelector('.mypage_userInfo_edit .errorPw');

// 비밀번호 재설정, 비밀번호 재설정 확인
resetPwChk.addEventListener('input', () => {
  if(resetPw === resetPwChk) {
    errorPw.style.display = 'none';
  } else {
    errorPw.style.display = 'inline-block';
  }
})