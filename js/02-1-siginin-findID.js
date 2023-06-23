// 휴대폰 인증
const getTokenBtn = document.querySelector(".find_get_token");
const nameInput1 = document.querySelectorAll(".signin_find_name")[0];
const phoneInput = document.querySelector(".signin_find_phone");

getTokenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameVal = nameInput1.value;
  const phoneVal = phoneInput.value;
  if (nameVal.length == 0) {
    document.querySelector(".error_m_1").style.display = "block";
    nameInput1.focus();
  }
  if (phoneVal.length == 0) {
    document.querySelector(".error_m_2").style.display = "block";
  }
  if (!nameVal == 0 && !phoneVal == 0) {
    alert("인증번호를 발송하였습니다.");
  }
});

nameInput1.addEventListener("keyup", () => {
  const nameVal = nameInput1.value;

  if (nameVal.length > 0) {
    document.querySelector(".error_m_1").style.display = "none";
  } else {
    document.querySelector(".error_m_1").style.display = "block";
  }
});
phoneInput.addEventListener("keyup", () => {
  const phoneVal = phoneInput.value;
  if (phoneVal.length > 0) {
    document.querySelector(".error_m_2").style.display = "none";
  } else {
    document.querySelector(".error_m_2").style.display = "block";
  }
});

// 이메일 인증
