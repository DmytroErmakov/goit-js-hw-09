import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

document.body.style.backgroundColor = "#ece5da";
const TIMER_DELAY = 1000;
let intervalId = null;
let selectedDate = null;
let currentDate = null;

const refs = {
    dateTime: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("button[data-start]"),
    daysRemaining: document.querySelector("[data-days]"),
    hoursRemaining: document.querySelector("[data-hours]"),
    minutesRemaining: document.querySelector("[data-minutes]"),
    secondsRemaining: document.querySelector("[data-seconds]"),
};


refs.startBtn.disabled = true;
refs.startBtn.addEventListener("click", timerStart);

let remainingTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    onDateCheck(selectedDates);
  },
};

flatpickr(refs.dateTime, options);

function onDateCheck(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  currentDate = new Date().getTime();

  if (selectedDate > currentDate) {
    refs.startBtn.disabled = false;
 
    return;
  }
    alert ("Please choose a date in the future");
}

function timerStart() {
  intervalId = setInterval(() => {
    currentDate = new Date().getTime();
    if (selectedDate - currentDate <= 1000) {
      clearInterval(intervalId);
      refs.startBtn.disabled = true;
      refs.dateTime.disabled = false;
      
      return;
    } else {
      refs.startBtn.disabled = true;
      refs.dateTime.disabled = true;
      currentDate += 1000;
      remainingTime = Math.floor(selectedDate - currentDate);
      convertMs(remainingTime);
    }
  }, TIMER_DELAY);
}

function createMarkup({ days, hours, minutes, seconds }) {
  refs.daysRemaining.textContent = days;
  refs.hoursRemaining.textContent = hours;
  refs.minutesRemaining.textContent = minutes;
  refs.secondsRemaining.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  createMarkup({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}