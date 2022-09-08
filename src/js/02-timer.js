import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {  
      const currentDate = new Date();
      if(selectedDates[0].getTime() < currentDate.getTime()){
        const message = "Doctor, Doctor Who? It's not a TARDIS! Please select the correct date. We need back to the future.";
        Notiflix.Report.failure('Please select the correct date', message, 'Back to the future');
        btnStart.disabled = true; 
        return
      }
      console.log(timerId)
      clearInterval(timerId);
      resetDisplayTimer()
      endDate =selectedDates[0].getTime();
      btnStart.disabled = false;
    },
};

const datatimePicker = document.querySelector("#datetime-picker")
const btnStart = document.querySelector("button[data-start]")

let endDate;
let timerId;

btnStart.disabled = true;
btnStart.addEventListener("click", onTimerStart);

flatpickr(datatimePicker, options);
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

function onTimerStart(e){
  btnStart.disabled = true;
  timerId = setInterval(displayTimer, 500);
}

function resetDisplayTimer(){
  const daysDisplay = document.querySelector("span[data-days]")
  const hoursDisplay = document.querySelector("span[data-hours]")
  const minutesDisplay = document.querySelector("span[data-minutes]")
  const secondsDisplay = document.querySelector("span[data-seconds]")
  daysDisplay.textContent = "00"; 
  hoursDisplay.textContent = "00";
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
}

function displayTimer(){
  const currentDate = new Date();
  const daysDisplay = document.querySelector("span[data-days]")
  const hoursDisplay = document.querySelector("span[data-hours]")
  const minutesDisplay = document.querySelector("span[data-minutes]")
  const secondsDisplay = document.querySelector("span[data-seconds]")

  const {days, hours, minutes, seconds} =convertMs(endDate- currentDate.getTime())

  if(seconds<0){
    resetDisplayTimer()
    clearInterval(timerId);
    alert("Welcome to the future")
    return
  }
  daysDisplay.textContent = days.toString().padStart(2, "0");
  hoursDisplay.textContent = hours.toString().padStart(2, "0");;
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}