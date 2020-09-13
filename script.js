const DaysElement = document.getElementById("days");
const HoursElement = document.getElementById("hours");
const MinutesElement = document.getElementById("mins");
const SecondsElement = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const TotalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(TotalSeconds / 3600 / 24);
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const mins = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds) % 60;

  console.log("Days: ", days);
  console.log("hours: ", hours);
  console.log("mins: ", mins);
  console.log("seconds: ", seconds);

  DaysElement.innerHTML = formatTime(days);
  HoursElement.innerHTML = formatTime(hours);
  MinutesElement.innerHTML = formatTime(mins);
  SecondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
