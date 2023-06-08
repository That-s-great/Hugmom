// 08-mypage-edit(2) - 미완성 
let isStarted = false;
const result = document.querySelector('.result-num');
const btn = document.querySelector('.send-btn');
const completeBtn = document.querySelector('.complete');
const resultTime = document.querySelector('.result-time');

const changeFocus1 = () => {
  let phone1 = document.querySelector('#p1').value;
  if(phone1.length === 3) {
    document.querySelector('#p2').focus();
  }
}
const changeFocus2 = () => {
  let phone2 = document.querySelector('#p2').value;
  if(phone2.length === 4) {
    document.querySelector('#p3').focus();
  }
}
const changeFocus3 = () => {
  let p1 = document.querySelector('#p1').value;
  let p2 = document.querySelector('#p2').value;
  let p3 = document.querySelector('#p3').value;

  if(p1 && p2 && p3) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if(isStarted === false) {
    // 카운터가 작동중일 때
    isStarted = true;
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    result.innerText = token;
    result.style.color = `#${token}`;
  
    let time = 180;

    let timer = setInterval(function () {
      if(time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        resultTime.innerText = min + " : " + sec;
        time -= 1;
      } else {
        // 카운터 작동이 끝났을 때
        completeBtn.disabled = true;
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000); 
  }
});
