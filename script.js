const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const buton = document.getElementById("buton");

var interval;
var afterStopInterval;
var settings = {
  duration: "1000",
  sec: 0,
  min: 0,
  hr: 0,
};
init(settings);
const formatControl = () => {
  seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);
  minutes < 10 ? (minutes = `0${minutes}`) : (minutes = minutes);
  hours < 10 ? (hours = `0${hours}`) : (hours = hours);
};
const lostTimeFormatControl = () => {
  if (settings.sec > 60) {
    settings.sec = 0;
    settings.min++;
  }
  if (settings.min > 60) {
    settings.min = 0;
    settings.hr++;
  }
};
const dates = () => {
  date = new Date();
  now = date.toDateString();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
};
const realTime = () => {
  dates();
  formatControl();
  content1.innerHTML = `${now} - ${hours}:${minutes}:${seconds}`;
};
function init(settings) {
  interval = setInterval(function () {
    realTime();
  }, settings.duration);
}
function afterStop(settings) {
  afterStopInterval = setInterval(function () {
    settings.sec++;
    lostTimeFormatControl();
    content2.innerHTML = `lost time  ${settings.hr}:${settings.min}:${settings.sec}`;
  }, settings.duration);
}
const buttonEffect = () => {
  buton.classList.toggle("active");
  if (buton.classList.contains("stop")) {
    clearInterval(interval);
    afterStop(settings);
    buton.textContent = "continue"
    buton.classList.toggle("stop")
    buton.classList.toggle("continue")
  } else if (buton.classList.contains("continue")) {
    init(settings);
    clearInterval(afterStopInterval);
    buton.textContent = "stop"
    buton.classList.toggle("continue")
    buton.classList.toggle("stop")
  }
  
};
buton.addEventListener("click", () => {
  buttonEffect();
});
