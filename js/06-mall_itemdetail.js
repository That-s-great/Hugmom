const minus = document.querySelector(".fa-minus");
const plus = document.querySelector(".fa-plus");
const price = document.querySelector(".price");
const num = document.querySelector(".num");
const total = document.querySelector(".total");
const comment = document.querySelectorAll(".comment");

const item = document.getElementById("item");

item.addEventListener("change", () => {
  num.innerText = "1";
  const value = item.options[item.selectedIndex].value;
  if (value === "no_select") {
    total.innerText = 0;
  } else {
    total.innerText = parseInt(value).toLocaleString();
  }
});

let i = 1;
minus.addEventListener("click", () => {
  let value = item.options[item.selectedIndex].value;
  if (i > 1) {
    i--;
    num.innerText = i;
    total.innerText = (parseInt(value) * i).toLocaleString();
  } else {
    minus.setAttribute("disabled", "disabled");
    alert("1개 이상 주문해야합니다.");
  }
});
plus.addEventListener("click", () => {
  const value = item.options[item.selectedIndex].value;
  if (value === "no_select") {
    plus.setAttribute("disabled", "disabled");
    alert("상품을 선택해주세요.");
  } else {
    let value = item.options[item.selectedIndex].value;
    i++;
    num.innerText = i;
    total.innerText = (parseInt(value) * i).toLocaleString();
  }
});

const cartButton = document.querySelector(".cartbtn");

cartButton.addEventListener("click", function () {
  const value = item.options[item.selectedIndex].value;
  if (value === "no_select") {
    alert("상품을 선택해주세요");
  } else {
    alert("장바구니에 상품이 담겼습니다.");
    item.selectedIndex = 0;
    num.innerText = 1;
    total.innerText = 0;
  }
});
comment.forEach(function (e) {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  let comment_content = e.currentTarget.classList;

  if (comment_content.contains("open")) {
    comment_content.remove("open");
  } else {
    comment.forEach(function (e) {
      e.classList.remove("open");
    });
    comment_content.add("open");
  }
}

const question_list = document.querySelectorAll(".question-list");
const qcount = document.querySelector(".qcount");
qcount.innerText = question_list.length;

const ccount = document.querySelectorAll(".ccount");

ccount.forEach((e) => {
  e.innerText = comment.length;
});

const lock = document.querySelectorAll(".lock");

lock.forEach((e) => {
  e.addEventListener("click", () => {
    alert("비밀글입니다.");
  });
});

// Get the comment elements
const commentElements = document.querySelectorAll(".comment");

// Loop through each comment element
commentElements.forEach((commentElement, index) => {
  // Get the comment_num element within the comment
  const commentNumElement = commentElement.querySelector(".comment_num");

  // Set the comment_num text to the index + 1
  commentNumElement.textContent = index + 1;
});
// Get the comment count elements
const commentCountElements = document.querySelectorAll(".commentcount span");

// Hide all comment elements initially
commentElements.forEach((commentElement) => {
  commentElement.style.display = "none";
});

// Show the first five comments initially
for (let i = 0; i < 5 && i < commentElements.length; i++) {
  commentElements[i].style.display = "block";
}

// Loop through each comment count element
commentCountElements.forEach((element, index) => {
  // Add click event listener to each comment count element
  element.addEventListener("click", () => {
    // Hide all comment elements
    commentElements.forEach((commentElement) => {
      commentElement.style.display = "none";
    });

    // Remove 'active' class from all comment count elements
    commentCountElements.forEach((countElement) => {
      countElement.classList.remove("active");
    });

    // Calculate the starting and ending index for comments to be displayed
    const start = index * 5;
    const end = start + 5;

    // Show the selected comments based on the calculated indexes
    for (let i = start; i < end && i < commentElements.length; i++) {
      commentElements[i].style.display = "block";
    }

    // Add 'active' class to the clicked comment count element
    element.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const unlockElements = document.querySelectorAll(
    ".showquestion .title.unlock"
  );
  const questionContentElements =
    document.querySelectorAll(".question_content");

  unlockElements.forEach((unlockElement) => {
    unlockElement.addEventListener("click", () => {
      const questionContentElement =
        unlockElement.parentNode.nextElementSibling;

      questionContentElements.forEach((contentElement) => {
        if (contentElement !== questionContentElement) {
          contentElement.style.display = "none";
        }
      });

      questionContentElement.style.display =
        questionContentElement.style.display === "none" ? "block" : "none";
    });
  });
});

const buybtn_box = document.querySelector(".buybtn_mobile");
const buybtn = document.querySelector(".buybtn_mobile_fix");
const select_itemwrap = document.querySelector(".select_itemwrap");
const buyboxclose = document.querySelector(".closeline");

buybtn.addEventListener("click", () => {
  select_itemwrap.classList.add("buybox_open");
});
buyboxclose.addEventListener("click", () => {
  select_itemwrap.classList.remove("buybox_open");
});

const sharebtn = document.querySelector(".sharebtn");
sharebtn.addEventListener("click", () => {
  const URL = window.location.href;

  //input 요소를 임시로 생성하고, 해당 요소에 주소를 설정한 후에 사용자가 텍스트를 선택하고 복사할 수 있도록 함
  const tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = URL;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("링크가 복사되었습니다.");
});
