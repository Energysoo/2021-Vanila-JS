const clock = document.querySelector(".practice-clock"),
title =  clock.querySelector("h1");

function getTime(){
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today. getSeconds();
    title.innerText = `${hours <10 ? `0${hours}`:hours}:${minutes <10 ? `0${minutes}`:minutes}:${seconds <10 ? `0${seconds}`:seconds}`;
}

function init(){
getTime();
setInterval(getTime, 1000)
    }

init();