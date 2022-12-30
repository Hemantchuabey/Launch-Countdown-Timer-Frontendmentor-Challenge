const countDown = () => {
  const endDate = new Date("December 31,2022 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = endDate - now;
  const seconds = 1000; //becz 1000ms == 1s
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const timeDays = Math.floor(difference / days);
  const timeHours = Math.floor((difference % days) / hours);
  const timeMinutes = Math.floor((difference % hours) / minutes);
  const timeSeconds = Math.floor((difference % minutes) / seconds);
  console.log(timeHours);
};
countDown();

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
