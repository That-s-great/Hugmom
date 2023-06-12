// 08-2-edit(2)
const inputPw = document.querySelector('.mypage_userInfo_identification .inputPw').value;
const inputCode = document.querySelector('.mypage_userInfo_identification .inputCode');
const errorPw = document.querySelector('.mypage_userInfo_identification .errorM_pw');
const errorCode = document.querySelector('.mypage_userInfo_identification .errorM_code');
const indentificationBtn = document.querySelector('.mypage_userInfo_identification .indentification_btn');

// function showError() {
//   if(inputPw.value !== "") {
//     if(inputCode.value !== "") {
//       window.location.href = "/html/08-2-mypage-edit(2)";
//     } else {
//       alert("입력란이 비어있습니다.");
//       errorCode.style.display = "inline-block";
//     }
//   } else {
//     alert("입력란이 비어있습니다.");
//     errorPw.style.display = "inline-block";
//     errorCode.style.display = "inline-block";
//   }
// }

function showError() {
  if(inputPw == "") {
    errorPw.add.classList = "errorM_pw";
  } else {
    errorPw.classList.remove() = "errorM_pw";
  }
}