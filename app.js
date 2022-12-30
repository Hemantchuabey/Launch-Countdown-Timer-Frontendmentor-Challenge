const countDown = () => {
  const endDate = new Date("December 31,2022 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = endDate - now;
  const seconds = 1000; //becz 1000ms == 1s
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  let timeDays = Math.floor(difference / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);
  console.log(timeHours);

  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
};

setInterval(countDown, 1000);

// const makeChange = () => {
//   const date = new Date();
//   document.querySelector(".para").textContent = date
//     .getSeconds()
//     .toLocaleString();
//   console.log("first");
// };

// const date = new Date();

// // setTimeout(() => {
// //   document.querySelector(".alwaysShow").textContent = date
// //     .getSeconds()
// //     .toLocaleString();
// // }, 1000);

// document.querySelector(".btn").addEventListener("click", makeChange);
