const content1 = document.querySelector(".content1");

const formatControl = () => {
  seconds < 10 ? (seconds = `0${seconds}`) : (seconds = seconds);
  minutes < 10 ? (minutes = `0${minutes}`) : (minutes = minutes);
  hours < 10 ? (hours = `0${hours}`) : (hours = hours);
  day < 10 ? (day = `0${day}`) : (day = day);
  month < 10 ? (month = `0${month}`) : (month = month);
};
const dates = () => {
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth();
  day = date.getDate();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
};
const  realTime = () => {
  dates();
  formatControl();
  content1.innerHTML = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
};
const myinterval = () =>{
    setInterval(() => {
        realTime();
    },1000)
}
myinterval();


