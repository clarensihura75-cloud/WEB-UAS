function digitalClock(){
  document.getElementById("clock").innerText =
    new Date().toLocaleString();
}
setInterval(digitalClock, 1000);
