const coBuyingTimer = document.querySelectorAll(".co-timer");
let time = 12960; //3시간 36분을 초로 나타냄
let coTimer = setInterval(function() {
  if(time >= 0) {
    let hour = String(Math.floor(time / 3600)).padStart("2", 0);
    let timeOrigin = time % 3600;
    let min = String(Math.floor(timeOrigin / 60)).padStart("2", 0);
    let sec = String(time % 60).padStart("2", 0);
    time = time - 1;
    // console.log(`${hour}:${min}:${sec}`);

    coBuyingTimer.forEach((timer) => {
      timer.innerHTML =  `남은공구시간 ${hour}:${min}:${sec}`;
    });
  } else {
    clearInterval(coTimer);
  }
}, 1000);
