$(document).ready(function () {
  let theLetters = "abcdefghijklmnopqrstuvwxyz"; //You can customize what letters it will cycle through
  let ctnt = document.querySelector("#test").innerText; // Your text goes here
  let speed = 10; // ms per frame
  let increment = 8; // frames per step. Must be >2

  let clen = ctnt.length;
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";
  //Call self x times, whole function wrapped in setTimeout
  (function rustle(i) {
    setTimeout(function () {
      if (--i) {
        rustle(i);
      }
      nextFrame(i);
      si = si + 1;
    }, speed);
  })(clen * increment + 1);
  function nextFrame(pos) {
    for (i = 0; i < clen - stri; i++) {
      //Random number
      let num = Math.floor(theLetters.length * Math.random());
      //Get random letter
      let letter = theLetters.charAt(num);
      block = block + letter;
    }
    if (si == increment - 1) {
      stri++;
    }
    if (si == increment) {
      // Add a letter;
      // every speed*10 ms
      fixed = fixed + ctnt.charAt(stri - 1);
      si = 0;
    }
    $("#test").html(fixed + block);
    block = "";
  }
});
