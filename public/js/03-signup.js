const isValid = {
  name: false,
  id: false,
  password: false,
  confirmPassword: false,
  birthDate: false,
  email: false,
  location: false,
  code: false,
  careCenter: false,
};

// 이름 확인
const nameInput = document.getElementById("user_info_name");
const errorName = document.getElementById("error_name");

nameInput.addEventListener("blur", validateName);

function validateName() {
  const name = nameInput.value;

  if (name === "") {
    errorName.innerText = "이름을 입력해주세요.";
    isValid.name = false;
  } else if (name.length < 2 || name.length > 4) {
    errorName.innerText = "이름의 길이는 2~4자 입니다";
    isValid.name = false;
  } else {
    errorName.innerText = "";
    isValid.name = true;
  }
}

// 아이디 확인
const idInput = document.querySelector("#user_info_id");
const idCheckButton = document.querySelector(".line_id_check button");
const idCheckResult = document.querySelector(".id_check_result");

idInput.addEventListener("input", updateButtonStyle);
idCheckButton.addEventListener("click", checkIdValidity);

function updateButtonStyle() {
  idCheckButton.style.backgroundColor = "#72981e"; // 버튼 배경색 변경
  idCheckButton.style.color = "#fff"; // 버튼 텍스트 컬러 변경
}

function checkIdValidity(e) {
  e.preventDefault();
  const id = idInput.value;
  let isValidId = true;
  let errorMessage = "";

  // 길이 제한: 최소 4자 이상, 최대 20자까지
  if (id.length < 4) {
    isValidId = false;
    errorMessage = "아이디는 4자이상이여야 합니다.";
  }

  // 허용 문자: 알파벳 (대문자 및 소문자), 숫자만 허용
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(id)) {
    isValidId = false;
    errorMessage = "아이디는 알파벳과 숫자만 허용됩니다.";
  }

  // 공백 제한
  if (id.includes(" ")) {
    isValidId = false;
    errorMessage = "아이디에 공백은 포함될 수 없습니다.";
  }

  // 유일성: 이미 사용 중인 아이디인지 확인하는 로직을 추가해야 합니다.

  if (isValidId) {
    idCheckResult.innerText = "사용 가능한 아이디입니다.";
    idCheckResult.style.color = "#72981e"; // 초록색으로 표시
    isValid.id = true;
  } else {
    idCheckResult.innerText = errorMessage;
    idCheckResult.style.color = "#ff0000"; // 빨간색으로 표시
    isValid.id = false;
  }
}

// 비밀번호 유효성 검사
function validatePassword() {
  const passwordInput = document.getElementById("user_info_pw");
  const password = passwordInput.value;
  const errorElement = document.getElementById("error_pw");

  if (password.length < 4) {
    errorElement.innerText = "비밀번호는 최소 4자 이상이어야 합니다.";
    errorElement.style.color = ""; // 오류 메시지의 스타일 초기화
    isValid.password = false;
    return false;
  }

  // 복잡성 요구사항: 소문자, 숫자, 특수문자는 무조건 사용, 대문자는 선택사항
  if (!/[a-z]/.test(password) || !/[0-9]/.test(password)) {
    errorElement.innerText = "비밀번호는 소문자, 숫자를 포함해야 합니다.";
    errorElement.style.color = ""; // 오류 메시지의 스타일 초기화
    isValid.password = false;
    return false;
  }

  // 공백 제한
  if (password.includes(" ")) {
    errorElement.innerText = "비밀번호에 공백을 포함할 수 없습니다.";
    errorElement.style.color = ""; // 오류 메시지의 스타일 초기화
    isValid.password = false;
    return false;
  }

  // 모든 조건을 만족하는 경우
  errorElement.innerText = "비밀번호 사용이 가능합니다.";
  errorElement.style.color = "#72981e"; // 비밀번호 사용 가능한 경우의 스타일 설정
  isValid.password = true;
  return true;
}

// 비밀번호 유효성 검사 트리거 설정
const passwordInput = document.getElementById("user_info_pw");
passwordInput.addEventListener("blur", validatePassword);

