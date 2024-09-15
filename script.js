const hour = document.getElementById("hour");
const minute = document.getElementById("min");
const second = document.getElementById("sec");
const day = document.getElementById("day");
const date_time = document.getElementById("date");

let prevHour, prevMinute, prevSecond;

function updateTime() {
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

    // Format hour, minute, second to always have 2 digits
    hr = (hr < 10) ? `0${hr}` : hr;
    min = (min < 10) ? `0${min}` : min;
    sec = (sec < 10) ? `0${sec}` : sec;

    // Set the day
    day.innerHTML = ArrDay[currentDay];

    // Flip effect for time only when values change
    if (hr !== prevHour) {
        flipClock(hour, hr);
        prevHour = hr;
    }
    if (min !== prevMinute) {
        flipClock(minute, min);
        prevMinute = min;
    }
    if (sec !== prevSecond) {
        flipClock(second, sec);
        prevSecond = sec;
    }

    // Set the date
    date_time.innerHTML = `${currentDate} ${ArrMonth[currentMonth]} ${currentYear}`;
}

function flipClock(element, newVal) {
    const top = element.querySelector('.top');
    const bottom = element.querySelector('.bottom');

    // Perform the flip only if the new value is different
    if (top.textContent !== newVal) {
        bottom.textContent = newVal;  // Set new value in the bottom

        // Add the flip effect classes
        top.classList.add('new_top');
        bottom.classList.add('new_bottom');

        // After 800ms (duration of the flip animation), update the top content and remove classes
        setTimeout(() => {
            top.textContent = newVal;
            top.classList.remove('new_top');
            bottom.classList.remove('new_bottom');
        }, 800);  // Sesuaikan dengan durasi animasi yang lebih smooth
    }
}

// Call updateTime every second
setInterval(updateTime, 1000);
updateTime();  