const inquiryBtn = document.querySelector(".btn_inquiry_submit button");
const inquiryText = document.querySelector(".inquiry_text_input textarea");
const inquirySel1 = document.querySelector("#select_1");
const inquirySel2 = document.querySelector("#select_2");
const inquiryTitle = document.querySelector(".inquiry_title input");

inquiryBtn.addEventListener("click", () => {
  if (inquirySel1.value === "0") {
    alert("문의유형을 선택해주세요.");
    inquirySel1.focus();
  } else {
    if (inquirySel2.value === "0") {
      alert("상세유형을 선택해주세요.");
      inquirySel2.focus();
    } else {
      if (inquiryTitle.value === "") {
        alert("제목을 입력해주세요");
        inquiryTitle.focus();
      } else {
        if (inquiryText.value === "") {
          alert("문의하실 내용을 입력해주세요");
          inquiryText.focus();
        } else {
          alert("문의하신 내용이 등록되었습니다.");
          inquirySel1.value = "0";
          inquirySel2.value = "0";
          inquiryTitle.value = "";
          inquiryText.value = "";
        }
      }
    }
  }
});
