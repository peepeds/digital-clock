const hour = document.getElementById("hour");
const minute = document.getElementById("min");
const second = document.getElementById("sec");
const day = document.getElementById("day");
const date_time = document.getElementById("date");

setInterval(() => {
    let date = new Date();

    let ArrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentDay = date.getDay();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let currentDate = date.getDate();
    let ArrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    hr = (hr < 10) ? `0${hr}` : hr;
    min = (min < 10) ? `0${min}` : min;
    sec = (sec < 10) ? `0${sec}` : sec;

    day.innerHTML = ArrDay[currentDay];

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    date_time.innerHTML = `${currentDate} ${ArrMonth[currentMonth]} ${currentYear}`;

}, 1000);
