let clock = document.querySelector(".clock");

function updateTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

    setTimeout(updateTime, 1000);
}


updateTime();

let date = document.querySelector(".date");

function updateDate() {
    let day = new Date().getDate();
    let months = new Date().getMonth() + 1;
    let years = new Date().getFullYear();

    date.innerHTML = `${day}-${months}-${years}`;
}

updateDate();