// 비밀번호 확인 유효성 검사 함수
function validatePasswordConfirmation() {
  const passwordInput = document.getElementById("user_info_pw");
  const confirmPasswordInput = document.getElementById("user_info_confirm_pw");
  const confirmPassword = confirmPasswordInput.value;
  const errorElement = document.getElementById("error_pw2");

  // 비밀번호와 비밀번호 확인이 일치하지 않는 경우
  if (passwordInput.value !== confirmPassword) {
    errorElement.innerText = "비밀번호가 일치하지 않습니다.";
    errorElement.style.color = "";
    isValid.confirmPassword = false;
    return false;
  }

  // 비밀번호와 비밀번호 확인이 공백인 경우
  if (passwordInput.value === "" && confirmPassword === "") {
    errorElement.innerText = "비밀번호를 확인해 주세요.";
    errorElement.style.color = "";
    isValid.confirmPassword = false;
    return false;
  }

  // 일치하는 경우
  errorElement.innerText = "비밀번호가 일치합니다!";
  errorElement.style.color = "#72981e"; // 일치하는 경우의 스타일 설정
  isValid.confirmPassword = true;
  return true;
}

// 비밀번호 확인 유효성 검사 트리거 설정
const confirmPasswordInput = document.getElementById("user_info_confirm_pw");
confirmPasswordInput.addEventListener("blur", validatePasswordConfirmation);

// 생년월일 유효성 검사
const birthInput = document.getElementById("user_info_birth_date");
const errorBirth = document.getElementById("error_birth");

birthInput.addEventListener("blur", validateBirthDate);

function validateBirthDate() {
  const birthDate = birthInput.value;

  // 1. 형식 검사: yyyymmdd
  const regex = /^\d{8}$/;
  if (!regex.test(birthDate)) {
    errorBirth.innerText = "생년월일은 yyyymmdd 형식으로 입력해야 합니다.";
    isValid.birthDate = false;
    return false;
  }

  // 모든 조건을 만족하는 경우
  errorBirth.innerText = "";
  isValid.birthDate = true;
  return true;
}

function isValidDateFormat(birthDate) {
  const regex = /^\d{8}$/;
  return regex.test(birthDate);
}

function isValidDateRange(birthDate) {
  const currentDate = new Date();
  const year = parseInt(birthDate.substring(0, 4));
  const month = parseInt(birthDate.substring(4, 6)) - 1;
  const day = parseInt(birthDate.substring(6, 8));
  const birthDateObject = new Date(year, month, day);

  return birthDateObject <= currentDate;
}

function isValidAgeRestriction(birthDate) {
  const currentDate = new Date();
  const year = parseInt(birthDate.substring(0, 4));
  const month = parseInt(birthDate.substring(4, 6)) - 1;
  const day = parseInt(birthDate.substring(6, 8));
  const birthDateObject = new Date(year, month, day);

  const ageDiffMs = currentDate - birthDateObject;
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age >= 20;
}

// 이메일
const emailInput = document.querySelector("#user_info_email");
const errorEmail = document.querySelector("#error_email");

emailInput.addEventListener("blur", validateEmail);

function validateEmail() {
  const email = emailInput.value;
  let errorMessage = "";

  // 형식 검사
  const formatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formatRegex.test(email)) {
    errorMessage = "유효한 이메일 주소를 입력해야 합니다.";
    errorEmail.innerText = errorMessage;
    errorEmail.style.color = "";
    isValid.email = false;
    return false;
  }

  // 도메인 검사
  const domain = email.split("@")[1];
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domain)) {
    errorMessage = "유효한 도메인을 사용해야 합니다.";
    errorEmail.innerText = errorMessage;
    errorEmail.style.color = "";
    isValid.email = false;
    return false;
  }

  // 유효한 이메일 주소인 경우
  errorEmail.style.color = "#72981e";
  errorEmail.innerText = "이메일 사용이 가능합니다.";
  isValid.email = true;
}

// 주소 우편번호 API
const addressInput = document.querySelector("#user_info_location");
const errorAddress = document.querySelector("#error_location");
const addressBtn = document.querySelector("#address_btn");
addressBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let width = 500; //팝업의 너비
  let height = 600; //팝업의 높이
  new daum.Postcode({
    width: width,
    height: height,
    oncomplete: function (data) {
      document.querySelector("#zip_code").value = data.zonecode;
      let fullAddr = "";
      let extraAddr = "";

      if (data.userSelectedType === "R") {
        fullAddr = data.roadAddress;
      } else {
        fullAddr = data.jibunAddress;
      }

      if (data.userSelectedType === "R") {
        if (data.bname !== "") {
          extraAddr += data.bname;
        }
        if (data.buildingName !== "") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }

        fullAddr += extraAddr !== "" ? " (" + extraAddr + ")" : "";
      }
      document.querySelector("#address_1").value = fullAddr;
      document.querySelector("#user_info_location").focus();
    },
  }).open({
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
  });
});

