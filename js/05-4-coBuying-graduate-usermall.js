
let time = 3 * (24 * 60 * 60 * 1000); //3일의 시간
setInterval(function() {
  if(time >= 0) {
    let hour = Math.floor(time / (60 * 60 * 1000));
    let min = Math.floor(hour % (60 * 1000));
    console.log(hour, min);
    time = time - 1000;
  }
}, 1000);