function validateLocation() {
  const location = addressInput.value;

  if (location === "") {
    errorAddress.innerText = "주소를 입력해주세요.";
    isValid.location = false;
  } else {
    errorAddress.innerText = "";
    isValid.location = true;
  }
}

//임산부 코드
const codeInput = document.querySelector("#user_info_pregnant_women_code");
const errorCode = document.querySelector(".pregnant_women_code_result");

function validateCode() {
  const code = codeInput.value;

  if (code === "") {
    errorCode.innerText = "임산부코드를 입력해주세요.";
    isValid.code = false;
  } else {
    errorCode.innerText = "";
    isValid.code = true;
  }
}

// 산후조리원 주소 API
const careAddressInput = document.querySelector("#carecenter_address");
const errorCareAddress = document.querySelector("#error_sub_location");
const careCenterBtn = document.querySelector("#carecenter_btn");
careCenterBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let width = 500; //팝업의 너비
  let height = 600; //팝업의 높이
  new daum.Postcode({
    width: width,
    height: height,
    oncomplete: function (data) {
      let fullAddr = "";
      let extraAddr = "";

      if (data.userSelectedType === "R") {
        fullAddr = data.roadAddress;
      } else {
        fullAddr = data.jibunAddress;
      }

      if (data.userSelectedType === "R") {
        if (data.bname !== "") {
          extraAddr += data.bname;
        }
        if (data.buildingName !== "") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }

        fullAddr += extraAddr !== "" ? " (" + extraAddr + ")" : "";
      }
      careAddressInput.value = fullAddr;
      document.querySelector("#carecenter_info_sub").focus();
    },
  }).open({
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
  });
});

function validateCareLocation() {
  const careLocation = careAddressInput.value;

  if (careLocation === "") {
    errorCareAddress.innerText = "주소를 입력해주세요.";
    isValid.careCenter = false;
  } else {
    errorCareAddress.innerText = "";
    isValid.careCenter = true;
  }
}

// 약관 동의
const agreementCheck1 = document.querySelector("#agreement_check1");
const agreementCheck2 = document.querySelector("#agreement_check2");
const agreementCheck3 = document.querySelector("#agreement_check3");
const allAgreement = document.querySelector("#all_agreement");

agreementCheck1.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#agreement_circle_1").classList.toggle("check");
  updateAgreementState();
});
agreementCheck2.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#agreement_circle_2").classList.toggle("check");
  updateAgreementState();
});
agreementCheck3.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#agreement_circle_3").classList.toggle("check");
  updateAgreementState();
});

allAgreement.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll(".fa-circle-check").classList.toggle("check");
  updateAgreementState();
});

function updateAgreementState() {
  const checkCircles = document.querySelectorAll(".agreement_circle");
  let isAllChecked = true;

  checkCircles.forEach((circle) => {
    if (!circle.classList.contains("check")) {
      isAllChecked = false;
    }
  });

  if (isAllChecked) {
    allAgreement.classList.add("check");
  } else {
    allAgreement.classList.remove("check");
  }
}

// 전체 동의 체크 시 상태 업데이트
// 전체 동의 버튼 클릭 시
allAgreement.addEventListener("click", () => {
  const isChecked = allAgreement.classList.toggle("check");

  // 개별 동의 체크 박스들도 토글
  agreementCheck1.querySelector("i").classList.toggle("check", isChecked);
  agreementCheck2.querySelector("i").classList.toggle("check", isChecked);
  agreementCheck3.querySelector("i").classList.toggle("check", isChecked);
});

// 회원가입 버튼 클릭 시 유효성 검사
const signupButton = document.querySelector("#signup_button");
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateSignup();
});

function validateSignup() {
  // 모든 필드의 유효성을 확인
  validateName();
  checkIdValidity(new Event("click"));
  validatePassword();
  validatePasswordConfirmation();
  validateBirthDate();
  validateEmail();
  validateCode();
  validateLocation();
  validateCareLocation();

  // 약관 동의 확인
  const isAllAgreed = allAgreement.classList.contains("check");

  if (!isAllAgreed) {
    alert("약관에 동의해주세요.");
    return;
  }

  // 모든 필드가 유효한지 확인
  const isAllValid = Object.values(isValid).every((value) => value);

  if (isAllValid) {
    // 회원가입 성공 처리
    alert("회원가입이 완료되었습니다.");
    // 회원가입 성공 후 다른 페이지로 이동
  } else {
    // 유효하지 않은 필드가 있을 때 처리
    alert("입력 정보를 다시 확인해주세요.");
  }
}
